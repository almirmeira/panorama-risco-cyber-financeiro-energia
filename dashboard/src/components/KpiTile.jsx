import { palette } from '../theme.js'
import FonteTag from './FonteTag.jsx'

/**
 * Bloco de KPI: número grande + unidade, rótulo acima, variação (delta) abaixo
 * e selo de fonte. Neste domínio (ameaça cibernética), delta crescente (+) é
 * indesejável (vermelho) e delta decrescente (-) é favorável (verde).
 */
function KpiTile({ label, valor, unidade, delta, fonte, estimativa }) {
  const deltaTexto = typeof delta === 'string' ? delta.trim() : ''
  const cresce = deltaTexto.startsWith('+')
  const decresce = deltaTexto.startsWith('-')
  const corDelta = cresce ? palette.vermelho : decresce ? palette.verde : palette.txtSec
  const seta = cresce ? '▲' : decresce ? '▼' : ''

  return (
    <div className="painel" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <span style={{ color: palette.txtSec, fontSize: 12 }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{ color: palette.txtTitulo, fontSize: 28, fontWeight: 700 }}>{valor}</span>
        {unidade && <span style={{ color: palette.txtSec, fontSize: 13 }}>{unidade}</span>}
      </div>
      {deltaTexto && (
        <span style={{ color: corDelta, fontSize: 12 }}>
          {seta} {deltaTexto}
        </span>
      )}
      <div>
        <FonteTag fonte={fonte} estimativa={estimativa} />
      </div>
    </div>
  )
}

export default KpiTile
