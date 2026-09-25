# 02 — Setor Financeiro

> **Resumo Executivo**
> - O setor financeiro segue entre os mais visados do mundo: 2º lugar no ranking da FS-ISAC (atrás
>   apenas de saúde), com quatro ameaças dominantes — fraude potencializada por IA generativa (incluindo
>   *deepfake* de executivos), risco de terceiros/cadeia de suprimentos, DDoS/*ransomware* em
>   sofisticação crescente e exploração de tensões geopolíticas.
> - *Ransomware* direto contra instituições financeiras voltou a acelerar: de 156 incidentes em 2024
>   para 202 em 2025 (+30%), com o 1º trimestre de 2026 já 76% acima do mesmo período do ano anterior.
> - Fraude por *deepfake* deixou de ser hipótese: cresceu 2.137% em três anos e já responde por 6,5% de
>   todas as tentativas de fraude detectadas pela Signicat (dado de 2025), com casos concretos de dezenas de milhões de dólares desviados por
>   clonagem de voz de executivos.
> - No Brasil, o Pix concentra o epicentro do risco de fraude ao consumidor, enquanto o Open Finance
>   — com mais de 200 milhões de consentimentos ativos em julho de 2026 — abre uma superfície de ataque
>   nova via API; a resposta regulatória do Banco Central (Resolução CMN nº 4.893/2021 e Resolução BCB
>   nº 85/2021, atualizadas em 2025, com prazo de adequação vencido em 1º/3/2026) é uma das mais maduras
>   do mundo em cibersegurança financeira.
> - Uma sequência de incidentes de terceiros em 2025–2026 (C&M Software, Sinqia, FictorPay, Banco do Nordeste)
>   mostrou que a vulnerabilidade sistêmica do Pix está menos nos bancos centrais do sistema e mais nos
>   provedores de infraestrutura e software compartilhados por múltiplas instituições.
> - **Número-chave:** custo médio de uma violação de dados no setor financeiro em 2026 = **USD 6,3
>   milhões** (ante USD 5,56 milhões na edição 2025) — acompanhando a alta global de 12% no custo médio
>   de violação de dados [36][37].

## Contexto Global

Este capítulo aprofunda, para o setor financeiro, o macro-cenário já estabelecido no capítulo 01
(Panorama Global). A leitura segue do executivo ao técnico: primeiro o quadro de ameaças e o custo
econômico do incidente, depois o detalhamento por relatório de referência (FS-ISAC, IBM, Verizon,
CrowdStrike, Black Kite), os atores mais relevantes e, na segunda metade do capítulo, o recorte
brasileiro — Pix, Open Finance, regulação do Banco Central e incidentes conhecidos.

| Indicador                                              | Valor                                  | Fonte primária              |
|:---------------------------------------------------------|:------------------------------------------|:--------------------------------|
| Ranking de setor mais atacado (FS-ISAC)                   | 2º lugar, atrás de saúde                 | FS-ISAC [1][2]                  |
| Custo médio de violação — setor financeiro                 | USD 6,3 milhões (ante USD 5,56 milhões em 2025) | IBM [36][37]              |
| Detecção/escalonamento no custo total (setor financeiro)    | 34% (vs. 29% global)                     | IBM [3][4]                      |
| Incidentes / violações confirmadas (DBIR 2025 Finance Snapshot) | 3.336 / 927                           | Verizon DBIR [5]                |
| Motivação financeira / espionagem (DBIR 2025 Finance Snapshot)  | 90% / 12%                             | Verizon DBIR [5]                |
| DDoS no setor financeiro (2024)                             | Alvo nº 1 de DDoS volumétrico; DDoS de aplicação (L7) +23% frente a 2023 | FS-ISAC/Akamai [71][72] |
| DDoS no setor financeiro (2025)                             | Duração mediana dos ataques L3/L4 +738% desde 2024 | Akamai SOTI 2026 [73][74] |
| DDoS no setor financeiro (2022→2023, série anterior)        | +154%; 35%+ de todo DDoS observado       | FS-ISAC/Akamai [6][7]           |
| Roubo de ativos digitais (DPRK-nexus, 2025)                  | USD 2,02 bilhões (+51% a/a)              | CrowdStrike [8][9]              |
| Maior roubo cripto único (PRESSURE CHOLLIMA)                 | USD 1,46 bilhão                          | CrowdStrike [8][9]              |
| *Ransomware* direto no setor financeiro (2024→2025)           | 156 → 202 incidentes (+~30%)             | Black Kite [10][11]             |
| *Ransomware* setor financeiro, Q1 2026 vs. Q1 2025            | +76% (65 incidentes)                     | Black Kite [10][11]             |
| Fraude por *deepfake* (evolução em 3 anos, dado de 2025)      | 0,1% → 6,5% das tentativas (+2.137%)    | Signicat [67][68]               |
| *Deepfake* nas tentativas de fraude biométrica (2025)         | 1 em cada 5 (20%)                        | Entrust 2026 [69][70]           |
| Incidentes relevantes reportados ao BC — Brasil (2024→2025)   | 59 → 76 incidentes (+29%)                | Banco Central (Relatório Integrado) [38][39] |

### FS-ISAC: as quatro ameaças que definem o setor

O relatório *Navigating Cyber 2025* da FS-ISAC — associação setorial que reúne mais de 5.000 firmas
financeiras membras em 75 países, com ativos combinados de USD 100 trilhões — confirma que **serviços
financeiros é o 2º setor mais atacado globalmente, atrás apenas de saúde** [1][2]. Quatro categorias de
ameaça concentram o risco: (1) fraude e golpes potencializados por IA generativa, incluindo *deepfakes*
visando executivos; (2) ataques à cadeia de suprimentos e a fornecedores terceiros; (3) DDoS e
*ransomware* em sofisticação crescente; e (4) exploração de tensões geopolíticas e incerteza econômica
[1][2]. O comunicado da própria FS-ISAC não traz percentuais numéricos detalhados por categoria — apenas
a classificação qualitativa e o ranking setorial —, algo já registrado como limitação no dossiê de
pesquisa deste projeto.

### Custo de violação: por que o setor financeiro paga mais para responder

A edição **2026** do *Cost of a Data Breach Report* da IBM (602 organizações estudadas globalmente,
violações entre março de 2025 e fevereiro de 2026) mediu custo médio de **USD 6,3 milhões** para o setor
financeiro — alta relevante frente aos USD 5,56 milhões da edição 2025, acompanhando o movimento geral de
alta de 12% no custo médio global de violação de dados (revertendo a queda registrada na edição anterior)
[36][37]. Financeiro está entre os setores de maior concentração de ataques habilitados por IA dentro do
grupo mais amplo de infraestrutura crítica (62% desse tipo de ataque, segundo a mesma edição) [36][37]. A
edição **2025** do mesmo relatório havia mostrado que o setor financeiro pagava mais para responder por
um motivo estrutural: detecção e escalonamento correspondiam a **34%** do custo total (vs. 29%
globalmente) — atribuído ao prazo regulatório comprimido de notificação, que força resposta forense
extensiva já nas primeiras 72 horas —, e notificação correspondia a **8%** (vs. 6% globalmente),
refletindo obrigações de carta/*call center* por cliente somadas a múltiplas obrigações de notificação a
reguladores [3][4]. Resposta pós-violação (24% vs. 27% global) e perda de negócios (34% vs. 38% global)
ficavam, na comparação, proporcionalmente menores. Um detalhe operacional ilustra a escala do problema:
reemitir um único cartão de débito/crédito após uma violação custa entre USD 5 e USD 15, dependendo do
tipo e da complexidade — multiplicado pela base de clientes de um banco de varejo, o valor se torna
material rapidamente [3][4]. **Nota de atualização:** a edição 2026 não trouxe, no escopo desta pesquisa,
um detalhamento equivalente de composição de custo por categoria específico para o setor financeiro — a
distribuição percentual acima (34%/8%/24%/34%) permanece atribuída à edição 2025, mais recente confirmada
para esse recorte específico.

### Verizon DBIR — perfil de ataque do setor financeiro

O recorte "Financial and Insurance" (NAICS 52) do *2025 Data Breach Investigations Report* (DBIR) da
Verizon registrou **3.336 incidentes** e **927 violações confirmadas**. Das violações confirmadas, 78%
envolveram atores externos, 22% atores internos e 1% parceiros (categorias não somam 100% por
sobreposição metodológica) [5]. **74%** das violações do setor estão associadas a três padrões — Intrusão
de Sistema, Engenharia Social e Ataques Básicos a Aplicações Web —, **90%** tiveram motivação financeira
e **12%** motivação de espionagem [5]. Em 24/9/2026 esses números foram conferidos diretamente no texto
do PDF do *2025 DBIR Finance Snapshot* (frequência, padrões, atores e motivações), o que encerra a
ressalva de confirmação parcial registrada anteriormente no dossiê.

**Nota de atualização (não confirmada):** o *2026 DBIR* (incidentes de 1º/11/2024 a 31/10/2025) traz, na
página 84, um novo recorte "Financial and Insurance": **3.809 incidentes** e **1.300 violações
confirmadas**; atores externos em 88% e internos em 12%; e motivação **financeira em 98%** e de
**espionagem em 3%** das violações [66]. O dado foi lido na fonte primária, mas é fonte única — o
*Finance Snapshot* 2026 não foi localizado e nenhuma segunda fonte independente reproduz esses números —,
por isso permanece **não confirmado em 24/9/2026** e os valores de referência deste capítulo seguem sendo
os do DBIR 2025. Atenção a um erro frequente em resumos de terceiros: o "12% de espionagem" citado para o
DBIR 2026 é o número **global** do relatório, não o do setor financeiro.

### DDoS e *ransomware*: sofisticação crescente

Ataques DDoS contra o setor de serviços financeiros cresceram **154%** entre 2022 e 2023, segundo relatório
conjunto FS-ISAC/Akamai; o setor respondeu por mais de **35%** de todos os ataques DDoS observados em
2023, ultrapassando o setor de *games* e se tornando o vertical mais visado por esse tipo de ataque — salto
atribuído ao aumento do poder de *botnets* e ao hacktivismo ligado à guerra Rússia-Ucrânia [6][7]. A série
tem atualização quantitativa para 2024 e 2025. O relatório conjunto seguinte da FS-ISAC com a Akamai,
*From Nuisance to Strategic Threat: DDoS Attacks Against the Financial Sector* (junho de 2025, dados de
2024), mostra o setor financeiro como **alvo nº 1 de DDoS volumétrico em 2024**, com pico em outubro, e
alta de **23%** nos ataques DDoS de camada de aplicação (L7) frente a 2023; os atacantes passaram a
combinar reconhecimento sistemático e táticas adaptativas em campanhas multivetor [71][72]. Para 2025, o
*State of the Internet — Financial Services 2026* da Akamai (maio de 2026) registra alta de **738%** na
duração mediana dos ataques DDoS de camadas 3 e 4 contra o setor desde 2024 — ataques de minutos que
viraram campanhas prolongadas [73][74]. O *Navigating Cyber 2025* da FS-ISAC mantém o DDoS entre as quatro
ameaças principais ao setor [1][2].

Do lado do *ransomware* direto (não apenas DDoS como vetor de extorsão), o *2026 State of Financial
Services Report* da Black Kite registra reaceleração: de **156 incidentes em 2024 para 202 em 2025**
(alta de aproximadamente 30%), com o 1º trimestre de 2026 já somando **65 incidentes** — alta de **76%**
frente ao mesmo trimestre de 2025 [10][11]. O número de grupos distintos mirando o setor financeiro
cresceu de **37 em 2023 para 48 em 2025**; para o ano intermediário há divergência dentro da própria
Black Kite — 43 grupos em 2024 na página do relatório, 45 no comunicado à imprensa e na cobertura do
Unite.AI [10][11][75]. A composição por subsetor mudou: firmas de investimento quase dobraram sua
participação nos incidentes (de 44 para 84, ~41,6% do total de divulgações do setor), enquanto bancos —
subsetor mais visado em 2023, com 71 incidentes — caíram para 36 em 2025 [10][11]. O grupo **Qilin**
reivindicou **59 vítimas** no setor financeiro no período analisado; em um caso, o comprometimento de um
único provedor de serviços gerenciados sul-coreano (GJTec) permitiu movimento lateral para **32
instituições financeiras** sul-coreanas sem necessidade de invadir cada uma individualmente, extraindo
mais de 1 milhão de arquivos e mais de 2 terabytes de dados — um exemplo direto de como o risco de
terceiros amplifica o *blast radius* de um único comprometimento [10][11]. Fornecedores com CVEs críticas
(CVSS ≥ 9) quase quintuplicaram entre os 140 fornecedores mais concentrados no setor financeiro no mesmo
período [10][11].

**Nota de monitoramento (fonte única, não confirmada):** a série da Black Kite vai até o 1º trimestre de
2026. Dois rastreadores de *leak sites*, com metodologias próprias e não comparáveis à da Black Kite,
sinalizam que a pressão continuou: a CYFIRMA contou **114 vítimas** do setor financeiro em sua janela de
90 dias do "Q2 2026" (ante 78 na janela anterior, +46,2%), em relatório datado de 18/5/2026 — ou seja,
uma janela que não coincide com o trimestre-calendário [76]; a Comparitech registrou **257 ataques** ao
setor financeiro no 1º semestre de 2026, dos quais 22 confirmados, patamar próximo dos 260 do 2º semestre
de 2025 [77]. Cada número tem uma única fonte e serve apenas para acompanhamento.

### Roubo de ativos digitais: atores DPRK-nexus

O *CrowdStrike 2026 Financial Services Threat Landscape Report* atribui a atores ligados à Coreia do
Norte (DPRK-nexus) alta de **51%** ano a ano no roubo de ativos digitais em 2025, somando **USD 2,02
bilhões** roubados no setor [8][9]. O cluster **PRESSURE CHOLLIMA** foi responsável pelo maior roubo
financeiro já registrado por um único incidente: **USD 1,46 bilhão** em criptoativos via *software*
trojanizado distribuído por comprometimento de cadeia de suprimentos [8][9]. Intrusões
"*hands-on-keyboard*" — operadas manualmente, sem depender de malware automatizado — contra instituições
financeiras cresceram **43%** globalmente e **48%** na América do Norte em dois anos. Grupos de extorsão
dupla ("*big game hunting*") listaram **423 entidades do setor financeiro** em sites de vazamento
dedicados, alta de **27%** frente ao ano anterior [8][9].

### Deepfake e engenharia social: a nova fronteira da fraude

Tentativas de fraude por *deepfake* cresceram **2.137%** em três anos, passando de 0,1% para **6,5%** de
todas as tentativas de fraude — cerca de 1 em cada 15 casos —, segundo o relatório *The Battle Against
AI-Driven Identity Fraud* da Signicat, divulgado em fevereiro de 2025 e baseado nas tentativas detectadas
em sua própria base de clientes, concentrada em serviços financeiros; o mesmo estudo atribui à IA 42,5%
das tentativas de fraude detectadas no setor financeiro [67][68]. O número de 6,5% circula em compilações
de 2026 [12][14], mas é dado de 2025 e ainda é o mais recente nesta métrica. Um indicador complementar,
que mede outra coisa, vem do *2026 Identity Fraud Report* da Entrust (novembro de 2025, mais de 1 bilhão de
verificações de identidade): *deepfakes* respondem por **1 em cada 5 (20%) tentativas de fraude
biométrica**, e as *selfies deepfake* cresceram 58% em 2025 [69][70]. *Deepfakes* de voz (*voice cloning*) cresceram
**680%** ano a ano em 2024; combinados a um salto de **442%** em *vishing* e de **1.300%** em ataques de
voz sintética, configuram aumento acentuado e convergente — clonagem de voz já teria cruzado o "limiar de
indistinguibilidade": poucos segundos de áudio bastam para gerar um clone convincente, com entonação,
ritmo e respiração naturais [12][13]. Casos concretos de 2025 ilustram o dano financeiro direto: em Hong
Kong, fraudadores personificaram um gerente financeiro usando clonagem de voz por IA e convenceram a
vítima a transferir cerca de **HKD 145 milhões (~USD 18,5 milhões)** para contas cripto fraudulentas; no
início de 2025, uma conglomerada de energia europeia (nome não identificado nas fontes consultadas) perdeu
**USD 25 milhões** quando atacantes usaram um clone de áudio *deepfake* do CFO para emitir instruções ao
vivo de transferência eletrônica urgente [14][15]. A Resemble AI relatou **980 casos de infiltração
corporativa** via *deepfake* em vídeo ao vivo durante reuniões no 3º trimestre de 2025, com o objetivo de
autorizar transações fraudulentas [14][15].

Em **5 de agosto de 2026**, essa tendência ganhou um caso concreto de grande escala: uma onda coordenada de
ataques de *vishing* com clonagem de voz por IA atingiu simultaneamente várias das maiores gestoras de recursos
de Wall Street — **Citadel, Point72 Asset Management, Two Sigma Investments e Millennium Management**, além de
gestoras de *private equity* não identificadas. Os atacantes miraram equipes de suporte técnico (*IT helpdesk*)
personificando executivos e colegas com voz sintética, na tentativa de obter acesso a sistemas corporativos. O
ataque foi atribuído ao cluster **UNC6671**, ligado ao grupo de extorsão **BlackFile**, ativo desde o início de
2026. Foi o primeiro teste em campo do *Financial Intelligence Fusion Center*, portal de compartilhamento de
inteligência de ameaças lançado pela FINRA em março de 2026. A maior parte das tentativas foi bloqueada — Two
Sigma barrou a intrusão sem impacto a dados ou sistemas, e Point72 não encontrou evidência de roubo de dados de
clientes [40][41].

### Atores de ameaça relevantes ao setor financeiro

| Ator / cluster            | Perfil                                                                  | Evidência          |
|:----------------------------|:----------------------------------------------------------------------|:-----------------------|
| FIN7 (Carbon Spider / Elbrus) | Financeiramente motivado desde 2013; migrou de roubo de dados de cartão via POS para *ransomware*/extorsão em larga escala | MITRE ATT&CK [16][17] |
| PRESSURE CHOLLIMA (DPRK)     | Maior roubo cripto já registrado (USD 1,46 bi) via cadeia de suprimentos de *software* | CrowdStrike [8][9]    |
| FAMOUS CHOLLIMA (DPRK)       | Identidades geradas por IA para infiltrar exchanges, fintechs e bancos de varejo | CrowdStrike [8][9]    |
| STARDUST CHOLLIMA (DPRK)     | Personas de recrutador geradas por IA e videoconferência sintética contra fintechs (AM. do Norte, Europa, Ásia) | CrowdStrike [8][9]    |
| VAULT PANDA (China)          | Espionagem contra instituições financeiras com malware KEYPLUG (DLL search-order hijacking) | CrowdStrike [8][9]    |
| Qilin                       | 59 vítimas no setor em 2025; caso GJTec afetou 32 instituições sul-coreanas via um único MSP | Black Kite [10][11]   |
| Akira                        | ~USD 244,17 milhões em proventos até final de setembro de 2025 (cross-setorial) | Black Kite [10][11]   |
| UNC6671 (BlackFile)           | *Vishing* via *IT helpdesk* com clonagem de voz por IA; atacou Citadel, Point72, Two Sigma e Millennium Management em 5/8/2026 | BleepingComputer [40][41] |

