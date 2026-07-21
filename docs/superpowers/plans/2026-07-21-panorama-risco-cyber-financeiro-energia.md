# Panorama de Risco Cyber (Financeiro × Energia) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produzir um repositório-fonte em Markdown + SVG, em PT-BR, com o panorama atual (2025–2026) e comparativo do risco cibernético nos setores financeiro e energia, para audiência mista, com fontes de classe mundial validadas por verificação cruzada.

**Architecture:** Repositório de conteúdo estruturado em capítulos numerados (estrutura A: blocos setoriais paralelos + capítulo comparativo como clímax). Cada capítulo é um deliverable independente que combina pesquisa validada, texto e artefatos visuais SVG. A pesquisa é feita com a skill `deep-research` por tema, produzindo um dossiê de fontes que alimenta o texto.

**Tech Stack:** Markdown (GitHub-flavored), SVG (escrito à mão, paleta canônica), Git. Sem build system — o repositório é a fonte de verdade.

## Global Constraints

- **Idioma:** Português do Brasil integral. Acentuação, cedilha e caracteres especiais corretos em 100% do texto.
- **Validação de dados:** todo número-chave tem citação rastreável (link + ano + página/seção quando aplicável) e é confirmado em ≥2 fontes independentes. Nenhuma estatística órfã.
- **Paleta canônica (GitHub dark dimmed) — usar exatamente estes valores nos SVGs:**
  - Fundos: `#0d1117` (base), `#161b22` (painel), `#1c2128` (cartão)
  - Bordas: `#30363d`
  - Texto: `#e6edf3` (título), `#c9d1d9` (corpo), `#8b949e` (secundário)
  - Azul (acento/infra): `#58a6ff`
  - Verde (positivo/defesa): `#3fb950`
  - Vermelho (ameaça/crítico): `#f85149`
  - Âmbar/ouro (alerta): `#e3b341` / `#d29922`
  - Roxo (destaque): `#a371f7`
- **Tabelas Markdown:** delimitadores completos com bordas fechadas nas duas extremidades e alinhamento explícito (`:---`, `:---:`, `---:`). Nunca linhas separadoras só com `--`.
- **Camadas por capítulo:** capítulos 01–08 abrem com bloco "Resumo Executivo" (3–5 bullets + 1 número-chave citado) e depois aprofundam no técnico.
- **Visuais distribuídos:** SVGs em `assets/diagramas/`, referenciados no capítulo correspondente por caminho relativo. Cada capítulo de conteúdo tem ≥1 artefato visual.
- **Commits frequentes:** um commit por tarefa concluída, mensagem em PT-BR, com trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
- **Fonte de verdade dos requisitos:** `docs/superpowers/specs/2026-07-21-panorama-risco-cyber-financeiro-energia-design.md`.

---

## Nota sobre "testes" neste projeto

Este é um projeto de conteúdo, não de código. Onde um plano de software teria "escrever teste que
falha → rodar → implementar → rodar → commit", aqui cada tarefa termina com um **checklist de
validação** verificável objetivamente:

- **[V-FONTE]** Cada número-chave tem link + ano e ≥2 fontes independentes registradas.
- **[V-PTBR]** Texto revisado para acentuação/cedilha/caracteres especiais (busca por mojibake e por
  palavras sem acento comuns).
- **[V-TAB]** Tabelas com bordas fechadas e alinhamento explícito; renderização conferida.
- **[V-SVG]** SVG existe, abre sem erro de XML e usa apenas a paleta canônica.
- **[V-LINK]** Todos os links do capítulo resolvem (HTTP 200 ou equivalente) na data de escrita.

A verificação `[V-SVG]` de boa-formação usa: `xmllint --noout <arquivo>.svg` (ou, se ausente,
`python3 -c "import xml.dom.minidom,sys; xml.dom.minidom.parse(sys.argv[1])" <arquivo>.svg`).

---

## Mapa de arquivos

