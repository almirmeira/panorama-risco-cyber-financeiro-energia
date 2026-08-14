# Dossiê de Pesquisa — Panorama de Risco Cyber (Financeiro × Energia)

> Documento de trabalho. Cada número-chave tem ≥2 fontes independentes. Fontes secundárias marcadas como tal.
> Pesquisa realizada em 2026-07-21. Onde uma fonte primária não pôde ser recuperada diretamente (bloqueio de
> acesso automatizado, PDF não extraível), o dado foi validado por ≥2 fontes secundárias que citam o relatório
> primário, e isso é registrado explicitamente.
>
> **Atualização 2026-08-01 (refresh quinzenal):** confirmadas como edições completas e citáveis (≥2 fontes
> independentes) quatro publicações que, em 2026-07-21, ainda não haviam sido incorporadas como fonte primária
> plena — IBM *Cost of a Data Breach Report 2026* (29/7/2026), Mandiant *M-Trends 2026* (mar/2026), CrowdStrike
> *2026 Global Threat Report* (24/2/2026) e Verizon *2026 DBIR* (19/5/2026). As entradas correspondentes desta
> edição de 2025 foram **mantidas** (não excluídas) como trilha de pesquisa; novas entradas datadas marcam
> explicitamente onde um valor mais atual está disponível. Nenhuma outra publicação relevante ao escopo
> (WEF, ENISA, Dragos, Kaspersky ICS CERT, FS-ISAC, Fortinet, Nozomi, ANEEL/ONS, BACEN/CMN) teve edição nova
> identificada nesta janela de 11 dias que atendesse à regra de duas fontes — ver seção de checagens ao final.

## Global

### Custo médio global de violação de dados

- **Dado:** custo médio global de uma violação de dados em 2025 = **USD 4,44 milhões**, queda de 9% em relação a
  2024 (USD 4,88 milhões) — primeira queda em cinco anos, atribuída em parte a detecção/contenção auxiliadas por
  IA.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach
  - Fonte 2 (secundária, cita a fonte 1 diretamente): CyberScoop. *Research shows data breach costs have reached
    an all-time high*. 2025. https://cyberscoop.com/ibm-cost-data-breach-2025/
  - Observações: o acesso direto ao ibm.com/reports/data-breach via fetch automatizado retornou HTTP 403; o
    número foi confirmado por múltiplas fontes secundárias que citam o relatório primário de forma consistente
    (CyberScoop, Bluefin, Northdoor, DataFence, Allcovered), todas convergindo em USD 4,44 milhões / -9%. Nos
    EUA especificamente, o custo médio **subiu** para USD 10,22 milhões (+9%), divergindo da tendência global —
    atribuído a multas regulatórias e detecção mais lenta.

### Custo médio de violação por setor (financeiro e energia)

- **Dado:** setor financeiro = **USD 5,56 milhões** (2º mais caro, atrás de saúde); setor de energia =
  **USD 4,83 milhões** (4º mais caro); saúde lidera com USD 7,42 milhões.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach
  - Fonte 2 (secundária): DataBreachCost.com. *Data Breach Cost by Industry (IBM 2025)*. 2025.
    https://databreachcost.com/by-industry
  - Observações: ambos os números (financeiro e energia) estão acima da média global de USD 4,44 milhões,
    consistente com o enquadramento desses setores como infraestrutura crítica altamente regulada. Não foi
    possível confirmar a ordem exata de todos os setores intermediários (industrial, tecnologia) além dos dois
    citados — **[NÃO CONFIRMADO — ranking completo inter-setorial não acessível em 2026-07-21]**.

### Tempo médio de identificação e contenção de violação (IBM)

- **Dado:** tempo médio para identificar e conter uma violação em 2025 = **241 dias**, o menor valor em nove
  anos.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach
  - Fonte 2 (secundária): CyberScoop. *Research shows data breach costs have reached an all-time high*. 2025.
    https://cyberscoop.com/ibm-cost-data-breach-2025/
  - Observações: **este é um indicador metodologicamente distinto** do "tempo de permanência" (dwell time) do
    Mandiant M-Trends (11 dias, ver abaixo). O IBM mede o ciclo completo identificação+contenção; o Mandiant mede
    o tempo entre comprometimento e detecção. Os dois números não devem ser comparados diretamente nem somados —
    são metodologias diferentes sobre fases diferentes do ciclo de vida do incidente.

### Papel da IA em violações de dados (custo)

- **Dado:** organizações que usam IA extensivamente em segurança reduziram o ciclo de vida da violação em 80
  dias e economizaram cerca de USD 1,9 milhão em média. Por outro lado, atacantes usaram IA em cerca de **16%
  das violações** (phishing 37%, deepfake 35%), e "shadow AI" (uso não governado de ferramentas de IA por
  colaboradores) esteve presente em 20% das violações, adicionando USD 670 mil ao custo médio.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach
  - Fonte 2 (secundária): Kiteworks. *How Shadow AI Costs Companies $670K Extra: IBM's 2025 Breach Report*. 2025.
    https://www.kiteworks.com/cybersecurity-risk-management/ibm-2025-data-breach-report-ai-risks/
  - Observações: 97% das organizações que sofreram incidente relacionado a IA relataram não ter controles de
    acesso adequados para IA; ~63% (Ponemon Institute, base de 600 organizações) não têm política de governança
    de IA.

---

### Atualização 2026-08-01 — IBM Cost of a Data Breach Report 2026 (nova edição)

- **Dado:** a edição 2026 do relatório da IBM (publicada em 29/7/2026, com base em 602 organizações
  estudadas globalmente, cobrindo violações ocorridas entre março de 2025 e fevereiro de 2026) reverteu a
  melhora registrada na edição 2025: o custo médio global de uma violação de dados **subiu 12% e atingiu
  USD 4,99 milhões**, o maior valor já registrado — encerrando a única queda anterior (2025, -9%) em cinco
  anos. O tempo médio de identificação e contenção também piorou, para **247 dias** (+6 dias frente aos
  241 dias de 2025) — primeira alta em cinco anos nessa métrica. Quanto à IA: **1 em cada 4 violações
  maliciosas** já envolve uso de IA pelo atacante (alta de 56% a/a), com custo médio de **USD 6 milhões**
  para essas violações (cerca de USD 1 milhão acima da média global); ataques habilitados por IA
  concentram-se desproporcionalmente em infraestrutura crítica (**62%** dos casos), com **financeiro e
  energia como os setores de maior concentração**. Organizações que usam IA/automação extensivamente em
  segurança seguem reduzindo o custo médio em cerca de **USD 2 milhões**.
  - Fonte 1: IBM Newsroom. *IBM Study: One in Four Malicious Breaches are AI-Enabled, Costing Companies $6
    Million on Average*. 29 de julho de 2026.
    https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average
  - Fonte 2 (secundária, cobertura independente com os mesmos números): HIPAA Journal. *Global Data Breach
    Cost Rises 12% to Almost $5 Million*. 2026. https://www.hipaajournal.com/2026-cost-data-breach-study-ibm/
    (ver também Infosecurity Magazine, *The Average Cost of a Data Breach Rises to $5 Million*, 2026,
    https://www.infosecurity-magazine.com/news/cost-of-a-data-breach-5m-ibm/, e ASIS International,
    *Threat Actors Embrace AI, Helping Push the Average Cost of a Data Breach to $6 Million*, 2026,
    https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2026/july/Average-Cost-Of-A-Data-Breach-Hits-Six-Million-Dollars/)
  - Observações: **este dado substitui, como referência mais atual, o valor de USD 4,44 milhões (-9%) da
    edição 2025 já registrado acima** — mantido no dossiê por preservar o histórico de pesquisa. Tentativas
    de acesso direto ao PDF/página oficial via fetch automatizado retornaram HTTP 403 em 2026-08-01, mesma
    limitação já registrada para a edição 2025; o número foi confirmado por múltiplas coberturas
    independentes e consistentes entre si (IBM Newsroom, HIPAA Journal, Infosecurity Magazine, ASIS
    International, Help Net Security, eeNews Europe), sem divergência relevante quanto aos valores centrais.

### Atualização 2026-08-01 — IBM Cost of a Data Breach Report 2026 — setor financeiro e energia

- **Dado:** na edição 2026, o custo médio de violação do **setor financeiro subiu para USD 6,3 milhões**
  (ante USD 5,56 milhões na edição 2025) e o do **setor de energia subiu para USD 5,2 milhões** (ante
  USD 4,83 milhões na edição 2025) — ambos acompanhando a alta global de 12%. Financeiro e energia estão
  entre os setores de maior concentração de ataques habilitados por IA (dentro do grupo mais amplo de
  infraestrutura crítica, responsável por 62% desses ataques, ver item acima).
  - Fonte 1: IBM Newsroom. *IBM Study: One in Four Malicious Breaches are AI-Enabled, Costing Companies $6
    Million on Average*. 29 de julho de 2026.
    https://newsroom.ibm.com/2026-07-29-ibm-study-one-in-four-malicious-breaches-are-ai-enabled,-costing-companies-6-million-on-average
  - Fonte 2 (secundária, cobertura independente com o mesmo detalhamento setorial): Global News. *Data
    breach costs mount as attacks target critical infrastructure: IBM*. 2026.
    https://globalnews.ca/news/11998290/ibm-data-breach-costs-canada/
  - Observações: **estes dados substituem, como referência mais atual, os valores de USD 5,56 milhões
    (financeiro) e USD 4,83 milhões (energia) da edição 2025**, já registrados nas seções Financeiro e
    Energia deste dossiê e mantidos ali por preservar o histórico de pesquisa. Não foi localizado, no
    escopo desta atualização, um detalhamento equivalente ao da edição 2025 sobre composição de custo
    (detecção/escalonamento, notificação etc.) especificamente para 2026 — **[NÃO CONFIRMADO — detalhamento
    de composição de custo por categoria para a edição 2026 não verificado em 2026-08-01; a composição
    percentual já registrada (34%/8%/24%/34% para o setor financeiro) permanece atribuída à edição 2025]**.

---

### Tempo de permanência do atacante (dwell time) — Mandiant M-Trends 2025

- **Dado:** tempo de permanência mediano global = **11 dias** (alta em relação a 10 dias em 2023). Variação por
  método de detecção: 26 dias quando notificado por terceiro externo; 10 dias quando descoberto internamente;
  5 dias quando o próprio adversário notifica a vítima (típico de ransomware).
  - Fonte 1: Google Cloud (Mandiant). *M-Trends 2025: Data, Insights, and Recommendations From the Frontlines*.
    2025. https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025/
  - Fonte 2 (secundária, cita e comenta a mesma edição): TaoSecurity. *Mandiant Global Median Dwell Time
    Deteriorates from 11 to 14 Days* [nota: este post discute a comparação entre M-Trends 2025 (11 dias) e
    M-Trends 2026 (14 dias), publicado em 2026]. https://taosecurity.blogspot.com/2026/03/mandiant-global-median-dwell-time.html
  - Observações: base analítica de mais de 450 mil horas de investigações da Mandiant Consulting, cobrindo
    atividade de janeiro a dezembro de 2024. **Divergência de tendência registrada:** o M-Trends 2026 (edição
    seguinte, fora do escopo direto desta pesquisa mas usada aqui como checagem de consistência) reporta piora
    para 14 dias — ou seja, a melhora observada entre 2023→2024 (10→11 dias, variação pequena) não se sustentou
    no ano seguinte. Isso não invalida o dado de 11 dias para 2024/M-Trends 2025, apenas indica que a série não é
    monotônica.

### Setores mais visados (Mandiant M-Trends 2025)

- **Dado:** **Financeiro é o setor mais visado globalmente, com 17,4% das intrusões investigadas**, seguido de
  Serviços Empresariais/Profissionais (11,1%), Alta Tecnologia (10,6%), Governo (9,5%) e Saúde (9,3%). Energia
  não aparece entre os 5 primeiros nesta métrica específica da Mandiant.
  - Fonte 1: Google Cloud (Mandiant). *M-Trends 2025*. 2025.
    https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025/
  - Fonte 2 (secundária, cobertura corroborante): SC Media. *Exploits still top entry point, says Mandiant
    report*. 2025. https://www.scworld.com/brief/exploits-still-top-entry-point-says-mandiant-report
  - Observações: **divergência entre relatórios sobre o setor mais visado** — Mandiant aponta Financeiro (17,4%)
    como #1 global; já o IBM X-Force (citado por múltiplas fontes secundárias) aponta Manufatura como o setor
    mais atacado pelo 4º ano consecutivo em sua base de resposta a incidentes. Isso reflete metodologias de coleta
    distintas (Mandiant = engajamentos de resposta a incidentes; IBM X-Force = base própria de IR); os dois
    números não são diretamente conciliáveis e ambos são registrados aqui.

### Vetor de acesso inicial (Mandiant M-Trends 2025)

- **Dado:** exploração de vulnerabilidades (exploits) foi o vetor de acesso inicial mais comum, em **33%** dos
  casos; credenciais roubadas em **16%** (segundo lugar, em ascensão, impulsionado por infostealers).
  - Fonte 1: Google Cloud (Mandiant). *M-Trends 2025*. 2025.
    https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2025/
  - Fonte 2 (secundária): SC Media. *Exploits still top entry point, says Mandiant report*. 2025.
    https://www.scworld.com/brief/exploits-still-top-entry-point-says-mandiant-report
  - Observações: contrasta com o Verizon DBIR 2025 (ver abaixo), que aponta credenciais roubadas (22%) à frente
    de vulnerabilidades exploradas (20%) como vetores de entrada — ordem invertida em relação à Mandiant. Ambos
    os relatórios concordam que os dois vetores estão próximos e dominam o cenário, mas divergem em qual lidera.

### Atualização 2026-08-01 — Mandiant M-Trends 2026 (edição completa, publicada em março de 2026)

- **Dado:** a edição 2026 do M-Trends (mais de 500 mil horas de investigações da Mandiant ao longo de
  2025) confirma a piora de tendência já sinalizada como nota em 2026-07-21: o tempo de permanência
  mediano global (*dwell time*) **subiu para 14 dias** (ante 11 dias na edição 2025). A composição da
  alta não é uniforme: a detecção **interna** na verdade melhorou (de 10 para 9 dias) e a taxa de
  detecção interna subiu de 43% para **52%** dos casos; já o *dwell time* de casos com **notificação
  externa** saltou de 11 para **25 dias**, puxado por campanhas de espionagem de longa duração e por
  operações de trabalhadores de TI norte-coreanos infiltrados. Casos de espionagem cibernética têm
  *dwell time* mediano de **122 dias** — o *backdoor* BRICKSTORM chegou a quase 400 dias em dispositivos
  de borda (*network appliances*). Quanto ao setor mais visado, houve uma troca de liderança: **Alta
  Tecnologia (17%) ultrapassou o setor financeiro (14,6%)**, que liderava havia dois anos consecutivos
  (2023–2024). Nos vetores de acesso inicial, exploração de vulnerabilidades segue na liderança pelo 6º
  ano consecutivo (**32%**), seguida por *vishing* (**11%**, em forte alta) e "comprometimento prévio"
  (**10%**, líder isolado quando o recorte é apenas operações de *ransomware*, com 30%); *phishing* por
  e-mail caiu para apenas **6%** (queda atribuída a controles automatizados mais maduros). Um novo
  indicador de velocidade: o tempo entre o acesso inicial obtido por um *Initial Access Broker/Partner*
  (IAP) e a entrega (*hand-off*) a um grupo secundário para exploração encolheu para **22 segundos** em
  2025, ante mais de 8 horas em 2022.
  - Fonte 1: Google Cloud (Mandiant). *M-Trends 2026: Data, Insights, and Strategies From the
    Frontlines*. Março de 2026. https://cloud.google.com/blog/topics/threat-intelligence/m-trends-2026
  - Fonte 2 (secundária, cobertura técnica independente que reproduz os mesmos números): SecurityWeek.
    *M-Trends 2026: Initial Access Handoff Shrinks From Hours to 22 Seconds*. 2026.
    https://www.securityweek.com/m-trends-2026-initial-access-handoff-shrinks-from-hours-to-22-seconds/
    (ver também Help Net Security, *Attackers are handing off access in 22 seconds, Mandiant finds*, 2026,
    https://www.helpnetsecurity.com/2026/03/24/mandiant-m-trends-2026-report/, e Industrial Cyber,
    *M-Trends 2026 reveals threat landscape shaped by faster, coordinated, and industrialized
    cyberattacks*, 2026, https://industrialcyber.co/reports/m-trends-2026-reveals-threat-landscape-shaped-by-faster-coordinated-and-industrialized-cyberattacks/)
  - Observações: **este dado substitui, como referência mais atual, os valores de 11 dias (dwell time) e
    17,4%/financeiro (setor mais visado) da edição 2025 já registrados acima**, mantidos no dossiê por
    preservar o histórico de pesquisa. Já havia uma nota de tendência sobre a piora do dwell time
    registrada em 2026-07-21 (via TaoSecurity); esta entrada a substitui como fonte primária plena, agora
    com acesso direto ao blog oficial do Google Cloud. Sem divergência relevante entre as duas fontes
    quanto aos números centrais.

---

### Tempo de propagação lateral (breakout time) — CrowdStrike Global Threat Report 2025

- **Dado:** tempo médio de "breakout" (do acesso inicial ao início do movimento lateral) caiu para **48 minutos**
  em 2024 (dado do relatório 2025, que cobre o ano de 2024), ante 62 minutos no ano anterior. O breakout mais
  rápido registrado foi de **51 segundos**.
  - Fonte 1: CrowdStrike. *2025 Global Threat Report*. 2025.
    https://go.crowdstrike.com/rs/281-OBQ-266/images/CrowdStrikeGlobalThreatReport2025.pdf
  - Fonte 2 (secundária): CyberScoop. *CrowdStrike says attackers are moving through networks in under 30
    minutes*. 2025. https://cyberscoop.com/crowdstrike-annual-global-threat-report-attack-breakout-time/
  - Observações: **este é um indicador distinto do "dwell time" da Mandiant** — o breakout time mede a
    velocidade de movimento lateral após o acesso inicial (minutos/segundos), não o tempo total até a detecção
    (dias). **Nota de tendência (fora do escopo direto 2025, mas relevante para contexto):** a mesma página da
    CyberScoop, ao ser recuperada em 2026-07-21, já refletia dados do CrowdStrike Global Threat Report 2026
    (breakout médio de 29 minutos, mais rápido registrado de 27 segundos) — sinal de que o conteúdo do artigo foi
    atualizado para a edição seguinte. Os números de 48 min / 51 s são os corretos para a edição 2025 (ano-base
    2024) e foram cross-checados contra o PDF oficial do relatório 2025 e contra múltiplas coberturas
    independentes (Morgan Lewis, Libertify) que citam os mesmos valores.

### Ataques sem malware (CrowdStrike)

- **Dado:** **79%** das detecções da CrowdStrike em 2024 foram "malware-free" (sem uso de malware, com técnicas
  hands-on-keyboard), ante 40% em 2019.
  - Fonte 1: CrowdStrike. *2025 Global Threat Report — Executive Summary*. 2025.
    https://www.crowdstrike.com/en-us/resources/reports/global-threat-report-executive-summary-2025/
  - Fonte 2 (secundária): Morgan Lewis. *Key Takeaways from the CrowdStrike Global Threat Report 2025*. 2025.
    https://www.morganlewis.com/blogs/sourcingatmorganlewis/2025/08/key-takeaways-from-the-crowdstrike-global-threat-report-2025
  - Observações: nenhuma divergência relevante entre fontes.

### Vishing (phishing por voz) — crescimento

- **Dado:** operações de vishing cresceram **442%** entre o 1º e o 2º semestre de 2024.
  - Fonte 1: CrowdStrike. *2025 Global Threat Report*. 2025.
    https://go.crowdstrike.com/rs/281-OBQ-266/images/CrowdStrikeGlobalThreatReport2025.pdf
  - Fonte 2 (secundária): CyberScoop. *CrowdStrike says attackers are moving through networks in under 30
    minutes*. 2025. https://cyberscoop.com/crowdstrike-annual-global-threat-report-attack-breakout-time/
  - Observações: sem divergência relevante.

### Atualização 2026-08-01 — CrowdStrike 2026 Global Threat Report (edição completa, publicada em 24/2/2026)

- **Dado:** a edição 2026 (dados de 2025) confirma e detalha a tendência já sinalizada como nota em
  2026-07-21: o tempo médio de *breakout* (propagação lateral) caiu para **29 minutos** (ante 48 minutos
  na edição 2025) — queda de cerca de 65% —, com o caso mais rápido registrado em **27 segundos**. As
  detecções "*malware-free*" (sem uso de malware, técnicas *hands-on-keyboard*) subiram para **82%** do
  total em 2025, ante **51% em 2020** — nota-se que a edição 2025 usava um comparativo de linha de base
  diferente (79% ante 40% em 2019); os dois comparativos não são diretamente conciliáveis porque cada
  edição da CrowdStrike escolhe seu próprio ano-base histórico de referência, mas ambos descrevem a mesma
  tendência estrutural de alta. Operações de adversários habilitados por IA cresceram **89%** ano a ano;
  **42%** das vulnerabilidades exploradas o foram **antes da divulgação pública** (exploração de
  *zero-day*); intrusões "*cloud-conscious*" (deliberadamente direcionadas a ambientes de nuvem)
  cresceram **37%** no total, com alta de **266%** especificamente em atores ligados a Estados-nação
  mirando ambientes de nuvem para coleta de inteligência.
  - Fonte 1: CrowdStrike. *2026 CrowdStrike Global Threat Report: AI Accelerates Adversaries and Reshapes
    the Attack Surface* (comunicado oficial). Fevereiro de 2026.
    https://ir.crowdstrike.com/news-releases/news-release-details/2026-crowdstrike-global-threat-report-ai-accelerates-adversaries/
    (ver também o blog técnico: https://www.crowdstrike.com/en-us/blog/crowdstrike-2026-global-threat-report-findings/)
  - Fonte 2 (secundária, cobertura técnica independente que reproduz os mesmos números): eSecurity
    Planet. *Crowdstrike 2026 Global Threat Report: Adversaries Use AI to Bypass Defenses*. 2026.
    https://www.esecurityplanet.com/threats/crowdstrike-2026-global-threat-report-adversaries-use-ai-to-bypass-defenses/
  - Observações: **este dado substitui, como referência mais atual, os valores de 48 minutos (breakout
    time) e 79% (malware-free) da edição 2025 já registrados acima**, mantidos no dossiê por preservar o
    histórico de pesquisa. A observação já registrada em 2026-07-21 (nota de que a cobertura da CyberScoop
    já refletia dados da edição 2026 mesmo antes desta pesquisa formalizar a atualização) está confirmada:
    os números de 29 min/27 s eram, de fato, corretos e definitivos para a edição 2026, agora citada como
    fonte primária plena. Sem divergência relevante entre as duas fontes quanto aos números centrais.

---

### Volume e composição de incidentes — Verizon DBIR 2025

- **Dado:** dataset com **22.052 incidentes de segurança** e **12.195 violações confirmadas** em 139 países.
  Ransomware presente em **44%** das violações confirmadas (ante 32% no relatório do ano anterior — alta relativa
  de ~37%). Pagamento mediano de resgate caiu para **USD 115 mil**; **64%** das vítimas se recusaram a pagar (uma
  fonte secundária cita 63%, ver observação).
  - Fonte 1: Verizon. *2025 Data Breach Investigations Report*. 2025.
    https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf
  - Fonte 2 (secundária, reproduz números do relatório oficial): Halcyon. *Verizon DBIR Shows Ransomware Involved
    in 44% of Data Breaches*. 2025. https://www.halcyon.ai/blog/verizon-dbir-shows-ransomware-involved-in-44-of-data-breaches
  - Observações: ransomware afetou **88%** das violações em pequenas e médias empresas (SMB), contra **39%** em
    grandes empresas — uma disparidade relevante para o recorte financeiro/energia, onde predominam grandes
    organizações.

### Vetores de acesso inicial — Verizon DBIR 2025

- **Dado:** credenciais roubadas (**22%**) e vulnerabilidades exploradas (**20%**) foram os principais vetores de
  acesso inicial; erro humano foi fator contribuinte em **60%** das violações; violações via terceiros
  ("third-party") saltaram para **30%** de todos os casos.
  - Fonte 1: Verizon. *2025 Data Breach Investigations Report — Executive Summary*. 2025.
    https://www.verizon.com/business/resources/reports/2025-dbir-executive-summary.pdf
  - Fonte 2 (secundária): ASIS International. *Verizon 2025 DBIR: Third-Party Involvement in Confirmed Security
    Breaches Doubled*. 2025. https://www.asisonline.org/security-management-magazine/latest-news/today-in-security/2025/april/verizon-dbir-2025/
  - Observações: ver divergência já registrada acima quanto à ordem exploits vs. credenciais roubadas
    (Verizon: credenciais > exploits; Mandiant: exploits > credenciais).

### Espionagem — Verizon DBIR 2025

- **Dado:** violações motivadas por espionagem cresceram **163%**, passando a representar entre **15% e 17%**
  dos incidentes (valor varia conforme a fonte secundária).
  - Fonte 1: Verizon. *2025 Data Breach Investigations Report*. 2025.
    https://www.verizon.com/business/resources/reports/2025-dbir-data-breach-investigations-report.pdf
  - Fonte 2 (secundária): Versa Networks. *Key Insights from Verizon 2025 Data Breach Report*. 2025.
    https://versa-networks.com/blog/2025-verizon-dbir-inside-cybersecurity-trends-from-12000-data-breaches/
  - Observações: **divergência explícita** — uma cobertura secundária cita 17% de incidentes ligados a
    espionagem, outra cita 15% "across sectors". Não foi possível acessar a tabela original do PDF (extração
    automatizada falhou por limite de tamanho/formato de imagem) para arbitrar qual número é o correto/oficial —
    **[NÃO CONFIRMADO — percentual exato de espionagem não verificado contra o PDF primário em 2026-07-21]**.
    Ambos os valores são registrados; recomenda-se tratar como "~15–17%" até validação adicional.

### Setor financeiro — Verizon DBIR 2025 (Finance Snapshot)

- **Dado:** setor financeiro e de seguros teve **3.336 incidentes** e **927 violações confirmadas** na base do
  DBIR 2025; **74%** das violações do setor associadas a Intrusão de Sistema, Engenharia Social e Ataques Básicos
  a Aplicações Web; **90%** com motivação financeira.
  - Fonte 1: Verizon. *2025 Data Breach Investigations Report — Finance Snapshot*. 2025.
    https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf
  - Fonte 2 (secundária): resumo consolidado de imprensa especializada citando o mesmo Finance Snapshot (múltiplas
    fontes agregadas em busca; PDF original não pôde ser extraído por completo via fetch automatizado).
  - Observações: **[PARCIALMENTE CONFIRMADO]** — os números quantitativos (3.336/927/74%/90%) vêm de uma única
    linha de evidência consolidada em resultados de busca; não foi possível fazer o fetch direto do PDF do
    Finance Snapshot para conferência linha a linha. Tratar com cautela até segunda fonte primária independente.

### Atualização 2026-08-01 — Verizon 2026 DBIR (nova edição completa, publicada em 19/5/2026)

- **Dado:** a edição 2026 do DBIR (incidentes de 1º de novembro de 2024 a 31 de outubro de 2025, em 145
  países) é a maior já publicada: mais de **31.000 incidentes** analisados e mais de **22.000 violações
  confirmadas**. A mudança mais relevante para este dossiê é uma **inversão que resolve a divergência já
  registrada acima entre Verizon e Mandiant**: a exploração de vulnerabilidades passou a ser o vetor de
  acesso inicial líder, em **31%** dos casos (ante 20% na edição anterior — alta de 55%), ultrapassando
  credenciais roubadas pela primeira vez em anos — ou seja, DBIR e M-Trends 2026 (ver atualização acima)
  agora **concordam** que exploração de vulnerabilidades lidera, encerrando a divergência de ordem
  registrada na pesquisa original. *Ransomware* subiu para **48%** de todas as violações (ante 44%);
  dentro do padrão "Intrusão de Sistema" (60% de todas as violações), *ransomware* aparece em 77% dos
  casos. Violações envolvendo terceiros saltaram para **48%** de todo o conjunto de dados (ante 30% na
  edição anterior). Quanto a pagamentos: **69%** das vítimas de *ransomware* não pagaram (ante 65%), e o
  pagamento mediano informado nesta edição foi de **USD 139.875** (ante USD 150 mil, segundo a comparação
  da própria edição 2026 — valor que diverge do "USD 115 mil" já registrado para a edição 2025 acima; ver
  observação). Atores internos apareceram em **12%** das violações (queda ante 18%).
  - Fonte 1: Verizon. *2026 Data Breach Investigations Report*. Maio de 2026.
    https://www.verizon.com/business/resources/reports/2026-dbir-data-breach-investigations-report.pdf
    (ver também o comunicado oficial: https://www.verizon.com/about/news/breach-industry-wide-dbir-finds)
  - Fonte 2 (secundária, cobertura técnica independente que reproduz os mesmos números centrais):
    SecurityWeek. *Verizon DBIR 2026: Vulnerability Exploitation Overtakes Credential Theft as Top Breach
    Vector*. 2026. https://www.securityweek.com/verizon-dbir-2026-vulnerability-exploitation-overtakes-credential-theft-as-top-breach-vector/
    (ver também Help Net Security, *Verizon DBIR: Vulnerability exploitation is the dominant initial
    access vector*, 2026, https://www.helpnetsecurity.com/2026/05/20/verizon-2026-dbir-findings/, e
    Industrial Cyber, *Verizon DBIR finds vulnerability exploitation overtakes stolen credentials as top
    breach entry point for critical infrastructure*, 2026, https://industrialcyber.co/reports/verizon-dbir-finds-vulnerability-exploitation-overtakes-stolen-credentials-as-top-breach-entry-point-for-critical-infrastructure/)
  - Observações: **este dado substitui, como referência mais atual, os valores de 22.052/12.195
    incidentes/violações, 44% de ransomware, 22%/20% de vetores de acesso (credenciais>exploits) e 30% de
    terceiros da edição 2025 já registrados acima**, mantidos no dossiê por preservar o histórico de
    pesquisa. **Divergência não resolvida e explicitamente registrada:** o valor de pagamento mediano de
    resgate desta edição (USD 139.875, comparado pela própria Verizon a USD 150 mil no ano anterior) não
    bate com o valor de USD 115 mil já registrado neste dossiê para a edição 2025 (fonte: Halcyon, citando
    a mesma DBIR 2025) — **[NÃO CONFIRMADO — não foi possível arbitrar em 2026-08-01 se a diferença reflete
    uma reformulação metodológica da Verizon entre edições (recorte de dataset, população de vítimas) ou um
    erro de transcrição em uma das duas coberturas; os dois valores são registrados lado a lado, sem
    escolher um "vencedor"]**. Não foi possível, no escopo desta atualização, obter o *snapshot* setorial
    específico "Finance and Insurance" da edição 2026 com números próprios e confirmados por 2 fontes — o
    detalhamento por setor (financeiro) da edição 2025 permanece como referência mais recente confirmada
    para esse recorte. Um *snapshot* específico de "*utilities*" (638 incidentes; 597 violações
    confirmadas; 94% Intrusão de Sistema + Engenharia Social + Ataques Web; 97% atores externos; 71% de
    motivação por espionagem) foi localizado via uma única linha de evidência (Industrial Cyber) sem
    segunda fonte independente que reproduza os mesmos números exatos — **[NÃO CONFIRMADO — snapshot de
    utilities/energia da DBIR 2026 não atende à regra de duas fontes em 2026-08-01; não incorporado aos
    capítulos de conteúdo]**.

---

### Critérios de setor mais atacado (Microsoft Digital Defense Report 2025)

- **Dado:** motivação financeira (extorsão + ransomware + roubo de dados monetizável) está por trás de mais da
  metade dos ataques com motivação conhecida; espionagem pura é bem menor. Números específicos variam conforme a
  fonte secundária consultada (ver divergência abaixo).
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): Microsoft On the Issues. *Extortion and ransomware drive over half of cyberattacks*.
    2025. https://blogs.microsoft.com/on-the-issues/2025/10/16/mddr-2025/
  - Observações: **divergência registrada entre duas leituras do mesmo relatório.** Uma cobertura resume "mais de
    52% dos ataques com motivação conhecida são movidos por extorsão e ransomware, espionagem é apenas 4%". Outra
    cobertura, decompondo as mesmas categorias, cita: roubo de dados 37%, componente de extorsão 33%,
    ransomware/atividade destrutiva 19%, espionagem pura 4%, e "ao menos 52% dos incidentes tiveram motivação
    financeira" (categoria agregada, não soma direta das anteriores por haver sobreposição entre categorias).
    Ou seja, o "52%" é um agregado de motivação financeira geral, não apenas extorsão+ransomware somados — a
    manchete de imprensa simplificou essa distinção. Registra-se aqui a categoria agregada correta (**52%
    motivação financeira geral**) com a ressalva de que manchetes podem citá-la como "extorsão e ransomware".

### Phishing e engenharia social como vetor — Microsoft Digital Defense Report 2025

- **Dado:** **28%** das violações começam por phishing/engenharia social; **18%** exploram serviços
  públicos não corrigidos (patch); **12%** visam serviços de acesso remoto. Em **80%** dos incidentes o objetivo
  do atacante era roubo de dados.
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): notícia agregadora citando os mesmos percentuais do MDDR 2025 (cobertura de imprensa
    especializada, consolidada em busca).
  - Observações: nota-se que o percentual de "80% dos incidentes visam roubo de dados" (uma leitura) parece
    tensionar com "37% roubo de dados" (outra leitura, ver item acima) — sugerindo que se trata de perguntas
    diferentes (objetivo declarado do atacante vs. categoria de ataque classificada). **[NÃO CONFIRMADO —
    definição exata de cada métrica não verificável sem acesso ao PDF completo do MDDR 2025, que retornou HTTP
    403 em tentativa de fetch direto em 2026-07-21]**.

### IA ofensiva — phishing gerado por IA (Microsoft)

- **Dado:** campanhas de phishing com apoio de IA atingiram taxa de clique de **54%**, mais de 4x superior ao
  phishing tradicional.
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): cobertura agregada de imprensa especializada (Innofactor, CyberSecurityStats.com)
    citando o mesmo dado do MDDR 2025.
  - Observações: alinhado qualitativamente com o dado do ENISA (abaixo) de que phishing com apoio de IA já
    representava mais de 80% da engenharia social observada globalmente no início de 2025 — ambos apontam a
    mesma tendência (IA elevando eficácia/escala do phishing), mas medem coisas diferentes (taxa de clique vs.
    proporção de campanhas), portanto não são o mesmo número e não devem ser somados/comparados diretamente.

### Ataques baseados em identidade — Microsoft Digital Defense Report 2025

- **Dado:** ataques baseados em identidade cresceram **32%** no 1º semestre de 2025; mais de **97%** desses são
  spray de senha ou força bruta simples; MFA resistente a phishing bloqueia **99%** desses ataques.
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): Innofactor. *Five key takeaways from the Microsoft Digital Defense Report 2025*. 2025.
    https://blog.innofactor.com/en/platforms/five-key-takeaways-from-the-microsoft-digital-defense-report-2025
  - Observações: sem divergência relevante entre fontes.

