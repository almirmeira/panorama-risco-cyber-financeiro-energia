import ReactECharts from 'echarts-for-react'
import { palette } from '../theme.js'

/**
 * Gauge ECharts de risco (0–100) com faixas de cor verde/âmbar/vermelho e
 * rótulo textual (ex.: "Elevado") sob o ponteiro.
 */
function GaugeRisco({ valor, label, titulo }) {
  const option = {
    backgroundColor: 'transparent',
    title: {
      text: titulo,
      left: 'center',
      top: 0,
      textStyle: { color: palette.txtTitulo, fontSize: 14, fontWeight: 600 },
    },
    series: [
      {
        type: 'gauge',
        min: 0,
        max: 100,
        radius: '85%',
        center: ['50%', '58%'],
        axisLine: {
          lineStyle: {
            width: 14,
            color: [
              [0.4, palette.verde],
              [0.7, palette.ambar],
              [1, palette.vermelho],
            ],
          },
        },
        pointer: { itemStyle: { color: palette.txtTitulo } },
        axisTick: { lineStyle: { color: palette.txtSec } },
        splitLine: { lineStyle: { color: palette.txtSec } },
        axisLabel: { color: palette.txtSec, fontSize: 10, distance: 18 },
        anchor: { show: true, showAbove: true, size: 10, itemStyle: { color: palette.txtTitulo } },
        progress: { show: false },
        detail: {
          valueAnimation: true,
          formatter: () => label,
          color: palette.txtCorpo,
          fontSize: 16,
          fontWeight: 600,
          offsetCenter: [0, '70%'],
        },
        data: [{ value: valor }],
      },
    ],
  }

  return <ReactECharts option={option} style={{ height: 220, width: '100%' }} opts={{ renderer: 'svg' }} />
}

export default GaugeRisco
