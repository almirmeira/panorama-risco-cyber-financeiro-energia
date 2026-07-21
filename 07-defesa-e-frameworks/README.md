# 07 — Defesa e Frameworks

> **Resumo Executivo**
> - O **NIST Cybersecurity Framework (CSF) 2.0**, publicado em **26 de fevereiro de 2024**, formaliza
>   **seis funções nucleares** — as cinco originais (*Identify*, *Protect*, *Detect*, *Respond*,
>   *Recover*) mais uma sexta função inteiramente nova, **Govern**, que eleva a governança de risco
>   cibernético à condição de responsabilidade explícita da liderança sênior, ao lado de riscos
>   financeiros e reputacionais [1][2].
> - A revisão **ISO/IEC 27001:2022** reduziu o Anexo A de 114 para **93 controles**, reorganizados em
>   quatro categorias — organizacional, pessoas, físico e tecnológico —, com **11 controles novos**
>   voltados a riscos contemporâneos (nuvem, inteligência de ameaças, mascaramento de dados) [3][4].
> - A série **IEC 62443** — já detalhada na perspectiva de energia/OT no capítulo 03 — é o padrão de
>   referência para segurança de sistemas de automação industrial, organizada em quatro grupos de
>   documentos, com **7 requisitos fundamentais (FR)** e um modelo de **zonas e conduítes** com
>   **Níveis de Segurança (SL) de 1 a 4** construído sobre o Modelo Purdue [5][6].
> - O **Zero Trust (NIST SP 800-207)** substitui a confiança implícita por perímetro pelo princípio
>   "nunca confiar, sempre verificar" ("*never trust, always verify*"), definido em **sete pilares**
>   (*tenets*) — mas sua aplicação exige cautela em ambientes **OT**, onde verificação contínua não
>   pode comprometer a **disponibilidade** do processo físico [7][8].
> - Nenhum dos quatro frameworks é mutuamente exclusivo: bancos brasileiros já operam sob regulação
>   do Banco Central mapeável ao CSF/ISO 27001 (capítulo 02), enquanto operadoras de energia somam
>   a RN ANEEL 964/2021 (capítulo 03) ao IEC 62443 como camada técnica complementar — nenhuma das
>   duas regulações brasileiras, porém, cita nominalmente CSF 2.0 ou Zero Trust em seus textos
>   oficiais [1][7].
> - **Número-chave:** o Anexo A da ISO/IEC 27001:2022 tem **93 controles** em 4 categorias — 37
>   organizacionais, 8 de pessoas, 14 físicos e 34 tecnológicos [3][4].

## Por que este capítulo existe

Os capítulos 01 a 06 documentaram **ameaças**: atores, técnicas, incidentes e tendências que atingem
os setores financeiro e de energia. Este capítulo faz a ponte para o **repertório de controles**
usado — na teoria e, parcialmente, na prática regulatória brasileira — para mitigar essas mesmas
ameaças, organizando-o em torno de quatro referências internacionais amplamente adotadas: NIST CSF
2.0, ISO/IEC 27001:2022, IEC 62443 e Zero Trust (NIST SP 800-207). O objetivo não é prescrever
implementação — isso é papel do capítulo 08 (Recomendações) — mas estabelecer o vocabulário técnico
comum que qualquer plano de ação setorial precisa referenciar.

> **Nota metodológica:** os textos oficiais completos das normas ISO e IEC são publicações pagas
> (iso.org, iec.ch) e não puderam ser acessados diretamente nesta pesquisa. Nesses casos — ISO/IEC
> 27001:2022 e IEC 62443 —, a estrutura foi confirmada por múltiplas fontes explicativas secundárias
> tecnicamente consistentes entre si, sem divergência numérica encontrada entre elas. Esta ressalva já
> constava do dossiê de pesquisa (seção "Defesa e Frameworks") e é preservada aqui integralmente.

## NIST Cybersecurity Framework (CSF) 2.0

Em **26 de fevereiro de 2024**, o NIST publicou o **CSF 2.0** — a primeira atualização de grande
porte do framework desde a versão original de 2014 (documento completo: NIST CSWP 29). A revisão
confirma e formaliza **seis funções nucleares**:

| Função        | Nome original      | Foco                                                                 |
|:---------------|:---------------------|:-----------------------------------------------------------------------|
| **Govern**     | *Govern* (nova em 2.0) | Estratégia de risco, papéis, responsabilidades e políticas de governança cibernética |
| **Identify**   | *Identify*            | Ativos, dados, fornecedores e riscos de negócio associados a eles         |
| **Protect**    | *Protect*              | Controles de acesso, conscientização, proteção de dados e infraestrutura   |
| **Detect**     | *Detect*               | Monitoramento contínuo e detecção de anomalias/eventos adversos            |
| **Respond**    | *Respond*              | Planejamento, comunicação, análise e mitigação de incidentes               |
| **Recover**    | *Recover*              | Planejamento e execução de restauração de capacidades e serviços afetados  |

