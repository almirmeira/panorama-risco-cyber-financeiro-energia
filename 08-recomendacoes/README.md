# 08 — Recomendações

> **Resumo Executivo**
> - **Financeiro, prioridade máxima:** antifraude no Pix e defesa da superfície de API do Open
>   Finance — hoje acima de **128–154 milhões de consentimentos ativos** e em expansão contínua —,
>   somada a gestão ativa de risco de terceiros depois do caso C&M Software (ao menos **R$ 400
>   milhões** desviados via um único fornecedor de infraestrutura do Pix) [1][2][3].
> - **Energia, prioridade máxima:** visibilidade e segmentação TI/OT. O *dwell time* médio de um
>   *ransomware* em ambiente OT caiu de **42 para 5 dias** — quase 8× mais rápido — nas organizações
>   com monitoramento OT dedicado; é o maior ganho de redução de risco por unidade de esforço
>   identificado neste dossiê [4][5].
> - **Quick win nº 1, para os dois setores:** autenticação multifator resistente a *phishing* e
>   privilégio mínimo por sessão (Zero Trust, NIST SP 800-207 [6][7]) fecham diretamente o vetor que
>   já causou os dois maiores incidentes de credencial/acesso documentados neste relatório — C&M
>   Software no financeiro [2][3] e o pré-posicionamento de ~300 dias do Volt Typhoon/VOLTZITE em uma
>   concessionária de Massachusetts, na energia [23][24].
> - A janela regulatória já está aberta e tem prazo: o setor financeiro tem até **março de 2026**
>   para se adequar às Resoluções CMN nº 5.274/2025 e BCB nº 538/2025; a ANEEL iniciou em 2025 sua
>   primeira fiscalização concreta da RN nº 964/2021 (ARCiber), quatro anos depois da norma entrar em
>   vigor — nenhum dos dois setores deve tratar a regulação como teto de maturidade, apenas como piso
>   [8][9][10].
> - Nenhuma recomendação deste capítulo é nova tecnicamente: todas mapeiam diretamente para os
>   quatro frameworks já detalhados no capítulo 07 (NIST CSF 2.0, ISO/IEC 27001:2022, IEC 62443,
>   Zero Trust). O que muda aqui é a ordem de prioridade e o horizonte de execução.
> - **Número-chave:** organizações de energia com visibilidade OT plena contêm um *ransomware* em
>   **5 dias**, contra **42 dias** de média setorial — a diferença mais acionável de todo o dossiê,
>   porque depende de instrumentação, não de mudança regulatória ou geopolítica [4][5].

## Como ler este capítulo

Os capítulos 01 a 07 documentaram ameaças, atores, comparativos, tendências e o repertório de
controles disponível. Este capítulo não introduz dado novo: ele traduz o que já foi estabelecido em
ações priorizadas, com horizonte de tempo, esforço estimado e o framework do capítulo 07 ao qual cada
recomendação se ancora. A audiência principal é de liderança executiva e board — por isso a leitura
recomendada é: primeiro o bloco por setor, depois os quick wins de 90 dias (que qualquer organização,
financeira ou de energia, deveria já ter em andamento), e por fim as perguntas de governança que um
conselho deve dirigir à liderança de segurança.

## Recomendações — Setor Financeiro

As quatro linhas de prioridade do setor financeiro seguem diretamente do capítulo 02 (ameaças) e do
capítulo 07 (frameworks): antifraude no Pix, defesa de API do Open Finance, resiliência a DDoS e
gestão de risco de terceiros.

| Recomendação                                                                 | Prioridade | Horizonte     | Esforço | Framework relacionado                                    |
|:--------------------------------------------------------------------------------|:-------------|:----------------|:----------|:--------------------------------------------------------------|
| Reforçar antifraude no Pix: biometria comportamental, MED e limites dinâmicos por perfil de risco [1][11] | Crítica       | 0–90 dias       | Médio      | NIST CSF 2.0 (*Protect*); Zero Trust (pilares 3–6)             |
| Gestão de risco de terceiros com avaliação contínua de fornecedores críticos do Pix/Open Finance, não apenas na contratação [2][3] | Crítica       | 0–90 dias       | Médio      | NIST CSF 2.0 (*Govern*, *Identify*); ISO/IEC 27001 (controles organizacionais 5.19–5.23) |
| Segurança de API do Open Finance: *rate limiting*, detecção de anomalia de consentimento, revogação automática de tokens suspeitos [1][12] | Alta          | 3–6 meses       | Alto       | ISO/IEC 27001 (controles tecnológicos, 8.x); Zero Trust (pilar 3, acesso por sessão) |
| Resiliência a DDoS: contrato de mitigação dedicado, testes de capacidade e plano de comunicação de crise durante indisponibilidade [13][14] | Alta          | 3–6 meses       | Médio      | NIST CSF 2.0 (*Protect*, *Respond*)                            |
| Verificação fora de banda para aprovação de transferências de alto valor, mitigando fraude por *deepfake* de executivo [6][15] | Alta          | 0–90 dias       | Baixo      | NIST CSF 2.0 (*Protect*); Zero Trust (pilar 4)                 |
| Adequação plena às Resoluções CMN nº 5.274/2025 e BCB nº 538/2025 antes do prazo de março de 2026, com gap analysis já concluído [8]        | Crítica       | 0–90 dias       | Alto       | NIST CSF 2.0 (*Govern*); regulação BCB                         |
| Inventário e priorização de migração PQC para dados financeiros de longa vida útil, alinhado ao roteiro do G7 CEG (meados dos anos 2030) [16] | Média         | 6–12 meses      | Médio      | NIST CSF 2.0 (*Identify*); PQC (FIPS 203/204/205)              |

