# Panorama de Risco Cyber

## Setor Financeiro × Energia

**Global → Brasil · 2025–2026**

**Autor:** Almir Meira
**Data:** 21 de julho de 2026

---

## Propósito

Este repositório reúne, em Markdown e SVG, um panorama comparativo do risco cibernético nos
setores **financeiro** e de **energia** — dois pilares de infraestrutura crítica com perfis de
ameaça, atores e maturidade defensiva bem distintos. A construção parte do cenário global
(relatórios anuais de referência, frameworks internacionais, estatística setorial) e desce ao
recorte Brasil (regulação do Banco Central, PIX e Open Finance, ANEEL/ONS), com verificação
cruzada de todo número-chave em pelo menos duas fontes independentes. A tese que sustenta o
projeto — por que essa curadoria substitui a contratação de *threat intelligence* comercial para
uma apresentação de cenário — está detalhada no capítulo 00.

O conteúdo é escrito para uma **audiência mista**: cada capítulo abre com um bloco de "Resumo
Executivo" (leitura de 1 minuto, nível board) e depois aprofunda no técnico (nível SOC/GRC),
permitindo extrair recortes só-executivos, só-financeiros ou só-de-energia conforme a plateia.

---

## Como usar este repositório

- **Leitura sequencial:** siga o índice abaixo, do capítulo 00 ao 08 — a estrutura foi pensada
  como uma narrativa, com o capítulo 04 (Comparativo) como clímax analítico.
- **Leitura por interesse:** cada capítulo é autocontido, com seu próprio Resumo Executivo e seção
  "Fontes"; é possível ler apenas `02-setor-financeiro/` ou `03-setor-energia/` isoladamente.
- **Convenções do repositório:** todo o padrão de estilo (paleta de cores dos diagramas, formato
  de tabela, template de capítulo, convenção de citação `[n]`) está documentado em
  [`ESTILO.md`](ESTILO.md) — consulte antes de propor qualquer alteração de conteúdo.
- **Fontes e evidências:** a bibliografia consolidada, o catálogo de vendors/órgãos e o catálogo
  curado de "Vozes de Referência" estão em [`fontes-e-referencias/`](fontes-e-referencias/); o
  dossiê bruto de pesquisa (números coletados antes da redação) está em
  [`fontes-e-referencias/dossie-pesquisa.md`](fontes-e-referencias/dossie-pesquisa.md).
- **Diagramas:** todos os artefatos visuais (SVG, paleta canônica GitHub dark dimmed) estão em
  [`assets/diagramas/`](assets/diagramas/), referenciados a partir do capítulo correspondente.

---

## Sumário Executivo

- **O *ransomware* acelerou nos dois setores em 2025, mas em intensidades diferentes:** +30% no
  setor financeiro (de 156 para 202 incidentes diretos) e +64% no universo industrial que inclui
  energia (119 grupos ativos, ~3.300 organizações impactadas) — ver capítulo 04.
- **O custo médio de uma violação de dados caiu pela primeira vez em cinco anos** (USD 4,44 milhões
  em 2025, -9% a/a), mas o setor financeiro segue como o 2º mais caro do mundo (USD 5,56 milhões) e
  o de energia soma USD 4,83 milhões, chegando a USD 4,56 milhões quando há impacto direto em OT em
  qualquer setor — ver capítulos 01, 02, 03 e 04.
- **A IA ofensiva já não é hipótese, é operação corrente:** fraude por *deepfake* saltou de 0,1%
  para 6,5% de todas as tentativas de fraude entre 2022 e 2026 (alta de 2.137%), e em novembro de
  2025 a Anthropic documentou o primeiro ataque em larga escala com 80–90% das etapas táticas
  executadas de forma autônoma por um agente de IA, sem alvo financeiro ou de energia nomeado entre
  as vítimas confirmadas — ver capítulo 06.
- **A janela regulatória brasileira está aberta e tem prazo:** as duas regulações setoriais nasceram
  no mesmo ano (Resolução CMN nº 4.893/2021 e BCB nº 85/2021 para o financeiro; RN ANEEL nº
  964/2021 para a energia), mas amadureceram em ritmos opostos — o Banco Central já atualizou sua
  norma em 2025 (prazo março/2026), enquanto a ANEEL só iniciou fiscalização concreta em 2025,
  quatro anos depois da norma entrar em vigor — ver capítulos 04 e 08.
