#!/usr/bin/env bash
#
# deploy-vm41.sh — publica a edição "financeiro" do dashboard em score.cecyber.com
#
# Roda na própria VM 41 (almir-projeto-vm1) via cron, sem depender de nenhuma
# máquina externa estar ligada. Fluxo: git pull da main → npm ci → build da
# edição financeiro → backup do que está no ar → publicação → smoke test →
# rollback automático se o smoke test falhar.
#
# Cadência: o cron dispara todo dia às 23:59 (America/Sao_Paulo) e este script
# decide se é dia de rodar. O critério é (dias desde a época Unix) % 3 == 0, que
# dá um intervalo real de 3 dias — diferente de um "*/3" no campo dia-do-mês do
# cron, que reinicia a cada mês e produz um intervalo de 1 dia na virada.
#
# Uso:
#   ./deploy-vm41.sh            # respeita a cadência de 3 dias e o cache de commit
#   ./deploy-vm41.sh --force    # roda agora e reconstrói mesmo sem commit novo
#
set -euo pipefail

REPO_DIR="$HOME/panorama-repo"
DASH_DIR="$REPO_DIR/dashboard"
WEB_ROOT="/var/www/panorama-financeiro"
BACKUP_DIR="/var/www/.backups"
STATE_FILE="$HOME/.panorama-deploy-state"
LOG_FILE="$HOME/deploy-panorama.log"
LOCK_FILE="/tmp/panorama-deploy.lock"
SMOKE_URL="https://127.0.0.1:8080/"
KEEP_BACKUPS=5
CADENCIA_DIAS=3

FORCE=0
[ "${1:-}" = "--force" ] && FORCE=1

log() { printf '%s | %s\n' "$(TZ=America/Sao_Paulo date '+%Y-%m-%d %H:%M:%S %Z')" "$*" | tee -a "$LOG_FILE"; }
die() { log "ERRO: $*"; exit 1; }

# Uma execução por vez — o build e o rsync não podem se sobrepor.
exec 9>"$LOCK_FILE"
flock -n 9 || { log "outra execução em andamento; abortando"; exit 0; }

# --- Cadência de 3 dias -------------------------------------------------------
if [ "$FORCE" -eq 0 ]; then
  if [ $(( $(date -u +%s) / 86400 % CADENCIA_DIAS )) -ne 0 ]; then
    exit 0   # silencioso: não é dia de rodar, não polui o log
  fi
fi

log "=== início do ciclo de atualização ==="

# --- 1. Atualiza o repositório ------------------------------------------------
cd "$REPO_DIR"
git fetch --quiet origin main || die "git fetch falhou (deploy key ou rede)"
COMMIT_ANTES="$(git rev-parse HEAD)"
git reset --hard --quiet origin/main || die "git reset falhou"
COMMIT_AGORA="$(git rev-parse HEAD)"

if [ "$COMMIT_ANTES" != "$COMMIT_AGORA" ]; then
  log "repo atualizado: ${COMMIT_ANTES:0:7} -> ${COMMIT_AGORA:0:7} ($(git log -1 --format=%s))"
else
  log "repo já na main mais recente (${COMMIT_AGORA:0:7})"
fi

# Nada mudou e o que está no ar já é deste commit: não há o que publicar.
COMMIT_NO_AR="$(cat "$STATE_FILE" 2>/dev/null || echo none)"
if [ "$FORCE" -eq 0 ] && [ "$COMMIT_AGORA" = "$COMMIT_NO_AR" ]; then
  log "nada a publicar — no ar já está o commit ${COMMIT_AGORA:0:7}"
  log "=== fim do ciclo (sem mudança) ==="
  exit 0
fi

# --- 2. Build da edição financeiro -------------------------------------------
cd "$DASH_DIR"
if [ ! -d node_modules ] || [ package-lock.json -nt node_modules ]; then
  log "instalando dependências (npm ci)"
  npm ci --silent --no-audit --no-fund >>"$LOG_FILE" 2>&1 || die "npm ci falhou"
fi

log "buildando edição financeiro"
rm -rf dist
VITE_EDITION=financeiro npm run build >>"$LOG_FILE" 2>&1 || die "build falhou"

# Um build que "passou" mas gerou lixo não pode chegar ao ar.
[ -f dist/index.html ] || die "build sem dist/index.html"
BUNDLE="$(find dist/assets -name '*.js' -size +100k | head -1)"
[ -n "$BUNDLE" ] || die "build sem bundle JS plausível (>100k)"
grep -q 'Painel Executivo' dist/index.html || die "dist/index.html não parece o painel"
log "build ok — $(du -sh dist | cut -f1) em dist/"

# --- 3. Backup do que está no ar ---------------------------------------------
TS="$(TZ=America/Sao_Paulo date +%Y%m%d-%H%M)"
BACKUP_PATH="$BACKUP_DIR/panorama-financeiro-$TS"
sudo mkdir -p "$BACKUP_DIR"
sudo rm -rf "$BACKUP_PATH"
sudo cp -a "$WEB_ROOT" "$BACKUP_PATH"
log "backup em $BACKUP_PATH"

# --- 4. Publicação ------------------------------------------------------------
sudo rsync -a --delete dist/ "$WEB_ROOT/"
sudo chown -R root:root "$WEB_ROOT"
log "publicado em $WEB_ROOT"

# --- 5. Smoke test (com rollback automático) ---------------------------------
HTTP="$(curl -sk -o /dev/null -w '%{http_code}' --max-time 20 "$SMOKE_URL" || echo 000)"
ASSET="$(basename "$BUNDLE")"
ASSET_HTTP="$(curl -sk -o /dev/null -w '%{http_code}' --max-time 30 "${SMOKE_URL}assets/$ASSET" || echo 000)"

if [ "$HTTP" != "200" ] || [ "$ASSET_HTTP" != "200" ]; then
  log "SMOKE TEST FALHOU (index=$HTTP, asset=$ASSET_HTTP) — revertendo"
  sudo rsync -a --delete "$BACKUP_PATH/" "$WEB_ROOT/"
  sudo systemctl reload nginx || true
  die "deploy revertido para o backup $TS"
fi
log "smoke test ok (index=$HTTP, asset=$ASSET_HTTP)"

# --- 6. Estado e limpeza ------------------------------------------------------
echo "$COMMIT_AGORA" > "$STATE_FILE"
# Mantém apenas os N backups mais recentes.
sudo sh -c "ls -1dt $BACKUP_DIR/panorama-financeiro-* 2>/dev/null | tail -n +$((KEEP_BACKUPS + 1)) | xargs -r rm -rf"

# --- 7. Auto-atualização do próprio script ------------------------------------
# O cron chama a cópia estável em ~/deploy-panorama.sh, não o arquivo do repo:
# editar um script em execução corrompe o que o bash ainda vai ler. Por isso a
# sincronização acontece aqui no fim, valendo para o ciclo seguinte.
SELF_REPO="$DASH_DIR/deploy/deploy-vm41.sh"
SELF_CRON="$HOME/deploy-panorama.sh"
if ! cmp -s "$SELF_REPO" "$SELF_CRON"; then
  cp "$SELF_REPO" "$SELF_CRON" && chmod +x "$SELF_CRON"
  log "script de deploy atualizado a partir do repo (vale no próximo ciclo)"
fi

log "=== fim do ciclo — no ar: ${COMMIT_AGORA:0:7} ==="
