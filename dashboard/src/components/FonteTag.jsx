import { palette } from '../theme.js'

/**
 * Selo discreto indicando a origem de um dado (ex.: "cap. 02"), com marcação
 * opcional de estimativa/ressalva.
 */
function FonteTag({ fonte, estimativa }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11,
        color: palette.txtSec,
        background: palette.bgCartao,
        border: `1px solid ${palette.borda}`,
        borderRadius: 4,
        padding: '2px 6px',
        lineHeight: 1.4,
      }}
    >
      {fonte}
      {estimativa && (
        <span title="estimativa / dado com ressalva" aria-label="estimativa / dado com ressalva">
          ⚠
        </span>
      )}
    </span>
  )
}

export default FonteTag
