import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'
import { useThreatLive } from '../hooks/useThreatLive.js'
import KpiTile from '../components/KpiTile.jsx'
import SeloFrescor from '../components/SeloFrescor.jsx'

/**
 * Brasil — o que está sendo atacado aqui, nesta semana.
 *
 * Por que esta aba existe separada da aba de extorsão: aquela usa o recorte
 * SETORIAL da fonte (Financial Services, mundo inteiro), e nesse recorte o
 * Brasil praticamente não aparece — 15 vítimas financeiras brasileiras em todo
 * o arquivo desde 2017, uma só nos últimos 90 dias. Quem abria o painel no
 * Brasil concluía que os ataques recentes não estavam sendo capturados. Não era
 * o dado que faltava, era a consulta: pelo recorte de PAÍS a mesma fonte tem
 * 530 vítimas brasileiras, dezenas delas nos últimos 90 dias.
 *
 * A aba mostra todos os setores de propósito. Um banco não é comprometido só
 * pela porta da frente: fornecedor de tecnologia, escritório de advocacia e
 * operador logístico parados por ransomware chegam ao setor financeiro por
 * terceiro — e são justamente os setores que dominam a lista brasileira.
 */

const RANSOMWARE_LIVE = 'https://www.ransomware.live'

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

/** Mesma regra de cor das outras abas: vermelho = olhe aqui primeiro. */
function corPorIntensidade(valor, maximo) {
  if (!maximo) return palette.azul
  const proporcao = valor / maximo
  if (proporcao >= 0.5) return palette.vermelho
  if (proporcao >= 0.25) return palette.ambar
  return palette.azul
}

function BarrasHorizontais({ dados, campoNome, campoValor, linkDe }) {
  const top = [...dados].slice(0, 10).reverse()
  if (!top.length) {
    return <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>Sem dados na janela.</p>
  }
  const maximo = Math.max(...top.map((d) => d[campoValor]))

  const option = {
    ...echartsTheme,
    grid: { left: 8, right: 40, top: 8, bottom: 8, containLabel: true },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: { type: 'value', splitLine: { lineStyle: { color: palette.borda } } },
    yAxis: {
      type: 'category',
      data: top.map((d) => d[campoNome]),
      axisLabel: { color: palette.txtSec, fontSize: 11.5 },
    },
    series: [{
      type: 'bar',
      data: top.map((d) => ({
        value: d[campoValor],
        itemStyle: { color: corPorIntensidade(d[campoValor], maximo), borderRadius: [0, 3, 3, 0] },
      })),
      label: { show: true, position: 'right', color: palette.txtSec, fontSize: 11 },
      barMaxWidth: 18,
    }],
  }

  return (
    <ReactECharts
      option={option}
      style={{ height: Math.max(180, top.length * 28) }}
      opts={{ renderer: 'svg' }}
      onEvents={linkDe ? {
        click: (p) => {
          const url = linkDe(top[p.dataIndex])
          if (url) window.open(url, '_blank', 'noopener,noreferrer')
        },
      } : undefined}
    />
  )
}

function SerieMensal({ serie }) {
  const fechados = serie.slice(0, -1)
  const media = fechados.length ? fechados.reduce((s, m) => s + m.vitimas, 0) / fechados.length : 0

  const option = {
    ...echartsTheme,
    grid: { left: 40, right: 16, top: 30, bottom: 40, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: serie.map((m) => m.mes.slice(5) + '/' + m.mes.slice(2, 4)),
      axisLabel: { color: palette.txtSec, fontSize: 11 },
    },
    yAxis: { type: 'value', splitLine: { lineStyle: { color: palette.borda } } },
    series: [{
      type: 'bar',
      data: serie.map((m, i) => ({
        value: m.vitimas,
        // Cinza no mês corrente: ele ainda está em curso, e pintá-lo como os
        // fechados desenharia uma queda que é só do calendário.
        itemStyle: {
          color: i === serie.length - 1
            ? palette.txtSec
            : (m.vitimas > media ? palette.vermelho : palette.azul),
          borderRadius: [3, 3, 0, 0],
        },
      })),
      barMaxWidth: 26,
    }],
  }
  return <ReactECharts option={option} style={{ height: 240 }} opts={{ renderer: 'svg' }} />
}

