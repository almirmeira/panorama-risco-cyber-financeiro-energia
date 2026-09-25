import { useEffect, useState } from 'react'
import dados from './data/dashboard.json'
import { palette, semaforo } from './theme.js'
import { isFinanceiro } from './edition.js'
import TabNav from './components/TabNav.jsx'
import VisaoGeral from './views/VisaoGeral.jsx'
import Financeiro from './views/Financeiro.jsx'
import Energia from './views/Energia.jsx'
import Comparativo from './views/Comparativo.jsx'
import Tendencias from './views/Tendencias.jsx'
import Recomendacoes from './views/Recomendacoes.jsx'
import Fontes from './views/Fontes.jsx'
import AmeacasAoVivo from './views/AmeacasAoVivo.jsx'
import ExtorsaoExploracao from './views/ExtorsaoExploracao.jsx'
import Brasil from './views/Brasil.jsx'
import { useThreatLive, tempoRelativo, semaforoFrescor } from './hooks/useThreatLive.js'

// Ordem das abas: a camada operacional vem primeiro.
//
// O painel abre no que está acontecendo agora — indicadores ao vivo e extorsão
// em curso — e só então oferece a leitura consolidada. É o inverso da ordem
// original, que começava pela síntese executiva.
//
// Na edição "financeiro" (VITE_EDITION=financeiro) a aba Energia é removida;
// a edição padrão ("full") a mantém, logo após Financeiro, para os dois
// recortes setoriais ficarem lado a lado.
const ABAS_TODAS = [
  { id: 'ameacas-ao-vivo', rotulo: 'Ameaças ao Vivo' },
  { id: 'brasil', rotulo: 'Brasil' },
  { id: 'extorsao', rotulo: 'Extorsão & Exploração' },
  { id: 'visao-geral', rotulo: 'Visão Geral' },
  { id: 'financeiro', rotulo: 'Financeiro' },
  { id: 'energia', rotulo: 'Energia' },
  { id: 'comparativo', rotulo: 'Comparativo' },
  { id: 'tendencias', rotulo: 'Tendências' },
  { id: 'recomendacoes', rotulo: 'Recomendações' },
  { id: 'fontes', rotulo: 'Fontes & Método' },
]

const ABAS = isFinanceiro ? ABAS_TODAS.filter((aba) => aba.id !== 'energia') : ABAS_TODAS

// A aba inicial é sempre a primeira da lista, não um id fixo: assim reordenar
// ABAS_TODAS não deixa para trás um default apontando para o meio da barra.
const ABA_INICIAL = ABAS[0].id

const VIEWS = {
  'visao-geral': VisaoGeral,
  financeiro: Financeiro,
  'ameacas-ao-vivo': AmeacasAoVivo,
  brasil: Brasil,
  extorsao: ExtorsaoExploracao,
  energia: Energia,
  comparativo: Comparativo,
  tendencias: Tendencias,
  recomendacoes: Recomendacoes,
  fontes: Fontes,
}

/** Data ISO (YYYY-MM-DD) em formato curto PT-BR (21/07/2026); se não parsear, devolve o valor original. */
function formatarDataCurtaPtBr(dataIso) {
  if (!dataIso) return ''
  const data = new Date(`${dataIso}T00:00:00`)
  if (Number.isNaN(data.getTime())) return dataIso
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(data)
}

/**
 * Carimbo de atualização do cabeçalho — duas camadas, duas datas.
 *
 * O painel tem dois relógios e um selo só confundia os dois: o leitor via
 * "Última atualização: 22 de setembro" em cima da aba Ameaças ao Vivo, que
 * tinha sido atualizada minutos antes, e concluía que o painel estava parado.
 *
 * - Pesquisa: `geradoEm`/`verificadoEm` do dashboard.json, que o refresh a cada
 *   3 dias revisa. Ciclo sem novidade confirma os dados sem mudá-los — daí
 *   mostrar as duas datas quando diferem (silêncio das fontes não é silêncio
 *   da máquina).
 * - Ameaças ao vivo: `meta.geradoEm` do threat-live.json (ciclo de 20 min),
 *   com o mesmo semáforo de frescor da aba ao vivo, para uma ingestão morta
 *   aparecer no topo de todas as abas, e não só numa.
 */
