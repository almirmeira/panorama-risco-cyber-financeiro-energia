import { useMemo, useState } from 'react'
import { palette } from '../theme.js'

/**
 * Tabela de indicadores do recorte financeiro.
 *
 * Os valores chegam já neutralizados (defang) da ingestão — 'hxxp://' e
 * 'dominio[.]com'. Isso é deliberado: a página é pública e voltada a leitor
 * executivo, então o indicador é citado como evidência, não distribuído como
 * item acionável. Quem precisa do dado cru consulta o MISP.
 */
const CATEGORIA_ROTULO = {
  banker: 'Trojan bancário',
  stealer: 'Ladrão de credenciais',
  rat: 'RAT',
  'atm-pos': 'ATM / PDV',
  loader: 'Carregador',
}

function TabelaIocs({ iocs }) {
  const [filtro, setFiltro] = useState('todos')

  const filtrados = useMemo(() => {
    if (filtro === 'todos') return iocs
    if (filtro === 'brasil') return iocs.filter((i) => i.brasil)
    return iocs.filter((i) => i.categoria === filtro)
  }, [iocs, filtro])

  const categorias = useMemo(() => {
    const presentes = new Set(iocs.map((i) => i.categoria).filter(Boolean))
    return [...presentes]
  }, [iocs])

  const botoes = [
    { id: 'todos', rotulo: `Todos (${iocs.length})` },
    { id: 'brasil', rotulo: `Sinal Brasil (${iocs.filter((i) => i.brasil).length})` },
    ...categorias.map((c) => ({
      id: c,
      rotulo: `${CATEGORIA_ROTULO[c] ?? c} (${iocs.filter((i) => i.categoria === c).length})`,
    })),
  ]

  if (!iocs.length) {
    return (
      <p style={{ color: palette.txtSec, fontSize: 13 }}>
        Nenhum indicador no recorte financeiro nesta janela. Não é falha: significa que as fontes
        abertas não publicaram, no período, indicador atribuível a família financeira.
      </p>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        {botoes.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setFiltro(b.id)}
            style={{
              padding: '5px 12px',
              borderRadius: 999,
              fontSize: 12,
              cursor: 'pointer',
              background: filtro === b.id ? `${palette.azul}22` : 'transparent',
              border: `1px solid ${filtro === b.id ? palette.azul : palette.borda}`,
              color: filtro === b.id ? palette.azul : palette.txtSec,
            }}
          >
            {b.rotulo}
          </button>
        ))}
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
              {['Indicador', 'Tipo', 'Família', 'Categoria', 'Primeira observação', 'Fonte', 'TLP'].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: 'left',
                    padding: '8px 10px',
                    color: palette.txtSec,
                    fontWeight: 600,
                    fontSize: 12,
                    textTransform: 'uppercase',
                    letterSpacing: 0.3,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtrados.map((i, idx) => (
              <tr key={`${i.valor}-${idx}`} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                <td
                  style={{
                    padding: '8px 10px',
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    color: palette.txtTitulo,
                    maxWidth: 340,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={i.valor}
                >
                  {i.brasil && (
                    <span aria-label="sinal Brasil" title="Sinal Brasil" style={{ marginRight: 6 }}>
                      🇧🇷
                    </span>
                  )}
                  {i.valor}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>{i.tipo}</td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, whiteSpace: 'nowrap' }}>
                  {i.familia ?? '—'}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                  {CATEGORIA_ROTULO[i.categoria] ?? '—'}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                  {i.primeiraObs ? new Date(i.primeiraObs).toLocaleString('pt-BR') : '—'}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>{i.fonte}</td>
                <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      padding: '2px 8px',
                      borderRadius: 4,
                      fontSize: 11,
                      background: palette.bgCartao,
                      border: `1px solid ${palette.borda}`,
                      color: palette.txtSec,
                    }}
                  >
                    {(i.tlp ?? '').replace('tlp:', '').toUpperCase() || '—'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: palette.txtSec, fontSize: 12, marginTop: 12 }}>
        Indicadores exibidos de forma neutralizada (<code>hxxp://</code>, <code>dominio[.]com</code>) —
        são citados como evidência, não distribuídos para bloqueio. Apenas conteúdo TLP:WHITE/CLEAR
        chega a esta página.
      </p>
    </>
  )
}

export default TabelaIocs