| Arquivo | Responsabilidade |
|:--------------------------------------------------|:-----------------------------------------------|
| `README.md`                                       | Capa, sumário executivo, índice, como usar     |
| `ESTILO.md`                                        | Guia de estilo: paleta, padrão de tabela, template de capítulo, convenção de citação |
| `00-metodologia-e-fontes/README.md`               | Tese anti-threat-intel-paga; hierarquia e validação de fontes |
| `01-panorama-global/README.md`                    | Macro-cenário global 2025–2026                 |
| `02-setor-financeiro/README.md`                   | Cenário financeiro global → Brasil             |
| `03-setor-energia/README.md`                      | Cenário energia/OT global → Brasil             |
| `04-comparativo/README.md`                        | Cross-over comparativo (clímax)                |
| `05-atores-e-ttps/README.md`                      | Threat actors, MITRE ATT&CK, ransomware        |
| `06-tendencias-2026/README.md`                    | IA ofensiva, deepfakes, PQC, cadeia de suprimentos |
| `07-defesa-e-frameworks/README.md`                | NIST CSF 2.0, ISO 27001, IEC 62443, Zero Trust |
| `08-recomendacoes/README.md`                      | Roadmap por setor, board asks                  |
| `fontes-e-referencias/README.md`                  | Bibliografia, catálogo de vendors, Vozes de Referência |
| `fontes-e-referencias/dossie-pesquisa.md`         | Dossiê bruto de pesquisa (fontes + números coletados) |
| `assets/diagramas/*.svg`                          | 10+ artefatos visuais                          |

---

## Task 0: Scaffolding do repositório e guia de estilo

**Files:**
- Create: `ESTILO.md`
- Create: `README.md` (esqueleto com índice)
- Create: diretórios `00-…`/`08-…`, `fontes-e-referencias/`, `assets/diagramas/`
- Create: `assets/diagramas/_paleta.svg` (swatch de referência da paleta)

**Interfaces:**
- Produces: `ESTILO.md` com (a) tabela da paleta canônica, (b) template de capítulo (bloco Resumo Executivo + seções), (c) padrão de tabela Markdown, (d) convenção de citação `[n]` com nota ao fim do arquivo. Todos os capítulos consomem este guia.

- [ ] **Step 1: Criar diretórios e placeholders `.gitkeep`**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
for d in 00-metodologia-e-fontes 01-panorama-global 02-setor-financeiro 03-setor-energia \
         04-comparativo 05-atores-e-ttps 06-tendencias-2026 07-defesa-e-frameworks \
         08-recomendacoes fontes-e-referencias assets/diagramas; do
  mkdir -p "$d"; touch "$d/.gitkeep"
done
```

- [ ] **Step 2: Escrever `ESTILO.md`**

Conteúdo obrigatório: tabela da paleta (valores exatos das Global Constraints); exemplo de tabela
Markdown bem formatada (bordas fechadas, alinhamento explícito); template de capítulo com o bloco
`> **Resumo Executivo**` seguido de bullets e "número-chave"; convenção de citação numérica `[n]`
com seção "## Fontes" ao fim de cada capítulo listando `[n] Autor/Org. *Título*. Ano. URL`.

- [ ] **Step 3: Escrever `README.md` esqueleto**

Capa (título, subtítulo, data, autor Almir Meira), 1 parágrafo de propósito, "Como usar este
repositório", e índice em tabela linkando os 9 capítulos + fontes. Sumário executivo fica como
seção a preencher na Task final.

- [ ] **Step 4: Criar `assets/diagramas/_paleta.svg`**

SVG de swatches mostrando cada cor da paleta com seu hex — serve de referência viva e primeiro
teste de boa-formação.

- [ ] **Step 5: Validar e commitar**

```bash
xmllint --noout assets/diagramas/_paleta.svg && echo "SVG OK"
git add -A && git commit -m "chore: scaffolding do repositório + guia de estilo (ESTILO.md)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```
Expected: `SVG OK` e commit criado.

---

## Task 1: Dossiê de pesquisa — panorama global

**Files:**
- Create: `fontes-e-referencias/dossie-pesquisa.md` (seção "Global")

