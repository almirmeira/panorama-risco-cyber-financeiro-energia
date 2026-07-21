# Design — Painel Executivo de Risco Cibernético + Rotina Quinzenal

**Data:** 2026-07-21
**Repositório:** `panorama-risco-cyber-financeiro-energia` (privado, GitHub `almirmeira/…`)
**Idioma:** Português do Brasil integral
**Dois sub-projetos:** (1) Dashboard web executivo; (2) Rotina de atualização quinzenal via PR.

---

## Objetivo

Apresentar os resultados do repositório como um **dashboard executivo ilustrado** — estilo console de
threat intelligence, mas voltado a **tomadores de decisão**: pouco texto, muitos indicadores visuais
(semáforo, velocímetros/gauges, barras, pizza, radar, timeline). E manter o material **atualizado**
com uma rotina automatizada que, a cada duas semanas, reexecuta a pesquisa e abre um Pull Request
para revisão humana.

**Princípio de integridade:** o dashboard preserva a honestidade do repositório — cada número traz a
**fonte (cap. XX)**; semáforo e gauges são rotulados como **síntese qualitativa executiva**, não
métrica de falsa precisão (mesma postura do radar do Cap 04). Onde o repo marcou incerteza, o painel
mostra um selo de estimativa/⚠.

---

## Decisões fixadas com o usuário

| Decisão | Escolha |
|:----------------------------|:-----------------------------------------------------------|
| Stack                       | Vite + React + ECharts (build estático offline)            |
| Navegação                   | Multi-visão com 7 abas                                     |
| Dados                       | `dashboard.json` curado, extraído do dossiê/capítulos      |
| Local                       | Subpasta `dashboard/` dentro do repositório existente      |
| Rotina — escopo             | Refresh de pesquisa (dossiê + capítulos + data.json)       |
| Rotina — autonomia          | Abrir Pull Request para revisão (nada em `main` sem aprovar) |
| Rotina — mecanismo          | Rotina em nuvem (Claude Code agendado)                     |
| Rotina — cadência           | Dias 1 e 15 de cada mês, 08:00 (≈ quinzenal)              |

---

## SUB-PROJETO 1 — Dashboard web executivo

### Stack e build

- **Vite + React 18** (JavaScript, não TypeScript, para simplicidade de manutenção).
- **ECharts** via `echarts-for-react` — gauges/velocímetros, barras, pizza/rosca, radar, bolha, timeline.
- **Sem backend, sem CDN:** Vite empacota todas as dependências localmente. `npm run build` gera
  `dashboard/dist/` — pasta estática 100% offline, servível por qualquer servidor web ou
  `python3 -m http.server`.
- **Paleta:** reutiliza a paleta canônica do repositório (GitHub dark dimmed) — definida em um único
  módulo de tema (`src/theme.js`), consumida por CSS e por ECharts.

### Estrutura de arquivos (dashboard/)

| Arquivo | Responsabilidade |
|:--------------------------------------|:------------------------------------------------|
| `dashboard/package.json`              | Dependências e scripts (`dev`, `build`, `preview`) |
| `dashboard/vite.config.js`            | Config Vite (base relativa `./` para portabilidade) |
| `dashboard/index.html`                | HTML raiz                                       |
| `dashboard/src/main.jsx`              | Bootstrap React                                 |
| `dashboard/src/App.jsx`               | Layout, barra de topo, roteamento de abas       |
| `dashboard/src/theme.js`              | Paleta canônica + níveis de semáforo + tema ECharts |
| `dashboard/src/data/dashboard.json`   | **Fonte de dados curada** (ver modelo abaixo)   |
| `dashboard/src/components/`           | Componentes reutilizáveis (ver lista)           |
| `dashboard/src/views/`                | Uma view por aba (7 arquivos)                   |
| `dashboard/README.md`                 | Como rodar (dev/build) e como transferir para servidor |

### Componentes reutilizáveis (`src/components/`)

