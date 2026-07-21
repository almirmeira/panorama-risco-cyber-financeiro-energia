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

*(seção a preencher na tarefa final de consolidação — ver Task 15 do plano de implementação)*

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
