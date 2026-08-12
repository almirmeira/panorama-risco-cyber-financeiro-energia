#!/usr/bin/env python3
"""
Ponte de ingestão: MISP -> threat-live.json (camada operacional do painel).

Lê indicadores da instância MISP da CECyber, aplica o recorte financeiro
definido em taxonomia-financeira.json, descarta tudo que não for TLP
publicável e escreve um JSON estático que o painel consome em tempo de
execução. O painel continua sem backend: quem fala com o MISP é este script.

Fontes:
  - MISP (primária)  — a instância local, que por sua vez sincroniza os feeds
                       abertos (CIRCL OSINT, abuse.ch, botvrij).
  - ThreatFox (complementar) — o export público traz o nome da família de
                       malware de forma muito mais confiável que o texto livre
                       dos atributos MISP, e é dele que sai o recorte por
                       família bancária. Sem ele, o recorte financeiro fica
                       cego para a maior parte dos IoCs.

Uso:
    ./ingest_threat_intel.py [--saida CAMINHO] [--dias N] [--sem-misp]

Sai com código 0 mesmo em degradação parcial (uma fonte fora do ar): o painel
prefere dado parcial rotulado a tela vazia. Só falha se NENHUMA fonte
responder, para não sobrescrever um JSON bom com um vazio.
"""

import argparse
import json
import os
import re
import sys
import tempfile
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from datetime import datetime, timedelta, timezone

AQUI = os.path.dirname(os.path.abspath(__file__))
TAXONOMIA = os.path.join(AQUI, "taxonomia-financeira.json")

THREATFOX_URL = "https://threatfox.abuse.ch/export/json/recent/"
TIMEOUT = 45
UA = "CECyber-Panorama-Financeiro/1.0 (+https://score.cecyber.com)"

# Domínios de topo e marcadores que sugerem alvo brasileiro. Usado apenas para
# ROTULAR (bandeira "brasil"), nunca para decidir se um IoC é financeiro —
# essa decisão é sempre da taxonomia.
MARCADORES_BR = (".br", "brasil", "brazil")


def log(msg):
    print(f"{datetime.now(timezone.utc).isoformat(timespec='seconds')} | {msg}", file=sys.stderr)


def carregar_taxonomia():
    with open(TAXONOMIA, encoding="utf-8") as fh:
        return json.load(fh)


def normalizar_familia(bruto):
    """'win.grandoreiro' / 'Grandoreiro v2' -> 'grandoreiro'."""
    if not bruto:
        return ""
    s = bruto.lower()
    s = re.sub(r"^(win|elf|osx|apk|js|vbs|doc|xls)\.", "", s)
    return re.sub(r"[^a-z0-9]", "", s)


def defang(valor, tipo):
    """Neutraliza o indicador para exibição pública.

    Publicar IoC clicável numa página aberta é como distribuir a amostra: quem
    lê o painel é executivo, não analista de SOC. Defang é a convenção da área
    para citar indicador sem torná-lo acionável por acidente.
    """
    if tipo in ("url", "domain", "hostname", "ip", "ip:port", "ip-dst", "ip-src"):
        valor = valor.replace("http://", "hxxp://").replace("https://", "hxxps://")
        valor = re.sub(r"\.(?=[^.]*$)", "[.]", valor, count=1) if "." in valor else valor
    return valor


def buscar_json(url, headers=None, dados=None):
    req = urllib.request.Request(url, data=dados, headers={"User-Agent": UA, **(headers or {})})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as resp:
        return json.loads(resp.read().decode("utf-8", "replace"))


# --------------------------------------------------------------------------
# Fontes
# --------------------------------------------------------------------------

def coletar_threatfox(dias):
    """Export público do ThreatFox. Traz família de malware confiável."""
    bruto = buscar_json(THREATFOX_URL)
    corte = datetime.now(timezone.utc) - timedelta(days=dias)
    saida = []
    for _id, entradas in bruto.items():
        for e in entradas if isinstance(entradas, list) else [entradas]:
            visto = e.get("first_seen_utc") or ""
            try:
                quando = datetime.strptime(visto, "%Y-%m-%d %H:%M:%S").replace(tzinfo=timezone.utc)
            except ValueError:
                continue
            if quando < corte:
                continue
            saida.append({
                "valor": e.get("ioc_value", ""),
                "tipo": e.get("ioc_type", "desconhecido"),
                "familiaBruta": e.get("malware_printable") or e.get("malware") or "",
                "ameaca": e.get("threat_type") or "",
                "primeiraObs": quando.isoformat(),
                "confianca": e.get("confidence_level"),
                "tags": [t for t in (e.get("tags") or "").split(",") if t],
                "fonte": "ThreatFox (abuse.ch)",
                # O ThreatFox é público e sem restrição de redistribuição;
                # tratamos como TLP:CLEAR de forma explícita.
                "tlp": "tlp:clear",
            })
    return saida


