import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'

/**
 * Radar com duas séries sobrepostas (A azul, B âmbar). `eixos` vira os
 * `indicator` do radar (máx. 5 recomendado).
 */
function RadarChart({ eixos, serieA, serieB, nomeA, nomeB }) {
  const indicator = (eixos ?? []).map((eixo) =>
    typeof eixo === 'string' ? { name: eixo, max: 5 } : eixo
  )

  const option = {
    ...echartsTheme,
    tooltip: {},
    legend: {
      ...echartsTheme.legend,
      bottom: 0,
      data: [nomeA, nomeB],
    },
    radar: {
      indicator,
      center: ['50%', '48%'],
      radius: '65%',
      axisName: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda } },
      splitArea: { show: false },
      axisLine: { lineStyle: { color: palette.borda } },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            name: nomeA,
            value: serieA,
            itemStyle: { color: palette.azul },
            lineStyle: { color: palette.azul },
            areaStyle: { color: palette.azul, opacity: 0.2 },
          },
          {
            name: nomeB,
            value: serieB,
            itemStyle: { color: palette.ambar },
            lineStyle: { color: palette.ambar },
            areaStyle: { color: palette.ambar, opacity: 0.2 },
          },
        ],
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 320, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default RadarChart