A função **Govern** é a única inteiramente nova desta revisão. Elementos de governança já existiam
de forma dispersa nas versões 1.0/1.1, mas o CSF 2.0 os eleva à condição de **função nuclear
própria** — reconhecendo a cibersegurança como fonte relevante de risco empresarial que a liderança
sênior deve considerar ao lado de riscos financeiros e reputacionais, e reforçando seu papel
transversal às demais cinco funções. A versão 2.0 também amplia expressamente o público-alvo do
framework: não mais limitado a infraestrutura crítica, mas voltado a organizações de qualquer setor e
porte, "das menores escolas e ONGs às maiores agências e corporações" [1][2].

**Aplicação a finanças e energia:** o CSF 2.0 é amplamente referenciado — de forma qualitativa e por
mapeamentos informais de mercado, não por menção nominal nos textos regulatórios — como referência
transversal aos dois setores. No **setor financeiro**, a função *Govern* dialoga diretamente com as
exigências de política de segurança cibernética da Resolução CMN nº 4.893/2021 já detalhada no
capítulo 02; no **setor energia**, a mesma função se conecta às políticas de segurança exigidas pela
RN ANEEL nº 964/2021 (capítulo 03). Ainda assim, **nenhuma das duas regulações brasileiras menciona o
CSF 2.0 nominalmente** nos textos oficiais consultados nesta pesquisa [1].

## ISO/IEC 27001:2022

A revisão **ISO/IEC 27001:2022** (publicada em outubro de 2022) reduziu o número de controles do
Anexo A de **114 (edição de 2013)** para **93 controles**, substituindo a antiga estrutura de 14
domínios/categorias por **quatro temas**:

| Categoria                  | Faixa de controles | Quantidade | Exemplo de controle                                  |
|:-----------------------------|:---------------------|:-------------|:--------------------------------------------------------|
| **Organizacional**            | 5.1 – 5.37            | 37            | Políticas de segurança, inteligência de ameaças, relação com fornecedores |
| **Pessoas**                   | 6.1 – 6.8             | 8             | Triagem, conscientização, condições de emprego            |
| **Físico**                    | 7.1 – 7.14            | 14            | Perímetros de segurança física, proteção contra ameaças ambientais |
| **Tecnológico**                | 8.1 – 8.34            | 34            | Prevenção de vazamento de dados, mascaramento de dados, codificação segura |

A revisão consolidou controles preexistentes e introduziu **11 controles novos**, refletindo riscos e
necessidades tecnológicas contemporâneas — entre eles, inteligência de ameaças, segurança na nuvem,
prevenção de vazamento de dados, monitoramento de atividades, mascaramento de dados e codificação
segura [3][4].

**Relevância para finanças e energia:** a ISO/IEC 27001 é frequentemente citada como referência de
**certificação voluntária** complementar às exigências regulatórias específicas de cada setor — BCB
no financeiro, ANEEL no energia —, ambas já detalhadas nos capítulos 02 e 03. Diferentemente do CSF
2.0 (gratuito) e do NIST SP 800-207, o texto integral da norma é uma publicação paga da ISO
(iso.org/standard/27001), o que limitou o acesso direto ao documento primário nesta pesquisa — a
contagem de 93 controles em 4 categorias, porém, é consenso replicado sem divergência numérica entre
dezenas de fontes secundárias consultadas [3][4].

## IEC 62443 — o padrão de OT/energia

A série **ISA/IEC 62443** é o principal conjunto de normas internacionais de cibersegurança para
sistemas de automação e controle industrial (IACS) — já detalhada na perspectiva de energia/OT no
capítulo 03 deste relatório, reproduzida aqui de forma resumida por ser referência técnica
transversal aos dois setores. É o padrão de escolha para **OT/energia** porque, ao contrário do CSF
2.0 e da ISO/IEC 27001 (desenhados primariamente para TI corporativa), endereça explicitamente as
prioridades invertidas de ambientes industriais — onde **disponibilidade e segurança física**
(*safety*) superam confidencialidade como objetivo primário de controle.

A norma organiza-se em **quatro grupos de documentos**:

| Grupo                       | Exemplo de parte    | Escopo                                                        |
|:------------------------------|:-----------------------|:-----------------------------------------------------------------|
| **Fundamentos**                | 62443-1-1               | Terminologia, conceitos e modelos                                |
| **Políticas e Procedimentos**    | 62443-2-1, 62443-2-4     | Sistema de gestão de cibersegurança industrial                    |
| **Sistema**                    | 62443-3-2, 62443-3-3     | Avaliação de risco, segmentação em zonas, Níveis de Segurança (SL)  |
| **Componente**                 | 62443-4-1, 62443-4-2     | Requisitos para produtos de automação seguros                     |

