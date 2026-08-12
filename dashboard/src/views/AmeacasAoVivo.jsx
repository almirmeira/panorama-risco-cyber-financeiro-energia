import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'
import { useThreatLive } from '../hooks/useThreatLive.js'
import KpiTile from '../components/KpiTile.jsx'
import SeloFrescor from '../components/SeloFrescor.jsx'
import TabelaIocs from '../components/TabelaIocs.jsx'

/**
 * Camada OPERACIONAL do painel — indicadores recentes com recorte financeiro,
 * vindos da instância MISP da CECyber.
 *
 * O restante do painel é inteligência estratégica: números anuais curados, com
 * regra de duas fontes. Esta aba é outra coisa e precisa se anunciar como tal,
 * senão o leitor mistura "custo médio de violação segundo a IBM" com "domínio
 * visto ontem" como se tivessem o mesmo peso probatório. Daí o aviso de
 * natureza no topo e o carimbo de frescor sempre visível.
 */

const CATEGORIA_ROTULO = {
  banker: 'trojan bancário',
  stealer: 'ladrão de credenciais',
  rat: 'RAT',
  'atm-pos': 'ATM/PDV',
  loader: 'carregador',
}

function Painel({ titulo, children, nota }) {
  return (
    <div className="painel">
      {titulo && (
        <h3 style={{ margin: '0 0 12px', fontSize: 14, color: palette.txtTitulo }}>{titulo}</h3>
      )}
      {children}
      {nota && (
        <p style={{ color: palette.txtSec, fontSize: 12, margin: '10px 0 0' }}>{nota}</p>
      )}
    </div>
  )
}

function GraficoLinhaTempo({ serie }) {
  const option = {
    ...echartsTheme,
    grid: { left: 40, right: 20, top: 20, bottom: 40, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: serie.map((p) => p.data.slice(8) + '/' + p.data.slice(5, 7)),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 11 },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    series: [
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: serie.map((p) => p.total),
        itemStyle: { color: palette.azul },
        lineStyle: { color: palette.azul, width: 2 },
        areaStyle: { color: `${palette.azul}22` },
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 260, width: '100%' }} opts={{ renderer: 'svg' }} />
}

function GraficoFamilias({ familias }) {
  const top = familias.slice(0, 10).reverse()
  const option = {
    ...echartsTheme,
    grid: { left: 8, right: 40, top: 10, bottom: 10, containLabel: true },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      data: top.map((f) => f.nome),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 12 },
    },
    series: [
      {
        type: 'bar',
        data: top.map((f) => ({
          value: f.iocs,
          // Famílias com foco no Brasil em âmbar: é o recorte que interessa
          // ao leitor local e some num gráfico monocromático.
          itemStyle: { color: f.regiao === 'br' ? palette.ambar : palette.azul },
        })),
        barMaxWidth: 18,
        label: { show: true, position: 'right', color: palette.txtSec, fontSize: 11 },
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 320, width: '100%' }} opts={{ renderer: 'svg' }} />
}

