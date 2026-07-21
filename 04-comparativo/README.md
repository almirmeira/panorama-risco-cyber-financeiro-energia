# 04 — Comparativo: Setor Financeiro × Setor Energia

> **Resumo Executivo**
> - A mesma ameaça produz dois desfechos opostos: *ransomware* cresceu em ambos os setores em
>   2025 — **+30%** no financeiro (156→202 incidentes diretos) e **+64%** no universo
>   industrial/energia (119 grupos, ~3.300 organizações impactadas) —, mas o alvo final diverge:
>   no financeiro, o dinheiro; na energia, a luz acesa [1][2][3][4].
> - Os atores dominantes têm motivação distinta: 90% das violações do setor financeiro têm
>   motivação financeira direta (cibercrime, DPRK-nexus), enquanto o setor de energia concentra os
>   casos mais graves em torno de atores estatais (Sandworm/Rússia, Volt Typhoon/China) cuja meta é
>   sabotagem ou pré-posicionamento geopolítico, não lucro imediato [5][6][7][8].
> - As duas regulações setoriais brasileiras nasceram no **mesmo ano** — Resolução CMN nº
>   4.893/2021 e Resolução BCB nº 85/2021 para o financeiro; RN ANEEL nº 964/2021 para a energia —
>   mas amadureceram em ritmos muito diferentes: o Banco Central já atualizou sua norma em 2025
>   (prazo março/2026), enquanto a ANEEL só iniciou fiscalização concreta em 2025, quatro anos
>   depois da norma entrar em vigor [9][10][11][12].
> - Onde os setores convergem: TI corporativa comum, risco de terceiros/cadeia de suprimentos e IA
>   ofensiva atingem os dois igualmente — o mesmo padrão de comprometimento de fornecedor único que
>   afetou 32 instituições financeiras sul-coreanas (caso GJTec) se repete na Petrobras/SAExploration
>   e na Eletrobras/Copel via CyberArk [3][4][13][14][15][16].
> - Onde divergem: o financeiro mede o dano em reais/dólares desviados e dados vazados; a energia
>   mede em minutos sem energia, equipamentos danificados e, no limite, risco à vida — uma diferença
>   de natureza, não apenas de escala [17][18][19][20].
> - **Número-chave:** o setor financeiro sofreu **202 incidentes diretos de *ransomware*** em 2025
>   (+30% a/a); o universo industrial — que inclui energia — teve **~3.300 organizações
>   impactadas** pelo mesmo tipo de ataque (+64% a/a) no mesmo ano [1][2][3][4].

## Tabela comparativa mestre

A tabela a seguir sintetiza, em oito eixos, o contraste central deste capítulo. Cada célula é
ancorada em um número ou fato já apresentado nos capítulos 02 (Setor Financeiro) e 03 (Setor
Energia); nenhum dado novo é introduzido aqui — este capítulo apenas recombina e contrasta o que já
foi estabelecido.

