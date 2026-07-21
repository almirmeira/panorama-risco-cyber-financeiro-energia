import BubbleQuadrant from '../components/BubbleQuadrant.jsx'
import SemaforoCard from '../components/SemaforoCard.jsx'

/**
 * Converte o texto livre de `horizonte` em posição numérica no eixo x
 * (0 = imediato, 1 = 1–2 anos, 2 = 3–5 anos). Quando o texto descreve uma
 * janela (ex.: "Imediato → 1–2 anos" ou "colheita hoje, decifração em
 * 3–5 anos"), prevalece o horizonte mais distante citado, por ser o que
 * define a urgência real de preparo.
 */
function horizonteParaX(horizonte) {
  const texto = (horizonte ?? '').toLowerCase()
  if (texto.includes('3–5 anos') || texto.includes('3-5 anos')) return 2
  if (texto.includes('1–2 anos') || texto.includes('1-2 anos')) return 1
  if (texto.includes('imediato')) return 0
  return 1
}

/**
 * Deriva o setor de exposição predominante de uma tendência comparando
 * `exposicaoFin` e `exposicaoEnergia`.
 */
function setorPredominante(tendencia) {
  const fin = Number(tendencia.exposicaoFin) || 0
  const energia = Number(tendencia.exposicaoEnergia) || 0
  if (fin > energia) return 'Financeiro'
  if (energia > fin) return 'Energia'
  return 'Ambos'
}

/**
 * Tendências emergentes (2026–2028): dispersão em quadrante horizonte x
 * impacto e grade de cartões de urgência por tendência.
 */
function Tendencias({ dados }) {
  const tendencias = dados?.tendencias ?? []

  const pontos = tendencias.map((t) => ({
    nome: t.nome,
    x: horizonteParaX(t.horizonte),
    y: t.impacto,
    setor: setorPredominante(t),
  }))

  return (
    <div className="container">
      <h1>Tendências emergentes</h1>

      <div className="painel" style={{ marginTop: 16 }}>
        <BubbleQuadrant titulo="Horizonte x Impacto" pontos={pontos} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 16 }}>
        {tendencias.map((t) => (
          <SemaforoCard
            key={t.nome}
            nome={t.nome}
            nivel={t.semaforoUrgencia}
            justificativa={`Horizonte: ${t.horizonte} · Exposição Financeiro ${t.exposicaoFin}/5 · Exposição Energia ${t.exposicaoEnergia}/5`}
            fonte={t.fonte}
            estimativa={t.estimativa}
          />
        ))}
      </div>
    </div>
  )
}

export default Tendencias
