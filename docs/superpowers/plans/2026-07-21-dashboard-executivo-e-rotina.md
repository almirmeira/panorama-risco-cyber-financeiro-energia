# Dashboard Executivo + Rotina Quinzenal — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir um dashboard web executivo (Vite + React + ECharts, build estático offline) que apresenta os resultados do repositório com semáforo, gauges/velocímetros, barras, pizza, radar e timeline — e configurar uma rotina em nuvem que a cada duas semanas reexecuta a pesquisa e abre um PR de atualização.

**Architecture:** SPA React multi-aba servida como bundle estático em `dashboard/dist/`. Componentes reutilizáveis (gauge, semáforo, KPI, gráficos ECharts) alimentados por um único `dashboard.json` curado, extraído do dossiê/capítulos já validados. Nenhum backend, nenhuma dependência de CDN. A rotina de atualização é um agente agendado do Claude Code que opera sobre o repositório e abre Pull Request.

**Tech Stack:** Node.js, Vite, React 18 (JavaScript), ECharts + echarts-for-react, Git/gh CLI.

## Global Constraints

- **Branch de trabalho:** todo o build do dashboard ocorre no branch `feat/dashboard` (criado a partir de `main`); ao final abre-se um PR. NÃO commitar o dashboard direto em `main`.
- **Idioma:** toda a UI e textos em Português do Brasil, com acentuação/cedilha corretas.
- **Offline / sem CDN:** nenhuma referência a host externo no bundle final (`dist/`) — sem `<script src="http...">`, `<link href="http...">`, web fonts remotas, `fetch`/XHR a domínios externos. Vite empacota tudo localmente. Exceção permitida: URLs em conteúdo de texto (ex.: `repoUrl`, links de fontes exibidos como texto/anchor para o usuário clicar) — isso é dado, não carregamento de recurso.
- **Dados dirigidos por arquivo:** os componentes NÃO contêm números hardcoded; todos os valores vêm de `dashboard/src/data/dashboard.json`. Números novos são proibidos — todos provêm do dossiê/capítulos já validados.
- **Rastreabilidade:** todo KPI e todo cartão-semáforo exibe a fonte (`cap. XX`) via componente `FonteTag`. Onde o repositório marcou incerteza, o dado tem `estimativa: true` e o painel mostra selo ⚠.
- **Paleta canônica (GitHub dark dimmed) — única fonte é `src/theme.js`:**
  Fundos `#0d1117`/`#161b22`/`#1c2128`; borda `#30363d`; texto `#e6edf3`/`#c9d1d9`/`#8b949e`;
  azul `#58a6ff`; verde `#3fb950`; vermelho `#f85149`; âmbar `#e3b341`/`#d29922`; roxo `#a371f7`.
  Semáforo: verde=`#3fb950`, âmbar=`#e3b341`, vermelho=`#f85149`.
- **Vite base relativa:** `vite.config.js` usa `base: './'` para o `dist/` funcionar em qualquer caminho de servidor.
- **Commits:** um por tarefa, mensagem PT-BR, trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>` (usar `git -c user.name="Almir Meira" -c user.email="almir.meira.alves@gmail.com"`).
- **Fonte de verdade dos requisitos:** `docs/superpowers/specs/2026-07-21-dashboard-executivo-e-rotina-design.md`.

## Gates de verificação (o "ciclo de teste" deste projeto)

- **[V-BUILD]** `cd dashboard && npm run build` termina com código 0, sem erros.
- **[V-JSON]** `node -e "JSON.parse(require('fs').readFileSync('src/data/dashboard.json','utf8'))"` sem erro; chaves de topo presentes.
- **[V-OFFLINE]** após build, nenhuma tag de recurso externo em `dist/`:
  `grep -rEo '(src|href)="https?://[^"]+"' dist/ | grep -vE 'assets/'` retorna vazio (URLs de texto/anchor no conteúdo são permitidas; o alvo são recursos carregados).
- **[V-DATA]** os componentes não contêm literais numéricos de conteúdo (spot-check por `grep`); leem de props/JSON.
- **[V-PALETTE]** cores usadas em CSS/componentes vêm de `theme.js` (sem hex fora da paleta em componentes/CSS, salvo `#000`/transparências utilitárias declaradas no tema).