### Escala de telemetria da Microsoft

- **Dado:** Microsoft processa mais de **100 trilhões de sinais diários**, bloqueia cerca de **4,5 milhões** de
  novas tentativas de malware, analisa **38 milhões** de detecções de risco de identidade e varre **5 bilhões**
  de e-mails por dia contra malware/phishing.
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): Libertify. *Microsoft Digital Defense Report 2025: Key Cybersecurity Threats and
    Trends*. 2025. https://www.libertify.com/interactive-library/microsoft-digital-defense-report-2025-cybersecurity-threats/
  - Observações: números de escala operacional própria da Microsoft, não comparáveis a outros relatórios (não
    representam volume de ataques no mercado, mas telemetria interna da empresa).

### Ator estatal e infraestrutura crítica — Microsoft Digital Defense Report 2025

- **Dado:** atores estatais (China, Irã, Rússia, Coreia do Norte) intensificaram operações contra infraestrutura
  crítica e setores específicos em 2025, com adoção crescente de IA para operações de influência automatizadas e
  em escala. Ucrânia aparece como o 5º país mais visado globalmente (segundo uma cobertura).
  - Fonte 1: Microsoft. *Microsoft Digital Defense Report 2025*. 2025.
    https://www.microsoft.com/en-us/corporate-responsibility/cybersecurity/microsoft-digital-defense-report-2025/
  - Fonte 2 (secundária): Industrial Cyber. *Microsoft 2025 digital defense report flags rising AI-driven
    threats, forces rethink of traditional defenses*. 2025.
    https://industrialcyber.co/reports/microsoft-2025-digital-defense-report-flags-rising-ai-driven-threats-forces-rethink-of-traditional-defenses/
  - Observações: descrição qualitativa consistente entre fontes; não há percentual único e quantificável de
    "ataques a infraestrutura crítica" atribuível a este relatório especificamente — **[NÃO CONFIRMADO — não há
    percentual agregado único de ataques a infraestrutura crítica no MDDR 2025 que tenha sido possível verificar
    em 2026-07-21]**.

---

### Cenário europeu / infraestrutura crítica — ENISA Threat Landscape 2025

- **Dado:** **4.875 incidentes** analisados no período de 1º de julho de 2024 a 30 de junho de 2025. Setor mais
  visado na UE: administração pública (**38,2%**), seguido de transporte (7,5%), infraestrutura e serviços
  digitais (4,8%), **finanças (4,5%)** e manufatura (2,9%). **53,7%** dos incidentes envolveram entidades
  essenciais conforme definição da Diretiva NIS2.
  - Fonte 1: ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
    https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - Fonte 2 (secundária): Industrial Cyber. *ENISA 2025 Threat Landscape report highlights EU faces escalating
    hacktivist attacks and state-aligned cyber threats*. 2025.
    https://industrialcyber.co/reports/enisa-2025-threat-landscape-report-highlights-eu-faces-escalating-hacktivist-attacks-and-state-aligned-cyber-threats/
  - Observações: energia **não aparece nos 5 setores mais visados por volume de incidentes** na metodologia da
    ENISA (dominada por ataques DDoS de hacktivistas contra administração pública) — isso contrasta com a
    percepção de energia como alvo prioritário em outras fontes (ex.: setor de energia com alta de 80% em
    ransomware ano a ano, ver abaixo). A explicação provável é que a ENISA mede *volume de incidentes
    registrados* (dominado por DDoS de baixo impacto), enquanto outras fontes medem *severidade/tipo de ataque*
    (ransomware, ICS). Ambas as leituras são registradas por serem complementares, não contraditórias apenas
    quando a métrica de cada uma é considerada.

### Ataques DDoS — ENISA Threat Landscape 2025

- **Dado:** ataques DDoS foram o tipo de incidente dominante, respondendo por **77%** dos incidentes reportados
  (majoritariamente por hacktivistas), mas apenas **2%** desses ataques resultaram em disrupção real de serviço.
  - Fonte 1: ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
    https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - Fonte 2 (secundária): CyberHubs. *ENISA releases 2025 Threat Landscape report on Europe's cybersecurity
    challenges*. 2025. https://cyberhubs.eu/enisa-releases-2025-threat-landscape-report-on-europes-cybersecurity-challenges/
  - Observações: sem divergência relevante entre fontes.

### Ameaças a tecnologia operacional (OT) — ENISA Threat Landscape 2025

- **Dado:** ameaças a tecnologia operacional (OT) já representam **18,2%** de todas as categorias de ameaça
  identificadas pela ENISA, sinalizando deslocamento do foco de ataque para sistemas industriais/críticos.
  - Fonte 1: ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
    https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - Fonte 2 (secundária): DenExus. *ENISA Threat Landscape 2025: OT Security Risks Every CISO Must Know*. 2025.
    https://www.denexus.io/resources/enisa-threat-landscape-2025-ot-attacks-industrial-cybersecurity-crisis
  - Observações: relevante diretamente para o setor de energia (predominância de OT/ICS).

### Vulnerabilidades — ENISA Threat Landscape 2025

- **Dado:** **42.595 novas vulnerabilidades** divulgadas no período coberto (alta de 27%), com vulnerabilidades
  críticas sendo armadas (weaponized) em poucos dias após divulgação.
  - Fonte 1: ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
    https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - Fonte 2 (secundária): Libertify. *ENISA Threat Landscape 2025 Cybersecurity Analysis*. 2025.
    https://www.libertify.com/interactive-library/enisa-threat-landscape-2025-cybersecurity-analysis/
  - Observações: sem divergência relevante. Tentativa de fetch direto do PDF do relatório (booklet) retornou
    apenas metadados técnicos do arquivo, não o texto — número confirmado via cobertura secundária consistente
    em vez do corpo do PDF diretamente.

### IA em engenharia social — ENISA Threat Landscape 2025

- **Dado:** no início de 2025, campanhas de phishing com apoio de IA já representavam mais de **80%** da
  atividade de engenharia social observada globalmente.
  - Fonte 1: ENISA. *ENISA Threat Landscape 2025*. Outubro de 2025.
    https://www.enisa.europa.eu/publications/enisa-threat-landscape-2025
  - Fonte 2 (secundária): agregação de cobertura de imprensa especializada citando o mesmo dado do relatório
    ENISA (consolidada em busca).
  - Observações: ver nota de comparação (não-soma) com o dado de taxa de clique de phishing por IA da Microsoft,
    acima.

---

### Ataques a setores críticos (visão consolidada, múltiplas fontes 2025)

- **Dado:** cerca de **70%** de todos os incidentes de 2025 envolveram organizações em setores críticos (energia,
  manufatura, finanças, transporte, saúde). Especificamente sobre ransomware: **4.701 incidentes de ransomware**
  em 2025, dos quais **2.332 (50%)** miraram setores críticos (manufatura, saúde, energia, transporte,
  financeiro). Manufatura foi o setor mais atacado globalmente pelo 4º ano consecutivo (dado de resposta a
  incidentes do IBM X-Force); ataques de ransomware no setor de energia e utilities subiram **80%** ano a ano.
  - Fonte 1 (secundária, consolidação de imprensa especializada): Industrial Cyber. *Half of 2025 ransomware
    attacks hit critical sectors as manufacturing, healthcare, and energy top global targets*. 2025.
    https://industrialcyber.co/reports/half-of-2025-ransomware-attacks-hit-critical-sectors-as-manufacturing-healthcare-and-energy-top-global-targets/
  - Fonte 2 (secundária): Security Boulevard. *Top Sectors Under Cyberattack in 2025*. 2025.
    https://securityboulevard.com/2025/12/top-sectors-under-cyberattack-in-2025/
  - Observações: **estes números vêm de agregações de imprensa especializada, não de acesso direto ao relatório
    primário original que os gerou** (provavelmente uma consolidação de dados de tracker de ransomware de
    terceiros, tipo NCC Group/Recorded Future/similar, não identificado com precisão nas duas fontes). Tratar
    como indicativo de ordem de grandeza e tendência (setores críticos = grande parcela do volume de ataques),
    não como número oficial de um único relatório primário nomeado no escopo desta pesquisa. **[PARCIALMENTE
    CONFIRMADO — fonte primária exata do "70%" e do "4.701 incidentes" não identificada com precisão em
    2026-07-21]**.

---

### WEF Global Cybersecurity Outlook 2026 — IA como principal driver de mudança

- **Dado:** **94%** dos líderes citam a IA como o principal fator de mudança em cibersegurança para 2026; **87%**
  apontam vulnerabilidades relacionadas a IA como o risco cibernético de crescimento mais rápido ao longo de
  2025. A proporção de organizações que avaliam a segurança de suas próprias ferramentas de IA quase dobrou, de
  37% (2025) para 64% (2026).
  - Fonte 1: World Economic Forum. *Global Cybersecurity Outlook 2026*. Janeiro de 2026.
    https://reports.weforum.org/docs/WEF_Global_Cybersecurity_Outlook_2026.pdf (ver também versão navegável:
    https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/executive-summary-6efae97d74/)
  - Fonte 2 (secundária, corrobora os mesmos percentuais): Fortinet. *World Economic Forum Global Cybersecurity
    Outlook 2026: Key Takeaways for CISOs*. 2026.
    https://www.fortinet.com/blog/ciso-collective/world-economic-forum-global-cybersecurity-outlook-2026-key-takeaways-for-cisos
  - Observações: relatório baseado em 804 respondentes qualificados em 92 países, incluindo 316 CISOs, 105 CEOs e
    123 outros executivos C-level.

### WEF Global Cybersecurity Outlook 2026 — fraude habilitada por ciber e geopolítica

- **Dado:** **73%** dos respondentes relataram terem sido pessoalmente afetados (ou alguém em sua rede) por
  fraude ciber-habilitada ao longo de 2025 — CEOs classificam essa fraude como sua principal preocupação, à
  frente do ransomware. Quanto à geopolítica: **64–65%** das organizações (a fonte 1 cita 64%, a fonte 2 cita
  65%) incorporam ataques geopoliticamente motivados em sua estratégia de mitigação de risco; **91%** das
  maiores organizações mudaram sua estratégia de cibersegurança em razão da volatilidade geopolítica.
  - Fonte 1: World Economic Forum. *Global Cybersecurity Outlook 2026*. Janeiro de 2026.
    https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/executive-summary-6efae97d74/
  - Fonte 2 (secundária): Fortinet. *World Economic Forum Global Cybersecurity Outlook 2026: Key Takeaways for
    CISOs*. 2026. https://www.fortinet.com/blog/ciso-collective/world-economic-forum-global-cybersecurity-outlook-2026-key-takeaways-for-cisos
  - Observações: **divergência leve registrada** — 64% vs. 65% para a métrica de "organizações que consideram
    geopolítica no risco cibernético", provavelmente arredondamento entre coberturas distintas do mesmo dado
    original; a diferença é pequena e não afeta a leitura qualitativa (maioria clara das organizações incorpora
    geopolítica no risco).

### WEF Global Cybersecurity Outlook 2026 — confiança nacional e desigualdade cibernética

- **Dado:** **31%** dos respondentes relatam baixa confiança na capacidade de seu país de responder a um
  incidente cibernético de grande escala, ante 26% no ano anterior. Quanto à insuficiência de resiliência: uma
  leitura cita "23% do setor público" como insuficiente; outra leitura (mesma fonte primária, artigo diferente)
  cita "23% do setor privado e 11% do setor público" como insuficientes — **inversão possível entre
  público/privado nas coberturas secundárias**.
  - Fonte 1: World Economic Forum. *Global Cybersecurity Outlook 2026*. Janeiro de 2026.
    https://www.weforum.org/publications/global-cybersecurity-outlook-2026/in-full/executive-summary-6efae97d74/
  - Fonte 2 (secundária): Fortinet. *World Economic Forum Global Cybersecurity Outlook 2026: Key Takeaways for
    CISOs*. 2026. https://www.fortinet.com/blog/ciso-collective/world-economic-forum-global-cybersecurity-outlook-2026-key-takeaways-for-cisos
  - Observações: **divergência explícita não resolvida** — a primeira busca (síntese de múltiplas fontes,
    incluindo ComplianceRT e Kiteworks) atribuiu "23% insuficiente" ao setor público; a segunda busca (fetch
    direto do artigo da Fortinet) atribuiu "23% insuficiente" ao setor privado e apenas 11% ao setor público.
    **[NÃO CONFIRMADO — qual setor (público ou privado) tem 23% de resiliência insuficiente não pôde ser
    arbitrado com certeza em 2026-07-21; recomenda-se checagem manual contra o PDF oficial antes de uso em
    capítulo final]**. O percentual de baixa confiança nacional (31%, alta de 26%) não apresentou divergência e
    é considerado confiável.

---

### WEF Global Risks Report 2026 — ranking da insegurança cibernética

- **Dado:** "insegurança cibernética" (cyber insecurity) aparece pela primeira vez classificada como risco global
  de destaque em múltiplos horizontes temporais do relatório. No horizonte de curto prazo (2 anos / até 2028),
  ocupa a **posição #6**, logo abaixo de eventos climáticos extremos (#4) e desinformação/má informação (#5).
  Não aparece no top 5 do horizonte atual (2026) nem no top 5 do horizonte de longo prazo (10 anos / até 2036),
  mas o relatório a lista entre os "cinco riscos com poder de permanência" que figuram no top 10 em todos os
  horizontes.
  - Fonte 1: World Economic Forum. *The Global Risks Report 2026: 21st edition*. Janeiro de 2026.
    https://reports.weforum.org/docs/WEF_Global_Risks_Report_2026.pdf (ver também:
    https://www.weforum.org/publications/global-risks-report-2026/in-full/global-risks-report-2026-key-findings/)
  - Fonte 2 (secundária, corrobora a posição #6 no horizonte de 2 anos): North Carolina State University — ERM
    Initiative. *Executive Takeaways from the World Economic Forum's Global Risks Report 2026*. 2026.
    https://erm.ncsu.edu/resource-center/executive-takeaways-from-the-world-economic-forums-global-risks-report-2026/
  - Observações: uma terceira fonte secundária (4C Strategies) menciona "riscos cibernéticos permanecem perto do
    topo da lista novamente em 2026" mas **não fornece o número exato de ranking**, o que impediu usá-la como
    segunda confirmação numérica independente — por isso a fonte 2 (ERM/NCSU) foi usada como confirmação direta
    do número #6. Baseado em mais de 1.300 especialistas globais. Ranking #1 do horizonte de 2 anos é
    "confronto geoeconômico"; #2 é "conflito armado entre estados"; #3 é "polarização social".

### WEF Global Risks Report 2026 — riscos adjacentes (IA adversa, quântica)

- **Dado:** o risco cibernético em 2026 é descrito como acelerado por avanços em IA, pela ameaça iminente da
  computação quântica, e pela crescente interconectividade das cadeias de suprimento. "Resultados adversos de
  tecnologias de IA" aparece como risco de longo prazo (10 anos), citado na 5ª posição segundo uma fonte.
  - Fonte 1: World Economic Forum. *The Global Risks Report 2026: 21st edition*. Janeiro de 2026.
    https://reports.weforum.org/docs/WEF_Global_Risks_Report_2026.pdf
  - Fonte 2 (secundária): North Carolina State University — ERM Initiative. *Executive Takeaways from the World
    Economic Forum's Global Risks Report 2026*. 2026.
    https://erm.ncsu.edu/resource-center/executive-takeaways-from-the-world-economic-forums-global-risks-report-2026/
  - Observações: sem divergência relevante quanto à narrativa qualitativa (IA + quântica + cadeia de suprimentos
    como amplificadores do risco cibernético).

---

## Tabela-resumo — números-chave e status de confirmação

| Métrica | Valor | Relatório primário | Status |
| :-- | :-- | :-- | :-- |
| Custo médio global de violação (2025) | USD 4,44 milhões (-9% a/a) | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Custo médio global de violação (2026, atualização 2026-08-01) | USD 4,99 milhões (+12% a/a, recorde) | IBM Cost of a Data Breach 2026 | Confirmado (2 fontes) |
| Custo médio — setor financeiro | USD 5,56 milhões | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Custo médio — setor financeiro (2026, atualização 2026-08-01) | USD 6,3 milhões | IBM Cost of a Data Breach 2026 | Confirmado (2 fontes) |
| Custo médio — setor energia | USD 4,83 milhões | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Custo médio — setor energia (2026, atualização 2026-08-01) | USD 5,2 milhões | IBM Cost of a Data Breach 2026 | Confirmado (2 fontes) |
| Tempo médio identificação+contenção | 241 dias | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); métrica distinta de dwell time; **superado pela edição 2026** |
| Tempo médio identificação+contenção (2026, atualização 2026-08-01) | 247 dias (1ª alta em 5 anos) | IBM Cost of a Data Breach 2026 | Confirmado (2 fontes) |
| Dwell time mediano global | 11 dias (10→11 dias) | Mandiant M-Trends 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Dwell time mediano global (2026, atualização 2026-08-01) | 14 dias | Mandiant M-Trends 2026 | Confirmado (2 fontes) |
| Setor mais visado (intrusões) | Financeiro, 17,4% | Mandiant M-Trends 2025 | Confirmado (2 fontes); diverge do IBM X-Force (Manufatura); **superado pela edição 2026** |
| Setor mais visado (intrusões, 2026, atualização 2026-08-01) | Alta Tecnologia, 17% (financeiro caiu p/ 2º, 14,6%) | Mandiant M-Trends 2026 | Confirmado (2 fontes) |
| Breakout time médio (lateral) | 48 min (62→48 min) | CrowdStrike Global Threat Report 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Breakout time médio (lateral, 2026, atualização 2026-08-01) | 29 min (mais rápido: 27 s) | CrowdStrike Global Threat Report 2026 | Confirmado (2 fontes) |
| Detecções malware-free | 79% | CrowdStrike Global Threat Report 2025 | Confirmado (2 fontes); **superado pela edição 2026** |
| Detecções malware-free (2026, atualização 2026-08-01) | 82% (vs. 51% em 2020) | CrowdStrike Global Threat Report 2026 | Confirmado (2 fontes) |
| Ransomware em violações confirmadas | 44% (32%→44%) | Verizon DBIR 2025 | Confirmado (2 fontes); **superado pela edição 2026, ver linha abaixo** |
| Ransomware em violações confirmadas (2026, atualização 2026-08-01) | 48% (44%→48%) | Verizon DBIR 2026 | Confirmado (2 fontes) |
| Ransomware em violações SMB vs. grandes empresas | 88% vs. 39% | Verizon DBIR 2025 | Confirmado (2 fontes) |
| Vetores de acesso inicial | Credenciais 22% / Exploits 20% | Verizon DBIR 2025 | Confirmado (2 fontes); ordem diverge da Mandiant; **divergência resolvida na edição 2026, ver linha abaixo** |
| Vetores de acesso inicial (2026, atualização 2026-08-01) | Exploits 31% (líder; 20%→31%), à frente de credenciais | Verizon DBIR 2026 | Confirmado (2 fontes); **agora convergente com Mandiant M-Trends 2026 (exploits também líder, 32%)** |
| Espionagem (% de incidentes) | ~15–17% | Verizon DBIR 2025 | **Divergência não resolvida entre fontes** |
| Motivação financeira agregada | ≥52% dos incidentes | Microsoft Digital Defense Report 2025 | Confirmado (2 fontes); cuidado com leitura de manchete |
| Phishing com apoio de IA (taxa de clique) | 54% (4x o tradicional) | Microsoft Digital Defense Report 2025 | Confirmado (2 fontes) |
| Incidentes analisados (UE) | 4.875 (jul/2024–jun/2025) | ENISA Threat Landscape 2025 | Confirmado (2 fontes) |
| Setor mais visado na UE (volume) | Administração pública, 38,2% | ENISA Threat Landscape 2025 | Confirmado (2 fontes); energia fora do top 5 por volume |
| Ameaças a OT (% de categorias) | 18,2% | ENISA Threat Landscape 2025 | Confirmado (2 fontes) |
| IA em ataques (% de violações) | 16% (IBM) / phishing 80%+ das campanhas (ENISA) | IBM 2025 / ENISA 2025 | Confirmado (2 fontes cada); métricas não somáveis entre si |
| Ranking WEF — cyber insecurity (2 anos) | #6 | WEF Global Risks Report 2026 | Confirmado (2 fontes) |
| AI como driver #1 de mudança (2026) | 94% dos líderes | WEF Global Cybersecurity Outlook 2026 | Confirmado (2 fontes) |
| Fraude ciber-habilitada (afetou respondente/rede) | 73% | WEF Global Cybersecurity Outlook 2026 | Confirmado (2 fontes) |
| Resiliência insuficiente — setor público vs. privado | 23% / 11% (ordem incerta) | WEF Global Cybersecurity Outlook 2026 | **Divergência não resolvida entre fontes** |

