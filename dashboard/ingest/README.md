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