| Eixo comparativo                          | Setor Financeiro                                                          | Setor Energia (OT/ICS)                                                     |
|:--------------------------------------------|:------------------------------------------------------------------------------|:---------------------------------------------------------------------------------|
| Superfície de ataque predominante          | APIs de Open Finance (128–154 milhões de consentimentos), app/Pix, terceiros de infraestrutura (C&M Software) [21][22] | Convergência TI/OT, protocolos ICS legados, acesso remoto de terceiros, redes sem fio (≈94% inadequadamente protegidas contra *deauth*, complemento dos 6% adequados do cap. 03) [23][24] |
| Atores dominantes (motivação)              | Cibercrime financeiramente motivado (90% Verizon DBIR); DPRK-nexus (USD 2,02 bi em 2025, +51%); FIN7, Qilin, Akira | Atores estatais (Sandworm/GRU 74455, Volt Typhoon/China) com foco em sabotagem/pré-posicionamento; *ransomware* oportunista (DarkSide, Everest) [5][6][7][8][17][18] |
| Vetor de impacto principal                 | Financeiro/fraude — desvio direto de recursos, vazamento de dados pessoais | Físico/disponibilidade — apagão, dano a equipamento, risco potencial à vida [17][18][19][20] |
| Tempo de permanência / detecção típica     | Detecção forçada em ~72h por prazo regulatório de notificação; 34% do custo de uma violação vai para detecção/escalonamento [25][26] | *Dwell time* médio de 42 dias em *ransomware* OT — cai para 5 dias com visibilidade OT plena [3][4] |
| Maturidade defensiva                       | Alta — biometria física reconhecida por 67% dos clientes, ~R$ 5 bi/ano investidos em prevenção de fraude [27][28] | Heterogênea — 52% já colocam OT sob o CISO (ante 16% em 2022), mas sistemas legados sem suporte seguem comuns [23][24] |
| Pressão / maturidade regulatória           | Alta e crescente — CMN 4.893/2021 + BCB 85/2021, atualizadas por CMN 5.274/2025 e BCB 538/2025, prazo março/2026 [9][11] | Em maturação — RN ANEEL nº 964/2021 (ARCiber) em vigor desde 2022, mas 1ª fiscalização concreta só em 2025 (Despacho ANEEL nº 427/2025) [10][12] |
| Frequência/escala do ataque em 2025        | 202 incidentes diretos de *ransomware* (+30% a/a); 2º setor mais atacado globalmente (FS-ISAC) | ~3.300 organizações industriais impactadas por *ransomware* (+64% a/a); 22,8% dos computadores ICS de energia elétrica com objetos maliciosos bloqueados (3º setor mais atacado) [1][2][3][4][29][30] |
| Custo médio de um incidente                | USD 5,56 milhões por violação (2º setor mais caro do mundo) [25][26]      | USD 4,83 milhões por violação no setor de energia; USD 4,56 milhões quando há impacto direto em OT (qualquer setor) [25][31] |

## Análise cross-over: onde os setores convergem

Apesar dos perfis de ameaça distintos, três forças atuam sobre financeiro e energia de forma quase
idêntica. A primeira é a **TI corporativa comum**: os incidentes mais graves em ambos os setores
raramente começam no núcleo mais protegido — Pix/SPI de um lado, SCADA/ICS de outro —, mas sim na
rede administrativa convencional (e-mail, VPN, Active Directory). Foi assim na Eletrobras/Copel em
2021 (rede administrativa comprometida, usinas nucleares fisicamente segregadas preservadas) e é o
mesmo padrão estrutural descrito no Modelo Purdue para energia — TI corporativa (níveis 4/5) como
porta de entrada para a OT crítica (níveis 0–1), fundamentos detalhados no capítulo 03 [13][14].

A segunda é o **risco de terceiros e cadeia de suprimentos**, hoje o vetor de maior *blast radius*
em ambos os setores. No financeiro, o comprometimento da C&M Software — um único provedor de
infraestrutura do Pix — forçou a suspensão preventiva de três instituições e um desvio de pelo menos
R$ 400 milhões; o caso Qilin/GJTec multiplicou o dano ao atingir 32 instituições financeiras
sul-coreanas via um único MSP comprometido [3][4][21][22]. Na energia, a alegação Everest contra a
Petrobras envolveu a contratada SAExploration, não a própria operadora — mesmo padrão de exposição
via terceiro, com o mesmo tipo de disputa entre a alegação do atacante e a posição oficial da
empresa (o precedente é direto: o caso Banco Neon, no capítulo 02) [15][16].

A terceira é a **IA ofensiva como ameaça transversal**, que já não respeita fronteira setorial: o
caso mais citado de fraude por *deepfake* de voz contra um executivo em 2025 não foi bancário, foi
industrial — uma conglomerada de energia europeia perdeu **USD 25 milhões** quando atacantes usaram
um clone de áudio do CFO para autorizar uma transferência eletrônica urgente, o mesmo mecanismo
documentado dezenas de vezes contra bancos e fintechs no capítulo 02 [32][33]. O *ransomware* segue
o mesmo padrão de neutralidade setorial: os mesmos grupos (Akira, por exemplo, com ~USD 244 milhões
em proventos até setembro de 2025) operam de forma "cross-setorial", escolhendo alvos por
oportunidade — superfície exposta, capacidade de pagamento, ausência de segmentação — e não por
adesão ideológica a um setor específico [3][4].

