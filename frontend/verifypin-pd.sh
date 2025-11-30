#!/bin/bash

APPS=("astro-4321" "astro-4322")

echo "Checking CPU pinning for PMDaemon apps: ${APPS[*]}"
echo "--------------------------------------"

for APP in "${APPS[@]}"; do
  PID=$(pmdaemon list 2>/dev/null | grep "$APP" | grep -oP '\s+\K[0-9]+(?=\s+┆)' | head -1)
  
  if [ -z "$PID" ] || [ "$PID" = "-" ] || [ "$PID" = "0" ]; then
    echo "No PID found for $APP. App might be stopped."
    continue
  fi
  
  echo "App: $APP"
  affinity=$(taskset -pc $PID 2>&1 | grep "affinity")
  echo "  PID: $PID | $affinity"
  echo ""
done

echo "--------------------------------------"
echo "Done."

