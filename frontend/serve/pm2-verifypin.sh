#!/bin/bash

APPS=("astro-4321" "astro-4322")

echo "Checking CPU pinning for PM2 apps: ${APPS[*]}"
echo "--------------------------------------"

for APP in "${APPS[@]}"; do
  PIDS=$(pm2 pid "$APP" 2>/dev/null)
  
  if [ -z "$PIDS" ]; then
    echo "No PIDs found for $APP. App might be stopped."
    continue
  fi
  
  echo "App: $APP"
  for pid in $PIDS; do
    affinity=$(taskset -pc $pid 2>&1 | grep "affinity")
    echo "  PID: $pid | $affinity"
  done
  echo ""
done

echo "--------------------------------------"
echo "Done."

