#!/usr/bin/env bash
set -euo pipefail

# --------------------------------------
# 🚀 Astro Build Benchmark
# Sequential runs, live progress and merged JSON output
# --------------------------------------

NODE_MEMORY="--max-old-space-size=16384"
THREADPOOL_SIZE=4
CLEAN_CMD='rm -rf dist .astro'
RESULTS_FILE="hyperfine_results.json"
SPINNER_CHARS="/-\|"

# Define your benchmark targets
declare -a JOBS=(
  "c"
  "emojis"
  "mcp"
  "mcp-pages"
  "png_icons"
  "png_icons_pages"
  "svg_icons"
  "svg_icons_pages"
  "t"
  "tldr"
)

# Check dependencies
if ! command -v hyperfine >/dev/null 2>&1; then
  echo "❌ 'hyperfine' not installed!"
  exit 1
fi
if ! command -v jq >/dev/null 2>&1; then
  echo "❌ 'jq' not installed!"
  exit 1
fi

echo "🧹 Cleaning build directories..."
eval "$CLEAN_CMD"
echo "⚙️  Starting sequential benchmarks..."
echo

# Start with empty results array
echo '{"results":[]}' > "$RESULTS_FILE"

# Loop through jobs
for i in "${!JOBS[@]}"; do
  JOB="${JOBS[$i]}"
  printf "🔄 [%d/%d] %-15s " "$((i+1))" "${#JOBS[@]}" "$JOB"

  # Run hyperfine in the background for this job
  (
    hyperfine \
      --warmup 0 \
      --runs 1 \
      --prepare "$CLEAN_CMD" \
      --export-json tmp_result.json \
      "./scripts/prepare_tmp_folders.sh $JOB && UV_THREADPOOL_SIZE=$THREADPOOL_SIZE bun astro build --mode production --silent > /dev/null && ./scripts/restore_tmp_folders.sh" \
      > /dev/null 2>&1
  ) &
  PID=$!

  # Spinner loop
  j=0
  while kill -0 "$PID" 2>/dev/null; do
    j=$(( (j+1) %4 ))
    printf "\r🔄 [%d/%d] %-15s %s" "$((i+1))" "${#JOBS[@]}" "$JOB" "${SPINNER_CHARS:$j:1}"
    sleep 0.15
  done

  # Wait for job and print result
  if wait "$PID"; then
    printf "\r✅ [%d/%d] %-15s done!\n" "$((i+1))" "${#JOBS[@]}" "$JOB"
    # Merge JSON arrays
    jq --slurpfile new_results tmp_result.json '.results += $new_results[0].results' "$RESULTS_FILE" > tmp_merge.json
    mv tmp_merge.json "$RESULTS_FILE"
  else
    printf "\r❌ [%d/%d] %-15s failed!\n" "$((i+1))" "${#JOBS[@]}" "$JOB"
  fi
done

# Cleanup temp files
rm -f tmp_result.json tmp_merge.json

echo
echo "✅ Benchmark complete!"
echo "📊 Combined results saved to: $RESULTS_FILE"
