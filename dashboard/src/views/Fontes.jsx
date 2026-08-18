import { palette } from '../theme.js'
import KpiTile from '../components/KpiTile.jsx'
import { isFinanceiro } from '../edition.js'
import { useThreatLive } from '../hooks/useThreatLive.js'

/**
 * Fontes e método — o aparato de evidência do painel, nas duas camadas que ele
 * passou a ter.
 *
 * Antes esta aba descrevia só a camada estratégica (relatórios anuais sob a
 * regra de duas fontes), que era tudo o que existia. Desde que as abas
 * operacionais entraram, metade do que está publicado vinha de fontes que esta
 * página não citava — e a diferença de peso probatório entre "custo médio de
 * violação segundo a IBM" e "domínio visto ontem num feed aberto" ficava sem
 * lugar onde ser explicada. As duas camadas agora aparecem lado a lado, cada
 * uma com a sua regra declarada.
 *
 * Nada aqui é escrito no componente: todo texto vem de dashboard.json. A única
 * informação de runtime é o estado das fontes operacionais no último ciclo de
 * ingestão, lido do mesmo threat-live.json que alimenta as abas ao vivo —
 * dizer quais fontes existem sem dizer quais responderam seria meia verdade.
 */

function Painel({ titulo, children, nota }) {
  return (
    <div className="painel">
      {titulo && <h3 style={{ margin: '0 0 12px', fontSize: 14, color: palette.txtTitulo }}>{titulo}</h3>}
      {children}
      {nota && <p style={{ color: palette.txtSec, fontSize: 12, margin: '10px 0 0' }}>{nota}</p>}
    </div>
  )
}

const CELULA = { padding: '10px', verticalAlign: 'top' }

function Secao({ titulo, children }) {
  return (
    <>
      <h2 style={{ margin: '28px 0 0', fontSize: 17 }}>{titulo}</h2>
      {children}
    </>
  )
}

/** Estado da fonte no último ciclo de ingestão, quando o JSON ao vivo responde. */
function EstadoAoVivo({ estado }) {
  if (!estado) return null
  const cor = estado.status === 'ok' ? palette.verde : palette.ambar
  return (
    <span style={{ color: cor, fontSize: 11.5, whiteSpace: 'nowrap' }}>
      ● {estado.status}
      {estado.status === 'ok' && estado.indicadores != null && (
        <span style={{ color: palette.txtSec }}> · {estado.indicadores} reg.</span>
      )}
    </span>
  )
}

