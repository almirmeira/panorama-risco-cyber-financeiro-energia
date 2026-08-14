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

Todos os números, textos, níveis de semáforo e séries dos gráficos exibidos no painel vêm de um
único arquivo:

```
src/data/dashboard.json
```

Cada item de dado é rastreável a um capítulo do repositório (campo `fonte`, ex.: `"cap. 02"`) e
pode carregar a marcação `"estimativa": true` quando o número é uma estimativa ou está apenas
parcialmente confirmado — a mesma convenção `⚠` usada no restante do dossiê.

Para atualizar o painel:

1. Edite `src/data/dashboard.json` (ajuste valores, adicione/altere KPIs, dimensões, séries etc.).
2. Rode `npm run dev` para conferir visualmente o resultado antes de publicar.
3. Rode `npm run build` para gerar um novo `dist/` com os dados atualizados.
4. Transfira o novo `dist/` para o servidor, conforme a seção anterior.

Os passos acima descrevem a atualização **manual**. Em produção
(https://score.cecyber.com) esse ciclo é automático — veja a seção seguinte.

---

## Atualização automática (score.cecyber.com)

O painel público roda a edição `financeiro` e se mantém atualizado sozinho, em duas etapas
independentes:

| Etapa | Onde roda | Quando | O que faz |
|-------|-----------|--------|-----------|
| **1. Refresh de pesquisa** | agente Claude Code em nuvem (`trig_01VWt1jLJSSwcxjwZLcLQrjN`) | a cada 3 dias, 20:00 (SP) | Reexecuta a pesquisa nas fontes primárias, atualiza dossiê, capítulos e `dashboard/src/data/dashboard.json`, abre PR e — apenas se as quatro validações passarem — faz merge na `main`. Qualquer validação que falhe deixa o PR aberto, sem merge. |
| **2. Publicação** | VM 41 (`almir-projeto-vm1`), via cron | toda noite, 23:59 (SP) = `59 2 * * *` UTC | Se a `main` tiver commit novo: `npm ci` → build da edição `financeiro` → backup do que está no ar → publicação em `/var/www/panorama-financeiro` → smoke test HTTP, com rollback automático se falhar. Sem commit novo, sai em ~2 s sem tocar em nada. |

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
```

Rollback manual para uma versão anterior:

```bash
sudo rsync -a --delete /var/www/.backups/panorama-financeiro-AAAAMMDD-HHMM/ /var/www/panorama-financeiro/
```

---

## Estrutura de pastas

| Caminho             | Conteúdo                                                                                   |
|----------------------|---------------------------------------------------------------------------------------------|
| `src/components/`    | componentes de visualização reutilizáveis (semáforo, velocímetro/gauge, barras, pizza, radar, timeline, KPI, quadrante de bolhas, navegação por abas etc.) |
| `src/views/`          | telas do painel, uma por recorte de navegação (Visão Geral, Financeiro, Energia, Comparativo, Tendências, Fontes, Recomendações) |
| `src/data/`           | fonte única de dados (`dashboard.json`) consumida por todas as views e componentes           |
| `src/theme.js`        | paleta de cores canônica do repositório e tema visual do ECharts, para manter consistência com os demais diagramas do dossiê |

---

## Nota

Este painel é **100% estático e offline** — não há backend, banco de dados, chamadas de API em
tempo de execução ou dependência de serviços externos. Toda a estilização segue a **paleta
canônica** já usada nos diagramas SVG do repositório (ver `ESTILO.md` na raiz), garantindo
identidade visual consistente entre o dossiê em Markdown e o painel executivo.
