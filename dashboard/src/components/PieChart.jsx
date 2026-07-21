import ReactECharts from 'echarts-for-react'
import { echartsTheme } from '../theme.js'

/**
 * Gráfico de rosca (doughnut). `itens: [{nome, valor}]`.
 */
function PieChart({ titulo, itens }) {
  const option = {
    ...echartsTheme,
    title: {
      ...echartsTheme.title,
      text: titulo,
      left: 'center',
      textStyle: { ...echartsTheme.title.textStyle, fontSize: 14, fontWeight: 600 },
    },
    tooltip: { trigger: 'item' },
    legend: {
      ...echartsTheme.legend,
      orient: 'horizontal',
      bottom: 0,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['50%', '48%'],
        avoidLabelOverlap: true,
        itemStyle: { borderColor: 'transparent', borderWidth: 2 },
        label: { color: echartsTheme.textStyle.color },
        labelLine: { lineStyle: { color: echartsTheme.textStyle.color } },
        data: (itens ?? []).map((item) => ({ name: item.nome, value: item.valor })),
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 300, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default PieChart