def coletar_misp(base_url, api_key, dias, verificar_tls=False):
    """Atributos da instância MISP local via /attributes/restSearch."""
    import ssl

    ctx = ssl.create_default_context()
    if not verificar_tls:
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

    # ATENÇÃO ao filtro de recência. O parâmetro 'last' do restSearch olha o
    # timestamp do ATRIBUTO, que num feed recém-sincronizado é o momento da
    # importação — não a data do fato. Pedir 'last=14d' logo após ligar um
    # feed devolve o acervo histórico inteiro carimbado como recente: o CIRCL
    # OSINT, por exemplo, traz relatórios de 2015 (The Dukes, APT28) que
    # apareceriam no painel como atividade da semana. Por isso a recência real
    # é decidida abaixo, pela data do EVENTO.
    corpo = json.dumps({
        "returnFormat": "json",
        "enforceWarninglist": True,   # descarta ruído conhecido (CDNs, IP de infra)
        "includeEventTags": True,
        "limit": 5000,
        "page": 1,
    }).encode()

    req = urllib.request.Request(
        base_url.rstrip("/") + "/attributes/restSearch",
        data=corpo,
        headers={
            "Authorization": api_key,
            "Accept": "application/json",
            "Content-Type": "application/json",
            "User-Agent": UA,
        },
    )
    with urllib.request.urlopen(req, timeout=TIMEOUT, context=ctx) as resp:
        bruto = json.loads(resp.read().decode("utf-8", "replace"))

    corte = (datetime.now(timezone.utc) - timedelta(days=dias)).date()
    saida, descartados_antigos = [], 0
    for a in bruto.get("response", {}).get("Attribute", []):
        evento = a.get("Event") or {}
        # Data do evento = quando o fato foi reportado. É a única leitura
        # honesta de recência num acervo que acabou de ser sincronizado.
        try:
            data_evt = datetime.strptime(evento.get("date", ""), "%Y-%m-%d").date()
        except ValueError:
            descartados_antigos += 1
            continue
        if data_evt < corte:
            descartados_antigos += 1
            continue

        tags = [t.get("name", "") for t in (a.get("Tag") or [])]
        tags += [t.get("name", "") for t in (evento.get("Tag") or [])]
        # O título do evento é onde os feeds MISP costumam nomear a família
        # ("OSINT — Grandoreiro campaign targeting..."). Entra como candidato
        # à classificação, junto das tags.
        info = evento.get("info") or ""
        saida.append({
            "valor": a.get("value", ""),
            "tipo": a.get("type", "desconhecido"),
            "familiaBruta": "",
            "contexto": info,
            "ameaca": a.get("category") or "",
            "primeiraObs": datetime.combine(
                data_evt, datetime.min.time(), tzinfo=timezone.utc).isoformat(),
            "confianca": None,
            "tags": tags,
            "fonte": "MISP (instância CECyber)",
            "tlp": next((t for t in tags if t.lower().startswith("tlp:")), "tlp:clear"),
        })

    if descartados_antigos:
        log(f"MISP: {descartados_antigos} atributos fora da janela de {dias}d "
            f"(data do evento anterior a {corte}) — acervo histórico dos feeds")
    return saida


# --------------------------------------------------------------------------
# Recorte e agregação
# --------------------------------------------------------------------------

def tlp_publicavel(ioc, aceitos):
    return (ioc.get("tlp") or "").lower() in aceitos