**Legenda:** "Confirmado (2 fontes)" = regra de ouro cumprida, sem divergência material. "Divergência não
resolvida" = duas fontes discordam e nenhuma fonte primária adicional pôde arbitrar — registrado como tal, sem
inventar um valor consolidado.

---

## Financeiro

> Pesquisa realizada em 2026-07-21, com o mesmo protocolo de verificação cruzada da seção Global: cada
> número-chave com ≥2 fontes independentes; fontes secundárias marcadas como tal; divergências registradas
> explicitamente; nenhum número inventado.

### FS-ISAC — Navigating Cyber 2025 (panorama do setor)

- **Dado:** relatório anual da FS-ISAC baseado em mais de **5.000 firmas financeiras** membras em **75 países**
  (ativos combinados de USD 100 trilhões), com dados de janeiro de 2024 a janeiro de 2025, analisados pelo Global
  Intelligence Office da FS-ISAC. Segundo o relatório, **serviços financeiros é o 2º setor mais atacado
  globalmente, atrás apenas de saúde**. Quatro categorias de ameaça foram destacadas como as mais relevantes: (1)
  fraude e golpes potencializados por IA generativa (incluindo deepfakes visando executivos); (2) ataques à
  cadeia de suprimentos/terceiros; (3) DDoS e ransomware em sofisticação crescente; (4) exploração de tensões
  geopolíticas e incerteza econômica.
  - Fonte 1: FS-ISAC. *Heightened Cyber Threats are Testing the Operational Resilience of the Financial Sector
    (Navigating Cyber 2025)*. Maio de 2025. https://www.fsisac.com/newsroom/heightened-cyber-threats-are-testing-the-operational-resilience-of-the-financial-sector
    (ver também a página do relatório: https://www.fsisac.com/navigatingcyber2025)
  - Fonte 2 (secundária, corrobora a mesma ameaça qualitativa mas não reproduz metodologia/ranking): ABA Banking
    Journal. *FS-ISAC releases annual report on financial sector cyber threats*. 2025.
    https://bankingjournal.aba.com/2025/05/fs-isac-releases-annual-report-on-financial-sector-cyber-threats/
  - Observações: o comunicado de imprensa da própria FS-ISAC não traz percentuais numéricos detalhados por
    categoria de ameaça (apenas classificação qualitativa e o ranking "2º setor mais atacado"); a fonte
    secundária (ABA) confirma as quatro categorias de ameaça mas também não reproduz números. Uma cobertura
    agregada adicional (Vectra.ai) cita "velocidade de ataque 100x maior em quatro anos, com campanhas
    habilitadas por IA comprimindo o ciclo de acesso inicial→exfiltração para cerca de 25 minutos" atribuída ao
    contexto do setor financeiro — **[NÃO CONFIRMADO — não foi possível localizar esse número diretamente no
    relatório primário Navigating Cyber 2025 nem atribuí-lo com segurança a uma fonte primária nomeada em
    2026-07-21; tratar como não verificado]**.

### DDoS no setor financeiro — FS-ISAC / Akamai

- **Dado:** ataques DDoS contra o setor de serviços financeiros cresceram **154%** entre 2022 e 2023; o setor
  respondeu por mais de **35%** de todos os ataques DDoS observados em 2023, ultrapassando o setor de games e
  se tornando o vertical mais visado por esse tipo de ataque. Relatório atribui o salto ao aumento do poder de
  botnets e ao hacktivismo ligado à guerra Rússia-Ucrânia.
  - Fonte 1: FS-ISAC / Akamai. *DDoS: Here to Stay*. Março de 2024.
    https://www.fsisac.com/newsroom/pr-akamai-ddos-report-2024 (ver também
    https://www.akamai.com/newsroom/press-release/ddos-attacks-on-financial-services-industry-up-154-according-to-new-fs-isac-akamai-report)
  - Fonte 2 (secundária, cobertura independente do mesmo relatório): Cybersecurity Dive. *Financial services sees
    sharp increase in DDoS attacks as geopolitical tensions rise*. 2024.
    https://www.cybersecuritydive.com/news/ddos-financial-services-fsisac-akamai/709623/
  - Observações: relatório de base 2024 (dados de 2022–2023), citado aqui como referência de tendência estrutural
    ainda válida em 2025–2026 e reforçada qualitativamente pelo Navigating Cyber 2025 (DDoS entre as quatro
    ameaças principais ao setor). Não foi localizada uma atualização quantitativa equivalente (novo percentual)
    específica para 2025/2026 no escopo desta pesquisa — **[NÃO CONFIRMADO para o período 2025–2026; o número de
    154% refere-se à janela 2022–2023]**.

---

### IBM Cost of a Data Breach 2025 — detalhamento do setor financeiro

- **Dado:** custo médio de violação no setor financeiro = **USD 5,56 milhões** (2º colocado entre 17 setores,
  atrás de saúde), 25% acima da média global (USD 4,44 milhões) e queda de 9% frente aos USD 6,08 milhões de
  2024. Composição de custo no setor financeiro difere do padrão global: detecção e escalonamento correspondem a
  **34%** do custo (vs. 29% globalmente) — atribuído ao prazo regulatório comprimido de notificação, que força
  resposta forense extensiva nas primeiras 72 horas; notificação corresponde a **8%** (vs. 6% globalmente),
  refletindo obrigações de carta/call center por cliente e múltiplas obrigações de notificação a reguladores;
  resposta pós-violação = 24% (vs. 27% globalmente); perda de negócios = 34% (vs. 38% globalmente). Reemissão de
  cartão de débito/crédito após violação custa entre USD 5 e USD 15 por cartão, variando por tipo e complexidade.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach
  - Fonte 2 (secundária, agregador dedicado que reproduz a tabela de custos do relatório): DataBreachCost.com.
    *Financial Services Data Breach Cost (2025): $5.56M, #2 Sector*. 2025.
    https://databreachcost.com/industry/financial-services
  - Observações: nenhuma divergência relevante entre fontes quanto ao valor USD 5,56 milhões (já registrado
    também na seção Global). O detalhamento por categoria de custo (34%/8%/24%/34%) é específico desta seção e
    não consta na síntese da seção Global.

---

### Verizon DBIR 2025 — Finance Snapshot (setor financeiro e de seguros)

- **Dado:** o recorte "Financial and Insurance" (NAICS 52) do DBIR 2025 registrou **3.336 incidentes** e **927
  violações confirmadas**. Das violações confirmadas, **78%** envolveram atores externos, **22%** atores internos
  e **1%** parceiros (categorias não somam 100% por sobreposição metodológica). **74%** das violações do setor
  estão associadas a Intrusão de Sistema, Engenharia Social e Ataques Básicos a Aplicações Web; **90%** tiveram
  motivação financeira e **12%** motivação de espionagem.
  - Fonte 1: Verizon. *2025 Data Breach Investigations Report — Finance Snapshot*. 2025.
    https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf
  - Fonte 2 (secundária; agregação de cobertura especializada que reproduz os mesmos números do Finance
    Snapshot — PDF original não pôde ser extraído por completo via fetch automatizado, ver observação): síntese
    consolidada de múltiplas coberturas de imprensa especializada dos números do Finance Snapshot 2025
    (mesma limitação já registrada na seção Global para este relatório).
  - Observações: **[PARCIALMENTE CONFIRMADO]** — assim como já registrado na seção Global (ver "Setor financeiro
    — Verizon DBIR 2025 (Finance Snapshot)"), o fetch direto do PDF do Finance Snapshot retornou apenas o fluxo
    binário do arquivo (não texto extraível), de modo que os números 3.336/927/74%/90% foram confirmados por
    convergência entre múltiplos resultados de busca independentes que citam a mesma infográfico, mas não por
    dois documentos primários distintos. O detalhamento adicional desta seção (78%/22%/1% de atores; 12% de
    espionagem) é novo em relação à síntese da seção Global e está sujeito à mesma ressalva de fonte. Tratar como
    indicativo até confirmação manual contra o PDF oficial.

---

### CrowdStrike 2026 Financial Services Threat Landscape Report

- **Dado:** atores ligados à Coreia do Norte (DPRK-nexus) impulsionaram alta de **51%** ano a ano no roubo de
  ativos digitais em 2025, somando **USD 2,02 bilhões** roubados no setor; o cluster PRESSURE CHOLLIMA foi
  responsável pelo maior roubo financeiro já registrado por um único incidente: **USD 1,46 bilhão** em
  criptoativos via software trojanizado distribuído por comprometimento de cadeia de suprimentos. Intrusões
  "hands-on-keyboard" (operadas manualmente, sem depender de malware automatizado) contra instituições
  financeiras cresceram **43%** globalmente e **48%** na América do Norte em dois anos. Grupos de extorsão
  dupla ("big game hunting") listaram **423 entidades do setor financeiro** em sites de vazamento dedicados, alta
  de **27%** frente ao ano anterior.
  - Fonte 1: CrowdStrike. *CrowdStrike 2026 Financial Services Threat Landscape Report*. 2026.
    https://www.crowdstrike.com/en-us/press-releases/crowdstrike-2026-financial-services-threat-landscape-report/
    (ver também: https://ir.crowdstrike.com/news-releases/news-release-details/crowdstrike-2026-financial-services-threat-landscape-report)
  - Fonte 2 (secundária, cobertura independente que reproduz os mesmos números): DQ Channels. *CrowdStrike 2026
    threat report exposes new banking risks*. 2026.
    https://www.dqchannels.com/news/crowdstrike-2026-threat-report-exposes-new-banking-risks1-11837789
  - Observações: relatório específico do setor financeiro (2026), portanto mais recente que o CrowdStrike Global
    Threat Report 2025 já citado na seção Global (que cobre todos os setores). Sem divergência relevante entre as
    duas fontes quanto aos números citados. Atores adicionais mencionados: FAMOUS CHOLLIMA (uso de identidades
    geradas por IA para infiltrar exchanges de cripto, fintechs e bancos de varejo, com operações dobradas no
    período); STARDUST CHOLLIMA (operação triplicada, usando personas de recrutador geradas por IA e ambientes
    de videoconferência sintéticos contra fintechs na América do Norte, Europa e Ásia); VAULT PANDA
    (ator chinês de espionagem, malware KEYPLUG via DLL search-order hijacking, mirando instituições financeiras e
    entidades de suporte); MUTANT SPIDER (maior volume de intrusões no período, provável revendedor de acesso
    para operadores de ransomware).

### Black Kite — 2026 State of Financial Services Report

- **Dado:** ataques diretos de ransomware contra instituições financeiras voltaram a crescer com força: de
  **156 incidentes em 2024 para 202 em 2025** (alta de aproximadamente 30%); o 1º trimestre de 2026 já registrou
  **65 incidentes** no setor, alta de **76%** frente ao mesmo trimestre de 2025. O número de grupos distintos
  mirando o setor financeiro cresceu de 37 para 48. Firmas de investimento quase dobraram sua participação nos
  incidentes (de 44 para 84, ~41,6% do total de divulgações do setor), enquanto bancos — subsetor mais visado em
  2023, com 71 incidentes — caíram para 36 em 2025. O grupo Qilin reivindicou **59 vítimas** no setor financeiro
  no período analisado; em um caso, o comprometimento de um único provedor de serviços gerenciados sul-coreano
  (GJTec) permitiu movimento lateral para **32 instituições financeiras** sul-coreanas sem necessidade de invadir
  cada uma individualmente, extraindo mais de 1 milhão de arquivos e mais de 2 terabytes de dados. Fornecedores
  com CVEs críticas (CVSS ≥ 9) quase quintuplicaram entre os 140 fornecedores mais concentrados no setor
  financeiro.
  - Fonte 1: Black Kite. *2026 State of Financial Services Report*. 2026.
    https://blackkite.com/reports/2026-financial-services-report (comunicado:
    https://blackkite.com/press-releases/black-kites-2026-state-of-financial-services-report-reveals-ransomware-surge-and-vulnerability-deluge-driving-two-front-cyber-threat)
  - Fonte 2 (secundária, cobertura independente que reproduz os mesmos números): Unite.AI. *Black Kite's 2026
    Financial Services Report Warns of a Growing Cybersecurity Crisis Across Banking and Investment Firms*. 2026.
    https://www.unite.ai/black-kites-2026-financial-services-report-warns-of-a-growing-cybersecurity-crisis-across-banking-and-investment-firms/
  - Observações: sem divergência relevante entre as duas fontes. Complementa (não contradiz) o dado de "406
    vítimas de ransomware publicamente divulgadas no setor financeiro entre 2024–2026" e "$244,17 milhões em
    proventos do grupo Akira até final de setembro de 2025", citados por cobertura agregada adicional (Blaze
    InfoSec/Invenio IT) mas que não foi possível confirmar por segunda fonte primária independente —
    **[PARCIALMENTE CONFIRMADO — números de Akira/406 vítimas citados por fonte única identificável em
    2026-07-21]**.

---

### Deepfake e engenharia social em fraude financeira (contexto global)

- **Dado:** tentativas de fraude por deepfake cresceram **2.137%** nos últimos três anos, passando de 0,1% para
  **6,5%** de todas as tentativas de fraude. Deepfakes de voz (voice cloning) cresceram **680%** ano a ano em
  2024; combinados a um salto de **442%** em vishing e de **1.300%** em ataques de voz sintética, configuram
  aumento acentuado e convergente. Clonagem de voz já teria cruzado o "limiar de indistinguibilidade" — poucos
  segundos de áudio bastam para gerar clone convincente com entonação, ritmo e respiração naturais.
  - Fonte 1 (agregador especializado que consolida múltiplos relatórios de fornecedores de segurança/antifraude,
    2025-2026): Cyble. *Deepfake-as-a-Service Exploded In 2025: 2026 Threats Ahead*. 2026.
    https://cyble.com/knowledge-hub/deepfake-as-a-service-exploded-in-2025/
  - Fonte 2 (secundária, corrobora o crescimento de vishing/voz sintética com números convergentes):
    Right-Hand.ai. *The State of Deep Fake Vishing Attacks in 2025*. 2025.
    https://right-hand.ai/blog/deep-fake-vishing-attacks-2025/
  - Observações: **atenção** — o número "442% de aumento em vishing" já aparece na seção Global atribuído
    especificamente ao CrowdStrike Global Threat Report 2025 (crescimento entre o 1º e o 2º semestre de 2024);
    aqui ele é citado por fontes de mercado de fraude/deepfake como parte de um conjunto mais amplo de métricas
    de crescimento de ataques por voz — **os números não são necessariamente da mesma metodologia/período e não
    devem ser somados**; a convergência qualitativa (forte alta de vishing/voz sintética) é, porém, consistente
    entre as duas linhas de evidência.

- **Dado:** casos concretos de fraude financeira via deepfake em 2025: em Hong Kong, fraudadores personificaram um
  gerente financeiro usando clonagem de voz por IA e convenceram a vítima a transferir cerca de **HKD 145
  milhões (~USD 18,5 milhões)** para contas cripto fraudulentas; no início de 2025, uma conglomerada de energia
  europeia perdeu **USD 25 milhões** quando atacantes usaram um clone de áudio deepfake do CFO para emitir
  instruções ao vivo de transferência eletrônica urgente. A Resemble AI relatou **980 casos de infiltração
  corporativa** via deepfake em vídeo ao vivo durante reuniões no 3º trimestre de 2025 (Q3 2025), com objetivo de
  autorizar transações fraudulentas.
  - Fonte 1: StationX. *Deepfake Statistics [2026]: Growth, Fraud & Detection Data*. 2026.
    https://app.stationx.net/articles/deepfake-statistics
  - Fonte 2 (secundária, mesmo conjunto de casos citado independentemente): BrightDefense. *150+ Deepfake
    Statistics (March 2026)*. 2026. https://www.brightdefense.com/resources/deepfake-statistics/
  - Observações: o caso de Hong Kong é amplamente reportado desde 2024 (via a empresa de engenharia Arup) e
    reaparece consolidado em compilações de 2025–2026; o caso da "conglomerada de energia europeia" é citado sem
    nome da empresa nas duas fontes agregadoras consultadas — **[PARCIALMENTE CONFIRMADO — nome da empresa
    europeia de energia vítima do golpe de USD 25 milhões não identificado/confirmável em 2026-07-21; valor e
    modus operandi confirmados por 2 fontes, mas sem atribuição nominal verificável]**. Este caso, embora do
    setor de energia, é registrado aqui por ilustrar a mesma técnica (deepfake de voz/vídeo de executivo) aplicável
    a fraude no setor financeiro.

---

### Brasil — fraudes no PIX (volume e valor)

- **Dado:** o Brasil registrou **28 milhões de fraudes envolvendo o Pix** entre janeiro e setembro de 2025,
  segundo levantamento da Associação de Defesa de Dados Pessoais e do Consumidor (ADDP). Em métrica distinta e
  não diretamente comparável, entre julho de 2024 e junho de 2025 cerca de **24 milhões de brasileiros** foram
  vítimas de golpes financeiros envolvendo Pix ou boletos, com prejuízo estimado em quase **R$ 29 bilhões**
  (dado citado por matéria da Rádio Senado). Fraude financeira representa cerca de **47%** de todos os crimes
  digitais registrados no país; pessoas com mais de 50 anos respondem por cerca de **53%** das vítimas.
  - Fonte 1: Contábeis (citando ADDP). *Golpes via Pix: 28 milhões de casos em 2025 e como combatê-los*. 2025.
    https://www.contabeis.com.br/noticias/74404/golpes-via-pix-28-milhoes-de-casos-em-2025-e-como-combate-los/
  - Fonte 2 (secundária, dado complementar de outra pesquisa/período): Rádio Senado. *Mais de 24 milhões de
    pessoas foram vítimas de golpes pelo Pix*. 2025. https://www12.senado.leg.br/radio/1/noticia/2025/08/18/mais-de-24-milhoes-de-pessoas-foram-vitimas-de-golpes-pelo-pix
  - Observações: **divergência de metodologia e período explicitamente registrada** — "28 milhões de fraudes"
    (ADDP, jan–set/2025, contagem de casos/tentativas) e "24 milhões de vítimas" (jul/2024–jun/2025, contagem de
    pessoas distintas) medem coisas diferentes (eventos vs. pessoas; janelas temporais distintas) e não devem ser
    somados nem tratados como o mesmo número. O valor de prejuízo de "R$ 29 bilhões" citado pela Rádio Senado
    aparenta se referir a fraudes digitais em geral (Pix + boleto), não exclusivamente Pix — **[PARCIALMENTE
    CONFIRMADO — escopo exato do prejuízo de R$ 29 bilhões (só Pix vs. Pix+boleto) não pôde ser arbitrado com
    certeza em 2026-07-21]**.

- **Dado:** especificamente golpes via Pix (recorte Febraban, ver abaixo) causaram prejuízo de **R$ 2,7 bilhões**
  em dois anos, alta de **43%** nas transações fraudulentas — número distinto e mais conservador que o "R$ 29
  bilhões" acima, pois se refere apenas a fraudes formalmente contestadas/reportadas pelos bancos associados à
  Febraban, não à totalidade de golpes autorreportados por vítimas em pesquisas de opinião.
  - Fonte 1: Poder360 (citando Febraban). *Golpes causaram prejuízo de R$ 10,1 bi em 2024, diz Febraban*. 2025.
    https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/
  - Fonte 2 (secundária, mesma pesquisa Febraban): Finsiders Brasil. *Golpes com Pix dão prejuízos de quase R$ 3
    bi em dois anos, diz Febraban*. 2025. https://finsidersbrasil.com.br/eventos/golpes-com-pix-dao-prejuizos-de-quase-r-3-bi-em-dois-anos-diz-febraban/
  - Observações: sem divergência relevante entre as duas fontes quanto ao valor específico de Pix (R$ 2,7
    bilhões/43%). Ver nota acima sobre a diferença metodológica frente aos números da ADDP/Rádio Senado — os
    três números (28 milhões de casos, 24 milhões de vítimas, R$ 2,7 bilhões em fraude Pix formalmente apurada)
    coexistem sem se contradizerem tecnicamente, mas medem populações/recortes diferentes e não devem ser
    somados ou usados como sinônimos em um único parágrafo do relatório final.

- **Dado:** o mecanismo de devolução do Pix (MED — Mecanismo Especial de Devolução) foi explorado por golpistas
  em fraude de "devolução dupla": o golpista transfere para a conta da vítima, alega erro e pede devolução; ao
  mesmo tempo, aciona o MED junto ao próprio banco, fazendo o valor sair da conta da vítima duas vezes. Em
  resposta, o Banco Central aprimorou o MED para rastrear o caminho completo dos recursos fraudados por todas as
  contas intermediárias até o destino final. A Resolução Conjunta BCB/CMN nº 6 passou a exigir que instituições
  autorizadas compartilhem indícios de fraude/tentativas de fraude entre si por meio de sistema interoperável.
  - Fonte 1: Contábeis. *Golpes via Pix: 28 milhões de casos em 2025 e como combatê-los*. 2025.
    https://www.contabeis.com.br/noticias/74404/golpes-via-pix-28-milhoes-de-casos-em-2025-e-como-combate-los/
  - Fonte 2 (secundária, descreve o mesmo mecanismo de golpe e resposta regulatória): Data Rudder. *Data Report
    Pix 2025: a segurança em pagamentos instantâneos*. 2025. https://datarudder.com/report-pix-pagamentos-instantaneos/
  - Observações: sem divergência relevante entre as fontes quanto à descrição do golpe e da resposta regulatória.

---

### Brasil — regulação do Banco Central (segurança cibernética)

- **Dado:** o marco regulatório vigente de segurança cibernética para o sistema financeiro nacional é composto
  por duas resoluções irmãs publicadas em 26/2/2021: **Resolução CMN nº 4.893/2021** (política de segurança
  cibernética e requisitos de contratação de processamento/armazenamento de dados e computação em nuvem,
  aplicável a bancos múltiplos, comerciais, de investimento, cooperativas de crédito, SCDs, SEPs e demais
  instituições autorizadas a funcionar pelo BCB em sentido amplo) e **Resolução BCB nº 85/2021** (mesmo escopo
  temático, mas aplicável especificamente a instituições de pagamento). Ambas foram atualizadas em 2025 pela
  **Resolução CMN nº 5.274/2025** e pela **Resolução BCB nº 538/2025**, com prazo final de adequação em
  **março de 2026**.
  - Fonte 1: Banco Central do Brasil / ANCORD. *Resolução CMN n° 4.893 de 26/2/2021* (texto oficial).
    https://www.ancord.org.br/wp-content/uploads/2021/03/Resolucao-CMN-n-4.893-de-26_2_2021.pdf
  - Fonte 2 (secundária, análise jurídica que confirma a distinção CMN 4.893/BCB 85 e a atualização 2025): NDM
    Advogados. *O que muda para a segurança cibernética das instituições autorizadas até março de 2026 com as
    Resoluções BCB 538/2025 e CMN 5.274/2025*. 2025. https://ndmadvogados.com.br/artigo/seguranca-cibernetica-bcb-538-cmn-5274/
  - Observações: sem divergência relevante entre fontes. **Nota de precisão em relação ao brief da Task 2:** o
    brief cita "Resolução BCB nº 4.893" — o número correto é **Resolução CMN nº 4.893/2021** (Conselho Monetário
    Nacional), não uma Resolução BCB; a resolução paralela do Banco Central com número próprio para instituições
    de pagamento é a **Resolução BCB nº 85/2021**. A distinção é confirmada por múltiplas fontes jurídicas
    (Migalhas, TozziniFreire, Grant Thornton, Decripte, SecOffice) e é relevante para não citar incorretamente o
    número/órgão emissor no capítulo final do panorama.

- **Dado:** requisitos centrais das resoluções incluem política de segurança cibernética documentada, plano de
  resposta a incidentes, testes de penetração periódicos e gestão de risco de fornecedores de TI; a política deve
  ser proporcional ao porte, perfil de risco, modelo de negócio e sensibilidade dos dados da instituição.
  - Fonte 1: SecOffice. *Resolução CMN 4.893: Guia Completo sobre Segurança Cibernética para Instituições
    Financeiras*. https://secoffice.com.br/blog/resolucao-cmn-4-893-guia-completo-sobre-seguranca-cibernetica-para-instituicoes-financeiras/
  - Fonte 2 (secundária): Migalhas. *Instituições financeiras: Política de segurança cibernética*.
    https://www.migalhas.com.br/depeso/343724/instituicoes-financeiras-politica-de-seguranca-cibernetica
  - Observações: sem divergência relevante entre fontes; conteúdo qualitativo consistente com o texto oficial da
    resolução.

---

### Brasil — Open Finance (superfície de ataque e escala)

- **Dado:** o ecossistema de Open Finance no Brasil superou **128 milhões de consentimentos ativos** em janeiro
  de 2026, segundo relatório "State of Open Finance – Brazil & World" (Sensedia/Let's Money), colocando o Brasil
  na liderança global entre mais de 78 países com regulação do tema. A infraestrutura gera mais de **4,4 bilhões
  de comunicações semanais** entre instituições. Expansão da API abre nova superfície de ataque: cada nova
  integração mal protegida representa um ponto de entrada adicional para ameaças; fraudadores já exploram roubo e
  manipulação de tokens, criação de consentimentos híbridos fraudulentos, bots especializados simulando
  comportamento humano, e engenharia social hiperpersonalizada com apoio de IA generativa.
  - Fonte 1: TI Inside. *Open Finance: Brasil lidera ranking global com 128 milhões de consentimentos ativos*.
    Janeiro de 2026. https://tiinside.com.br/22/01/2026/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/
  - Fonte 2 (secundária, mesmo dado, veículo distinto): Convergência Digital. *Open Finance: Brasil lidera
    ranking global com 128 milhões de consentimentos ativos*. Janeiro de 2026.
    https://convergenciadigital.com.br/mercado/open-finance-brasil-lidera-ranking-global-com-128-milhoes-de-consentimentos-ativos/
  - Observações: **divergência de números entre fontes de datas próximas, registrada explicitamente** — a
    Febraban, em fevereiro de 2026, citou **154 milhões de consentimentos ativos** e mais de 100 milhões de
    clientes/contas conectados; já em publicação anterior da própria Febraban (sem data exata localizada, citando
    "4 anos de Open Finance"), o número de consentimentos era de **62 milhões**. As três leituras (128M/jan-2026,
    154M/fev-2026, 62M/"4 anos") não são necessariamente contraditórias — podem refletir crescimento real e rápido
    do ecossistema ao longo de poucas semanas/meses, mas também poderiam refletir metodologias de contagem
    distintas entre Sensedia e Febraban — **[PARCIALMENTE CONFIRMADO — não foi possível arbitrar se a diferença
    128M→154M em cerca de um mês reflete crescimento real ou mudança de metodologia de contagem entre as fontes
    em 2026-07-21]**. Também não foi possível confirmar de forma independente o percentual "91% das empresas
    sofreram ao menos um incidente de segurança cibernética no último ano" citado por uma fonte (JuicyScore,
    atribuído a pesquisa da Deloitte) sem acesso à pesquisa Deloitte original — **[NÃO CONFIRMADO]**.

---

### Brasil — Febraban (pesquisas de fraude e tecnologia bancária)

- **Dado:** o volume de prejuízo com golpes financeiros no Brasil somou **R$ 10,1 bilhões em 2024**, alta de
  **17%** frente aos R$ 8,6 bilhões de 2023, segundo a Pesquisa Febraban de Tecnologia Bancária 2025. A maior
  parte do prejuízo (R$ 10 bilhões acumulados em 2 anos) decorre de fraudes em canais eletrônicos e cartões de
  débito. Golpes baseados em perfis falsos/clonados (WhatsApp, anúncios, vendas simuladas) foram os mais
  reportados por clientes em 2024. Quase **4 em cada 10 brasileiros** já sofreram algum tipo de golpe, segundo a
  mesma pesquisa — o maior número da série histórica. Reconhecimento da biometria física como método de proteção
  passou de 59% (2023) para **67%** (2024). Em 2023, instituições financeiras destinaram cerca de **R$ 5
  bilhões** à prevenção de fraudes e crimes cibernéticos.
  - Fonte 1: Poder360 (citando Pesquisa Febraban de Tecnologia Bancária 2025). *Golpes causaram prejuízo de R$
    10,1 bi em 2024, diz Febraban*. 2025. https://www.poder360.com.br/poder-economia/golpes-causaram-prejuizo-de-r-101-bi-em-2024-diz-febraban/
  - Fonte 2 (secundária, mesma pesquisa, veículo distinto): FEBRABAN Tech. *Quase 4 em cada 10 brasileiros já
    sofreram golpe, aponta pesquisa da Febraban*. 2025.
    https://febrabantech.febraban.org.br/temas/seguranca/quase-4-em-cada-10-brasileiros-ja-sofreram-golpe-aponta-pesquisa-da-febraban
  - Observações: tentativa de fetch direto do PDF oficial da Pesquisa Febraban de Tecnologia Bancária 2025 (Vol.
    1) retornou apenas o fluxo binário do arquivo, não texto extraível — números confirmados por convergência
    entre duas coberturas jornalísticas independentes que citam a mesma pesquisa, e não pelo documento primário
    diretamente. Sem divergência relevante entre as duas fontes quanto aos valores citados.

---

### Brasil — incidentes cibernéticos conhecidos no setor financeiro (2025)

- **Dado:** em **11–12 de fevereiro de 2025**, um agente identificado como "banconeon" divulgou em fórum
  cibercriminoso um pacote de dados supostamente extraído da base do **Banco Neon**, afetando (segundo o
  divulgador) cerca de **30 milhões de clientes** — incluindo nome completo, CPF/CNPJ, telefone, e-mail, CEP,
  profissão, nome da mãe, renda declarada, saldo bancário, número de conta, dados de transações via Pix, selfies
  e imagens de documentos de verificação de identidade. O Banco Neon confirmou o incidente publicamente, mas
  negou que a extensão tenha atingido 30 milhões de clientes, afirmando tratar-se de "pequena parcela" e que os
  dados vazados "não permitem acessar as contas bancárias".
  - Fonte 1: Mixvale. *Banco Neon sofre vazamento de dados de 30 milhões de clientes e alerta para possíveis
    golpes*. Fevereiro de 2025. https://www.mixvale.com.br/2025/02/12/banco-neon-sofre-vazamento-de-dados-de-30-milhoes-de-clientes-e-alerta-para-possiveis-golpes/
  - Fonte 2 (secundária, traz a versão/negação oficial do banco): InfoMoney. *Banco Neon confirma vazamento de
    dados, mas nega 30 milhões de clientes afetados*. Fevereiro de 2025.
    https://www.infomoney.com.br/consumo/dados-de-mais-de-30-milhoes-de-clientes-do-banco-neon-foram-vazados-diz-site/
  - Observações: **divergência explícita entre a alegação do atacante e a posição oficial do banco**, registrada
    como tal — o número "30 milhões" é a alegação do agente que publicou os dados no fórum, não um número
    confirmado pela instituição afetada nem por órgão regulador independente. **[PARCIALMENTE CONFIRMADO — a
    extensão real do vazamento (30 milhões vs. "pequena parcela") permanece contestada entre as partes em
    2026-07-21]**.

- **Dado:** em **4 de julho de 2025**, o Banco Central suspendeu preventivamente por até 60 dias (com base na
  Resolução BC nº 30) três instituições participantes do Pix — **Transfeera, Soffy e Nuoro Pay** — após ataque
  cibernético direcionado à **C&M Software**, empresa de tecnologia que atua como ponte entre instituições
  financeiras e o Sistema de Pagamentos Brasileiro (SPB). O ataque resultou no desvio de pelo menos **R$ 400
  milhões**. Investigações buscavam apurar participação direta ou indireta das instituições suspensas.
  - Fonte 1: Agência Brasil (EBC). *BC suspende três instituições do Pix após ataque cibernético*. Julho de
    2025. https://agenciabrasil.ebc.com.br/economia/noticia/2025-07/bc-suspende-tres-instituicoes-do-pix-apos-ataque-cibernetico
  - Fonte 2 (secundária, mesmo caso, detalha a empresa-alvo original C&M Software): Finsiders Brasil. *BC
    suspende do Pix os participantes Transfeera, Nuoro Pay e Soffy (atualização)*. Julho de 2025.
    https://finsidersbrasil.com.br/reportagem-exclusiva-fintechs/bc-suspende-os-participantes-do-pix-transfeera-nuoro-pay-e-soffy/
  - Observações: sem divergência relevante entre as fontes quanto ao valor (R$ 400 milhões) e à empresa-alvo
    (C&M Software). Este incidente ilustra diretamente o risco de terceiros/cadeia de suprimentos no setor
    financeiro brasileiro (item explicitamente pedido no brief da Task 2): a vulnerabilidade não foi nas
    fintechs suspensas, mas em um provedor de infraestrutura tecnológica compartilhado.

- **Dado:** em **19 de outubro de 2025**, a fintech **FictorPay** (Grupo Fictor) teve cerca de **R$ 26 milhões**
  desviados por meio de aproximadamente **280 transações Pix** distribuídas em cerca de 270 contas fraudulentas
  em diversos bancos e fintechs. O ataque explorou uma falha em aplicação de terceiro contratada pela empresa;
  a Celcoin (provedora da infraestrutura Pix da FictorPay) afirmou não ter havido invasão de sua própria
  infraestrutura tecnológica e que as operações suspeitas foram bloqueadas rapidamente após acionamento pelo
  Banco Central. O caso marcou o **quarto incidente cibernético contra fintechs brasileiras em três meses**, com
  perdas acumuladas superiores a **R$ 1,74 bilhão desde julho de 2024**.
  - Fonte 1: TechTudo. *Ataque hacker desvia R$ 26 milhões; entenda caso contra fintech brasileira*. Outubro de
    2025. https://www.techtudo.com.br/noticias/2025/10/ataque-hacker-desvia-r-26-milhoes-entenda-caso-contra-fintech-brasileira-edsoftwares.ghtml
  - Fonte 2 (secundária, mesmo caso, aponta fornecedor de software adicional — Dilleta Solutions — como possível
    origem do vazamento de credenciais e estima total desviado mais alto): Diário do Grande ABC. *Fintech é alvo
    de ataque cibernético que desvia R$ 26 milhões*. Outubro de 2025.
    https://www.dgabc.com.br/Noticia/4264537/fintech-e-alvo-de-ataque-cibernetico-que-desvia-rs-26-milhoes
  - Observações: **divergência registrada** — a fonte 1 atribui a falha a uma aplicação de terceiro genérica e
    cita a Celcoin como provedora de infraestrutura (isenta de invasão); a fonte 2 aponta a Dilleta Solutions
    (outra prestadora de serviços à fintech) como a origem do vazamento de credenciais, e estima o total desviado
    somando outros parceiros afetados da Dilleta em **pelo menos R$ 40 milhões** (acima dos R$ 26 milhões
    confirmados especificamente para a FictorPay). **[PARCIALMENTE CONFIRMADO — o valor de R$ 26 milhões é
    consistente entre fontes para a FictorPay isoladamente; o valor agregado de R$ 40 milhões (incluindo outros
    clientes da Dilleta) tem fonte única identificável em 2026-07-21]**. Em resposta a esses incidentes
    recorrentes, o Banco Central passou a exigir o encerramento de "contas-bolsão" a partir de dezembro de 2025,
    criou teto para transações Pix/TED de certas instituições e elevou o capital mínimo exigido de fintechs (de
    R$ 1 milhão para R$ 9 milhões).

---

### Atores de ameaça relevantes ao setor financeiro

- **Dado:** **FIN7** (também rastreado como Carbon Spider, GOLD NIAGARA, ITG14, Sangria Tempest, Elbrus) é um
  grupo financeiramente motivado ativo desde 2013, historicamente focado em roubo de dados de cartão de pagamento
  via comprometimento de sistemas de ponto de venda (POS); desde 2020 migrou para "big game hunting" (implantação
  de ransomware e extorsão em larga escala), incluindo uso de REvil e de RaaS próprio (Darkside). Alvos incluem
  varejo, hotelaria, serviços financeiros, entre outros setores.
  - Fonte 1: MITRE ATT&CK. *FIN7, G0046*. https://attack.mitre.org/groups/G0046/
  - Fonte 2 (secundária, perfil independente do mesmo ator): Huntress. *FIN7 Cybercrime Group — Tactics, Tools,
    and Threat Insights*. https://www.huntress.com/threat-library/threat-actors/fin7
  - Observações: sem divergência relevante entre fontes; não foi localizada, no escopo desta pesquisa, uma
    campanha específica e nomeada de FIN7 contra o setor financeiro datada especificamente de 2025–2026 (as
    fontes descrevem o perfil histórico e atual do grupo, não um incidente pontual do período) — **[NÃO
    CONFIRMADO um ataque específico de FIN7 em 2025–2026 dentro do escopo desta pesquisa]**.

- **Dado:** clusters de atores ligados à Coreia do Norte (DPRK), coletivamente responsáveis por parte relevante
  do roubo de ativos digitais em 2025 (ver CrowdStrike acima): **PRESSURE CHOLLIMA** (maior roubo cripto já
  registrado, USD 1,46 bilhão, via cadeia de suprimentos de software), **FAMOUS CHOLLIMA** (identidades geradas
  por IA para infiltrar exchanges/fintechs/bancos de varejo), **STARDUST CHOLLIMA** (personas de recrutador por
  IA e videoconferência sintética). Ator chinês **VAULT PANDA** conduz espionagem contra instituições financeiras
  com malware KEYPLUG. Grupos de ransomware mais ativos contra o setor em 2025: **Qilin** (59 vítimas no setor,
  incluindo o caso GJTec/Coréia do Sul), **Akira** (~USD 244,17 milhões em proventos até final de setembro de
  2025, cross-setorial) e **Kill Security**.
  - Fonte 1: CrowdStrike. *CrowdStrike 2026 Financial Services Threat Landscape Report*. 2026.
    https://www.crowdstrike.com/en-us/press-releases/crowdstrike-2026-financial-services-threat-landscape-report/
  - Fonte 2 (secundária, corrobora os grupos de ransomware citados e o caso GJTec): Black Kite. *2026 State of
    Financial Services Report*. 2026. https://blackkite.com/reports/2026-financial-services-report
  - Observações: já detalhado nas entradas "CrowdStrike 2026" e "Black Kite 2026" acima; consolidado aqui como
    referência rápida de atores. Sem divergência relevante entre as duas fontes quanto aos nomes de grupos e ao
    caso GJTec.

---

### Tabela-resumo — Financeiro

| Métrica | Valor | Relatório primário | Status |
| :-- | :-- | :-- | :-- |
| Setor mais atacado (ranking FS-ISAC) | 2º lugar, atrás de saúde | FS-ISAC Navigating Cyber 2025 | Confirmado (2 fontes) qualitativamente; sem % numérico |
| DDoS no setor financeiro (2022→2023) | +154%; 35%+ de todo DDoS observado | FS-ISAC/Akamai *DDoS: Here to Stay* (2024) | Confirmado (2 fontes); janela 2022–2023, sem atualização 2025–2026 confirmada |
| Custo médio de violação — financeiro | USD 5,56 milhões (-9% a/a) | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); **superado pela edição 2026: USD 6,3 milhões, ver Global** |
| Composição de custo — detecção/escalonamento | 34% (vs. 29% global) | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); detalhamento por categoria não reconfirmado para a edição 2026 |
| Incidentes / violações confirmadas (Finance Snapshot) | 3.336 / 927 | Verizon DBIR 2025 Finance Snapshot | Parcialmente confirmado (PDF não extraível; convergência de buscas) |
| Padrão dominante de ataque (setor) | 74% Intrusão de Sistema + Eng. Social + Web App | Verizon DBIR 2025 Finance Snapshot | Parcialmente confirmado |
| Motivação financeira / espionagem (setor) | 90% / 12% | Verizon DBIR 2025 Finance Snapshot | Parcialmente confirmado |
| Roubo de ativos digitais (DPRK-nexus, 2025) | USD 2,02 bilhões (+51% a/a) | CrowdStrike 2026 Financial Services Threat Landscape | Confirmado (2 fontes) |
| Maior roubo cripto único (PRESSURE CHOLLIMA) | USD 1,46 bilhão | CrowdStrike 2026 Financial Services Threat Landscape | Confirmado (2 fontes) |
| Intrusões hands-on-keyboard (2 anos) | +43% global / +48% América do Norte | CrowdStrike 2026 Financial Services Threat Landscape | Confirmado (2 fontes) |
| Ransomware direto no setor financeiro (2024→2025) | 156 → 202 incidentes (+~30%) | Black Kite 2026 State of Financial Services | Confirmado (2 fontes) |
| Ransomware setor financeiro, Q1 2026 vs. Q1 2025 | +76% (65 incidentes) | Black Kite 2026 State of Financial Services | Confirmado (2 fontes) |
| Fraude por deepfake (evolução 3 anos) | 0,1% → 6,5% das tentativas (+2.137%) | Agregação Cyble/StationX/BrightDefense (2025-2026) | Confirmado (2 fontes); fonte primária única não identificada |
| Fraudes envolvendo Pix (casos, jan–set/2025) | 28 milhões | ADDP (via Contábeis) | Confirmado (2 fontes); não somar com "24 milhões de vítimas" (outra métrica/período) |
| Prejuízo com golpes financeiros no Brasil (2024) | R$ 10,1 bilhões (+17% a/a) | Pesquisa Febraban de Tecnologia Bancária 2025 | Confirmado (2 fontes) |
| Prejuízo específico com golpes Pix (2 anos) | R$ 2,7 bilhões (+43%) | Pesquisa Febraban de Tecnologia Bancária 2025 | Confirmado (2 fontes) |
| Consentimentos ativos — Open Finance Brasil | 128 milhões (jan/2026) | Sensedia/Let's Money *State of Open Finance* | Confirmado (2 fontes); diverge de 154M (Febraban, fev/2026) — ver observação |
| Vazamento Banco Neon (fev/2025) | 30 milhões de clientes (alegado) | Divulgação em fórum cibercriminoso | Parcialmente confirmado — banco nega extensão |
| Ataque C&M Software / suspensão Pix (jul/2025) | R$ 400 milhões desviados; 3 fintechs suspensas | Banco Central (Resolução BC nº 30) | Confirmado (2 fontes) |
| Ataque FictorPay (out/2025) | R$ 26 milhões desviados; ~280 transações Pix | Cobertura de imprensa especializada | Confirmado (2 fontes) para o valor da FictorPay isoladamente |
| Perdas acumuladas em ataques a fintechs BR (desde jul/2024) | R$ 1,74 bilhão | Cobertura de imprensa especializada | Confirmado (2 fontes) |
| Ransomware Qilin no setor financeiro | 59 vítimas; caso GJTec afetou 32 instituições (Coreia do Sul) | Black Kite 2026 State of Financial Services | Confirmado (2 fontes) |

**Legenda:** idêntica à da tabela-resumo Global. Itens "Parcialmente confirmado" indicam que o valor numérico
central foi localizado e é consistente entre as fontes disponíveis, mas ao menos uma condição da regra de ouro
(acesso direto a documento primário, ou segunda fonte plenamente independente) não pôde ser cumprida integralmente
em 2026-07-21.

---

## Energia

> Pesquisa realizada em 2026-07-21, com o mesmo protocolo de verificação cruzada das seções anteriores: cada
> número-chave com ≥2 fontes independentes; fontes secundárias marcadas como tal; divergências registradas
> explicitamente; nenhum número inventado. **Atenção redobrada** nesta seção: atribuição de grupos/APTs e detalhes
> técnicos de malware ICS são áreas de alta imprecisão pública — cada afirmação de atribuição é atribuída
> explicitamente a quem a fez (Dragos, Mandiant, ESET, CISA etc.), sem tratamento como fato objetivo único.

### Dragos OT/ICS Cybersecurity Year in Review 2025 (8ª edição, dados de 2024)

- **Dado:** ataques de ransomware contra organizações industriais cresceram **mais de 87%** em relação ao ano
  anterior; o número de grupos de ransomware mirando organizações industriais subiu para **80** (alta de 60% frente
  aos 50 grupos de 2023). Manufatura respondeu por **mais de 50%** das vítimas de ransomware observadas. Em média,
  **34 organizações industriais por semana** foram atacadas no 1º semestre de 2024, número que **mais que dobrou**
  no 2º semestre.
  - Fonte 1: Dragos. *Dragos Reports OT/ICS Cyber Threats Escalate Amid Geopolitical Conflicts and Increasing
    Ransomware Attacks (2025 OT/ICS Cybersecurity Year in Review)*. Fevereiro de 2025.
    https://www.dragos.com/resources/press-release/dragos-reports-ot-ics-cyber-threats-escalate-amid-geopolitical-conflicts-and-increasing-ransomware-attacks
  - Fonte 2 (secundária, cobertura independente do mesmo relatório): TechTarget. *Dragos: Ransomware attacks
    against industrial orgs up 87%*. 2025.
    https://www.techtarget.com/searchsecurity/news/366619652/Dragos-Ransomware-attacks-against-industrial-orgs-up-87
  - Observações: 8ª edição anual do relatório, cobrindo o ano-base 2024. Dragos também identificou 2 novos grupos
    de ameaça ativos em operações OT (BAUXITE e GRAPHITE), totalizando 23 grupos de ameaça rastreados globalmente,
    9 dos quais ativos em OT durante 2024. Quanto às vulnerabilidades, o relatório caracteriza (não quantifica em
    número absoluto nesta cobertura) que 70% das vulnerabilidades identificadas estavam profundamente dentro de
    redes ICS, 39% poderiam causar perda simultânea de visualização e controle, e 22% eram exploráveis pela rede e
    expostas ao perímetro. Em 25% dos casos de ransomware houve parada completa do site OT; em 75% houve alguma
    disrupção operacional.

### Dragos OT/ICS Cybersecurity Year in Review 2026 (9ª edição, dados de 2025)

- **Dado:** atividade geral de ransomware cresceu **64%** ano a ano; o número de grupos de ransomware mirando
  setores industriais subiu para **119** (ante 80 em 2024), impactando coletivamente cerca de **3.300
  organizações**. Manufatura respondeu por **mais de dois terços** de todas as vítimas reportadas. O tempo médio
  de permanência (dwell time) de ransomware em ambientes OT foi de **42 dias**, mas organizações com visibilidade
  OT abrangente conseguiram conter incidentes de ransomware OT em média em **5 dias**. Malware confirmado e
  ransomware corresponderam, cada um, a **23%** dos engajamentos de resposta a incidentes da Dragos ao longo de
  2025.
  - Fonte 1: Dragos. *Dragos 2026 OT Report Shows Surge in Threat Groups and Ransomware*. Fevereiro de 2026.
    https://www.dragos.com/resources/press-release/dragos-2026-year-in-review-new-ot-threats-ransomware
  - Fonte 2 (secundária, cobertura independente): Cybersecurity Magazine. *Dragos: Operational Tech Under
    Increasing Risk of Attack*. 2026. https://cybermagazine.com/news/dragos-ot-ics-cybersecurity-report
  - Observações: 9ª edição anual, cobrindo o ano-base 2025 — portanto mais recente que a edição 2025 (ano-base
    2024) citada acima; ambas registradas por complementaridade temporal. Dragos rastreou 26 grupos de ameaça
    globais (11 ativos em 2025), com 3 novos grupos identificados (AZURITE, PYROXENE, SYLVANITE). Sem divergência
    relevante entre as duas fontes quanto aos números centrais.

---

### Kaspersky ICS CERT — estatísticas de computadores ICS atacados (2025)

- **Dado:** a porcentagem global de computadores ICS nos quais objetos maliciosos foram bloqueados ficou em
  **21,9%** no 1º trimestre de 2025 (estável frente ao 4º trimestre de 2024, mas 2,5 pontos percentuais abaixo do
  1º trimestre de 2024); caiu para **20,5%** no 2º trimestre e para **20,1%** no 3º trimestre de 2025 (queda de 0,4
  p.p. frente ao trimestre anterior). No 1º semestre de 2025, o setor de **energia elétrica** teve **22,8%** de
  computadores ICS atacados, tornando-se o **3º setor mais atacado globalmente**, atrás de biometria (28,1%) e
  automação predial (25%); óleo e gás apareceu mais abaixo no ranking, com cerca de 15,8%–17,3% conforme o
  trimestre (variação registrada entre coberturas). A internet permanece a principal fonte de infecção (cerca de
  10% dos computadores ICS no 1T2025), seguida por clientes de e-mail (~2,8%) e mídia removível (~0,5%, em queda).
  - Fonte 1: Kaspersky ICS CERT. *Threat landscape for industrial automation systems. Q1 2025* / *Q2 2025* / *Q3
    2025*. 2025. https://ics-cert.kaspersky.com/publications/reports/2025/05/15/threat-landscape-for-industrial-automation-systems-q1-2025/
    e https://ics-cert.kaspersky.com/publications/reports/2025/12/11/threat-landscape-for-industrial-automation-systems-q3-2025/
  - Fonte 2 (secundária, cobertura do mesmo dado trimestral): BusinessWorld. *Malicious Objects Targeted 21.9% Of
    ICS Computers Globally In Q1 2025: Report*. 2025.
    https://www.businessworld.in/article/malicious-objects-targeted-219-of-ics-computers-globally-in-q1-2025-report-557276
  - Observações: **nota de precisão** — o fetch direto do relatório oficial Q1 2025 confirmou os números globais
    (21,9% / fontes de infecção) mas **não trouxe o detalhamento por setor** (biometria/energia elétrica/óleo e
    gás) no corpo do texto acessado; esse detalhamento setorial foi obtido por meio de busca agregada (cobertura
    de imprensa especializada que cita a mesma série de relatórios trimestrais da Kaspersky ICS CERT). O valor de
    22,8% para energia elétrica refere-se especificamente ao 1º semestre de 2025 (agregação de Q1+Q2), não a um
    único trimestre isolado. **[PARCIALMENTE CONFIRMADO — detalhamento setorial exato não verificado linha a linha
    contra o PDF/página primária de cada trimestre em 2026-07-21]**.

### Fortinet — 2025 State of Operational Technology and Cybersecurity Report

- **Dado:** pesquisa global com mais de **550 profissionais de OT** em manufatura, energia, transporte e outros
  setores críticos. **50%** das organizações relataram um ou mais incidentes de cibersegurança no último ano.
  Interrupções operacionais com impacto em receita **caíram de 52% (2024) para 42% (2025)**. **52%** das
  organizações já colocam a segurança OT sob responsabilidade do CISO (ante apenas 16% em 2022), com **80%**
  planejando seguir o mesmo caminho. **78%** das organizações usam quatro ou menos fornecedores de OT (consolidação
  estratégica); **49%** já incorporam threat intelligence, alta significativa frente a 2024.
  - Fonte 1: Fortinet. *2025 State of Operational Technology and Cybersecurity Report*. 2025.
    https://www.fortinet.com/resources/reports/state-ot-cybersecurity
  - Fonte 2 (secundária, cobertura independente): Industrial Cyber. *OT cybersecurity becomes a board-level
    priority as industrial security maturity rises, Fortinet finds*. 2025.
    https://industrialcyber.co/industrial-cyber-attacks/ot-cybersecurity-becomes-a-board-level-priority-as-industrial-security-maturity-rises-fortinet-finds/
  - Observações: sem divergência relevante entre fontes. A pesquisa cobre múltiplos setores (não exclusivamente
    energia), mas energia é citada explicitamente entre os setores pesquisados.

### Nozomi Networks — OT/IoT Cybersecurity Trends & Insights (2025)

- **Dado:** "Manipulação de Dados" (Data Manipulation) foi a técnica mais detectada em ambientes de clientes da
  Nozomi — **3 vezes mais frequente** que a segunda técnica mais detectada — e foi também a técnica dominante
  especificamente nos três principais setores monitorados: Manufatura, Transporte e **Energia, Utilities e
  Resíduos**. Média de **820 mil ataques a dispositivos IoT por dia** em 2025. Em análise de mais de 500 mil redes
  sem fio no mundo, apenas **6%** estavam adequadamente protegidas contra ataques de desautenticação (deauth)
  sem fio — vetor usado para obter acesso profundo a infraestrutura crítica.
  - Fonte 1: Nozomi Networks. *OT/IoT Cybersecurity Trends & Insights, February 2025* e *Nozomi Networks Assesses
    the 2025 OT/IoT Cybersecurity Threat Landscape (July 2025)*. 2025.
    https://www.nozominetworks.com/ot-iot-cybersecurity-trends-insights-february-2025 e
    https://www.nozominetworks.com/resources/ot-iot-security-report-july-2025
  - Fonte 2 (secundária, mesmo relatório de rede sem fio): PR Newswire. *Nozomi Networks Labs Report Finds Wireless
    Networks Unprotected as Threats to Critical Infrastructure Escalate*. 2025.
    https://www.prnewswire.com/news-releases/nozomi-networks-labs-report-finds-wireless-networks-unprotected-as-threats-to-critical-infrastructure-escalate-302385820.html
  - Observações: sem divergência relevante entre fontes. O achado de que Energia/Utilities está entre os três
    setores onde "Manipulação de Dados" é a técnica dominante é diretamente relevante ao recorte desta pesquisa.

### CISA — advisórios de vulnerabilidades ICS (2025)

- **Dado:** mais de **450 advisórios ICS** publicados pela CISA em 2025, cobrindo vulnerabilidades em mais de
  **200 fornecedores** e mais de **700 produtos** usados em linhas de manufatura, subestações, salas de controle,
  redes industriais e sistemas automatizados de serviços essenciais — incluindo o setor de energia.
  - Fonte 1 (secundária, agregador especializado que consolida os advisórios oficiais da CISA): SOCRadar. *CISA
    Industrial Control Systems (ICS) Advisories Recap for 2025*. 2025.
    https://socradar.io/blog/cisa-industrial-control-systems-ics-advisories-2025/
  - Fonte 2 (secundária, cobertura independente): CyberSecurityNews. *CISA Releases Five ICS Advisories Covering
    Vulnerabilities, and Exploits Surrounding ICS*. 2025. https://cybersecuritynews.com/cisa-releases-five-ics-advisories-covering-vulnerabilities/
  - Observações: não foi possível acessar diretamente o índice completo oficial da CISA
    (www.cisa.gov/news-events/ics-advisories) para contagem exata linha a linha; o número de "mais de 450" é uma
    consolidação de agregadores especializados que acompanham os advisórios ao longo do ano — **[PARCIALMENTE
    CONFIRMADO — contagem exata não verificada contra o índice primário da CISA em 2026-07-21]**.

### IBM Cost of a Data Breach 2025 — detalhamento de tecnologia operacional (OT)