| Componente | Função |
|:----------------------|:-----------------------------------------------------------|
| `SemaforoCard.jsx`    | Cartão traffic-light (🟢🟡🔴) com dimensão, nível, justificativa e fonte |
| `GaugeRisco.jsx`      | Velocímetro/gauge ECharts (0–100, escala qualitativa rotulada) |
| `KpiTile.jsx`         | Tile de KPI: valor, unidade, delta (▲▼), rótulo e fonte    |
| `BarChart.jsx`        | Barras (ameaças, custos) — wrapper ECharts                 |
| `PieChart.jsx`        | Pizza/rosca (motivação/atores)                             |
| `RadarChart.jsx`      | Radar comparativo (2 séries)                               |
| `BubbleQuadrant.jsx`  | Bolha horizonte × impacto (tendências)                     |
| `TimelineChart.jsx`   | Linha do tempo (roadmap/incidentes)                        |
| `FonteTag.jsx`        | Selo pequeno "cap. XX" (+ selo ⚠ estimativa quando aplicável) |
| `TabNav.jsx`          | Navegação por abas                                        |

### As 7 views (`src/views/`)

1. **VisãoGeral** — 2 `GaugeRisco` (Financeiro, Energia); linha de `SemaforoCard` de postura por
   setor; faixa de `KpiTile` (custo médio de violação, incidentes ransomware, dwell time).
2. **Financeiro** — `GaugeRisco`; grade de `SemaforoCard` por dimensão (fraude/PIX, DDoS, ransomware,
   terceiros, regulação); `BarChart` de ameaças; `PieChart` de motivação (90% financeira);
   `KpiTile` (USD 5,56 mi; 202 incid. +30%).
3. **Energia** — `GaugeRisco`; `SemaforoCard` por dimensão (segmentação TI/OT, APT estatal,
   ransomware industrial, ANEEL, legado); `BarChart` (ICS por subsetor); `PieChart`; `KpiTile`
   (USD 4,83 mi; ~3.300 orgs +64%; 22,8% ICS; dwell 42→5 d).
4. **Comparativo** — `RadarChart` 6 eixos (Fin × Energia); dois `GaugeRisco` lado a lado; tabela-semáforo por eixo.
5. **Tendências** — `BubbleQuadrant` (horizonte × impacto: IA, deepfake, PQC, cadeia); `SemaforoCard`
   de urgência por tendência.
6. **Recomendações** — `TimelineChart`/roadmap por horizonte (0–90 d / 3–6 m / 6–12 m / 12 m+) em 2
   trilhas; lista de quick wins; bloco de perguntas de board.
7. **Fontes & Método** — tese "sem threat intel paga" (condensada); hierarquia de fontes; contadores
   (54 vendors, 25 vozes, "≥2 fontes/número"); link ao repositório.

### Metodologia de semáforo (explícita, no dashboard)

Legenda fixa e visível: 🟢 **Verde** = risco gerenciado / maturidade alta; 🟡 **Âmbar** = atenção /
em maturação; 🔴 **Vermelho** = risco elevado / lacuna. Cada `SemaforoCard` traz justificativa curta e
`FonteTag`. Nota permanente no rodapé: "Leitura qualitativa de síntese executiva, derivada da análise
dos capítulos — não é índice quantitativo."

### Modelo de dados (`src/data/dashboard.json`)

```
meta          → { titulo, subtitulo, periodo, geradoEm, notaMetodo }
setores[]     → { id, nome, posturaSemaforo, riscoScore(0-100), riscoLabel,
                  kpis[ { label, valor, unidade, delta, fonte, estimativa? } ],
                  dimensoes[ { nome, nivel(verde|ambar|vermelho), justificativa, fonte } ],
                  barra { titulo, categorias[], valores[], fonte },
                  pizza { titulo, itens[ { nome, valor } ], fonte } }
comparativo   → { eixos[], serieFinanceiro[], serieEnergia[], escalaNota,
                  tabela[ { eixo, financeiro, energia, semaforoFin, semaforoEnergia } ] }
tendencias[]  → { nome, horizonte, impacto(0-5), exposicaoFin, exposicaoEnergia,
                  semaforoUrgencia, fonte, estimativa? }
recomendacoes → { roadmap[ { horizonte, trilha, item } ], quickWins[], perguntasBoard[] }
fontes        → { metodologiaResumo, hierarquia[ { nivel, exemplos } ], nVendors, nVozes, repoUrl }
```