Nenhuma campanha específica e nomeada de FIN7 contra o setor financeiro datada de 2025–2026 foi
localizada no escopo desta pesquisa — as fontes descrevem o perfil histórico e atual do grupo, não um
incidente pontual do período [16][17].

## Recorte Brasil

O Brasil é, ao mesmo tempo, o mercado onde a inovação em pagamentos instantâneos (Pix) e
compartilhamento de dados (Open Finance) mais avançou e onde a fraude financeira ao consumidor atinge
escala inédita. A resposta regulatória do Banco Central é, no entanto, uma das mais maduras entre
mercados emergentes.

### Fraude no Pix: escala e mecanismos

O Brasil registrou **28 milhões de fraudes envolvendo o Pix** entre janeiro e setembro de 2025, segundo
levantamento da Associação de Defesa de Dados Pessoais e do Consumidor (ADDP) [18]. Em métrica distinta e
não diretamente comparável — mede pessoas, não casos, em janela temporal diferente —, entre julho de 2024
e junho de 2025 cerca de **24 milhões de brasileiros** foram vítimas de golpes financeiros envolvendo Pix
ou boletos, com prejuízo estimado em quase **R$ 29 bilhões** [19]. Fraude financeira representa cerca de
**47%** de todos os crimes digitais registrados no país; pessoas com mais de 50 anos respondem por cerca
de **53%** das vítimas [18]. Especificamente sobre golpes via Pix formalmente apurados pelos bancos
associados à Febraban — um recorte mais conservador que o "R$ 29 bilhões" acima, pois exclui
autorrelatos não contestados junto às instituições —, o prejuízo somou **R$ 2,7 bilhões** em dois anos,
alta de **43%** nas transações fraudulentas [20][21]. Os três números (28 milhões de casos, 24 milhões de
vítimas, R$ 2,7 bilhões em fraude Pix formalmente apurada) coexistem sem se contradizerem tecnicamente,
mas medem populações e recortes diferentes e não devem ser somados ou tratados como sinônimos.

