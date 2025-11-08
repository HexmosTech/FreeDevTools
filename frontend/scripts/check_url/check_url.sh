#!/bin/bash
# check_urls.sh

INPUT="sites"
OUTPUT="results.txt"
ERRORS="404-urls.txt"
JOBS=64

# Clear output files first
> "$OUTPUT"
> "$ERRORS"

export OUTPUT ERRORS  # Make them visible to parallel

# Each job is a single shell command
cat "$INPUT" | parallel -j $JOBS --bar '
  code=$(curl -s -o /dev/null -w "%{http_code}" -I "{}")
  echo "$code {}" >> "$OUTPUT"
  if [ "$code" = "404" ]; then
    echo "{}" >> "$ERRORS"
  fi
'
