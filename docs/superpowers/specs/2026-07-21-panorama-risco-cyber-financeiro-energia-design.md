# Design — Panorama de Risco Cyber: Setor Financeiro × Energia

**Data:** 2026-07-21
**Repositório:** `panorama-risco-cyber-financeiro-energia` (privado, GitHub `almirmeira/…`)
**Idioma:** Português do Brasil integral (acentuação, cedilha, caracteres especiais corretos)
**Entregável:** Repositório-fonte em Markdown + SVG (fonte de verdade; exportação para deck fica fora deste escopo)

---

## 1. Objetivo e tese central

Construir uma apresentação de contexto e cenário atual do risco cibernético comparando os
setores **financeiro** e **energia**, para audiência **mista** (começa executiva/board e desce ao
técnico/SOC-GRC), com recorte **Global → Brasil** e dados **2025–2026** validados.

**Tese que fundamenta o projeto (vai no capítulo de metodologia):** não é necessário contratar
uma empresa de *threat intelligence* comercial para produzir esta apresentação. Threat intel paga
entrega telemetria proprietária, IOCs e feeds operacionais — insumo de SOC, não de apresentação de
cenário. O panorama de risco se constrói com **relatórios anuais públicos** (que já são a telemetria
dessas empresas, consolidada e curada), **frameworks** e **estatística setorial**. O valor agregado
está na **curadoria, no recorte Brasil e na validação cruzada** — feitos neste repositório.

---

## 2. Decisões de escopo (fixadas com o usuário)

| Decisão | Escolha |
|:---------------------------|:-------------------------------------------------------|
| Setor                      | Ambos — comparativo financeiro × energia               |
| Audiência                  | Mista (executiva → técnica, em camadas por capítulo)   |
| Formato                    | Repositório-fonte MD + SVG                             |
| Geografia                  | Global → Brasil                                        |
| Atualidade / pesquisa      | Pesquisa web profunda 2025–2026, com verificação cruzada |
| Estrutura organizacional   | A — setorial paralela + capítulo comparativo (clímax)  |
| Vendors / vozes            | Catálogo curado (perfis p/ ~10–12 mais relevantes + lista completa) |
| Nome do repositório        | `panorama-risco-cyber-financeiro-energia` (confirmado) |

---

## 3. Arquitetura de pastas

| Pasta / arquivo            | Conteúdo                                                                                   | Camada    |
|:---------------------------|:-------------------------------------------------------------------------------------------|:---------:|
| `README.md`                | Capa, sumário executivo (1 pág.), índice navegável, "como usar", nota de metodologia        | Exec      |
| `00-metodologia-e-fontes/` | Por que dá para construir sem threat intel paga; hierarquia de fontes; critérios de validação | Ambas     |
| `01-panorama-global/`      | Macro-cenário: WEF Global Risks / Cybersecurity Outlook, geopolítica, IA ofensiva, economia do cibercrime | Exec→Téc |
| `02-setor-financeiro/`     | Ameaças, atores, TTPs, casos, regulação (global → Bacen/PIX/Open Finance/Febraban/Res. BCB) | Exec→Téc |
| `03-setor-energia/`        | OT/ICS, modelo Purdue, IEC 62443, APTs estatais, casos (Colonial, Ucrânia 2015/2016, FrostyGoop), Brasil ONS/ANEEL | Exec→Téc |
| `04-comparativo/`          | Cross-over: superfícies, atores, impacto, maturidade, regulação — tabelas + radar           | Ambas     |
| `05-atores-e-ttps/`        | Threat actors, MITRE ATT&CK e ATT&CK for ICS, ecossistema ransomware/RaaS                   | Téc       |
| `06-tendencias-2026/`      | IA generativa/agêntica, deepfakes, ameaça quântica (PQC), cadeia de suprimentos             | Exec→Téc |
| `07-defesa-e-frameworks/`  | NIST CSF 2.0, ISO/IEC 27001:2022, IEC 62443, Zero Trust, controles priorizados              | Téc       |
| `08-recomendacoes/`        | Roadmap por setor, quick wins, perguntas de board                                           | Exec      |
| `fontes-e-referencias/`    | Bibliografia completa com links; catálogo de vendors; **Vozes de Referência** (perfis curados) | Apoio    |
| `assets/diagramas/`        | Todos os SVGs (paleta canônica)                                                            | —         |

**Regra de camadas:** cada capítulo abre com um bloco **"Resumo Executivo"** (3–5 bullets + 1
número-chave citado) e depois aprofunda no técnico. Assim a mesma pasta serve os dois públicos e
permite extrair um recorte só-executivo ou só-de-um-setor para palestras.

---

## 4. Inventário de elementos visuais (SVG, paleta canônica)

Distribuídos ao longo de todo o repositório — não concentrados numa única pasta de anexos.