Um mecanismo de fraude específico do Pix ilustra a sofisticação do golpe: o Mecanismo Especial de
Devolução (MED) foi explorado em fraude de "devolução dupla" — o golpista transfere para a conta da
vítima, alega erro e pede devolução; ao mesmo tempo, aciona o MED junto ao próprio banco, fazendo o valor
sair da conta da vítima duas vezes [18][22]. Em resposta, o Banco Central aprimorou o MED para rastrear o
caminho completo dos recursos fraudados por todas as contas intermediárias até o destino final, e a
**Resolução Conjunta BCB/CMN nº 6** passou a exigir que instituições autorizadas compartilhem indícios de
fraude/tentativas de fraude entre si por meio de sistema interoperável [18][22]. O aprimoramento ganhou
nome e norma: o **MED 2.0**, instituído pela **Resolução BCB nº 493, de 28/8/2025**, passou a seguir o
caminho do dinheiro pelas contas para as quais os valores foram transferidos após a fraude; a
implementação foi facultativa a partir de 23/11/2025 e tornou-se **obrigatória em 2/2/2026**, junto com o
**autoatendimento** para contestação de fraude diretamente no aplicativo da instituição [53][54].

Em **18 de setembro de 2026**, a **Resolução BCB nº 587** alterou novamente o regulamento do Pix: as
instituições passam a poder registrar no DICT uma marcação de "fundada suspeita de fraude" vinculada ao CPF
ou CNPJ envolvido, que pode permanecer por até **5 anos**; operações Pix de usuários marcados devem ser
rejeitadas (exceto devoluções); o usuário tem direito a pedir revisão, com prazo de até **7 dias** para
análise; e a exclusão de participante do Pix passa a ter efeito imediato. Segundo as duas fontes
consultadas, a marcação, o bloqueio e a contestação valem de imediato, enquanto as obrigações de
comunicação ao usuário e a cobrança híbrida entram em vigor em 1º/2/2027 e o Pix Automático em
conta-salário em 1º/7/2027 [55][56].

### Febraban: prejuízo, tecnologia e investimento em defesa

O volume de prejuízo com golpes financeiros no Brasil somou **R$ 10,1 bilhões em 2024**, alta de **17%**
frente aos R$ 8,6 bilhões de 2023, segundo a Pesquisa Febraban de Tecnologia Bancária 2025 — a maior
parte (R$ 10 bilhões acumulados em 2 anos) decorre de fraudes em canais eletrônicos e cartões de débito
[20][23]. Golpes baseados em perfis falsos/clonados (WhatsApp, anúncios, vendas simuladas) foram os mais
reportados por clientes em 2024. Quase **4 em cada 10 brasileiros** já sofreram algum tipo de golpe —
o maior número da série histórica da própria pesquisa [20][23]. Do lado defensivo, o reconhecimento da
biometria física como método de proteção passou de 59% (2023) para **67%** (2024), e em 2023 as
instituições financeiras destinaram cerca de **R$ 5 bilhões** à prevenção de fraudes e crimes
cibernéticos [20][23]. Até a data desta revisão (24/9/2026), não foi localizado número equivalente da
Febraban para o prejuízo de 2025 — a edição 2026 da Pesquisa Febraban de Tecnologia Bancária não o traz —,
e os R$ 10,1 bilhões de 2024 seguem como o dado mais recente dessa série.

