#!/bin/bash
set -e

echo "🚀 Starting partial build for installerpedia..."

PAGES_DIR="frontend/src/pages"
BUILD_DIR="frontend/dist"

# Go to repo root (script can be run from anywhere)
cd "$(dirname "$0")"

# Ensure pages dir exists
if [ ! -d "$PAGES_DIR" ]; then
  echo "❌ $PAGES_DIR not found. Run this script from project root."
  exit 1
fi

cd "$PAGES_DIR"

echo "📁 Current pages directory: $(pwd)"

echo "🔍 Step 1: Hiding all folders except installerpedia..."

for dir in */; do
  d="${dir%/}"

  # Skip already hidden dirs
  if [[ "$d" == _* ]]; then
    echo "⚠️ Already hidden: $d"
    continue
  fi

  if [[ "$d" == "installerpedia" ]]; then
    echo "✅ Keeping: $d"
  else
    echo "❌ Hiding: $d -> _$d"
    mv "$d" "_$d"
  fi
done

echo ""
echo "🔨 Step 2: Building Astro project..."

cd ../../..

echo "📦 Installing dependencies..."
npm install --prefix frontend >/dev/null 2>&1

echo "🧹 Cleaning dist folder..."
rm -rf "$BUILD_DIR"
mkdir -p "$BUILD_DIR"

echo "🏗️ Running Astro build..."
(
  cd frontend
  npx astro build
)

echo ""
echo "🔄 Step 3: Restoring hidden folders..."

cd "$PAGES_DIR"

for dir in _*/; do
  orig="${dir#_}"
  orig="${orig%/}"

  echo "🔁 Restoring: $dir -> $orig"
  mv "$dir" "$orig"
done

echo ""
echo "📝 Step 4: Updating robots.txt for staging..."

ROBOTS_FILE="$BUILD_DIR/robots.txt"
echo "User-agent: *" > "$ROBOTS_FILE"
echo "Disallow: /" >> "$ROBOTS_FILE"
echo "✅ robots.txt updated at $ROBOTS_FILE to block all crawling."

echo ""
echo "🎉 Partial build for installerpedia completed!"
echo "📦 Output available at: $BUILD_DIR"
