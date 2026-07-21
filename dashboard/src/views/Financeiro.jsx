import GaugeRisco from '../components/GaugeRisco.jsx'
import SemaforoCard from '../components/SemaforoCard.jsx'
import KpiTile from '../components/KpiTile.jsx'
import BarChart from '../components/BarChart.jsx'
import PieChart from '../components/PieChart.jsx'

/**
 * Painel setorial — Financeiro: gauge de risco, dimensões de ameaça,
 * gráficos de barra/pizza e faixa de KPIs.
 */
function Financeiro({ dados }) {
  const setor = (dados?.setores ?? []).find((s) => s.id === 'financeiro')

  if (!setor) return null

  return (
    <div className="container">
      <h1>Setor {setor.nome}</h1>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}>
        <div className="painel">
          <GaugeRisco valor={setor.riscoScore} label={setor.riscoLabel} titulo="Risco Score" />
        </div>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: 16 }}
      >
        {(setor.dimensoes ?? []).map((dim) => (
          <SemaforoCard
            key={dim.nome}
            nome={dim.nome}
            nivel={dim.nivel}
            justificativa={dim.justificativa}
            fonte={dim.fonte}
          />
        ))}
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}
      >
        {setor.barra && (
          <div className="painel">
            <BarChart titulo={setor.barra.titulo} categorias={setor.barra.categorias} valores={setor.barra.valores} />
          </div>
        )}
        {setor.pizza && (
          <div className="painel">
            <PieChart titulo={setor.pizza.titulo} itens={setor.pizza.itens} />
          </div>
        )}
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}
      >
        {(setor.kpis ?? []).map((kpi, i) => (
          <KpiTile
            key={i}
            label={kpi.label}
            valor={kpi.valor}
            unidade={kpi.unidade}
            delta={kpi.delta}
            fonte={kpi.fonte}
            estimativa={kpi.estimativa}
          />
        ))}
      </div>
    </div>
  )
}

export default Financeiro
