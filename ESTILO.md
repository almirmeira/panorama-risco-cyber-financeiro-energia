# ESTILO.md — Guia de Estilo do Projeto

> Fonte de verdade de estilo para todo o repositório **Panorama de Risco Cyber: Setor Financeiro ×
> Energia**. Todo capítulo (00–08), o `README.md` e os artefatos em `fontes-e-referencias/` devem
> seguir exatamente as convenções abaixo. Em caso de dúvida, este arquivo prevalece.

---

## 1. Idioma

Português do Brasil integral, em 100% do texto: acentuação, cedilha e caracteres especiais
corretos (ex.: "não", "ação", "índice", "distribuição", "análise"). Nomes próprios, siglas técnicas
e termos consagrados em inglês (ex.: *ransomware*, *Zero Trust*, *dwell time*) permanecem em
inglês, em itálico na primeira ocorrência de cada capítulo.

Antes de cada commit de conteúdo, rodar a checagem de mojibake:

```bash
grep -rIlnP "Ã|Â|â\x80|\xEF\xBF\xBD" --include=*.md .
```

Nenhuma ocorrência esperada; se aparecer, corrigir antes de commitar.

---

## 2. Paleta canônica (GitHub dark dimmed)

Usar **exatamente** estes valores hexadecimais em todo SVG do repositório. Nenhuma outra cor é
permitida sem justificativa registrada no capítulo.

| Papel                        | Nome              | Hex                    | Uso típico                                     |
|:-----------------------------|:------------------|:-----------------------|:------------------------------------------------|
| Fundo base                   | Base              | `#0d1117`              | Tela/fundo geral do SVG                         |
| Fundo painel                 | Painel            | `#161b22`              | Blocos/seções dentro do diagrama                |
| Fundo cartão                 | Cartão            | `#1c2128`              | Cartões, caixas de destaque                     |
| Borda                        | Borda             | `#30363d`              | Contornos, linhas divisórias, grades            |
| Texto — título                | Título            | `#e6edf3`              | Títulos, rótulos principais                     |
| Texto — corpo                 | Corpo             | `#c9d1d9`              | Texto corrido, legendas                         |
| Texto — secundário             | Secundário        | `#8b949e`              | Notas de rodapé, metadados, eixos                |
| Azul (acento/infra)            | Azul              | `#58a6ff`              | Infraestrutura, TI corporativa, série "A"       |
| Verde (positivo/defesa)         | Verde             | `#3fb950`              | Controles, mitigação, maturidade defensiva      |
| Vermelho (ameaça/crítico)        | Vermelho          | `#f85149`              | Ameaças, incidentes críticos, risco alto        |
| Âmbar/ouro (alerta)              | Âmbar             | `#e3b341` / `#d29922`  | Alertas, risco médio, destaque regulatório      |
| Roxo (destaque)                  | Roxo              | `#a371f7`              | Categoria especial, ênfase secundária           |

### 2.1 Referência viva

`assets/diagramas/_paleta.svg` mostra um swatch de cada cor acima com o hex ao lado, sobre fundo
`#0d1117`. Use-o como conferência visual antes de fechar qualquer SVG novo.

---

## 3. Padrão de tabela Markdown

Toda tabela do repositório deve ter:

1. Linha de cabeçalho com `|` nas duas extremidades.
2. Linha separadora com alinhamento **explícito** em cada coluna — `:---` (esquerda), `:---:`
   (centro) ou `---:` (direita). Nunca usar apenas `---` ou `--`.
3. Todas as linhas de dado com `|` fechando a borda direita.

**Exemplo correto:**

| Eixo comparativo         | Setor Financeiro                  | Setor Energia (OT/ICS)            |
|:--------------------------|:-----------------------------------|:------------------------------------|
| Motivação dominante        | Financeira (fraude, extorsão)      | Geopolítica / sabotagem             |
| Impacto de um incidente     | Financeiro, reputacional          | Físico, operacional, potencialmente humano |
| Maturidade defensiva típica  | Alta (regulação madura)          | Heterogênea (TI madura, OT em atraso) |