Dois indicadores de 2025–2026, de metodologia distinta e **não somáveis** aos números da Febraban,
complementam o quadro. O **Anuário Brasileiro de Segurança Pública 2026** (Fórum Brasileiro de Segurança
Pública) contabilizou **2.261.055 registros de estelionato em 2025**, alta de **2,7%** frente aos 2.193.122
de 2024 e de **429,8%** desde 2018; o estelionato por meio eletrônico cresceu **20,6%**, de 286.226 para
**346.753** registros — contagem de boletins de ocorrência, não de prejuízo [47][48]. Já o relatório *O
Estado dos Golpes no Brasil 2026*, da Global Anti-Scam Alliance (GASA, 6/8/2026), **estima**, a partir de
pesquisa amostral com cerca de mil respondentes, que **16,5 milhões de brasileiros** perderam dinheiro com
golpes entre março de 2025 e fevereiro de 2026, com prejuízo de cerca de **R$ 21,2 bilhões** e mais de
34 bilhões de tentativas — **estimativa por *survey***, a ser lida como ordem de grandeza, e não como
apuração contábil [49][50].

### Open Finance: expansão acelerada, superfície de ataque nova

O ecossistema de Open Finance no Brasil superou **128 milhões de consentimentos ativos** em janeiro de
2026, segundo o relatório "State of Open Finance – Brazil & World" (Sensedia/Let's Money), colocando o
Brasil na liderança global entre mais de 78 países com regulação do tema; a infraestrutura gera mais de
**4,4 bilhões de comunicações semanais** entre instituições [24][25]. A própria Febraban, em fevereiro de
2026, citou um número maior — **154 milhões de consentimentos ativos** e mais de 100 milhões de
clientes/contas conectados. A divergência 128 × 154 fica resolvida pela série do dashboard oficial do Open
Finance Brasil reproduzida pela Zetta: **154 milhões** era o número de **dezembro de 2025** (ante 61,9
milhões em dez/2024 e 41,9 milhões em dez/2023), de modo que os 128 milhões da Sensedia já estavam
defasados em relação ao dashboard quando publicados [52].

O número mais recente supera com folga os dois: em **julho de 2026** o ecossistema passou de **200 milhões
de consentimentos ativos**. As duas leituras do dashboard oficial localizadas divergem entre si — **208,79
milhões** em 31/7/2026, segundo a Let's Money, e **239,8 milhões** em julho de 2026 (consulta em
18/8/2026), segundo o relatório da Zetta, que fala em "quase 240 milhões" e cerca de 800 instituições
participantes [51][52]. A divergência, provavelmente de recorte ou de data de extração, não foi arbitrada
nesta pesquisa; por isso o panorama adota o piso comum, "mais de 200 milhões". O que é inequívoco é a
direção: a expansão da API abre nova superfície
de ataque, na qual cada nova integração mal protegida representa um ponto de entrada adicional. Fraudadores
já exploram roubo e manipulação de tokens, criação de consentimentos híbridos fraudulentos, *bots*
especializados simulando comportamento humano, e engenharia social hiperpersonalizada com apoio de IA
generativa [24][25] — vetores detalhados na Figura 1, adiante.

### Regulação: Resolução CMN nº 4.893/2021 e Resolução BCB nº 85/2021

O marco regulatório vigente de segurança cibernética para o sistema financeiro nacional é composto por
duas resoluções irmãs, publicadas em 26/2/2021: a **Resolução CMN nº 4.893/2021** — editada pelo Conselho
Monetário Nacional, dispõe sobre política de segurança cibernética e requisitos de contratação de
processamento/armazenamento de dados e computação em nuvem, aplicável a bancos múltiplos, comerciais, de
investimento, cooperativas de crédito, Sociedades de Crédito Direto (SCDs), Sociedades de Empréstimo entre
Pessoas (SEPs) e demais instituições autorizadas a funcionar pelo Banco Central em sentido amplo — e a
**Resolução BCB nº 85/2021**, do próprio Banco Central, com o mesmo escopo temático mas aplicável
especificamente a instituições de pagamento [26][27]. Ambas foram atualizadas pela **Resolução CMN
nº 5.274/2025** e pela **Resolução BCB nº 538/2025**, aprovadas em **18/12/2025**, com prazo de adequação
para as instituições em funcionamento em **1º/3/2026** — prazo **já vencido**: o marco atualizado está
agora em fase de supervisão, e não mais de adequação [27][57]. Entre as mudanças estão autenticação
multifator em cenários sensíveis, segurança desde a concepção (*security by design*) como obrigação, teste
de intrusão anual por terceiro independente, trilhas de auditoria com retenção definida e controles
específicos para sistemas críticos (Pix, STR, RSFN) [27]. Os requisitos centrais das resoluções incluem
política de segurança cibernética documentada, plano de resposta a incidentes, testes de penetração periódicos e gestão de risco de fornecedores de TI; a
política deve ser proporcional ao porte, perfil de risco, modelo de negócio e sensibilidade dos dados de
cada instituição [28][29]. Em 2026, o arcabouço específico do Pix também avançou, com o MED 2.0 obrigatório
desde 2/2/2026 (Resolução BCB nº 493/2025) e a marcação de suspeita de fraude no DICT (Resolução BCB
nº 587/2026), detalhados na seção sobre fraude no Pix [53][54][55][56].

> **Nota de precisão regulatória:** não existe uma "Resolução BCB nº 4.893" — o número correto é
> **Resolução CMN nº 4.893/2021** (emitida pelo Conselho Monetário Nacional). A resolução paralela,
> emitida pelo próprio Banco Central com número próprio para instituições de pagamento, é a **Resolução
> BCB nº 85/2021**. As duas normas são irmãs, publicadas na mesma data, mas emitidas por órgãos e com
> números distintos — distinção confirmada por múltiplas fontes jurídicas (Migalhas, NDM Advogados,
> SecOffice) [26][27][28][29].

### Panorama agregado: incidentes reportados ao Banco Central em 2025

Além dos casos individuais documentados abaixo, o **Relatório Integrado** do Banco Central referente a 2025
registrou **76 incidentes cibernéticos considerados "relevantes"** no Sistema Financeiro Nacional — alta de
**29%** frente aos **59 casos** de 2024. Do total de 2025, **39 casos** foram classificados como fraude (ante
apenas 9 em 2024) e **27** corresponderam a falhas de tecnologia da informação; **65%** das ocorrências se
concentraram no segundo semestre do ano [38][39]. O próprio Banco Central atribui o crescimento a fatores
estruturais — dependência crescente de prestadores de serviço terceirizados (PSTIs) e uso disseminado de APIs
sem avaliação periódica de risco nem monitoramento operacional adequado pelas instituições supervisionadas
—, o mesmo padrão de risco de terceiros ilustrado pelos casos C&M Software e FictorPay adiante [38][39]. Esta
métrica é conceitualmente distinta do volume de fraude ao consumidor via Pix (28 milhões de casos, ver acima)
e do *ransomware* direto contra instituições (156→202 incidentes, Black Kite): mede a contagem oficial de
incidentes comunicados ao BC por instituições supervisionadas, uma métrica de governança/supervisão, não de
volume de ataques ou de vítimas.

### Incidentes conhecidos no setor financeiro brasileiro (2025–2026)

Os incidentes documentados em 2025 e 2026 ilustram, na prática, os vetores de risco discutidos acima —
vazamento de dados em massa, comprometimento de fornecedores de infraestrutura crítica do Pix (PSTIs),
exploração de aplicação de terceiro e ataques a canais e contas das próprias instituições.

Em **11–12 de fevereiro de 2025**, um agente identificado como "banconeon" divulgou em fórum
cibercriminoso um pacote de dados supostamente extraído da base do **Banco Neon**, afetando — segundo o
divulgador — cerca de **30 milhões de clientes**, incluindo CPF/CNPJ, dados de transações via Pix,
selfies e imagens de documentos de verificação de identidade. O Banco Neon confirmou o incidente
publicamente, mas negou que a extensão tenha atingido 30 milhões de clientes, afirmando tratar-se de
"pequena parcela" [30][31] — uma divergência explícita entre a alegação do atacante e a posição oficial
do banco que permanece contestada.