## Recomendações — Setor Energia

Para energia, a prioridade inverte-se em relação ao financeiro: disponibilidade e segurança física
vêm antes de confidencialidade, e o ganho de maturidade mais evidente está na fronteira TI/OT — ponto
já detalhado no Modelo Purdue do capítulo 03 e na aplicação cautelosa de Zero Trust do capítulo 07.

| Recomendação                                                                 | Prioridade | Horizonte     | Esforço | Framework relacionado                                    |
|:--------------------------------------------------------------------------------|:-------------|:----------------|:----------|:--------------------------------------------------------------|
| Segmentação TI/OT com DMZ industrial (Nível 3,5 Purdue) e revisão de todo acesso remoto de terceiros [4][5][17] | Crítica       | 0–90 dias       | Alto       | IEC 62443 (zonas e conduítes); NIST CSF 2.0 (*Protect*)        |
| Visibilidade OT dedicada (monitoramento passivo, sem agente invasivo em PLC/RTU) para reduzir o *dwell time* de 42 para 5 dias [4][5] | Crítica       | 3–6 meses       | Alto       | IEC 62443; NIST CSF 2.0 (*Detect*)                             |
| Plano de resposta a incidentes específico para ICS, com playbook de isolamento seguro de OT sem interromper processo físico [4][5][18] | Crítica       | 3–6 meses       | Médio      | NIST CSF 2.0 (*Respond*, *Recover*); IEC 62443                 |
| Conformidade plena com a RN ANEEL nº 964/2021 (ARCiber) antes da próxima janela de fiscalização, com evidência documental pronta [9][10] | Alta          | 0–90 dias       | Médio      | NIST CSF 2.0 (*Govern*); regulação ANEEL                       |
| Avaliação formal de Nível de Segurança (SL) por zona crítica, priorizando SL mais alto para geração e transmissão [17][19] | Alta          | 6–12 meses      | Alto       | IEC 62443 (SL 1–4)                                             |
| Aplicação cautelosa de Zero Trust na fronteira TI↔OT (verificação contínua entre domínios, não reautenticação constante dentro da zona de controle) [6][7] | Alta          | 6–12 meses      | Alto       | Zero Trust (NIST SP 800-207, aplicação adaptada a OT)          |
| Planejamento de migração PQC para ativos de campo de longa vida útil (medidores inteligentes, IEDs de subestação) [16][20] | Média         | 12+ meses       | Alto       | PQC (FIPS 203/204/205); IEC 62443                              |

## Quick wins de 90 dias (transversais aos dois setores)

Estas seis ações têm em comum alto impacto relativo a baixo esforço de implementação e não exigem
grande investimento de capital — são, em geral, reconfiguração e disciplina de processo sobre
ferramentas já existentes na maioria das organizações de ambos os setores.