function TabelaVitimas({ vitimas, comSetor }) {
  if (!vitimas?.length) {
    return <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>Nenhuma vítima na janela.</p>
  }
  const colunas = comSetor ? ['Data', 'Organização', 'Setor', 'Grupo'] : ['Data', 'Organização', 'Grupo']
  return (
    <div style={{ overflowX: 'auto', maxHeight: 420, overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
            {colunas.map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 10px', color: palette.txtSec, position: 'sticky', top: 0,
                background: palette.bgPainel, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3,
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
              <td style={{ padding: '8px 10px', color: palette.txtTitulo, maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {v.vitima}
              </td>
              {comSetor && (
                <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>{v.setor}</td>
              )}
              <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                {/* Perfil do grupo, nunca o site de vazamento. */}
                <a href={`${RANSOMWARE_LIVE}/group/${encodeURIComponent(v.grupo)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ color: palette.vermelho, textDecoration: 'none', borderBottom: `1px dotted ${palette.vermelho}` }}>
                  {v.grupo}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Brasil() {
  const { estado, dados, erro, recarregar } = useThreatLive()

  if (estado === 'carregando') {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0 }}>Consultando o recorte brasileiro…</p>
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
  const br = dados.brasil

  if (!br) {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16, borderLeft: `3px solid ${palette.ambar}` }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 15, color: palette.ambar }}>Recorte Brasil indisponível neste ciclo</h3>
          <p style={{ color: palette.txtSec, fontSize: 13, margin: 0, lineHeight: 1.5 }}>
            A fonte de extorsão não respondeu ao recorte por país na última coleta. Os demais dados do
            painel seguem válidos — a ausência é declarada em vez de exibir uma tela vazia sem explicação.
          </p>
        </div>
      </div>
    )
  }

  const iocsBr = (dados.iocs ?? []).filter((i) => i.brasil)
  const familiasBr = (dados.familias ?? []).filter((f) => f.regiao === 'br')

  return (
    <div className="container">
      <div className="painel" style={{
        marginTop: 16, borderLeft: `3px solid ${palette.vermelho}`, display: 'flex',
        flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ maxWidth: 780 }}>
          <strong style={{ color: palette.txtTitulo, fontSize: 13 }}>
            O que está sendo atacado no Brasil
          </strong>
          <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
            O recorte setorial global quase não mostra o Brasil — são {br.totalFinanceiras} vítimas
            financeiras brasileiras em todo o arquivo da fonte. Consultada por país, a mesma base tem
            <strong style={{ color: palette.txtCorpo }}> {br.totalHistorico} organizações brasileiras</strong>,
            {' '}{br.totalJanela} delas nos últimos {br.janelaDias} dias. Todos os setores entram aqui de
            propósito: fornecedor de tecnologia, escritório e operador logístico parados por ransomware
            chegam ao setor financeiro por terceiro.
          </p>
        </div>
        <SeloFrescor geradoEm={meta.geradoEm} degradado={meta.degradado} />
      </div>

      <div className="painel" style={{ marginTop: 12, borderLeft: `3px solid ${palette.ambar}` }}>
        <strong style={{ color: palette.ambar, fontSize: 13 }}>Reivindicações, não incidentes confirmados</strong>
        <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>{br.aviso}</p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
        <KpiTile label="Vítimas brasileiras (7 dias)" valor={String(br.ultimos7)}
          unidade="organizações" delta={`${br.ultimos30} nos últimos 30 dias`} fonte="ransomware.live" />
        <KpiTile label={`Vítimas brasileiras (${br.janelaDias} dias)`} valor={String(br.totalJanela)}
          unidade="organizações" delta={`${br.totalHistorico} no arquivo do país`} fonte="ransomware.live" />
        <KpiTile label="Grupos atuando contra o Brasil" valor={String(br.porGrupo.length)}
          unidade="grupos"
          delta={br.porGrupo[0] ? `${br.porGrupo[0].grupo} lidera com ${br.porGrupo[0].vitimas}` : ''}
          fonte="ransomware.live" />
        <KpiTile label="Setor financeiro no país" valor={String(br.totalFinanceiras)}
          unidade="organizações" delta="todo o arquivo, desde 2017" fonte="ransomware.live" />
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 16 }}>
        <Painel titulo="Vítimas brasileiras por mês (12 meses)"
          fonteUrl={`${RANSOMWARE_LIVE}/country/BR`} fonteRotulo="Brasil no ransomware.live"
          nota="Vermelho marca os meses acima da média do período; cinza é o mês corrente, ainda em curso. Série legítima: o arquivo do país é completo, não um dump rolante de itens recentes.">
          <SerieMensal serie={br.serieMensal} />
        </Painel>
        <Painel titulo={`Grupos mais ativos contra alvos brasileiros (${br.janelaDias} dias)`}
          fonteUrl={`${RANSOMWARE_LIVE}/groups`} fonteRotulo="todos os grupos"
          nota="Clique numa barra para abrir o perfil do grupo — histórico de vítimas, setores e período de atividade.">
          <BarrasHorizontais dados={br.porGrupo} campoNome="grupo" campoValor="vitimas"
            linkDe={(d) => `${RANSOMWARE_LIVE}/group/${encodeURIComponent(d.grupo)}`} />
        </Painel>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 2fr)', marginTop: 16 }}>
        <Painel titulo={`Setores atingidos no Brasil (${br.janelaDias} dias)`}
          nota="A concentração em serviços profissionais e tecnologia é a leitura de risco de terceiros: são fornecedores do sistema financeiro, não concorrentes dele.">
          <BarrasHorizontais dados={br.porSetor} campoNome="setor" campoValor="vitimas" />
        </Painel>
        <Painel titulo={`Organizações brasileiras reivindicadas (${br.janelaDias} dias)`}
          fonteUrl={`${RANSOMWARE_LIVE}/country/BR`} fonteRotulo="ransomware.live"
          nota="O grupo leva ao perfil na fonte. Não há link para o site de vazamento nem o texto escrito pelo grupo — publicar rota para leak site é distribuir a extorsão, não noticiá-la.">
          <TabelaVitimas vitimas={br.vitimas} comSetor />
        </Painel>
      </div>

      {br.financeiras?.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <Painel titulo="Setor financeiro brasileiro — arquivo completo" borda={palette.vermelho}
            fonteUrl={`${RANSOMWARE_LIVE}/country/BR`} fonteRotulo="Brasil no ransomware.live"
            nota="Todas as vítimas brasileiras classificadas pela fonte como setor financeiro, desde 2017. O volume baixo diante do total do país é informativo em si: reflete tanto a proteção relativa do setor quanto a menor cobertura das fontes abertas sobre incidentes financeiros brasileiros, que raramente viram reivindicação pública.">
            <TabelaVitimas vitimas={br.financeiras} comSetor />
          </Painel>
        </div>
      )}

      {(familiasBr.length > 0 || iocsBr.length > 0) && (
        <>
          <h2 style={{ margin: '28px 0 0', fontSize: 17 }}>Malware bancário de alvo brasileiro</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 12 }}>
            <Painel titulo="Famílias brasileiras observadas na janela"
              nota="Famílias classificadas como de alvo brasileiro na taxonomia do projeto (Grandoreiro, Coyote, Prilex, Bizarro, ChaveCloak, VENON e outras), com a contagem de indicadores vistos nesta coleta.">
              {familiasBr.length ? (
                <BarrasHorizontais dados={familiasBr} campoNome="nome" campoValor="iocs" />
              ) : (
                <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>
                  Nenhuma família de alvo brasileiro apareceu nos feeds nesta janela. Ausência de indicador
                  não é ausência de ameaça — os feeds abertos cobrem mal o cenário brasileiro.
                </p>
              )}
            </Painel>
            <Painel titulo="Indicadores com marcação brasileira"
              nota="Indicadores cuja família é de alvo brasileiro ou cujo valor carrega marcador nacional. Publicados em defang: o painel cita o indicador sem torná-lo clicável por acidente.">
              <p style={{ color: palette.txtCorpo, fontSize: 13, margin: 0 }}>
                <strong style={{ fontSize: 22, color: palette.txtTitulo }}>{iocsBr.length}</strong>
                {' '}indicadores com marcação brasileira entre os {(dados.iocs ?? []).length} publicados na aba
                Ameaças ao Vivo, onde a tabela completa pode ser filtrada.
              </p>
            </Painel>
          </div>
        </>
      )}
    </div>
  )
}

export default Brasil
