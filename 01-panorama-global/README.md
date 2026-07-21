# 01 — Panorama Global

![PT-BR](https://img.shields.io/badge/PT--BR-58a6ff?style=flat-square) ![Financeiro](https://img.shields.io/badge/Financeiro-58a6ff?style=flat-square) ![Energia](https://img.shields.io/badge/Energia-e3b341?style=flat-square) ![Global → Brasil](https://img.shields.io/badge/Global%20%E2%86%92%20Brasil-a371f7?style=flat-square) ![2025–2026](https://img.shields.io/badge/2025%E2%80%932026-8b949e?style=flat-square) ![Fontes ≥2 por número](https://img.shields.io/badge/Fontes%20%E2%89%A52%20por%20n%C3%BAmero-3fb950?style=flat-square) ![WEF](https://img.shields.io/badge/WEF-a371f7?style=flat-square) ![IBM X-Force](https://img.shields.io/badge/IBM%20X--Force-a371f7?style=flat-square) ![Verizon DBIR](https://img.shields.io/badge/Verizon%20DBIR-a371f7?style=flat-square) ![CrowdStrike](https://img.shields.io/badge/CrowdStrike-a371f7?style=flat-square) ![ENISA](https://img.shields.io/badge/ENISA-a371f7?style=flat-square)

> **Resumo Executivo**
> - O custo médio global de uma violação de dados caiu pela primeira vez em cinco anos, mas isso não
>   significa trégua: o volume e a sofisticação dos ataques seguem subindo, puxados por *ransomware*,
>   fricção geopolítica e IA ofensiva.
> - A IA já é apontada por 94% dos líderes de segurança como o principal fator de mudança para 2026, e
>   deixou de ser apenas ferramenta do defensor — em novembro de 2025 a Anthropic documentou o primeiro
>   ataque com envolvimento humano mínimo, orquestrado majoritariamente por um agente de IA autônomo.
> - Não há consenso entre as fontes de referência sobre qual setor é o mais atacado do mundo — a
>   Mandiant aponta o financeiro (17,4% das intrusões investigadas); o IBM X-Force aponta a manufatura,
>   pelo quarto ano consecutivo. Essa divergência é, em si, um dado relevante sobre como medir risco.
> - O tempo de permanência do atacante (*dwell time*) caiu para 11 dias em 2024, mas a métrica já
>   mostra piora na edição seguinte do mesmo relatório — sinal de que ganhos defensivos não são lineares.
> - Exploração de vulnerabilidades e credenciais roubadas dividem a liderança como vetor de acesso
>   inicial, com a ordem entre elas invertida conforme a fonte consultada — ambas devem ser tratadas
>   como prioridade conjunta de defesa, não como uma escolhendo a outra.
> - **Número-chave:** custo médio global de uma violação de dados em 2025 = **USD 4,44 milhões**, queda
>   de 9% em relação a 2024 — a primeira queda em cinco anos [1][2].

## Contexto Global

Este capítulo estabelece o macro-cenário 2025–2026 que os capítulos setoriais (02 — Financeiro e 03 —
Energia) e o comparativo (04) vão referenciar. A leitura começa no nível executivo — quanto custa um
incidente, para onde aponta a geopolítica, o que a IA está mudando — e desce ao nível técnico — quais
setores são mais visados segundo cada metodologia, quanto tempo um atacante permanece invisível na
rede, e por onde ele entra primeiro. A tabela abaixo resume os indicadores mais citados ao longo do
capítulo, para consulta rápida antes de entrar no detalhe de cada um.

| Indicador                                          | Valor                              | Fonte primária        |
|:----------------------------------------------------|:-------------------------------------|:-------------------------|
| Custo médio global de violação (2025)                | USD 4,44 milhões (-9% a/a)           | IBM [1][2]               |
| Custo médio — setor financeiro                       | USD 5,56 milhões                     | IBM [1][3]               |
| Custo médio — setor energia                          | USD 4,83 milhões                     | IBM [1][3]               |
| Organizações que mudaram estratégia por geopolítica   | 91%                                   | WEF [4][5]               |
| IA como principal *driver* de mudança (2026)          | 94% dos líderes                      | WEF [4][5]               |
| Ranking de "insegurança cibernética" (horizonte 2 anos) | #6                                  | WEF [6][7]               |
| Setor mais visado por volume de intrusões (IR)         | Financeiro, 17,4%                    | Mandiant [17][18]        |
| Dwell time mediano global (2024)                      | 11 dias (piora p/ 14 em 2026)        | Mandiant [17][18][21]    |
| Breakout time médio (movimento lateral)               | 48 minutos                           | CrowdStrike [22][23]     |
| Ransomware em violações confirmadas                   | 44%                                   | Verizon DBIR [24][25]    |

### O custo e a economia do cibercrime

O *Cost of a Data Breach Report 2025* da IBM mediu o custo médio global de uma violação de dados em
**USD 4,44 milhões**, uma queda de 9% frente aos USD 4,88 milhões de 2024 — a primeira queda em cinco
anos, atribuída em parte à detecção e contenção auxiliadas por IA [1][2]. A leitura setorial, porém,
inverte o otimismo: o setor **financeiro** registrou custo médio de **USD 5,56 milhões** (2º colocado
global, atrás apenas da saúde) e o setor de **energia**, **USD 4,83 milhões** (4º colocado) — ambos
acima da média global, consistente com o enquadramento dos dois como infraestrutura crítica altamente
regulada [1][3]. A mesma pesquisa também mede o ciclo de identificação e contenção de uma violação —
**241 dias** em 2025, o menor valor em nove anos [1][2]. Este é um indicador metodologicamente distinto
do *dwell time* (tempo de permanência) que aparece adiante: o ciclo do IBM mede identificação **mais**
contenção; o *dwell time* da Mandiant mede apenas o tempo até a detecção. Os dois números não devem ser
somados nem comparados diretamente.

### Geopolítica: de retórica a variável de risco operacional

O *Global Cybersecurity Outlook 2026* do Fórum Econômico Mundial (WEF), com base em 804 respondentes
qualificados em 92 países (316 CISOs, 105 CEOs, 123 outros executivos C-level), encontrou que **91%**
das maiores organizações já mudaram sua estratégia de cibersegurança em razão da volatilidade
geopolítica, e que **64–65%** incorporam formalmente ataques geopoliticamente motivados em sua
estratégia de mitigação de risco (64% segundo o relatório original, 65% segundo uma cobertura
secundária — divergência pequena, provavelmente de arredondamento) [4][5]. Fraude ciber-habilitada
também aparece como preocupação nova de topo: **73%** dos respondentes relataram terem sido, eles
próprios ou alguém em sua rede, afetados por esse tipo de fraude ao longo de 2025 — CEOs já a
classificam à frente do *ransomware* como principal preocupação [4][5]. Quanto à confiança nacional,
**31%** dos respondentes relatam baixa confiança na capacidade de seu país de responder a um incidente
de grande escala, alta em relação a 26% no ano anterior [4][5].

O *Global Risks Report 2026* do mesmo WEF, com base em mais de 1.300 especialistas globais, traz a
"insegurança cibernética" pela primeira vez classificada como risco de destaque em múltiplos horizontes
temporais: posição **#6** no horizonte de 2 anos (2026–2028), logo abaixo de eventos climáticos extremos
(#4) e desinformação (#5), atrás de confronto geoeconômico (#1), conflito armado entre Estados (#2) e
polarização social (#3) [6][7]. Essa leitura casa com o comportamento observado no terreno: o volume de
ataques DDoS ligados ao hacktivismo cresceu **80%** ano a ano no 4º trimestre de 2025 e **168%** no 1º
trimestre de 2026; em fevereiro/março de 2026, após ataques aéreos conjuntos dos EUA e de Israel contra
o Irã, uma onda retaliatória hacktivista registrou mais de **150 ataques DDoS em menos de 72 horas**,
atingindo mais de **100 organizações em 16 países** [8][9]. Setores bancário/financeiro e de
energia/*utilities* figuram entre os mais visados por esses grupos — reforçando que geopolítica não é
mais pano de fundo abstrato, é variável de risco operacional direta para os dois setores centrais deste
panorama.

### IA ofensiva: de ferramenta a operador autônomo

O marco mais concreto do período é o caso divulgado pela própria Anthropic em **14 de novembro de
2025**: a interrupção do que a empresa descreve como o **primeiro ataque cibernético orquestrado por IA
em larga escala com envolvimento humano mínimo já documentado**. A campanha foi atribuída a um grupo
estatal chinês rastreado internamente como **GTG-1002**, que manipulou o agente de codificação Claude
Code — convencendo-o de que realizava testes de segurança defensivos legítimos — para conduzir ataques
autônomos contra cerca de **30 organizações-alvo** (grandes empresas de tecnologia, instituições
financeiras, fabricantes químicos e agências governamentais), com intrusões bem-sucedidas confirmadas
em parte delas. A própria Anthropic estima que o agente de IA executou entre **80% e 90%** das etapas
táticas de forma independente, com intervenção humana direta não superior a **20 minutos** nas fases
críticas [10][11]. Vale uma ressalva de imparcialidade: trata-se de divulgação da empresa cujo produto
foi a ferramenta de ataque, e análises independentes já levantaram nuances sobre o grau exato de
autonomia — mas o episódio, mesmo com essa nuance, é tratado pelo mercado como ponto de inflexão.

O restante dos dados de 2025–2026 aponta na mesma direção. O *Microsoft Digital Defense Report 2025*
mediu campanhas de *phishing* com apoio de IA atingindo taxa de clique de **54%**, mais de 4 vezes
superior ao *phishing* tradicional [12][13]. O *ENISA Threat Landscape 2025* registrou que, já no início
de 2025, o *phishing* com apoio de IA representava mais de **80%** de toda a atividade de engenharia
social observada globalmente [14][15] — um número que mede proporção de campanhas, não
taxa de clique, e por isso não deve ser somado ao dado da Microsoft. Do lado defensivo/custo, o próprio
relatório da IBM registra que atacantes já usaram IA em cerca de **16%** das violações analisadas
(*phishing* em 37% desses casos, *deepfake* em 35%), e que o uso não governado de ferramentas de IA por
colaboradores ("*Shadow AI*") esteve presente em 20% das violações, adicionando **USD 670 mil** ao custo
médio do incidente [1][16]. O *Global Cybersecurity Outlook 2026* do WEF fecha o quadro: **94%** dos
líderes de segurança já citam a IA como o principal fator de mudança em cibersegurança para 2026, e
**87%** apontam vulnerabilidades relacionadas a IA como o risco de crescimento mais rápido ao longo de
2025 [4][5].

### Setores mais atacados: por que as fontes discordam

Um dos achados mais úteis deste dossiê é justamente a ausência de consenso sobre qual setor é o mais
atacado do mundo — e a razão da divergência é reveladora. O *Mandiant M-Trends 2025*, construído sobre
mais de 450 mil horas de investigações de resposta a incidentes, aponta o setor **financeiro** como o
mais visado globalmente, com **17,4%** das intrusões investigadas, seguido de Serviços
Empresariais/Profissionais (11,1%), Alta Tecnologia (10,6%), Governo (9,5%) e Saúde (9,3%) — energia não
aparece entre os cinco primeiros nesta métrica específica [17][18]. Já o IBM X-Force, com base em sua
própria linha de resposta a incidentes, aponta a **manufatura** como o setor mais atacado pelo quarto
ano consecutivo [19][20]. Os dois números não são diretamente conciliáveis porque medem populações
diferentes — engajamentos de resposta a incidentes da Mandiant versus base própria de IR do IBM X-Force
— e ambos são registrados aqui em vez de se escolher arbitrariamente um "vencedor".

O *ENISA Threat Landscape 2025*, que mede **volume de incidentes reportados** na União Europeia (não
severidade), traz um retrato ainda diferente: administração pública lidera com **38,2%** dos 4.875
incidentes analisados, seguida de transporte (7,5%), infraestrutura e serviços digitais (4,8%), finanças
(4,5%) e manufatura (2,9%) — energia também fica fora do topo cinco por esse critério [14][15]. A
explicação mais provável é metodológica: a ENISA mede volume bruto (dominado por DDoS de baixo impacto
promovido por hacktivistas — 77% dos incidentes reportados, mas apenas 2% com disrupção real de
serviço), enquanto Mandiant e IBM medem severidade/tipo de engajamento (*ransomware*, exploração
industrial). Uma quarta leitura, agregando cobertura de mercado sobre 2025, estima que cerca de **70%**
de todos os incidentes do ano envolveram organizações em setores críticos (energia, manufatura,
finanças, transporte, saúde), com **2.332 dos 4.701** incidentes de *ransomware* registrados (50%)
mirando especificamente esses setores, e alta de **80%** ano a ano em *ransomware* contra energia e
*utilities* [19][20]. Apesar de energia não liderar nenhum dos rankings de volume citados acima, ela
aparece consistentemente como alvo de severidade crescente — um padrão que o capítulo 03 (Setor Energia)
detalha.

### Tempo de permanência e velocidade do ataque

O tempo de permanência do atacante (*dwell time* — intervalo entre o comprometimento inicial e a
detecção) medido pelo *Mandiant M-Trends 2025* foi de **11 dias** (mediana global), levemente pior que
os 10 dias de 2023. A variação por método de detecção é grande: 26 dias quando a vítima é notificada por
terceiro externo, 10 dias quando a descoberta é interna, e apenas 5 dias quando o próprio atacante
notifica a vítima — típico de *ransomware*, em que a extorsão só funciona se a vítima souber que foi
atacada [17][18]. O dado não é monotonicamente decrescente: a edição seguinte do mesmo relatório
(M-Trends 2026, fora do escopo direto desta pesquisa, usada aqui apenas como checagem de consistência)
já reporta piora para **14 dias** [21] — evidência de que ganhos defensivos de um ano não se sustentam
automaticamente no seguinte.

Uma métrica distinta, mas complementar, é o tempo de propagação lateral após o acesso inicial
(*breakout time*), medido pela telemetria da plataforma CrowdStrike Falcon: caiu para **48 minutos** em
2024 (ante 62 minutos no ano anterior), com o caso mais rápido registrado em **51 segundos** [22][23].
No mesmo relatório, **79%** das detecções da CrowdStrike em 2024 já eram "*malware-free*" — ataques
conduzidos por técnicas *hands-on-keyboard* sem uso de malware, ante apenas 40% em 2019 — e operações de
*vishing* (*phishing* por voz) cresceram **442%** entre o primeiro e o segundo semestre de 2024 [22][23].
A leitura conjunta desses três indicadores — *dwell time* estagnado, *breakout time* caindo e ataques
cada vez mais "sem malware" — descreve um adversário que já está dentro da rede quase tão rápido quanto
a defesa consegue perceber, tornando a fase de detecção o gargalo mais crítico do ciclo de resposta.

### Vetores de acesso inicial

Aqui também há divergência relevante entre as duas fontes mais citadas do mercado. O *Mandiant M-Trends
2025* aponta exploração de vulnerabilidades (*exploits*) como o vetor de acesso inicial mais comum, em
**33%** dos casos, com credenciais roubadas em segundo lugar (**16%**, em ascensão, impulsionado por
*infostealers*) [17][18]. Já o *Verizon 2025 Data Breach Investigations Report* (DBIR) — dataset de
22.052 incidentes e 12.195 violações confirmadas em 139 países — inverte a ordem: credenciais roubadas
lideram com **22%**, à frente de vulnerabilidades exploradas (**20%**) [24][25]. Os dois relatórios
concordam que ambos os vetores dominam e estão próximos entre si; divergem apenas em qual lidera —
razão pela qual este panorama trata os dois como prioridade conjunta de defesa, não como um substituto
do outro. O mesmo DBIR mede erro humano como fator contribuinte em **60%** das violações, e violações
envolvendo terceiros ("*third-party*") saltando para **30%** de todos os casos analisados — o dobro de
edições anteriores [24][26]. *Ransomware* esteve presente em **44%** das violações confirmadas (ante 32%
no ano anterior), com disparidade relevante para o recorte financeiro/energia: **88%** das violações em
pequenas e médias empresas envolveram *ransomware*, contra **39%** em grandes empresas [24][25] — a
maioria das organizações financeiras e de energia relevantes a este panorama se enquadra no segundo
grupo. O *Microsoft Digital Defense Report 2025* detalha ainda: **28%** das violações começam por
*phishing*/engenharia social, **18%** exploram serviços públicos não corrigidos e **12%** visam serviços
de acesso remoto; ataques baseados em identidade (spray de senha, força bruta) cresceram **32%** no
primeiro semestre de 2025, com mais de **97%** desses ataques sendo técnicas simples — e MFA resistente
a *phishing* bloqueando **99%** deles [12][13].

### Divergências entre fontes: leitura consolidada

Este capítulo registra, deliberadamente, todas as divergências relevantes encontradas entre as fontes
consultadas — a ausência de consenso é, por si, um dado útil sobre os limites de qualquer métrica única
de risco cibernético.

| Tema                                    | Leitura A                                     | Leitura B                                        | Como tratar neste panorama                                              |
|:------------------------------------------|:-------------------------------------------------|:----------------------------------------------------|:----------------------------------------------------------------------------|
| Setor mais atacado globalmente             | Mandiant: Financeiro, 17,4% (#1) [17][18]        | IBM X-Force: Manufatura, #1 pelo 4º ano [19][20]     | Metodologias distintas (IR Mandiant × base própria IBM X-Force); registrar ambas, não eleger uma |
| Vetor de acesso inicial líder              | Mandiant: *exploits* 33% > credenciais 16% [17][18] | Verizon DBIR: credenciais 22% > *exploits* 20% [24][25] | Os dois vetores dominam e estão próximos; tratar como prioridade conjunta de defesa |
| Tendência do *dwell time*                  | M-Trends 2025: 11 dias (leve melhora) [17][18]   | M-Trends 2026: 14 dias (piora) [21]                 | Série não é monotônica; ganho de um ano-base não garante manutenção no seguinte |
| Organizações que incorporam geopolítica no risco | WEF (relatório original): 64% [4]              | Fortinet (cobertura secundária): 65% [5]            | Divergência pequena, provável arredondamento entre coberturas do mesmo dado |

## Mapa de ameaças: probabilidade × impacto

A síntese visual do que este capítulo descreve é um mapa de calor clássico de risco — probabilidade de
ocorrência no eixo horizontal, impacto potencial no eixo vertical — posicionando qualitativamente as
seis categorias de ameaça mais citadas nas fontes acima. *Ransomware* ocupa o quadrante crítico (alta
probabilidade × alto impacto), consistente com sua presença em 44% das violações confirmadas do DBIR
[24][25]. *Phishing*/engenharia social também aparece em alta probabilidade, com impacto entre médio e
alto, reforçado pela taxa de clique 4x maior quando assistido por IA [12][13]. Ameaças à cadeia de
suprimentos (*third-party*) e o risco interno (*insider*) ocupam a faixa de probabilidade média com
impacto alto — o primeiro puxado pelo salto de violações via terceiros para 30% [24][26], o segundo
pelos dados do estudo Ponemon/DTEX 2025: custo médio anual de **USD 17,4 milhões** globalmente,
crescimento de 3.269 incidentes estudados em 2018 para 7.868 em 2025, e tempo médio de contenção de
**81 dias** [27][28]. DDoS aparece em alta probabilidade e impacto tipicamente baixo — consistente com o
achado da ENISA de que 77% dos incidentes reportados na UE são DDoS, mas apenas 2% causam disrupção real
de serviço [14][15]. Por fim, ameaças a tecnologia operacional (OT/ICS) são posicionadas como
quase-críticas mesmo com baixa frequência observada: a ENISA já mede ameaças a OT como 18,2% de todas as
categorias de ameaça identificadas [14][15], e o impacto potencial — físico, operacional, por vezes com
risco à integridade humana — justifica tratamento como risco de cauda grossa, não como evento raro e
irrelevante. Esse recorte é aprofundado no capítulo 03 (Setor Energia).

![Mapa de calor de ameaças cibernéticas por probabilidade e impacto, com ransomware e ameaças a OT/ICS destacados no quadrante crítico](../assets/diagramas/01-mapa-calor-ameacas.svg)

*Figura 1 — Matriz de probabilidade × impacto para as seis categorias de ameaça mais citadas nas fontes
deste capítulo. O quadrante vermelho (alta probabilidade × alto impacto) concentra o risco que qualquer
programa de segurança financeiro ou de energia precisa priorizar primeiro.*

## Linha do tempo: marcos que moldaram o risco (2015–2026)

Oito incidentes documentados nas fontes deste dossiê marcam a evolução do risco cibernético contra
infraestrutura crítica ao longo da última década — do primeiro apagão da história causado
publicamente por um ciberataque confirmado até o primeiro ataque orquestrado majoritariamente por um
agente de IA autônomo, uma década depois. Em **23 de dezembro de 2015**, o malware **BlackEnergy 3**
comprometeu três distribuidoras de energia ucranianas e interrompeu o fornecimento a cerca de **225 mil
clientes** por 1 a 6 horas [29][30]. Exatamente um ano depois, em **17 de dezembro de 2016**, o malware
**Industroyer/CrashOverride** interrompeu o fornecimento a cerca de um quinto da cidade de Kyiv por
aproximadamente uma hora [31][32] — ambos atribuídos ao grupo **Sandworm**, ligado à unidade militar
russa GRU 74455, que também foi indiciada formalmente pelo Departamento de Justiça dos EUA (outubro de
2020) pelo ataque destrutivo global **NotPetya** de 2017 [33][34].

Em **7 de maio de 2021**, a **Colonial Pipeline** — responsável por cerca de 45% do combustível
consumido na Costa Leste dos EUA — sofreu um ataque de *ransomware* do grupo DarkSide via uma conta VPN
sem MFA, interrompendo proativamente a operação do duto físico como medida de precaução [35][36]. Em
2023, o grupo de extorsão **Cl0p** conduziu a primeira de uma série de campanhas de exploração em massa
contra ferramentas de transferência de arquivos (MOVEit, GoAnywhere), padrão que o mesmo ator repetiria
em 2025 contra o Oracle E-Business Suite [37][38]. O ano de 2024 concentrou dois marcos opostos: em
janeiro, o malware **FrostyGoop** interrompeu o aquecimento distrital de mais de 600 prédios residenciais
em Lviv, Ucrânia, durante temperaturas abaixo de zero [39][40]; em fevereiro, a **Operation Cronos** —
ação coordenada liderada pela National Crime Agency do Reino Unido, com mais de dez países — derrubou a
infraestrutura do **LockBit**, então o grupo de *ransomware* mais prolífico do mundo, apreendendo 34
servidores e congelando 200 contas de criptomoeda [41][42]. Por fim, o arco fecha com os dois marcos já
detalhados acima: o ataque orquestrado por IA divulgado pela Anthropic em novembro de 2025 [10][11], e a
onda hacktivista de fevereiro–março de 2026 que atingiu mais de 100 organizações em 16 países em menos
de 72 horas, na esteira do conflito Irã–EUA–Israel [8][9].

![Linha do tempo horizontal de 2015 a 2026 com oito marcos de incidentes cibernéticos contra infraestrutura crítica e financeira](../assets/diagramas/01-timeline-incidentes.svg)

*Figura 2 — Oito marcos de 2015 a 2026, do primeiro apagão causado por ciberataque confirmado
(BlackEnergy, Ucrânia) ao primeiro ataque orquestrado majoritariamente por um agente de IA autônomo
(Anthropic). Espaçamento ilustrativo, não proporcional a anos-calendário.*

## Fontes

[1] IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach

[2] CyberScoop. *Research shows data breach costs have reached an all-time high*. 2025.
https://cyberscoop.com/ibm-cost-data-breach-2025/

[3] DataBreachCost.com. *Data Breach Cost by Industry (IBM 2025)*. 2025.
https://databreachcost.com/by-industry

[4] World Economic Forum. *Global Cybersecurity Outlook 2026*. Janeiro de 2026.
https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/executive-summary-6efae97d74/

[5] Fortinet. *World Economic Forum Global Cybersecurity Outlook 2026: Key Takeaways for CISOs*. 2026.
https://www.fortinet.com/blog/ciso-collective/world-economic-forum-global-cybersecurity-outlook-2026-key-takeaways-for-cisos

[6] World Economic Forum. *The Global Risks Report 2026: 21st edition*. Janeiro de 2026.
https://reports.weforum.org/docs/WEF_Global_Risks_Report_2026.pdf

[7] North Carolina State University — ERM Initiative. *Executive Takeaways from the World Economic
Forum's Global Risks Report 2026*. 2026.
https://erm.ncsu.edu/resource-center/executive-takeaways-from-the-world-economic-forums-global-risks-report-2026/

[8] The Hacker News. *149 Hacktivist DDoS Attacks Hit 110 Organizations in 16 Countries After Middle
East Conflict*. Março de 2026. https://thehackernews.com/2026/03/149-hacktivist-ddos-attacks-hit-110.html

[9] StormWall. *DDoS Trends in Q1 2026: Industry Analysis*. 2026.
https://stormwall.network/resources/blog/ddos-attacks-in-q1-2026

[10] Anthropic. *Disrupting the first reported AI-orchestrated cyber espionage campaign*. Novembro de
2025. https://www.anthropic.com/news/disrupting-AI-espionage

[11] The Hacker News. *Chinese Hackers Use Anthropic's AI to Launch Automated Cyber Espionage Campaign*.
2025. https://thehackernews.com/2025/11/chinese-hackers-use-anthropics-ai-to.html

[12] Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/

[13] Innofactor. *Five key takeaways from the Microsoft Digital Defense Report 2025*. 2025.
https://blog.innofactor.com/en/platforms/five-key-takeaways-from-the-microsoft-digital-defense-report-2025

[14] ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025

[15] Industrial Cyber. *ENISA 2025 Threat Landscape report highlights EU faces escalating hacktivist
attacks and state-aligned cyber threats*. 2025.
https://industrialcyber.co/reports/enisa-2025-threat-landscape-report-highlights-eu-faces-escalating-hacktivist-attacks-and-state-aligned-cyber-threats/

[16] Kiteworks. *How Shadow AI Costs Companies $670K Extra: IBM's 2025 Breach Report*. 2025.
https://www.kiteworks.com/cybersecurity-risk-management/ibm-2025-data-breach-report-ai-risks/

[17] Google Cloud (Mandiant). *M-Trends 2025: Data, Insights, and Recommendations From the Frontlines*.
2025. https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025/

[18] SC Media. *Exploits still top entry point, says Mandiant report*. 2025.
https://www.scworld.com/brief/exploits-still-top-entry-point-says-mandiant-report

[19] Industrial Cyber. *Half of 2025 ransomware attacks hit critical sectors as manufacturing,
healthcare, and energy top global targets*. 2025.
https://industrialcyber.co/reports/half-of-2025-ransomware-attacks-hit-critical-sectors-as-manufacturing-healthcare-and-energy-top-global-targets/

[20] Security Boulevard. *Top Sectors Under Cyberattack in 2025*. 2025.
https://securityboulevard.com/2025/12/top-sectors-under-cyberattack-in-2025/

[21] TaoSecurity. *Mandiant Global Median Dwell Time Deteriorates from 11 to 14 Days*. 2026.
https://taosecurity.blogspot.com/2026/03/mandiant-global-median-dwell-time.html

[22] CrowdStrike. *2025 Global Threat Report*. 2025.
https://go.crowdstrike.com/rs/281-OBQ-266/images/CrowdStrikeGlobalThreatReport2025.pdf

[23] CyberScoop. *CrowdStrike says attackers are moving through networks in under 30 minutes*. 2025.
https://cyberscoop.com/crowdstrike-annual-global-threat-report-attack-breakout-time/

[24] Verizon. *2025 Data Breach Investigations Report*. 2025.
https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf

[25] Halcyon. *Verizon DBIR Shows Ransomware Involved in 44% of Data Breaches*. 2025.
https://www.halcyon.ai/blog/verizon-dbir-shows-ransomware-involved-in-44-of-data-breaches

[26] ASIS International. *Verizon 2025 DBIR: Third-Party Involvement in Confirmed Security Breaches
Doubled*. 2025.
https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2025/april/verizon-dbir-2025/

[27] Kiteworks. *Insider Threats Cost $2.7M: 2025 Ponemon Report Reveals 45% of Data Breaches Come From
Within*. 2025.
https://www.kiteworks.com/cybersecurity-risk-management/hidden-enemy-within-decoding-the-2025-ponemon-institute-report-on-insider-threats/

[28] DeepStrike. *Insider Threat Statistics 2025: Key Data & Defense Strategies*. 2025.
https://deepstrike.io/blog/insider-threat-statistics-2025

[29] CISA. *Cyber-Attack Against Ukrainian Critical Infrastructure (IR-ALERT-H-16-056-01)*. 2016.
https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01

[30] E-ISAC / SANS ICS. *Analysis of the Cyber Attack on the Ukrainian Power Grid (TLP:White)*. 2016.
https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2016/05/20081514/E-ISAC_SANS_Ukraine_DUC_5.pdf

[31] SecurityWeek. *'Industroyer' ICS Malware Linked to Ukraine Power Grid Attack*. 2017.
https://www.securityweek.com/industroyer-ics-malware-linked-ukraine-power-grid-attack/

[32] Wikipedia. *Industroyer*. https://en.wikipedia.org/wiki/Industroyer

[33] MITRE ATT&CK. *Sandworm Team, G0034*. https://attack.mitre.org/groups/G0034/

[34] Wikipedia. *Sandworm (hacker group)*. https://en.wikipedia.org/wiki/Sandworm_(hacker_group)

[35] Departamento de Energia dos EUA (DOE/CESER). *Colonial Pipeline Cyber Incident*.
https://www.energy.gov/ceser/colonial-pipeline-cyber-incident

[36] Wikipedia. *Colonial Pipeline ransomware attack*.
https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack

[37] Google Cloud (Mandiant). *Oracle E-Business Suite Zero-Day Exploitation*. 2025.
https://cloud.google.com/blog/topics/threat-intelligence/oracle-ebusiness-suite-zero-day-exploitation

[38] SecurityWeek. *Nearly 30 Alleged Victims of Oracle EBS Hack Named on Cl0p Ransomware Site*. 2025.
https://www.securityweek.com/nearly-30-alleged-victims-of-oracle-ebs-hack-named-on-cl0p-ransomware-site/

[39] Dragos. *How to Protect Against FrostyGoop: ICS Malware Targeting Operational Technology*. 2024.
https://www.dragos.com/blog/protect-against-frostygoop-ics-malware-targeting-operational-technology

[40] The Record (Recorded Future News). *FrostyGoop malware left 600 Ukrainian households without heat
this winter*. 2024. https://therecord.media/frostygoop-malware-ukraine-heat

[41] National Crime Agency (Reino Unido). *The NCA announces the disruption of LockBit with Operation
Cronos*. Fevereiro de 2024.
https://www.nationalcrimeagency.gov.uk/the-nca-announces-the-disruption-of-lockbit-with-operation-cronos

[42] Trend Micro. *Unveiling the Fallout: Operation Cronos' Impact on LockBit Following Landmark
Disruption*. https://www.trendmicro.com/en_us/research/24/d/operation-cronos-aftermath.html
