#!/usr/bin/env python3
"""
Configura os feeds abertos na instância MISP da CECyber.

Idempotente: pode rodar quantas vezes for preciso. Carrega a lista de feeds
padrão do MISP, habilita apenas os que interessam a este projeto e dispara a
primeira coleta.

Quais feeds e por quê — a seleção é curta de propósito. O painel não precisa
de volume, precisa de procedência: cada feed aqui é público, de organização
identificável e com marcação TLP compatível com republicação. Feeds que
exigem chave, que restringem redistribuição ou cuja licença não é clara ficam
de fora, porque o produto final é uma página aberta.

Uso:
    MISP_URL=https://127.0.0.1:8443 MISP_KEY=... ./misp_setup_feeds.py [--fetch]
"""

import argparse
import json
import os
import ssl
import sys
import urllib.error
import urllib.request

# Casamento por substring em provider/name do catálogo padrão do MISP.
FEEDS_DESEJADOS = [
    ("circl", "CIRCL OSINT Feed — eventos MISP com marcação TLP por evento"),
    ("botvrij", "botvrij.eu — feed OSINT em formato MISP"),
    ("urlhaus", "abuse.ch URLhaus — URLs de distribuição de malware"),
    ("threatfox", "abuse.ch ThreatFox — IoCs com família de malware atribuída"),
    ("feodo", "abuse.ch Feodo Tracker — C2 de trojans bancários"),
]

# Nunca habilitar: exigem credencial, restringem redistribuição, ou a licença
# não é explícita o bastante para uma página pública.
BLOQUEADOS = ["phishtank", "openphish", "alienvault", "proofpoint", "spamhaus"]


def api(base, key, caminho, metodo="GET", corpo=None, timeout=90):
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    dados = json.dumps(corpo).encode() if corpo is not None else None
    if metodo == "POST" and dados is None:
        dados = b"{}"
    req = urllib.request.Request(
        base.rstrip("/") + caminho,
        data=dados,
        method=metodo,
        headers={
            "Authorization": key,
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
        bruto = r.read().decode("utf-8", "replace")
    try:
        return json.loads(bruto)
    except ValueError:
        return {"_texto": bruto[:400]}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--fetch", action="store_true", help="dispara a coleta após habilitar")
    args = ap.parse_args()

    base = os.environ.get("MISP_URL", "https://127.0.0.1:8443")
    key = os.environ.get("MISP_KEY")
    if not key:
        print("defina MISP_KEY", file=sys.stderr)
        return 2

    print("carregando catálogo de feeds padrão…")
    try:
        api(base, key, "/feeds/loadDefaultFeeds", "POST")
    except urllib.error.HTTPError as e:
        print(f"  (loadDefaultFeeds retornou {e.code}; o catálogo pode já estar carregado)")

    feeds = api(base, key, "/feeds/index")
    if not isinstance(feeds, list):
        print(f"resposta inesperada em /feeds/index: {str(feeds)[:200]}", file=sys.stderr)
        return 1
    print(f"catálogo com {len(feeds)} feeds")

    habilitados, ja_ok = [], []
    for f in feeds:
        fe = f.get("Feed", f)
        alvo = f"{fe.get('provider', '')} {fe.get('name', '')}".lower()
        if any(b in alvo for b in BLOQUEADOS):
            continue
        casou = next((d for chave, d in FEEDS_DESEJADOS if chave in alvo), None)
        if not casou:
            continue

        fid = fe.get("id")
        if str(fe.get("enabled")).lower() in ("true", "1"):
            ja_ok.append((fid, fe.get("name")))
            continue
        try:
            api(base, key, f"/feeds/enable/{fid}", "POST")
            habilitados.append((fid, fe.get("name"), casou))
        except urllib.error.HTTPError as e:
            print(f"  falhou ao habilitar id={fid}: HTTP {e.code}")

    for fid, nome, motivo in habilitados:
        print(f"  habilitado id={fid}: {nome}")
        print(f"      motivo: {motivo}")
    for fid, nome in ja_ok:
        print(f"  já habilitado id={fid}: {nome}")

    if not habilitados and not ja_ok:
        print("nenhum feed alvo encontrado no catálogo — verifique os nomes em FEEDS_DESEJADOS")
        return 1

    if args.fetch:
        print("disparando coleta (assíncrona; o MISP processa em background)…")
        try:
            r = api(base, key, "/feeds/fetchFromAllFeeds", "POST", timeout=180)
            print(f"  {str(r)[:200]}")
        except urllib.error.HTTPError as e:
            print(f"  fetch retornou HTTP {e.code}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
