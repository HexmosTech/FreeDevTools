#!/usr/bin/env bash
set -euo pipefail

# Determine the current working directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}" )" && pwd )"
REPO_ROOT="$(dirname "$SCRIPT_DIR")"
PAGES_DIR="$REPO_ROOT/src/pages"

# The file that contains the list of renamed folders
RENAMED_FILES_DIR="$REPO_ROOT/.tmp"
RENAMED_FILES_PATH="$RENAMED_FILES_DIR/renamed_tmp_folders.txt"

# Check if the file exists
if [ ! -f "$RENAMED_FILES_PATH" ]; then
  echo "No renamed folders to restore."
  exit 0
fi

# Restore the renamed folders
while read -r renamed; do
# Example: /path/to/src/pages/_tmp_png_icons
  # base=_tmp_png_icons
  base="$(basename "$renamed")"
  # original=png_icons
  original="${base#_tmp_}"
 
  # Rename the directory back to its original name
  mv "$renamed" "$(dirname "$renamed")/$original" 2>/dev/null || true
done < "$RENAMED_FILES_PATH"

# Remove the file that contains the list of renamed folders
rm -rf "$RENAMED_FILES_DIR"

echo "♻️ Restored all renamed folders:"
ls "$PAGES_DIR"


    