**Interfaces:**
- Produces: seção "## Global" no dossiê, com números-chave (custo médio de violação, % de ataques
  a infraestrutura crítica, ranking WEF, tempo de permanência/dwell time) cada um com ≥2 fontes e
  link. Consumido pelas Tasks 5 e 6.

- [ ] **Step 1: Rodar pesquisa profunda do tema global**

Invocar a skill `deep-research` com foco: "Cenário global de risco cibernético 2025–2026:
WEF Global Cybersecurity Outlook 2026 e Global Risks Report 2026; IBM Cost of a Data Breach 2025;
Verizon DBIR 2025; Microsoft Digital Defense Report 2025; CrowdStrike Global Threat Report 2025;
Mandiant M-Trends 2025; ENISA Threat Landscape 2025. Números de custo, volume, dwell time,
setores mais atacados, papel de IA ofensiva e geopolítica."

- [ ] **Step 2: Registrar achados no dossiê com verificação cruzada**

Para cada número-chave, escrever linha com valor + ≥2 fontes (org, título, ano, URL). Marcar
divergências entre fontes explicitamente. **[V-FONTE]**

- [ ] **Step 3: Validar links e commitar**

```bash
git add fontes-e-referencias/dossie-pesquisa.md
git commit -m "pesquisa: dossiê — panorama global 2025-2026

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Dossiê de pesquisa — setor financeiro

**Files:**
- Modify: `fontes-e-referencias/dossie-pesquisa.md` (adicionar seção "Financeiro")

**Interfaces:**
- Consumes: estrutura do dossiê da Task 1.
- Produces: seção "## Financeiro" com números e casos: fraude/DDoS/ransomware no setor, PIX e
  Open Finance como superfície, dados FS-ISAC, custo de violação em serviços financeiros (IBM),
  regulação Bacen (Res. CMN 4.893/2021 e BCB 85/2021 e correlatas), casos BR. Consumido pela Task 6.

- [ ] **Step 1: Rodar pesquisa profunda — financeiro global + Brasil**

Invocar `deep-research`: "Ameaças cibernéticas ao setor financeiro 2025–2026: FS-ISAC reports;
IBM X-Force / Cost of a Data Breach por indústria (financeiro); ataques a PIX/Pix e Open Finance;
fraude com engenharia social e deepfake; ransomware a bancos e fintechs; DDoS; incidentes no Brasil;
regulação do Banco Central (Resolução CMN 4.893/2021 (e BCB 85/2021) de segurança cibernética, Open Finance) e Febraban.
Atores relevantes (ex.: FIN7, LockBit, grupos de fraude PIX)."

- [ ] **Step 2: Registrar achados com verificação cruzada. [V-FONTE]**

- [ ] **Step 3: Commitar**

```bash
git add fontes-e-referencias/dossie-pesquisa.md
git commit -m "pesquisa: dossiê — setor financeiro (global + Brasil)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Dossiê de pesquisa — setor energia / OT

**Files:**
- Modify: `fontes-e-referencias/dossie-pesquisa.md` (adicionar seção "Energia")

**Interfaces:**
- Produces: seção "## Energia" com números e casos: ameaças OT/ICS, relatório Dragos OT Year in
  Review, Kaspersky ICS-CERT, casos (Ucrânia 2015/2016 BlackEnergy/Industroyer, Colonial Pipeline
  2021, FrostyGoop 2024, Industroyer2), APTs (Sandworm, Volt Typhoon), regulação Brasil (ANEEL,
  ONS, procedimentos de rede), IEC 62443. Consumido pela Task 7.

- [ ] **Step 1: Rodar pesquisa profunda — energia/OT global + Brasil**

Invocar `deep-research`: "Ameaças cibernéticas ao setor de energia e OT/ICS 2025–2026: Dragos OT
Cybersecurity Year in Review 2025; Kaspersky ICS-CERT; malwares ICS (Industroyer/CrashOverride,
Industroyer2, FrostyGoop, Pipedream/Incontroller); grupos (Sandworm/ELECTRUM, Volt Typhoon,
VOLTZITE); casos Colonial Pipeline 2021 e apagões na Ucrânia 2015/2016; modelo Purdue; IEC 62443;
regulação do setor elétrico brasileiro (ANEEL, ONS, procedimentos de rede sobre segurança
cibernética)."

