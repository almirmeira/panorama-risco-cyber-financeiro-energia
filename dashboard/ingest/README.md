# Camada operacional — ingestão de threat intelligence

Alimenta a aba **Ameaças ao Vivo** do painel com indicadores recentes do setor financeiro, vindos
de uma instância MISP própria. Design completo em
[`docs/superpowers/specs/2026-08-12-camada-operacional-threat-intel-design.md`](../../docs/superpowers/specs/2026-08-12-camada-operacional-threat-intel-design.md).

```
feeds abertos ──► MISP (VM 41, :8443) ──┐
                                         ├──► ingest_threat_intel.py ──► threat-live.json
ThreatFox (export direto) ──────────────┘      (systemd timer, 20 min)         │
                                                                                ▼
                                                                nginx /data/ ──► painel
```

O painel continua sem backend: quem fala com o MISP é o script no servidor, e o navegador só lê um
JSON estático.

## Arquivos

| Arquivo | O que é |
| :-- | :-- |
| `taxonomia-financeira.json` | define o que conta como indicador "do setor financeiro" — cada família com justificativa registrada |
| `ingest_threat_intel.py` | coleta, filtra TLP, aplica o recorte, agrega e escreve o JSON |
| `misp_setup_feeds.py` | habilita os feeds no MISP (idempotente, pode rodar sempre) |
| `misp-docker-compose.override.yml` | cópia versionada do override aplicado na VM (limites de RAM + healthcheck) |
| `misp-audit-cap.sh` + `systemd/` | teto de 1 GiB para a tabela `audit_logs` do MISP (ver "O disco da VM 41") |

## Fontes e o que cada uma responde

O catálogo completo — com licença de cada fonte, os 11 feeds abertos habilitados no MISP, as fontes
testadas e **recusadas** com o motivo, e a governança de publicação — está na
[Parte 4 de `fontes-e-referencias/README.md`](../../fontes-e-referencias/) e é publicado na aba
**Fontes & Método** do painel. Fonte que entra ou sai daqui precisa aparecer nos dois lugares.

| Fonte | Pergunta que responde | Recorte financeiro |
| :-- | :-- | :-- |
| MISP (feeds abertos) | que infraestrutura maliciosa existe agora | por família/tag |
| ThreatFox direto | qual família está por trás do indicador | por família |
| **ransomware.live** (setor) | **quem está sendo atacado** | **explícito na fonte** |
| **ransomware.live** (país BR) | **quem está sendo atacado no Brasil** | setor rotulado por vítima |
| **CISA KEV** | **o que corrigir primeiro** | transversal, sem recorte |

**Por que o recorte por país existe.** O recorte setorial é global, e nele o Brasil quase não aparece:
15 vítimas financeiras brasileiras em todo o arquivo desde 2017, **uma** nos últimos 90 dias. Quem abria
o painel aqui concluía que os ataques recentes não estavam sendo capturados — e não era o dado que
faltava, era a consulta. Pelo país a mesma fonte tem **530 organizações brasileiras**, 68 nos últimos 90
dias. A aba Brasil mostra todos os setores de propósito: fornecedor de tecnologia, escritório e operador
logístico parados por ransomware chegam ao setor financeiro por terceiro, e são justamente eles que
dominam a lista brasileira.

**Cuidado operacional:** a API do ransomware.live limita **1 requisição por minuto** e responde o
estouro com `{"message": "1 per 1 minute"}` em **HTTP 200** — só o corpo denuncia. Como o ciclo consulta
dois endpoints, há uma pausa de 65 s entre eles e uma checagem explícita desse corpo; sem ela o limite
viraria "0 vítimas" silenciosamente. Use `--sem-brasil` para pular a pausa em testes.

O `ransomware.live` é consumido pelo endpoint **setorial**
(`/v2/sectorvictims/Financial Services`), não pelo `/recentvictims`. O "recentes" devolve as 100
últimas vítimas de todos os setores — na prática ~3 dias e meia dúzia de casos financeiros;
anunciar isso como janela de 90 dias seria falso. O arquivo setorial traz o histórico completo do
setor desde 2017.

