#!/bin/bash

PORTS=(4321 4322)

for PORT in "${PORTS[@]}"; do
  echo "Checking port $PORT..."
  PIDS=$(lsof -ti :$PORT 2>/dev/null)
  
  if [ -z "$PIDS" ]; then
    echo "  No process found on port $PORT"
  else
    for PID in $PIDS; do
      echo "  Killing PID $PID on port $PORT"
      kill -9 $PID 2>/dev/null
    done
    echo "  Port $PORT cleared"
  fi
done

echo "Done."