A norma define **7 requisitos fundamentais (FR)** de segurança: controle de identificação e
autenticação (IAC), controle de uso (UC), integridade do sistema (SI), confidencialidade de dados
(DC), restrição de fluxo de dados (RDF), resposta oportuna a eventos (TRE) e disponibilidade de
recursos (RA). O modelo de **zonas e conduítes** constrói-se diretamente sobre a hierarquia de níveis
do **Modelo Purdue** (já ilustrado no diagrama do capítulo 03) — cada zona de segurança recebe um
**Nível de Segurança (SL) de 1 a 4**, do menor (proteção contra violação casual/coincidente) ao maior
(proteção contra atores sofisticados com recursos extensivos), e os "conduítes" são os canais de
comunicação controlados e monitorados entre zonas de SL distintos [5][6].

## Zero Trust (NIST SP 800-207)

A publicação **NIST Special Publication 800-207 (Zero Trust Architecture)** estabelece o princípio
central de **"nunca confiar, sempre verificar"** ("*never trust, always verify*"): toda solicitação de
acesso deve ser autenticada, autorizada e criptografada antes da concessão de acesso a qualquer
recurso, eliminando a confiança implícita historicamente concedida a usuários, serviços e
dispositivos apenas por estarem dentro de um perímetro de rede específico. O documento define **sete
pilares (*tenets*)**:

1. Todas as fontes de dados e serviços de computação são consideradas recursos.
2. Toda comunicação é protegida, independentemente da localização de rede.
3. O acesso a recursos individuais é concedido **por sessão**.
4. O acesso de **privilégio mínimo** é reforçado dinamicamente.
5. Diagnóstico e detecção contínuos de ameaças são essenciais.
6. O acesso é monitorado e registrado em todas as camadas.
7. As políticas de acesso são adaptativas, orientadas por dados e reforçadas por telemetria.

O NIST publicou posteriormente uma extensão, **SP 800-207A**, voltada especificamente a um modelo de
arquitetura Zero Trust para controle de acesso em aplicações *cloud-native* em ambientes multi-nuvem
[7][8].

### Aplicação diferenciada: TI (finanças) versus OT (energia)

No **setor financeiro**, os sete pilares mapeiam de forma relativamente direta para controles já
maduros em TI corporativa — autenticação multifator por sessão, microssegmentação de rede,
monitoramento contínuo de comportamento —, e reforçam diretamente a mitigação do vetor de **acesso
via credenciais comprometidas** já documentado no capítulo 02 (caso C&M Software/Pix): verificação
contínua e privilégio mínimo teriam limitado o raio de ação de uma credencial de fornecedor
comprometida.

No **setor energia**, a aplicação exige cautela adicional: a mesma "verificação contínua" (pilar 5)
que fortalece a postura defensiva em TI pode, se implementada sem ajuste, introduzir **latência ou
pontos de falha em sistemas de controle que precisam responder em milissegundos** — reautenticação
constante em uma HMI de sala de controle, por exemplo, pode competir com o requisito de
disponibilidade que é o objetivo primário de segurança em OT (FR "RA — disponibilidade de recursos"
da IEC 62443, acima). Por isso, Zero Trust em OT tende a ser aplicado de forma mais conservadora e
segmentada — sobretudo na fronteira TI↔OT (a DMZ industrial do Modelo Purdue) e no monitoramento de
acesso remoto de terceiros —, reforçando segmentação e verificação contínua **entre** domínios de
confiança distintos, sem necessariamente reautenticar cada operação dentro da zona de controle em
tempo real. Esse padrão de segmentação é o que teria limitado o movimento lateral já documentado nos
casos **BlackEnergy** (2015) e **Volt Typhoon/VOLTZITE** (pré-posicionamento de ~300 dias no caso
LELWD), ambos detalhados no capítulo 03 [7][8].

Não foi identificada, no escopo desta pesquisa, uma exigência regulatória explícita e nomeada de
"Zero Trust" ou "NIST SP 800-207" nas resoluções brasileiras (BCB, ANEEL) já citadas neste dossiê —
**[NÃO CONFIRMADO — nenhuma menção nominal a Zero Trust ou ao NIST SP 800-207 localizada nos textos
regulatórios brasileiros consultados em 2026-07-21]** [7].

## Defesa em profundidade e Zero Trust em camadas

A figura abaixo organiza os quatro frameworks acima em um modelo único de **defesa em profundidade**,
com o princípio Zero Trust permeando todas as camadas — da governança (topo) ao dado protegido
(núcleo) —, e sinaliza em âmbar as camadas onde o tratamento em ambientes **OT/ICS** exige cautela
adicional por conta da restrição de disponibilidade discutida acima.

