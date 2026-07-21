import { useState } from 'react'
import dados from './data/dashboard.json'
import TabNav from './components/TabNav.jsx'
import VisaoGeral from './views/VisaoGeral.jsx'
import Financeiro from './views/Financeiro.jsx'
import Energia from './views/Energia.jsx'

// Views reais das Tasks 4–6. As demais primitivas (RadarChart,
// BubbleQuadrant, TimelineChart) serão integradas pelas próximas views
// (comparativo, tendências) em tasks futuras.
const ABAS = [
  { id: 'visao-geral', rotulo: 'Visão Geral' },
  { id: 'financeiro', rotulo: 'Financeiro' },
  { id: 'energia', rotulo: 'Energia' },
]

function App() {
  const [aba, setAba] = useState('visao-geral')

  return (
    <>
      <div className="container">
        <TabNav abas={ABAS} ativa={aba} onSelecionar={setAba} />
      </div>
      {aba === 'visao-geral' && <VisaoGeral dados={dados} />}
      {aba === 'financeiro' && <Financeiro dados={dados} />}
      {aba === 'energia' && <Energia dados={dados} />}
    </>
  )
}

export default App