## Análise cross-over: onde os setores divergem

A divergência mais profunda não é de intensidade, é de **natureza do dano**. No setor financeiro, a
tríade de segurança prioriza confidencialidade e integridade — um incidente ruim é medido em reais
desviados, cartões reemitidos, dados de CPF expostos. Na energia, a ordem se inverte: disponibilidade
e segurança física vêm primeiro, porque o pior cenário não é um vazamento, é um disjuntor de
subestação abrindo remotamente às 16h10 de um dia de inverno — o script exato do Industroyer2 em
2022 — ou um duto de combustível desligado por precaução, como em Colonial Pipeline, interrompendo
45% do fornecimento da Costa Leste dos EUA sem que o atacante jamais tenha tocado o sistema de
controle propriamente dito [17][18][19][20].

Essa diferença de natureza se reflete diretamente na **janela de detecção**. O setor financeiro
brasileiro opera sob prazo regulatório comprimido — a notificação de incidente à autoridade e ao
cliente é medida em horas, e esse prazo força resposta forense já nas primeiras 72h, elevando a
fatia de "detecção e escalonamento" no custo total de uma violação para 34% (vs. 29% global) [25][26].
Já em ambientes OT, o *dwell time* médio de um *ransomware* é de **42 dias** — praticamente duas
semanas a mais que o ciclo de notificação regulatória completo do setor financeiro —, caindo para
apenas 5 dias em organizações com visibilidade OT plena, uma diferença de quase 8x que mostra o quão
recente e desigual é a instrumentação de monitoramento em ambientes industriais [3][4].

Por fim, a **natureza dos atores dominantes** diverge de forma estrutural. O Verizon DBIR mede 90%
de motivação financeira nas violações do setor financeiro — cibercrime clássico, ainda que hoje
turbinado por atores estatais norte-coreanos em busca de moeda forte (DPRK-nexus, USD 2,02
bilhões roubados em 2025) [5][6][7][8]. Na energia, os casos mais graves e mais citados da
literatura técnica — BlackEnergy, Industroyer/Industroyer2, Volt Typhoon/VOLTZITE — são atribuídos,
por CISA, ESET, Dragos e pelo próprio governo dos EUA, a operações de inteligência militar ou
pré-posicionamento geopolítico, não a grupos financeiramente motivados; o *ransomware* que atinge
energia (Colonial, Eletrobras/Copel) tende a ser oportunista e cross-setorial, não um ataque
*purpose-built* contra OT [17][18][19][20].

![Radar comparativo com seis eixos — frequência de ataque, impacto físico/segurança de vida, impacto financeiro direto, maturidade defensiva, pressão regulatória e exposição a APT estatal — contrastando o setor financeiro (azul) e o setor de energia (âmbar) em escala qualitativa de 0 a 5](../assets/diagramas/04-radar-comparativo.svg)

*Figura 1 — Radar comparativo em seis eixos, escala qualitativa 0–5 atribuída pela síntese deste
capítulo a partir dos capítulos 02 e 03 (não é um índice publicado por terceiros). O setor
financeiro domina frequência de ataque, impacto financeiro direto e pressão regulatória; o setor de
energia domina impacto físico/segurança de vida e exposição a APT estatal; a maturidade defensiva
favorece o financeiro, mas por margem menor do que os demais eixos sugerem à primeira vista
[1][2][3][4][5][6][7][8][9][10][11][12][17][18][19][20][25][26][27][28][29][30][31].*

## Convergência setorial: quando a fronteira desaparece

