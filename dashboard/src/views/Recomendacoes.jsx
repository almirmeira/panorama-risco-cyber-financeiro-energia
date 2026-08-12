import { palette } from '../theme.js'
import TimelineChart from '../components/TimelineChart.jsx'
import { isFinanceiro } from '../edition.js'

const TRILHAS_FINANCEIRO = new Set(['Financeiro', 'Comum'])

/**
 * Roadmap de recomendações: linha do tempo por horizonte, checklist de
 * quick wins e perguntas que o board deve fazer.
 *
 * Na edição "financeiro", o roadmap é filtrado para as trilhas Financeiro
 * e Comum (a trilha Energia é removida). Quick wins e perguntas de board
 * são genéricas e permanecem inalteradas em ambas as edições.
 */
function Recomendacoes({ dados }) {
  const recomendacoes = dados?.recomendacoes ?? {}
  const quickWins = recomendacoes.quickWins ?? []
  const perguntasBoard = recomendacoes.perguntasBoard ?? []
  const roadmapCompleto = recomendacoes.roadmap ?? []
  const roadmap = isFinanceiro
    ? roadmapCompleto.filter((marco) => TRILHAS_FINANCEIRO.has(marco.trilha))
    : roadmapCompleto

  return (
    <div className="container">
      <h1>Recomendações e roadmap</h1>

      <div className="painel" style={{ marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Roadmap por horizonte</h2>
        <TimelineChart marcos={roadmap} />
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}
      >
        <div className="painel">
          <h2 style={{ marginTop: 0 }}>Quick wins</h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {quickWins.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: 4,
                    border: `1px solid ${palette.verde}`,
                    color: palette.verde,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 700,
                    marginTop: 1,
                  }}
                >
                  ✓
                </span>
                <span style={{ color: palette.txtCorpo, fontSize: 13 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="painel">
          <h2 style={{ marginTop: 0 }}>Perguntas que o board deve fazer</h2>
          <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {perguntasBoard.map((pergunta, i) => (
              <li key={i} style={{ color: palette.txtCorpo, fontSize: 13 }}>
                {pergunta}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Recomendacoes
