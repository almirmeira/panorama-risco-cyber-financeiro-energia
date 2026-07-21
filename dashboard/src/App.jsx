import { useState } from 'react'
import dados from './data/dashboard.json'
import TabNav from './components/TabNav.jsx'
import VisaoGeral from './views/VisaoGeral.jsx'
import Financeiro from './views/Financeiro.jsx'
import Energia from './views/Energia.jsx'
import Comparativo from './views/Comparativo.jsx'
import Tendencias from './views/Tendencias.jsx'
import Recomendacoes from './views/Recomendacoes.jsx'
import Fontes from './views/Fontes.jsx'

// Views reais das Tasks 4–7.
const ABAS = [
  { id: 'visao-geral', rotulo: 'Visão Geral' },
  { id: 'financeiro', rotulo: 'Financeiro' },
  { id: 'energia', rotulo: 'Energia' },
  { id: 'comparativo', rotulo: 'Comparativo' },
  { id: 'tendencias', rotulo: 'Tendências' },
  { id: 'recomendacoes', rotulo: 'Recomendações' },
  { id: 'fontes', rotulo: 'Fontes' },
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
      {aba === 'comparativo' && <Comparativo dados={dados} />}
      {aba === 'tendencias' && <Tendencias dados={dados} />}
      {aba === 'recomendacoes' && <Recomendacoes dados={dados} />}
      {aba === 'fontes' && <Fontes dados={dados} />}
    </>
  )
}

export default App