- [ ] **Step 2: Registrar achados com verificação cruzada. [V-FONTE]**

- [ ] **Step 3: Commitar**

```bash
git add fontes-e-referencias/dossie-pesquisa.md
git commit -m "pesquisa: dossiê — setor energia/OT (global + Brasil)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Dossiê de pesquisa — atores, tendências e defesa

**Files:**
- Modify: `fontes-e-referencias/dossie-pesquisa.md` (seções "Atores/TTPs", "Tendências 2026", "Defesa")

**Interfaces:**
- Produces: seções consumidas pelas Tasks 10, 11, 12: taxonomia de atores (nation-state, RaaS,
  hacktivismo), MITRE ATT&CK e ATT&CK for ICS (táticas relevantes), ecossistema RaaS; tendências
  (IA generativa/agêntica ofensiva, deepfakes, ameaça quântica/PQC — NIST FIPS 203/204/205, cadeia
  de suprimentos); frameworks de defesa (NIST CSF 2.0, ISO/IEC 27001:2022, IEC 62443, Zero Trust
  NIST SP 800-207).

- [ ] **Step 1: Rodar pesquisa profunda — atores + tendências + defesa**

Invocar `deep-research`: "(a) Taxonomia de threat actors e MITRE ATT&CK / ATT&CK for ICS 2025–2026,
ecossistema Ransomware-as-a-Service. (b) Tendências 2026: IA generativa e agêntica no ataque e na
defesa; deepfakes em fraude; criptografia pós-quântica (NIST FIPS 203/204/205) e ameaça 'harvest
now, decrypt later'; ataques à cadeia de suprimentos de software. (c) Frameworks de defesa:
NIST CSF 2.0, ISO/IEC 27001:2022, IEC 62443, Zero Trust (NIST SP 800-207)."

- [ ] **Step 2: Registrar achados com verificação cruzada. [V-FONTE]**

- [ ] **Step 3: Commitar**

```bash
git add fontes-e-referencias/dossie-pesquisa.md
git commit -m "pesquisa: dossiê — atores, tendências 2026 e frameworks de defesa

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Capítulo 00 — Metodologia e Fontes

**Files:**
- Create: `00-metodologia-e-fontes/README.md`
- Create: `assets/diagramas/00-hierarquia-fontes.svg`

**Interfaces:**
- Consumes: dossiê (Task 1) e Global Constraints.
- Produces: o argumento de credibilidade e a hierarquia de fontes referenciados pelo README e por todos os capítulos.

- [ ] **Step 1: Escrever a tese "por que não é preciso threat intel paga"**

Seção argumentando: threat intel comercial = telemetria/IOCs/feeds operacionais (insumo de SOC);
apresentação de cenário = relatórios anuais públicos + frameworks + estatística. Diferença entre
inteligência operacional e estratégica. O valor deste repo = curadoria + recorte Brasil + validação
cruzada.

- [ ] **Step 2: Escrever a hierarquia de fontes e critérios de validação**

Tabela com os 4 níveis de fontes (vendors, órgãos, analistas, nacionais BR) e o critério ≥2 fontes.
Aplicar padrão de tabela das Global Constraints. **[V-TAB]**

- [ ] **Step 3: Criar `00-hierarquia-fontes.svg`**

Diagrama em pirâmide/camadas das 4 categorias de fonte, paleta canônica. **[V-SVG]**

- [ ] **Step 4: Validar e commitar**

