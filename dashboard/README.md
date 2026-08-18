# Painel Executivo de Risco Cibernético — Financeiro × Energia

Dashboard estático (Vite + React + ECharts) que apresenta, em formato visual para tomadores de
decisão, os resultados do repositório **Panorama de Risco Cyber — Financeiro × Energia**:
semáforo de postura por setor, velocímetros de risco, gráficos de barras, pizza, radar e uma
timeline de eventos-chave. Todo o conteúdo é gerado a partir dos capítulos e fontes já
consolidados no repositório — o painel não faz nenhuma pesquisa nova, apenas visualiza o que já
foi curado e verificado.

---

## Pré-requisitos

| Ferramenta | Versão mínima | Observação                       |
|------------|---------------|-----------------------------------|
| Node.js    | 18            | recomendado 20 ou superior        |
| npm        | incluso no Node.js | usado para instalar e rodar scripts |

---

## Desenvolvimento

Instale as dependências e suba o servidor de desenvolvimento:

```bash
cd dashboard
npm install
npm run dev
```

O Vite inicia em **http://localhost:5173** com *hot reload* — qualquer alteração em `src/` é
refletida no navegador em tempo real.

---

## Build de produção

```bash
npm run build
```

Gera a pasta estática `dist/` — HTML, CSS e JS já otimizados e "bundlados", **100% offline**
(nenhuma dependência de CDN em tempo de execução). É esse `dist/` que deve ser transferido para
qualquer servidor ou hospedagem.

### Pré-visualizar o build localmente

```bash
npm run preview
```

Sobe um servidor local servindo exatamente o conteúdo de `dist/`, útil para validar o resultado
do build antes de transferir para um servidor.

---

## Comandos disponíveis

| Comando         | O que faz                                              |
|-----------------|---------------------------------------------------------|
| `npm install`   | instala as dependências do projeto                      |
| `npm run dev`   | sobe o servidor de desenvolvimento (localhost:5173)      |
| `npm run build` | gera o build de produção estático em `dist/`             |
| `npm run preview` | serve o conteúdo de `dist/` localmente, para conferência |

---

## Como transferir para um servidor

O `dist/` é **100% estático** — não há backend, banco de dados ou API. Basta copiar a pasta para
o servidor de destino e servi-la com qualquer servidor web capaz de entregar arquivos estáticos.

### Teste rápido (sem instalar nada)

```bash
cd dist
python3 -m http.server 8080
```

Acesse `http://<ip-do-servidor>:8080`.

### Nginx (produção)

Copie o conteúdo de `dist/` para, por exemplo, `/var/www/panorama-risco-cyber/`, e use um bloco
como este:

```nginx
server {
    listen 80;
    server_name painel.exemplo.com.br;

    root /var/www/panorama-risco-cyber;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Recarregue o Nginx (`sudo nginx -t && sudo systemctl reload nginx`) após copiar os arquivos.

> **Nota sobre caminhos:** o `vite.config.js` do projeto define `base: './'` (caminhos relativos).
> Isso significa que o conteúdo de `dist/` funciona tanto servido na **raiz** de um domínio
> (`https://painel.exemplo.com.br/`) quanto em um **subdiretório**
> (`https://exemplo.com.br/painel-risco-cyber/`) — não é preciso reconfigurar nada ao mudar de
> lugar, basta copiar a pasta inteira para o destino desejado.

Qualquer outro servidor web estático (Apache, Caddy, um bucket S3/Cloudflare Pages, GitHub Pages
etc.) serve igualmente bem — o único requisito é servir `index.html` como fallback para rotas não
encontradas, caso a aplicação evolua para múltiplas rotas de navegador.

---

## Como atualizar os dados

O painel tem **duas camadas de dado, com ciclos diferentes** — confundi-las é o erro mais provável
para quem mexe aqui:

| Camada | Arquivo | Quando muda | Vai ao ar |
| :-- | :-- | :-- | :-- |
| **Curada** (KPIs, semáforos, comparativos) | `src/data/dashboard.json`, embutido no build | a cada refresh de pesquisa (3 dias) | só com um build novo |
| **Operacional** (Ameaças ao Vivo, Brasil, Extorsão & Exploração) | `/var/www/threat-live/threat-live.json`, lido em runtime | a cada 20 min, pela ingestão | sem rebuild — o SPA busca o arquivo |

A camada operacional é produzida por [`ingest/`](ingest/) e **não** passa por este `npm run build`.
Um painel publicado há três dias continua mostrando indicadores de vinte minutos atrás.

### Camada curada — `src/data/dashboard.json`