Em **4 de julho de 2025**, o Banco Central suspendeu preventivamente por até 60 dias (com base na
Resolução BC nº 30) três instituições participantes do Pix — **Transfeera, Soffy e Nuoro Pay** — após
ataque cibernético direcionado à **C&M Software**, empresa de tecnologia que atua como ponte entre
instituições financeiras e o Sistema de Pagamentos Brasileiro (SPB). A estimativa inicial divulgada na
época foi de desvio de pelo menos **R$ 400 milhões** [32][33]; a investigação da Polícia Federal (Operação
Magna Fraus) apurou depois **R$ 813 milhões** desviados de instituições de pagamento no início de julho, com
bloqueio judicial de bens de até R$ 640 milhões e 21 presos (13 no Brasil e 8 no exterior); um operador de
TI da C&M confessou ter vendido suas credenciais de acesso [58][59]. Este incidente ilustra diretamente o
risco de terceiros/cadeia de suprimentos no setor financeiro brasileiro: a vulnerabilidade não esteve nas
fintechs suspensas, mas em um provedor de infraestrutura tecnológica compartilhado por múltiplas
instituições [32][33].

No fim de **agosto de 2025**, o padrão se repetiu na **Sinqia**, outra empresa que conecta instituições ao
Pix: transações não autorizadas, introduzidas no ambiente Pix da Sinqia por meio de **credenciais legítimas
de fornecedores de TI** da empresa, desviaram cerca de **R$ 710 milhões** — R$ 669 milhões do **HSBC** e
R$ 41 milhões da sociedade de crédito direto **Artta** —, dos quais R$ 589 milhões (83%) foram bloqueados
[60][61]. Segundo a própria Sinqia, o incidente se limitou ao seu ambiente Pix [61].

Em **19 de outubro de 2025**, a fintech **FictorPay** (Grupo Fictor) teve cerca de **R$ 26 milhões**
desviados por meio de aproximadamente **280 transações Pix** distribuídas em cerca de 270 contas
fraudulentas em diversos bancos e fintechs, após exploração de falha em aplicação de terceiro contratada
pela empresa [34][35]. O caso marcou o **quarto incidente cibernético contra fintechs brasileiras em três
meses**, com perdas acumuladas superiores a **R$ 1,74 bilhão desde julho de 2024** [34][35]. Em resposta a
essa sequência de incidentes, o Banco Central passou a exigir o encerramento de "contas-bolsão" a partir
de dezembro de 2025, criou teto para transações Pix/TED de certas instituições e elevou o capital mínimo
exigido de fintechs (de R$ 1 milhão para R$ 9 milhões) [34][35].

O padrão de risco de terceiros não se limitou a fintechs: em **26 de janeiro de 2026**, o **Banco do
Nordeste** (banco público federal) comunicou um "incidente de cibersegurança" que forçou a suspensão
temporária do Pix, após falha em um **prestador de serviços de TI (PSTI) terceirizado** que permitiu o
desvio de recursos de uma conta-bolsão da própria terceirizada — sem, segundo o banco, vazamento de dados
ou dano às contas de clientes [42][43]. A extensão financeira do incidente só veio a público **quatro
meses depois**, quando o balanço do 1º trimestre de 2026 (divulgado em 13 de maio de 2026) revelou um item
não recorrente de **R$ 146,6 milhões** em prejuízo [43].

Em **22 de março de 2026** (domingo), o **BTG Pactual** identificou atividades atípicas em operações Pix,
suspendeu o serviço preventivamente e o retomou no dia seguinte, após um ataque que desviou cerca de
**R$ 100 milhões**. Segundo o banco, a falha foi "localizada internamente", não afetou a estrutura geral
do sistema de pagamentos e nenhuma conta de cliente nem dado pessoal foi acessado; o vetor técnico não foi
divulgado [45][46]. Segundo a imprensa, a maior parte do valor foi recuperada, restando entre **R$ 20
milhões e R$ 40 milhões** a rastrear [45].

Um vetor distinto do padrão de terceiros apareceu na manhã de **21 de abril de 2026**, quando o **Banco
Rendimento** (instituição atuante principalmente no segmento de câmbio) identificou e conteve um ataque
que afetou canais de acesso e **contas de clientes do próprio banco** — não um prestador terceirizado.
Parte dos recursos teve o destino identificado e foi bloqueada, e o serviço foi normalizado; o banco **não
divulgou** o número de usuários afetados nem os volumes financeiros envolvidos, e o vetor técnico exato
também não foi divulgado — o acesso a canais do cliente corresponde a um dos vetores anotados no diagrama
de superfície de ataque do Pix/Open Finance abaixo (*credential stuffing* contra o acesso do cliente), sem
que as fontes confirmem essa técnica [44][45].

> **Errata (24/9/2026):** versão anterior deste capítulo atribuía ao Banco Rendimento um desvio de cerca de
> R$ 100 milhões e prejuízo líquido de R$ 20–40 milhões. Esses números referem-se ao ataque ao **BTG
> Pactual** de 22/3/2026, citado na mesma reportagem da ConvergenciaDigital como caso anterior; a
> cobertura do incidente do Rendimento registra que o banco não abriu volumes financeiros [44][45][46].

Em **agosto de 2026**, dois episódios reforçaram a pressão sobre o ecossistema. No dia **18**, a Polícia
Federal deflagrou a **Operação Pane Seca** contra um grupo acusado de invadir sistemas de instituições
financeiras e realizar transferências e pagamentos de boletos, com os recursos passando por contas
intermediárias e corretoras de criptoativos; o prejuízo estimado é de cerca de **R$ 227 milhões**, com
bloqueio de R$ 226,2 milhões em bens — as instituições atingidas não foram nomeadas, e a investigação usou
dados do Projeto Tentáculos, acordo de cooperação entre a PF e a Febraban [62][63]. Na mesma quinzena, a
**TAG**, registradora de recebíveis controlada pela **Stone**, barrou uma tentativa de fraude de cerca de
**R$ 350 milhões**: criminosos credenciados na rede como participantes do ecossistema de cartões tentaram
trocar a titularidade de recebíveis de grandes empresas e liquidar os valores em uma conta laranja; o
alerta de uma instituição financeira permitiu cancelar as operações antes da liquidação, **sem prejuízo
financeiro** [64][65]. O caso estende o risco de terceiros a uma infraestrutura menos visível do sistema,
a de registro de recebíveis.

## Superfície de ataque: Pix e Open Finance

A figura abaixo mapeia a topologia lógica do fluxo Pix — do aplicativo do cliente à instituição
participante, ao Sistema de Pagamentos Instantâneos (SPI) e ao Diretório de Identificadores de Contas
Transacionais (DICT) do Banco Central, até a instituição recebedora — sobreposta às APIs de Open Finance
que conectam instituições participantes entre si. Cinco vetores de ataque são anotados diretamente sobre
o fluxo: engenharia social/golpe do "motoboy"/"mão fantasma" contra o cliente; malware bancário no
dispositivo/app; abuso de API de Open Finance; *credential stuffing* contra o acesso do cliente; e
consentimento fraudulento no ecossistema de Open Finance.

![Topologia lógica do fluxo Pix e Open Finance com cinco vetores de ataque anotados em vermelho: engenharia social/mão fantasma no cliente, malware em app, abuso de API, credential stuffing e consentimento fraudulento](../assets/diagramas/02-superficie-pix-openfinance.svg)

*Figura 1 — Fluxo lógico Pix (cliente → instituição participante → SPI/DICT do Banco Central →
instituição recebedora) com a camada de APIs de Open Finance entre instituições, e cinco vetores de
ataque anotados em vermelho. Baseado na descrição de mecanismos de fraude do dossiê de pesquisa
[18][22][24][25].*

## Mapa regulatório do setor financeiro brasileiro

A figura a seguir organiza, em linha do tempo, as quatro camadas de obrigação regulatória que incidem
sobre uma instituição financeira brasileira: a LGPD (proteção de dados pessoais, transversal a todos os
setores), a Resolução CMN nº 4.893/2021 e a Resolução BCB nº 85/2021 (política de segurança cibernética,
específicas do setor financeiro), o arcabouço do Open Finance Brasil (compartilhamento de dados sob
consentimento) e as regras do Pix/Banco Central (SPI, DICT, MED, Resolução Conjunta BCB/CMN nº 6). A
atualização de 2025 (Resolução CMN nº 5.274/2025 e Resolução BCB nº 538/2025), com prazo de adequação em
1º/3/2026 — já vencido —, fecha a linha do tempo da figura. Posteriores a ela, e ainda não representados no
diagrama, estão o MED 2.0 obrigatório desde 2/2/2026 (Resolução BCB nº 493/2025) e a Resolução BCB
nº 587/2026, de 18/9/2026, que institui a marcação de suspeita de fraude no DICT [53][54][55][56].