| Quick win                                                                    | Setor(es)       | Esforço | Impacto esperado                                                  |
|:--------------------------------------------------------------------------------|:------------------|:----------|:------------------------------------------------------------------------|
| MFA resistente a *phishing* (FIDO2/*passkeys*) em todo acesso privilegiado e remoto | Financeiro + Energia | Baixo   | Fecha o vetor de credencial/acesso por trás de C&M Software [2][3] e do pré-posicionamento VOLTZITE [23][24] |
| Inventário completo e atualizado de ativos (TI e, na energia, também OT/ICS)     | Financeiro + Energia | Médio   | Pré-condição para qualquer segmentação ou priorização de patch — sem inventário, não há *Identify* funcional [21] |
| Backups isolados (*air-gapped* ou imutáveis) e restauração testada de fato, não apenas configurada | Financeiro + Energia | Médio   | Mitigação direta do vetor dominante de *ransomware* nos dois setores (capítulos 02 e 03) [4][5] |
| Plano de resposta a incidentes exercitado em simulação (*tabletop*) nos últimos 12 meses | Financeiro + Energia | Baixo   | Reduz o tempo de decisão sob pressão; setor financeiro já opera sob prazo regulatório de notificação em horas [8] |
| Revisão e revogação de acessos de terceiros/fornecedores não utilizados nos últimos 90 dias | Financeiro + Energia | Baixo   | Reduz a superfície de exposição que caracterizou C&M Software e Petrobras/SAExploration [2][18] |
| Gap analysis formal contra o framework aplicável (BCB/CMN para financeiro, RN ANEEL 964 para energia) | Financeiro + Energia | Baixo   | Antecipa exigências de prazo já vigentes (março/2026 no financeiro; fiscalização ativa na energia) [8][9] |

## Perguntas que o board deve fazer

O CSF 2.0 elevou governança de risco cibernético a função nuclear própria (*Govern*), ao lado de
risco financeiro e reputacional [6]. As perguntas abaixo operacionalizam essa função para um
conselho de administração — de qualquer um dos dois setores — que precise exercer supervisão
efetiva sobre a liderança de segurança, e não apenas receber um relatório de conformidade.

1. Qual é o nosso *dwell time* médio hoje — tempo entre comprometimento inicial e detecção — e como
   ele se compara à referência setorial (42 dias em OT sem visibilidade dedicada, caindo para 5 dias
   com ela) [4][5]?
2. Quando testamos pela última vez a restauração completa de um backup crítico, não apenas sua
   existência — e quanto tempo levou?
3. Temos um inventário atualizado de todo fornecedor com acesso a sistemas críticos (Pix/Open
   Finance no financeiro; OT/ICS na energia), e sabemos qual seria o *blast radius* se um deles fosse
   comprometido, como ocorreu com C&M Software e com a contratada da Petrobras [2][18]?
4. Estamos dentro do prazo regulatório aplicável — março de 2026 para as Resoluções BCB/CMN no
   financeiro, exigências da RN ANEEL nº 964/2021 já sob fiscalização ativa na energia — e existe
   evidência documental pronta para auditoria, não apenas a intenção declarada [8][9]?
5. Qual parcela do nosso orçamento de segurança está alocada a detecção e resposta, versus apenas
   prevenção — e essa alocação reflete o custo real de detecção tardia (34% do custo total de uma
   violação no setor financeiro) [22]?
6. Já exercitamos, em simulação realista, nosso plano de resposta a um incidente que force decisão de
   isolar sistemas críticos (SPI/Pix no financeiro; um ativo OT na energia) sob pressão de tempo e
   com informação incompleta?
7. Temos clareza sobre qual autoridade interna decide, em uma crise real, entre continuidade
   operacional e contenção total — e essa pessoa está no comitê executivo, não apenas na área técnica?
8. Qual é a nossa exposição a fraude por *deepfake* de executivo em processos de aprovação financeira
   de alto valor, e existe verificação fora de banda obrigatória para esses casos [15]?
9. Se formos atingidos por *ransomware* hoje, pagaríamos o resgate — e essa decisão já foi debatida e
   documentada pelo board antes do incidente, ou seria tomada sob pressão no momento do ataque?
10. Nosso plano de migração para criptografia pós-quântica (PQC) já começou o inventário de dados e
    ativos de longa vida útil, dado que a "colheita" de dados cifrados hoje para decifração futura já
    está em curso, segundo o roteiro do G7 CEG [16]?

![Roadmap de implementação em quatro horizontes de tempo — 0–90 dias, 3–6 meses, 6–12 meses e 12+ meses — com trilhas paralelas para o setor financeiro (azul) e o setor de energia (âmbar), e uma faixa transversal em verde para iniciativas comuns aos dois setores](../assets/diagramas/08-roadmap.svg)

*Figura 1 — Roadmap de recomendações em quatro horizontes, com marcos específicos por setor e uma
faixa transversal de iniciativas comuns — síntese visual das tabelas acima.*

## Fontes

[1] TI Inside. *Open Finance: Brasil lidera ranking global com 128 milhões de consentimentos
ativos*. Janeiro de 2026.
https://tiinside.com.br/22/01/2026/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/

[2] Agência Brasil (EBC). *BC suspende três instituições do Pix após ataque cibernético*. Julho de
2025. https://agenciabrasil.ebc.com.br/economia/noticia/2025-07/bc-suspende-tres-instituicoes-do-pix-apos-ataque-cibernetico

[3] Finsiders Brasil. *BC suspende do Pix os participantes Transfeera, Nuoro Pay e Soffy
(atualização)*. Julho de 2025.
https://finsidersbrasil.com.br/reportagem-exclusiva-fintechs/bc-suspende-os-participantes-do-pix-transfeera-nuoro-pay-e-soffy/

[4] Dragos. *Dragos 2026 OT Report Shows Surge in Threat Groups and Ransomware*. Fevereiro de 2026.
https://www.dragos.com/resources/press-release/dragos-2026-year-in-review-new-ot-threats-ransomware

[5] Cybersecurity Magazine. *Dragos: Operational Tech Under Increasing Risk of Attack*. 2026.
https://cybermagazine.com/news/dragos-ot-ics-cybersecurity-report

[6] NIST. *NIST Releases Version 2.0 of Landmark Cybersecurity Framework*. Fevereiro de 2024.
https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework

[7] NIST/CSRC. *NIST Special Publication (SP) 800-207, Zero Trust Architecture* (texto oficial).
https://csrc.nist.gov/pubs/sp/800/207/final

[8] NDM Advogados. *O que muda para a segurança cibernética das instituições autorizadas até março
de 2026 com as Resoluções BCB 538/2025 e CMN 5.274/2025*. 2025.
https://ndmadvogados.com.br/artigo/seguranca-cibernetica-bcb-538-cmn-5274/

[9] ISC Brasil. *Aneel inicia fiscalização da segurança cibernética na redes de energia do país*.
2025. https://www.iscbrasil.com.br/pt-br/blog/seguranca-publica/aneel-inicia-fiscalizacao-da-seguranca-cibernetica-na-redes-de-e.html

[10] ANEEL. *Resolução normativa Aneel nº 964, de 14 de dezembro de 2021* (texto oficial).
https://www2.aneel.gov.br/cedoc/ren2021964.html

[11] Poder360 (citando Febraban). *Golpes causaram prejuízo de R$ 10,1 bi em 2024, diz Febraban*.
2025. https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/

[12] Convergência Digital. *Open Finance: Brasil lidera ranking global com 128 milhões de
consentimentos ativos*. Janeiro de 2026.
https://convergenciadigital.com.br/mercado/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/

[13] FS-ISAC / Akamai. *DDoS: Here to Stay*. Março de 2024.
https://www.fsisac.com/newsroom/pr-akamai-ddos-report-2024

[14] Cybersecurity Dive. *Financial services sees sharp increase in DDoS attacks as geopolitical
tensions rise*. 2024. https://www.cybersecuritydive.com/news/ddos-financial-services-fsisac-akamai/709623/

[15] CNN Business. *Arup revealed as victim of $25 million deepfake scam involving Hong Kong
employee*. Maio de 2024. https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk

[16] U.S. Department of the Treasury. *G7 CEG Quantum Roadmap*. Janeiro de 2026.
https://home.treasury.gov/system/files/136/G7-CEG-Quantum-Roadmap.pdf

[17] O Setor Elétrico. *IEC 62443: reforçando a segurança cibernética em infraestrutura crítica*.
https://www.osetoreletrico.com.br/iec-62443-reforcando-a-seguranca-cibernetica-em-infraestrutura-critica/

[18] Hackread. *Everest Ransomware Says It Breached Brazilian Energy Giant Petrobras*. Novembro de
2025. https://hackread.com/everest-ransomware-brazil-petrobras-breach/

[19] ISA São Paulo Section. *Cibersegurança Industrial e a Norma ISA/IEC 62443: Essencial para
Engenheiros e Técnicos de Produção*.
https://isasp.org.br/ciberseguranca-industrial-e-a-norma-isa-iec-62443-essencial-para-engenheiros-e-tecnicos-de-producao/

[20] NIST. *NIST Releases First 3 Finalized Post-Quantum Encryption Standards*. Agosto de 2024.
https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards

[21] Arctic Wolf. *NIST CSF 2.0: Govern Function*.
https://arcticwolf.com/resources/blog/nist-csf-2-0-understanding-and-implementing-the-govern-function/

[22] IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach

[23] CISA / NSA / FBI. *People's Republic of China State-Sponsored Cyber Actor Living off the Land to
Evade Detection* (Advisório conjunto AA24-038A). Fevereiro de 2024.
https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a

[24] SecurityWeek. *China's Volt Typhoon Hackers Dwelled in US Electric Grid for 300 Days*. 2026.
https://www.securityweek.com/chinas-volt-typhoon-hackers-dwelled-in-us-electric-grid-for-300-days/
