import { palette } from '../theme.js'

/**
 * Navegação por abas simples. `abas: [{id, rotulo}]`; a aba `ativa` recebe
 * destaque de borda/fundo em azul.
 */
function TabNav({ abas, ativa, onSelecionar }) {
  return (
    <nav style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {abas.map((aba) => {
        const selecionada = aba.id === ativa
        return (
          <button
            key={aba.id}
            type="button"
            onClick={() => onSelecionar?.(aba.id)}
            aria-pressed={selecionada}
            style={{
              cursor: 'pointer',
              padding: '8px 14px',
              borderRadius: 6,
              fontSize: 13,
              fontWeight: selecionada ? 600 : 400,
              color: selecionada ? palette.azul : palette.txtCorpo,
              background: selecionada ? `${palette.azul}1a` : palette.bgPainel,
              border: `1px solid ${selecionada ? palette.azul : palette.borda}`,
            }}
          >
            {aba.rotulo}
          </button>
        )
      })}
    </nav>
  )
}

export default TabNav