| # | Artefato                                          | Onde                         |
|:--|:--------------------------------------------------|:-----------------------------|
| 1 | Mapa de calor de ameaças (probabilidade × impacto), por setor | `01`, `04`         |
| 2 | Modelo Purdue (níveis 0–5) anotado com vetores OT | `03`                         |
| 3 | Superfície de ataque PIX / Open Finance (topologia lógica) | `02`                |
| 4 | Timeline de incidentes-marco (2015 Ucrânia → 2021 Colonial → 2024 FrostyGoop → 2025/26) | `01`, `05` |
| 5 | Radar comparativo financeiro × energia (6 eixos de risco) | `04`                 |
| 6 | Cyber Kill Chain + mapeamento MITRE ATT&CK (fin) / ATT&CK for ICS (energia) | `05`     |
| 7 | Ecossistema ransomware/RaaS (fluxo afiliado → broker → vítima) | `05`             |
| 8 | Mapa regulatório Brasil (Bacen, ANEEL/ONS, LGPD, Res. BCB, regulação OT emergente) | `02`, `03` |
| 9 | Gráficos de custo médio de violação por setor (IBM Cost of a Data Breach) e volume de ataques | `01`, `04` |
| 10| Diagrama de camadas de defesa (Zero Trust / defesa em profundidade) | `07`          |

**Padrão de tabelas Markdown:** sempre com delimitadores completos e alinhamento explícito
(`:---`, `:---:`, `---:`), bordas fechadas nas duas extremidades, para boa renderização inclusive na
borda direita — conforme solicitado.

---

## 5. Metodologia de fontes e validação

- **Pesquisa web profunda 2025–2026** via fan-out em fontes primárias.
- **Verificação cruzada:** cada número-chave confirmado em ≥2 fontes independentes.
- **Citação rastreável:** link + ano + página/seção quando aplicável. Nenhuma estatística órfã.

**Hierarquia de fontes:**

1. **Relatórios anuais de vendors / telemetria:** CrowdStrike Global Threat Report; Microsoft Digital
   Defense Report; Verizon DBIR; IBM X-Force Threat Intelligence Index + Cost of a Data Breach;
   Mandiant M-Trends (Google Cloud); Unit 42 (Palo Alto); Fortinet FortiGuard; Check Point;
   Trellix; **Dragos OT/ICS Year in Review**; Trend Micro; Sophos; Kaspersky ICS-CERT;
   Zscaler ThreatLabz; SentinelOne; Proofpoint; Darktrace; Akamai; Cloudflare; Broadcom/Symantec.
2. **Órgãos e consórcios:** WEF (Global Risks Report, Global Cybersecurity Outlook); ENISA Threat
   Landscape; NIST; CISA; **FS-ISAC** (financeiro); **E-ISAC** (energia); CERT.br/NIC.br; Bacen;
   Febraban; ANEEL; ONS.
3. **Analistas de mercado:** Gartner, Forrester (citações públicas).
4. **Nacionais BR:** Tempest, ISH, Redbelt, Cipher, NewSpace (relatórios públicos).

**Vozes de Referência (catálogo curado):** perfis dedicados para os ~10–12 nomes mais relevantes ao
tema financeiro/energia — cada um com *quem é → por que importa → contribuição relevante ao tema*,
com citações reaproveitadas ao longo dos capítulos onde couberem. Candidatos prioritários:
Andy Greenberg (Sandworm/energia), Dmitri Alperovitch (APTs estatais), Nicole Perlroth (mercado de
0-days), Bruce Schneier (economia do risco), Brian Krebs (cibercrime financeiro), Mikko Hyppönen,
Jen Easterly (CISA/infraestrutura crítica), Lesley Carhart (OT/ICS DFIR), Katie Moussouris (política
de vulnerabilidades), Troy Hunt (vazamentos). Os demais nomes citados pelo usuário entram na lista
completa com uma linha de identificação (menção honrosa), sem perfil longo, para não diluir o foco.

---

## 6. Fora de escopo (YAGNI)

- Geração do deck de slides (Gamma/PPTX) — decisão posterior, projeto separado.
- Perfis longos para todos os 27 nomes citados (usa-se catálogo curado).
- Feeds de IOC / telemetria em tempo real (não é objetivo de uma apresentação de cenário).
- Aprofundamento em setores fora de financeiro/energia.

---

## 7. Critérios de sucesso

- Todo número-chave tem citação rastreável e ≥2 fontes independentes.
- Cada um dos capítulos 01–08 abre com Resumo Executivo e desce ao técnico.
- Os 10 artefatos visuais do inventário existem em SVG (paleta canônica) e estão distribuídos.
- PT-BR ortograficamente correto (acentuação, cedilha, caracteres especiais).
- Tabelas renderizam bem nas duas bordas (delimitadores e alinhamento explícitos).
- Comparativo financeiro × energia é o clímax analítico, apoiado por radar + tabelas.
- Repositório permite extrair recorte só-executivo, só-financeiro ou só-energia.
