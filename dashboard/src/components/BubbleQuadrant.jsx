import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'

const CORES_SETOR = { Financeiro: palette.azul, Energia: palette.ambar, Ambos: palette.roxo }
const CORES_FALLBACK = [palette.azul, palette.ambar, palette.verde, palette.roxo, palette.vermelho]

const ROTULOS_HORIZONTE = { 0: 'Imediato', 1: '1–2 anos', 2: '3–5 anos', 3: '5+ anos' }

/**
 * Dispersão em quadrante (horizonte x impacto).
 * `pontos: [{ x, y, rotulo, nome, setor }]`.
 * Quando `rotulo` é fornecido, ele é exibido DENTRO da bolha (curto, ex.: um
 * número), e `nome` aparece apenas no tooltip — evita sobreposição de textos
 * longos. O tamanho da bolha é proporcional ao impacto (y).
 */
function BubbleQuadrant({ titulo, pontos, altura = 420 }) {
  const lista = pontos ?? []
  const setores = [...new Set(lista.map((p) => p.setor).filter(Boolean))]
  const usaRotulo = lista.some((p) => p.rotulo != null)

  const tamanho = (y) => 30 + (Number(y) || 0) * 8

  const corDoSetor = (setor, i) => CORES_SETOR[setor] ?? CORES_FALLBACK[i % CORES_FALLBACK.length]

  const montarSerie = (nome, itens, cor) => ({
    name: nome,
    type: 'scatter',
    data: itens.map((p) => ({ name: p.nome, value: [p.x, p.y], rotulo: p.rotulo, symbolSize: tamanho(p.y) })),
    itemStyle: { color: cor, opacity: 0.92, borderColor: palette.bgBase, borderWidth: 1 },
    label: usaRotulo
      ? {
          show: true,
          position: 'inside',
          formatter: (params) => params.data.rotulo,
          color: palette.bgBase,
          fontWeight: 700,
          fontSize: 13,
        }
      : {
          show: true,
          position: 'top',
          formatter: (params) => params.data.name,
          color: palette.txtCorpo,
          fontSize: 11,
        },
  })

  const series = setores.length
    ? setores.map((setor, i) => montarSerie(setor, lista.filter((p) => p.setor === setor), corDoSetor(setor, i)))
    : [montarSerie(titulo, lista, palette.azul)]

  const maxHorizonte = Math.max(3, ...lista.map((p) => Math.ceil(Number(p.x) || 0)))

  const option = {
    ...echartsTheme,
    title: {
      ...echartsTheme.title,
      text: titulo,
      left: 'center',
      textStyle: { ...echartsTheme.title.textStyle, fontSize: 14, fontWeight: 600 },
    },
    tooltip: {
      formatter: (params) => `${params.data.name}<br/>Horizonte: ${ROTULOS_HORIZONTE[Math.round(params.value[0])] ?? '—'} · Impacto: ${Math.round(params.value[1])}/5`,
    },
    legend: setores.length ? { ...echartsTheme.legend, bottom: 0, data: setores } : undefined,
    grid: { left: 56, right: 40, top: titulo ? 52 : 28, bottom: setores.length ? 64 : 48, containLabel: true },
    xAxis: {
      type: 'value',
      name: 'Horizonte  ·  Imediato → 5+ anos',
      nameLocation: 'middle',
      nameGap: 30,
      nameTextStyle: { color: palette.txtSec },
      min: -0.4,
      max: maxHorizonte + 0.5,
      interval: 1,
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, formatter: (v) => ROTULOS_HORIZONTE[v] ?? '' },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    yAxis: {
      type: 'value',
      name: 'Impacto',
      nameTextStyle: { color: palette.txtSec },
      min: 0,
      max: 5.6,
      interval: 1,
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, formatter: (v) => (v <= 5 ? v : '') },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    series,
  }

  return <ReactECharts option={option} style={{ height: altura, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default BubbleQuadrant
