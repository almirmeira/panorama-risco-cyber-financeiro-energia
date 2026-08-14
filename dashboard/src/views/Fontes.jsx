import { palette } from '../theme.js'
import KpiTile from '../components/KpiTile.jsx'
import { isFinanceiro } from '../edition.js'

/**
 * Metodologia e fontes: tese condensada, hierarquia de fontes, contadores
 * de vendors/vozes e link ao repositório. Na edição "financeiro", exibe uma
 * linha adicional no topo indicando o recorte setorial desta edição.
 */
function Fontes({ dados }) {
  const fontes = dados?.fontes ?? {}
  const hierarquia = fontes.hierarquia ?? []

  return (
    <div className="container">
      <h1>Metodologia e fontes</h1>

      {isFinanceiro && (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, fontSize: 12, margin: 0, textTransform: 'uppercase', letterSpacing: 0.4 }}>
            Edição: recorte do setor financeiro
          </p>
        </div>
      )}

      {fontes.metodologiaResumo && (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtCorpo, fontSize: 14, margin: 0 }}>{fontes.metodologiaResumo}</p>
        </div>
      )}

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
        <KpiTile label="Vendors e órgãos consultados" valor={fontes.nVendors} />
        <KpiTile label="Vozes/relatórios distintos" valor={fontes.nVozes} />
      </div>

      <div className="painel" style={{ marginTop: 16, overflowX: 'auto' }}>
        <h2 style={{ marginTop: 0 }}>Hierarquia de fontes</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Nível</th>
              <th style={{ padding: '8px 10px', color: palette.txtTitulo }}>Exemplos</th>
            </tr>
          </thead>
          <tbody>
            {hierarquia.map((nivel, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                <td style={{ padding: '8px 10px', color: palette.txtTitulo, fontWeight: 600, verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                  {nivel.nivel}
                </td>
                <td style={{ padding: '8px 10px', color: palette.txtCorpo, verticalAlign: 'top' }}>{nivel.exemplos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="painel" style={{ marginTop: 16 }}>
        <p style={{ color: palette.txtSec, fontSize: 12, margin: 0 }}>
          Regra fixa de validação: nenhum número-chave é citado com apenas uma fonte quando uma segunda fonte
          independente estava disponível (regra "≥2 fontes por número"). Dados sem segunda fonte independente são
          marcados como estimativa (selo ⚠) nos KPIs deste dashboard.
        </p>
      </div>

      {fontes.repoUrl && (
        <p style={{ marginTop: 16 }}>
          <a href={fontes.repoUrl} target="_blank" rel="noreferrer" style={{ color: palette.azul }}>
            Repositório do projeto no GitHub
          </a>
        </p>
      )}
    </div>
  )
}

export default Fontes