- **A instrumentação de monitoramento é a alavanca mais acionável identificada neste dossiê:** o
  *dwell time* médio de um *ransomware* em ambiente OT cai de 42 para 5 dias — quase 8× mais
  rápido — em organizações com visibilidade OT plena, um ganho de redução de risco que não depende
  de mudança regulatória ou geopolítica — ver capítulo 08.
- **A natureza dos atores dominantes diverge de forma estrutural:** 90% das violações do setor
  financeiro têm motivação financeira direta (cibercrime, DPRK-nexus), enquanto os casos mais
  graves do setor de energia concentram-se em atores estatais (Sandworm/Rússia, Volt Typhoon/China)
  cuja meta é sabotagem ou pré-posicionamento geopolítico, não lucro imediato — ver capítulo 05.
- **Número-chave:** organizações de energia com visibilidade OT plena contêm um *ransomware* em
  5 dias, contra 42 dias de média setorial — a diferença mais acionável de todo o dossiê (capítulo
  08) — enquanto o setor financeiro opera sob prazo regulatório que já comprime a detecção para
  cerca de 72 horas de resposta forense (capítulo 04).

**Principal conclusão comparativa:** financeiro e energia enfrentam, cada vez mais, as mesmas
forças — *ransomware* em alta, risco de terceiros/cadeia de suprimentos e IA ofensiva atingem os
dois setores quase por igual —, mas produzem desfechos de natureza distinta: no financeiro, o dano
se mede em reais desviados, cartões reemitidos e dados pessoais expostos, sob regulação já madura e
comprimida em prazos de horas; na energia, o dano se mede em minutos sem energia, equipamentos
danificados e, no limite, risco à vida, sob uma maturidade defensiva e regulatória ainda
heterogênea. Essa diferença de natureza — não apenas de escala — é o motivo pelo qual nenhum dos
dois setores pode copiar diretamente o roteiro de defesa do outro, ainda que ambos dependam, na
prática, da mesma malha de infraestrutura crítica interdependente (capítulo 04). As implicações
práticas dessa leitura — priorizadas por setor, com quick wins e perguntas de board — estão
consolidadas no capítulo [08 — Recomendações](08-recomendacoes/).

---

## Índice

| # | Capítulo | Conteúdo |
|:---:|:-------------------------------------------------|:--------------------------------------------------------------|
| 00 | [Metodologia e Fontes](00-metodologia-e-fontes/) | Tese anti-threat-intel-paga; hierarquia e validação de fontes |
| 01 | [Panorama Global](01-panorama-global/) | Macro-cenário global 2025–2026: economia do cibercrime, geopolítica, IA ofensiva |
| 02 | [Setor Financeiro](02-setor-financeiro/) | Ameaças, atores e regulação — global → Brasil (PIX, Open Finance, Bacen, Febraban) |
| 03 | [Setor Energia](03-setor-energia/) | OT/ICS, modelo Purdue, IEC 62443 — global → Brasil (ANEEL, ONS) |
| 04 | [Comparativo](04-comparativo/) | Cross-over financeiro × energia — o clímax analítico |
| 05 | [Atores e TTPs](05-atores-e-ttps/) | Threat actors, MITRE ATT&CK / ATT&CK for ICS, ecossistema ransomware |
| 06 | [Tendências 2026](06-tendencias-2026/) | IA ofensiva, deepfakes, criptografia pós-quântica, cadeia de suprimentos |
| 07 | [Defesa e Frameworks](07-defesa-e-frameworks/) | NIST CSF 2.0, ISO/IEC 27001:2022, IEC 62443, Zero Trust |
| 08 | [Recomendações](08-recomendacoes/) | Roadmap por setor, quick wins, perguntas de board |
| — | [Fontes e Referências](fontes-e-referencias/) | Bibliografia, catálogo de vendors, Vozes de Referência |

---

## Guia de estilo

Ver [`ESTILO.md`](ESTILO.md) para: tabela da paleta canônica, template de capítulo, padrão de
tabela Markdown e convenção de citação numérica `[n]`.
