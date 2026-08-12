import GaugeRisco from '../components/GaugeRisco.jsx'
import SemaforoCard from '../components/SemaforoCard.jsx'
import KpiTile from '../components/KpiTile.jsx'
import { isFinanceiro } from '../edition.js'

/**
 * Visão Geral — edição "financeiro": apenas o gauge do setor financeiro,
 * a faixa de KPIs do panorama global e os KPIs-título do financeiro. Não
 * exibe gauge/postura de energia.
 */
function VisaoGeralFinanceiro({ dados }) {
  const setores = dados?.setores ?? []
  const financeiro = setores.find((s) => s.id === 'financeiro')
  const global = dados?.global ?? {}
  const kpisGlobal = global.kpis ?? []
  const kpisFinanceiro = financeiro?.kpis ?? []

  return (
    <div className="container">
      {financeiro && (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}>
          <div className="painel">
            <GaugeRisco
              valor={financeiro.riscoScore}
              label={financeiro.riscoLabel}
              titulo={`Risco — ${financeiro.nome}`}
            />
          </div>
        </div>
      )}

      {kpisGlobal.length > 0 && (
        <>
          <h2 style={{ margin: '24px 0 0' }}>{global.titulo ?? 'Panorama Global'}</h2>
          <div
            className="grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}
          >
            {kpisGlobal.map((kpi, i) => (
              <KpiTile
                key={`global-${i}`}
                label={kpi.label}
                valor={kpi.valor}
                unidade={kpi.unidade}
                delta={kpi.delta}
                fonte={kpi.fonte}
                estimativa={kpi.estimativa}
              />
            ))}
          </div>
        </>
      )}

      {kpisFinanceiro.length > 0 && (
        <>
          <h2 style={{ margin: '24px 0 0' }}>KPIs — Setor Financeiro</h2>
          <div
            className="grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}
          >
            {kpisFinanceiro.slice(0, 3).map((kpi, i) => (
              <KpiTile
                key={`fin-${i}`}
                label={kpi.label}
                valor={kpi.valor}
                unidade={kpi.unidade}
                delta={kpi.delta}
                fonte={kpi.fonte}
                estimativa={kpi.estimativa}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Visão Geral (edição full): comparativo lado a lado dos dois setores
 * (Financeiro e Energia) — score de risco, postura de semáforo e KPIs-título.
 */
function VisaoGeralFull({ dados }) {
  const setores = dados?.setores ?? []

  return (
    <div className="container">
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}>
        {setores.map((setor) => (
          <div className="painel" key={setor.id}>
            <GaugeRisco valor={setor.riscoScore} label={setor.riscoLabel} titulo={`Risco — ${setor.nome}`} />
          </div>
        ))}
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 16 }}
      >
        {setores.map((setor) => {
          const primeiroKpi = setor.kpis?.[0]
          const justificativa = primeiroKpi
            ? `Risco ${setor.riscoLabel} (score ${setor.riscoScore}/100) — ${primeiroKpi.label}: ${primeiroKpi.valor}${
                primeiroKpi.unidade ? ` ${primeiroKpi.unidade}` : ''
              }.`
            : `Risco ${setor.riscoLabel} (score ${setor.riscoScore}/100).`

          return (
            <SemaforoCard
              key={setor.id}
              nome={setor.nome}
              nivel={setor.posturaSemaforo}
              justificativa={justificativa}
              fonte={primeiroKpi?.fonte}
            />
          )
        })}
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}
      >
        {setores.flatMap((setor) =>
          (setor.kpis ?? []).slice(0, 3).map((kpi, i) => (
            <KpiTile
              key={`${setor.id}-${i}`}
              label={`${setor.nome}: ${kpi.label}`}
              valor={kpi.valor}
              unidade={kpi.unidade}
              delta={kpi.delta}
              fonte={kpi.fonte}
              estimativa={kpi.estimativa}
            />
          ))
        )}
      </div>
    </div>
  )
}

function VisaoGeral({ dados }) {
  return isFinanceiro ? <VisaoGeralFinanceiro dados={dados} /> : <VisaoGeralFull dados={dados} />
}

export default VisaoGeral