![Mapa em linha do tempo das obrigações regulatórias do setor financeiro brasileiro: LGPD, Resolução CMN 4.893/2021, Resolução BCB 85/2021, Open Finance Brasil, regras do Pix e a atualização 2025 com prazo em março de 2026](../assets/diagramas/02-mapa-regulatorio-financeiro-br.svg)

*Figura 2 — Linha do tempo das obrigações regulatórias do setor financeiro brasileiro, de 2020 (LGPD em
vigor) a 1º/3/2026 (prazo final de adequação às resoluções atualizadas em 2025, já vencido). Cada camada mostra a
exigência-chave associada [23][26][27][28][29].*

## Ameaças × impacto no setor financeiro

| Ameaça                                     | Probabilidade | Impacto        | Evidência                                                  |
|:----------------------------------------------|:----------------:|:------------------|:----------------------------------------------------------------|
| *Ransomware* direto contra a instituição       | Alta            | Crítico           | 156→202 incidentes (2024→2025), +76% Q1 2026 [10][11]           |
| Fraude por engenharia social / *deepfake*      | Alta            | Alto              | *Deepfake* 0,1%→6,5% das tentativas em 3 anos (Signicat, 2025); 20% das tentativas de fraude biométrica (Entrust 2026) [67][68][69][70]          |
| Risco de terceiros / cadeia de suprimentos     | Média-Alta      | Crítico           | C&M Software (R$ 813 mi, PF; estimativa inicial ≥ R$ 400 mi); Sinqia (R$ 710 mi); GJTec (32 instituições); Banco do Nordeste (R$ 146,6 mi) [10][11][32][33][42][43][58][59][60][61] |
| Roubo de ativos digitais (atores DPRK-nexus)   | Média           | Alto              | USD 2,02 bi roubados em 2025, +51% a/a [8][9]                   |
| Abuso de API / consentimento fraudulento (Open Finance) | Média  | Alto              | Mais de 200 milhões de consentimentos ativos em jul/2026 (208,8–239,8 mi, conforme a leitura do dashboard), superfície em expansão [51][52] |
| DDoS                                          | Alta            | Baixo-Médio       | Alvo nº 1 de DDoS volumétrico em 2024, L7 +23% (2023→2024); duração mediana L3/L4 +738% desde 2024 [71][72][73][74] |
| Vazamento de dados em massa                    | Média           | Alto              | Caso Banco Neon (alegação de 30 milhões de clientes) [30][31]   |

## Obrigações regulatórias do setor financeiro brasileiro

| Norma / iniciativa                        | Órgão emissor         | Escopo                                    | Exigência-chave                          | Prazo de adequação   |
|:----------------------------------------------|:--------------------------|:-----------------------------------------------|:-------------------------------------------|:----------------------|
| LGPD (Lei nº 13.709/2018)                  | Congresso Nacional / ANPD | Todos os setores, dados pessoais           | Consentimento e governança de dados       | Em vigor desde 2020   |
| Resolução CMN nº 4.893/2021                | Conselho Monetário Nacional | Bancos, cooperativas, SCDs/SEPs e demais instituições autorizadas | Política de segurança cibernética documentada | Atualizada por CMN 5.274/2025 |
| Resolução BCB nº 85/2021                    | Banco Central do Brasil  | Instituições de pagamento                  | Política de segurança cibernética documentada | Atualizada por BCB 538/2025 |
| Open Finance Brasil                        | Banco Central do Brasil  | Compartilhamento de dados sob consentimento | Gestão de consentimento e segurança de API | Em expansão contínua  |
| Regras do Pix (SPI/DICT/MED)               | Banco Central do Brasil  | Instituições participantes do Pix          | Rastreabilidade de fraude, MED aprimorado  | Vigente               |
| Resolução BCB nº 493/2025 (MED 2.0)        | Banco Central do Brasil  | Participantes do Pix (provedores de conta transacional e liquidantes especiais) | Rastreio do caminho do dinheiro na devolução; autoatendimento para contestação | Obrigatório desde 2/2/2026 |
| Resolução CMN nº 5.274/2025 + BCB nº 538/2025 | CMN / Banco Central do Brasil | Atualização do marco de segurança cibernética | MFA, *security by design*, pentest anual independente, trilhas de auditoria | Vencido em 1º/3/2026  |
| Resolução BCB nº 587/2026                  | Banco Central do Brasil  | Participantes do Pix                       | Marcação de suspeita de fraude no DICT (até 5 anos), bloqueio e contestação | Imediato (18/9/2026); demais itens 1º/2/2027 e 1º/7/2027 |

## Fontes

[1] FS-ISAC. *Heightened Cyber Threats are Testing the Operational Resilience of the Financial Sector
(Navigating Cyber 2025)*. Maio de 2025.
https://www.fsisac.com/newsroom/heightened-cyber-threats-are-testing-the-operational-resilience-of-the-financial-sector

[2] ABA Banking Journal. *FS-ISAC releases annual report on financial sector cyber threats*. 2025.
https://bankingjournal.aba.com/2025/05/fs-isac-releases-annual-report-on-financial-sector-cyber-threats/

[3] IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach

[4] DataBreachCost.com. *Financial Services Data Breach Cost (2025): $5.56M, #2 Sector*. 2025.
https://databreachcost.com/industry/financial-services

[5] Verizon. *2025 Data Breach Investigations Report — Finance Snapshot*. 2025.
https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf

[6] FS-ISAC / Akamai. *DDoS: Here to Stay*. Março de 2024.
https://www.fsisac.com/newsroom/pr-akamai-ddos-report-2024

[7] Cybersecurity Dive. *Financial services sees sharp increase in DDoS attacks as geopolitical tensions
rise*. 2024. https://www.cybersecuritydive.com/news/ddos-financial-services-fsisac-akamai/709623/

[8] CrowdStrike. *CrowdStrike 2026 Financial Services Threat Landscape Report*. 2026.
https://www.crowdstrike.com/en-us/press-releases/crowdstrike-2026-financial-services-threat-landscape-report/

[9] DQ Channels. *CrowdStrike 2026 threat report exposes new banking risks*. 2026.
https://www.dqchannels.com/news/crowdstrike-2026-threat-report-exposes-new-banking-risks1-11837789

[10] Black Kite. *2026 State of Financial Services Report*. 2026.
https://blackkite.com/reports/2026-financial-services-report

[11] Unite.AI. *Black Kite's 2026 Financial Services Report Warns of a Growing Cybersecurity Crisis Across
Banking and Investment Firms*. 2026.
https://www.unite.ai/black-kites-2026-financial-services-report-warns-of-a-growing-cybersecurity-crisis-across-banking-and-investment-firms/

[12] Cyble. *Deepfake-as-a-Service Exploded In 2025: 2026 Threats Ahead*. 2026.
https://cyble.com/knowledge-hub/deepfake-as-a-service-exploded-in-2025/

[13] Right-Hand.ai. *The State of Deep Fake Vishing Attacks in 2025*. 2025.
https://right-hand.ai/blog/deep-fake-vishing-attacks-2025/

[14] StationX. *Deepfake Statistics [2026]: Growth, Fraud & Detection Data*. 2026.
https://app.stationx.net/articles/deepfake-statistics

[15] BrightDefense. *150+ Deepfake Statistics (March 2026)*. 2026.
https://www.brightdefense.com/resources/deepfake-statistics/

[16] MITRE ATT&CK. *FIN7, G0046*. https://attack.mitre.org/groups/G0046/

[17] Huntress. *FIN7 Cybercrime Group — Tactics, Tools, and Threat Insights*.
https://www.huntress.com/threat-library/threat-actors/fin7

[18] Contábeis (citando ADDP). *Golpes via Pix: 28 milhões de casos em 2025 e como combatê-los*. 2025.
https://www.contabeis.com.br/noticias/74404/golpes-via-pix-28-milhoes-de-casos-em-2025-e-como-combate-los/

