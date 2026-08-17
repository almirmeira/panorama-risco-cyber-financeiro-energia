#!/usr/bin/env bash
#
# misp-audit-cap.sh — teto de tamanho para a tabela `audit_logs` do MISP.
#
# Por que existe: o MISP grava uma linha de auditoria por objeto escrito. Com a
# ingestao de feeds abertos (centenas de milhares de atributos por ciclo) essa
# tabela cresce ~2 GB/dia e, em 2026-08-14, encheu o disco de 38 GB da VM 41.
# Com o disco a 100% o publicador do painel parou (`git reset` falhando) e a
# ingestao de threat intel parou de gravar o threat-live.json — ou seja, uma
# tabela de log derrubou as duas metades do score.cecyber.com.
#
# O que faz: quando a tabela passa do teto (padrao 1 GiB), zera e recomeca do
# zero. A auditoria do MISP continua ligada; so nao acumula indefinidamente.
#
# Nenhum IoC e perdido: eventos, atributos e tags ficam em outras tabelas.
#
# Uso:
#   sudo ./misp-audit-cap.sh              # aplica o teto
#   sudo ./misp-audit-cap.sh --dry-run    # so relata, nao altera nada
#
# Variaveis de ambiente (todas opcionais):
#   MISP_AUDIT_CAP_BYTES  teto em bytes            (padrao 1073741824 = 1 GiB)
#   MISP_DB_CONTAINER     container do MariaDB     (padrao misp-docker-db-1)
#   MISP_AUDIT_IBD        caminho do .ibd da tabela
#
# A senha do banco nunca aparece aqui: e lida de dentro do proprio container,
# da variavel MYSQL_ROOT_PASSWORD que o compose ja injeta.

set -euo pipefail

CAP_BYTES="${MISP_AUDIT_CAP_BYTES:-1073741824}"
DB_CONTAINER="${MISP_DB_CONTAINER:-misp-docker-db-1}"
IBD="${MISP_AUDIT_IBD:-/var/lib/docker/volumes/misp-docker_mysql_data/_data/misp/audit_logs.ibd}"
DDL_BACKUP="/var/lib/panorama-ti/audit_logs.ddl.sql"

DRY_RUN=0
if [ "${1:-}" = "--dry-run" ]; then
  DRY_RUN=1
fi

log() { printf '%s | %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')" "$*"; }
die() { log "ERRO: $*"; exit 1; }

sql() { # SQL por stdin -> saida crua, sem cabecalho
  docker exec -i "$DB_CONTAINER" \
    sh -c 'mysql -uroot -p"$MYSQL_ROOT_PASSWORD" -N -B misp' 2>/dev/null
}

# --- 1. Mede -----------------------------------------------------------------
# O arquivo .ibd e a medida honesta do que ocupa disco. information_schema so
# entra como plano B (ex.: layout de volume diferente).
if [ -r "$IBD" ]; then
  TAMANHO="$(stat -c %s "$IBD")"
  FONTE="arquivo $IBD"
else
  TAMANHO="$(printf '%s' "SELECT COALESCE(data_length+index_length,0) FROM information_schema.tables WHERE table_schema='misp' AND table_name='audit_logs';" | sql | tr -d '\r' || true)"
  FONTE="information_schema"
fi

case "$TAMANHO" in
  ''|*[!0-9]*) die "nao consegui medir a tabela audit_logs (fonte: $FONTE)" ;;
esac

TAMANHO_MB=$(( TAMANHO / 1048576 ))
CAP_MB=$(( CAP_BYTES / 1048576 ))

if [ "$TAMANHO" -le "$CAP_BYTES" ]; then
  log "audit_logs em ${TAMANHO_MB} MB (teto ${CAP_MB} MB) — nada a fazer"
  exit 0
fi

log "audit_logs em ${TAMANHO_MB} MB, acima do teto de ${CAP_MB} MB (fonte: $FONTE)"

if [ "$DRY_RUN" -eq 1 ]; then
  log "--dry-run: nao vou truncar"
  exit 0
fi

# --- 2. Guarda o DDL antes de qualquer coisa ---------------------------------
# So serve para o plano B do passo 3; se ele nao vier, o plano B fica proibido.
DDL="$(printf '%s' "SHOW CREATE TABLE audit_logs;" | sql | cut -f2- | sed 's/\\n/\n/g' || true)"
if printf '%s' "$DDL" | grep -qi 'CREATE TABLE'; then
  mkdir -p "$(dirname "$DDL_BACKUP")"
  printf '%s;\n' "$DDL" > "$DDL_BACKUP"
else
  DDL=""
  log "aviso: nao consegui capturar o DDL da tabela; plano B desabilitado"
fi

# --- 3. Zera -----------------------------------------------------------------
if printf '%s' "TRUNCATE TABLE audit_logs;" | sql; then
  log "audit_logs truncada"
else
  # TRUNCATE do InnoDB recria o tablespace vazio e falha com "table is full"
  # quando o disco ja chegou a 0 byte livre — foi o que aconteceu em 2026-08-17.
  # DROP libera o arquivo primeiro; so entao recriamos.
  log "TRUNCATE falhou (disco sem folga?); tentando DROP + CREATE"
  [ -n "$DDL" ] || die "sem DDL guardado — nao vou dropar a tabela"
  printf '%s' "DROP TABLE audit_logs;" | sql || die "DROP falhou"
  printf '%s;\n' "$DDL" | sql || die "CREATE falhou — DDL preservado em $DDL_BACKUP"
  log "audit_logs recriada vazia"
fi

# --- 4. Confere --------------------------------------------------------------
if [ -r "$IBD" ]; then
  DEPOIS_MB=$(( $(stat -c %s "$IBD") / 1048576 ))
  log "tamanho apos a limpeza: ${DEPOIS_MB} MB"
fi
log "disco: $(df -h --output=avail / | tail -1 | tr -d ' ') livres em /"