O ambiente NÃO tem `xmllint`. Verificação de JSON usa `node`. Verificação de build usa `npm`.

---

## Mapa de arquivos (dashboard/)

| Arquivo | Responsabilidade |
|:--------------------------------------|:------------------------------------------------|
| `package.json`, `vite.config.js`, `index.html` | Projeto Vite + deps + HTML raiz |
| `src/main.jsx`, `src/App.jsx`         | Bootstrap + layout/abas/barra de topo           |
| `src/theme.js`, `src/styles.css`      | Paleta canônica, tema ECharts, CSS base         |
| `src/data/dashboard.json`             | Dados curados (fonte única)                      |
| `src/components/*.jsx`                 | 10 componentes reutilizáveis                     |
| `src/views/*.jsx`                     | 7 views (uma por aba)                           |
| `README.md`                           | Rodar / buildar / transferir                     |

---

## Task 1: Scaffolding do projeto Vite + React

**Files:**
- Create: `dashboard/package.json`, `dashboard/vite.config.js`, `dashboard/index.html`,
  `dashboard/src/main.jsx`, `dashboard/src/App.jsx`, `dashboard/.gitignore`

**Interfaces:**
- Produces: projeto Vite funcional com `App` placeholder renderizando um título. Scripts `dev`, `build`, `preview`.

- [ ] **Step 1: Criar branch de feature**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git checkout -b feat/dashboard
```

- [ ] **Step 2: Inicializar projeto e instalar dependências**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
mkdir -p dashboard && cd dashboard
npm init -y
npm install react react-dom
npm install echarts echarts-for-react
npm install -D vite @vitejs/plugin-react
```

- [ ] **Step 3: Escrever `vite.config.js` (base relativa), `index.html`, `main.jsx`, `App.jsx` placeholder, `.gitignore`**

`vite.config.js` com `base: './'` e plugin React. `index.html` com `<div id="root">` e `<script type="module" src="/src/main.jsx">`, `lang="pt-BR"`, título "Painel Executivo de Risco Cibernético". `App.jsx` placeholder renderizando um `<h1>`. `.gitignore` com `node_modules/` e `dist/`. `package.json` com scripts `"dev":"vite"`, `"build":"vite build"`, `"preview":"vite preview"`.

- [ ] **Step 4: [V-BUILD] Verificar build**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build conclui, cria `dist/index.html`.

- [ ] **Step 5: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/ ':!dashboard/node_modules'
git commit -m "feat(dashboard): scaffolding Vite + React + ECharts"
```

---

## Task 2: Tema (paleta canônica) e CSS base

**Files:**
- Create: `dashboard/src/theme.js`, `dashboard/src/styles.css`
- Modify: `dashboard/src/main.jsx` (importar `styles.css`)

**Interfaces:**
- Consumes: nada.
- Produces: `theme.js` exportando `export const palette = {...}` (todas as cores das Global Constraints por nome: `bgBase, bgPainel, bgCartao, borda, txtTitulo, txtCorpo, txtSec, azul, verde, vermelho, ambar, ambar2, roxo`), `export const semaforo = { verde, ambar, vermelho }`, e `export const echartsTheme = {...}` (objeto de tema ECharts com `backgroundColor`, `textStyle.color`, paleta de séries). CSS com variáveis `:root { --bg-base: ... }` espelhando a paleta, tipografia base (system-ui), e classe container.

- [ ] **Step 1: Escrever `theme.js`**

```js
export const palette = {
  bgBase: '#0d1117', bgPainel: '#161b22', bgCartao: '#1c2128', borda: '#30363d',
  txtTitulo: '#e6edf3', txtCorpo: '#c9d1d9', txtSec: '#8b949e',
  azul: '#58a6ff', verde: '#3fb950', vermelho: '#f85149',
  ambar: '#e3b341', ambar2: '#d29922', roxo: '#a371f7',
};
export const semaforo = { verde: palette.verde, ambar: palette.ambar, vermelho: palette.vermelho };
export const echartsTheme = {
  backgroundColor: 'transparent',
  textStyle: { color: palette.txtCorpo, fontFamily: 'system-ui, sans-serif' },
  color: [palette.azul, palette.ambar, palette.verde, palette.roxo, palette.vermelho, palette.txtSec],
  title: { textStyle: { color: palette.txtTitulo } },
  legend: { textStyle: { color: palette.txtCorpo } },
};
```

- [ ] **Step 2: Escrever `styles.css`**

Variáveis CSS espelhando a paleta; `body { background: var(--bg-base); color: var(--txt-corpo); font-family: system-ui, sans-serif; margin:0 }`; classes utilitárias `.painel` (fundo `--bg-painel`, borda `--borda`, radius, padding), `.grid`, `.container` (max-width, centralizado).

- [ ] **Step 3: Importar CSS em `main.jsx`**

Adicionar `import './styles.css';`.

- [ ] **Step 4: [V-BUILD] Verificar build**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK.

- [ ] **Step 5: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/theme.js dashboard/src/styles.css dashboard/src/main.jsx
git commit -m "feat(dashboard): tema com paleta canônica + CSS base"
```