```bash
xmllint --noout assets/diagramas/00-hierarquia-fontes.svg && echo OK
git add 00-metodologia-e-fontes/ assets/diagramas/00-hierarquia-fontes.svg
git commit -m "cap 00: metodologia e hierarquia de fontes + SVG

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Capítulo 01 — Panorama Global

**Files:**
- Create: `01-panorama-global/README.md`
- Create: `assets/diagramas/01-mapa-calor-ameacas.svg`
- Create: `assets/diagramas/01-timeline-incidentes.svg`

**Interfaces:**
- Consumes: dossiê "Global" (Task 1).
- Produces: contexto macro citado pelos capítulos setoriais e pelo comparativo.

- [ ] **Step 1: Escrever bloco Resumo Executivo + corpo**

Resumo Executivo (3–5 bullets + número-chave, ex.: custo médio global de violação IBM 2025).
Corpo: economia do cibercrime, geopolítica, IA ofensiva, setores mais atacados. Citações `[n]`
resolvendo para o dossiê. **[V-FONTE]**

- [ ] **Step 2: Criar `01-mapa-calor-ameacas.svg`**

Matriz probabilidade × impacto com ameaças posicionadas, paleta canônica (vermelho = crítico).
**[V-SVG]**

- [ ] **Step 3: Criar `01-timeline-incidentes.svg`**

Linha do tempo 2015 → 2026 com marcos (Ucrânia, Colonial, FrostyGoop, incidentes 2025/26).
**[V-SVG]**

- [ ] **Step 4: Inserir imagens no README, montar seção "## Fontes", validar tabelas/links**

**[V-TAB] [V-LINK] [V-PTBR]**

- [ ] **Step 5: Validar SVGs e commitar**

```bash
for f in 01-mapa-calor-ameacas 01-timeline-incidentes; do xmllint --noout assets/diagramas/$f.svg; done && echo OK
git add 01-panorama-global/ assets/diagramas/01-*.svg
git commit -m "cap 01: panorama global 2025-2026 + mapa de calor + timeline

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Capítulo 02 — Setor Financeiro

**Files:**
- Create: `02-setor-financeiro/README.md`
- Create: `assets/diagramas/02-superficie-pix-openfinance.svg`
- Create: `assets/diagramas/02-mapa-regulatorio-financeiro-br.svg`

**Interfaces:**
- Consumes: dossiê "Financeiro" (Task 2).
- Produces: bloco setorial financeiro consumido pelo comparativo (Task 9).

- [ ] **Step 1: Escrever Resumo Executivo + corpo (global → Brasil)**

Ameaças (fraude, DDoS, ransomware, terceiros), atores, casos; depois Brasil: PIX/Open Finance,
Bacen/Res. BCB, Febraban. Citações `[n]`. **[V-FONTE]**

- [ ] **Step 2: Criar `02-superficie-pix-openfinance.svg`**

Topologia lógica do fluxo PIX/Open Finance com vetores de ataque anotados. **[V-SVG]**

- [ ] **Step 3: Criar `02-mapa-regulatorio-financeiro-br.svg`**

Mapa de obrigações regulatórias (Bacen, LGPD, Open Finance) em linha do tempo/camadas. **[V-SVG]**

- [ ] **Step 4: Inserir imagens, "## Fontes", validar. [V-TAB] [V-LINK] [V-PTBR]**

- [ ] **Step 5: Validar SVGs e commitar**

```bash
for f in 02-superficie-pix-openfinance 02-mapa-regulatorio-financeiro-br; do xmllint --noout assets/diagramas/$f.svg; done && echo OK
git add 02-setor-financeiro/ assets/diagramas/02-*.svg
git commit -m "cap 02: setor financeiro (global -> Brasil) + superfície PIX + mapa regulatório

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 8: Capítulo 03 — Setor Energia / OT

**Files:**
- Create: `03-setor-energia/README.md`
- Create: `assets/diagramas/03-modelo-purdue.svg`
- Create: `assets/diagramas/03-mapa-regulatorio-energia-br.svg`

**Interfaces:**
- Consumes: dossiê "Energia" (Task 3).
- Produces: bloco setorial energia consumido pelo comparativo (Task 9).

- [ ] **Step 1: Escrever Resumo Executivo + corpo (global → Brasil)**

OT/ICS, casos (Ucrânia, Colonial, FrostyGoop), APTs (Sandworm, Volt Typhoon); depois Brasil:
ANEEL/ONS, procedimentos de rede. Citações `[n]`. **[V-FONTE]**

- [ ] **Step 2: Criar `03-modelo-purdue.svg`**

Modelo Purdue níveis 0–5 anotado com vetores de ataque OT e zona desmilitarizada industrial.
**[V-SVG]**

- [ ] **Step 3: Criar `03-mapa-regulatorio-energia-br.svg`**

Camadas regulatórias do setor elétrico BR (ANEEL, ONS, IEC 62443 como referência). **[V-SVG]**

- [ ] **Step 4: Inserir imagens, "## Fontes", validar. [V-TAB] [V-LINK] [V-PTBR]**

- [ ] **Step 5: Validar SVGs e commitar**

```bash
for f in 03-modelo-purdue 03-mapa-regulatorio-energia-br; do xmllint --noout assets/diagramas/$f.svg; done && echo OK
git add 03-setor-energia/ assets/diagramas/03-*.svg
git commit -m "cap 03: setor energia/OT (global -> Brasil) + modelo Purdue + mapa regulatório

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 9: Capítulo 04 — Comparativo (clímax)

