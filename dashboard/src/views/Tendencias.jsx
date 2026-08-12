import BubbleQuadrant from '../components/BubbleQuadrant.jsx'
import SemaforoCard from '../components/SemaforoCard.jsx'
import { palette } from '../theme.js'

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
 * impacto (bolhas numeradas + legenda) e grade de cartões de urgência.
 */
function Tendencias({ dados }) {
  const tendencias = dados?.tendencias ?? []

  const pontosBrutos = tendencias.map((t, i) => ({
    nome: t.nome,
    rotulo: String(i + 1),
    x: horizonteParaX(t.horizonte),
    y: t.impacto,
    setor: setorPredominante(t),
  }))

  // Quando dois ou mais pontos caem no mesmo (x, y), as bolhas se empilham.
  // Deslocamos horizontalmente as ocorrências repetidas (leque no eixo do
  // horizonte), preservando o impacto (y) exato — que é a leitura crítica.
  const contagemPorPosicao = new Map()
  const pontos = pontosBrutos.map((p) => {
    const chave = `${p.x}|${p.y}`
    const ocorrencia = contagemPorPosicao.get(chave) ?? 0
    contagemPorPosicao.set(chave, ocorrencia + 1)
    return ocorrencia === 0 ? p : { ...p, x: p.x + ocorrencia * 0.42 }
  })

  return (
    <div className="container">
      <h1>Tendências emergentes</h1>

      <div className="painel" style={{ marginTop: 16 }}>
        <BubbleQuadrant titulo="Horizonte × Impacto" pontos={pontos} altura={440} />
        <p style={{ color: palette.txtSec, fontSize: 12, margin: '4px 0 10px' }}>
          Tamanho da bolha = impacto potencial · cor = setor de exposição predominante · escala qualitativa de síntese.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px 20px',
            borderTop: `1px solid ${palette.borda}`,
            paddingTop: 10,
            fontSize: 13,
            color: palette.txtCorpo,
          }}
        >
          {tendencias.map((t, i) => (
            <span key={t.nome}>
              <strong style={{ color: palette.azul }}>{i + 1}.</strong> {t.nome}
            </span>
          ))}
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: 16 }}>
        {tendencias.map((t, i) => (
          <SemaforoCard
            key={t.nome}
            nome={`${i + 1}. ${t.nome}`}
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
