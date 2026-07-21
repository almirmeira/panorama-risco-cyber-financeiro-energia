import { palette, semaforo } from '../theme.js'
import FonteTag from './FonteTag.jsx'

/**
 * Cartão de postura de risco com bolinha/faixa colorida por nível de semáforo.
 */
function SemaforoCard({ nome, nivel, justificativa, fonte }) {
  const cor = semaforo[nivel] ?? palette.txtSec

  return (
    <div className="painel" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span
          aria-hidden="true"
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: cor,
            flexShrink: 0,
            boxShadow: `0 0 0 3px ${cor}33`,
          }}
        />
        <strong style={{ color: palette.txtTitulo, fontSize: 16 }}>{nome}</strong>
      </div>
      <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>{justificativa}</p>
      <div>
        <FonteTag fonte={fonte} />
      </div>
    </div>
  )
}

export default SemaforoCard