**Files:**
- Create: `04-comparativo/README.md`
- Create: `assets/diagramas/04-radar-comparativo.svg`

**Interfaces:**
- Consumes: capítulos 02 (Task 7) e 03 (Task 8).
- Produces: síntese comparativa referenciada nas recomendações (Task 13).

- [ ] **Step 1: Escrever a tabela comparativa mestre**

Tabela financeiro × energia em 6+ eixos: superfície de ataque, atores dominantes, motivação,
impacto de um incidente, maturidade defensiva, pressão regulatória. Padrão de tabela das Global
Constraints. **[V-TAB] [V-FONTE]**

- [ ] **Step 2: Escrever a análise cross-over**

Onde os setores convergem (TI corporativa, terceiros, IA) e divergem (OT vs fraude financeira,
impacto físico vs financeiro).

- [ ] **Step 3: Criar `04-radar-comparativo.svg`**

Radar de 6 eixos comparando os dois setores (duas séries sobrepostas, paleta: azul vs âmbar).
**[V-SVG]**

- [ ] **Step 4: Inserir imagem, "## Fontes", validar. [V-LINK] [V-PTBR]**

- [ ] **Step 5: Validar SVG e commitar**

```bash
xmllint --noout assets/diagramas/04-radar-comparativo.svg && echo OK
git add 04-comparativo/ assets/diagramas/04-radar-comparativo.svg
git commit -m "cap 04: comparativo financeiro x energia + radar

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 10: Capítulo 05 — Atores e TTPs

**Files:**
- Create: `05-atores-e-ttps/README.md`
- Create: `assets/diagramas/05-kill-chain-attack.svg`
- Create: `assets/diagramas/05-ecossistema-ransomware.svg`

**Interfaces:**
- Consumes: dossiê "Atores/TTPs" (Task 4).
- Produces: base técnica de atores citada pelos capítulos setoriais e de defesa.

- [ ] **Step 1: Escrever taxonomia de atores + mapeamento MITRE ATT&CK / ATT&CK for ICS**

Nation-state, RaaS, hacktivismo, insider; táticas ATT&CK relevantes a cada setor. Citações `[n]`.
**[V-FONTE]**

- [ ] **Step 2: Criar `05-kill-chain-attack.svg`**

Cyber Kill Chain alinhada às táticas MITRE ATT&CK (fin) e ATT&CK for ICS (energia). **[V-SVG]**

- [ ] **Step 3: Criar `05-ecossistema-ransomware.svg`**

Fluxo do ecossistema RaaS: operador → afiliado → IAB (broker) → vítima → negociação. **[V-SVG]**

- [ ] **Step 4: Inserir imagens, "## Fontes", validar. [V-TAB] [V-LINK] [V-PTBR]**

- [ ] **Step 5: Validar SVGs e commitar**

```bash
for f in 05-kill-chain-attack 05-ecossistema-ransomware; do xmllint --noout assets/diagramas/$f.svg; done && echo OK
git add 05-atores-e-ttps/ assets/diagramas/05-*.svg
git commit -m "cap 05: atores e TTPs + kill chain/ATT&CK + ecossistema ransomware

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 11: Capítulo 06 — Tendências 2026

