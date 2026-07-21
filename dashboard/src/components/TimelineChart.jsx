import { palette } from '../theme.js'

const CORES_TRILHA = {
  Financeiro: palette.azul,
  Energia: palette.ambar,
  Comum: palette.verde,
}

function corTrilha(trilha) {
  return CORES_TRILHA[trilha] ?? palette.roxo
}

/**
 * Linha do tempo em colunas por horizonte, com cartões por marco. Distingue
 * trilhas por cor (Financeiro azul, Energia âmbar, Comum verde, outras roxo).
 */
function TimelineChart({ marcos }) {
  const lista = marcos ?? []
  const horizontes = [...new Set(lista.map((m) => m.horizonte))]
  const trilhas = [...new Set(lista.map((m) => m.trilha).filter(Boolean))]

  return (
    <div>
      {trilhas.length > 0 && (
        <div style={{ display: 'flex', gap: 16, marginBottom: 12, flexWrap: 'wrap' }}>
          {trilhas.map((trilha) => (
            <span key={trilha} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: palette.txtCorpo }}>
              <span
                aria-hidden="true"
                style={{ width: 10, height: 10, borderRadius: '50%', background: corTrilha(trilha), display: 'inline-block' }}
              />
              {trilha}
            </span>
          ))}
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.max(horizontes.length, 1)}, minmax(180px, 1fr))`,
          gap: 12,
          overflowX: 'auto',
        }}
      >
        {horizontes.map((horizonte) => (
          <div key={horizonte} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div
              style={{
                textAlign: 'center',
                color: palette.txtTitulo,
                fontWeight: 600,
                fontSize: 13,
                borderBottom: `1px solid ${palette.borda}`,
                paddingBottom: 6,
              }}
            >
              {horizonte}
            </div>
            {lista
              .filter((m) => m.horizonte === horizonte)
              .map((m, i) => (
                <div
                  key={`${horizonte}-${i}`}
                  className="painel"
                  style={{
                    padding: 10,
                    borderLeft: `3px solid ${corTrilha(m.trilha)}`,
                    fontSize: 13,
                    color: palette.txtCorpo,
                  }}
                >
                  {m.trilha && (
                    <div style={{ fontSize: 11, color: corTrilha(m.trilha), fontWeight: 600, marginBottom: 4 }}>
                      {m.trilha}
                    </div>
                  )}
                  {m.item}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimelineChart
