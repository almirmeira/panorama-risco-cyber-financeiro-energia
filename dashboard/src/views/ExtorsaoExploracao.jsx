import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'
import { useThreatLive } from '../hooks/useThreatLive.js'
import KpiTile from '../components/KpiTile.jsx'
import SeloFrescor from '../components/SeloFrescor.jsx'

/**
 * Extorsão & Exploração — a leitura que os feeds de IoC não dão.
 *
 * Um indicador diz "existe este domínio malicioso". Não diz quem está sendo
 * atacado nem o que corrigir primeiro. Esta aba responde as duas:
 *
 *   - **Extorsão**: vítimas do setor financeiro reivindicadas por grupos de
 *     ransomware (ransomware.live). É a única fonte aberta testada com recorte
 *     setorial explícito — daí ser a peça mais diretamente financeira do painel.
 *   - **Exploração**: vulnerabilidades sob exploração ativa confirmada pela
 *     CISA (catálogo KEV), com destaque para as já vistas em campanha de
 *     ransomware.
 */

/**
 * Cor por severidade, não por decoração. A regra é a mesma nos três gráficos:
 * vermelho = o que exige atenção primeiro; âmbar = intermediário; azul = base.
 * Pintar tudo de vermelho, como estava, gasta o único recurso visual que
 * deveria significar "olhe aqui" e não distingue nada.
 */
function corPorIntensidade(valor, maximo) {
  if (!maximo) return palette.azul
  const proporcao = valor / maximo
  if (proporcao >= 0.5) return palette.vermelho
  if (proporcao >= 0.25) return palette.ambar
  return palette.azul
}

const RANSOMWARE_LIVE = 'https://www.ransomware.live'

/** Abre a fonte numa aba nova, sem passar referrer. */
function abrirFonte(url) {
  if (!url) return
  window.open(url, '_blank', 'noopener,noreferrer')
}

function Painel({ titulo, children, nota, borda, fonteUrl, fonteRotulo }) {
  return (
    <div className="painel" style={borda ? { borderLeft: `3px solid ${borda}` } : undefined}>
      {titulo && (
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
          <h3 style={{ margin: 0, fontSize: 14, color: palette.txtTitulo }}>{titulo}</h3>
          {fonteUrl && (
            <a href={fonteUrl} target="_blank" rel="noopener noreferrer"
              style={{ color: palette.azul, fontSize: 11.5, whiteSpace: 'nowrap', textDecoration: 'none' }}>
              {fonteRotulo ?? 'ver fonte'} ↗
            </a>
          )}
        </div>
      )}
      {children}
      {nota && <p style={{ color: palette.txtSec, fontSize: 12, margin: '10px 0 0', lineHeight: 1.5 }}>{nota}</p>}
    </div>
  )
}

/** Legenda das cores — sem ela, a variação vira enfeite sem significado. */
function LegendaSeveridade({ criterio }) {
  const itens = [
    { cor: palette.vermelho, rotulo: 'crítico' },
    { cor: palette.ambar, rotulo: 'intermediário' },
    { cor: palette.azul, rotulo: 'base' },
  ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, marginBottom: 10 }}>
      {itens.map((i) => (
        <span key={i.rotulo} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11.5, color: palette.txtSec }}>
          <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 2, background: i.cor, flexShrink: 0 }} />
          {i.rotulo}
        </span>
      ))}
      {criterio && <span style={{ fontSize: 11.5, color: palette.txtSec }}>— {criterio}</span>}
    </div>
  )
}

function SerieMensal({ serie }) {
  // A média exclui o mês corrente, que ainda está em curso — incluí-lo puxaria
  // a referência para baixo e faria meses normais parecerem picos.
  const fechados = serie.slice(0, -1)
  const media = fechados.length
    ? fechados.reduce((s, m) => s + m.vitimas, 0) / fechados.length
    : 0

  const option = {
    ...echartsTheme,
    grid: { left: 40, right: 16, top: 30, bottom: 40, containLabel: true },
    tooltip: {
      trigger: 'axis',
      formatter: (p) => {
        const d = p[0]
        const emCurso = d.dataIndex === serie.length - 1
        return `${serie[d.dataIndex].mes}<br/><strong>${d.value}</strong> vítimas`
          + (emCurso ? '<br/><em>mês em curso</em>' : `<br/>média dos fechados: ${media.toFixed(0)}`)
      },
    },
    xAxis: {
      type: 'category',
      data: serie.map((m) => m.mes.slice(5) + '/' + m.mes.slice(2, 4)),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: serie.map((m, i) => {
          // Mês corrente em cinza: ainda está em curso, e pintá-lo como os
          // fechados sugeriria uma queda que é só do calendário.
          if (i === serie.length - 1) return { value: m.vitimas, itemStyle: { color: palette.txtSec } }
          // Acima da média = mês pior que o normal do setor.
          const cor = m.vitimas > media * 1.25
            ? palette.vermelho
            : m.vitimas >= media * 0.75
              ? palette.ambar
              : palette.azul
          return { value: m.vitimas, itemStyle: { color: cor } }
        }),
        barMaxWidth: 34,
        markLine: media
          ? {
              silent: true,
              symbol: 'none',
              lineStyle: { color: palette.txtSec, type: 'dashed', width: 1 },
              label: { formatter: 'média', color: palette.txtSec, fontSize: 10, position: 'insideEndTop' },
              data: [{ yAxis: Math.round(media) }],
            }
          : undefined,
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 260, width: '100%' }} opts={{ renderer: 'svg' }} />
}

/**
 * Barras horizontais clicáveis.
 *
 * `corDe(item, maximo)` decide a cor por severidade; `linkDe(item)` devolve a
 * URL da fonte daquela barra. Clicar abre a página da fonte — é o caminho mais
 * curto entre "este grupo lidera" e "quem é este grupo".
 */
function BarrasHorizontais({ dados, campoNome, campoValor, corDe, linkDe, alturaPorItem = 30 }) {
  const top = [...dados].slice(0, 8).reverse()
  const maximo = Math.max(...top.map((d) => d[campoValor]), 0)
  const clicavel = typeof linkDe === 'function'

  const option = {
    ...echartsTheme,
    grid: { left: 8, right: 52, top: 8, bottom: 8, containLabel: true },
    tooltip: {
      trigger: 'item',
      formatter: (p) => {
        const item = top[p.dataIndex]
        const base = `<strong>${item[campoNome]}</strong><br/>${item[campoValor]} vítimas`
        return clicavel && linkDe(item) ? `${base}<br/><em>clique para abrir a fonte</em>` : base
      },
    },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      data: top.map((d) => d[campoNome]),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 12 },
    },
    series: [
      {
        type: 'bar',
        data: top.map((d) => ({
          value: d[campoValor],
          itemStyle: { color: corDe ? corDe(d, maximo) : corPorIntensidade(d[campoValor], maximo) },
        })),
        barMaxWidth: 16,
        cursor: clicavel ? 'pointer' : 'default',
        label: { show: true, position: 'right', color: palette.txtSec, fontSize: 11 },
        emphasis: { itemStyle: { opacity: 0.75 } },
      },
    ],
  }

  return (
    <ReactECharts
      option={option}
      style={{ height: Math.max(200, top.length * alturaPorItem), width: '100%' }}
      opts={{ renderer: 'svg' }}
      onEvents={clicavel ? { click: (p) => abrirFonte(linkDe(top[p.dataIndex])) } : undefined}
    />
  )
}

function TabelaVitimas({ vitimas, destacarBrasil }) {
  if (!vitimas.length) {
    return <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>Nenhuma vítima na janela.</p>
  }
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
            {['Data', 'Organização', 'Grupo', 'País'].map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 10px', color: palette.txtSec,
                fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vitimas.map((v, i) => (
            <tr key={`${v.vitima}-${i}`} style={{ borderBottom: `1px solid ${palette.borda}` }}>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                {new Date(`${v.data}T00:00:00`).toLocaleDateString('pt-BR')}
              </td>
              <td style={{ padding: '8px 10px', color: palette.txtTitulo, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {destacarBrasil && v.pais === 'BR' && <span style={{ marginRight: 6 }}>🇧🇷</span>}
                {v.vitima}
              </td>
              <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                {/* Link para o perfil do grupo — nunca para o site de vazamento. */}
                <a href={`${RANSOMWARE_LIVE}/group/${encodeURIComponent(v.grupo)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: palette.vermelho, textDecoration: 'none', borderBottom: `1px dotted ${palette.vermelho}` }}>
                  {v.grupo}
                </a>
              </td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                {v.pais ? (
                  <a href={`${RANSOMWARE_LIVE}/country/${encodeURIComponent(v.pais)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{ color: palette.txtSec, textDecoration: 'none', borderBottom: `1px dotted ${palette.borda}` }}>
                    {v.pais}
                  </a>
                ) : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TabelaKev({ vulns }) {
  return (
    <div style={{ overflowX: 'auto', maxHeight: 420, overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
            {['CVE', 'Fornecedor', 'Produto', 'Adicionada', 'Ransomware'].map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 10px', color: palette.txtSec, position: 'sticky', top: 0,
                background: palette.bgPainel, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vulns.map((v) => (
            <tr key={v.cve} style={{ borderBottom: `1px solid ${palette.borda}` }}>
              <td style={{ padding: '8px 10px', fontFamily: 'ui-monospace, monospace', whiteSpace: 'nowrap' }}>
                <a href={`https://nvd.nist.gov/vuln/detail/${v.cve}`} target="_blank" rel="noopener noreferrer"
                  style={{ color: palette.azul, textDecoration: 'none', borderBottom: `1px dotted ${palette.azul}` }}>
                  {v.cve}
                </a>
              </td>
              <td style={{ padding: '8px 10px', color: palette.txtCorpo, whiteSpace: 'nowrap' }}>{v.fornecedor}</td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis' }} title={v.produto}>{v.produto}</td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                {new Date(`${v.adicionadaEm}T00:00:00`).toLocaleDateString('pt-BR')}
              </td>
              <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                {v.usoEmRansomware ? (
                  <span style={{ color: palette.vermelho, fontWeight: 600, fontSize: 12 }}>● sim</span>
                ) : (
                  <span style={{ color: palette.txtSec, fontSize: 12 }}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExtorsaoExploracao() {
  const { estado, dados, erro, recarregar } = useThreatLive()

  if (estado === 'carregando') {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0 }}>Consultando extorsão e vulnerabilidades…</p>
        </div>
      </div>
    )
  }

  if (estado === 'erro' || !dados) {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16, borderColor: palette.vermelho }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 15, color: palette.vermelho }}>Camada operacional indisponível</h3>
          <p style={{ color: palette.txtCorpo, fontSize: 13, margin: '0 0 12px' }}>Não foi possível carregar os dados ({erro}).</p>
          <button type="button" onClick={recarregar} style={{
            padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: 'transparent',
            border: `1px solid ${palette.azul}`, color: palette.azul, fontSize: 13,
          }}>Tentar novamente</button>
        </div>
      </div>
    )
  }

  const meta = dados.meta ?? {}
  const ext = dados.extorsao
  const kev = dados.vulnerabilidades

  return (
    <div className="container">
      <div className="painel" style={{
        marginTop: 16, borderLeft: `3px solid ${palette.vermelho}`, display: 'flex',
        flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ maxWidth: 760 }}>
          <strong style={{ color: palette.txtTitulo, fontSize: 13 }}>
            Quem está sendo atacado e o que corrigir primeiro
          </strong>
          <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
            Um indicador de comprometimento diz que existe um domínio malicioso. Não diz quem está
            sendo atacado, nem qual falha está sendo explorada agora. Esta aba responde as duas
            perguntas — extorsão reivindicada contra o setor financeiro e vulnerabilidades sob
            exploração ativa confirmada.
          </p>
        </div>
        <SeloFrescor geradoEm={meta.geradoEm} degradado={meta.degradado} />
      </div>

      {/* ---------------- Extorsão ---------------- */}
      {ext ? (
        <>
          <h2 style={{ margin: '24px 0 0', fontSize: 17 }}>Extorsão contra o setor financeiro</h2>

          <div className="painel" style={{ marginTop: 12, borderLeft: `3px solid ${palette.ambar}` }}>
            <strong style={{ color: palette.ambar, fontSize: 13 }}>Reivindicações, não incidentes confirmados</strong>
            <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
              {ext.aviso}
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
            <KpiTile label={`Vítimas financeiras (${ext.janelaDias} dias)`} valor={String(ext.totalFinanceiro)}
              unidade="organizações" delta={`${ext.totalHistorico} no arquivo desde 2017`} fonte="ransomware.live" />
            <KpiTile label="Grupos ativos contra o setor" valor={String(ext.porGrupo.length)}
              unidade="grupos" delta={ext.porGrupo[0] ? `${ext.porGrupo[0].grupo} lidera com ${ext.porGrupo[0].vitimas}` : ''} fonte="ransomware.live" />
            <KpiTile label="Vítimas no Brasil (janela)" valor={String(ext.brasilJanela)}
              unidade="organizações" delta={`${ext.brasilHistorico} no arquivo histórico`} fonte="ransomware.live" />
            <KpiTile label="Países atingidos na janela" valor={String(ext.porPais.length)}
              unidade="países" delta={ext.porPais[0] ? `${ext.porPais[0].pais} concentra ${ext.porPais[0].vitimas}` : ''} fonte="ransomware.live" />
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 16 }}>
            <Painel titulo="Vítimas financeiras por mês (12 meses)"
              fonteUrl={RANSOMWARE_LIVE} fonteRotulo="ransomware.live"
              nota="Vermelho marca os meses acima da média do período; cinza é o mês corrente, ainda em curso — pintá-lo como os fechados sugeriria uma queda que é só do calendário. Série legítima: o arquivo setorial da fonte é completo desde 2017, não um dump rolante.">
              <LegendaSeveridade criterio="comparação com a média dos meses fechados" />
              <SerieMensal serie={ext.serieMensal} />
            </Painel>
            <Painel titulo={`Grupos mais ativos contra o setor (${ext.janelaDias} dias)`}
              fonteUrl={`${RANSOMWARE_LIVE}/groups`} fonteRotulo="todos os grupos"
              nota="Clique numa barra para abrir o perfil do grupo no ransomware.live — histórico de vítimas, setores e período de atividade.">
              <LegendaSeveridade criterio="volume relativo ao grupo mais ativo" />
              <BarrasHorizontais
                dados={ext.porGrupo} campoNome="grupo" campoValor="vitimas"
                linkDe={(d) => `${RANSOMWARE_LIVE}/group/${encodeURIComponent(d.grupo)}`}
              />
            </Painel>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 2fr)', marginTop: 16 }}>
            <Painel titulo="Concentração por país"
              nota={`O Brasil aparece sempre em vermelho — é a exposição que interessa a este painel, independentemente do volume. Clique para abrir o país no ransomware.live.${
                ext.semPais
                  ? ` ${ext.semPais} ${ext.semPais === 1 ? 'vítima da janela não tem' : 'vítimas da janela não têm'} país informado na fonte e ${ext.semPais === 1 ? 'ficou' : 'ficaram'} fora do gráfico: são reivindicações que o rastreador não conseguiu localizar, não um país.`
                  : ''
              }`}>
              <BarrasHorizontais
                dados={ext.porPais} campoNome="pais" campoValor="vitimas"
                corDe={(d, max) => (d.pais === 'BR' ? palette.vermelho : corPorIntensidade(d.vitimas, max) === palette.vermelho ? palette.ambar : palette.azul)}
                linkDe={(d) => (d.pais && d.pais !== '??' ? `${RANSOMWARE_LIVE}/country/${encodeURIComponent(d.pais)}` : null)}
              />
            </Painel>
            <Painel titulo={`Vítimas reivindicadas (${ext.janelaDias} dias)`}
              fonteUrl={RANSOMWARE_LIVE} fonteRotulo="ransomware.live"
              nota="O grupo e o país levam à fonte. Não há link para o site de vazamento — publicar rota para leak site é distribuir a extorsão, não noticiá-la.">
              <TabelaVitimas vitimas={ext.vitimas} destacarBrasil />
            </Painel>
          </div>

          {ext.vitimasBrasil?.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <Painel titulo="Recorte Brasil — histórico completo do arquivo" borda={palette.vermelho}
                fonteUrl={`${RANSOMWARE_LIVE}/country/BR`} fonteRotulo="Brasil no ransomware.live"
                nota="Todas as vítimas brasileiras do setor financeiro registradas pela fonte desde 2017. O volume baixo é informativo: reflete tanto menor incidência quanto menor cobertura das fontes abertas sobre o Brasil.">
                <TabelaVitimas vitimas={ext.vitimasBrasil} />
              </Painel>
            </div>
          )}
        </>
      ) : (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0, fontSize: 13 }}>Dados de extorsão indisponíveis neste ciclo.</p>
        </div>
      )}

      {/* ---------------- Exploração ativa ---------------- */}
      {kev && (
        <>
          <h2 style={{ margin: '28px 0 0', fontSize: 17 }}>Vulnerabilidades sob exploração ativa</h2>

          <div className="painel" style={{ marginTop: 12 }}>
            <p style={{ color: palette.txtSec, fontSize: 12.5, margin: 0, lineHeight: 1.5 }}>
              Catálogo KEV da CISA: falhas com exploração <strong style={{ color: palette.txtCorpo }}>confirmada em
              campo</strong>, não apenas teoricamente exploráveis. Não é um recorte financeiro — o KEV vale para todos
              os setores — mas responde a pergunta que nenhum feed de indicador responde: o que corrigir primeiro.
              As marcadas com uso em ransomware merecem prioridade num setor onde indisponibilidade é o pior cenário.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
            <KpiTile label={`Novas no catálogo (${kev.janelaDias} dias)`} valor={String(kev.recentesTotal)}
              unidade="CVEs" delta={`${kev.recentesComRansomware} com uso em ransomware`} fonte="CISA KEV" />
            <KpiTile label="Catálogo completo" valor={String(kev.totalCatalogo)}
              unidade="CVEs" delta={`versão ${kev.catalogo}`} fonte="CISA KEV" />
            <KpiTile label="Ligadas a ransomware" valor={String(kev.totalComRansomware)}
              unidade="CVEs" delta={`${Math.round((kev.totalComRansomware / kev.totalCatalogo) * 100)}% do catálogo`} fonte="CISA KEV" />
          </div>

          <div style={{ marginTop: 16 }}>
            <Painel titulo={`Adições recentes ao catálogo (${kev.janelaDias} dias)`}
              fonteUrl="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" fonteRotulo="catálogo KEV"
              nota="Ordenadas da mais recente. A coluna Ransomware marca as que já apareceram em campanha conhecida. Cada CVE leva à ficha completa no NVD.">
              <TabelaKev vulns={kev.recentes} />
            </Painel>
          </div>
        </>
      )}
    </div>
  )
}

export default ExtorsaoExploracao
