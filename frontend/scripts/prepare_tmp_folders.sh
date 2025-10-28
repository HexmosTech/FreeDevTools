#!/usr/bin/env bash
set -euo pipefail

# Determine the current working directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
PAGES_DIR="$REPO_ROOT/src/pages"

# The file that contains the list of renamed folders
RENAMED_FILES_DIR="$REPO_ROOT/.tmp"
RENAMED_FILES_PATH="$RENAMED_FILES_DIR/renamed_tmp_folders.txt"

# Check if the target folder is provided as an argument
if [ $# -lt 1 ]; then
  echo "❌ Missing argument: <folder>."
  echo "   Usage: $0 <folder>"
  exit 1
fi

# Get the target folder from the argument
ARG_DIR="$1"

# Construct the target folder path
TARGET_DIR=$PAGES_DIR/$ARG_DIR

# Check if the targeted folder exists in the src directory
if [ ! -d "$TARGET_DIR" ]; then
  echo "❌ Folder not found: $TARGET_DIR"
  exit 1
fi

# Print the build information
echo "🏗️  Preparing to build only: $TARGET_DIR"

# Create the renamed files file if it doesn't exist
mkdir -p "$RENAMED_FILES_DIR" && touch "$RENAMED_FILES_PATH"

# Rename all folders that are not the target folder or start with an underscore
# Astro will ignore these folders. I found this approach cleaner than using a temporary directory
for d in "$PAGES_DIR"/*/; do
  d="${d%/}"
  base="$(basename "$d")"
  if [[ "$base" != "$ARG_DIR" && "$base" != _* ]]; then
    # Example: /path/to/src/pages/png_icons
    # new_name=/path/to/src/pages/_tmp_png_icons
    new_name="$PAGES_DIR/_tmp_$base"
    
    mv "$d" "$new_name"
    echo "$new_name" >> "$RENAMED_FILES_PATH"
  fi
done

echo "⚠️ Renamed folders in $TARGET_DIR:"
ls "$PAGES_DIR"
