#!/bin/bash

# Script to check URLs from CSV and separate working vs 404

INPUT_FILE="all_urls.csv"
WORKING_FILE="working_urls.csv"
NOT_FOUND_FILE="404_urls.csv"

# Initialize output files
echo "Working URLs:" > "$WORKING_FILE"
echo "404 URLs:" > "$NOT_FOUND_FILE"

# Counter
working_count=0
not_found_count=0
total=0

# Read each URL from the CSV file
while IFS= read -r url || [ -n "$url" ]; do
    # Skip empty lines
    [ -z "$url" ] && continue
    
    total=$((total + 1))
    echo -n "[$total] Checking: $url ... "
    
    # Make curl request and get HTTP status code
    # -s: silent, -o /dev/null: discard output, -w: write status code, -L: follow redirects
    # --max-time 10: timeout after 10 seconds
    status_code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "$url" 2>/dev/null)
    
    if [ "$status_code" = "200" ]; then
        echo "✓ Working (200)"
        echo "$url" >> "$WORKING_FILE"
        working_count=$((working_count + 1))
    elif [ "$status_code" = "404" ]; then
        echo "✗ 404 Not Found"
        echo "$url" >> "$NOT_FOUND_FILE"
        not_found_count=$((not_found_count + 1))
    else
        echo "? Status: $status_code"
        # For other status codes, we'll put them in a separate category
        # For now, let's consider non-200 as not working
        echo "$url" >> "$NOT_FOUND_FILE"
        not_found_count=$((not_found_count + 1))
    fi
    
    # Small delay to avoid overwhelming the server
    sleep 0.1
    
done < "$INPUT_FILE"

echo ""
echo "=== Summary ==="
echo "Total URLs checked: $total"
echo "Working URLs (200): $working_count"
echo "404 URLs: $not_found_count"
echo ""
echo "Results saved to:"
echo "  - Working URLs: $WORKING_FILE"
echo "  - 404 URLs: $NOT_FOUND_FILE"

