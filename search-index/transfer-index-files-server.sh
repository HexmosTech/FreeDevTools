#!/bin/bash

set -e  # Exit on any error

# Configuration - Updated for local execution
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOCAL_DIR="$SCRIPT_DIR/output"
TARGET_DIR="/tmp/freedevtools-index"
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json" "mcp.json" "png_icons.json" "man_pages.json" "installerpedia.json")

echo "🚀 Starting LOCAL transfer and indexing..."
echo "📁 Working directory: $SCRIPT_DIR"
echo "📁 Source directory: $LOCAL_DIR"
echo "📁 Target directory: $TARGET_DIR"

# 1. Check if output directory exists
if [ ! -d "$LOCAL_DIR" ]; then
    echo "❌ Output directory $LOCAL_DIR does not exist!"
    exit 1
fi

# 2. Check if all required files exist
echo "🔍 Checking for required files..."
for file in "${FILES[@]}"; do
    if [ ! -f "$LOCAL_DIR/$file" ]; then
        echo "❌ Required file $LOCAL_DIR/$file does not exist!"
        exit 1
    fi
done
echo "✅ All required files found!"

# 3. Create target directory locally
echo "📁 Preparing target directory..."
mkdir -p "$TARGET_DIR"

# 4. Copy the indexing script from the local searchsync path
echo "📂 Copying index-fdt.sh script..."
# Using the path from your original script
SOURCE_SCRIPT="/var/lib/searchsync/searchsync_repo/freedevtools/index-fdt.sh"

if [ -f "$SOURCE_SCRIPT" ]; then
    cp "$SOURCE_SCRIPT" "$TARGET_DIR/"
    chmod +x "$TARGET_DIR/index-fdt.sh"
    echo "✅ Successfully copied index-fdt.sh"
else
    echo "❌ Source script not found at $SOURCE_SCRIPT"
    exit 1
fi

# 5. Transfer each JSON file using cp (Replacing rsync)
for file in "${FILES[@]}"; do
    echo "📤 Moving $file to target..."
    cp "$LOCAL_DIR/$file" "$TARGET_DIR/"
    echo "✅ Successfully moved $file"
done

echo "🎉 All files prepared in $TARGET_DIR!"

# 6. Execute the indexing script locally
echo "🔍 Starting indexing process..."
cd "$TARGET_DIR"
./index-fdt.sh

if [ $? -eq 0 ]; then
    echo "✅ Indexing completed successfully!"
else
    echo "❌ Indexing failed!"
    exit 1
fi

echo "🏁 Local process completed!"