def classificar_financeiro(ioc, taxonomia):
    """Retorna (é_financeiro, familia_resolvida) — decisão auditável.

    Duas portas de entrada, nenhuma heurística frouxa:
      1. a família de malware está na lista curada; ou
      2. o próprio dado traz marcação setorial explícita da fonte.
    """
    familias = taxonomia["familias"]
    chave = normalizar_familia(ioc.get("familiaBruta"))
    if chave in familias:
        return True, familias[chave]

    # Atribuição no nível da fonte: alguns feeds têm escopo inteiramente
    # financeiro, e é a única via para eles — o MISP importa feed CSV como um
    # evento agregado, sem família por indicador.
    contexto_baixa = (ioc.get("contexto") or "").lower()
    if contexto_baixa:
        for chave, fam in taxonomia.get("fontesFinanceiras", {}).get("porTituloDeEvento", {}).items():
            if chave in contexto_baixa:
                return True, fam

    tags_baixa = [t.lower() for t in ioc.get("tags", [])]
    setoriais = taxonomia["tagsSetoriais"]
    for t in tags_baixa:
        if any(t.startswith(p.lower()) for p in setoriais["prefixos"]):
            return True, None
        if any(p in t for p in setoriais["palavras"]):
            return True, None

    # A família pode vir escondida numa tag (comum em feeds MISP).
    for t in tags_baixa:
        k = normalizar_familia(t.split("=")[-1].strip('"'))
        if k in familias:
            return True, familias[k]

    # Último recurso: o título do evento MISP. Exige limite de palavra e nome
    # com pelo menos 5 letras — sem isso, "Coyote" casaria com qualquer texto
    # que mencione o animal e "Zeus" com qualquer relatório sobre mitologia ou
    # sobre a operação policial de mesmo nome. Casar por substring solta aqui
    # geraria falso positivo silencioso, que é o pior tipo num painel público.
    contexto = (ioc.get("contexto") or "").lower()
    if contexto:
        for chave, fam in familias.items():
            if len(chave) < 5:
                continue
            if re.search(rf"\b{re.escape(chave)}\b", re.sub(r"[^a-z0-9]+", " ", contexto)):
                return True, fam
    return False, None


def parece_brasil(ioc, familia):
    if familia and familia.get("regiao") == "br":
        return True
    v = (ioc.get("valor") or "").lower()
    return any(m in v for m in MARCADORES_BR)


def atualizar_historico(caminho, iocs_fin, retencao_dias=45):
    """Mantém o registro de quando NÓS vimos cada indicador pela primeira vez.

    Por que não usar o 'first_seen' da fonte para montar a linha do tempo: o
    export do ThreatFox é um dump rolante de adições recentes. Ele traz
    centenas de itens com data de hoje e de ontem, mas só algumas dezenas por
    dia duas semanas atrás — não porque o mundo estava mais calmo, e sim
    porque os itens antigos já saíram da janela do export. Um gráfico montado
    sobre isso desenharia uma rampa crescente até hoje em QUALQUER cenário,
    inclusive num de queda real. Seria um gráfico que mente por construção.

    Então a série temporal é construída a partir da nossa própria observação:
    cada ciclo registra os indicadores inéditos e o dia em que apareceram para
    nós. A série leva alguns dias para ganhar corpo, mas é honesta desde o
    primeiro ponto.
    """
    hoje = datetime.now(timezone.utc).date().isoformat()
    try:
        with open(caminho, encoding="utf-8") as fh:
            hist = json.load(fh)
    except (OSError, ValueError):
        hist = {"iniciadoEm": hoje, "primeiraVez": {}}

    vistos = hist.setdefault("primeiraVez", {})
    hist.setdefault("iniciadoEm", hoje)

    novos = 0
    for i in iocs_fin:
        chave = f"{i['tipo']}|{i['valor']}"
        if chave not in vistos:
            vistos[chave] = hoje
            novos += 1

    corte = (datetime.now(timezone.utc).date() - timedelta(days=retencao_dias)).isoformat()
    hist["primeiraVez"] = {k: v for k, v in vistos.items() if v >= corte}

    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=os.path.dirname(caminho), suffix=".tmp")
    with os.fdopen(fd, "w", encoding="utf-8") as fh:
        json.dump(hist, fh, separators=(",", ":"))
    os.replace(tmp, caminho)

    log(f"histórico: {novos} indicadores inéditos hoje, {len(hist['primeiraVez'])} na retenção")
    return hist, novos


