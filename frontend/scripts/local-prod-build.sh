#!/bin/bash

set -e

# Load environment variables from .env file (dynamic relative path)
ENV_PATH="$(dirname "$0")/../.env"
if [ -f "$ENV_PATH" ]; then
  export $(grep -v '^#' "$ENV_PATH" | xargs)
else
  echo "❌ .env file not found at $ENV_PATH"
  exit 1
fi

echo "Select which session to build:"
echo "1) mcp"
echo "2) tldr"
echo "3) icons"
echo "4) man-pages"
echo "5) FULL BUILD"
read -p "Enter your choice (1-5): " choice

case "$choice" in
  1|mcp)
    build_cmd="npm run build:mcp"
    dist_dir="dist/mcp/"
    remote_dir="/tools/mcp"
    ;;
  2|tldr)
    build_cmd="npm run build:tldr"
    dist_dir="dist/tldr/"
    remote_dir="/tools/tldr"
    ;;
  3|icons)
    build_cmd="npm run build:icons"
    dist_dir="dist/icons/"
    remote_dir="/tools/icons"
    ;;
  4|man-pages)
    build_cmd="npm run build:man-pages"
    dist_dir="dist/man-pages/"
    remote_dir="/tools/man-pages"
    ;;
  5|full|FULL|Full)
    echo "Running FULL BUILD..."
    npm run build
    echo "Deleting .zst files in dist..."
    find dist -type f -name "*.zst" -delete
    echo "Running rsync to remote server with --delete..."
    rsync -rvz --delete --info=progress2 --no-perms --no-owner --no-group --no-times ./dist/ root@master-do:/tools/
    echo "Purging entire Cloudflare cache..."
    RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
      -H "Authorization: Bearer ${CLOUDFLARE_CACHE_PURGE_API_KEY}" \
      -H "Content-Type: application/json" \
      --data '{"purge_everything":true}')
    echo "Response:"
    echo "$RESPONSE"
    echo "Build and deployment completed successfully."
    exit 0
    ;;
  *)
    echo "Invalid choice."
    exit 1
    ;;
esac

echo "Running build: $build_cmd"
$build_cmd

echo "Deleting .zst files in dist..."
find dist -type f -name "*.zst" -delete

echo "Running rsync to remote server with --delete..."
rsync -rvz --delete --info=progress2 --no-perms --no-owner --no-group --no-times "$dist_dir" root@master-do:"$remote_dir"

echo "Purging entire Cloudflare cache..."
RESPONSE=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
  -H "Authorization: Bearer ${CLOUDFLARE_CACHE_PURGE_API_KEY}" \
  -H "Content-Type: application/json" \
  --data '{"purge_everything":true}')

echo "Response:"
echo "$RESPONSE"

echo "Build and deployment completed successfully."