A separação analítica entre "financeiro" e "energia" é útil para estruturar este dossiê, mas
corresponde cada vez menos à realidade operacional de instituições reais. Duas figuras ilustram por
quê. Uma concessionária de energia não é apenas uma operadora de OT: ela fatura, cobra, processa
pagamentos de milhões de clientes e mantém tesouraria própria — exatamente a superfície que a Copel
teve exposta em 2021, quando o grupo DarkSide alegou ter exfiltrado dados pessoais de clientes e
executivos junto com credenciais da solução CyberArk, um incidente que, nesse recorte específico, se
parece mais com uma violação de dados financeira do que com um evento OT clássico [13][14]. Do outro
lado, nenhum banco opera sem energia: agências, data centers, ATMs, e o próprio SPI/DICT do Banco
Central dependem de fornecimento elétrico contínuo — um apagão prolongado do tipo Industroyer não
"pertence" ao setor de energia isoladamente, ele se propaga como risco sistêmico para o setor
financeiro (e para qualquer outro setor) que depende da mesma infraestrutura [17][18].

Essa interdependência é o argumento mais forte para tratar os dois setores lado a lado neste
dossiê: o risco cibernético de infraestrutura crítica não é a soma de riscos setoriais isolados, é
uma malha de dependências onde o elo mais fraco — seja um fornecedor de software de pagamentos, seja
uma concessionária regional — determina o resultado para todos os que dependem dele.

## Fontes

[1] Black Kite. *2026 State of Financial Services Report*. 2026.
https://blackkite.com/reports/2026-financial-services-report

[2] Unite.AI. *Black Kite's 2026 Financial Services Report Warns of a Growing Cybersecurity Crisis
Across Banking and Investment Firms*. 2026.
https://www.unite.ai/black-kites-2026-financial-services-report-warns-of-a-growing-cybersecurity-crisis-across-banking-and-investment-firms/

[3] Dragos. *Dragos 2026 OT Report Shows Surge in Threat Groups and Ransomware*. Fevereiro de 2026.
https://www.dragos.com/resources/press-release/dragos-2026-year-in-review-new-ot-threats-ransomware

[4] Cybersecurity Magazine. *Dragos: Operational Tech Under Increasing Risk of Attack*. 2026.
https://cybermagazine.com/news/dragos-ot-ics-cybersecurity-report

[5] Verizon. *2025 Data Breach Investigations Report — Finance Snapshot*. 2025.
https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf

[6] CrowdStrike. *CrowdStrike 2026 Financial Services Threat Landscape Report*. 2026.
https://www.crowdstrike.com/en-us/press-releases/crowdstrike-2026-financial-services-threat-landscape-report/

[7] DQ Channels. *CrowdStrike 2026 threat report exposes new banking risks*. 2026.
https://www.dqchannels.com/news/crowdstrike-2026-threat-report-exposes-new-banking-risks1-11837789

[8] MITRE ATT&CK. *Sandworm Team, G0034*. https://attack.mitre.org/groups/G0034/

[9] Banco Central do Brasil / ANCORD. *Resolução CMN n° 4.893 de 26/2/2021* (texto oficial).
https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf

[10] ANEEL. *Resolução normativa Aneel nº 964, de 14 de dezembro de 2021* (texto oficial).
https://www2.aneel.gov.br/cedoc/ren2021964.html

[11] NDM Advogados. *O que muda para a segurança cibernética das instituições autorizadas até março
de 2026 com as Resoluções BCB 538/2025 e CMN 5.274/2025*. 2025.
https://ndmadvogados.com.br/artigo/seguranca-cibernetica-bcb-538-cmn-5274/

[12] ISC Brasil. *Aneel inicia fiscalização da segurança cibernética na redes de energia do país*.
2025. https://www.iscbrasil.com.br/pt-br/blog/seguranca-publica/aneel-inicia-fiscalizacao-da-seguranca-cibernetica-na-redes-de-e.html

[13] BleepingComputer. *Eletrobras, Copel energy companies hit by ransomware attacks*. 2021.
https://www.bleepingcomputer.com/news/security/eletrobras-copel-energy-companies-hit-by-ransomware-attacks/

[14] Canaltech. *Eletrobras e Copel são vítimas de ataques de ransomware*. 2021.
https://canaltech.com.br/seguranca/eletrobras-e-copel-sao-vitimas-de-ataques-de-ransomware-178557/