def agregar(iocs_fin, dias, historico):
    por_familia = defaultdict(lambda: {"iocs": 0, "primeiraObs": None, "ultimaObs": None})
    tipos = Counter()
    ameacas = Counter()
    categorias = Counter()

    for i in iocs_fin:
        nome = i["familia"] or "Não atribuída"
        f = por_familia[nome]
        f["iocs"] += 1
        f["categoria"] = i.get("categoria")
        f["regiao"] = i.get("regiao")
        obs = i.get("primeiraObs")
        if obs:
            if not f["primeiraObs"] or obs < f["primeiraObs"]:
                f["primeiraObs"] = obs
            if not f["ultimaObs"] or obs > f["ultimaObs"]:
                f["ultimaObs"] = obs
        tipos[i["tipo"]] += 1
        if i.get("categoria"):
            categorias[i["categoria"]] += 1
        if i.get("ameaca"):
            ameacas[i["ameaca"]] += 1

    # Série a partir da nossa observação, nunca do first_seen da fonte.
    por_dia = Counter(historico["primeiraVez"].values())
    iniciado = historico["iniciadoEm"]
    hoje = datetime.now(timezone.utc).date()
    serie = []
    for d in range(dias - 1, -1, -1):
        dia = (hoje - timedelta(days=d)).isoformat()
        if dia < iniciado:
            continue        # antes da 1ª coleta não há observação nossa: não inventa ponto
        serie.append({"data": dia, "total": por_dia.get(dia, 0)})

    familias = [
        {"nome": n, **v} for n, v in
        sorted(por_familia.items(), key=lambda kv: kv[1]["iocs"], reverse=True)
    ]
    return {
        "familias": familias,
        "tipos": [{"tipo": t, "total": c} for t, c in tipos.most_common()],
        "timeline": serie,
        "serieDesde": iniciado,
        "serieEmFormacao": len(serie) < 7,
        "categorias": [{"categoria": c, "total": n} for c, n in categorias.most_common()],
        "ameacas": [{"tipo": t, "total": c} for t, c in ameacas.most_common(8)],
    }


