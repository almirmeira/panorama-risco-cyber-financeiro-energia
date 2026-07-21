import { useState } from 'react'
import FonteTag from './components/FonteTag.jsx'
import SemaforoCard from './components/SemaforoCard.jsx'
import GaugeRisco from './components/GaugeRisco.jsx'
import KpiTile from './components/KpiTile.jsx'
import TabNav from './components/TabNav.jsx'

function App() {
  // Smoke-test temporário dos componentes-primitiva (Task 4). Será
  // substituído pelas views reais nas próximas tasks.
  const [aba, setAba] = useState('financeiro')

  return (
    <div className="container">
      <h1>Painel Executivo de Risco Cibernético</h1>
      <TabNav
        abas={[
          { id: 'financeiro', rotulo: 'Financeiro' },
          { id: 'energia', rotulo: 'Energia' },
        ]}
        ativa={aba}
        onSelecionar={setAba}
      />
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
        <SemaforoCard
          nome={aba === 'financeiro' ? 'Setor Financeiro' : 'Setor Energia'}
          nivel="ambar"
          justificativa="Postura de risco elevada, com aumento de ransomware direcionado."
          fonte="cap. 02"
        />
        <GaugeRisco valor={72} label="Elevado" titulo="Risco Score" />
        <KpiTile
          label="Custo médio de violação de dados"
          valor="5,56"
          unidade="US$ mi"
          delta="-9% a/a"
          fonte="cap. 02"
        />
        <KpiTile
          label="Ransomware direto contra instituições"
          valor="202"
          unidade="incidentes em 2025"
          delta="+30% a/a"
          fonte="cap. 02"
          estimativa
        />
      </div>
      <p style={{ marginTop: 8 }}>
        <FonteTag fonte="dossiê" estimativa />
      </p>
    </div>
  )
}

export default App
