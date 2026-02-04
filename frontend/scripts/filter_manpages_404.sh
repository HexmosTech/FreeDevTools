#!/bin/bash

# Script to filter 404.txt to only include lines with '/freedevtools/man-pages'

INPUT_FILE="404.txt"
TEMP_FILE="/tmp/filtered_404_$$.txt"

# Check if file exists
if [ ! -f "$INPUT_FILE" ]; then
    echo "Error: $INPUT_FILE not found!"
    exit 1
fi

# Filter lines containing '/freedevtools/man-pages', remove leading numbers/whitespace, and save to temp file
grep "/freedevtools/man-pages" "$INPUT_FILE" | sed 's/^[[:space:]]*[0-9]*[[:space:]]*//' > "$TEMP_FILE"

# Replace original file with filtered content
mv "$TEMP_FILE" "$INPUT_FILE"

# Count lines
line_count=$(wc -l < "$INPUT_FILE")
echo "Filtered $INPUT_FILE: $line_count lines remaining (only man-pages URLs)"