**Publicação de extorsão.** Nenhum link para site de vazamento sai daqui — publicar rota para um
leak site é distribuir a extorsão, não noticiá-la. O texto escrito pelo grupo criminoso também não
sai. A vítima é nomeada, como fazem os rastreadores públicos, sempre rotulada como reivindicação
**não verificada**: grupos inflam listas e reciclam vítimas antigas.

## Operação

```bash
ssh ttx
sudo systemctl start panorama-ti.service        # rodar a ingestão agora
sudo journalctl -u panorama-ti.service -n 30    # ver o último ciclo
systemctl list-timers panorama-ti.timer         # próxima execução
```

Testar sem MISP (só fontes públicas diretas), útil para desenvolvimento:

```bash
./ingest_threat_intel.py --sem-misp --saida /tmp/t.json --historico /tmp/h.json
```

## O disco da VM 41 (incidente de 2026-08-14)

O MISP grava uma linha em `audit_logs` por objeto escrito. Com a ingestão de feeds abertos isso
cresceu **~2 GB/dia** e, em 14/08, encheu o disco de 38 GB da VM. Com 0 byte livre as **duas
metades do painel pararam ao mesmo tempo**: o publicador falhava no `git reset` (mensagem que não
citava disco) e a ingestão não conseguia gravar o `threat-live.json`. Só apareceu no navegador,
4 dias depois, como "inteligência operacional desatualizada".

Três defesas foram instaladas por causa disso:

```bash
systemctl list-timers misp-audit-cap.timer     # teto horário de 1 GiB na audit_logs
sudo /usr/local/sbin/misp-audit-cap.sh --dry-run   # só relata o tamanho atual
sudo journalctl -u misp-audit-cap.service -n 20    # o que foi truncado e quando
```

1. **Teto na tabela** — passando de 1 GiB, `audit_logs` é zerada e recomeça. A auditoria do MISP
   continua ligada; nenhum IoC é afetado (eventos, atributos e tags são outras tabelas).
2. **`TRUNCATE` com plano B** — com o disco a 0 byte o `TRUNCATE` do InnoDB falha
   (`ERROR 1114: table is full`), porque ele recria o tablespace vazio antes de liberar o antigo.
   Nesse caso o script guarda o DDL, faz `DROP` (que libera o arquivo na hora) e recria a tabela.
3. **Guarda no publicador** — `deploy-vm41.sh` mede o espaço livre antes de tudo e aborta com o
   número e os maiores ocupantes de `/var/lib` no log, em vez de morrer num `git reset` mudo.

## Três coisas que não parecem, mas são

**1. A série temporal NÃO usa a data da fonte.** Os feeds abertos publicam dumps rolantes de
adições recentes: centenas de itens com data de hoje, poucas dezenas de duas semanas atrás — porque
os antigos saem da janela, não porque houve menos ameaça. Um gráfico sobre esse dado sobe sozinho
em qualquer cenário. A série vem de `historico-diario.json`, que registra quando *nós* vimos cada
indicador pela primeira vez, e só é exibida com 7+ dias de coleta.

**2. O filtro `last` do MISP não significa "recente".** Ele olha o timestamp do atributo, que num
feed recém-sincronizado é a hora da importação. A primeira consulta trouxe 2.594 atributos de
relatórios de 2015–2016 carimbados como recentes. A recência sai da **data do evento**.

**3. O ThreatFox é consumido em duas vias de propósito.** O MISP importa feed CSV como um evento
agregado por feed, e a família de malware por indicador se perde — que é justamente o campo de que
o recorte financeiro depende. O export direto preserva `malware_printable`.

## Governança

Só `tlp:white` e `tlp:clear` chegam à página pública; o resto é descartado na ingestão (o feed
CIRCL OSINT tem 1 evento `tlp:amber` no meio de 1.707 publicáveis). Indicadores saem em defang
(`hxxp://`, `dominio[.]com`) — são citados como evidência, não distribuídos para bloqueio.

Se uma fonte cai, o ciclo segue com as demais e marca `degradado: true`, e a aba nomeia quem
falhou. Se nenhuma responde, o script sai com erro **sem sobrescrever** o JSON anterior.
