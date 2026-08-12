import { palette, semaforo } from '../theme.js'
import { tempoRelativo, semaforoFrescor } from '../hooks/useThreatLive.js'

/**
 * Selo de frescor da camada operacional.
 *
 * A promessa desta camada é "dado recente". Um painel que mostra IoCs sem
 * dizer de quando são vale menos que um painel sem IoC nenhum: o leitor não
 * tem como saber se está olhando ameaça de agora ou de duas semanas atrás.
 * Por isso o carimbo é permanente e colorido pelo próprio atraso — se a
 * ingestão morrer, a tela denuncia sozinha em vez de mentir por omissão.
 */
function SeloFrescor({ geradoEm, degradado }) {
  const nivel = semaforoFrescor(geradoEm)
  const cor = semaforo[nivel] ?? palette.txtSec
  const rotulo = { verde: 'ao vivo', ambar: 'atrasado', vermelho: 'desatualizado' }[nivel]

  return (
    <span
      style={{
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
      }}
      title={geradoEm ? `Ingestão concluída em ${new Date(geradoEm).toLocaleString('pt-BR')}` : undefined}
    >
      <span
        aria-hidden="true"
        className={nivel === 'verde' ? 'ponto-pulsante' : undefined}
        style={{ width: 8, height: 8, borderRadius: '50%', background: cor, flexShrink: 0 }}
      />
      {rotulo} · atualizado {tempoRelativo(geradoEm)}
      {degradado && <span style={{ color: palette.ambar }}>· fonte parcial</span>}
    </span>
  )
}

export default SeloFrescor
