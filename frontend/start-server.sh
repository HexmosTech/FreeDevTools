#!/usr/bin/env bash
# Load server-only secrets (e.g. IPM_ADMIN_TOKEN) from .env, which is not committed
if [ -f .env ]; then set -a; . ./.env; set +a; fi
export PORT=${PORT:-4321}
export HOST=127.0.0.1
./bin/fdt-binary