[19] Rádio Senado. *Mais de 24 milhões de pessoas foram vítimas de golpes pelo Pix*. 2025.
https://www12.senado.leg.br/radio/1/noticia/2025/08/18/mais-de-24-milhoes-de-pessoas-foram-vitimas-de-golpes-pelo-pix

[20] Poder360 (citando Febraban). *Golpes causaram prejuízo de R$ 10,1 bi em 2024, diz Febraban*. 2025.
https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/

[21] Finsiders Brasil. *Golpes com Pix dão prejuízos de quase R$ 3 bi em dois anos, diz Febraban*. 2025.
https://finsidersbrasil.com.br/eventos/golpes-com-pix-dao-prejuizos-de-quase-r-3-bi-em-dois-anos-diz-febraban/

[22] Data Rudder. *Data Report Pix 2025: a segurança em pagamentos instantâneos*. 2025.
https://datarudder.com/report-pix-pagamentos-instantaneos/

[23] FEBRABAN Tech. *Quase 4 em cada 10 brasileiros já sofreram golpe, aponta pesquisa da Febraban*. 2025.
https://febrabantech.febraban.org.br/temas/seguranca/quase-4-em-cada-10-brasileiros-ja-sofreram-golpe-aponta-pesquisa-da-febraban

[24] TI Inside. *Open Finance: Brasil lidera ranking global com 128 milhões de consentimentos ativos*.
Janeiro de 2026. https://tiinside.com.br/22/01/2026/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/

[25] Convergência Digital. *Open Finance: Brasil lidera ranking global com 128 milhões de consentimentos
ativos*. Janeiro de 2026. https://convergenciadigital.com.br/mercado/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/

[26] Banco Central do Brasil / ANCORD. *Resolução CMN n° 4.893 de 26/2/2021* (texto oficial).
https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf

[27] NDM Advogados. *O que muda para a segurança cibernética das instituições autorizadas até março de
2026 com as Resoluções BCB 538/2025 e CMN 5.274/2025*. 2025.
https://ndmadvogados.com.br/artigo/seguranca-cibernetica-bcb-538-cmn-5274/

[28] SecOffice. *Resolução CMN 4.893: Guia Completo sobre Segurança Cibernética para Instituições
Financeiras*. https://secoffice.com.br/blog/resolucao-cmn-4-893-guia-completo-sobre-seguranca-cibernetica-para-instituicoes-financeiras/

[29] Migalhas. *Instituições financeiras: Política de segurança cibernética*.
https://www.migalhas.com.br/depeso/343724/instituicoes-financeiras-politica-de-seguranca-cibernetica

[30] Mixvale. *Banco Neon sofre vazamento de dados de 30 milhões de clientes e alerta para possíveis
golpes*. Fevereiro de 2025.
https://www.mixvale.com.br/2025/02/12/banco-neon-sofre-vazamento-de-dados-de-30-milhoes-de-clientes-e-alerta-para-possiveis-golpes/

[31] InfoMoney. *Banco Neon confirma vazamento de dados, mas nega 30 milhões de clientes afetados*.
Fevereiro de 2025. https://www.infomoney.com.br/consumo/dados-de-mais-de-30-milhoes-de-clientes-do-banco-neon-foram-vazados-diz-site/

[32] Agência Brasil (EBC). *BC suspende três instituições do Pix após ataque cibernético*. Julho de 2025.
https://agenciabrasil.ebc.com.br/economia/noticia/2025-07/bc-suspende-tres-instituicoes-do-pix-apos-ataque-cibernetico

[33] Finsiders Brasil. *BC suspende do Pix os participantes Transfeera, Nuoro Pay e Soffy (atualização)*.
Julho de 2025. https://finsidersbrasil.com.br/reportagem-exclusiva-fintechs/bc-suspende-os-participantes-do-pix-transfeera-nuoro-pay-e-soffy/

[34] TechTudo. *Ataque hacker desvia R$ 26 milhões; entenda caso contra fintech brasileira*. Outubro de
2025. https://www.techtudo.com.br/noticias/2025/10/ataque-hacker-desvia-r-26-milhoes-entenda-caso-contra-fintech-brasileira-edsoftwares.ghtml

[35] Diário do Grande ABC. *Fintech é alvo de ataque cibernético que desvia R$ 26 milhões*. Outubro de
2025. https://www.dgabc.com.br/Noticia/4264537/fintech-e-alvo-de-ataque-cibernetico-que-desvia-rs-26-milhoes

[36] IBM Newsroom. *IBM Study: One in Four Malicious Breaches are AI-Enabled, Costing Companies $6
Million on Average*. 29 de julho de 2026.
https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average

[37] Global News. *Data breach costs mount as attacks target critical infrastructure: IBM*. 2026.
https://globalnews.ca/news/11998290/ibm-data-breach-costs-canada/

[38] Mercado&Consumo (cobertura de agência, replicada por ISTOÉ Dinheiro e Jornal do Comércio). *Incidentes
cibernéticos sobem 29% em 2025, com avanço de fraudes, mostra BC*. Abril de 2026.
https://mercadoeconsumo.com.br/01/04/2026/tecnologia/incidentes-ciberneticos-sobem-29-em-2025-com-avanco-de-fraudes-mostra-bc/

[39] Portal Information Management. *Com Pix superando 170 milhões de usuários, Banco Central endurece regras
após alta de 29% nos ataques cibernéticos*. Agosto de 2026.
https://docmanagement.com.br/08/05/2026/com-pix-superando-170-milhoes-de-usuarios-banco-central-endurece-regras-apos-alta-de-29-nos-ataques-ciberneticos/

[40] Bloomberg (via Yahoo Finance). *Major Hedge Funds Targeted in Wave of Attempted Cyberattacks*. 6 de
agosto de 2026. https://finance.yahoo.com/technology/ai/articles/major-hedge-funds-targeted-wave-154044981.html

[41] BleepingComputer. *Hedge fund cyberattacks tied to BlackFile-linked UNC6671 extortion group*. Agosto de
2026. https://www.bleepingcomputer.com/news/security/hedge-fund-cyberattacks-tied-to-blackfile-linked-unc6671-extortion-group/

[42] Agência Brasil (EBC). *Banco do Nordeste suspende Pix após sofrer ataque hacker*. Janeiro de 2026.
https://agenciabrasil.ebc.com.br/economia/noticia/2026-01/banco-do-nordeste-suspende-pix-apos-sofrer-ataque-hacker

[43] Finsiders Brasil. *Banco do Nordeste revela perda milionária após ataque ao Pix*. Maio de 2026.
https://finsidersbrasil.com.br/pagamentos/pix/ataque-hacker-pix-bnb-perda-146-milhoes/

[44] CNN Brasil. *Banco Rendimento diz que serviço foi normalizado após ataque hacker*. Abril de 2026.
https://www.cnnbrasil.com.br/economia/negocios/banco-rendimento-e-alvo-de-ataque-cibernetico-mas-diz-ter-normalizado-servicos/

[45] ConvergenciaDigital. *Ataque hacker atinge mais um banco no Brasil e, agora, nas contas dos clientes*.
Abril de 2026. https://convergenciadigital.com.br/mercado/ataque-hacker-atinge-mais-um-banco-no-brasil-e-agora-nas-contas-dos-clientes/

[46] Agência Brasil (EBC). *BTG Pactual retoma Pix após ataque hacker que desviou R$ 100 milhões*. 23 de
março de 2026. https://agenciabrasil.ebc.com.br/economia/noticia/2026-03/btg-pactual-retoma-pix-apos-ataque-hacker-que-desviou-r-100-milhoes

[47] Fórum Brasileiro de Segurança Pública. *Anuário Brasileiro de Segurança Pública 2026* (tabela de
estelionato e estelionato por meio eletrônico, p. 120). Julho de 2026.
https://forumseguranca.org.br/wp-content/uploads/2026/07/anuario-2026.pdf

[48] Jornal da Nova. *Estelionatos batem recorde e somam 2,26 milhões de casos; alta é de quase 430% desde
2018*. Julho de 2026. https://jornaldanova.com.br/noticia/473690/estelionatos-batem-recorde-e-somam-226-milhoes-de-casos-alta-e-de-quase-430-desde-2018