**Files:**
- Create: `06-tendencias-2026/README.md`
- Create: `assets/diagramas/06-tendencias-radar.svg`

**Interfaces:**
- Consumes: dossiê "Tendências 2026" (Task 4).
- Produces: seção prospectiva citada pelas recomendações (Task 13).

- [ ] **Step 1: Escrever Resumo Executivo + corpo**

IA generativa/agêntica (ataque e defesa), deepfakes em fraude, ameaça quântica e PQC (NIST FIPS
203/204/205, "harvest now, decrypt later"), cadeia de suprimentos de software. Citações `[n]`.
**[V-FONTE]**

- [ ] **Step 2: Criar `06-tendencias-radar.svg`**

Radar/quadrante de tendências por horizonte de tempo × impacto setorial. **[V-SVG]**

- [ ] **Step 3: Inserir imagem, "## Fontes", validar. [V-TAB] [V-LINK] [V-PTBR]**

- [ ] **Step 4: Validar SVG e commitar**

```bash
xmllint --noout assets/diagramas/06-tendencias-radar.svg && echo OK
git add 06-tendencias-2026/ assets/diagramas/06-tendencias-radar.svg
git commit -m "cap 06: tendências 2026 (IA, deepfake, PQC, supply chain) + radar

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 12: Capítulo 07 — Defesa e Frameworks

**Files:**
- Create: `07-defesa-e-frameworks/README.md`
- Create: `assets/diagramas/07-camadas-defesa-zerotrust.svg`

**Interfaces:**
- Consumes: dossiê "Defesa" (Task 4).
- Produces: repertório de controles citado pelas recomendações (Task 13).

- [ ] **Step 1: Escrever mapeamento de frameworks**

NIST CSF 2.0 (Govern/Identify/Protect/Detect/Respond/Recover), ISO/IEC 27001:2022, IEC 62443
(energia/OT), Zero Trust (NIST SP 800-207). Tabela relacionando ameaça → controle → framework.
**[V-TAB] [V-FONTE]**

- [ ] **Step 2: Criar `07-camadas-defesa-zerotrust.svg`**

Diagrama de defesa em profundidade / Zero Trust por camadas. **[V-SVG]**

- [ ] **Step 3: Inserir imagem, "## Fontes", validar. [V-LINK] [V-PTBR]**

- [ ] **Step 4: Validar SVG e commitar**

```bash
xmllint --noout assets/diagramas/07-camadas-defesa-zerotrust.svg && echo OK
git add 07-defesa-e-frameworks/ assets/diagramas/07-camadas-defesa-zerotrust.svg
git commit -m "cap 07: defesa e frameworks (CSF 2.0, ISO 27001, IEC 62443, Zero Trust) + SVG

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 13: Capítulo 08 — Recomendações

**Files:**
- Create: `08-recomendacoes/README.md`
- Create: `assets/diagramas/08-roadmap.svg`

**Interfaces:**
- Consumes: capítulos 04 (Task 9), 06 (Task 11), 07 (Task 12).
- Produces: fechamento acionável referenciado no sumário executivo do README.

- [ ] **Step 1: Escrever roadmap por setor + quick wins + perguntas de board**

Recomendações priorizadas por setor (financeiro / energia), quick wins de 90 dias, e um bloco de
"perguntas que o board deve fazer". **[V-TAB]**

- [ ] **Step 2: Criar `08-roadmap.svg`**

Roadmap em horizontes (0–90 dias, 6 meses, 12+ meses) com trilhas por setor. **[V-SVG]**

- [ ] **Step 3: Inserir imagem, validar. [V-PTBR]**

- [ ] **Step 4: Validar SVG e commitar**