---

## Task 3: Dados curados — `dashboard.json`

**Files:**
- Create: `dashboard/src/data/dashboard.json`

**Interfaces:**
- Consumes: `fontes-e-referencias/dossie-pesquisa.md` e os capítulos `02`, `03`, `04`, `06`, `08` (números já validados).
- Produces: `dashboard.json` conforme o modelo do spec (seção "Modelo de dados"). Consumido por todas as views.

- [ ] **Step 1: Extrair os números e montar o JSON**

Ler o dossiê e os capítulos e preencher o JSON EXATAMENTE no formato do spec:
`meta`, `setores[]` (financeiro e energia, cada um com `posturaSemaforo`, `riscoScore`, `riscoLabel`, `kpis[]`, `dimensoes[]`, `barra`, `pizza`), `comparativo` (eixos + 2 séries + tabela), `tendencias[]`, `recomendacoes`, `fontes`. Todo número deve existir no repositório; incluir `fonte: "cap. 0X"` em cada KPI/dimensão; marcar `estimativa: true` onde o repo registrou incerteza. Valores de referência a usar (confirmar no repo): Financeiro — custo USD 5,56 mi; 202 incidentes ransomware (+30%); motivação 90% financeira. Energia — custo USD 4,83 mi; ~3.300 orgs (+64%); 22,8% objetos ICS; dwell 42→5 dias. Comparativo — radar 6 eixos (frequência, impacto físico, impacto financeiro, maturidade defensiva, pressão regulatória, exposição a APT estatal) com as duas séries do Cap 04.

- [ ] **Step 2: [V-JSON] Validar o JSON e as chaves de topo**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard
node -e "const d=JSON.parse(require('fs').readFileSync('src/data/dashboard.json','utf8')); ['meta','setores','comparativo','tendencias','recomendacoes','fontes'].forEach(k=>{if(!(k in d))throw new Error('falta '+k)}); if(d.setores.length!==2)throw new Error('setores!=2'); console.log('JSON OK', d.setores.map(s=>s.nome).join(', '))"
```
Expected: `JSON OK Financeiro, Energia` (ou nomes equivalentes).

- [ ] **Step 3: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/data/dashboard.json
git commit -m "feat(dashboard): dados curados (dashboard.json) rastreáveis aos capítulos"
```

---

## Task 4: Componentes-primitiva (semáforo, gauge, KPI, fonte, abas)

**Files:**
- Create: `dashboard/src/components/FonteTag.jsx`, `SemaforoCard.jsx`, `GaugeRisco.jsx`, `KpiTile.jsx`, `TabNav.jsx`