![Diagrama de defesa em profundidade em camadas concêntricas, do núcleo de dados protegido em verde às camadas de governança, identidade, rede, endpoint e aplicação, com o princípio Zero Trust permeando todas as camadas e destaque âmbar para os pontos de atenção especial em OT/ICS](../assets/diagramas/07-camadas-defesa-zerotrust.svg)

*Figura 1 — Camadas de defesa em profundidade sob o princípio Zero Trust, com os quatro frameworks
deste capítulo posicionados por camada e os pontos de atenção OT/ICS destacados em âmbar.*

## Tabela — Ameaça → Controle → Framework

A tabela relaciona as principais ameaças documentadas nos capítulos 01 a 06 a controles concretos e
ao framework/função correspondente deste capítulo.

| Ameaça (capítulo de origem)                                             | Controle concreto                                                          | Framework / Função                                  |
|:----------------------------------------------------------------------------|:--------------------------------------------------------------------------------|:---------------------------------------------------------|
| *Ransomware* em TI corporativa (Colonial Pipeline, Eletrobras/Copel — cap. 03) | Backup imutável e testado, segmentação de rede, EDR/XDR em estações e servidores | NIST CSF 2.0 (*Protect*, *Recover*); ISO/IEC 27001 (controles tecnológicos 8.x) |
| *Ransomware*/malware em OT com potencial de impacto físico (BlackEnergy, Industroyer — cap. 03) | Segmentação em zonas e conduítes, DMZ industrial (Nível 3,5 Purdue), monitoramento OT dedicado | IEC 62443 (zonas/conduítes, SL 1–4); NIST CSF 2.0 (*Detect*)     |
| *Phishing*/engenharia social e *deepfake* (Arup, C&M Software — cap. 02/06)   | MFA resistente a *phishing*, verificação fora de banda para aprovações financeiras, treinamento contínuo | NIST CSF 2.0 (*Protect*); Zero Trust NIST SP 800-207 (pilares 3–4) |
| Fraude via credenciais/tomada de conta (fraude Pix, credential stuffing — cap. 02) | Privilégio mínimo, microssegmentação, monitoramento contínuo de sessão e comportamento | Zero Trust NIST SP 800-207 (pilares 3–6); ISO/IEC 27001 (controles tecnológicos) |
| Comprometimento de fornecedor/cadeia de suprimentos (C&M Software, SAExploration/Petrobras — cap. 02/03) | Gestão de risco de terceiros, avaliação de fornecedor antes da integração, SBOM/inventário de dependências | NIST CSF 2.0 (*Govern*, *Identify*); ISO/IEC 27001 (controles organizacionais de relação com fornecedores) |
| Pré-posicionamento silencioso de ator estatal em OT (Volt Typhoon/VOLTZITE — cap. 03) | Segmentação TI↔OT, verificação contínua na fronteira de zonas, *threat hunting* dedicado a OT | Zero Trust NIST SP 800-207 (aplicação cautelosa em OT); IEC 62443; NIST CSF 2.0 (*Detect*, *Respond*) |

## Fontes

[1] NIST. *NIST Releases Version 2.0 of Landmark Cybersecurity Framework*. Fevereiro de 2024.
https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework
(texto completo: NIST CSWP 29, https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)

[2] Arctic Wolf. *NIST CSF 2.0: Govern Function*.
https://arcticwolf.com/resources/blog/nist-csf-2-0-understanding-and-implementing-the-govern-function/

[3] HighTable. *ISO 27001 Annex A Controls: The Complete 2022 Reference List (93 Controls)*.
https://hightable.io/iso-27001-annex-a-controls-reference-guide/

[4] ISMS.online. *ISO 27001:2022 Annex A Explained & Simplified*.
https://www.isms.online/iso-27001/annex-a-2022/

[5] O Setor Elétrico. *IEC 62443: reforçando a segurança cibernética em infraestrutura crítica*.
https://www.osetoreletrico.com.br/iec-62443-reforcando-a-seguranca-cibernetica-em-infraestrutura-critica/

[6] ISA São Paulo Section. *Cibersegurança Industrial e a Norma ISA/IEC 62443: Essencial para
Engenheiros e Técnicos de Produção*.
https://isasp.org.br/ciberseguranca-industrial-e-a-norma-isa-iec-62443-essencial-para-engenheiros-e-tecnicos-de-producao/

[7] NIST/CSRC. *NIST Special Publication (SP) 800-207, Zero Trust Architecture* (texto oficial).
https://csrc.nist.gov/pubs/sp/800/207/final
(PDF: https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf; extensão SP 800-207A:
https://csrc.nist.gov/pubs/sp/800/207/a/final)

[8] Palo Alto Networks. *What Is NIST SP 800-207? Zero Trust Architecture Framework*.
https://www.paloaltonetworks.com/cyberpedia/what-is-nist-sp-800-207