**Exemplo incorreto (não usar):**

```
Eixo | Financeiro | Energia
-- | -- | --
Motivação | Fraude | Sabotagem
```

(sem `|` de fechamento, sem alinhamento explícito, separador com `--` em vez de `---`).

---

## 4. Template de capítulo (01–08)

Todo capítulo de conteúdo (pastas `01-…` a `08-…`) segue esta estrutura de arquivo `README.md`:

```markdown
# 0X — Título do Capítulo

> **Resumo Executivo**
> - Bullet 1 com a mensagem-chave do capítulo.
> - Bullet 2.
> - Bullet 3.
> - (Bullet 4 e 5 opcionais.)
> - **Número-chave:** valor citado — ex.: "custo médio global de violação de dados em 2025:
>   US$ 4,44 milhões [1]".

## Contexto Global

Corpo do capítulo, começando pelo panorama global, com citações numéricas `[n]` inline.

## Recorte Brasil

(quando aplicável) aprofundamento no cenário nacional.

## [demais seções técnicas do capítulo]

...

## Fontes

[1] Autor/Organização. *Título do relatório ou página*. Ano. URL
[2] Autor/Organização. *Título*. Ano. URL
```

Regras do template:

- O bloco `> **Resumo Executivo**` é sempre a primeira coisa depois do título `# 0X — …`, com 3 a 5
  bullets em bloco de citação Markdown (`>`) e um número-chave citado (`[n]`) entre os bullets.
- Capítulos 00 (Metodologia) e 08 (Recomendações) também abrem com este bloco, adaptando os bullets
  ao conteúdo (00 = teses metodológicas; 08 = prioridades de ação).
- Cada capítulo com artefato visual referencia o SVG por caminho relativo, ex.:
  `![Descrição](../assets/diagramas/0X-nome-do-arquivo.svg)`.
- A seção `## Fontes` é sempre a última do arquivo.

---

## 5. Convenção de citação

- No corpo do texto: numérica entre colchetes, ex.: `[1]`, `[2]`, na ordem de primeira aparição no
  arquivo (numeração reinicia a cada arquivo — não é global ao repositório).
- Toda citação `[n]` deve resolver para uma entrada na seção `## Fontes` ao final do **mesmo
  arquivo**, no formato:

```
[n] Autor/Organização. *Título*. Ano. URL
```

- Quando o número-chave for confirmado por mais de uma fonte, citar ambas: `[1][2]`, e listar as
  duas entradas correspondentes.
- Nenhuma estatística deve ficar sem citação ("estatística órfã").

---

## 6. SVG — convenções técnicas

- Fundo do artboard sempre `#0d1117` (ou `#161b22`/`#1c2128` para painéis internos), nunca branco
  ou transparente sobre texto claro.
- Fonte: `font-family="Segoe UI, Helvetica, Arial, sans-serif"` (sem dependência de fonte externa).
- Todo SVG deve ser bem formado XML. Validar com:

```bash
python3 -c "import xml.dom.minidom,sys; xml.dom.minidom.parse(sys.argv[1])" <arquivo>.svg
```

(uso `xmllint` quando disponível; neste ambiente não está instalado — usar o fallback Python
acima).

- Nome de arquivo: `NN-descricao-curta.svg`, `NN` = número do capítulo com dois dígitos (ex.:
  `03-modelo-purdue.svg`); `_paleta.svg` é exceção (prefixo `_` para ordenar antes de `00` na
  listagem de diretório).

---

## 7. Autoria e metadados

- Autor do projeto: **Almir Meira**.
- Datas no formato `AAAA-MM-DD` ou por extenso em PT-BR ("21 de julho de 2026"), nunca `MM/DD/AAAA`.
- Commits em PT-BR, um por tarefa concluída, com trailer:
  `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.
