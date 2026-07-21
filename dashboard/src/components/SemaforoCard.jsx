import { palette, semaforo } from '../theme.js'
import FonteTag from './FonteTag.jsx'

/**
 * Cartão de postura de risco com bolinha/faixa colorida por nível de semáforo.
 * `estimativa` (opcional, default false) é repassada ao FonteTag para exibir
 * o selo ⚠ quando o dado é uma estimativa/parcialmente confirmado.
 */
function SemaforoCard({ nome, nivel, justificativa, fonte, estimativa = false }) {
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
        <FonteTag fonte={fonte} estimativa={estimativa} />
      </div>
    </div>
  )
}

export default SemaforoCard
