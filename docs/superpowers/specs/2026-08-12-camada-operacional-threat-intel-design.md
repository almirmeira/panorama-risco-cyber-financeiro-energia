# Camada operacional de threat intelligence — design

**Data:** 2026-08-12
**Escopo:** acrescentar ao painel `score.cecyber.com` uma camada de inteligência de ameaças do setor
financeiro, alimentada por instância MISP própria, sem descaracterizar o produto estratégico.

---

## 1. Objetivo e público

**Vitrine comercial da CECyber.** O painel demonstra capacidade de threat intelligence para
prospects e portfólio. Ninguém opera um SOC com ele.

Essa definição decide o resto do design. Como não há dependência operacional, não é preciso
negociar acesso às comunidades fechadas (CERT.br, FS-ISAC) — fontes abertas bastam. Em compensação,
a régua de **credibilidade** sobe: é a vitrine de uma consultoria de segurança, e um número
inflado ou uma licença desrespeitada custam mais do que a funcionalidade vale.

Disso decorre a regra que rege todo o resto: **nada vai à tela que não se sustente sob exame de
um analista hostil.**

## 2. O que a pesquisa encontrou

Plataforma MISP aberta e específica do setor financeiro, na prática, **não existe**:

| Comunidade | Escopo | Acesso |
| :-- | :-- | :-- |
| CIRCL Financial Sector | bancos, instituições financeiras, processadoras | adesão/vetting |
| FS-ISAC | setor financeiro global | associação paga |
| CERT.br MISP | CSIRTs brasileiros | ser CSIRT listado ou integrar grupo de confiança setorial |

O único feed financeiro aberto do catálogo padrão do MISP — a lista de hashes do Banco do Brasil
(`cti.bb.com.br:8443`) — está **fora do ar** (conexão recusada, verificado de duas redes distintas).
Nenhuma comunidade da América Latina consta no catálogo do projeto MISP.

O que está aberto e funcionando é **genérico**: CIRCL OSINT, abuse.ch (URLhaus, ThreatFox, Feodo),
botvrij.eu. O recorte financeiro precisa, portanto, ser **construído por nós** — e é aí que mora o
valor técnico e o risco de credibilidade desta entrega.

## 3. Arquitetura

```
feeds abertos ──► MISP (VM 41, Docker, :8443) ──┐
                                                 ├──► ingest_threat_intel.py ──► threat-live.json
ThreatFox (export direto) ──────────────────────┘         (systemd timer, 20 min)        │
                                                                                          ▼
                                                                          nginx /data/ ──► painel (SPA)
```

**O painel continua sem backend.** Quem conversa com o MISP é o script no servidor; o navegador só
lê um JSON estático. Isso preserva a propriedade original do produto (build estático, offline,
sem CDN) e evita expor a API do MISP à internet.

**Por que ThreatFox também direto, e não só via MISP:** o MISP importa feed CSV como *um evento
agregado por feed*, e a atribuição de família por indicador se perde na importação. O export
direto do ThreatFox traz `malware_printable` por IoC — é dele que sai quase todo o recorte
financeiro. Sem essa segunda via, o MISP entregaria volume sem sinal.

### Componentes

| Arquivo | Responsabilidade |
| :-- | :-- |
| `dashboard/ingest/taxonomia-financeira.json` | define o que conta como indicador financeiro |
| `dashboard/ingest/ingest_threat_intel.py` | coleta, filtra, agrega e escreve o JSON |
| `dashboard/ingest/misp_setup_feeds.py` | configura os feeds no MISP (idempotente) |
| `dashboard/src/hooks/useThreatLive.js` | carrega o JSON em runtime, revalida a cada 5 min |
| `dashboard/src/views/AmeacasAoVivo.jsx` | a aba |
| `dashboard/src/components/{SeloFrescor,TabelaIocs}.jsx` | frescor e tabela de indicadores |

## 4. O recorte financeiro

O ponto mais delicado do design. Um filtro frouxo transformaria "inteligência para o setor
financeiro" em marketing sem lastro.

**Duas portas de entrada, nenhuma heurística vaga:**

1. **Família de malware** reconhecidamente financeira — lista curada em
   `taxonomia-financeira.json`, cada entrada com justificativa registrada (por que aquela família é
   financeira). Cobre bankers LatAm (Grandoreiro, Mekotio, Casbaneiro, Coyote, Guildma…), bankers
   globais (Dridex, TrickBot, QakBot, IcedID, Gozi…), ATM/PDV (Prilex) e stealers/RATs cujo produto
   final alimenta fraude.
2. **Marcação setorial explícita da fonte** — tags como `sector:finance` ou
   `ms-caro-malware:malware-type="Trojan-Banker"`.

Mais uma via, restrita: **atribuição no nível da fonte**, para feed cujo escopo inteiro seja
financeiro. Hoje só o **Feodo Tracker**, que rastreia exclusivamente C2 de trojan bancário
(Emotet, Dridex, TrickBot, QakBot). URLhaus e ThreatFox são de malware genérico e **não** recebem
atribuição em bloco, mesmo tendo muitos itens bancários.

**Não existe** inferência por palavra solta no domínio. Quando a família é buscada no título do
evento MISP, o casamento exige limite de palavra e nome com 5+ letras — sem isso "Coyote" casaria
com qualquer texto que cite o animal e "Zeus" com relatório sobre mitologia.

## 5. Governança de publicação

A página é aberta. Duas regras inegociáveis:

