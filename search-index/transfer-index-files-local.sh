#!/bin/bash

set -e  # Exit on any error

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOCAL_DIR="$SCRIPT_DIR/output"
SEARCHSYNC_REPO="$(cd "$SCRIPT_DIR/../.." && pwd)/searchsync"
TARGET_DIR="/tmp/freedevtools-index"
INDEX_SCRIPT="$SEARCHSYNC_REPO/freedevtools/index-fdt-local.sh"
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json" "mcp.json" "png_icons.json" "man_pages.json" "installerpedia.json")

echo "🚀 Starting local transfer to searchsync repository..."
echo "📁 Working directory: $SCRIPT_DIR"
echo "📁 Output directory: $LOCAL_DIR"
echo "📁 Target directory: $TARGET_DIR"
echo "📁 Searchsync repo: $SEARCHSYNC_REPO"

# Check if searchsync repository exists
if [ ! -d "$SEARCHSYNC_REPO" ]; then
    echo "❌ Searchsync repository not found at $SEARCHSYNC_REPO"
    exit 1
fi

# Check if index-fdt.sh exists in searchsync repo
if [ ! -f "$INDEX_SCRIPT" ]; then
    echo "❌ index-fdt.sh not found at $INDEX_SCRIPT"
    exit 1
fi

# Check if output directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ Output directory $LOCAL_DIR does not exist!"
    echo "Please run 'make generate' or 'make sync-search-index' first to create the output files."
    exit 1
fi

# Check if all required files exist
echo "🔍 Checking for required files..."
for file in "${FILES[@]}"; do
    if [ ! -f "$LOCAL_DIR/$file" ]; then
        echo "❌ Required file $LOCAL_DIR/$file does not exist!"
        echo "Please run 'make generate' or 'make sync-search-index' first to create all output files."
        exit 1
    fi
done

echo "✅ All required files found!"

# Create target directory if it doesn't exist
echo "📁 Creating target directory..."
mkdir -p "$TARGET_DIR"

# Copy each JSON file to the target directory
for file in "${FILES[@]}"; do
    echo "📤 Copying $file..."
    cp "$LOCAL_DIR/$file" "$TARGET_DIR/"
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully copied $file"
    else
        echo "❌ Failed to copy $file"
        exit 1
    fi
done

# Copy meilisearch-importer binary to target directory
IMPORTER_BINARY="$SEARCHSYNC_REPO/meilisearch-importer"
if [ -f "$IMPORTER_BINARY" ]; then
    echo "📤 Copying meilisearch-importer binary..."
    cp "$IMPORTER_BINARY" "$TARGET_DIR/"
    chmod +x "$TARGET_DIR/meilisearch-importer"
    echo "✅ Successfully copied meilisearch-importer"
else
    echo "⚠️  Warning: meilisearch-importer not found at $IMPORTER_BINARY"
fi

echo "🎉 All files copied successfully!"

# Execute the indexing script from searchsync repo
echo "🔍 Starting indexing process..."

# Read Meilisearch config from fdt-dev.toml
FDT_CONFIG="$SCRIPT_DIR/../frontend/fdt-dev.toml"
if [ -f "$FDT_CONFIG" ]; then
    # Extract meili_master_key from TOML file
    MEILI_MASTER_KEY=$(grep -E '^\s*meili_master_key\s*=' "$FDT_CONFIG" | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ')
    MEILI_URL=$(grep -E '^\s*meili_url\s*=' "$FDT_CONFIG" | sed 's/.*=\s*"\(.*\)".*/\1/' | tr -d ' ')
    
    if [ -n "$MEILI_MASTER_KEY" ]; then
        export MEILI_MASTER_KEY="$MEILI_MASTER_KEY"
    else
        echo "⚠️  Warning: meili_master_key not found in $FDT_CONFIG"
        exit 1
    fi
    
    if [ -n "$MEILI_URL" ]; then
        export SEARCH_API_PROD="$MEILI_URL"
    else
        export SEARCH_API_PROD="http://localhost:7700"
    fi
else
    echo "❌ Config file not found: $FDT_CONFIG"
    exit 1
fi

echo "📝 Using local meilisearch: $SEARCH_API_PROD"
cd "$SEARCHSYNC_REPO/freedevtools" && "$INDEX_SCRIPT"

if [ $? -eq 0 ]; then
    echo "✅ Indexing completed successfully!"
else
    echo "❌ Indexing failed!"
    exit 1
fi

echo "🏁 Transfer and indexing process completed!"

