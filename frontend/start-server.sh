#!/usr/bin/env bash
export UV_THREADPOOL_SIZE=64
bun --max-old-space-size=16384 ./node_modules/astro/astro.js dev --host 0.0.0.0 --port ${PORT:-4321}
