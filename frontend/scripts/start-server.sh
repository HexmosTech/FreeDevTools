#!/bin/bash
# Start server on specified port
# Usage: ./scripts/start-server.sh <port>

set -e

PORT=${1:-4321}
LOG_FILE="/tmp/server-${PORT}.log"

if [ -z "$1" ]; then
    echo "Usage: $0 <port>"
    exit 1
fi

echo "Starting server on port ${PORT}..."
cd "$(dirname "$0")/.."
PORT=${PORT} go run ./cmd/server > "${LOG_FILE}" 2>&1 &
SERVER_PID=$!

echo "Server started on port ${PORT} (PID: ${SERVER_PID})"
echo "Logs: ${LOG_FILE}"

