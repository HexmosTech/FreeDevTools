#!/usr/bin/env bash
export UV_THREADPOOL_SIZE=64
export HOST=127.0.0.1
bun --max-old-space-size=8192 ./dist/server/entry.mjs --port ${PORT:-4321}