function CarimboAtualizacao({ geradoEm, verificadoEm }) {
  const { estado, dados: vivo } = useThreatLive()
  // Re-render por minuto para o "há N min" não congelar entre as buscas.
  const [, setTique] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTique((n) => n + 1), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const temVerificacaoDistinta = verificadoEm && verificadoEm !== geradoEm
  const textoPesquisa = temVerificacaoDistinta
    ? `Pesquisa: verificada em ${formatarDataCurtaPtBr(verificadoEm)} · dado de ${formatarDataCurtaPtBr(geradoEm)}`
    : `Pesquisa: ${formatarDataCurtaPtBr(geradoEm)}`

  const geradoVivo = vivo?.meta?.geradoEm
  const corVivo = estado === 'ok' ? semaforo[semaforoFrescor(geradoVivo)] : semaforo.vermelho
  const textoVivo =
    estado === 'carregando'
      ? 'Ameaças ao vivo: carregando…'
      : estado === 'erro' || !geradoVivo
        ? 'Ameaças ao vivo: indisponível'
        : `Ameaças ao vivo: ${tempoRelativo(geradoVivo)}`

  const pilula = (cor) => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 14px',
    borderRadius: 999,
    background: `${cor}1a`,
    border: `1px solid ${cor}`,
    color: cor,
    fontSize: 12,
    fontWeight: 600,
    whiteSpace: 'nowrap',
  })
  const ponto = (cor) => ({ width: 8, height: 8, borderRadius: '50%', background: cor, flexShrink: 0 })

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'flex-end' }}>
      <span
        style={pilula(palette.azul)}
        title="Síntese estratégica (abas Visão Geral a Recomendações). As fontes são revisadas a cada 3 dias; ciclos sem novidade confirmam os dados sem alterá-los."
      >
        <span aria-hidden="true" style={ponto(palette.azul)} />
        {textoPesquisa}
      </span>
      <span
        style={pilula(corVivo)}
        title={
          geradoVivo
            ? `Camada operacional (Ameaças ao Vivo, Brasil, Extorsão & Exploração), coletada a cada 20 min. Última coleta: ${new Date(geradoVivo).toLocaleString('pt-BR')}.`
            : 'Camada operacional (Ameaças ao Vivo, Brasil, Extorsão & Exploração), coletada a cada 20 min.'
        }
      >
        <span aria-hidden="true" className="ponto-pulsante" style={ponto(corVivo)} />
        {textoVivo}
      </span>
    </div>
  )
}

/**
 * Legenda fixa de semáforo — visível em todas as abas, explica o critério
 * de cor usado nos cartões de postura de risco/urgência do dashboard.
 */
function LegendaSemaforo() {
  const itens = [
    { cor: semaforo.verde, rotulo: 'Verde', criterio: 'risco gerenciado / maturidade alta' },
    { cor: semaforo.ambar, rotulo: 'Âmbar', criterio: 'atenção / em maturação' },
    { cor: semaforo.vermelho, rotulo: 'Vermelho', criterio: 'risco elevado / lacuna' },
  ]

  return (
    <div
      className="painel"
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}
    >
      <strong style={{ color: palette.txtSec, fontSize: 12, textTransform: 'uppercase', letterSpacing: 0.4 }}>
        Legenda do semáforo
      </strong>
      {itens.map((item) => (
        <span key={item.rotulo} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <span
            aria-hidden="true"
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: item.cor,
              flexShrink: 0,
              boxShadow: `0 0 0 3px ${item.cor}33`,
            }}
          />
          <span style={{ color: palette.txtTitulo, fontWeight: 600 }}>{item.rotulo}</span>
          <span style={{ color: palette.txtSec }}>= {item.criterio}</span>
        </span>
      ))}
    </div>
  )
}

function App() {
  const [abaAtiva, setAbaAtiva] = useState(ABA_INICIAL)

  const meta = dados?.meta ?? {}
  const fontes = dados?.fontes ?? {}
  const ViewAtiva = VIEWS[abaAtiva] ?? VisaoGeral

  // Na edição "financeiro", cabeçalho reflete o recorte setorial; a edição
  // padrão ("full") continua usando o título/subtítulo do JSON, inalterada.
  const tituloExibido = isFinanceiro ? 'Panorama de Risco Cibernético — Setor Financeiro' : meta.titulo
  const subtituloExibido = isFinanceiro
    ? 'Recorte do setor financeiro · Brasil e o mundo, 2025–2026 · síntese executiva'
    : meta.subtitulo

  return (
    <>
      <header style={{ background: palette.bgPainel, borderBottom: `1px solid ${palette.borda}` }}>
        <div
          className="container"
          style={{
            paddingBottom: 16,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: 22 }}>{tituloExibido}</h1>
            {subtituloExibido && (
              <p style={{ margin: '6px 0 0', color: palette.txtSec, fontSize: 14, maxWidth: 720 }}>
                {subtituloExibido}
              </p>
            )}
          </div>

          <CarimboAtualizacao geradoEm={meta.geradoEm} verificadoEm={meta.verificadoEm} />
        </div>

        <div className="container" style={{ paddingTop: 0, paddingBottom: 16 }}>
          <TabNav abas={ABAS} ativa={abaAtiva} onSelecionar={setAbaAtiva} />
        </div>
      </header>

      {/* A legenda explica o semáforo de postura de risco, que não existe na
          camada operacional — lá o semáforo é de frescor do dado. Mostrar as
          duas convenções juntas confundiria as leituras. */}
      {!['ameacas-ao-vivo', 'extorsao', 'brasil'].includes(abaAtiva) && (
        <div className="container" style={{ paddingBottom: 0 }}>
          <LegendaSemaforo />
        </div>
      )}

      <ViewAtiva dados={dados} />

      <footer
        className="container"
        style={{ marginTop: 8, paddingTop: 16, borderTop: `1px solid ${palette.borda}` }}
      >
        <p style={{ color: palette.txtSec, fontSize: 12, margin: 0 }}>
          Leitura qualitativa de síntese executiva derivada da análise dos capítulos — não é índice quantitativo.
        </p>
        <p style={{ color: palette.txtSec, fontSize: 12, margin: '8px 0 0' }}>
          {fontes.nVendors != null && `${fontes.nVendors} vendors e órgãos consultados · `}
          {fontes.nVozes != null && `${fontes.nVozes} vozes/relatórios distintos · `}
          Regra fixa: ≥2 fontes independentes por número-chave (dados sem segunda fonte recebem selo ⚠ estimativa).
        </p>
      </footer>
    </>
  )
}

export default App