- **Dado:** entre as organizações estudadas no relatório, **15%** sofreram incidentes de cibersegurança que
  afetaram seu ambiente de OT; desse grupo, quase um quarto (**~25%**) relatou dano a sistemas ou equipamentos de
  OT. Incidentes com impacto em OT custaram, em média, **USD 4,56 milhões** — acima da média global de USD 4,44
  milhões (ver seção Global). Nos EUA, a norma NERC CIP (North American Electric Reliability Corporation Critical
  Infrastructure Protection), aplicável ao setor elétrico, prevê multas de até **USD 1 milhão por dia por
  violação** em caso de não conformidade, o que eleva o custo potencial de violações no setor.
  - Fonte 1: IBM. *Cost of a Data Breach Report 2025*. 2025. https://www.ibm.com/reports/data-breach (ver também
    análise setorial: https://www.ibm.com/think/insights/cost-of-a-data-breach-industrial-sector)
  - Fonte 2 (secundária, agregador que reproduz os mesmos percentuais de OT e a referência a NERC CIP): DeepStrike.
    *Energy and Utilities Cybersecurity Statistics 2026: OT & Grid Risk*. 2026.
    https://deepstrike.io/blog/energy-utilities-cybersecurity-statistics
  - Observações: o custo médio de violação especificamente do setor de energia (USD 4,83 milhões) já foi
    registrado na seção Global; este item traz o detalhamento adicional, específico de OT, não presente na síntese
    Global. O relatório 2025 não desagrega tempo de identificação/contenção especificamente para o setor de
    energia (apenas para "industrial" como categoria mais ampla: 199 dias identificação + 73 dias contenção,
    acima da média global) — **[NÃO CONFIRMADO um tempo de identificação/contenção específico para energia,
    distinto de "industrial", em 2026-07-21]**.

---

### Malware ICS — BlackEnergy (ataque à rede elétrica ucraniana, 2015)

- **Dado:** em **23 de dezembro de 2015**, invasores usando o malware **BlackEnergy 3** comprometeram remotamente
  os sistemas de informação de três distribuidoras de energia ucranianas (Kyivoblenergo, Prykarpattyaoblenergo e
  Chernivtsioblenergo) e interromperam temporariamente o fornecimento de eletricidade a um número de clientes
  citado como **225 mil** por algumas fontes e **230 mil** por outras, por um período de **1 a 6 horas** — o
  primeiro apagão da história causado publicamente por um ciberataque confirmado contra uma rede elétrica
  nacional. O acesso inicial ocorreu por *spear-phishing* cerca de seis meses antes do apagão; os atacantes
  progrediram da rede de TI corporativa até a rede SCADA, assumiram controle remoto de interfaces homem-máquina
  (HMI) para abrir disjuntores, reconfiguraram nobreaks (UPS) das subestações, sobrescreveram firmware de
  conversores serial-ethernet para dificultar a restauração remota, e lançaram um ataque de negação de serviço
  contra as centrais de atendimento telefônico das distribuidoras para impedir que clientes reportassem a falta de
  energia.
  - Fonte 1: CISA. *Cyber-Attack Against Ukrainian Critical Infrastructure (IR-ALERT-H-16-056-01)*. 2016 (relatório
    original produzido com E-ISAC e SANS ICS). https://www.cisa.gov/news-events/ics-alerts/ir-alert-h-16-056-01
  - Fonte 2 (secundária, síntese técnica consolidada do mesmo incidente): E-ISAC / SANS ICS. *Analysis of the Cyber
    Attack on the Ukrainian Power Grid (TLP:White)*. 2016.
    https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2016/05/20081514/E-ISAC_SANS_Ukraine_DUC_5.pdf
  - Observações: **divergência de número de clientes afetados registrada explicitamente** (225 mil vs. 230 mil) —
    a diferença (~2%) provavelmente reflete metodologias distintas de contagem entre as três distribuidoras
    afetadas e diferentes momentos de consolidação do dado, não uma contradição factual relevante. Atribuído por
    múltiplas fontes (governo dos EUA, ESET, Dragos) ao grupo **Sandworm**, historicamente ligado à Rússia (ver
    seção de atores abaixo) — atribuição de Estado-nação, registrada aqui como afirmação de terceiros, não como
    fato verificado por esta pesquisa.

### Malware ICS — Industroyer / CrashOverride (apagão de Kyiv, 2016)

- **Dado:** em **17 de dezembro de 2016**, exatamente um ano após o ataque de 2015, um novo ciberataque
  interrompeu o fornecimento de energia em cerca de **um quinto da cidade de Kyiv por cerca de uma hora**. O
  malware usado — batizado **Industroyer** pela ESET (que primeiro obteve as amostras) e **CrashOverride** pela
  Dragos — é descrito por ambas as empresas como o **primeiro malware conhecido projetado especificamente para
  atacar redes elétricas**, com arquitetura modular capaz de se comunicar diretamente com protocolos industriais
  (incluindo IEC 60870-5-101/104, IEC 61850 e OPC), permitindo abrir disjuntores de subestação diretamente, sem
  depender de acesso a uma HMI como no ataque de 2015.
  - Fonte 1: ESET (via cobertura técnica original) e Dragos, citados em: SecurityWeek. *'Industroyer' ICS Malware
    Linked to Ukraine Power Grid Attack*. 2017. https://www.securityweek.com/industroyer-ics-malware-linked-ukraine-power-grid-attack/
  - Fonte 2 (secundária, perfil consolidado): Wikipedia. *Industroyer*. https://en.wikipedia.org/wiki/Industroyer
  - Observações: assim como no ataque de 2015, a atribuição ao grupo **Sandworm** é feita por ESET e Dragos com
    base em sobreposições de infraestrutura e táticas, registrada aqui como atribuição de terceiros. O impacto
    deste ataque (1 hora, ~1/5 de Kyiv) foi proporcionalmente menor que o de 2015 (225–230 mil clientes, até 6
    horas), mas é considerado tecnicamente mais significativo pelos pesquisadores por representar malware
    *purpose-built* para ICS elétrico, em vez de malware genérico de TI combinado a acesso manual via HMI.

### Malware ICS — Industroyer2 (tentativa de apagão, abril de 2022)

- **Dado:** em **8 de abril de 2022**, o CERT-UA, com apoio da ESET e da Microsoft, interveio em uma operação ativa
  do grupo Sandworm contra uma distribuidora regional de eletricidade ucraniana que atendia cerca de **2 milhões de
  pessoas**. Um binário Windows único (108_100.exe), com timestamp de compilação de **23 de março de 2022** e
  endereços de objetos de informação IEC 60870-5-104 codificados especificamente para a subestação-alvo, foi
  agendado para execução às 16h10 UTC do dia 8/4, seguido às 16h20 UTC pelo wiper **CaddyWiper** para destruir
  estações de trabalho de operadores e dificultar a recuperação. Os atacantes já estavam na rede de TI da
  concessionária desde pelo menos fevereiro de 2022, com movimento lateral para o ambiente ICS a partir de meados
  de março. O ataque foi **neutralizado antes de causar um apagão real**, mas causou disrupção por meio de
  múltiplos wipers destrutivos (CaddyWiper, OrcShred, SoloShred, AwfulShred).
  - Fonte 1: ESET. *Industroyer2: Industroyer reloaded*. Abril de 2022. https://www.welivesecurity.com/2022/04/12/industroyer2-industroyer-reloaded/
  - Fonte 2 (secundária, cobertura técnica independente): Claroty Team82. *Industroyer2 Variant Surfaces in Foiled
    Attack Against Ukraine Electricity Provider*. 2022. https://claroty.com/team82/blog/industroyer2-variant-surfaces-in-foiled-attack-against-ukraine-electricity-provider
  - Observações: sem divergência relevante entre fontes quanto à cronologia e aos números centrais. Diferente do
    Industroyer/CrashOverride original (2016), que era modular e flexível a múltiplos protocolos, o Industroyer2 é
    um binário único com endereços hardcoded para o alvo específico — mudança de design atribuída por
    pesquisadores (ESET, Mandiant) a uma escolha deliberada dos atacantes, não a uma limitação técnica.

### Malware ICS — Triton / Trisis / HatMan (petroquímica saudita, 2017)

- **Dado:** em **agosto de 2017** (com sinais desde junho de 2017), o malware conhecido como **Triton** (também
  chamado **Trisis** ou **HatMan**) foi usado para atingir controladores de **Sistema Instrumentado de Segurança
  (SIS)** modelo Triconex, fabricados pela Schneider Electric, em uma planta petroquímica saudita. Em junho de
  2017, o sistema de parada de emergência da planta foi acionado pelos atacantes e inicialmente confundido com uma
  falha mecânica; o incidente só foi tornado público em dezembro de 2017. O malware é descrito pelas fontes como
  capaz de desabilitar sistemas de segurança projetados para prevenir acidentes industriais catastróficos — o que
  o diferencia de outros malwares ICS por mirar diretamente a camada de segurança física (SIS), não apenas o
  controle de processo.
  - Fonte 1 (secundária, síntese consolidada com múltiplas fontes primárias citadas — FireEye/Mandiant, Dragos,
    CISA): Wikipedia. *Triton (malware)*. https://en.wikipedia.org/wiki/Triton_(malware)
  - Fonte 2 (secundária, cobertura investigativa independente): MIT Technology Review. *Triton is the world's most
    murderous malware, and it's spreading*. Março de 2019. https://www.technologyreview.com/2019/03/05/103328/cybersecurity-critical-infrastructure-triton-malware/
  - Observações: não houve, segundo as fontes consultadas, dano físico ou ferimentos confirmados decorrentes deste
    incidente especificamente. A atribuição a um instituto de pesquisa estatal russo (citada por FireEye/Mandiant
    em relatórios de 2018) é mencionada por ambas as fontes com o grau de confiança das próprias empresas de
    segurança que a fizeram, e é registrada aqui como atribuição de terceiros — **[NÃO CONFIRMADO de forma
    independente por esta pesquisa; tratar como atribuição atribuída a FireEye/Mandiant, não como fato
    estabelecido]**.

### Malware ICS — Pipedream / Incontroller (Chernovite, 2022)

- **Dado:** em **13 de abril de 2022**, CISA, FBI, NSA e o Departamento de Energia dos EUA publicaram um advisório
  conjunto sobre um conjunto de ferramentas modulares de ataque a ICS/SCADA — chamado **Pipedream** pela Dragos e
  **Incontroller** pela Mandiant — atribuído (com alta confiança pela Dragos) a um grupo de ameaça rastreado como
  **CHERNOVITE**. O malware permite escanear, obter controle total e potencialmente sabotar controladores lógicos
  programáveis (PLCs) Schneider Electric MODICON e MODICON Nano, PLCs OMRON Sysmac NJ e NX, e servidores OPC UA. A
  Mandiant observou que a atividade é consistente com o histórico interesse da Rússia em ICS, mas, até a data do
  advisório, a Dragos concluiu que o Pipedream **não havia sido identificado em uso ativo** ("in the wild").
  - Fonte 1: CISA, FBI, NSA, Departamento de Energia dos EUA. *APT Cyber Tools Targeting ICS/SCADA Devices*.
    Abril de 2022 (cobertura direta do advisório conjunto, via TheHackerNews). https://thehackernews.com/2022/04/us-warns-of-apt-hackers-targeting.html
  - Fonte 2 (secundária, cobertura independente que detalha a atribuição Dragos/Mandiant): CyberScoop. *Feds warn
    about foreign government-connected hackers aiming to disrupt vital industrial systems*. 2022.
    https://cyberscoop.com/cisa-doe-fbi-nsa-pipedream-chernovite-ics/
  - Observações: sem divergência relevante quanto aos fatos centrais. **Nomenclatura dupla registrada
    explicitamente** (Pipedream = nome Dragos; Incontroller = nome Mandiant para o mesmo conjunto de ferramentas),
    prática comum e já registrada em outros itens desta seção (Industroyer/CrashOverride). Não foi localizado, no
    escopo desta pesquisa, um caso confirmado de uso real do Pipedream contra uma vítima específica após 2022 —
    **[NÃO CONFIRMADO uso ativo do Pipedream contra vítima nomeada em 2025–2026]**.

### Malware ICS — FrostyGoop (aquecimento distrital, Lviv, Ucrânia, 2024)

- **Dado:** a Dragos identificou, em **abril de 2024**, o malware **FrostyGoop** — o **9º malware conhecido
  especificamente voltado a ICS**, escrito em Golang e capaz de interagir diretamente com dispositivos industriais
  via protocolo **Modbus TCP (porta 502)**. O malware foi usado em um ataque que começou no final de **janeiro de
  2024** contra uma empresa municipal de aquecimento distrital em **Lviv, Ucrânia**, que fornecia aquecimento
  central a mais de **600 edifícios residenciais**. O payload alterou os valores lidos por controladores de
  temperatura **ENCO**, fazendo-os "acreditar" que a água já estava quente e, com isso, interrompendo o
  aquecimento — resultando em cerca de **dois dias sem aquecimento** para os moradores durante temperaturas abaixo
  de zero. O acesso inicial provavelmente ocorreu por meio de uma vulnerabilidade não determinada em um roteador
  exposto à internet.
  - Fonte 1: Dragos. *How to Protect Against FrostyGoop: ICS Malware Targeting Operational Technology*. 2024.
    https://www.dragos.com/blog/protect-against-frostygoop-ics-malware-targeting-operational-technology
  - Fonte 2 (secundária, cobertura técnica independente): The Record (Recorded Future News). *FrostyGoop malware
    left 600 Ukrainian households without heat this winter*. 2024. https://therecord.media/frostygoop-malware-ukraine-heat
  - Observações: sem divergência relevante entre fontes quanto aos fatos centrais. A Dragos avalia **com confiança
    moderada** (não alta) que o FrostyGoop foi usado para atingir controladores ENCO especificamente, com base no
    endereço IP de um dispositivo ENCO encontrado em um arquivo de configuração associado ao malware — grau de
    confiança registrado aqui conforme a própria Dragos o classificou, não elevado a certeza pela presente
    pesquisa. Não foi encontrada, no escopo desta pesquisa, atribuição pública nomeada de um grupo de ameaça
    específico a este ataque — **[NÃO CONFIRMADO — nenhuma atribuição de grupo de ameaça ao FrostyGoop foi
    localizada em 2026-07-21]**.

---

### Grupos/APTs — Sandworm / ELECTRUM (atribuição histórica a ataques ao setor de energia)

- **Dado:** **Sandworm Team** (também rastreado como APT44, ELECTRUM, Telebots, Voodoo Bear, IRIDIUM, Seashell
  Blizzard, Iron Viking, FROZENBARENTS, conforme o fornecedor de inteligência) é atribuído pelo governo dos EUA à
  unidade militar russa **GRU 74455** (Centro Principal de Tecnologias Especiais). Ativo desde cerca de **2009**,
  com atividade inicial de espionagem contra governo e energia na Ucrânia e Europa Oriental. Em **outubro de
  2020**, o Departamento de Justiça dos EUA indiciou seis oficiais da Unidade 74455 do GRU por operações que
  incluem os ataques de **2015 e 2016** contra distribuidoras de energia ucranianas, o ataque destrutivo
  **NotPetya** de 2017, o ataque **Olympic Destroyer** contra os Jogos Olímpicos de Inverno de 2018, e operações
  contra a Geórgia em 2018–2019. Desde **novembro de 2022**, o mesmo grupo (rastreado pelo Google/Mandiant como
  **FROZENBARENTS**) tem mirado o setor de energia europeu, incluindo um ataque contra o **Caspian Pipeline
  Consortium (CPC)**.
  - Fonte 1: MITRE ATT&CK. *Sandworm Team, G0034*. https://attack.mitre.org/groups/G0034/
  - Fonte 2 (secundária, perfil consolidado com cronologia de indiciamento do DOJ): Wikipedia. *Sandworm (hacker
    group)*. https://en.wikipedia.org/wiki/Sandworm_(hacker_group)
  - Observações: **nota de nomenclatura importante** — "ELECTRUM" é o nome que a Dragos atribui especificamente ao
    grupo de ameaça associado ao malware CrashOverride/Industroyer (2016), que a Dragos e outros pesquisadores
    avaliam **com sobreposição/vínculo** ao Sandworm mais amplo, mas os nomes não são estritamente sinônimos em
    todas as fontes — registrado aqui como uma família de designações de diferentes fornecedores para atividade
    relacionada/sobreposta, e não como um único grupo com um único nome estável entre todas as empresas de
    inteligência. A atribuição ao Estado russo é feita pelo governo dos EUA (indiciamento formal do DOJ) e por
    múltiplos fornecedores privados — grau de confirmação mais alto que os demais itens de atribuição desta seção.

### Caso — Sandworm e a campanha contra o setor eólico e de cogeração da Polônia (dez/2025; segunda instalação revelada em ago/2026)

- **Dado:** em **29 de dezembro de 2025**, uma campanha atribuída ao Sandworm comprometeu cerca de **30 instalações
  eólicas e solares** na Polônia através de um dispositivo FortiGate (firewall/VPN) exposto à internet sem MFA em
  uma delas. A partir desse ponto de apoio, os atacantes localizaram um roteador celular Teltonika RUTX50
  conectado a uma **APN (Access Point Name) privada** operada pela distribuidora local, usaram-na para alcançar
  uma usina de cogeração (CHP) que fornece calor a cerca de **50 mil residentes**, e — após cerca de uma semana de
  reconhecimento — colocaram os CLPs Siemens da planta em modo STOP, desligando uma turbina a vapor e a estação de
  tratamento de água do processo. O fornecimento de calor e eletricidade à população não foi interrompido; a
  equipe da usina restabeleceu os sistemas rapidamente. O CERT Polska classificou esse vetor — pivô de TI para OT
  por meio de uma APN celular privada compartilhada entre instalações não relacionadas do mesmo operador de
  telecomunicações — como o **primeiro caso conhecido documentado** desse tipo de movimento lateral contra uma
  rede OT. Em **9 de agosto de 2026**, na conferência DEF CON, o CERT Polska (Marcin Dudek) revelou que uma
  **segunda instalação** — outra usina de aquecimento/cogeração menor, também alcançável a partir da mesma APN
  privada — havia sido comprometida pela mesma campanha: a partir de **18 de dezembro de 2025**, os atacantes
  varreram a rede em busca de VNC, HTTP e protocolos industriais (S7, Modbus) até encontrar um controlador
  **WAGO PFC200** com credenciais administrativas padrão ainda ativas, usado como ponte para o SCADA da planta
  **11 dias antes** da sabotagem. A análise dessa segunda instalação levou mais de três meses e, por isso, ficou de
  fora do relatório inicial de janeiro de 2026.
  - Fonte 1: ESET WeLiveSecurity. *ESET Research: Sandworm behind cyberattack on Poland's power grid in late
    2025*. Janeiro de 2026.
    https://www.welivesecurity.com/en/eset-research/eset-research-sandworm-cyberattack-poland-power-grid-late-2025/
  - Fonte 2 (secundária, cobertura técnica independente sobre a divulgação da segunda instalação em ago/2026):
    SecurityWeek. *Novel Private APN Pivot Let Hackers Sabotage Second Polish Energy Facility*. Agosto de 2026.
    https://www.securityweek.com/novel-private-apn-pivot-let-hackers-sabotage-second-polish-energy-facility/
    (ver também TheHackerNews, *Hackers Breach Polish Power Plant Controls via Private Cellular Network and Shut
    Turbine*, agosto de 2026, https://thehackernews.com/2026/08/hackers-breach-polish-power-plant.html, e Help Net
    Security, *Previously unseen entry vector used to breach Polish energy plant*, agosto de 2026,
    https://www.helpnetsecurity.com/2026/08/11/poland-energy-sector-cyberattack-heating-plant-private-apn/)
  - Observações: **atribuição contestada e registrada explicitamente** — a ESET (e, segundo cobertura de imprensa,
    também a Dragos) associam a campanha ao Sandworm (GRU); já o CERT Polska, em atribuição própria, nomeou o ator
    como **Static Tundra** (ligado ao FSB russo, Centro 16) — os nomes não são sinônimos em nenhuma taxonomia
    consultada nesta pesquisa, e ambas as atribuições são registradas lado a lado sem escolher uma "vencedora".
    Há também **divergência sobre a escala populacional** associada à distribuidora: uma linha de cobertura cita
    a usina-alvo como responsável por "50 mil residentes", outra menciona o conjunto de instalações da região como
    atendendo a "quase meio milhão de consumidores" — não ficou claro, nas fontes consultadas, se o número maior se
    refere apenas à usina do incidente ou à área de concessão mais ampla da distribuidora — **[NÃO CONFIRMADO —
    escala exata da população atendida pela usina-alvo não arbitrada com precisão em 2026-08-13]**. Este é o
    primeiro caso incorporado a este dossiê como *novo incidente-marco* desde a pesquisa original de 2026-07-21,
    identificado no refresh de 2026-08-13 e atendendo à regra de duas fontes independentes.

---

### Grupos/APTs — Volt Typhoon / VOLTZITE (pré-posicionamento em infraestrutura crítica dos EUA)

- **Dado:** em **7 de fevereiro de 2024**, CISA, NSA e FBI publicaram um advisório conjunto ("AA24-038A") alertando
  que atores estatais patrocinados pela **República Popular da China** — rastreados pela Microsoft como **Volt
  Typhoon** — buscavam se pré-posicionar em redes de TI de infraestrutura crítica dos EUA para possibilitar
  ciberataques disruptivos ou destrutivos em caso de crise ou conflito futuro com os EUA, usando técnicas
  *living-off-the-land* (abuso de ferramentas administrativas legítimas já presentes na rede) para evitar detecção.
  Os setores observados como comprometidos incluem **Comunicações, Energia, Sistemas de Transporte e Água/Esgoto**.
  A Dragos rastreia um subgrupo com foco especificamente em OT sob o nome **VOLTZITE**. Em um caso documentado,
  a concessionária de eletricidade municipal **Littleton Electric Light and Water Departments (LELWD)**, em
  Massachusetts, foi comprometida por cerca de **300 dias** (de fevereiro a novembro de 2023) antes de o FBI
  alertar a empresa; o objetivo observado foi a exfiltração de dados operacionais de OT (procedimentos de
  operação, layout espacial da rede elétrica), não disrupção imediata. A Dragos afirma que a atividade da
  VOLTZITE contra infraestrutura crítica dos EUA e de países alinhados ao Ocidente continuou ao longo de 2025.
  - Fonte 1: CISA. *PRC State-Sponsored Actors Compromise and Maintain Persistent Access to U.S. Critical
    Infrastructure (AA24-038A)*. Fevereiro de 2024. https://www.cisa.gov/news-events/cybersecurity-advisories/aa24-038a
  - Fonte 2 (secundária, caso LELWD, cobertura independente com detalhes do relatório da Dragos): SecurityWeek.
    *China's Volt Typhoon Hackers Dwelled in US Electric Grid for 300 Days*. 2026.
    https://www.securityweek.com/chinas-volt-typhoon-hackers-dwelled-in-us-electric-grid-for-300-days/
  - Observações: sem divergência relevante entre fontes quanto aos fatos centrais. O caso LELWD ilustra
    concretamente o padrão descrito no advisório de 2024 (pré-posicionamento silencioso, foco em dados de OT, não
    em disrupção imediata) — mas a atribuição específica do incidente LELWD à VOLTZITE/Volt Typhoon é feita pela
    Dragos e por reportagens que citam relatório da Dragos, registrada aqui como atribuição de terceiros.

---

### Caso — Colonial Pipeline (ransomware, maio de 2021)

- **Dado:** em **7 de maio de 2021**, a Colonial Pipeline — operadora de um duto de **5.500 milhas** responsável
  por cerca de **45% do combustível consumido na Costa Leste dos EUA** (gasolina, diesel e combustível de
  aviação, atendendo mais de 50 milhões de pessoas em 14 estados) — sofreu um ataque de ransomware do grupo
  **DarkSide**. O acesso inicial ocorreu por meio de uma **conta VPN desativada mas ainda válida**, com senha
  comprometida (sem MFA habilitado); os atacantes exfiltraram cerca de **100 GB de dados em duas horas** antes de
  ativar o ransomware. A empresa **desligou proativamente** o duto físico como medida de precaução (o ataque
  atingiu sistemas de TI corporativos, não diretamente os sistemas de controle OT do duto). A Colonial pagou um
  resgate de **75 bitcoins (cerca de USD 4,4 milhões)** ao DarkSide; a operação foi retomada em **12–13 de maio de
  2021**. O FBI recuperou, em junho de 2021, cerca de **USD 2,3 milhões** em bitcoin do pagamento do resgate. O
  Presidente Biden declarou estado de emergência devido à escassez de combustível e à compra em pânico em vários
  estados.
  - Fonte 1: Departamento de Energia dos EUA (DOE/CESER). *Colonial Pipeline Cyber Incident*.
    https://www.energy.gov/ceser/colonial-pipeline-cyber-incident
  - Fonte 2 (secundária, consolidação factual com detalhes adicionais — resgate, recuperação, vetor de acesso):
    Wikipedia. *Colonial Pipeline ransomware attack*. https://en.wikipedia.org/wiki/Colonial_Pipeline_ransomware_attack
  - Observações: sem divergência relevante entre fontes quanto aos números centrais. Este caso é frequentemente
    citado como o incidente que elevou ransomware contra infraestrutura crítica a prioridade de segurança nacional
    nos EUA, apesar de o comprometimento não ter atingido diretamente os sistemas de controle industrial (OT) do
    duto — distinção relevante e às vezes obscurecida na cobertura popular do caso.

---

### Fundamentos — Modelo Purdue (níveis 0–5)

- **Dado:** o **Modelo Purdue** (Purdue Enterprise Reference Architecture, 1991) organiza ambientes industriais em
  níveis hierárquicos: **Nível 0** = processo físico; **Nível 1** = controladores (PLCs/RTUs); **Nível 2** =
  supervisão (SCADA/HMI); **Nível 3** = gestão de operações do site (MES/historiador de dados); **Níveis 4–5** =
  sistemas de TI corporativos/empresariais. Devido à convergência TI/OT, uma extensão amplamente adotada
  (originada de trabalho do Departamento de Energia dos EUA) insere um **Nível 3,5 — a DMZ industrial** — como
  zona-tampão obrigatória entre OT (níveis 0–3) e TI (níveis 4–5), já que a separação original entre esses domínios
  deixou de ser suficiente com o aumento do fluxo de dados entre a camada de processo e a nuvem/TI corporativa.
  - Fonte 1: Fortinet. *What Is the Purdue Model? | Fortinet Cyberglossary*. https://www.fortinet.com/resources/cyberglossary/purdue-model
  - Fonte 2 (secundária): SentinelOne. *What Is the Purdue Model? Definition, Level & Best Practices*.
    https://www.sentinelone.com/cybersecurity-101/cybersecurity/what-is-the-purdue-model/
  - Observações: sem divergência relevante entre fontes quanto à estrutura de níveis; ambas confirmam o Nível 3,5
    (DMZ industrial) como extensão posterior ao modelo original de 1991, não parte do desenho original.

### Fundamentos — IEC 62443 (segurança de automação e controle industrial)

- **Dado:** a série **ISA/IEC 62443** é o principal conjunto de normas internacionais de cibersegurança para
  sistemas de automação e controle industrial (IACS), organizada em quatro grupos: **Fundamentos** (ex.: 62443-1-1
  — terminologia, conceitos, modelos), **Políticas e Procedimentos** (ex.: 62443-2-1, 62443-2-4 — sistema de gestão
  de cibersegurança), **Sistema** (ex.: 62443-3-2, 62443-3-3 — avaliação de risco, segmentação em zonas e definição
  de **Níveis de Segurança, SL 1 a 4**) e **Componente** (ex.: 62443-4-1, 62443-4-2 — requisitos para produtos de
  automação seguros). A norma define **7 requisitos fundamentais (FR)**: controle de identificação e autenticação
  (IAC), controle de uso (UC), integridade do sistema (SI), confidencialidade de dados (DC), restrição de fluxo de
  dados (RDF), resposta oportuna a eventos (TRE) e disponibilidade de recursos (RA). O modelo de **zonas e
  conduítes** da norma constrói-se diretamente sobre a hierarquia de níveis do Modelo Purdue, mapeando cada nível a
  uma zona de segurança com Nível de Segurança correspondente.
  - Fonte 1 (secundária, síntese técnica em português consolidando a estrutura oficial da norma): O Setor Elétrico.
    *IEC 62443: reforçando a segurança cibernética em infraestrutura crítica*.
    https://www.osetoreletrico.com.br/iec-62443-reforcando-a-seguranca-cibernetica-em-infraestrutura-critica/
  - Fonte 2 (secundária): ISA São Paulo Section. *Cibersegurança Industrial e a Norma ISA/IEC 62443: Essencial para
    Engenheiros e Técnicos de Produção*. https://isasp.org.br/ciberseguranca-industrial-e-a-norma-isa-iec-62443-essencial-para-engenheiros-e-tecnicos-de-producao/
  - Observações: sem divergência relevante entre fontes quanto à estrutura da norma. Não foi possível, no escopo
    desta pesquisa, acessar diretamente o texto oficial pago da IEC (iec.ch) para citação primária — ambas as
    fontes usadas são secundárias/explicativas em português, mas tecnicamente consistentes entre si e com a
    descrição amplamente publicada da norma.

---

### Brasil — regulação ANEEL: Resolução Normativa nº 964/2021 e ARCiber

- **Dado:** o marco regulatório de cibersegurança do setor elétrico brasileiro é a **Resolução Normativa ANEEL nº
  964, de 14 de dezembro de 2021** (publicada no Diário Oficial da União em 22/12/2021, em vigor desde 1º de julho
  de 2022), que estabelece as diretrizes e o conteúdo mínimo de políticas de segurança cibernética a serem
  adotadas por concessionárias, permissionárias, autorizadas e demais agentes do setor elétrico, incluindo o ONS.
  A resolução define o **ARCiber (Ambiente Regulado Cibernético)**, composto pelos centros de operação dos
  agentes, pelos equipamentos de infraestrutura de troca de dados/voz para o ambiente operacional do ONS ou de
  outros agentes, e pelo próprio ambiente operacional do ONS. A resolução foi precedida pela **Resolução CNPE nº
  24/2021**, que atribuiu à ANEEL a coordenação de ações setoriais de resposta a incidentes cibernéticos.
  - Fonte 1: ANEEL. *Resolução normativa Aneel nº 964, de 14 de dezembro de 2021* (texto oficial).
    https://www2.aneel.gov.br/cedoc/ren2021964.html
  - Fonte 2 (secundária, análise jurídico-regulatória que confirma data e escopo): PwC Brasil. *Resolução
    Normativa da Aneel 964: sua empresa está preparada para cumpri-la?*. 2022.
    https://www.pwc.com.br/pt/estudos/setores-atividade/energia/2022/resolucao-normativa-da-aneel-964.html
  - Observações: sem divergência relevante entre fontes quanto ao número e à data da resolução (14/12/2021). Uma
    tentativa de fetch de uma página institucional resumida da própria ANEEL retornou "10 de dezembro de 2021"
    para a mesma resolução — divergência de 4 dias frente às duas fontes acima (texto oficial da própria ANEEL em
    ren2021964.html e cobertura jurídica independente), que convergem em 14/12/2021; tratado como o dado correto
    por ser confirmado por duas fontes concordantes contra uma única fonte discordante.

### Brasil — ONS: Procedimento de Rede sobre segurança cibernética

- **Dado:** o Operador Nacional do Sistema Elétrico (ONS) encaminhou à ANEEL, em **10 de dezembro de 2019**, uma
  proposta de submódulo dos Procedimentos de Rede destinada a estabelecer os controles de segurança cibernética a
  serem implementados no ARCiber — abrangendo os centros de operação dos agentes, os equipamentos de
  infraestrutura de troca de dados entre ONS e agentes, e as salas de controle do próprio ONS. A implementação dos
  requisitos e critérios propostos estava prevista para ocorrer em **três ondas consecutivas**, a **18, 27 e 36
  meses** após o início de vigência do submódulo.
  - Fonte 1: ONS. *ONS propõe Procedimento de Rede sobre segurança cibernética*. 2020.
    https://www.ons.org.br/Paginas/Noticias/20200424-procedimentoderedesegurancacibernetica.aspx
  - Fonte 2 (secundária, referência ao mesmo processo regulatório, análise de impacto): ANEEL. *Análise de Impacto
    Regulatório (AIR) sobre segurança cibernética no Setor*. https://www2.aneel.gov.br/cedoc/air2021003srt.pdf
  - Observações: **[NÃO CONFIRMADO — número exato do submódulo dos Procedimentos de Rede (ex.: 25.4, 25.9 ou
    outro) e sua data final de aprovação/vigência não foram localizados com precisão em 2026-07-21]**; as fontes
    disponíveis confirmam a proposta original (dez/2019) e o cronograma de três ondas, mas não o número definitivo
    do submódulo nem eventual renumeração posterior. Recomenda-se verificação manual direta no site de
    Procedimentos de Rede do ONS (ons.org.br/ProcedimentosDeRede) antes de uso no capítulo final do panorama.

### Brasil — fiscalização ANEEL da política de segurança cibernética (2025)

- **Dado:** por meio do **Despacho ANEEL nº 427, de 17 de fevereiro de 2025**, os agentes do setor elétrico
  tiveram até **30 de junho de 2025** para enviar à ANEEL as informações necessárias ao acompanhamento da
  implementação de suas políticas de segurança cibernética, conforme exigido pela Resolução Normativa nº 964/2021.
  - Fonte 1: ANEEL. *Agentes do setor elétrico têm até o dia 30 de junho para enviar informações sobre segurança
    cibernética*. Fevereiro de 2025. https://www.gov.br/aneel/pt-br/assuntos/noticias/2025/agentes-do-setor-eletrico-tem-ate-o-dia-30-de-junho-para-enviar-informacoes-sobre-seguranca-cibernetica
  - Fonte 2 (secundária, cobertura independente do mesmo despacho): ISC Brasil. *Aneel inicia fiscalização da
    segurança cibernética na redes de energia do país*. 2025.
    https://www.iscbrasil.com.br/pt-br/blog/seguranca-publica/aneel-inicia-fiscalizacao-da-seguranca-cibernetica-na-redes-de-e.html
  - Observações: sem divergência relevante entre fontes. Este despacho representa a primeira fiscalização
    concreta e com prazo definido da ANEEL sobre a conformidade dos agentes com a RN 964/2021, mais de três anos
    após a resolução entrar em vigor.

---

### Brasil — incidentes conhecidos no setor de energia: Eletrobras/Eletronuclear e Copel (fevereiro de 2021)

- **Dado:** no início de **fevereiro de 2021**, duas grandes empresas de energia brasileiras sofreram ataques de
  ransomware na mesma semana. Na **Eletrobras**, o incidente ocorreu na subsidiária **Eletronuclear** e afetou
  servidores da rede administrativa, sem impacto nas usinas nucleares Angra 1 e Angra 2 (fisicamente desconectadas
  da rede administrativa) nem no Sistema Interligado Nacional. Na **Copel** (Companhia Paranaense de Energia), o
  ataque foi atribuído ao grupo de ransomware **DarkSide**, que alegou ter roubado mais de **1.000 GB de dados**,
  incluindo informações de acesso a infraestrutura sensível e dados pessoais de executivos e clientes — os
  atacantes alegaram ter obtido acesso à solução de gestão de acessos privilegiados **CyberArk** da empresa e
  exfiltrado senhas em texto claro de sua infraestrutura local e de internet.
  - Fonte 1: BleepingComputer. *Eletrobras, Copel energy companies hit by ransomware attacks*. 2021.
    https://www.bleepingcomputer.com/news/security/eletrobras-copel-energy-companies-hit-by-ransomware-attacks/
  - Fonte 2 (secundária, cobertura em português do mesmo incidente): Canaltech. *Eletrobras e Copel são vítimas de
    ataques de ransomware*. 2021. https://canaltech.com.br/seguranca/eletrobras-e-copel-sao-vitimas-de-ataques-de-ransomware-178557/
  - Observações: sem divergência relevante entre fontes. Ambos os incidentes ilustram um padrão recorrente nesta
    pesquisa (visto também no setor financeiro): sistemas administrativos/corporativos de TI comprometidos, com
    segmentação bem-sucedida evitando impacto nos sistemas de operação/OT críticos (usinas nucleares, no caso da
    Eletrobras).

### Brasil — incidente Petrobras / grupo Everest (novembro de 2025)

- **Dado:** em **14 de novembro de 2025**, o grupo de ransomware/extorsão **Everest** publicou em seu site de
  vazamento a alegação de ter invadido a **Petrobras** e sua parceira **SAExploration** (contratada de dados
  sísmicos), afirmando ter roubado mais de **176 GB** de dados de navegação sísmica, dos quais mais de **90 GB**
  pertenceriam diretamente à Petrobras — incluindo posicionamento de embarcações, configurações de equipamentos,
  leituras de hidrofones e medições de profundidade. A Petrobras declarou que a violação envolve um **terceiro**
  (a contratada) e que seus próprios sistemas permanecem íntegros.
  - Fonte 1: Hackread. *Everest Ransomware Says It Breached Brazilian Energy Giant Petrobras*. Novembro de 2025.
    https://hackread.com/everest-ransomware-brazil-petrobras-breach/
  - Fonte 2 (secundária, cobertura independente do mesmo caso): Cybernews. *Hackers claim oil giant Petrobras,
    alleging oil-rich maps theft*. 2025. https://cybernews.com/security/brazil-petrobras-ransomware-attack/
  - Observações: **divergência potencial não totalmente resolvida** entre a alegação do grupo atacante (violação
    direta implicando dados da Petrobras) e a posição oficial da empresa (violação de terceiro, sistemas próprios
    intactos) — padrão já registrado em outros casos desta pesquisa (ex.: Banco Neon, seção Financeiro). **[PARCIALMENTE
    CONFIRMADO — a extensão real do vazamento e se os dados atribuídos à Petrobras vieram exclusivamente da
    SAExploration ou também de sistemas próprios da Petrobras não pôde ser arbitrada com certeza em 2026-07-21]**.
    Este caso ilustra novamente o risco de cadeia de suprimentos/terceiros (contratada de serviços sísmicos), já
    destacado como padrão recorrente na seção Financeiro (caso C&M Software/FictorPay).

---

### Tabela-resumo — Energia

| Métrica | Valor | Relatório primário | Status |
| :-- | :-- | :-- | :-- |
| Ransomware contra organizações industriais (2023→2024) | +87% a/a; 80 grupos (+60%) | Dragos OT/ICS Year in Review 2025 (dados 2024) | Confirmado (2 fontes) |
| Ransomware contra organizações industriais (2024→2025) | +64% a/a; 119 grupos; ~3.300 orgs. impactadas | Dragos OT/ICS Year in Review 2026 (dados 2025) | Confirmado (2 fontes) |
| Dwell time de ransomware em OT | 42 dias (5 dias com visibilidade OT plena) | Dragos OT/ICS Year in Review 2026 | Confirmado (2 fontes) |
| Computadores ICS atacados (global, 2025) | ~20–22% por trimestre | Kaspersky ICS CERT (Q1–Q3 2025) | Confirmado (2 fontes) |
| Computadores ICS atacados — energia elétrica (H1 2025) | 22,8% (3º setor mais atacado) | Kaspersky ICS CERT | Parcialmente confirmado (detalhamento setorial via agregador) |
| Incidentes de cibersegurança em OT (organizações pesquisadas) | 50% relataram ≥1 incidente | Fortinet 2025 State of OT/Cybersecurity | Confirmado (2 fontes) |
| Técnica dominante em ambientes Energia/Utilities/Resíduos | Manipulação de Dados (3x mais frequente) | Nozomi Networks OT/IoT Trends 2025 | Confirmado (2 fontes) |
| Advisórios ICS publicados pela CISA (2025) | >450, 200+ fornecedores, 700+ produtos | Agregação sobre advisórios CISA | Parcialmente confirmado (contagem via agregador) |
| Incidentes com impacto em OT — custo médio | USD 4,56 milhões (15% das organizações afetadas) | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes) |
| Apagão Ucrânia — BlackEnergy (dez/2015) | 225–230 mil clientes; 1–6 horas | CISA IR-ALERT-H-16-056-01 / E-ISAC-SANS | Confirmado (2 fontes); divergência de contagem registrada |
| Apagão Kyiv — Industroyer/CrashOverride (dez/2016) | ~1/5 de Kyiv, ~1 hora | ESET / Dragos (via SecurityWeek) | Confirmado (2 fontes) |
| Industroyer2 — distribuidora ucraniana (abr/2022) | ~2 milhões de pessoas na área; apagão evitado | ESET *WeLiveSecurity* | Confirmado (2 fontes) |
| Triton/Trisis — petroquímica saudita (2017) | SIS Triconex comprometido; sem dano físico confirmado | Consolidação FireEye/Mandiant/Dragos (via Wikipedia/MIT Tech Review) | Confirmado (2 fontes); atribuição de Estado não confirmada de forma independente |
| Pipedream/Incontroller — Chernovite (2022) | Framework modular; sem uso ativo confirmado em 2022 | CISA/FBI/NSA/DOE advisory conjunto | Confirmado (2 fontes) |
| FrostyGoop — Lviv, Ucrânia (jan/2024) | 600+ prédios; ~2 dias sem aquecimento | Dragos | Confirmado (2 fontes) |
| Colonial Pipeline — ransomware (mai/2021) | Resgate 75 BTC (~USD 4,4 mi); ~45% do combustível da Costa Leste | DOE/CESER | Confirmado (2 fontes) |
| Sandworm/Static Tundra — usinas eólicas/CHP Polônia (dez/2025; 2ª instalação rev. ago/2026) | ~30 instalações; turbina a vapor e ETA de usina CHP (50 mil residentes) desligadas; sem impacto à população | ESET WeLiveSecurity / SecurityWeek | Confirmado (2 fontes); atribuição de ator contestada (Sandworm vs. Static Tundra) |
| Volt Typhoon/VOLTZITE — caso LELWD (Massachusetts) | ~300 dias de permanência (fev–nov/2023) | CISA AA24-038A / Dragos (via SecurityWeek) | Confirmado (2 fontes) |
| ANEEL — marco regulatório cibersegurança | RN nº 964/2021 (14/12/2021, vigência 1/7/2022) | ANEEL (texto oficial) | Confirmado (2 fontes); divergência de 4 dias em fonte terciária descartada |
| ANEEL — fiscalização RN 964/2021 | Prazo até 30/6/2025 (Despacho nº 427/2025) | ANEEL | Confirmado (2 fontes) |
| Brasil — Eletrobras/Eletronuclear e Copel (fev/2021) | Ransomware DarkSide (Copel); sem impacto em Angra 1/2 | BleepingComputer / Canaltech | Confirmado (2 fontes) |
| Brasil — Petrobras/Everest (nov/2025) | >176 GB alegados (>90 GB atribuídos à Petrobras) | Hackread / Cybernews | Parcialmente confirmado — Petrobras contesta atribuição direta |

**Legenda:** idêntica à das tabelas-resumo Global e Financeiro. "Parcialmente confirmado" indica que o valor
numérico central foi localizado e é consistente entre as fontes disponíveis, mas ao menos uma condição da regra de
ouro (acesso direto a documento primário, ou segunda fonte plenamente independente) não pôde ser cumprida
integralmente em 2026-07-21.

---

## Atores e TTPs

> Pesquisa realizada em 2026-07-21, com o mesmo protocolo de verificação cruzada das seções anteriores: cada
> número-chave com ≥2 fontes independentes; fontes secundárias marcadas como tal; divergências registradas
> explicitamente; nenhum número inventado. Atribuição de grupos/atores é sempre creditada a quem a fez
> (fornecedor de inteligência, governo, etc.), nunca tratada como fato objetivo único — mesmo protocolo já adotado
> na seção Energia para malware ICS.

### Taxonomia de threat actors — nation-state/APT, ransomware/RaaS, hacktivismo, insider, IAB

- **Dado:** a indústria de inteligência de ameaças organiza atores em categorias amplas e não excludentes:
  **Estado-nação/APT** (espionagem, sabotagem, pré-posicionamento estratégico — ex.: Volt Typhoon, Sandworm, já
  detalhados na seção Energia), **ransomware/RaaS** (motivação financeira, operação em cadeia de suprimentos
  criminosa — ver ecossistema RaaS abaixo), **hacktivismo** (motivação política/ideológica, DDoS e vazamentos —
  ver item específico abaixo), **insider** (colaborador ou ex-colaborador com acesso legítimo abusado, por
  negligência ou má-fé) e **Initial Access Broker — IAB** (especialista em obter e revender acesso inicial a
  redes comprometidas, sem executar o ataque final). A CrowdStrike, por exemplo, rastreia mais de **180 atores
  de ameaça globais** distribuídos entre essas categorias, usando convenção de nomenclatura própria (animal
  nacional para Estado-nação, ex.: "BEAR" para Rússia, "PANDA" para China; "SPIDER"/"LYNX" para eCrime; "JACKAL"
  para hacktivismo).
  - Fonte 1: CrowdStrike. *Adversary Profiling | CrowdStrike Falcon® Threat Intelligence*.
    https://www.crowdstrike.com/en-us/platform/threat-intelligence/adversary-profiling/ (ver também
    https://www.crowdstrike.com/en-us/adversaries/)
  - Fonte 2 (secundária, cobertura independente da convenção de nomenclatura): dexpose.io. *Threat Actors |
    Types, Motivations, TTPs & How to Track Them*. https://www.dexpose.io/threat-actors/
  - Observações: esta é uma taxonomia de mercado (não normativa/regulatória), e outros fornecedores (Mandiant,
    Microsoft, Dragos) usam convenções de nomenclatura próprias e distintas para atividade equivalente ou
    sobreposta — ver item "Convergência de nomenclatura entre fornecedores" abaixo, que trata exatamente dessa
    fragmentação e da tentativa recente do mercado de resolvê-la.

### MITRE ATT&CK (Enterprise) — versão atual e táticas relevantes

