import ReactECharts from 'echarts-for-react'
import { palette, echartsTheme } from '../theme.js'
import { useThreatLive } from '../hooks/useThreatLive.js'
import KpiTile from '../components/KpiTile.jsx'
import SeloFrescor from '../components/SeloFrescor.jsx'

/**
 * Extorsão & Exploração — a leitura que os feeds de IoC não dão.
 *
 * Um indicador diz "existe este domínio malicioso". Não diz quem está sendo
 * atacado nem o que corrigir primeiro. Esta aba responde as duas:
 *
 *   - **Extorsão**: vítimas do setor financeiro reivindicadas por grupos de
 *     ransomware (ransomware.live). É a única fonte aberta testada com recorte
 *     setorial explícito — daí ser a peça mais diretamente financeira do painel.
 *   - **Exploração**: vulnerabilidades sob exploração ativa confirmada pela
 *     CISA (catálogo KEV), com destaque para as já vistas em campanha de
 *     ransomware.
 */

function Painel({ titulo, children, nota, borda }) {
  return (
    <div className="painel" style={borda ? { borderLeft: `3px solid ${borda}` } : undefined}>
      {titulo && <h3 style={{ margin: '0 0 12px', fontSize: 14, color: palette.txtTitulo }}>{titulo}</h3>}
      {children}
      {nota && <p style={{ color: palette.txtSec, fontSize: 12, margin: '10px 0 0', lineHeight: 1.5 }}>{nota}</p>}
    </div>
  )
}

function SerieMensal({ serie }) {
  const option = {
    ...echartsTheme,
    grid: { left: 40, right: 16, top: 20, bottom: 40, containLabel: true },
    tooltip: { trigger: 'axis' },
    xAxis: {
      type: 'category',
      data: serie.map((m) => m.mes.slice(5) + '/' + m.mes.slice(2, 4)),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 11 },
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
        data: serie.map((m, i) => ({
          value: m.vitimas,
          // O mês corrente ainda está em curso: pintar igual aos fechados
          // sugeriria uma queda que é só do calendário.
          itemStyle: { color: i === serie.length - 1 ? palette.txtSec : palette.vermelho },
        })),
        barMaxWidth: 34,
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 260, width: '100%' }} opts={{ renderer: 'svg' }} />
}

function BarrasHorizontais({ dados, campoNome, campoValor, cor }) {
  const top = [...dados].slice(0, 8).reverse()
  const option = {
    ...echartsTheme,
    grid: { left: 8, right: 44, top: 8, bottom: 8, containLabel: true },
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    xAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo },
      splitLine: { lineStyle: { color: palette.borda, type: 'dashed' } },
    },
    yAxis: {
      type: 'category',
      data: top.map((d) => d[campoNome]),
      axisLine: { lineStyle: { color: palette.borda } },
      axisLabel: { color: palette.txtCorpo, fontSize: 12 },
    },
    series: [
      {
        type: 'bar',
        data: top.map((d) => d[campoValor]),
        itemStyle: { color: cor ?? palette.roxo },
        barMaxWidth: 16,
        label: { show: true, position: 'right', color: palette.txtSec, fontSize: 11 },
      },
    ],
  }
  return <ReactECharts option={option} style={{ height: 250, width: '100%' }} opts={{ renderer: 'svg' }} />
}

