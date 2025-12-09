#!/bin/bash

APPS=("astro-4321" "astro-4322")

# Wait until PMDaemon workers are ready
for APP in "${APPS[@]}"; do
  MAX_WAIT=30
  WAITED=0
  while [ $WAITED -lt $MAX_WAIT ]; do
    PID=$(pmdaemon list 2>/dev/null | grep "$APP" | grep -oP '\s+\K[0-9]+(?=\s+┆)' | head -1)
    if [ -n "$PID" ] && [ "$PID" != "-" ] && [ "$PID" != "0" ]; then
      break
    fi
    sleep 1
    WAITED=$((WAITED + 1))
  done
  if [ $WAITED -ge $MAX_WAIT ]; then
    echo "Warning: $APP not ready after ${MAX_WAIT}s"
  fi
done

i=0
for APP in "${APPS[@]}"; do
  PID=$(pmdaemon list 2>/dev/null | grep "$APP" | grep -oP '\s+\K[0-9]+(?=\s+┆)' | head -1)
  if [ -n "$PID" ] && [ "$PID" != "-" ] && [ "$PID" != "0" ]; then
    echo "Pinning PID $PID ($APP) to CPU $i"
    taskset -pc $i $PID 2>/dev/null
    i=$((i+1))
  else
    echo "Warning: Could not get PID for $APP"
  fi
done