function GraficoTipos({ tipos }) {
  const option = {
    ...echartsTheme,
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { ...echartsTheme.legend, bottom: 0, type: 'scroll' },
    series: [
      {
        type: 'pie',
        radius: ['45%', '68%'],
        center: ['50%', '44%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: palette.bgPainel, borderWidth: 2 },
        label: { show: false },
        data: tipos.slice(0, 8).map((t) => ({ name: t.tipo, value: t.total })),
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 300, width: '100%' }} opts={{ renderer: 'svg' }} />
}

function AmeacasAoVivo() {
  const { estado, dados, erro, buscadoEm, recarregar } = useThreatLive()

  if (estado === 'carregando') {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0 }}>Consultando a base de indicadores…</p>
        </div>
      </div>
    )
  }

  if (estado === 'erro' || !dados) {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16, borderColor: palette.vermelho }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 15, color: palette.vermelho }}>
            Camada operacional indisponível
          </h3>
          <p style={{ color: palette.txtCorpo, fontSize: 13, margin: '0 0 12px' }}>
            Não foi possível carregar os indicadores ({erro}). As demais abas do painel — a camada
            estratégica — não dependem desta fonte e seguem íntegras.
          </p>
          <button
            type="button"
            onClick={recarregar}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              cursor: 'pointer',
              background: 'transparent',
              border: `1px solid ${palette.azul}`,
              color: palette.azul,
              fontSize: 13,
            }}
          >
            Tentar novamente
          </button>
        </div>
      </div>
    )
  }

  const meta = dados.meta ?? {}
  const kpis = dados.kpis ?? []
  const familias = dados.familias ?? []
  const tipos = dados.tipos ?? []
  const categorias = dados.categorias ?? []
  const timeline = dados.timeline ?? []
  const iocs = dados.iocs ?? []
  const fontes = dados.fontes ?? []

  return (
    <div className="container">
      {/* Aviso de natureza — separa esta camada do resto do painel. */}
      <div
        className="painel"
        style={{
          marginTop: 16,
          borderLeft: `3px solid ${palette.roxo}`,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ maxWidth: 720 }}>
          <strong style={{ color: palette.txtTitulo, fontSize: 13 }}>
            Inteligência operacional — natureza diferente das demais abas
          </strong>
          <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
            Aqui são indicadores brutos de fontes abertas, observados nos últimos {meta.janelaDias} dias
            e recortados para o setor financeiro. Não passam pela regra de duas fontes que rege os
            números anuais das outras abas: um indicador é um fato pontual observado por uma fonte, não
            uma estatística consolidada. Serve para leitura de atividade recente — não para citar em
            relatório como métrica de setor.
          </p>
        </div>
        <SeloFrescor geradoEm={meta.geradoEm} degradado={meta.degradado} />
      </div>

      {meta.degradado && (
        <div className="painel" style={{ marginTop: 16, borderColor: palette.ambar }}>
          <strong style={{ color: palette.ambar, fontSize: 13 }}>Coleta parcial neste ciclo</strong>
          <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0' }}>
            Uma ou mais fontes não responderam: {(meta.erros ?? []).join(' · ')}. Os números abaixo
            refletem apenas as fontes que responderam.
          </p>
        </div>
      )}

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}
      >
        {kpis.map((k, i) => (
          <KpiTile
            key={i}
            label={k.label}
            valor={k.valor}
            unidade={k.unidade}
            delta={k.delta}
            fonte="camada operacional"
          />
        ))}
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 16 }}
      >
        <Painel
          titulo="Indicadores inéditos por dia"
          nota={
            dados.serieEmFormacao
              ? undefined
              : 'Conta indicadores na primeira vez que esta plataforma os observou — não a data declarada pela fonte. Vale como sinal de atividade, não como censo do setor.'
          }
        >
          {dados.serieEmFormacao ? (
            <div style={{ padding: '28px 4px' }}>
              <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: palette.ambar }}>Série em formação.</strong> A coleta própria
                começou em {new Date(`${dados.serieDesde}T00:00:00`).toLocaleDateString('pt-BR')} e há{' '}
                {timeline.length} {timeline.length === 1 ? 'dia registrado' : 'dias registrados'}.
              </p>
              <p style={{ color: palette.txtSec, fontSize: 12.5, lineHeight: 1.6, margin: '12px 0 0' }}>
                A série só passa a ser exibida com uma semana de coleta. O motivo é técnico e vale
                dizer: as fontes abertas publicam dumps rolantes de adições recentes, que trazem
                centenas de itens de hoje e poucas dezenas de duas semanas atrás — não porque houve
                menos ameaça, mas porque os itens antigos saíram da janela. Um gráfico montado sobre
                isso mostraria uma rampa de alta em qualquer cenário, inclusive num de queda real.
                Preferimos esperar a série própria a exibir um gráfico que sobe sozinho.
              </p>
              <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '12px 0 0' }}>
                Registrados hoje: <strong style={{ color: palette.txtTitulo }}>{timeline[0]?.total ?? 0}</strong> indicadores inéditos.
              </p>
            </div>
          ) : (
            <GraficoLinhaTempo serie={timeline} />
          )}
        </Painel>

        <Painel
          titulo="Famílias de malware financeiro ativas"
          nota="Em âmbar, as famílias com foco no Brasil. Classificação pela taxonomia curada do projeto — cada família tem justificativa registrada."
        >
          <GraficoFamilias familias={familias} />
        </Painel>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 2fr)', marginTop: 16 }}
      >
        <Painel
          titulo="Tipos de indicador"
          nota={
            categorias.length
              ? `Por natureza da ameaça: ${categorias
                  .map((c) => `${CATEGORIA_ROTULO[c.categoria] ?? c.categoria} ${c.total}`)
                  .join(' · ')}.`
              : undefined
          }
        >
          <GraficoTipos tipos={tipos} />
        </Painel>

        <Painel titulo="Indicadores mais recentes">
          <TabelaIocs iocs={iocs} />
        </Painel>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 16 }}
      >
        <Painel titulo="Como o recorte financeiro é feito">
          <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: 0 }}>
            {meta.criterioRecorte}
          </p>
          <ul style={{ color: palette.txtSec, fontSize: 12.5, lineHeight: 1.7, margin: '12px 0 0', paddingLeft: 18 }}>
            <li>
              <strong style={{ color: palette.txtCorpo }}>{meta.totalColetado}</strong> indicadores coletados no ciclo
            </li>
            <li>
              <strong style={{ color: palette.txtCorpo }}>{meta.descartadosPorTlp}</strong> descartados por TLP não publicável
            </li>
            <li>
              <strong style={{ color: palette.txtCorpo }}>{meta.totalFinanceiro}</strong> retidos no recorte financeiro
            </li>
          </ul>
        </Painel>

        <Painel
          titulo="Fontes desta camada"
          nota="Só entra conteúdo marcado TLP:WHITE ou TLP:CLEAR. Qualquer indicador com marcação mais restritiva é descartado na ingestão, antes de chegar a esta página."
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5 }}>
            <tbody>
              {fontes.map((f, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                  <td style={{ padding: '8px 6px', color: palette.txtCorpo }}>
                    {f.nome}
                    <div style={{ color: palette.txtSec, fontSize: 11.5 }}>{f.licenca ?? f.tipo}</div>
                  </td>
                  <td style={{ padding: '8px 6px', color: palette.txtSec, textAlign: 'right', whiteSpace: 'nowrap' }}>
                    {f.indicadores} ind.
                  </td>
                  <td style={{ padding: '8px 6px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                    <span
                      style={{
                        fontSize: 11,
                        color: f.status === 'ok' ? palette.verde : palette.ambar,
                      }}
                    >
                      {f.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Painel>
      </div>

      <p style={{ color: palette.txtSec, fontSize: 11.5, marginTop: 16 }}>
        Ingestão via instância MISP própria · dados obtidos {buscadoEm ? buscadoEm.toLocaleTimeString('pt-BR') : '—'} ·
        janela de {meta.janelaDias} dias · a página revalida sozinha a cada 5 minutos.
      </p>
    </div>
  )
}

export default AmeacasAoVivo
