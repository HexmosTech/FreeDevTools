#!/bin/bash

set -e  # Exit on any error

# Configuration
REMOTE_HOST="nats03-do"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOCAL_DIR="$SCRIPT_DIR/output"
REMOTE_DIR="/tmp/freedevtools-index"
FILES=("tools.json" "tldr_pages.json" "emojis.json" "svg_icons.json" "cheatsheets.json")

echo "🚀 Starting transfer to nats03server..."
echo "📁 Working directory: $SCRIPT_DIR"
echo "📁 Output directory: $LOCAL_DIR"

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

# Create remote directory if it doesn't exist
echo "📁 Creating remote directory..."
ssh "$REMOTE_HOST" "mkdir -p $REMOTE_DIR"

# Transfer the indexing script first (from search-index directory)
echo "📤 Transferring index-fdt.sh script..."
if [ -f "$SCRIPT_DIR/index-fdt.sh" ]; then
    rsync -avz --progress "$SCRIPT_DIR/index-fdt.sh" "$REMOTE_HOST:$REMOTE_DIR/"
    ssh "$REMOTE_HOST" "chmod +x $REMOTE_DIR/index-fdt.sh"
else
    echo "❌ index-fdt.sh script not found in $SCRIPT_DIR"
    exit 1
fi

# Transfer each JSON file using rsync
for file in "${FILES[@]}"; do
    echo "📤 Transferring $file..."
    rsync -avz --progress "$LOCAL_DIR/$file" "$REMOTE_HOST:$REMOTE_DIR/"
    
    if [ $? -eq 0 ]; then
        echo "✅ Successfully transferred $file"
    else
        echo "❌ Failed to transfer $file"
        exit 1
    fi
done

echo "🎉 All files transferred successfully!"

# Execute the indexing script on the remote server
echo "🔍 Starting indexing process..."
ssh "$REMOTE_HOST" "cd $REMOTE_DIR && ./index-fdt.sh"

if [ $? -eq 0 ]; then
    echo "✅ Indexing completed successfully!"
else
    echo "❌ Indexing failed!"
    exit 1
fi

echo "🏁 Transfer and indexing process completed!"