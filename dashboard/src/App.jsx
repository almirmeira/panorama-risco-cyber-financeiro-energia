import { useState } from 'react'
import FonteTag from './components/FonteTag.jsx'
import SemaforoCard from './components/SemaforoCard.jsx'
import GaugeRisco from './components/GaugeRisco.jsx'
import KpiTile from './components/KpiTile.jsx'
import TabNav from './components/TabNav.jsx'
import BarChart from './components/BarChart.jsx'
import PieChart from './components/PieChart.jsx'
import RadarChart from './components/RadarChart.jsx'
import BubbleQuadrant from './components/BubbleQuadrant.jsx'
import TimelineChart from './components/TimelineChart.jsx'

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

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 16 }}>
        <div className="painel">
          <BarChart
            titulo="Incidentes por ano"
            categorias={['2022', '2023', '2024', '2025']}
            valores={[120, 145, 180, 202]}
          />
        </div>
        <div className="painel">
          <PieChart
            titulo="Distribuição por vetor"
            itens={[
              { nome: 'Ransomware', valor: 40 },
              { nome: 'Phishing', valor: 25 },
              { nome: 'Terceiros', valor: 20 },
              { nome: 'Outros', valor: 15 },
            ]}
          />
        </div>
        <div className="painel">
          <RadarChart
            eixos={['Detecção', 'Resposta', 'Governança', 'Terceiros', 'Recuperação']}
            serieA={[4, 3, 3, 2, 4]}
            serieB={[3, 4, 2, 3, 3]}
            nomeA="Financeiro"
            nomeB="Energia"
          />
        </div>
        <div className="painel">
          <BubbleQuadrant
            titulo="Riscos emergentes"
            pontos={[
              { nome: 'IA adversarial', x: 1, y: 4, setor: 'Financeiro' },
              { nome: 'OT/SCADA', x: 2, y: 5, setor: 'Energia' },
              { nome: 'Quantum', x: 3, y: 3, setor: 'Comum' },
            ]}
          />
        </div>
      </div>

      <div className="painel" style={{ marginTop: 16 }}>
        <TimelineChart
          marcos={[
            { horizonte: 'Imediato', trilha: 'Financeiro', item: 'Ransomware direcionado a bancos' },
            { horizonte: 'Imediato', trilha: 'Energia', item: 'Ataques a OT/SCADA' },
            { horizonte: '1-2 anos', trilha: 'Comum', item: 'Regulação de IA em cibersegurança' },
            { horizonte: '3-5 anos', trilha: 'Comum', item: 'Criptografia pós-quântica' },
          ]}
        />
      </div>
    </div>
  )
}

export default App