**Interfaces:**
- Consumes: `theme.js`.
- Produces (assinaturas exatas, usadas pelas views):
  - `FonteTag({ fonte, estimativa })` → selo "cap. XX" (+ ⚠ se `estimativa`).
  - `SemaforoCard({ nome, nivel, justificativa, fonte })` — `nivel ∈ {'verde','ambar','vermelho'}`.
  - `GaugeRisco({ valor, label, titulo })` — gauge ECharts 0–100, cor por faixa (0–39 verde, 40–69 âmbar, 70–100 vermelho), `label` textual sob o ponteiro.
  - `KpiTile({ label, valor, unidade, delta, fonte, estimativa })` — delta com ▲/▼ e cor (▲ vermelho para ameaça crescente é o padrão; delta positivo = seta para cima em vermelho).
  - `TabNav({ abas, ativa, onSelecionar })` — `abas: [{id,rotulo}]`.

- [ ] **Step 1: Escrever os 5 componentes**

Cada um usa `palette`/`semaforo` de `theme.js`. `GaugeRisco` usa `echarts-for-react` com `series[0].type:'gauge'`, faixas de cor via `axisLine.lineStyle.color`. `SemaforoCard` mostra bolinha colorida + nome + justificativa + `<FonteTag>`. `KpiTile` grande número + unidade + delta + `<FonteTag>`.

- [ ] **Step 2: [V-BUILD] Verificar build** (importar os componentes temporariamente em App ou usar build que os inclua)

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK (sem erros de import/sintaxe).

- [ ] **Step 3: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/components/
git commit -m "feat(dashboard): componentes-primitiva (semáforo, gauge, KPI, fonte, abas)"
```

---

## Task 5: Componentes de gráfico (barra, pizza, radar, bolha, timeline)

**Files:**
- Create: `dashboard/src/components/BarChart.jsx`, `PieChart.jsx`, `RadarChart.jsx`, `BubbleQuadrant.jsx`, `TimelineChart.jsx`

**Interfaces:**
- Consumes: `theme.js` (echartsTheme).
- Produces (assinaturas exatas):
  - `BarChart({ titulo, categorias, valores, cor })`.
  - `PieChart({ titulo, itens })` — `itens: [{nome, valor}]`, rosca (doughnut).
  - `RadarChart({ eixos, serieA, serieB, nomeA, nomeB })` — 2 séries sobrepostas (A azul, B âmbar).
  - `BubbleQuadrant({ titulo, pontos })` — `pontos: [{nome, x(horizonte 0-3), y(impacto 0-5), setor}]`; eixos rotulados.
  - `TimelineChart({ marcos })` — `marcos: [{horizonte, trilha, item}]` renderizado como linha do tempo por horizonte.

- [ ] **Step 1: Escrever os 5 wrappers ECharts** (todos aplicam `echartsTheme` e usam `ReactECharts`).

- [ ] **Step 2: [V-BUILD] Verificar build**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK.

- [ ] **Step 3: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/components/
git commit -m "feat(dashboard): componentes de gráfico ECharts (barra, pizza, radar, bolha, timeline)"
```

---

## Task 6: Views 1–3 (Visão Geral, Financeiro, Energia)

**Files:**
- Create: `dashboard/src/views/VisaoGeral.jsx`, `Financeiro.jsx`, `Energia.jsx`

**Interfaces:**
- Consumes: `dashboard.json` (importado), componentes das Tasks 4–5.
- Produces: `export default function <Nome>({ dados })` — cada view recebe os dados e renderiza seus painéis.

- [ ] **Step 1: `VisaoGeral.jsx`** — 2 `GaugeRisco` (dos `setores[].riscoScore`), linha de `SemaforoCard` de postura, faixa de `KpiTile` com os KPIs-título de cada setor.

- [ ] **Step 2: `Financeiro.jsx`** — `GaugeRisco`, grade de `SemaforoCard` (dimensões do setor financeiro), `BarChart` (barra do setor), `PieChart` (pizza), `KpiTile`s.

- [ ] **Step 3: `Energia.jsx`** — mesma estrutura para o setor energia.

- [ ] **Step 4: [V-BUILD] Verificar build**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK.

- [ ] **Step 5: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/views/
git commit -m "feat(dashboard): views Visão Geral, Financeiro e Energia"
```

---

## Task 7: Views 4–7 (Comparativo, Tendências, Recomendações, Fontes)

**Files:**
- Create: `dashboard/src/views/Comparativo.jsx`, `Tendencias.jsx`, `Recomendacoes.jsx`, `Fontes.jsx`

**Interfaces:**
- Consumes: `dashboard.json`, componentes.
- Produces: 4 views `export default function <Nome>({ dados })`.

- [ ] **Step 1: `Comparativo.jsx`** — `RadarChart` (comparativo.eixos + 2 séries), dois `GaugeRisco` lado a lado, tabela-semáforo (usa `comparativo.tabela`, células com bolinha de cor).

- [ ] **Step 2: `Tendencias.jsx`** — `BubbleQuadrant` (tendencias→pontos), `SemaforoCard` de urgência por tendência.

- [ ] **Step 3: `Recomendacoes.jsx`** — `TimelineChart`/roadmap (recomendacoes.roadmap), lista de quick wins, bloco de perguntas de board.

- [ ] **Step 4: `Fontes.jsx`** — tese condensada (fontes.metodologiaResumo), hierarquia (fontes.hierarquia), contadores (nVendors, nVozes), link ao repositório (anchor para `repoUrl`).

- [ ] **Step 5: [V-BUILD] Verificar build**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK.

- [ ] **Step 6: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/views/
git commit -m "feat(dashboard): views Comparativo, Tendências, Recomendações e Fontes"
```

---

## Task 8: Integração no App (abas, barra de topo, legenda, rodapé)

**Files:**
- Modify: `dashboard/src/App.jsx`

**Interfaces:**
- Consumes: todas as views, `TabNav`, `dashboard.json`.
- Produces: aplicação completa navegável.

- [ ] **Step 1: Montar o `App`**

Importa `dashboard.json` e todas as views. Estado `abaAtiva` (useState). Barra de topo com: título/subtítulo (de `meta`), e um selo destacado "Última atualização: {meta.geradoEm}" (toque threat intel). `TabNav` com as 7 abas. Renderiza a view ativa passando `dados`. Legenda de semáforo fixa (verde/âmbar/vermelho + critérios). Rodapé com a nota: "Leitura qualitativa de síntese executiva — não é índice quantitativo" + contadores de fonte.

- [ ] **Step 2: [V-BUILD] Build de produção**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard && npm run build
```
Expected: build OK, `dist/` gerado.

- [ ] **Step 3: [V-OFFLINE] Conferir ausência de recursos externos no bundle**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard
grep -rEo '(src|href)="https?://[^"]+"' dist/ | grep -vE 'assets/' || echo "OFFLINE OK (sem recursos externos)"
```
Expected: `OFFLINE OK`.

- [ ] **Step 4: [V-SERVE] Servir e conferir resposta**

```bash
cd ~/panorama-risco-cyber-financeiro-energia/dashboard
npm run preview -- --port 4599 &
sleep 3
curl -sf http://localhost:4599/ | grep -qi "Risco Cibernético" && echo "SERVE OK"
kill %1 2>/dev/null
```
Expected: `SERVE OK`.

- [ ] **Step 5: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/src/App.jsx
git commit -m "feat(dashboard): integração das 7 abas, barra de topo, legenda e rodapé"
```

---

## Task 9: README do dashboard (rodar / buildar / transferir)

**Files:**
- Create: `dashboard/README.md`

**Interfaces:**
- Consumes: nada.

- [ ] **Step 1: Escrever `dashboard/README.md`**

Seções: pré-requisitos (Node ≥ 18); `npm install`; `npm run dev` (desenvolvimento); `npm run build` (gera `dist/`); como transferir — copiar `dist/` para o servidor e servir com nginx/Apache/Caddy ou `python3 -m http.server` (exemplo de bloco nginx); como atualizar os dados (`src/data/dashboard.json`); nota de que é 100% estático/offline. PT-BR.

- [ ] **Step 2: Commit**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git add dashboard/README.md
git commit -m "docs(dashboard): README de execução, build e transferência para servidor"
```

---

## Task 10: PR do dashboard

**Files:** nenhum (operação git/gh).

- [ ] **Step 1: Push e abrir PR**

