export const palette = {
  bgBase: '#0d1117', bgPainel: '#161b22', bgCartao: '#1c2128', borda: '#30363d',
  txtTitulo: '#e6edf3', txtCorpo: '#c9d1d9', txtSec: '#8b949e',
  azul: '#58a6ff', verde: '#3fb950', vermelho: '#f85149',
  ambar: '#e3b341', ambar2: '#d29922', roxo: '#a371f7',
};
export const semaforo = { verde: palette.verde, ambar: palette.ambar, vermelho: palette.vermelho };
export const echartsTheme = {
  backgroundColor: 'transparent',
  textStyle: { color: palette.txtCorpo, fontFamily: 'system-ui, sans-serif' },
  color: [palette.azul, palette.ambar, palette.verde, palette.roxo, palette.vermelho, palette.txtSec],
  title: { textStyle: { color: palette.txtTitulo } },
  legend: { textStyle: { color: palette.txtCorpo } },
};
