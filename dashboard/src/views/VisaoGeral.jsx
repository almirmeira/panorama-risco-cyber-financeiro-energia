import GaugeRisco from '../components/GaugeRisco.jsx'
import SemaforoCard from '../components/SemaforoCard.jsx'
import KpiTile from '../components/KpiTile.jsx'

/**
 * Visão Geral: comparativo lado a lado dos dois setores (Financeiro e
 * Energia) — score de risco, postura de semáforo e KPIs-título.
 */
function VisaoGeral({ dados }) {
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

export default VisaoGeral