```bash
cd ~/panorama-risco-cyber-financeiro-energia
git push -u origin feat/dashboard
gh pr create --base main --head feat/dashboard \
  --title "Dashboard executivo de risco cibernético (Financeiro × Energia)" \
  --body "Adiciona dashboard web (Vite + React + ECharts) em dashboard/, com 7 abas, semáforo, gauges, barras, pizza, radar e timeline; dados curados em dashboard/src/data/dashboard.json rastreáveis aos capítulos. Build estático offline em dashboard/dist/.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
Expected: PR criado; imprime a URL.

---

## Task 11: Rotina quinzenal de atualização (nuvem, via PR)

**Files:** nenhum arquivo de código — a rotina é criada via a skill `schedule` (CronCreate). Executada pelo CONTROLADOR, não por subagente.

**Interfaces:**
- Consumes: o repositório publicado.
- Produces: uma rotina agendada com cron `0 8 1,15 * *` e um prompt autocontido.

- [ ] **Step 1: Invocar a skill `schedule`** para criar a rotina com:
  - **Cron:** `0 8 1,15 * *` (dias 1 e 15, 08:00).
  - **Prompt da rotina (autocontido, em PT-BR):**
    > "Você mantém o repositório `almirmeira/panorama-risco-cyber-financeiro-energia` (panorama de risco cyber financeiro × energia). Tarefa quinzenal de REFRESH DE PESQUISA:
    > 1. Leia `fontes-e-referencias/dossie-pesquisa.md` e identifique os números-chave 2025–2026.
    > 2. Com WebSearch/WebFetch, verifique se há dados mais recentes nas fontes primárias (CrowdStrike, Microsoft MDDR, Verizon DBIR, IBM Cost of a Data Breach, Mandiant M-Trends, Dragos OT, Kaspersky ICS-CERT, WEF, ENISA, Bacen, ANEEL/ONS, FS-ISAC), novos incidentes-marco em financeiro/energia, e atualizações regulatórias.
    > 3. REGRA: nunca invente número; cada atualização precisa de ≥2 fontes independentes com link. Se não confirmar, mantenha o valor atual e anote '[NÃO CONFIRMADO em <data>]'. Preserve o estilo/idioma (PT-BR) e a paleta; NÃO altere SVGs.
    > 4. Se houver mudanças validáveis: atualize `fontes-e-referencias/dossie-pesquisa.md`, os números dos capítulos afetados e `dashboard/src/data/dashboard.json`; rode as validações (citações 1:1 sem órfãs em cada capítulo; `dashboard.json` parseável; sem mojibake); crie o branch `refresh/AAAA-MM-DD` e abra um Pull Request para `main` com um resumo em PT-BR do que mudou e as novas fontes. NUNCA faça merge em `main`.
    > 5. Se nada mudar de forma validável, NÃO abra PR; apenas registre 'sem mudanças relevantes nesta janela'."

- [ ] **Step 2: Confirmar criação** — listar a rotina (CronList/`schedule`) e reportar ao usuário o identificador, cron e próxima execução.

---

## Autorrevisão do plano (cobertura do spec)

- **Stack Vite+React+ECharts, build offline:** Tasks 1, 2, 8 ([V-OFFLINE]). ✔
- **7 abas:** Tasks 6–7 (as views) + Task 8 (navegação). ✔
- **10 componentes reutilizáveis:** Tasks 4 (5) + 5 (5). ✔
- **dashboard.json curado, dados rastreáveis, sem número novo:** Task 3 + Global Constraints. ✔
- **Semáforo/gauges/barras/pizza/radar/bolha/timeline:** Tasks 4–5 (componentes) usados em 6–7. ✔
- **Fonte por número + selo ⚠:** `FonteTag` (Task 4), `estimativa` no JSON (Task 3). ✔
- **Selo "última atualização":** Task 8 (`meta.geradoEm`). ✔
- **Paleta canônica única em theme.js:** Task 2 + [V-PALETTE]. ✔
- **README de transferência:** Task 9. ✔
- **Branch feat/dashboard + PR:** Task 1 (branch) + Task 10 (PR). ✔
- **Rotina quinzenal via PR, cron 1 e 15, salvaguardas:** Task 11. ✔

Sem placeholders pendentes. Assinaturas de componentes definidas na Task 4/5 e consumidas nas Tasks 6–8 de forma consistente.