function TabelaVitimas({ vitimas, destacarBrasil }) {
  if (!vitimas.length) {
    return <p style={{ color: palette.txtSec, fontSize: 13, margin: 0 }}>Nenhuma vítima na janela.</p>
  }
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
            {['Data', 'Organização', 'Grupo', 'País'].map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 10px', color: palette.txtSec,
                fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vitimas.map((v, i) => (
            <tr key={`${v.vitima}-${i}`} style={{ borderBottom: `1px solid ${palette.borda}` }}>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                {new Date(`${v.data}T00:00:00`).toLocaleDateString('pt-BR')}
              </td>
              <td style={{ padding: '8px 10px', color: palette.txtTitulo, maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {destacarBrasil && v.pais === 'BR' && <span style={{ marginRight: 6 }}>🇧🇷</span>}
                {v.vitima}
              </td>
              <td style={{ padding: '8px 10px', color: palette.vermelho, whiteSpace: 'nowrap' }}>{v.grupo}</td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>{v.pais || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TabelaKev({ vulns }) {
  return (
    <div style={{ overflowX: 'auto', maxHeight: 420, overflowY: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${palette.borda}` }}>
            {['CVE', 'Fornecedor', 'Produto', 'Adicionada', 'Ransomware'].map((h) => (
              <th key={h} style={{
                textAlign: 'left', padding: '8px 10px', color: palette.txtSec, position: 'sticky', top: 0,
                background: palette.bgPainel, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {vulns.map((v) => (
            <tr key={v.cve} style={{ borderBottom: `1px solid ${palette.borda}` }}>
              <td style={{ padding: '8px 10px', fontFamily: 'ui-monospace, monospace', color: palette.azul, whiteSpace: 'nowrap' }}>{v.cve}</td>
              <td style={{ padding: '8px 10px', color: palette.txtCorpo, whiteSpace: 'nowrap' }}>{v.fornecedor}</td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis' }} title={v.produto}>{v.produto}</td>
              <td style={{ padding: '8px 10px', color: palette.txtSec, whiteSpace: 'nowrap' }}>
                {new Date(`${v.adicionadaEm}T00:00:00`).toLocaleDateString('pt-BR')}
              </td>
              <td style={{ padding: '8px 10px', whiteSpace: 'nowrap' }}>
                {v.usoEmRansomware ? (
                  <span style={{ color: palette.vermelho, fontWeight: 600, fontSize: 12 }}>● sim</span>
                ) : (
                  <span style={{ color: palette.txtSec, fontSize: 12 }}>—</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ExtorsaoExploracao() {
  const { estado, dados, erro, recarregar } = useThreatLive()

  if (estado === 'carregando') {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0 }}>Consultando extorsão e vulnerabilidades…</p>
        </div>
      </div>
    )
  }

  if (estado === 'erro' || !dados) {
    return (
      <div className="container">
        <div className="painel" style={{ marginTop: 16, borderColor: palette.vermelho }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 15, color: palette.vermelho }}>Camada operacional indisponível</h3>
          <p style={{ color: palette.txtCorpo, fontSize: 13, margin: '0 0 12px' }}>Não foi possível carregar os dados ({erro}).</p>
          <button type="button" onClick={recarregar} style={{
            padding: '6px 14px', borderRadius: 6, cursor: 'pointer', background: 'transparent',
            border: `1px solid ${palette.azul}`, color: palette.azul, fontSize: 13,
          }}>Tentar novamente</button>
        </div>
      </div>
    )
  }

  const meta = dados.meta ?? {}
  const ext = dados.extorsao
  const kev = dados.vulnerabilidades

  return (
    <div className="container">
      <div className="painel" style={{
        marginTop: 16, borderLeft: `3px solid ${palette.vermelho}`, display: 'flex',
        flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ maxWidth: 760 }}>
          <strong style={{ color: palette.txtTitulo, fontSize: 13 }}>
            Quem está sendo atacado e o que corrigir primeiro
          </strong>
          <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
            Um indicador de comprometimento diz que existe um domínio malicioso. Não diz quem está
            sendo atacado, nem qual falha está sendo explorada agora. Esta aba responde as duas
            perguntas — extorsão reivindicada contra o setor financeiro e vulnerabilidades sob
            exploração ativa confirmada.
          </p>
        </div>
        <SeloFrescor geradoEm={meta.geradoEm} degradado={meta.degradado} />
      </div>

      {/* ---------------- Extorsão ---------------- */}
      {ext ? (
        <>
          <h2 style={{ margin: '24px 0 0', fontSize: 17 }}>Extorsão contra o setor financeiro</h2>

          <div className="painel" style={{ marginTop: 12, borderLeft: `3px solid ${palette.ambar}` }}>
            <strong style={{ color: palette.ambar, fontSize: 13 }}>Reivindicações, não incidentes confirmados</strong>
            <p style={{ color: palette.txtSec, fontSize: 12.5, margin: '6px 0 0', lineHeight: 1.5 }}>
              {ext.aviso}
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
            <KpiTile label={`Vítimas financeiras (${ext.janelaDias} dias)`} valor={String(ext.totalFinanceiro)}
              unidade="organizações" delta={`${ext.totalHistorico} no arquivo desde 2017`} fonte="ransomware.live" />
            <KpiTile label="Grupos ativos contra o setor" valor={String(ext.porGrupo.length)}
              unidade="grupos" delta={ext.porGrupo[0] ? `${ext.porGrupo[0].grupo} lidera com ${ext.porGrupo[0].vitimas}` : ''} fonte="ransomware.live" />
            <KpiTile label="Vítimas no Brasil (janela)" valor={String(ext.brasilJanela)}
              unidade="organizações" delta={`${ext.brasilHistorico} no arquivo histórico`} fonte="ransomware.live" />
            <KpiTile label="Países atingidos na janela" valor={String(ext.porPais.length)}
              unidade="países" delta={ext.porPais[0] ? `${ext.porPais[0].pais} concentra ${ext.porPais[0].vitimas}` : ''} fonte="ransomware.live" />
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', marginTop: 16 }}>
            <Painel titulo="Vítimas financeiras por mês (12 meses)"
              nota="O mês corrente aparece em cinza porque ainda está em curso — pintá-lo igual aos fechados sugeriria uma queda que é só do calendário. Série legítima: o arquivo setorial da fonte é completo desde 2017, não um dump rolante.">
              <SerieMensal serie={ext.serieMensal} />
            </Painel>
            <Painel titulo={`Grupos mais ativos contra o setor (${ext.janelaDias} dias)`}>
              <BarrasHorizontais dados={ext.porGrupo} campoNome="grupo" campoValor="vitimas" cor={palette.vermelho} />
            </Painel>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'minmax(280px, 1fr) minmax(340px, 2fr)', marginTop: 16 }}>
            <Painel titulo="Concentração por país">
              <BarrasHorizontais dados={ext.porPais} campoNome="pais" campoValor="vitimas" cor={palette.roxo} />
            </Painel>
            <Painel titulo={`Vítimas reivindicadas (${ext.janelaDias} dias)`}>
              <TabelaVitimas vitimas={ext.vitimas} destacarBrasil />
            </Painel>
          </div>

          {ext.vitimasBrasil?.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <Painel titulo="Recorte Brasil — histórico completo do arquivo" borda={palette.verde}
                nota="Todas as vítimas brasileiras do setor financeiro registradas pela fonte desde 2017. O volume baixo é informativo: reflete tanto menor incidência quanto menor cobertura das fontes abertas sobre o Brasil.">
                <TabelaVitimas vitimas={ext.vitimasBrasil} />
              </Painel>
            </div>
          )}
        </>
      ) : (
        <div className="painel" style={{ marginTop: 16 }}>
          <p style={{ color: palette.txtSec, margin: 0, fontSize: 13 }}>Dados de extorsão indisponíveis neste ciclo.</p>
        </div>
      )}

      {/* ---------------- Exploração ativa ---------------- */}
      {kev && (
        <>
          <h2 style={{ margin: '28px 0 0', fontSize: 17 }}>Vulnerabilidades sob exploração ativa</h2>

          <div className="painel" style={{ marginTop: 12 }}>
            <p style={{ color: palette.txtSec, fontSize: 12.5, margin: 0, lineHeight: 1.5 }}>
              Catálogo KEV da CISA: falhas com exploração <strong style={{ color: palette.txtCorpo }}>confirmada em
              campo</strong>, não apenas teoricamente exploráveis. Não é um recorte financeiro — o KEV vale para todos
              os setores — mas responde a pergunta que nenhum feed de indicador responde: o que corrigir primeiro.
              As marcadas com uso em ransomware merecem prioridade num setor onde indisponibilidade é o pior cenário.
            </p>
          </div>

          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginTop: 16 }}>
            <KpiTile label={`Novas no catálogo (${kev.janelaDias} dias)`} valor={String(kev.recentesTotal)}
              unidade="CVEs" delta={`${kev.recentesComRansomware} com uso em ransomware`} fonte="CISA KEV" />
            <KpiTile label="Catálogo completo" valor={String(kev.totalCatalogo)}
              unidade="CVEs" delta={`versão ${kev.catalogo}`} fonte="CISA KEV" />
            <KpiTile label="Ligadas a ransomware" valor={String(kev.totalComRansomware)}
              unidade="CVEs" delta={`${Math.round((kev.totalComRansomware / kev.totalCatalogo) * 100)}% do catálogo`} fonte="CISA KEV" />
          </div>

          <div style={{ marginTop: 16 }}>
            <Painel titulo={`Adições recentes ao catálogo (${kev.janelaDias} dias)`}
              nota="Ordenadas da mais recente. A coluna Ransomware marca as que já apareceram em campanha conhecida.">
              <TabelaKev vulns={kev.recentes} />
            </Painel>
          </div>
        </>
      )}
    </div>
  )
}

export default ExtorsaoExploracao