Cada item é rastreável a um capítulo do repositório (campo `fonte`, ex.: `"cap. 02"`) e pode
carregar `"estimativa": true` quando o número é estimativa ou está parcialmente confirmado — a mesma
convenção `⚠` do restante do dossiê.

O bloco `meta` carrega **duas datas que não são a mesma coisa**:

- `geradoEm` — quando um número do painel mudou pela última vez;
- `verificadoEm` — quando as fontes foram varridas pela última vez, mesmo que nada tenha mudado.

O carimbo do cabeçalho mostra as duas ("Verificado em X · dado de Y") sempre que diferem. Sem essa
distinção, um ciclo saudável que conferiu tudo e não achou novidade fica indistinguível de uma
rotina morta — foi exatamente a confusão que ocorreu em agosto de 2026.

### A aba Fontes & Método — as duas camadas se declaram ali

A chave `fontes` do `dashboard.json` alimenta a aba **Fontes & Método**, e ela cobre as **duas**
camadas: `hierarquia` (estratégica), `operacionais` + `descartadas` + `governanca` (operacional),
mais `camadas`, `cuidadosMetodologicos`, `cadencia` e `incorporacoesRecentes`. A aba é o único lugar
do painel onde o leitor descobre de onde vem o que está vendo e por que uma fonte ausente está
ausente.

Cada entrada de `operacionais` traz um campo `chaveAoVivo`, que é o **nome exato** da fonte no
`threat-live.json`. É por ele que a aba mostra o estado de cada fonte no último ciclo de ingestão.
Se o nome mudar em [`ingest/ingest_threat_intel.py`](ingest/) e não aqui, a coluna "último ciclo"
fica vazia sem quebrar nada — silenciosamente.

> **Regra:** fonte nova (ou fonte testada e recusada) na ingestão só está entregue quando aparece em
> três lugares: no script, aqui em `fontes` e na
> [Parte 4 de `../fontes-e-referencias/README.md`](../fontes-e-referencias/). Foi exatamente essa
> defasagem que deixou a aba descrevendo só a camada estratégica enquanto metade do painel já vinha
> da operacional.

Para atualizar:

1. Edite `src/data/dashboard.json` (valores, KPIs, dimensões, séries) e a data de `meta`.
2. Rode `npm run dev` para conferir visualmente antes de publicar.
3. Rode `npm run build` para gerar um novo `dist/`.
4. Transfira o novo `dist/` para o servidor, conforme a seção anterior.

