# Dossiê de Pesquisa — Panorama de Risco Cyber (Financeiro × Energia)

> Documento de trabalho. Cada número-chave tem ≥2 fontes independentes. Fontes secundárias marcadas como tal.
> Pesquisa realizada em 2026-07-21. Onde uma fonte primária não pôde ser recuperada diretamente (bloqueio de
> acesso automatizado, PDF não extraível), o dado foi validado por ≥2 fontes secundárias que citam o relatório
> primário, e isso é registrado explicitamente.

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
| Custo médio global de violação (2025) | USD 4,44 milhões (-9% a/a) | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes) |
| Custo médio — setor financeiro | USD 5,56 milhões | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes) |
| Custo médio — setor energia | USD 4,83 milhões | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes) |
| Tempo médio identificação+contenção | 241 dias | IBM Cost of a Data Breach 2025 | Confirmado (2 fontes); métrica distinta de dwell time |
| Dwell time mediano global | 11 dias (10→11 dias) | Mandiant M-Trends 2025 | Confirmado (2 fontes); ver nota de piora no ano seguinte |
| Setor mais visado (intrusões) | Financeiro, 17,4% | Mandiant M-Trends 2025 | Confirmado (2 fontes); diverge do IBM X-Force (Manufatura) |
| Breakout time médio (lateral) | 48 min (62→48 min) | CrowdStrike Global Threat Report 2025 | Confirmado (2 fontes) |
| Detecções malware-free | 79% | CrowdStrike Global Threat Report 2025 | Confirmado (2 fontes) |
| Ransomware em violações confirmadas | 44% (32%→44%) | Verizon DBIR 2025 | Confirmado (2 fontes) |
| Ransomware em violações SMB vs. grandes empresas | 88% vs. 39% | Verizon DBIR 2025 | Confirmado (2 fontes) |
| Vetores de acesso inicial | Credenciais 22% / Exploits 20% | Verizon DBIR 2025 | Confirmado (2 fontes); ordem diverge da Mandiant |
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
