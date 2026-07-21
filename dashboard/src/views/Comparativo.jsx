import { palette, semaforo } from '../theme.js'
import RadarChart from '../components/RadarChart.jsx'
import GaugeRisco from '../components/GaugeRisco.jsx'

/**
 * Bolinha de semáforo para uso dentro de célula de tabela.
 */
function Bolinha({ nivel }) {
  const cor = semaforo[nivel] ?? palette.txtSec
  return (
    <span
      aria-hidden="true"
      title={nivel}
      style={{
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: cor,
        marginRight: 8,
        flexShrink: 0,
      }}
    />
  )
}

/**
 * Comparativo Financeiro x Energia: radar de eixos de risco, gauges lado a
 * lado e tabela-semáforo eixo a eixo.
 */
function Comparativo({ dados }) {
  const comparativo = dados?.comparativo ?? {}
  const setores = dados?.setores ?? []
  const financeiro = setores.find((s) => s.id === 'financeiro')
  const energia = setores.find((s) => s.id === 'energia')

  return (
    <div className="container">
      <h1>Comparativo Financeiro x Energia</h1>

      <div className="painel" style={{ marginTop: 16 }}>
        <RadarChart
          eixos={comparativo.eixos}
          serieA={comparativo.serieFinanceiro}
          serieB={comparativo.serieEnergia}
          nomeA="Financeiro"
          nomeB="Energia"
        />
        {comparativo.escalaNota && (
          <p style={{ color: palette.txtSec, fontSize: 12, marginTop: 8 }}>{comparativo.escalaNota}</p>
        )}
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}>
        {financeiro && (
          <div className="painel">
            <GaugeRisco valor={financeiro.riscoScore} label={financeiro.riscoLabel} titulo={`Risco — ${financeiro.nome}`} />
          </div>
        )}
        {energia && (
          <div className="painel">
            <GaugeRisco valor={energia.riscoScore} label={energia.riscoLabel} titulo={`Risco — ${energia.nome}`} />
          </div>
        )}
      </div>

      <div className="painel" style={{ marginTop: 16, overflowX: 'auto' }}>
        <h2 style={{ marginTop: 0 }}>Tabela-semáforo por eixo</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Eixo</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Financeiro</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Energia</th>
            </tr>
          </thead>
          <tbody>
            {(comparativo.tabela ?? []).map((linha, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                <td style={{ padding: '8px 10px', color: palette.txtTitulo, fontWeight: 600, verticalAlign: 'top' }}>
                  {linha.eixo}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, verticalAlign: 'top' }}>
                  <Bolinha nivel={linha.semaforoFin} />
                  {linha.financeiro}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, verticalAlign: 'top' }}>
                  <Bolinha nivel={linha.semaforoEnergia} />
                  {linha.energia}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Comparativo
