#!/bin/bash

APPS=("astro-4321" "astro-4322")

# Wait until PM2 workers are ready
for APP in "${APPS[@]}"; do
  while [ -z "$(pm2 pid $APP 2>/dev/null)" ]; do
    sleep 2
  done
done

i=0
for APP in "${APPS[@]}"; do
  for pid in $(pm2 pid $APP 2>/dev/null); do
    echo "Pinning PID $pid ($APP) to CPU $i"
    taskset -pc $i $pid
    i=$((i+1))
  done
done

