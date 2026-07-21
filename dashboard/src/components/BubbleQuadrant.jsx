import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'

const CORES_SETOR = [palette.azul, palette.ambar, palette.verde, palette.roxo, palette.vermelho, palette.txtSec]

/**
 * Dispersão em quadrante (horizonte x impacto). `pontos: [{nome, x, y, setor}]`.
 * `symbolSize` é proporcional ao impacto (y); cor por `setor` quando presente.
 */
function BubbleQuadrant({ titulo, pontos }) {
  const lista = pontos ?? []
  const setores = [...new Set(lista.map((p) => p.setor).filter(Boolean))]

  const tamanho = (y) => 16 + (Number(y) || 0) * 6

  const series = setores.length
    ? setores.map((setor, i) => ({
        name: setor,
        type: 'scatter',
        data: lista
          .filter((p) => p.setor === setor)
          .map((p) => ({ name: p.nome, value: [p.x, p.y], symbolSize: tamanho(p.y) })),
        itemStyle: { color: CORES_SETOR[i % CORES_SETOR.length] },
        label: {
          show: true,
          formatter: (params) => params.data.name,
          position: 'top',
          color: palette.txtCorpo,
          fontSize: 11,
        },
      }))
    : [
        {
          name: titulo,
          type: 'scatter',
          data: lista.map((p) => ({ name: p.nome, value: [p.x, p.y], symbolSize: tamanho(p.y) })),
          itemStyle: { color: palette.azul },
          label: {
            show: true,
            formatter: (params) => params.data.name,
            position: 'top',
            color: palette.txtCorpo,
            fontSize: 11,
          },
        },
      ]

  const maxHorizonte = Math.max(3, ...lista.map((p) => Number(p.x) || 0))

  const option = {
    ...echartsTheme,
    title: {
      ...echartsTheme.title,
      text: titulo,
      left: 'center',
      textStyle: { ...echartsTheme.title.textStyle, fontSize: 14, fontWeight: 600 },
    },
    tooltip: {
      formatter: (params) => `${params.data.name}<br/>Horizonte: ${params.value[0]} · Impacto: ${params.value[1]}`,
    },
    legend: setores.length ? { ...echartsTheme.legend, bottom: 0, data: setores } : undefined,
    grid: { left: 50, right: 30, top: titulo ? 56 : 32, bottom: setores.length ? 56 : 40, containLabel: true },
    xAxis: {
      type: 'value',
      name: 'Imediato → 3–5 anos',
      nameLocation: 'middle',
      nameGap: 28,
      nameTextStyle: { color: palette.txtCorpo },
      min: 0,
      max: maxHorizonte,
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    yAxis: {
      type: 'value',
      name: 'Impacto',
      nameTextStyle: { color: palette.txtCorpo },
      min: 0,
      max: 5,
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    series,
  }

  return <ReactECharts option={option} style={{ height: 360, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default BubbleQuadrant
