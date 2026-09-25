#!/usr/bin/env bash
#
# misp-retencao.sh — retenção por idade para os feeds-ARQUIVO do MISP.
#
# Por que existe: os feeds em formato MISP do abuse.ch (URLhaus, MalwareBazaar,
# ThreatFox) publicam UM EVENTO POR DIA desde 2021, e o MISP baixa o manifesto
# inteiro. Entre 2026-08-17 e 2026-09-24 isso levou o acervo de ~190 mil a
# 26,8 milhões de atributos — 21 GB de MySQL num disco de 38 GB. Com o disco a
# 0 byte a publicação noturna parou em 2026-09-10 e a ingestão de threat intel
# em 2026-09-24: o painel ficou duas semanas com dados velhos. O teto da
# audit_logs (misp-audit-cap.sh) não cobria isso: o volume estava nos atributos.
#
# O painel só olha a janela recente (--dias 14 na ingestão). Tudo o que esses
# feeds trazem além disso é arquivo que ninguém lê.
#
# O que faz, uma vez por dia:
#   1. eventos das organizações listadas com data do fato mais velha que o
#      limite (padrão 30 dias) vão para a event_blocklists — sem isso o próximo
#      fetch do feed baixaria tudo de novo — e são apagados com o que pendura
#      neles (atributos, tags, objetos, correlações, sightings);
#   2. a tabela `logs` (log de aplicação do MISP) fica só com o mesmo período.
#
# Espaço apagado com DELETE não volta ao sistema de arquivos, mas o InnoDB o
# reaproveita: no regime diário o tamanho estabiliza. A purga inicial (26 mi de
# linhas) foi feita à mão com copiar-e-trocar para devolver o espaço ao disco.
#
# Uso:
#   sudo ./misp-retencao.sh              # aplica
#   sudo ./misp-retencao.sh --dry-run    # só relata
#
# Variáveis de ambiente (opcionais):
#   MISP_RETENCAO_DIAS   limite em dias               (padrão 30)
#   MISP_RETENCAO_ORGS   orgs criadoras, separadas por vírgula (padrão abuse.ch)
#   MISP_DB_CONTAINER    container do MariaDB         (padrão misp-docker-db-1)

set -euo pipefail

DIAS="${MISP_RETENCAO_DIAS:-30}"
ORGS="${MISP_RETENCAO_ORGS:-abuse.ch}"
DB_CONTAINER="${MISP_DB_CONTAINER:-misp-docker-db-1}"

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

log() { printf '%s | %s\n' "$(date -u '+%Y-%m-%d %H:%M:%S UTC')" "$*"; }
die() { log "ERRO: $*"; exit 1; }

sql() {
  docker exec -i "$DB_CONTAINER" \
    sh -c 'mysql -uroot -p"$MYSQL_ROOT_PASSWORD" -N -B misp' 2>/dev/null
}

case "$DIAS" in ''|*[!0-9]*) die "MISP_RETENCAO_DIAS inválido: $DIAS" ;; esac
[ "$DIAS" -ge 14 ] || die "limite de $DIAS dias é menor que a janela da ingestão (14)"

# Lista de orgs vira IN ('a','b'); nomes com aspa simples são recusados.
case "$ORGS" in *\'*) die "nome de organização com aspa simples" ;; esac
IN_ORGS="'$(printf '%s' "$ORGS" | sed "s/,/','/g")'"

FILTRO="FROM events e JOIN organisations o ON o.id=e.orgc_id
  WHERE o.name IN ($IN_ORGS) AND e.date < CURDATE() - INTERVAL $DIAS DAY"

RESUMO="$(printf '%s' "SELECT COUNT(*), COALESCE(SUM(e.attribute_count),0) $FILTRO;" | sql | tr -d '\r')" \
  || die "banco inacessível"
N_EV="$(printf '%s' "$RESUMO" | cut -f1)"
N_AT="$(printf '%s' "$RESUMO" | cut -f2)"
log "orgs [$ORGS], limite ${DIAS}d: $N_EV eventos / $N_AT atributos a remover"

if [ "$DRY_RUN" -eq 1 ]; then
  log "--dry-run: nada alterado"
  exit 0
fi

if [ "$N_EV" -gt 0 ]; then
  IDS="$(printf '%s' "SELECT e.id $FILTRO;" | sql | tr -d '\r')"
  for ID in $IDS; do
    case "$ID" in ''|*[!0-9]*) continue ;; esac
    # Uma transação por evento: undo pequeno mesmo nos eventos de 140 mil
    # atributos, e uma falha no meio não deixa o evento pela metade.
    sql <<SQL || die "falha ao remover o evento $ID"
START TRANSACTION;
INSERT IGNORE INTO event_blocklists (event_uuid, created, event_info, comment, event_orgc)
  SELECT e.uuid, NOW(), LEFT(e.info,255), 'retenção ${DIAS}d (score.cecyber.com)', o.name
  FROM events e JOIN organisations o ON o.id=e.orgc_id WHERE e.id=$ID;
DELETE FROM attribute_tags WHERE event_id=$ID;
DELETE FROM attributes WHERE event_id=$ID;
DELETE FROM object_references WHERE event_id=$ID;
DELETE FROM objects WHERE event_id=$ID;
DELETE FROM event_tags WHERE event_id=$ID;
DELETE FROM sightings WHERE event_id=$ID;
DELETE FROM shadow_attributes WHERE event_id=$ID;
DELETE FROM event_reports WHERE event_id=$ID;
DELETE FROM default_correlations WHERE event_id=$ID OR \`1_event_id\`=$ID;
DELETE FROM correlations WHERE event_id=$ID OR \`1_event_id\`=$ID;
DELETE FROM events WHERE id=$ID;
COMMIT;
SQL
  done
  log "$N_EV eventos removidos e bloqueados contra novo download"
fi

LOGS="$(printf '%s' "DELETE FROM logs WHERE created < NOW() - INTERVAL $DIAS DAY; SELECT ROW_COUNT();" | sql | tr -d '\r')" \
  || die "falha ao podar a tabela logs"
log "tabela logs: $LOGS linhas com mais de ${DIAS}d removidas"
log "disco: $(df -h --output=avail / | tail -1 | tr -d ' ') livres em /"
