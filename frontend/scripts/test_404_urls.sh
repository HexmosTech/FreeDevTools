#!/bin/bash

# Script to test URLs from man_404.txt against https://hexmos.com
# Checks if any URLs are still returning 404

BASE_URL="https://134.199.241.124"
INPUT_FILE="man_404.txt"
TOTAL=0
FAILED=0
SUCCESS=0
REDIRECT=0

echo "Testing URLs from $INPUT_FILE against $BASE_URL"
echo "================================================"
echo ""

# Read lines 1-33 and extract URLs
line_num=0
while IFS= read -r line || [ -n "$line" ]; do
	line_num=$((line_num + 1))
	
	# Skip empty lines
	if [ -z "$line" ]; then
		continue
	fi
	
	# Extract path (everything after "GET ")
	path=$(echo "$line" | sed -n 's/.*GET \([^ ]*\).*/\1/p')
	
	if [ -z "$path" ]; then
		echo "⚠️  Line $line_num: Could not extract path from: $line"
		continue
	fi
	
	# Construct full URL
	full_url="${BASE_URL}${path}"
	
	# Make request and get status code (follow redirects, allow 30s timeout, skip TLS verify)
	status_code=$(curl -s -o /dev/null -w "%{http_code}" -L -k --max-time 30 --connect-timeout 10 "$full_url" 2>/dev/null)
	
	# Handle connection errors
	if [ -z "$status_code" ] || [ "$status_code" = "000" ]; then
		status_code="ERR"
	fi
	
	TOTAL=$((TOTAL + 1))
	
	# Check status code
	case "$status_code" in
		200)
			echo "✅ [$status_code] $full_url"
			SUCCESS=$((SUCCESS + 1))
			;;
		301|302|307|308)
			echo "🔄 [$status_code] $full_url (redirect)"
			REDIRECT=$((REDIRECT + 1))
			;;
		404)
			echo "❌ [$status_code] $full_url - STILL 404"
			FAILED=$((FAILED + 1))
			;;
		ERR|000)
			echo "🔌 [ERR] $full_url - Connection error/timeout"
			FAILED=$((FAILED + 1))
			;;
		*)
			echo "⚠️  [$status_code] $full_url"
			;;
	esac
	
	# Small delay to avoid overwhelming the server
	sleep 0.1
	
done < <(sed -n '1,33p' "$INPUT_FILE")

echo ""
echo "================================================"
echo "Summary:"
echo "  Total tested: $TOTAL"
echo "  ✅ Success (200): $SUCCESS"
echo "  🔄 Redirects: $REDIRECT"
echo "  ❌ Still 404: $FAILED"
echo ""

if [ $FAILED -gt 0 ]; then
	echo "⚠️  WARNING: $FAILED URLs are still returning 404"
	exit 1
else
	echo "✅ All URLs are working (no 404s found)"
	exit 0
fi