[15] Hackread. *Everest Ransomware Says It Breached Brazilian Energy Giant Petrobras*. Novembro de
2025. https://hackread.com/everest-ransomware-brazil-petrobras-breach/

[16] Cybernews. *Hackers claim oil giant Petrobras, alleging oil-rich maps theft*. 2025.
https://cybernews.com/security/brazil-petrobras-ransomware-attack/

[17] Departamento de Energia dos EUA (DOE/CESER). *Colonial Pipeline Cyber Incident*.
https://www.energy.gov/ceser/colonial-pipeline-cyber-incident

[18] Wikipedia. *Colonial Pipeline ransomware attack*.
https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack

[19] ESET. *Industroyer2: Industroyer reloaded*. Abril de 2022.
https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/

[20] Claroty Team82. *Industroyer2 Variant Surfaces in Foiled Attack Against Ukraine Electricity
Provider*. 2022. https://claroty.com/team82/blog/industroyer2-variant-surfaces-in-foiled-attack-against-ukraine-electricity-provider

[21] Agência Brasil (EBC). *BC suspende três instituições do Pix após ataque cibernético*. Julho de
2025. https://agenciabrasil.ebc.com.br/economia/noticia/2025-07/bc-suspende-tres-instituicoes-do-pix-apos-ataque-cibernetico

[22] Finsiders Brasil. *BC suspende do Pix os participantes Transfeera, Nuoro Pay e Soffy
(atualização)*. Julho de 2025.
https://finsidersbrasil.com.br/reportagem-exclusiva-fintechs/bc-suspende-os-participantes-do-pix-transfeera-nuoro-pay-e-soffy/

[23] Fortinet. *2025 State of Operational Technology and Cybersecurity Report*. 2025.
https://www.fortinet.com/resources/reports/state-ot-cybersecurity

[24] Nozomi Networks. *OT/IoT Cybersecurity Trends & Insights, February 2025* / *Nozomi Networks
Assesses the 2025 OT/IoT Cybersecurity Threat Landscape (July 2025)*. 2025.
https://www.nozominetworks.com/ot-iot-cybersecurity-trends-insights-february-2025

[25] IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach

[26] DataBreachCost.com. *Financial Services Data Breach Cost (2025): $5.56M, #2 Sector*. 2025.
https://databreachcost.com/industry/financial-services

[27] Poder360 (citando Febraban). *Golpes causaram prejuízo de R$ 10,1 bi em 2024, diz Febraban*.
2025. https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/

[28] FEBRABAN Tech. *Quase 4 em cada 10 brasileiros já sofreram golpe, aponta pesquisa da Febraban*.
2025. https://febrabantech.febraban.org.br/temas/seguranca/quase-4-em-cada-10-brasileiros-ja-sofreram-golpe-aponta-pesquisa-da-febraban

[29] FS-ISAC. *Heightened Cyber Threats are Testing the Operational Resilience of the Financial
Sector (Navigating Cyber 2025)*. Maio de 2025.
https://www.fsisac.com/newsroom/heightened-cyber-threats-are-testing-the-operational-resilience-of-the-financial-sector

[30] Dragos. *Dragos Reports OT/ICS Cyber Threats Escalate Amid Geopolitical Conflicts and
Increasing Ransomware Attacks (2025 OT/ICS Cybersecurity Year in Review)*. Fevereiro de 2025.
https://www.dragos.com/resources/press-release/dragos-reports-ot-ics-cyber-threats-escalate-amid-geopolitical-conflicts-and-increasing-ransomware-attacks

[31] DeepStrike. *Energy and Utilities Cybersecurity Statistics 2026: OT & Grid Risk*. 2026.
https://deepstrike.io/blog/energy-utilities-cybersecurity-statistics

[32] StationX. *Deepfake Statistics [2026]: Growth, Fraud & Detection Data*. 2026.
https://app.stationx.net/articles/deepfake-statistics

[33] BrightDefense. *150+ Deepfake Statistics (March 2026)*. 2026.
https://www.brightdefense.com/resources/deepfake-statistics/