**TLP antes de tudo.** Só `tlp:white` e `tlp:clear` chegam à tela; qualquer marcação mais
restritiva é descartada na ingestão. Isso não é teórico: o feed CIRCL OSINT tem 1.295 eventos
`tlp:white`, 412 `tlp:clear`, 76 `tlp:green` e **1 `tlp:amber`**. Republicar o feed inteiro sem
filtrar vazaria dado restrito.

**Indicadores neutralizados.** Tudo sai em defang (`hxxp://`, `dominio[.]com`). O leitor do painel é
executivo, não analista de SOC: o indicador é citado como evidência, não distribuído como item
acionável. Quem precisa do dado cru consulta o MISP.

## 6. Honestidade da série temporal

O problema mais sério encontrado na construção, e a decisão de design da qual mais depende a
credibilidade da aba.

Os feeds abertos publicam **dumps rolantes de adições recentes**. O export do ThreatFox traz 585
indicadores com data de hoje, 533 de ontem, e só ~50/dia duas semanas atrás — não porque houve
menos ameaça, mas porque os itens antigos já saíram da janela do export. **Uma linha do tempo
montada sobre esse dado desenha uma rampa de alta em qualquer cenário, inclusive num de queda
real.** Seria um gráfico que mente por construção.

Mesma armadilha no MISP: o parâmetro `last` do `restSearch` filtra pelo *timestamp do atributo*,
que num feed recém-sincronizado é o momento da importação. A primeira consulta devolveu 2.594
atributos de relatórios de 2015–2016 (The Dukes, APT28, Rocket Kitten) carimbados como recentes.
Corrigido para usar a **data do evento**.

**Decisão:** a série temporal é construída a partir da **nossa própria observação** — cada ciclo
registra os indicadores inéditos e o dia em que apareceram para nós. A série leva uma semana para
ganhar corpo e, até lá, a aba exibe a explicação em vez do gráfico. Preferimos a espera ao gráfico
que sobe sozinho.

## 7. Separação editorial das duas camadas

O capítulo 00 argumenta que este é um projeto de inteligência **estratégica** e que feed de IoC em
tempo real é insumo de SOC — outro produto. A nova camada é literalmente aquilo, então a tese foi
**revista, não abandonada**: o cap. 00 ganhou um adendo com a tabela que distingue as duas camadas
(unidade de análise, regra de evidência, ritmo, para que serve e para que **não** serve).

Na interface, a mesma separação: a aba abre com aviso de natureza explicando que ali um indicador é
fato pontual de uma fonte, e **não** passa pela regra de duas fontes que rege os números anuais das
outras abas. A legenda de semáforo de risco some na aba operacional, onde o semáforo significa
frescor do dado — duas convenções de cor na mesma tela confundiriam as leituras.

O número que a camada produz reforça a tese em vez de contradizê-la: **369 indicadores financeiros
em 6.614 coletados (5,6%), com apenas 3 famílias de trojan bancário.** Quem precisa defender um
banco em tempo real não se sustenta com o que há de aberto.

## 8. Operação

| Item | Valor |
| :-- | :-- |
| MISP | VM 41, Docker, `https://192.168.20.41:8443`, limites de RAM no compose |
| Ingestão | `panorama-ti.timer`, a cada 20 min (`OnUnitActiveSec=20min`) |
| Saída | `/var/www/threat-live/threat-live.json`, servido em `/data/` |
| Histórico | `/var/lib/panorama-ti/historico-diario.json`, retenção 45 dias |
| Credenciais | `~/.misp-credentials`, `~/.panorama-ti.env` (modo 600) |

`/var/www/threat-live/` fica **fora** de `/var/www/panorama-financeiro/` de propósito: o deploy do
painel roda `rsync --delete` naquele diretório e apagaria o JSON.

**Degradação:** se uma fonte cai, a ingestão continua com as demais e marca `degradado: true`; a aba
exibe faixa âmbar nomeando quem falhou. Se **nenhuma** responde, o script sai com erro **sem
sobrescrever** o JSON anterior — melhor dado rotulado de 40 minutos atrás que tela vazia.

## 9. Limitações conhecidas

- **Concentração.** O recorte é dominado por um stealer (Vidar, 337 de 369). É o retrato real do que
  as fontes abertas publicam, não um defeito do filtro — mas significa que o gráfico de famílias
  reflete campanhas em curso, não a estrutura do risco bancário.
- **Sinal Brasil é fino.** 17 indicadores com marca brasileira, 9 de Grandoreiro. As fontes abertas
  cobrem mal a ameaça bancária brasileira; é exatamente a lacuna que o CERT.br MISP preencheria.
- **MISP e painel coabitam a VM 41.** Aceitável com limite de memória e isolamento por contêiner,
  mas o correto é VM dedicada — não foi possível porque o host Proxmox estava inalcançável
  (192.168.1.100 e .60 sem resposta, inclusive de dentro do lab).
- **Sem autenticação no MISP externo.** A interface fica só na LAN; nada dela é exposto ao público.

## 10. Próximos passos possíveis

1. Migrar o MISP para VM dedicada quando o Proxmox voltar.
2. Pleitear acesso ao **CERT.br MISP** (`misp@cert.br`) — é o que resolveria a lacuna de cobertura
   brasileira. Requer ser CSIRT listado ou integrar grupo de confiança setorial.
3. Enriquecer com MISP galaxies/taxonomias para atribuição de ator, hoje ausente.
4. Reavaliar o feed do Banco do Brasil periodicamente: se voltar, é a única fonte financeira
   brasileira aberta conhecida.