```bash
xmllint --noout assets/diagramas/08-roadmap.svg && echo OK
git add 08-recomendacoes/ assets/diagramas/08-roadmap.svg
git commit -m "cap 08: recomendações e roadmap por setor + SVG

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 14: Fontes, catálogo de vendors e Vozes de Referência

**Files:**
- Create: `fontes-e-referencias/README.md`

**Interfaces:**
- Consumes: `dossie-pesquisa.md` e as seções "## Fontes" de todos os capítulos.
- Produces: bibliografia consolidada, catálogo de vendors e perfis das vozes.

- [ ] **Step 1: Consolidar bibliografia**

Lista única de todas as fontes citadas (deduplicada), agrupada por categoria da hierarquia.
**[V-LINK]**

- [ ] **Step 2: Catálogo de vendors**

Tabela com os ~40 vendors/órgãos citados pelo usuário: nome, categoria, relatório-âncora, foco
(fin/energia/ambos). Padrão de tabela das Global Constraints. **[V-TAB]**

- [ ] **Step 3: Vozes de Referência (catálogo curado)**

Perfis dedicados para ~10–12 nomes prioritários (Greenberg, Alperovitch, Perlroth, Schneier,
Krebs, Hyppönen, Easterly, Carhart, Moussouris, Hunt — ajustável): *quem é → por que importa →
contribuição ao tema*. Demais nomes citados pelo usuário em lista de "menção honrosa" com uma linha
de identificação cada.

- [ ] **Step 4: Validar e commitar**

```bash
git add fontes-e-referencias/README.md
git commit -m "fontes: bibliografia consolidada + catálogo de vendors + Vozes de Referência

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Task 15: Sumário executivo, README final e passe de validação global

**Files:**
- Modify: `README.md` (preencher sumário executivo e revisar índice)

**Interfaces:**
- Consumes: todos os capítulos.

- [ ] **Step 1: Escrever sumário executivo de 1 página no README**

5–7 mensagens-chave do panorama (com números citados), 1 parágrafo de "principal conclusão
comparativa", e ponteiro para recomendações.

- [ ] **Step 2: Passe [V-PTBR] global**

Buscar mojibake e problemas comuns de acentuação em todo o repositório:

```bash
grep -rIlnP "Ã|Â|â\x80|\xEF\xBF\xBD" --include=*.md . || echo "sem mojibake evidente"
```
Corrigir o que aparecer.

- [ ] **Step 3: Passe [V-SVG] global**

```bash
find assets/diagramas -name '*.svg' -print -exec xmllint --noout {} \; && echo "todos os SVG OK"
```

- [ ] **Step 4: Conferir que cada capítulo 01–08 tem bloco Resumo Executivo e ≥1 SVG**

Checklist manual contra o inventário visual da seção 4 do spec.

- [ ] **Step 5: Commit final**

```bash
git add -A
git commit -m "docs: sumário executivo, README final e passe de validação global

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Autorrevisão do plano (cobertura do spec)

- **Setor comparativo fin × energia:** Tasks 7, 8, 9. ✔
- **Audiência mista (exec→téc):** bloco Resumo Executivo em todos os capítulos (Global Constraints + Tasks 6–13). ✔
- **Global → Brasil:** Tasks 6 (global), 7/8 (global→BR). ✔
- **Pesquisa 2025–2026 validada:** Tasks 1–4 (dossiê com ≥2 fontes) + [V-FONTE] em cada capítulo. ✔
- **10 artefatos visuais distribuídos:** _paleta + 00 + 2×(01) + 2×(02) + 2×(03) + 04 + 2×(05) + 06 + 07 + 08 = 13 SVGs. ✔ (excede o mínimo de 10)
- **Metodologia anti-threat-intel-paga:** Task 5. ✔
- **Catálogo curado de vozes/vendors:** Task 14. ✔
- **PT-BR correto:** [V-PTBR] por capítulo + passe global (Task 15). ✔
- **Tabelas bem formatadas:** Global Constraints + [V-TAB] nas tabelas. ✔
- **Frameworks (CSF 2.0, ISO 27001, IEC 62443, Zero Trust):** Task 12. ✔
- **Recomendações/roadmap:** Task 13. ✔

Sem placeholders pendentes. Nomes de arquivos SVG consistentes entre tarefas e passe global (Task 15).
