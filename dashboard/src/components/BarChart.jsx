import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'

/**
 * Gráfico de barras verticais. `cor` é opcional (default azul da paleta).
 */
function BarChart({ titulo, categorias, valores, cor }) {
  const option = {
    ...echartsTheme,
    title: {
      ...echartsTheme.title,
      text: titulo,
      left: 'center',
      textStyle: { ...echartsTheme.title.textStyle, fontSize: 14, fontWeight: 600 },
    },
    grid: { left: 40, right: 20, top: titulo ? 48 : 24, bottom: 40, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: categorias,
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    series: [
      {
        type: 'bar',
        data: valores,
        itemStyle: { color: cor ?? palette.azul },
        barMaxWidth: 40,
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 300, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default BarChart