def montar_kpis(iocs_fin, total_bruto, agregados, dias, novos_hoje):
    br = sum(1 for i in iocs_fin if i.get("brasil"))
    # "Família bancária" tem de significar trojan bancário. Contar stealer e
    # RAT no mesmo número inflaria o indicador e daria margem justa a quem
    # olhasse de perto: um ladrão de credenciais é insumo de fraude, não um
    # banker. Os dois números aparecem, separados.
    bankers = [f for f in agregados["familias"] if f.get("categoria") == "banker"]
    fam_br = sum(1 for f in agregados["familias"] if f.get("regiao") == "br")
    pct = (len(iocs_fin) / total_bruto * 100) if total_bruto else 0
    return [
        {"label": "Indicadores financeiros na janela", "valor": str(len(iocs_fin)),
         "unidade": f"IoCs / {dias} dias", "delta": f"{pct:.1f}% de todo o volume coletado"},
        {"label": "Inéditos nesta coleta (hoje)", "valor": str(novos_hoje), "unidade": "IoCs",
         "delta": "primeira vez observados por nós"},
        {"label": "Trojans bancários ativos", "valor": str(len(bankers)),
         "unidade": "famílias",
         "delta": f"{len(agregados['familias'])} famílias financeiras no total"},
        {"label": "Indicadores com sinal Brasil", "valor": str(br), "unidade": "IoCs",
         "delta": f"{fam_br} famílias de foco brasileiro"},
    ]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--saida", default="/var/www/threat-live/threat-live.json")
    ap.add_argument("--historico", default="/var/lib/panorama-ti/historico-diario.json",
                    help="registro de quando cada indicador foi visto por nós pela 1ª vez")
    ap.add_argument("--dias", type=int, default=14)
    ap.add_argument("--limite-tabela", type=int, default=120)
    ap.add_argument("--sem-misp", action="store_true",
                    help="ignora o MISP e usa só as fontes públicas diretas")
    args = ap.parse_args()

    taxonomia = carregar_taxonomia()
    aceitos = {t.lower() for t in taxonomia["tlpAceitos"]["valores"]}
    aceitos |= {f"tlp:{t}" for t in aceitos}

    brutos, fontes, erros = [], [], []

    # ThreatFox — sempre, é a origem do nome de família.
    try:
        tf = coletar_threatfox(args.dias)
        brutos += tf
        fontes.append({"nome": "ThreatFox (abuse.ch)", "tipo": "export público",
                       "licenca": "Uso livre com atribuição (abuse.ch)",
                       "indicadores": len(tf), "status": "ok"})
        log(f"ThreatFox: {len(tf)} IoCs na janela de {args.dias}d")
    except Exception as e:                                  # noqa: BLE001
        erros.append(f"ThreatFox: {e}")
        fontes.append({"nome": "ThreatFox (abuse.ch)", "tipo": "export público",
                       "indicadores": 0, "status": "indisponível"})
        log(f"ThreatFox FALHOU: {e}")

    # MISP — a instância local.
    base = os.environ.get("MISP_URL")
    chave = os.environ.get("MISP_KEY")
    if not args.sem_misp and base and chave:
        try:
            mi = coletar_misp(base, chave, args.dias)
            brutos += mi
            fontes.append({"nome": "MISP (instância CECyber)", "tipo": "API restSearch",
                           "licenca": "Feeds TLP:WHITE/CLEAR sincronizados",
                           "indicadores": len(mi), "status": "ok"})
            log(f"MISP: {len(mi)} atributos")
        except Exception as e:                              # noqa: BLE001
            erros.append(f"MISP: {e}")
            fontes.append({"nome": "MISP (instância CECyber)", "tipo": "API restSearch",
                           "indicadores": 0, "status": "indisponível"})
            log(f"MISP FALHOU: {e}")
    else:
        fontes.append({"nome": "MISP (instância CECyber)", "tipo": "API restSearch",
                       "indicadores": 0, "status": "não configurado"})

    if not brutos:
        log("ERRO: nenhuma fonte respondeu — preservando o JSON anterior")
        return 1

    # Governança: TLP primeiro, recorte financeiro depois.
    publicaveis = [i for i in brutos if tlp_publicavel(i, aceitos)]
    descartados_tlp = len(brutos) - len(publicaveis)
    if descartados_tlp:
        log(f"{descartados_tlp} indicadores descartados por TLP não publicável")

    financeiros = []
    for i in publicaveis:
        ok, fam = classificar_financeiro(i, taxonomia)
        if not ok:
            continue
        reg = {
            "valor": defang(i["valor"], i["tipo"]),
            "tipo": i["tipo"],
            "familia": fam["nome"] if fam else (i.get("familiaBruta") or None),
            "categoria": fam["categoria"] if fam else None,
            "regiao": fam["regiao"] if fam else None,
            "ameaca": i.get("ameaca"),
            "primeiraObs": i.get("primeiraObs"),
            "confianca": i.get("confianca"),
            "fonte": i["fonte"],
            "tlp": i["tlp"],
        }
        reg["brasil"] = parece_brasil(i, fam)
        financeiros.append(reg)

    financeiros.sort(key=lambda r: r.get("primeiraObs") or "", reverse=True)
    historico, novos_hoje = atualizar_historico(args.historico, financeiros)
    agregados = agregar(financeiros, args.dias, historico)

    doc = {
        "meta": {
            "geradoEm": datetime.now(timezone.utc).isoformat(timespec="seconds"),
            "janelaDias": args.dias,
            "totalColetado": len(brutos),
            "totalPublicavel": len(publicaveis),
            "totalFinanceiro": len(financeiros),
            "descartadosPorTlp": descartados_tlp,
            "tlpAceitos": sorted(aceitos),
            "degradado": bool(erros),
            "erros": erros,
            "criterioRecorte": (
                "Um indicador entra no recorte financeiro por família de malware "
                "reconhecidamente financeira (lista curada e justificada em "
                "taxonomia-financeira.json) ou por marcação setorial explícita da "
                "própria fonte. Não há inferência por palavra solta no domínio."
            ),
        },
        "fontes": fontes,
        "kpis": montar_kpis(financeiros, len(publicaveis), agregados, args.dias, novos_hoje),
        "familias": agregados["familias"][:20],
        "tipos": agregados["tipos"],
        "categorias": agregados["categorias"],
        "timeline": agregados["timeline"],
        "serieDesde": agregados["serieDesde"],
        "serieEmFormacao": agregados["serieEmFormacao"],
        "ameacas": agregados["ameacas"],
        "iocs": financeiros[:args.limite_tabela],
    }

    os.makedirs(os.path.dirname(args.saida), exist_ok=True)
    # Escrita atômica: o nginx pode servir este arquivo a qualquer instante.
    fd, tmp = tempfile.mkstemp(dir=os.path.dirname(args.saida), suffix=".tmp")
    with os.fdopen(fd, "w", encoding="utf-8") as fh:
        json.dump(doc, fh, ensure_ascii=False, separators=(",", ":"))
    os.chmod(tmp, 0o644)
    os.replace(tmp, args.saida)

    log(f"OK: {len(financeiros)} IoCs financeiros de {len(publicaveis)} publicáveis -> {args.saida}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