[49] Boqnews (citando GASA, *O Estado dos Golpes no Brasil 2026*). *Brasil conviveu com mais de 34 bi de
tentativas de golpes digitais em 2025*. Agosto de 2026.
https://www.boqnews.com/nacional/brasil-conviveu-com-mais-de-34-bi-de-tentativas-de-golpes-digitais-em-2025/

[50] Consecti (citando GASA). *Brasil conviveu com mais de 34 bilhões de tentativas de golpes digitais em
2025, estima ONG internacional*. Agosto de 2026.
https://consecti.org.br/brasil-conviveu-com-mais-de-34-bilhoes-de-tentativas-de-golpes-digitais-em-2025-estima-ong-internacional/

[51] Let's Money. *Open Finance entra em nova fase com desafio de governança*. 27 de agosto de 2026
(atualizado em 12 de setembro de 2026).
https://www.letsmoney.com.br/noticias/open-finance-208-milhoes-consentimentos-governanca/

[52] Zetta. *Cinco anos de transformação e uma agenda para o futuro — Open Finance no Brasil* (dados do
dashboard oficial do Open Finance Brasil, consulta em 18/8/2026). Setembro de 2026.
https://static.poder360.com.br/uploads/2026/09/Zetta_2026_Open-Finance-no-Brasil_Final-1-1.pdf

[53] Agência Brasil (EBC). *Novas regras de segurança do Pix entram em vigor; veja mudanças*. Fevereiro de
2026. https://agenciabrasil.ebc.com.br/economia/noticia/2026-02/novas-regras-de-seguranca-do-pix-entram-em-vigor-veja-mudancas

[54] CSMV Advogados. *Resolução BCB nº 493/2025 — Aperfeiçoamento do Mecanismo Especial de Devolução (MED)
do Pix*. 2025. https://www.csmv.com.br/boletins/boletim-01/

[55] Poder360. *Entenda quais são as mudanças no Pix anunciadas pelo BC*. 18 de setembro de 2026.
https://www.poder360.com.br/poder-economia/entenda-quais-sao-as-mudancas-no-pix-anunciadas-pelo-bc/

[56] TI Inside. *BC endurece regras contra fraudes e altera funcionamento do Pix*. 18 de setembro de 2026.
https://tiinside.com.br/18/09/2026/bc-endurece-regras-contra-fraudes-e-altera-funcionamento-do-pix/

[57] Clavis. *Banco Central reforça exigências de segurança cibernética: o que muda para instituições até
março de 2026*. 2025. https://clavis.com.br/blog/banco-central-reforca-exigencias-de-seguranca-cibernetica/

[58] CNN Brasil. *PF pede extradição de suspeitos de ataque hacker que afetou Pix*. 7 de novembro de 2025.
https://www.cnnbrasil.com.br/nacional/brasil/pf-pede-extradicao-de-suspeitos-de-ataque-hacker-que-afetou-pix/

[59] Jornal de Brasília. *Com ajuda da Interpol, PF faz nova operação contra hackers que desviaram R$ 813
milhões*. 30 de outubro de 2025.
https://jornaldebrasilia.com.br/noticias/brasil/com-ajuda-da-interpol-pf-faz-nova-operacao-contra-hackers-que-desviaram-r-813-milhoes/

[60] InfoMoney. *Desvio de recursos em ataque hacker ao Pix vai a R$ 710 mi; maior parte foi bloqueada*.
Setembro de 2025. https://www.infomoney.com.br/economia/desvio-de-recursos-em-ataque-hacker-ao-pix-vai-a-r-710-mi-maior-parte-foi-bloqueada/

[61] CartaCapital. *Ataque hacker desviou R$ 710 milhões em transações Pix, diz empresa que opera sistema*.
2 de setembro de 2025. https://www.cartacapital.com.br/economia/ataque-hacker-desviou-r-710-milhoes-em-transacoes-pix-diz-empresa-que-opera-sistema/

[62] Polícia Federal. *PF combate grupo responsável por invasões a sistemas de instituições financeiras*
(Operação Pane Seca). 18 de agosto de 2026.
https://www.gov.br/pf/pt-br/assuntos/noticias/2026/08/pf-desarticula-grupo-criminoso-responsavel-por-invasoes-a-sistemas-de-instituicoes-financeiras

[63] Metrópoles. *Grupo invade sistemas financeiros e causa prejuízo de R$ 227 milhões*. Agosto de 2026.
https://www.metropoles.com/colunas/mirelle-pinheiro/grupo-invade-sistemas-financeiros-e-causa-prejuizo-de-r-227-milhoes

[64] Let's Money (citando Valor Econômico). *Registradora da Stone barra fraude de R$ 350 milhões*. 17 de
agosto de 2026. https://www.letsmoney.com.br/noticias/registradora-stone-fraude-recebiveis-350-milhoes/

[65] Vero Notícias. *Registradora da Stone identifica fraude de R$ 350 milhões*. 16 de agosto de 2026.
https://veronoticias.com/economia/registradora-da-stone-identifica-fraude-de-r-350-milhoes/

[66] Verizon. *2026 Data Breach Investigations Report* (p. 84, "Financial and Insurance"). 2026.
https://www.verizon.com/business/resources/Td15/reports/2026-dbir-data-breach-investigations-report.pdf

[67] Signicat. *Fraud attempts with deepfakes have increased by 2137% over the last three years* (The Battle
Against AI-Driven Identity Fraud). 2025.
https://www.signicat.com/press-releases/fraud-attempts-with-deepfakes-have-increased-by-2137-over-the-last-three-year

[68] Intelligent CISO. *Fraud attempts with deepfakes have increased by 2137% over the last three years*. 24 de
fevereiro de 2025.
https://www.intelligentciso.com/2025/02/24/fraud-attempts-with-deepfakes-have-increased-by-2137-over-the-last-three-years/

[69] Entrust. *Deepfakes, Social Engineering, and Injection Attacks on the Rise: Entrust 2026 Identity Fraud
Report Reveals Surging Attacks and Diversifying Tactics*. 18 de novembro de 2025.
https://www.entrust.com/company/newsroom/deepfakes-social-engineering-and-injection-attacks-on-the-rise

[70] FinTech Magazine. *Deepfakes Drive 20% of Biometric Fraud Attempts*. 2025.
https://fintechmagazine.com/news/cybercrime-when-the-sun-is-down-entrust-shows-attack-surge

[71] FS-ISAC. *DDoS Attackers Increase Targeting of Global Financial Sector, According to FS-ISAC and Akamai
Report* (From Nuisance to Strategic Threat: DDoS Attacks Against the Financial Sector). 10 de junho de 2025.
https://www.fsisac.com/newsroom/ddos-attackers-increase-targeting-of-global-financial-sector-according-to-fsisac-and-akamai-report

[72] Infosecurity Magazine. *DDoS Attacks on Financial Sector Surge in Scale and Sophistication*. Junho de
2025. https://www.infosecurity-magazine.com/news/ddos-financial-sector-surge/

[73] Akamai. *Financial Services at Risk: DDoS Attacks Are Bigger, Longer, and More Complex, Akamai Research
Finds* (State of the Internet — Financial Services 2026). 20 de maio de 2026.
https://www.akamai.com/newsroom/press-release/financial-services-at-risk-ddos-attacks-are-bigger-longer-and-more-complex-akamai-research-finds

[74] TFiR. *AI Powered Attacks Breaking Bank Defenses* (entrevista com Steve Winterfeld, Akamai). 2026.
https://tfir.io/akamai-api-ddos-financial-services-2026-steve-winterfeld/

[75] Black Kite. *Black Kite's 2026 State of Financial Services Report Reveals Ransomware Surge and
Vulnerability Deluge Driving Two-Front Cyber Threat*. 3 de junho de 2026.
https://blackkite.com/press-releases/black-kites-2026-state-of-financial-services-report-reveals-ransomware-surge-and-vulnerability-deluge-driving-two-front-cyber-threat

[76] CYFIRMA. *Finance Q2 2026: Industry Report*. 2026.
https://www.cyfirma.com/research/finance-q2-2026-industry-report/

[77] Comparitech. *Ransomware Roundup: H1 2026 stats on attacks, ransoms, and active gangs*. 2 de julho de
2026. https://www.comparitech.com/news/ransomware-roundup-h1-2026-stats-on-attacks-ransoms-and-active-gangs/
