import { palette, semaforo } from '../theme.js'
import RadarChart from '../components/RadarChart.jsx'
import GaugeRisco from '../components/GaugeRisco.jsx'
import BarChart from '../components/BarChart.jsx'
import { isFinanceiro } from '../edition.js'

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
 * Comparativo (edição "financeiro"): Setor Financeiro x Panorama Global —
 * barra de custo médio de violação e tabela comparativa de métricas-chave.
 * Não usa o radar Financeiro x Energia desta edição.
 */
function ComparativoFinanceiro({ dados }) {
  const comparativoGlobal = dados?.comparativoGlobal ?? {}
  const barra = comparativoGlobal.barra ?? {}
  const tabela = comparativoGlobal.tabela ?? []

  return (
    <div className="container">
      <h1>{comparativoGlobal.titulo ?? 'Setor Financeiro × Panorama Global'}</h1>

      <div className="painel" style={{ marginTop: 16 }}>
        <BarChart titulo={barra.titulo} categorias={barra.categorias} valores={barra.valores} />
      </div>

      <div className="painel" style={{ marginTop: 16, overflowX: 'auto' }}>
        <h2 style={{ marginTop: 0 }}>Setor financeiro x panorama global — tabela comparativa</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Métrica</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Setor financeiro</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Panorama global</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Leitura</th>
            </tr>
          </thead>
          <tbody>
            {tabela.map((linha, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                <td style={{ padding: '8px 10px', color: palette.txtTitulo, fontWeight: 600, verticalAlign: 'top' }}>
                  {linha.metrica}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, verticalAlign: 'top' }}>
                  {linha.financeiro}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, verticalAlign: 'top' }}>
                  {linha.global}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtSec, verticalAlign: 'top' }}>
                  {linha.leitura}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * Comparativo (edição full): Financeiro x Energia — radar de eixos de
 * risco, gauges lado a lado e tabela-semáforo eixo a eixo.
 */
function ComparativoFull({ dados }) {
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

function Comparativo({ dados }) {
  return isFinanceiro ? <ComparativoFinanceiro dados={dados} /> : <ComparativoFull dados={dados} />
}

export default Comparativo