Todos os números provêm do dossiê/capítulos já validados. Onde o repositório marcou incerteza, o
campo `estimativa: true` liga o selo ⚠.

### Critérios de sucesso (dashboard)

- `npm install && npm run build` gera `dashboard/dist/` sem erros; `npm run dev` sobe local.
- As 7 abas renderizam com dados reais do `dashboard.json` (nada hardcoded nos componentes).
- Todo KPI/semáforo exibe a fonte (cap. XX); selos ⚠ presentes onde o repo marcou incerteza.
- Nenhuma requisição a host externo (offline): build self-contained.
- Paleta canônica em toda a UI e nos gráficos ECharts.
- Responsivo o suficiente para projeção em reunião (largura de tela grande) e telas menores.
- `dashboard/README.md` explica rodar, buildar e transferir para servidor.

---

## SUB-PROJETO 2 — Rotina quinzenal de atualização (nuvem, via PR)

### Mecanismo e cadência

- Rotina agendada do **Claude Code (cloud)**, criada via a skill `schedule` (CronCreate).
- **Cron:** `0 8 1,15 * *` (dias 1 e 15, 08:00) — aproximação limpa de "a cada duas semanas".

### O que a rotina faz a cada execução

1. Garante o repositório atualizado (a rotina opera sobre `almirmeira/panorama-risco-cyber-financeiro-energia`).
2. **Refresh de pesquisa** sobre os números-chave do dossiê: verifica dados 2025–2026 mais recentes
   nas fontes primárias, novos incidentes-marco, atualizações regulatórias — mantendo a **regra
   ≥2 fontes** e a marcação de incertezas.
3. Atualiza os artefatos afetados: `fontes-e-referencias/dossie-pesquisa.md` → números dos capítulos
   impactados → `dashboard/src/data/dashboard.json`.
4. Roda as validações do projeto (citações 1:1 sem órfãs, SVG XML bem-formado, PT-BR/sem mojibake,
   paleta canônica).
5. Cria branch `refresh/AAAA-MM-DD` e abre **Pull Request** com resumo das mudanças e novas fontes.

### Salvaguardas

- **Sem PR-ruído:** se nada mudar de forma validável, a rotina **não abre PR**; registra "sem mudanças
  relevantes" no log.
- **Nunca faz merge em `main`:** apenas abre PR. A decisão é humana.
- **Nunca inventa número:** se uma fonte não puder ser confirmada, mantém o valor atual e anota
  "[NÃO CONFIRMADO em <data>]".
- **Não altera SVGs** nesta rotina (mudança de dado numérico em texto/JSON apenas); ajustes visuais
  ficam para revisão humana.

### Critérios de sucesso (rotina)

- Rotina agendada criada e listável (`schedule`/CronList).
- O prompt da rotina é autocontido e reproduz o fluxo acima.
- Execução de teste (ou dry-run documentado) demonstra: refresh → validação → PR (ou "sem mudanças").
- PR gerado tem título/descrição em PT-BR com o resumo das mudanças e fontes.

---

## Fora de escopo (YAGNI)

- Backend/API, autenticação, banco de dados (o dashboard é estático).
- Deploy automatizado em servidor (o usuário transfere o `dist/` quando quiser).
- Edição de SVGs pela rotina automática.
- Telemetria/IOC em tempo real (continua sendo apresentação de cenário, não SOC operacional).
- Internacionalização (somente PT-BR).
