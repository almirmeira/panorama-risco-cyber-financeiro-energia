import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Carrega o JSON da camada operacional (threat-live.json), gerado a cada 20
 * minutos pela ponte de ingestão que fala com o MISP.
 *
 * Diferente do restante do painel, este dado NÃO é embutido no build: é
 * buscado em tempo de execução, senão cada atualização de indicadores exigiria
 * um rebuild. O painel continua estático — quem conversa com o MISP é o script
 * de ingestão no servidor, nunca o navegador.
 *
 * Estados possíveis: 'carregando' | 'ok' | 'erro'. O 'erro' é tratado como
 * estado de primeira classe pelas views: numa vitrine, uma tela que assume
 * dado sempre presente quebra feio na hora errada.
 */
const CAMINHO = '/data/threat-live.json'
const INTERVALO_MS = 5 * 60 * 1000

export function useThreatLive() {
  const [estado, setEstado] = useState('carregando')
  const [dados, setDados] = useState(null)
  const [erro, setErro] = useState(null)
  const [buscadoEm, setBuscadoEm] = useState(null)
  const montado = useRef(true)

  const buscar = useCallback(async () => {
    try {
      // cache: 'no-store' — a graça do painel é o dado recente; um JSON
      // servido do cache do navegador anularia a atualização de 20 min.
      const resp = await fetch(`${CAMINHO}?t=${Date.now()}`, { cache: 'no-store' })
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      const json = await resp.json()
      if (!montado.current) return
      setDados(json)
      setBuscadoEm(new Date())
      setEstado('ok')
      setErro(null)
    } catch (e) {
      if (!montado.current) return
      // Se já havia dado bom em tela, mantém: melhor um dado de 25 min atrás
      // rotulado do que esvaziar o painel por uma falha de rede pontual.
      setErro(e.message || 'falha ao carregar')
      setEstado((anterior) => (anterior === 'ok' ? 'ok' : 'erro'))
    }
  }, [])

  useEffect(() => {
    montado.current = true
    buscar()
    const id = setInterval(buscar, INTERVALO_MS)
    return () => {
      montado.current = false
      clearInterval(id)
    }
  }, [buscar])

  return { estado, dados, erro, buscadoEm, recarregar: buscar }
}

/** "há 8 min" / "há 2 h" — o frescor é a promessa central desta camada. */
export function tempoRelativo(iso) {
  if (!iso) return '—'
  const quando = new Date(iso)
  if (Number.isNaN(quando.getTime())) return '—'
  const seg = Math.max(0, Math.floor((Date.now() - quando.getTime()) / 1000))
  if (seg < 90) return 'agora há pouco'
  const min = Math.floor(seg / 60)
  if (min < 60) return `há ${min} min`
  const h = Math.floor(min / 60)
  if (h < 24) return `há ${h} h`
  return `há ${Math.floor(h / 24)} d`
}

/**
 * Frescor vira semáforo: verde até 45 min, âmbar até 3 h, vermelho além
 * disso. A janela de 45 min dá folga sobre o ciclo de 20 min sem mascarar
 * uma ingestão que morreu.
 */
export function semaforoFrescor(iso) {
  if (!iso) return 'vermelho'
  const min = (Date.now() - new Date(iso).getTime()) / 60000
  if (Number.isNaN(min)) return 'vermelho'
  if (min <= 45) return 'verde'
  if (min <= 180) return 'ambar'
  return 'vermelho'
}