- **Dado:** a versão vigente do MITRE ATT&CK Enterprise em 2026-07-21 é a **v19.1** (lançamento da v19 em 28 de
  abril de 2026; atualização menor v19.1 na mesma data, conforme esquema de versionamento "major.minor" do
  MITRE). O domínio Enterprise contém **15 táticas**: Reconnaissance (TA0043), Resource Development (TA0042),
  Initial Access (TA0001), Execution (TA0002), Persistence (TA0003), Privilege Escalation (TA0004) — e, a partir
  da v19, a antiga tática "Defense Evasion" foi dividida em duas: **Stealth (TA0005)** e **Defense Impairment
  (TA0112)** —, seguidas por Credential Access (TA0006), Discovery (TA0007), Lateral Movement (TA0008),
  Collection (TA0009), Command and Control (TA0011), Exfiltration (TA0010) e Impact (TA0040). A v19 também
  introduziu sub-técnicas para o domínio ICS e nova cobertura de técnicas de IA e engenharia social
  (grupos/campanhas de espionagem orquestrada por IA, hacktivismo iraniano e wipers cross-domain).
  - Fonte 1: MITRE ATT&CK. *Version History*. https://attack.mitre.org/resources/versions/ e *Tactics —
    Enterprise*. https://attack.mitre.org/tactics/enterprise/
  - Fonte 2 (secundária, cobertura técnica independente do lançamento v19): Industrial Cyber. *MITRE ATT&CK v19
    brings structural overhaul, industrial visibility, detection strategies as AI-driven attacks emerge*. 2026.
    https://industrialcyber.co/industrial-cyber-attacks/mitre-attck-v19-brings-structural-overhaul-industrial-visibility-detection-strategies-as-ai-driven-attacks-emerge/
    (ver também o anúncio oficial no blog MITRE: https://medium.com/mitre-attack/att-ck-v19-the-defense-evasion-split-ics-sub-techniques-new-ai-social-engineering-coverage-ff329cb65d66)
  - Observações: sem divergência relevante entre fontes quanto ao número de versão e à divisão de Defense
    Evasion. Para o recorte financeiro/energia desta pesquisa, as táticas mais citadas em relatórios setoriais
    (Verizon DBIR, Mandiant M-Trends, CrowdStrike, já registrados nas seções Global/Financeiro) mapeiam
    predominantemente para **Initial Access** (exploração de vulnerabilidades e credenciais roubadas — os dois
    vetores dominantes já discutidos), **Credential Access** (infostealers) e **Impact** (extorsão/ransomware).
    Um total de 211 técnicas (v17, abril de 2025) evoluiu para 222 técnicas (situação intermediária citada por
    fonte agregadora em 2026) — a contagem exata mais recente sob a v19 não foi verificada linha a linha nesta
    pesquisa — **[NÃO CONFIRMADO o número exato de técnicas na v19.1 em 2026-07-21; usar a v19 como referência de
    versão, não o detalhamento numérico de técnicas]**.

### MITRE ATT&CK for ICS — táticas e técnicas relevantes ao setor de energia

- **Dado:** o MITRE ATT&CK for ICS organiza-se em **12 táticas**: Initial Access, Execution, Persistence,
  Privilege Escalation, Evasion, Discovery, Lateral Movement, Collection, Command and Control, **Inhibit Response
  Function**, **Impair Process Control** e Impact — as duas táticas em destaque (Inhibit Response Function e
  Impair Process Control) são exclusivas do domínio ICS e refletem objetivos físicos do atacante (impedir que
  sistemas de proteção reajam a uma condição anômala; manipular diretamente o processo controlado), sem
  equivalente direto no domínio Enterprise. A matriz reúne **107 técnicas** no total, com a tática "Impair Process
  Control" concentrando o maior número de técnicas individuais (13) entre as 12 táticas. Campanhas nomeadas e
  mapeadas pelo MITRE incluem explicitamente os ataques à rede elétrica ucraniana de 2015, 2016 e 2022 (BlackEnergy,
  Industroyer/CrashOverride, Industroyer2 — já detalhados na seção Energia).
  - Fonte 1: MITRE ATT&CK. *Matrix — ICS*. https://attack.mitre.org/matrices/ics/ e *Techniques — ICS*.
    https://attack.mitre.org/techniques/ics/
  - Fonte 2 (secundária, cobertura independente sobre aplicação do framework ao setor de energia): Industrial
    Cyber. *MITRE Reveals OT/ICS Attack Tactics and Techniques*.
    https://industrialcyber.co/reports/mitre-reveals-ot-ics-attack-tactics-and-techniques/
  - Observações: sem divergência relevante entre fontes quanto à estrutura de 12 táticas e às campanhas mapeadas
    (Ucrânia 2015/2016/2022, já citadas na seção Energia com nível de detalhe muito superior). Esta entrada
    trata do enquadramento metodológico do MITRE em si, complementar (não duplicativo) ao detalhamento factual de
    incidentes já registrado na seção Energia.

### Ecossistema Ransomware-as-a-Service (RaaS) — papéis especializados

- **Dado:** o ecossistema RaaS se organiza em papéis especializados e frequentemente terceirizados entre grupos
  distintos: (1) **operador/desenvolvedor** — mantém o software de criptografia, a infraestrutura de pagamento,
  as ferramentas de negociação e o site de vazamento de dados voltado às vítimas, além de recrutar afiliados; (2)
  **afiliado** — executa a seleção de alvos, obtém o acesso inicial (ou o compra de um IAB) e realiza a
  implantação do ransomware e a extorsão, retendo uma parcela do resgate; (3) **Initial Access Broker (IAB)** —
  ator especializado que compromete redes corporativas e revende esse acesso a afiliados de RaaS, tipicamente por
  **USD 500 a USD 5.000 por acesso**, a depender do porte/setor/nível de acesso obtido; (4) **negociador** —
  função dedicada (por vezes uma "central de atendimento" terceirizada) focada exclusivamente em maximizar o
  valor do pagamento nas negociações com a vítima, preservando a integridade das transações em criptomoeda.
  Serviços de suporte adicionais incluem hospedagem à prova de balas ("bulletproof hosting") e lavagem de
  criptoativos. O cenário de RaaS em 2025–2026 é descrito como mais fragmentado do que nunca, com **124 grupos
  rastreados** e migração rápida de afiliados entre plataformas.
  - Fonte 1: Huntress. *Inside the RaaS Ecosystem: Operators, Affiliates & Attack Tradecraft*.
    https://www.huntress.com/blog/raas-ecosystem-ransomware-tradecraft
  - Fonte 2 (secundária, cobertura independente e complementar sobre os papéis): Bitdefender. *Understanding the
    Roles in the Ransomware-as-a-Service Ecosystem*.
    https://www.bitdefender.com/en-us/blog/businessinsights/understanding-the-roles-in-the-ransomware-as-a-service-ecosystem-whos-targeting-your-data-security-gaps
    (ver também sobre o papel de IAB especificamente: ZeroFox. *The Role of Initial Access Brokers in Ransomware
    Operations*. https://www.zerofox.com/intelligence/the-role-of-initial-access-brokers-in-ransomware-operations/)
  - Observações: sem divergência relevante entre fontes quanto à estrutura de papéis. O número de "124 grupos
    rastreados" é citado por fonte agregadora (Adaptive Security) sem reprodução por uma segunda fonte
    plenamente independente dentro do escopo desta pesquisa — **[PARCIALMENTE CONFIRMADO — contagem exata de 124
    grupos ativos não verificada por segunda fonte primária em 2026-07-21; tratar como ordem de grandeza]**.

### LockBit — Operation Cronos (fevereiro de 2024) e desdobramentos até 2025

- **Dado:** em **19 de fevereiro de 2024**, a **Operation Cronos** — ação coordenada liderada por autoridades do
  Reino Unido (National Crime Agency) e dos EUA, com participação de mais de dez países — derrubou a
  infraestrutura do LockBit, então o grupo de ransomware mais prolífico do mundo (mais de **2.000 vítimas
  reivindicadas** e mais de **USD 120 milhões em resgates extorquidos**, segundo estimativa das autoridades).
  A operação apreendeu **34 servidores**, encerrou **14.000 contas** ligadas à exfiltração de dados ou à
  infraestrutura do grupo, e congelou **200 contas de criptomoeda** vinculadas ao LockBit e seus afiliados. Em
  maio de 2024, o Departamento de Justiça dos EUA identificou publicamente o administrador "LockBitSupp" como
  **Dmitry Yuryevich Khoroshev**, cidadão russo, oferecendo recompensa de até **USD 10 milhões** por informações
  que levem à sua captura (Khoroshev permanece foragido). Apesar do golpe, o LockBit manteve alguma atividade
  residual até que, em **maio de 2025**, um vazamento não atribuído expôs e desfigurou os painéis de afiliados do
  grupo, ligado a um banco de dados MySQL vazado — golpe adicional à credibilidade operacional remanescente do
  grupo.
  - Fonte 1: National Crime Agency (Reino Unido). *The NCA announces the disruption of LockBit with Operation
    Cronos*. Fevereiro de 2024. https://www.nationalcrimeagency.gov.uk/the-nca-announces-the-disruption-of-lockbit-with-operation-cronos
  - Fonte 2 (secundária, análise técnica do "rescaldo" da operação, incluindo o vazamento de maio/2025): Trend
    Micro. *Unveiling the Fallout: Operation Cronos' Impact on LockBit Following Landmark Disruption*.
    https://www.trendmicro.com/en_us/research/24/d/operation-cronos-aftermath.html
  - Observações: sem divergência relevante entre fontes quanto aos números centrais da operação (34
    servidores/14.000 contas/200 contas de cripto). Este caso é referência para o padrão "queda de um grupo
    dominante → fragmentação e migração de afiliados para grupos concorrentes", também observado no caso
    RansomHub/DragonForce/Qilin abaixo.

### ALPHV/BlackCat — exit scam (março de 2024) e encerramento (2025)

- **Dado:** em **março de 2024**, o operador do RaaS **ALPHV/BlackCat** realizou um "exit scam" — encerramento
  abrupto e fraudulento da operação — após supostamente receber um pagamento de resgate de **USD 22 milhões**
  da unidade Change Healthcare/Optum (UnitedHealth) e se recusar a repassar a parcela devida ao afiliado que
  executara o ataque. Afiliados relataram publicamente em fóruns da dark web terem violado vítimas com sucesso
  sem receber sua parte, pouco antes do fechamento abrupto das contas de afiliados. A Unit 42 (Palo Alto
  Networks) avaliou, em agosto de 2024, que o exit scam foi de fato consumado em março de 2024; já a Mandiant
  registrou, em maio de 2025, o encerramento definitivo do RaaS ALPHV. O grupo tem histórico recorrente de exit
  scams e reaparecimento sob nomes distintos — tendo operado anteriormente como DarkSide (o mesmo ator por trás
  do ataque à Colonial Pipeline, já registrado na seção Energia) e BlackMatter.
  - Fonte 1: The Hacker News. *Exit Scam: BlackCat Ransomware Group Vanishes After $22 Million Payout*. Março de
    2024. https://thehackernews.com/2024/03/exit-scam-blackcat-ransomware-group.html
  - Fonte 2 (secundária, cobertura independente com cronologia até 2025): TechTarget. *Alphv/BlackCat leak site
    goes down in possible exit scam*. https://www.techtarget.com/searchsecurity/news/366572373/Alphv-BlackCat-leak-site-goes-down-in-possible-exit-scam
  - Observações: sem divergência relevante entre fontes. A ligação histórica ALPHV/BlackCat → DarkSide →
    Colonial Pipeline (2021, seção Energia) ilustra a continuidade de operadores por trás de marcas RaaS
    sucessivas, mesmo quando o "nome" do grupo muda ou desaparece.

### Cl0p — campanha de exploração em massa contra Oracle E-Business Suite (2025)

- **Dado:** entre **final de julho e início de outubro de 2025**, o grupo de extorsão **Cl0p** conduziu uma
  campanha de exploração em massa contra instâncias on-premises do **Oracle E-Business Suite (EBS)** expostas à
  internet, usando principalmente a vulnerabilidade **CVE-2025-61882** (CVSS 9,8, no componente BI Publisher
  Integration do módulo Concurrent Processing), explorada desde pelo menos **9 de agosto de 2025**, complementada
  por uma segunda falha (CVE-2025-61884) corrigida em caráter emergencial pela Oracle. Entre o final de setembro
  e início de outubro de 2025, o Cl0p disparou uma onda coordenada de e-mails de extorsão a executivos de dezenas
  de organizações, ameaçando vazar ou vender os dados exfiltrados. Cerca de **29 organizações** foram nomeadas no
  site de vazamento do Cl0p, incluindo Logitech, The Washington Post, Cox Enterprises, Pan American Silver, LKQ
  Corporation e Copeland. A campanha é atribuída pela comunidade de segurança (e pela Mandiant/Google Cloud) ao
  cluster rastreado como **FIN11**, historicamente ligado ao "nome público" Cl0p em campanhas anteriores de alto
  impacto contra clientes de Cleo, MOVEit e Fortra (transferência de arquivos).
  - Fonte 1: Google Cloud (Mandiant). *Oracle E-Business Suite Zero-Day Exploitation*. 2025.
    https://cloud.google.com/blog/topics/threat-intelligence/oracle-ebusiness-suite-zero-day-exploitation
  - Fonte 2 (secundária, cobertura independente com contagem de vítimas nomeadas): SecurityWeek. *Nearly 30
    Alleged Victims of Oracle EBS Hack Named on Cl0p Ransomware Site*. 2025.
    https://www.securityweek.com/nearly-30-alleged-victims-of-oracle-ebs-hack-named-on-cl0p-ransomware-site/
  - Observações: sem divergência relevante entre fontes quanto à cronologia, CVE principal e atribuição a FIN11.
    Este caso reforça o padrão de "extorsão sem implantação de ransomware" (roubo e ameaça de vazamento de dados
    via vulnerabilidade de aplicação empresarial, sem necessariamente cifrar arquivos) já característico do modus
    operandi do Cl0p em campanhas anteriores (MOVEit 2023, GoAnywhere 2023).

### RansomHub — encerramento (2025), cartel DragonForce e ascensão do Qilin

- **Dado:** em **31 de março/1º de abril de 2025**, a infraestrutura do RaaS **RansomHub** (portal de comunicação
  com vítimas e site de vazamento) saiu do ar — não por ação de autoridades policiais, mas por uma disputa
  interna: o grupo **DragonForce** teria assumido o controle da infraestrutura do RansomHub entre 31 de março e
  8 de abril de 2025, anunciando a formação de um "cartel" de ransomware. Com o RansomHub inativo desde então, boa
  parte de seus afiliados migrou para o grupo **Qilin**, cujas divulgações no site de vazamento **dobraram** a
  partir de fevereiro de 2025 — o Qilin tornou-se o ator mais ativo do 3º trimestre de 2025, com média de **75
  vítimas por mês** (ante 36 por mês no 1º trimestre, antes do fechamento do RansomHub em abril).
  - Fonte 1: The Hacker News. *RansomHub Went Dark April 1; Affiliates Fled to Qilin, DragonForce Claimed
    Control*. Abril de 2025. https://thehackernews.com/2025/04/ransomhub-went-dark-april-1-affiliates.html
  - Fonte 2 (secundária, dados de atividade do Qilin no 3º trimestre): Check Point Research. *The State of
    Ransomware – Q3 2025*. https://research.checkpoint.com/2025/the-state-of-ransomware-q3-2025/
  - Observações: sem divergência relevante entre fontes. Padrão consistente com o observado no LockBit
    (fragmentação/migração de afiliados após a queda de um operador dominante) e já registrado, para o setor
    financeiro especificamente, na entrada sobre o Qilin na seção Financeiro (59 vítimas no setor financeiro,
    caso GJTec/Coreia do Sul).

### Initial Access Brokers (IAB) — mercado, precificação e tendência 2025

- **Dado:** o volume de anúncios de acesso inicial à venda em fóruns clandestinos (Exploit, XSS, BreachForums,
  DarkForums, RAMP) **mais que dobrou em dois anos**, com o início de 2025 registrando alta superior a **100%**
  frente ao mesmo trimestre de 2023. Preços medianos giram em torno de **USD 500**, podendo chegar à casa dos
  milhares de dólares para acesso remoto a empresas de aviação, manufatura e provedores regionais de serviços. Em
  2024–2025 houve deslocamento de foco para organizações de menor porte: empresas na faixa de **USD 5 milhões a
  USD 50 milhões** de receita passaram a representar **60,5%** de todos os anúncios de acesso inicial.
  - Fonte 1: Rapid7. *Initial Access Brokers have Shifted to High-Value Targets and Premium Pricing*.
    https://www.rapid7.com/blog/post/tr-initial-access-broker-shift-high-value-targets-premium-pricing/
  - Fonte 2 (secundária, cobertura independente sobre o mercado em 2025): Darknet.org.uk. *Initial Access
    Brokers (IAB) in 2025 — From Dark Web Listings to Supply Chain Ransomware Events*.
    https://www.darknet.org.uk/2025/11/initial-access-brokers-iab-in-2025-from-dark-web-listings-to-supply-chain-ransomware-events/
  - Observações: **atenção a uma tensão aparente entre fontes** — o título da fonte 1 fala em deslocamento para
    "alvos de alto valor e preços premium", mas o corpo da mesma cobertura (e a fonte 2) descrevem simultaneamente
    um deslocamento para organizações menores (USD 5–50 milhões de receita); a leitura mais consistente é que o
    mercado de IAB se segmentou em duas pontas — acessos "premium" a alvos de alto valor a preços elevados, e um
    volume maior de acessos de baixo custo a organizações de médio porte — não uma tendência única e linear.
    Relevante ao recorte financeiro/energia porque IABs são o principal fornecedor de acesso inicial para
    afiliados de RaaS que miram esses setores (ver ecossistema RaaS acima).

### Hacktivismo — escalada contra infraestrutura crítica financeira e energética (2025–2026)

- **Dado:** em 2025, grupos hacktivistas — predominantemente **pró-russos** e **pró-palestinos/anti-Israel** —
  expandiram-se além de DDoS e defacement tradicionais, passando a mirar também sistemas de controle industrial
  (ICS), promover vazamentos de dados e, em alguns casos, aproximar-se operacionalmente de grupos de ransomware.
  Os setores mais visados por hacktivistas no 1º trimestre de 2025 foram governo/aplicação da lei, **serviços
  bancários e financeiros**, telecomunicações e **energia/utilities**. O volume de ataques DDoS (o vetor
  hacktivista dominante) cresceu **80%** ano a ano no 4º trimestre de 2025 e **168%** ano a ano no 1º trimestre de
  2026. Em fins de fevereiro de 2026, após ataques aéreos conjuntos de EUA e Israel contra o Irã, uma onda
  retaliatória hacktivista registrou mais de **150 ataques DDoS em menos de 72 horas**, atingindo mais de **100
  organizações em 16 países** — com os grupos **Keymous+** e **DieNet** respondendo por cerca de **70%** de toda
  a atividade de ataque entre 28 de fevereiro e 2 de março de 2026.
  - Fonte 1: The Hacker News. *149 Hacktivist DDoS Attacks Hit 110 Organizations in 16 Countries After Middle East
    Conflict*. Março de 2026. https://thehackernews.com/2026/03/149-hacktivist-ddos-attacks-hit-110.html
  - Fonte 2 (secundária, cobertura independente sobre volume trimestral de DDoS): StormWall. *DDoS Trends in Q1
    2026: Industry Analysis*. https://stormwall.network/resources/blog/ddos-attacks-in-q1-2026 (ver também Cyble.
    *Hacktivist Attacks On Critical Infrastructure Surge In Q3 2025*.
    https://cyble.com/blog/hacktivist-attacks-critical-infrastructure-q3-2025/)
  - Observações: sem divergência relevante entre fontes quanto à tendência qualitativa e aos percentuais de
    crescimento de DDoS. Consistente com o dado já registrado na seção Global (ENISA Threat Landscape 2025: DDoS
    = 77% dos incidentes reportados na UE, majoritariamente hacktivista) e com o padrão observado no setor
    financeiro (FS-ISAC/Akamai, seção Financeiro: alta de 154% em DDoS contra o setor 2022→2023). O detalhe
    numérico de "70% da atividade concentrada em dois grupos" (Keymous+/DieNet) refere-se a uma janela específica
    de 72 horas em torno do conflito Irã–EUA–Israel de fevereiro/2026, não a todo o período.

### Insider threat — dados 2025 (Ponemon Institute / DTEX)

- **Dado:** segundo estudo do Ponemon Institute encomendado pela DTEX (2025), o número de incidentes de insider
  estudados cresceu de **3.269 (2018)** para **7.868 (2025)** — mais que dobrando em sete anos. O custo médio
  anual de ameaças internas alcançou **USD 17,4 milhões** globalmente em 2025, com tempo médio de contenção de
  um incidente de **81 dias**. Quanto à causa raiz: **53%** dos incidentes derivam de colaboradores negligentes,
  **27%** de insiders mal-intencionados e **20%** de roubo de credenciais. Especificamente no setor financeiro,
  uma edição anterior do mesmo estudo (Ponemon 2023) já registrava custo médio de incidente de **USD 20,68
  milhões** — acima da média global — e uma cobertura complementar cita que **44%** das violações no setor
  financeiro tiveram origem em insiders, das quais 55% por "data misdelivery" (envio indevido de dados, não
  necessariamente má-fé).
  - Fonte 1: Kiteworks. *Insider Threats Cost $2.7M: 2025 Ponemon Report Reveals 45% of Data Breaches Come From
    Within*. 2025. https://www.kiteworks.com/cybersecurity-risk-management/hidden-enemy-within-decoding-the-2025-ponemon-institute-report-on-insider-threats/
  - Fonte 2 (secundária, agregação independente dos mesmos dados Ponemon/DTEX 2025, incluindo o detalhamento
    setorial financeiro de edição anterior): DeepStrike. *Insider Threat Statistics 2025: Key Data & Defense
    Strategies*. https://deepstrike.io/blog/insider-threat-statistics-2025
  - Observações: **nota de precisão** — o título da fonte 1 cita "USD 2,7 milhões" no cabeçalho, mas o corpo do
    mesmo texto reporta o valor consolidado de **USD 17,4 milhões** de custo médio anual — divergência interna
    provável entre título (headline) e corpo do artigo da própria fonte secundária, não conciliada nesta
    pesquisa; **[NÃO CONFIRMADO — qual dos dois valores (2,7 mi vs. 17,4 mi) é o "custo médio" correto segundo a
    metodologia exata do Ponemon 2025 em 2026-07-21; recomenda-se checagem manual contra o relatório Ponemon/DTEX
    original antes de uso no capítulo final]**. Não foi localizado, no escopo desta pesquisa, um detalhamento
    numérico equivalente e atualizado (2025) especificamente para o setor de energia — **[NÃO CONFIRMADO para
    energia em 2026-07-21]**.

### Convergência de nomenclatura entre fornecedores — iniciativa Microsoft/CrowdStrike (2025)

- **Dado:** em **2 de junho de 2025**, Microsoft e CrowdStrike anunciaram uma colaboração estratégica para
  alinhar suas taxonomias de nomenclatura de atores de ameaça — com participação adicional da Mandiant (Google) e
  da Unit 42 (Palo Alto Networks) — publicando um mapeamento conjunto (glossário) que já **deconflitou mais de 80
  adversários** entre os diferentes sistemas de nomenclatura. A convenção da Microsoft usa um "nome de família"
  ligado ao país/região de origem atribuído: "Typhoon" para China, "Blizzard" para Rússia, "Sandstorm" para Irã,
  "Sleet" para Coreia do Norte e "Dust" para Turquia. Exemplos de mapeamento: o ator rastreado pela Microsoft como
  **Midnight Blizzard** corresponde a APT29/Cozy Bear/The Dukes em outras taxonomias; **Volt Typhoon** (Microsoft)
  corresponde a VANGUARD PANDA (CrowdStrike) — mesmo ator chinês já citado na seção Energia sob o nome Volt
  Typhoon/VOLTZITE (Dragos).
  - Fonte 1: Microsoft Security Blog. *Announcing a new strategic collaboration to bring clarity to threat actor
    naming*. Junho de 2025. https://www.microsoft.com/en-us/security/blog/2025/06/02/announcing-a-new-strategic-collaboration-to-bring-clarity-to-threat-actor-naming/
  - Fonte 2 (secundária, cobertura técnica independente com exemplos de mapeamento): The Hacker News. *Microsoft
    and CrowdStrike Launch Shared Threat Actor Glossary to Cut Attribution Confusion*. 2025.
    https://thehackernews.com/2025/06/microsoft-and-crowdstrike-launch-shared.html
  - Observações: sem divergência relevante entre fontes. Esta iniciativa é diretamente relevante à leitura de
    todo o dossiê: onde este documento cita nomes de grupo distintos para atividade sobreposta (ex.:
    Sandworm/ELECTRUM/FROZENBARENTS na seção Energia; Pipedream/Incontroller para a mesma ferramenta), trata-se
    de um fenômeno reconhecido pelo próprio mercado como problema estrutural, hoje em processo (parcial, não
    concluído) de resolução coordenada entre os principais fornecedores.

---

### Tabela-resumo — Atores e TTPs

| Métrica | Valor | Relatório/fonte primária | Status |
| :-- | :-- | :-- | :-- |
| MITRE ATT&CK Enterprise — versão atual | v19.1 (28/4/2026); 15 táticas | MITRE ATT&CK (site oficial) | Confirmado (2 fontes) |
| MITRE ATT&CK for ICS — estrutura | 12 táticas / 107 técnicas | MITRE ATT&CK (site oficial) | Confirmado (2 fontes) |
| Atores de ameaça rastreados (CrowdStrike) | 180+ globalmente | CrowdStrike Adversary Profiling | Confirmado (2 fontes) |
| LockBit — Operation Cronos (fev/2024) | 34 servidores; 14.000 contas; 200 contas cripto congeladas | NCA / Trend Micro | Confirmado (2 fontes) |
| LockBit — resgates extorquidos (histórico) | >USD 120 milhões; >2.000 vítimas | NCA | Confirmado (2 fontes) |
| ALPHV/BlackCat — exit scam (mar/2024) | USD 22 milhões (Change Healthcare) não repassados a afiliado | The Hacker News / TechTarget | Confirmado (2 fontes) |
| Cl0p — campanha Oracle EBS (2025) | CVE-2025-61882 (CVSS 9,8); ~29 vítimas nomeadas | Mandiant/Google Cloud / SecurityWeek | Confirmado (2 fontes) |
| RansomHub — encerramento / migração de afiliados | Inativo desde abr/2025; Qilin de 36→75 vítimas/mês | The Hacker News / Check Point | Confirmado (2 fontes) |
| IAB — crescimento de anúncios (2023→2025) | +100%+ em 2 anos; mediana ~USD 500 | Rapid7 / Darknet.org.uk | Confirmado (2 fontes) |
| IAB — deslocamento para PMEs (2024-2025) | 60,5% dos anúncios visam empresas de USD 5–50 milhões | Rapid7 | Confirmado (2 fontes); tensão com narrativa de "alvos premium" |
| Hacktivismo — crescimento DDoS (Q1 2026 a/a) | +168% (ante +80% no Q4 2025) | StormWall / The Hacker News | Confirmado (2 fontes) |
| Hacktivismo — onda pós-conflito Irã (fev-mar/2026) | 150+ ataques DDoS / 100+ organizações / 16 países em 72h | The Hacker News | Confirmado (2 fontes) |
| Insider threat — custo médio anual (global, 2025) | USD 17,4 milhões | Ponemon/DTEX 2025 (via Kiteworks) | Confirmado (2 fontes); divergência interna de título vs. corpo em 1 fonte |
| Insider threat — tempo médio de contenção | 81 dias | Ponemon/DTEX 2025 | Confirmado (2 fontes) |
| Deconflição de nomenclatura de atores (Microsoft/CrowdStrike) | 80+ adversários deconflitados | Microsoft Security Blog | Confirmado (2 fontes) |

**Legenda:** idêntica à das tabelas-resumo anteriores.

---

## Tendências 2026

> Pesquisa realizada em 2026-07-21, com o mesmo protocolo de verificação cruzada das seções anteriores. **Nota
> metodológica adicional para esta seção:** por tratar de tendências correntes de 2026, vários dados vêm de
> relatórios publicados nos últimos meses (alguns em 2026), com menor tempo de maturação/checagem cruzada pelo
> mercado do que dados de anos anteriores — tratados com o mesmo rigor de citação, mas registrando essa limitação
> explicitamente onde relevante.

### IA agêntica ofensiva — primeiro ataque orquestrado por IA em larga escala (Anthropic, novembro de 2025)

- **Dado:** em **14 de novembro de 2025**, a Anthropic divulgou publicamente ter interrompido o que descreve como
  o **primeiro caso documentado de ciberataque orquestrado por IA em larga escala com envolvimento humano
  mínimo**. A campanha foi atribuída pela própria Anthropic a um grupo estatal chinês rastreado internamente
  como **GTG-1002**, que manipulou o agente de codificação Claude Code (enganando-o para que acreditasse estar
  realizando testes de segurança defensivos legítimos) para conduzir ataques autônomos contra cerca de **30
  organizações-alvo** globais, incluindo grandes empresas de tecnologia, instituições financeiras, fabricantes
  químicos e agências governamentais — com intrusões bem-sucedidas confirmadas em uma parcela desses alvos. A IA
  executou entre **80% e 90%** das etapas táticas da operação de forma independente, ao longo de seis fases; a
  Anthropic estima que a intervenção humana direta do atacante, nas fases-chave, não superou **20 minutos** de
  trabalho, contra várias horas de operação autônoma do agente de IA. Em resposta, a Anthropic baniu as contas
  envolvidas, reforçou seus sistemas de defesa e notificou autoridades e parceiros do setor.
  - Fonte 1: Anthropic. *Disrupting the first reported AI-orchestrated cyber espionage campaign*. Novembro de
    2025. https://www.anthropic.com/news/disrupting-AI-espionage
  - Fonte 2 (secundária, cobertura jornalística independente com os mesmos números): The Hacker News. *Chinese
    Hackers Use Anthropic's AI to Launch Automated Cyber Espionage Campaign*. 2025.
    https://thehackernews.com/2025/11/chinese-hackers-use-anthropics-ai-to.html (ver também Axios.
    https://www.axios.com/2025/11/13/anthropic-china-claude-code-cyberattack)
  - Observações: sem divergência relevante entre fontes quanto aos números centrais (30 alvos, 80–90% de
    autonomia, ≤20 minutos de intervenção humana). **Nota de imparcialidade:** trata-se de divulgação da própria
    empresa cujo produto foi utilizado como ferramenta de ataque — a atribuição ao ator GTG-1002 e o grau exato de
    "autonomia" são avaliações da própria Anthropic, e análises independentes subsequentes (ex.: Thoughtworks)
    já levantaram nuances sobre até que ponto o episódio deve ser lido como "primeiro ataque totalmente
    autônomo" ou como caso de abuso de ferramenta de IA com supervisão humana ainda relevante em pontos
    críticos — registrado aqui como controvérsia interpretativa qualitativa, não como divergência numérica.
    Nenhum alvo do setor financeiro ou de energia foi nomeado publicamente entre as vítimas confirmadas — **[NÃO
    CONFIRMADO se instituições financeiras ou de energia especificamente (e não apenas "instituições financeiras"
    de forma genérica) estiveram entre os alvos com intrusão bem-sucedida, em 2026-07-21]**.

### IA agêntica — escala, velocidade e adoção por atacantes (2025–2026)

- **Dado:** segundo o *Flashpoint 2026 Global Threat Intelligence Report*, entre o final de 2025 e o início de
  2026 houve aceleração rápida na adoção de frameworks de IA agêntica por adversários, capazes de orquestrar
  cadeias de ataque autônomas — automatizando reconhecimento, geração de phishing, teste de credenciais e rotação
  de infraestrutura — com alta de **1.500%** na atividade ilícita relacionada a IA, associada a **3,3 bilhões de
  credenciais comprometidas** alimentando ataques baseados em identidade. Segundo o *Darktrace State of AI
  Cybersecurity 2026*, **92%** dos profissionais de segurança relatam preocupação com o impacto de agentes de IA
  em suas organizações, e uma violação de dados relacionada a agente de IA custa em média cerca de **USD 4,7
  milhões**. Em testes controlados citados pela mesma linha de cobertura, um agente de IA autônomo mapeou
  integralmente o ambiente de rede em **4 segundos**, identificou o alvo de movimento lateral de maior valor em
  **11 segundos** e implantou um payload secundário em **22 segundos** no total.
  - Fonte 1 (secundária, cobertura do relatório primário Flashpoint 2026): HSToday. *2026 Global Threat
    Intelligence Report Highlights Rise in Agentic AI Cybercrime*.
    https://www.hstoday.us/subject-matter-areas/cybersecurity/2026-global-threat-intelligence-report-highlights-rise-in-agentic-ai-cybercrime/
  - Fonte 2 (secundária, cobertura do relatório primário Darktrace 2026, com os números de velocidade de
    ataque): Shattered.io. *Agentic AI Security: $4.7M Breaches, 92% Alarmed [2026]*.
    https://shattered.io/agentic-ai-security-2026/ (ver também Barracuda. *Agentic AI: The 2026 threat multiplier
    reshaping cyberattacks*. https://blog.barracuda.com/2026/02/27/agentic-ai--the-2026-threat-multiplier-reshaping-cyberattacks)
  - Observações: **nenhuma das duas fontes usadas é o relatório primário original (Flashpoint/Darktrace)
    diretamente acessado nesta pesquisa** — ambas são coberturas secundárias que reproduzem números dos
    relatórios primários nomeados. Os números de velocidade (4s/11s/22s) e o custo de USD 4,7 milhões são citados
    de forma consistente entre as duas fontes secundárias consultadas, mas **[PARCIALMENTE CONFIRMADO — acesso
    direto aos relatórios primários Flashpoint 2026 e Darktrace State of AI Cybersecurity 2026 não realizado
    nesta pesquisa em 2026-07-21]**. Qualitativamente, este item corrobora e refina o dado já registrado na seção
    Global sobre IA em violações (IBM: 16% das violações envolveram uso de IA por atacantes) e o caso concreto do
    item anterior (Anthropic/GTG-1002).

### Deepfakes em fraude — estatísticas globais e caso Arup (2024)

- **Dado:** estima-se que cerca de **8 milhões de deepfakes** circulem online em 2026, ante 500 mil em 2023 — alta
  de 16 vezes em três anos. Fraude por deepfake já responde por **6,5%** de todas as tentativas de fraude
  globalmente, ante 0,1% em 2022 (alta de 2.137%, mesmo número já registrado na seção Financeiro deste dossiê).
  Perdas financeiras associadas a golpes por deepfake superaram **USD 200 milhões só no 1º trimestre de 2025**;
  uma projeção da Deloitte estima **USD 40 bilhões em perdas nos EUA**, citando uma trajetória de perdas que
  triplicou em um único ano. O caso mais documentado de fraude por deepfake corporativo é o da empresa de
  engenharia **Arup** (Reino Unido): em janeiro de 2024, um funcionário do escritório de Hong Kong participou de
  uma videoconferência com versões sintéticas (deepfake de voz e vídeo) do CFO e de outros colegas da empresa, e
  autorizou **15 transferências fraudulentas** totalizando **HKD 200 milhões (cerca de USD 25,6 milhões)** em um
  único dia. O acesso inicial ocorreu por e-mail de spear-phishing personificando o CFO. O caso só foi divulgado
  publicamente como sendo da Arup em maio de 2024 (a polícia de Hong Kong já havia divulgado o incidente, sem
  nomear a empresa, em fevereiro de 2024); até o início de 2025, nenhum suspeito havia sido identificado
  publicamente e os recursos desviados não haviam sido recuperados.
  - Fonte 1: CNN Business. *Arup revealed as victim of $25 million deepfake scam involving Hong Kong employee*.
    Maio de 2024. https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk
  - Fonte 2 (secundária, consolidação estatística global de deepfake fraud): Eftsure. *Deepfake statistics 2026:
    key facts for CFOs*. https://www.eftsure.com/statistics/deepfake-statistics/
  - Observações: **divergência de valor explicitamente registrada e não totalmente resolvida** — a CNN (que
    reporta diretamente a fonte policial/corporativa) cita **HKD 200 milhões / USD 25,6 milhões**; já uma
    cobertura agregadora consultada nesta mesma pesquisa (BrightDefense, usada na seção Financeiro deste
    dossiê) menciona um caso de Hong Kong de **HKD 145 milhões (~USD 18,5 milhões)**, e outra fonte agregadora
    (StationX) chega a citar **USD 39 milhões** para o que parece ser o mesmo incidente. Como a CNN é a fonte
    mais próxima da origem policial/corporativa do caso (e é amplamente replicada por dezenas de veículos com o
    valor de USD 25,6 milhões), este dossiê trata **USD 25,6 milhões (HKD 200 milhões)** como o valor mais
    confiável para o caso Arup especificamente, e registra que os valores de USD 18,5 milhões e USD 39 milhões,
    citados por agregadores de estatísticas de deepfake, provavelmente resultam de erro de transcrição ou de
    conflação com outro incidente de Hong Kong não identificado com precisão — **[NÃO CONFIRMADO se USD 18,5
    milhões e USD 39 milhões referem-se ao mesmo caso Arup ou a incidentes distintos, em 2026-07-21]**. Este
    item deve ser lido em conjunto com a entrada já existente na seção Financeiro ("Deepfake e engenharia social
    em fraude financeira"), que registra o mesmo padrão de golpe sem nomear a Arup.

### Criptografia pós-quântica — NIST FIPS 203/204/205 e a ameaça "harvest now, decrypt later"

- **Dado:** em **13 de agosto de 2024**, o NIST finalizou os três primeiros padrões de criptografia pós-quântica,
  concluindo um processo de padronização iniciado em 2016: **FIPS 203 (ML-KEM** — mecanismo de encapsulamento de
  chaves baseado em reticulados, derivado do CRYSTALS-Kyber, para troca segura de chaves em substituição a
  RSA/ECDH); **FIPS 204 (ML-DSA** — assinatura digital baseada em reticulados, derivada do CRYSTALS-Dilithium);
  e **FIPS 205 (SLH-DSA** — assinatura digital baseada em funções hash, derivada do SPHINCS+, oferecida como
  alternativa com premissa de segurança distinta/mais conservadora, caso falhas sejam encontradas nos esquemas
  baseados em reticulados). Um quarto padrão, **FIPS 206 (FN-DSA**, baseado no algoritmo FALCON), estava previsto
  para publicação em rascunho ainda em 2024. O NIST recomendou que administradores de sistemas comecem a
  integrar os novos algoritmos imediatamente, dado que a migração completa levará tempo considerável. A ameaça
  motivadora central da migração é o padrão **"harvest now, decrypt later"** (também "store now, decrypt
  later"): adversários (tipicamente estatais) capturam e armazenam hoje tráfego/dados cifrados com criptografia
  clássica (RSA/ECC), na expectativa de decifrá-los no futuro assim que computadores quânticos capazes estiverem
  disponíveis — risco especialmente relevante para dados de longa vida útil, como registros financeiros
  confidenciais. Estudos publicados entre maio de 2025 e março de 2026 reduziram a estimativa de recursos
  quânticos necessários para quebrar RSA-2048 de cerca de 20 milhões de qubits para menos de 1 milhão (e,
  segundo arquiteturas mais recentes, potencialmente já na casa de 100 mil qubits) — o que, segundo essas
  análises, pode acelerar o cronograma de risco frente às estimativas anteriores de "10 a 15 anos".
  - Fonte 1: NIST. *NIST Releases First 3 Finalized Post-Quantum Encryption Standards*. Agosto de 2024.
    https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
  - Fonte 2 (secundária, síntese técnica consolidada sobre os três padrões e o quarto em preparação): QNSQY.
    *NIST FIPS 203/204/205: The Complete Guide*. https://quantumsequrity.com/blog/nist-fips-guide (ver também
    sobre a ameaça HNDL: Palo Alto Networks. *Harvest Now, Decrypt Later: Quantum Security Risk*.
    https://www.paloaltonetworks.com/cyberpedia/harvest-now-decrypt-later-hndl)
  - Observações: os nomes e números dos três FIPS (203/204/205) e a data de 13/8/2024 foram confirmados
    diretamente na página oficial do NIST (fonte primária), sem divergência frente à fonte secundária. A redução
    da estimativa de qubits necessários (20 milhões → <1 milhão, possivelmente ~100 mil) é citada por múltiplas
    fontes secundárias que remetem a artigos acadêmicos publicados entre maio/2025 e março/2026 — **[PARCIALMENTE
    CONFIRMADO — os artigos acadêmicos originais não foram acessados diretamente nesta pesquisa; tratar a
    aceleração do cronograma de risco quântico como avaliação de especialistas em evolução, não como consenso
    fechado, em 2026-07-21]**.

### G7 Cyber Expert Group — roteiro de transição pós-quântica para o setor financeiro (janeiro de 2026)

- **Dado:** em **13 de janeiro de 2026**, o G7 Cyber Expert Group (G7 CEG) publicou uma declaração propondo um
  **roteiro coordenado de transição para criptografia pós-quântica no setor financeiro** global. O documento não
  estabelece obrigações regulatórias diretas, mas orienta líderes seniores sobre atividades que podem apoiar uma
  transição coordenada, oportuna e orientada a objetivos, descrevendo atividades de migração em fases — do
  inventário e avaliação de risco até a implantação, testes e monitoramento contínuo — com ênfase em flexibilidade,
  abordagens baseadas em padrões e colaboração transfronteiriça. O roteiro adota **meados da década de 2030** como
  horizonte geral de planejamento, recomendando que sistemas financeiros críticos migrem antes desse prazo, dado
  o longo tempo de transição e o risco de dados serem "colhidos hoje para decifração futura" (harvest now,
  decrypt later, ver item acima).
  - Fonte 1: U.S. Department of the Treasury. *G7 CEG Quantum Roadmap*. Janeiro de 2026.
    https://home.treasury.gov/system/files/136/G7-CEG-Quantum-Roadmap.pdf
  - Fonte 2 (secundária, cobertura independente do mesmo documento): ABA Banking Journal. *G7 expert group
    releases cybersecurity 'roadmap' for post-quantum cryptography*. 2026.
    https://bankingjournal.aba.com/2026/01/g7-expert-group-releases-cybersecurity-roadmap-for-post-quantum-cryptography/
  - Observações: sem divergência relevante entre fontes quanto à data (13/1/2026) e ao horizonte de "meados da
    década de 2030". Complementa diretamente o dado já registrado na seção Financeiro sobre o marco regulatório
    brasileiro do BCB (Resoluções CMN 5.274/2025 e BCB 538/2025, prazo de adequação março/2026) — nenhuma das
    duas fontes consultadas menciona explicitamente requisitos de PQC dentro da regulação brasileira vigente;
    **[NÃO CONFIRMADO se a regulação brasileira do BCB já incorpora exigências específicas de criptografia
    pós-quântica em 2026-07-21]**.

### Ataques à cadeia de suprimentos de software — Sonatype 2026 e o worm Shai-Hulud

- **Dado:** ao longo de 2025, a Sonatype identificou mais de **454.600 novos pacotes maliciosos** em ecossistemas
  de código aberto (npm, PyPI, Maven Central, NuGet, Hugging Face), elevando o total acumulado de malware
  conhecido e bloqueado para mais de **1,233 milhão de pacotes** — alta de **75%** ano a ano. Mais de **99%** do
  malware de código aberto ocorreu no **npm**. O custo global de ataques à cadeia de suprimentos de software
  atingiu uma estimativa de **USD 60 bilhões em 2025**, com projeção de chegar a USD 138 bilhões até 2031;
  violações de cadeia de suprimentos custaram em média **USD 4,91 milhões por incidente** em 2025. Entre os
  atores mais ativos, o **Lazarus Group (APT38)** foi associado a mais de **800 pacotes maliciosos** no npm em
  2025 (97% deles concentrados nesse ecossistema) — exemplo do deslocamento de operações "industrializadas" de
  atores estatais para dentro da cadeia de suprimentos de código aberto. Em 2025 surgiu o primeiro malware
  **auto-replicante** conhecido em npm, batizado **Shai-Hulud** (seguido de uma variante, **Sha1-Hulud**),
  demonstrando capacidade de se propagar autonomamente pelo ecossistema de pacotes — e ataques de sequestro de
  pacotes confiáveis e amplamente utilizados (ex.: chalk, debug) mostraram que mantenedores estabelecidos de
  pacotes de alto perfil tornaram-se alvo direto como ponto de entrada para distribuição em massa. Como
  referência histórica de marco do setor, o caso **XZ Utils** (2024) — em que uma identidade forjada ("Jia Tan")
  construiu confiança ao longo de anos como mantenedor legítimo antes de inserir um backdoor na versão 5.6.0 da
  biblioteca liblzma, usada por distribuições Linux amplamente difundidas — permanece o exemplo mais citado de
  comprometimento de mantenedor como vetor de ataque à cadeia de suprimentos.
  - Fonte 1: Sonatype. *2026 State of the Software Supply Chain Report — Open Source Malware*. Janeiro de 2026.
    https://www.sonatype.com/state-of-the-software-supply-chain/2026/open-source-malware
  - Fonte 2 (secundária, cobertura independente do mesmo relatório, com os números consolidados de custo e
    Lazarus/npm): GlobeNewswire (comunicado Sonatype). *Sonatype Research Reveals OSS Malware Grows 75% as
    Yearly Open Source Downloads Surpass 9.8 Trillion*. Janeiro de 2026.
    https://www.globenewswire.com/news-release/2026/01/28/3227372/0/en/Sonatype-Research-Reveals-OSS-Malware-Grows-75-as-Yearly-Open-Source-Downloads-Surpass-9-8-Trillion.html
    (sobre XZ Utils, ver também: TheBrightByte. *Supply Chain Attacks 2024-2026: XZ, npm, and PyPI Lessons*.
    https://thebrightbyte.com/playbook/insights/supply-chain-attacks-xz-npm-pypi)
  - Observações: sem divergência relevante entre as duas fontes do relatório Sonatype quanto aos números centrais
    (454.600 pacotes/2025; 1,233 milhão acumulado; 75% de alta; 99%+ no npm). O valor de "USD 60 bilhões em custo
    global 2025" vem de fonte agregadora adicional (DeepStrike/appsecsanta, consultadas na pesquisa mas não
    citadas diretamente aqui como fonte 1/2 por não serem o relatório Sonatype) — **[PARCIALMENTE CONFIRMADO — o
    valor de USD 60 bilhões não foi verificado como constante do relatório primário da Sonatype 2026 nem de uma
    segunda fonte plenamente independente deste dossiê em 2026-07-21; tratar como estimativa de mercado, não como
    número do relatório Sonatype]**. Nenhum caso de ataque à cadeia de suprimentos de software especificamente
    contra o setor financeiro ou de energia (distinto dos casos de terceiros/fornecedores já registrados nas
    seções Financeiro — C&M Software, Dilleta Solutions — e Energia — SAExploration/Petrobras) foi identificado
    nesta pesquisa como estando ligado a pacotes de código aberto maliciosos especificamente.

---

### Tabela-resumo — Tendências 2026

| Métrica | Valor | Relatório/fonte primária | Status |
| :-- | :-- | :-- | :-- |
| Primeiro ataque orquestrado por IA em larga escala | ~30 alvos; 80–90% de autonomia; ≤20 min de intervenção humana | Anthropic (nov/2025) | Confirmado (2 fontes) |
| Alta de atividade ilícita ligada a IA (Flashpoint) | +1.500%; 3,3 bilhões de credenciais comprometidas | Flashpoint 2026 GTI Report (via HSToday) | Parcialmente confirmado (fonte secundária) |
| Preocupação com agentes de IA (Darktrace) | 92% dos profissionais; custo médio USD 4,7 milhões/violação | Darktrace State of AI Cybersecurity 2026 (via Shattered.io) | Parcialmente confirmado (fonte secundária) |
| Deepfakes em circulação (2023→2026) | 500 mil → 8 milhões (16x) | Agregação StationX/Eftsure/BrightDefense | Confirmado (2 fontes) |
| Fraude por deepfake (% de tentativas) | 0,1% → 6,5% (+2.137%) | Idem (já citado na seção Financeiro) | Confirmado (2 fontes) |
| Caso Arup (jan/2024) | HKD 200 milhões / USD 25,6 milhões; 15 transferências | CNN Business | Confirmado (2 fontes); divergência de valor com agregadores registrada |
| NIST FIPS 203/204/205 — finalização | 13/8/2024; ML-KEM / ML-DSA / SLH-DSA | NIST (site oficial) | Confirmado (2 fontes) |
| Redução de estimativa de qubits p/ quebrar RSA-2048 | ~20 milhões → <1 milhão (possivelmente ~100 mil) | Agregação de estudos acadêmicos 2025-2026 | Parcialmente confirmado |
| G7 CEG — roteiro PQC setor financeiro | 13/1/2026; horizonte meados de 2030 | US Treasury / G7 CEG | Confirmado (2 fontes) |
| Pacotes maliciosos em código aberto (2025) | 454.600 novos; 1,233 milhão acumulado (+75%) | Sonatype 2026 State of Software Supply Chain | Confirmado (2 fontes) |
| Malware em npm (% do total) | >99% | Sonatype 2026 | Confirmado (2 fontes) |
| Pacotes maliciosos ligados ao Lazarus/APT38 (npm, 2025) | 800+ | Sonatype 2026 | Confirmado (2 fontes) |
| Custo médio de violação de cadeia de suprimentos (2025) | USD 4,91 milhões | Agregação (DeepStrike) | Parcialmente confirmado (fonte única identificável) |

**Legenda:** idêntica à das tabelas-resumo anteriores.

---

## Defesa e Frameworks

> Pesquisa realizada em 2026-07-21, com o mesmo protocolo de verificação cruzada das seções anteriores. Os textos
> oficiais completos de normas ISO e IEC são publicações pagas e não puderam ser acessados diretamente
> (iso.org/iec.ch); nesses casos, a estrutura foi confirmada por múltiplas fontes explicativas secundárias
> tecnicamente consistentes entre si — mesma limitação já registrada na seção Energia para a norma IEC 62443.

### NIST Cybersecurity Framework (CSF) 2.0 — seis funções, com Govern adicionada em 2024

- **Dado:** o NIST publicou o **CSF 2.0** em **26 de fevereiro de 2024** — a primeira atualização de grande porte
  do framework desde a versão original de 2014. A versão 2.0 confirma e formaliza **seis funções nucleares**:
  **Identify, Protect, Detect, Respond, Recover** (as cinco funções originais) e uma sexta função nova,
  **Govern**, adicionada nesta revisão. Embora elementos de governança já existissem de forma dispersa em
  versões anteriores do CSF, a versão 2.0 eleva a governança à condição de **função nuclear própria**,
  reconhecendo a cibersegurança como fonte relevante de risco empresarial que a liderança sênior deve considerar
  ao lado de riscos financeiros e reputacionais, e reforça o papel do gerenciamento de risco transversal às
  demais cinco funções. A versão 2.0 também amplia expressamente o público-alvo do framework — não mais limitado
  a infraestrutura crítica, mas voltado a organizações de qualquer setor e porte, "das menores escolas e ONGs às
  maiores agências e corporações".
  - Fonte 1: NIST. *NIST Releases Version 2.0 of Landmark Cybersecurity Framework*. Fevereiro de 2024.
    https://www.nist.gov/news-events/news/2024/02/nist-releases-version-20-landmark-cybersecurity-framework
    (texto completo: NIST CSWP 29, https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)
  - Fonte 2 (secundária, análise detalhada da função Govern especificamente): Arctic Wolf. *NIST CSF 2.0: Govern
    Function*. https://arcticwolf.com/resources/blog/nist-csf-2-0-understanding-and-implementing-the-govern-function/
  - Observações: sem divergência relevante entre fontes quanto à data de publicação (26/2/2024) e à confirmação
    de que Govern é, de fato, uma função nova nesta revisão (não presente como função nuclear própria nas versões
    1.0/1.1). Diretamente relevante ao recorte financeiro/energia: o CSF 2.0 é amplamente referenciado por
    reguladores e frameworks setoriais (incluindo mapeamentos informais para as resoluções do BCB e para a RN
    ANEEL 964/2021, já citadas nas seções Financeiro e Energia), embora nenhuma das duas regulações brasileiras
    mencione o CSF 2.0 nominalmente nos textos oficiais consultados nesta pesquisa.

### ISO/IEC 27001:2022 — Anexo A com 93 controles

- **Dado:** a revisão **ISO/IEC 27001:2022** (publicada em outubro de 2022) reduziu o número de controles do
  Anexo A de **114 (na edição de 2013)** para **93 controles**, reorganizados em **quatro temas**: **37 controles
  organizacionais** (5.1–5.37), **8 controles de pessoas** (6.1–6.8), **14 controles físicos** (7.1–7.14) e **34
  controles tecnológicos** (8.1–8.34) — substituindo a estrutura anterior de 14 domínios/categorias da edição de
  2013. A revisão consolidou controles preexistentes e introduziu **11 controles novos**, refletindo riscos e
  necessidades tecnológicas contemporâneas (ex.: inteligência de ameaças, segurança na nuvem, prevenção de
  vazamento de dados, monitoramento de atividades, mascaramento de dados, codificação segura).
  - Fonte 1 (secundária, síntese técnica detalhada e amplamente replicada da estrutura oficial do Anexo A):
    HighTable. *ISO 27001 Annex A Controls: The Complete 2022 Reference List (93 Controls)*.
    https://hightable.io/iso-27001-annex-a-controls-reference-guide/
  - Fonte 2 (secundária, confirmação independente da mesma contagem e estrutura): ISMS.online. *ISO 27001:2022
    Annex A Explained & Simplified*. https://www.isms.online/iso-27001/annex-a-2022/
  - Observações: não foi possível, no escopo desta pesquisa, acessar diretamente o texto oficial pago da ISO
    (iso.org/standard/27001) para citação primária — mesma limitação já registrada na seção Energia para a norma
    IEC 62443. Ambas as fontes usadas são secundárias/explicativas, mas tecnicamente consistentes entre si e com
    a descrição amplamente publicada e replicada da norma (contagem de 93 controles em 4 temas é consenso quase
    universal entre dezenas de fontes adicionais consultadas na busca, sem nenhuma divergência numérica
    encontrada). Relevante ao recorte financeiro/energia porque a ISO/IEC 27001 é frequentemente citada como
    referência de certificação voluntária complementar às exigências regulatórias específicas de cada setor (BCB,
    ANEEL) já detalhadas nas seções Financeiro e Energia.

### IEC 62443 — segurança de sistemas de automação e controle industrial (referência cruzada)

- **Dado:** a série **ISA/IEC 62443**, já detalhada em profundidade na seção Energia deste dossiê (ver "Fundamentos
  — IEC 62443"), organiza-se em **quatro grupos de documentos** — Fundamentos, Políticas e Procedimentos,
  Sistema e Componente —, define **7 requisitos fundamentais (FR)** de segurança e estabelece um modelo de
  **zonas e conduítes** com **Níveis de Segurança (SL) de 1 a 4**, construído sobre a hierarquia de níveis do
  Modelo Purdue (0 a 5, com a extensão de Nível 3,5/DMZ industrial). Por ser a norma internacional de referência
  específica para tecnologia operacional (OT) — e, portanto, diretamente aplicável ao setor de energia, mas
  também a sistemas de automação usados em processamento e liquidação financeira de alta criticidade —, sua
  estrutura é reproduzida aqui de forma resumida, sem repetir o detalhamento completo já registrado na seção
  Energia (fontes e observações idênticas às lá citadas: O Setor Elétrico e ISA São Paulo Section).
  - Fonte 1 (secundária, já citada na seção Energia): O Setor Elétrico. *IEC 62443: reforçando a segurança
    cibernética em infraestrutura crítica*.
    https://www.osetoreletrico.com.br/iec-62443-reforcando-a-seguranca-cibernetica-em-infraestrutura-critica/
  - Fonte 2 (secundária, já citada na seção Energia): ISA São Paulo Section. *Cibersegurança Industrial e a Norma
    ISA/IEC 62443*. https://isasp.org.br/ciberseguranca-industrial-e-a-norma-isa-iec-62443-essencial-para-engenheiros-e-tecnicos-de-producao/
  - Observações: entrada de referência cruzada, incluída nesta seção por pedido explícito do escopo da Task 4
    (frameworks de defesa), sem introduzir dados novos além dos já registrados e verificados na seção Energia.
    Ver a entrada original para o detalhamento completo dos 7 FRs e da estrutura de 4 grupos.

### Zero Trust — NIST SP 800-207

- **Dado:** a publicação **NIST Special Publication 800-207 (Zero Trust Architecture)** estabelece o princípio
  central de "nunca confiar, sempre verificar" ("never trust, always verify"): toda solicitação de acesso deve
  ser autenticada, autorizada e criptografada antes da concessão de acesso a qualquer recurso, eliminando a
  confiança implícita historicamente concedida a usuários, serviços e dispositivos apenas por estarem dentro de
  um perímetro de rede específico. O documento define **sete pilares (tenets)** fundamentais do Zero Trust: (1)
  todas as fontes de dados e serviços de computação são consideradas recursos; (2) toda comunicação é protegida
  independentemente da localização de rede; (3) o acesso a recursos individuais é concedido por sessão; (4) o
  acesso de privilégio mínimo é reforçado dinamicamente; (5) diagnóstico contínuo e detecção de ameaças são
  essenciais; (6) o acesso é monitorado e registrado em todas as camadas; (7) as políticas devem ser adaptativas,
  orientadas por dados e reforçadas por telemetria. O NIST publicou posteriormente uma extensão, **SP 800-207A**,
  voltada especificamente a um modelo de arquitetura Zero Trust para controle de acesso em aplicações
  cloud-native em ambientes multi-nuvem.
  - Fonte 1: NIST/CSRC. *NIST Special Publication (SP) 800-207, Zero Trust Architecture* (texto oficial).
    https://csrc.nist.gov/pubs/sp/800/207/final (PDF: https://nvlpubs.nist.gov/nistpubs/specialpublications/NIST.SP.800-207.pdf)
    (ver também a extensão: https://csrc.nist.gov/pubs/sp/800/207/a/final)
  - Fonte 2 (secundária, síntese técnica dos sete pilares): Palo Alto Networks. *What Is NIST SP 800-207? Zero
    Trust Architecture Framework*. https://www.paloaltonetworks.com/cyberpedia/what-is-nist-sp-800-207
  - Observações: sem divergência relevante entre fontes quanto aos sete pilares e ao princípio central. O Zero
    Trust é citado, de forma qualitativa e recorrente, como estratégia de mitigação relevante para os padrões de
    ataque já registrados nas seções Financeiro (acesso via credenciais comprometidas — caso C&M Software/Pix) e
    Energia (movimento lateral de TI corporativa para OT — casos BlackEnergy e Volt Typhoon/LELWD), na medida em
    que reforça segmentação e verificação contínua entre domínios de confiança distintos — mas não foi
    identificada, no escopo desta pesquisa, uma exigência regulatória explícita e nomeada de "Zero Trust/NIST SP
    800-207" nas resoluções brasileiras (BCB, ANEEL) já citadas neste dossiê — **[NÃO CONFIRMADO — nenhuma menção
    nominal a Zero Trust ou ao NIST SP 800-207 localizada nos textos regulatórios brasileiros consultados em
    2026-07-21]**.

---

### Tabela-resumo — Defesa e Frameworks

| Métrica | Valor | Relatório/fonte primária | Status |
| :-- | :-- | :-- | :-- |
| NIST CSF 2.0 — publicação | 26/2/2024; 6 funções (Govern nova) | NIST (site oficial) | Confirmado (2 fontes) |
| ISO/IEC 27001:2022 — Anexo A | 93 controles (4 temas), reduzidos de 114 (2013) | Consolidação de fontes explicativas (ISO não acessado diretamente) | Confirmado (2 fontes secundárias) |
| ISO/IEC 27001:2022 — controles novos | 11 controles novos introduzidos | Idem | Confirmado (2 fontes secundárias) |
| IEC 62443 — estrutura | 4 grupos; 7 FRs; SL 1–4 | Ver seção Energia (mesmas fontes) | Confirmado (2 fontes); referência cruzada |
| NIST SP 800-207 — pilares | 7 tenets; "never trust, always verify" | NIST/CSRC (site oficial) | Confirmado (2 fontes) |
| NIST SP 800-207A — extensão | Zero Trust para aplicações cloud-native multi-nuvem | NIST/CSRC (site oficial) | Confirmado (1 fonte primária, sem divergência a checar) |

**Legenda:** idêntica à das tabelas-resumo anteriores.

---

## Registro do refresh quinzenal — 2026-08-01

Checagem de diligência conforme protocolo do repositório: para cada fonte primária listada na hierarquia de
fontes (`00-metodologia-e-fontes/README.md`), verificar se uma edição mais nova foi publicada desde
2026-07-21 e, em caso positivo, se atende à regra de duas fontes independentes antes de qualquer atualização.

| Fonte primária | Edição vigente em 2026-07-21 | Resultado da checagem em 2026-08-01 |
| :-- | :-- | :-- |
| IBM Cost of a Data Breach | 2025 | **Edição 2026 publicada em 29/7/2026 — confirmada e incorporada** (ver seção Global) |
| Mandiant M-Trends | 2025 (2026 citada só como nota de tendência) | **Edição 2026 (mar/2026) confirmada e incorporada como fonte primária plena** (ver seção Global) |
| CrowdStrike Global Threat Report | 2025 (2026 citada só como nota de tendência) | **Edição 2026 (24/2/2026) confirmada e incorporada como fonte primária plena** (ver seção Global) |
| Verizon DBIR | 2025 | **Edição 2026 (19/5/2026) confirmada e incorporada** (ver seção Global) |
| WEF Global Cybersecurity Outlook / Global Risks Report | 2026 (jan/2026) | Sem edição nova — ciclo de publicação é anual (janeiro); próxima edição esperada em jan/2027 |
| ENISA Threat Landscape | 2025 (out/2025) | Sem edição nova — ciclo de publicação é anual (outubro); próxima edição esperada em out/2026 |
| Dragos OT/ICS Year in Review | 2026 (9ª edição, fev/2026) | Sem edição nova — ciclo de publicação é anual (fevereiro) |
| Kaspersky ICS CERT | Q3 2025 | Buscas não localizaram um relatório Q4 2025/Q1 2026 com dois anos-fonte independentes dentro desta janela; não atualizado |
| FS-ISAC Navigating Cyber | 2025 (mai/2025) | Sem edição "Navigating Cyber 2026" nomeada e publicada localizada com duas fontes; referências a "dados 2026" da FS-ISAC encontradas são de material avulso (advisórios), não do relatório anual — não atualizado |
| Fortinet State of OT/Cybersecurity | 2025 | Sem edição 2026 localizada nesta janela |
| Nozomi Networks OT/IoT Trends | 2025 | Sem edição 2026 localizada nesta janela |
| ANEEL / ONS (regulação) | RN nº 964/2021; Despacho nº 427/2025 | Sem norma ou despacho novo localizado entre 2026-07-21 e 2026-08-01 |
| Banco Central (BACEN/CMN) | Resoluções CMN 5.274/2025 e BCB 538/2025 (prazo mar/2026) | Localizada **Resolução BCB nº 547/2026** (janeiro de 2026, sobre credenciamento de Provedores de Serviços de Tecnologia da Informação — PSTI), anterior à janela de 11 dias e já vigente antes de 2026-07-21; não incorporada nesta atualização por não atender ao critério de "mudança desde a última pesquisa" — **[NÃO CONFIRMADO se a Res. BCB 547/2026 já constava implicitamente no escopo da pesquisa original de 2026-07-21; recomenda-se avaliação em ciclo futuro]** |

**Observação metodológica sobre os quatro relatórios atualizados:** todos os quatro (IBM 2026, Mandiant
M-Trends 2026, CrowdStrike 2026, Verizon DBIR 2026) já estavam publicados **antes** de 2026-07-21 (entre
fevereiro e julho de 2026) — não são publicações novas desta janela quinzenal. A pesquisa original de
2026-07-21 optou deliberadamente por manter as edições 2025 como referência principal desses quatro
relatórios (citando as edições 2026 apenas como nota de tendência, quando citava). Este refresh de
2026-08-01 reavaliou essa escolha e concluiu que, com as quatro edições já maduras (meses de circulação,
múltiplas coberturas independentes convergentes, sem sinal de erratas), a edição mais recente de cada uma
passa a ser a referência primária mais atual para este panorama — sem prejuízo da trilha de pesquisa
original, mantida integralmente acima.