function Fontes({ dados }) {
  const fontes = dados?.fontes ?? {}
  const hierarquia = fontes.hierarquia ?? []
  const camadas = fontes.camadas ?? []
  const operacionais = fontes.operacionais ?? []
  const incorporacoes = fontes.incorporacoesRecentes ?? []
  const descartadas = fontes.descartadas ?? []
  const governanca = fontes.governanca ?? []
  const cuidados = fontes.cuidadosMetodologicos ?? []
  const cadencia = fontes.cadencia ?? []

  const { estado, dados: aoVivo } = useThreatLive()
  const estadoPorFonte = {}
  if (estado === 'ok') {
    for (const f of aoVivo?.fontes ?? []) estadoPorFonte[f.nome] = f
  }

  return (
    <div className="container">
      <h1>Fontes e método</h1>

      {isFinanceiro && (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, fontSize: 12, margin: 0, textTransform: 'uppercase', letterSpacing: 0.4 }}>
            Edição: recorte do setor financeiro
          </p>
        </div>
      )}

      {fontes.metodologiaResumo && (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtCorpo, fontSize: 14, margin: 0, lineHeight: 1.6 }}>{fontes.metodologiaResumo}</p>
        </div>
      )}

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: 16 }}>
        <KpiTile label="Vendors e órgãos consultados" valor={fontes.nVendors} />
        <KpiTile label="Vozes/relatórios distintos" valor={fontes.nVozes} />
        <KpiTile label="Fontes da camada operacional" valor={fontes.nFontesOperacionais} />
        <KpiTile label="Feeds abertos no MISP próprio" valor={fontes.nFeedsMisp} />
        <KpiTile label="Famílias na taxonomia financeira" valor={fontes.nFamiliasTaxonomia} />
      </div>

      {camadas.length > 0 && (
        <Secao titulo="As duas camadas de evidência">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 12 }}>
            {camadas.map((camada, i) => (
              <Painel key={i} titulo={camada.nome}>
                <p style={{ color: palette.azul, fontSize: 12, margin: '0 0 10px' }}>{camada.abas}</p>
                <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{camada.natureza}</p>
                <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: '10px 0 0' }}>
                  <strong style={{ color: palette.txtTitulo }}>Regra: </strong>
                  {camada.regra}
                </p>
                <p style={{ color: palette.txtSec, fontSize: 12.5, lineHeight: 1.6, margin: '10px 0 0' }}>
                  <strong style={{ color: palette.txtCorpo }}>Ritmo: </strong>
                  {camada.ritmo}
                </p>
              </Painel>
            ))}
          </div>
        </Secao>
      )}

      <Secao titulo="Camada estratégica — hierarquia de fontes">
        <div className="painel" style={{ marginTop: 12, overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
                <th style={{ ...CELULA, color: palette.txtTitulo }}>Nível</th>
                <th style={{ ...CELULA, color: palette.txtTitulo }}>Exemplos</th>
              </tr>
            </thead>
            <tbody>
              {hierarquia.map((nivel, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                  <td style={{ ...CELULA, color: palette.txtTitulo, fontWeight: 600, whiteSpace: 'nowrap' }}>{nivel.nivel}</td>
                  <td style={{ ...CELULA, color: palette.txtCorpo }}>{nivel.exemplos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="painel" style={{ marginTop: 12 }}>
          <p style={{ color: palette.txtSec, fontSize: 12, margin: 0, lineHeight: 1.6 }}>
            Regra fixa de validação: nenhum número-chave é citado com apenas uma fonte quando uma segunda fonte
            independente estava disponível (regra "≥2 fontes por número"). Dados sem segunda fonte independente são
            marcados como estimativa (selo ⚠) nos KPIs deste dashboard.
          </p>
        </div>
      </Secao>

      {operacionais.length > 0 && (
        <Secao titulo="Camada operacional — fontes ao vivo">
          <div className="painel" style={{ marginTop: 12, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Fonte</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Pergunta que responde</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Recorte</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo, textAlign: 'right' }}>Último ciclo</th>
                </tr>
              </thead>
              <tbody>
                {operacionais.map((fonte, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                    <td style={{ ...CELULA, color: palette.txtTitulo, fontWeight: 600, minWidth: 180 }}>
                      {fonte.nome}
                      {fonte.licenca && (
                        <div style={{ color: palette.txtSec, fontSize: 11.5, fontWeight: 400 }}>{fonte.licenca}</div>
                      )}
                      {fonte.detalhe && (
                        <p style={{ color: palette.txtSec, fontSize: 12, fontWeight: 400, lineHeight: 1.55, margin: '8px 0 0' }}>
                          {fonte.detalhe}
                        </p>
                      )}
                    </td>
                    <td style={{ ...CELULA, color: palette.txtCorpo }}>{fonte.responde}</td>
                    <td style={{ ...CELULA, color: palette.txtCorpo }}>{fonte.recorte}</td>
                    <td style={{ ...CELULA, textAlign: 'right' }}>
                      <EstadoAoVivo estado={estadoPorFonte[fonte.chaveAoVivo]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: palette.txtSec, fontSize: 12, margin: '12px 0 0', lineHeight: 1.6 }}>
              A coluna "último ciclo" vem do mesmo arquivo que alimenta as abas operacionais, atualizado a cada 20
              minutos. Quando ele não responde, a coluna fica vazia — o restante desta página é estático e não depende
              dela.
            </p>
          </div>
        </Secao>
      )}

      {incorporacoes.length > 0 && (
        <Secao titulo="Incorporado recentemente">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 12 }}>
            {incorporacoes.map((item, i) => (
              <Painel key={i} titulo={item.fonte}>
                <p style={{ color: palette.azul, fontSize: 12, margin: '0 0 8px' }}>{item.data}</p>
                <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.oQueMudou}</p>
              </Painel>
            ))}
          </div>
        </Secao>
      )}

      {descartadas.length > 0 && (
        <Secao titulo="Avaliadas e descartadas, com o motivo">
          <div className="painel" style={{ marginTop: 12, overflowX: 'auto' }}>
            <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '0 0 12px', lineHeight: 1.6 }}>
              Fonte testada e recusada é informação de método: sem este registro, a mesma fonte volta a ser avaliada a
              cada rodada, e o leitor não tem como saber se uma ausência é lacuna de pesquisa ou decisão tomada.
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Fonte</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Motivo</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Verificado em</th>
                </tr>
              </thead>
              <tbody>
                {descartadas.map((item, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                    <td style={{ ...CELULA, color: palette.txtTitulo, fontWeight: 600 }}>{item.fonte}</td>
                    <td style={{ ...CELULA, color: palette.txtCorpo }}>{item.motivo}</td>
                    <td style={{ ...CELULA, color: palette.txtSec, whiteSpace: 'nowrap' }}>{item.quando}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Secao>
      )}

      {governanca.length > 0 && (
        <Secao titulo="Governança de publicação">
          <div className="painel" style={{ marginTop: 12 }}>
            <ul style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.7, margin: 0, paddingLeft: 18 }}>
              {governanca.map((regra, i) => (
                <li key={i} style={{ marginBottom: 8 }}>{regra}</li>
              ))}
            </ul>
          </div>
        </Secao>
      )}

      {cuidados.length > 0 && (
        <Secao titulo="Cuidados que sustentam os números">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', marginTop: 12 }}>
            {cuidados.map((item, i) => (
              <Painel key={i} titulo={item.titulo}>
                <p style={{ color: palette.txtCorpo, fontSize: 13, lineHeight: 1.6, margin: 0 }}>{item.texto}</p>
              </Painel>
            ))}
          </div>
        </Secao>
      )}

      {cadencia.length > 0 && (
        <Secao titulo="Ritmo de atualização">
          <div className="painel" style={{ marginTop: 12, overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: `1px solid ${palette.borda}` }}>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Etapa</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>Ritmo</th>
                  <th style={{ ...CELULA, color: palette.txtTitulo }}>O que faz</th>
                </tr>
              </thead>
              <tbody>
                {cadencia.map((etapa, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${palette.borda}` }}>
                    <td style={{ ...CELULA, color: palette.txtTitulo, fontWeight: 600, whiteSpace: 'nowrap' }}>{etapa.etapa}</td>
                    <td style={{ ...CELULA, color: palette.azul, whiteSpace: 'nowrap' }}>{etapa.ritmo}</td>
                    <td style={{ ...CELULA, color: palette.txtCorpo }}>{etapa.oQueFaz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {fontes.notaDatas && (
              <p style={{ color: palette.txtSec, fontSize: 12, margin: '12px 0 0', lineHeight: 1.6 }}>{fontes.notaDatas}</p>
            )}
          </div>
        </Secao>
      )}

      {fontes.repoUrl && (
        <p style={{ marginTop: 24 }}>
          <a href={fontes.repoUrl} target="_blank" rel="noreferrer" style={{ color: palette.azul }}>
            Repositório do projeto no GitHub — bibliografia consolidada, dossiê de pesquisa e catálogo de fontes
          </a>
        </p>
      )}
    </div>
  )
}

export default Fontes