Os passos acima descrevem a atualização **manual**. Em produção
(https://score.cecyber.com) esse ciclo é automático — veja a seção seguinte.

---

## Atualização automática (score.cecyber.com)

O painel público roda a edição `financeiro` e se mantém atualizado sozinho, em etapas
independentes:

| Etapa | Onde roda | Quando | O que faz |
|-------|-----------|--------|-----------|
| **1. Refresh de pesquisa** | agente Claude Code em nuvem (`trig_01VWt1jLJSSwcxjwZLcLQrjN`) | a cada 3 dias, 20:00 (SP) | Reexecuta a pesquisa nas fontes primárias, atualiza dossiê, capítulos e `dashboard/src/data/dashboard.json`, abre PR e — apenas se as quatro validações passarem — faz merge na `main`. Qualquer validação que falhe deixa o PR aberto, sem merge. Ciclo sem novidade não abre PR: só carimba `meta.verificadoEm` direto na `main`. |
| **2. Publicação** | VM 41 (`almir-projeto-vm1`), via cron | toda noite, 23:59 (SP) = `59 2 * * *` UTC | Se a `main` tiver commit novo: checagem de espaço em disco → `npm ci` → build da edição `financeiro` → backup do que está no ar → publicação em `/var/www/panorama-financeiro` → smoke test HTTP, com rollback automático se falhar. Sem commit novo, sai em ~2 s sem tocar em nada. |
| **3. Ingestão operacional** | VM 41, systemd timer `panorama-ti` | a cada 20 min | MISP + ThreatFox + ransomware.live (setor e país) + CISA KEV → `/var/www/threat-live/threat-live.json`. Não depende da etapa 2: o arquivo é lido em runtime pelo SPA. Detalhes em [`ingest/README.md`](ingest/README.md). |
| **4. Teto da `audit_logs`** | VM 41, systemd timer `misp-audit-cap` | de hora em hora | Zera a tabela de auditoria do MISP quando passa de 1 GiB. Existe porque ela crescia ~2 GB/dia e encheu o disco em 14/08/2026, derrubando as etapas 2 e 3 ao mesmo tempo. |

Script da etapa 2: [`deploy/deploy-vm41.sh`](deploy/deploy-vm41.sh) — versionado aqui e
auto-sincronizado na VM ao fim de cada ciclo.

> **Cuidado ao mexer no crontab da VM:** ela roda em UTC e o cron do Ubuntu **não** suporta fuso por
> usuário (`man 5 crontab`, seção *LIMITATIONS*) — `CRON_TZ`/`TZ` no crontab mudam só o ambiente do
> comando, não o horário de disparo. Por isso a entrada é `59 2 * * *` em UTC, equivalente a 23:59
> em São Paulo. O Brasil não adota horário de verão desde 2019, então o UTC-3 é fixo o ano todo.

**Por que a publicação verifica todas as noites se o refresh é a cada 3 dias:** o cron do agente em
nuvem só expressa "a cada 3 dias" como `*/3` no campo dia-do-mês, e esse campo reinicia a cada mês
(31/08 → 01/09 é 1 dia, não 3). Dois relógios de 3 dias independentes sairiam de fase na virada de
mês, e uma pesquisa nova poderia esperar até 2 dias para ir ao ar. Verificando toda noite, a
publicação acompanha o refresh no mesmo dia — o trabalho pesado continua a cada 3 dias.

Operação:

```bash
ssh ttx                                    # VM 41
~/deploy-panorama.sh --force               # publicar agora, mesmo sem commit novo
tail -f ~/deploy-panorama.log              # acompanhar os ciclos
ls -1dt /var/www/.backups/panorama-*       # backups (os 5 mais recentes)
df -h /                                    # 1º lugar a olhar quando algo parou
sudo systemctl start panorama-ti.service   # forçar uma ingestão operacional
systemctl list-timers panorama-ti.timer misp-audit-cap.timer
```

> **Se o painel parar de atualizar, cheque o disco antes de qualquer outra coisa.** Em agosto de 2026
> o disco encheu e as duas metades pararam juntas — o publicador falhando num `git reset` que não
> mencionava disco, e a ingestão sem conseguir gravar o JSON. Hoje o `deploy-vm41.sh` mede o espaço
> livre no início do ciclo e aborta com o número e os maiores ocupantes de `/var/lib`, mas o reflexo
> continua valendo: duas rotinas independentes falhando no mesmo dia é sinal de recurso compartilhado.

Rollback manual para uma versão anterior:

```bash
sudo rsync -a --delete /var/www/.backups/panorama-financeiro-AAAAMMDD-HHMM/ /var/www/panorama-financeiro/
```

---

## Estrutura de pastas

| Caminho             | Conteúdo                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------|
| `src/components/`    | componentes de visualização reutilizáveis (semáforo, velocímetro/gauge, barras, pizza, radar, timeline, KPI, quadrante de bolhas, navegação por abas etc.) |
| `src/views/`          | telas do painel, uma por recorte de navegação — operacionais (Ameaças ao Vivo, **Brasil**, Extorsão & Exploração) e curadas (Visão Geral, Financeiro, Energia, Comparativo, Tendências, Recomendações, Fontes) |
| `src/hooks/`          | `useThreatLive.js`, que busca o `threat-live.json` em runtime e calcula o frescor do dado    |
| `src/data/`           | dados curados (`dashboard.json`), embutidos no build e consumidos pelas views setoriais       |
| `ingest/`             | ingestão da camada operacional (MISP, ThreatFox, ransomware.live, CISA KEV), taxonomia financeira e o teto da `audit_logs` — roda na VM, fora do build |
| `deploy/`             | `deploy-vm41.sh`, o publicador versionado que a VM auto-sincroniza a cada ciclo               |
| `src/theme.js`        | paleta de cores canônica do repositório e tema visual do ECharts, para manter consistência com os demais diagramas do dossiê |

---

## Nota

Este painel **não tem backend**: nenhum servidor de aplicação, banco de dados ou serviço externo
sustenta o que está no ar. A camada curada é totalmente estática, embutida no build. A camada
operacional acrescentou **uma única leitura em runtime** — o SPA busca `/data/threat-live.json`,
um arquivo servido pelo mesmo nginx e produzido offline pela ingestão. Nada é buscado do navegador
para fora do domínio, então o painel continua funcionando sem acesso a nenhuma API de terceiro; se
o arquivo faltar, as abas operacionais dizem isso na tela em vez de quebrar.

Toda a estilização segue a **paleta canônica** já usada nos diagramas SVG do repositório (ver
`ESTILO.md` na raiz), garantindo identidade visual consistente entre o dossiê em Markdown e o
painel executivo.
