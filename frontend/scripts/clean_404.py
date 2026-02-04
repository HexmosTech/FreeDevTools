#!/usr/bin/env python3
import sys
from pathlib import Path
from collections import Counter
from datetime import datetime
import re

log_file = Path.home() / ".pmdaemon" / "logs" / "fdt-4321-error.log"

if not log_file.exists():
    print(f"❌ Log file not found: {log_file}")
    sys.exit(1)

# Categories to include
ALLOWED_CATEGORIES = {
    'man-pages', 'emojis', 'svg_icons', 'png_icons', 
    'mcp', 't', 'c', 'tldr', 'installerpedia'
}

print(f"=== 404 Errors from {log_file} ===\n")

# Collect all 404 lines and URLs
lines_404 = []
urls = []
category_counter = Counter()
timestamps = []
man_pages_lines = []  # Store man-pages 404 lines

with open(log_file, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        if ' 404 ' in line:
            # Extract URL from log line (format: timestamp GET /path 404 ...)
            # Match pattern like: GET /freedevtools/path 404
            match = re.search(r'GET\s+(\S+)\s+404', line)
            if match:
                url = match.group(1)
                
                # Skip URLs with any dot (.) in the path - indicates file extension
                url_path = url.split('?')[0]  # Remove query parameters
                if '.' in url_path:
                    continue
                
                # Skip URLs containing /etc
                if '/etc' in url_path:
                    continue
                
                # Skip URLs containing php
                if 'php' in url_path.lower():
                    continue
                
                # Skip URLs containing nuclei
                if 'nuclei' in url_path.lower():
                    continue
                
                # Skip URLs ending with /number/ (e.g., /123/ or /456)
                if re.search(r'/\d+/?$', url_path):
                    continue
                
                # Extract category (first 2-3 path segments, similar to show-404 format)
                parts = [p for p in url.rstrip('/').split('/') if p]  # Remove empty parts
                if len(parts) >= 2:
                    # Take first 2 parts for category (e.g., /freedevtools/tldr/)
                    category = '/' + '/'.join(parts[:2]) + '/'
                    category_name = parts[1] if len(parts) > 1 else None
                elif len(parts) == 1:
                    # Single part like /favicon.ico -> just /
                    category = '/'
                    category_name = None
                else:
                    category = '/'
                    category_name = None
                
                # Only include if category is in allowed list
                if category_name in ALLOWED_CATEGORIES:
                    # Extract timestamp (format: 2026/01/12 20:54:49)
                    timestamp_match = re.match(r'(\d{4}/\d{2}/\d{2}\s+\d{2}:\d{2}:\d{2})', line)
                    if timestamp_match:
                        timestamp_str = timestamp_match.group(1)
                        try:
                            timestamp = datetime.strptime(timestamp_str, '%Y/%m/%d %H:%M:%S')
                            timestamps.append(timestamp)
                        except ValueError:
                            pass
                    
                    # Remove "404" and microsecond timing from the line
                    # Pattern: timestamp GET /path 404 microseconds
                    cleaned_line = re.sub(r'\s+404\s+\d+\.?\d*µ?s', '', line.rstrip())
                    lines_404.append(cleaned_line)
                    urls.append(url)
                    category_counter[category] += 1
                    
                    # Store man-pages lines separately
                    if category_name == 'man-pages':
                        man_pages_lines.append(cleaned_line)

# Print all 404 lines with timestamps (cleaned)
for line in lines_404:
    print(line)

print("\n=== Summary by Category ===")
# Sort by count descending
for category, count in category_counter.most_common():
    print(f"{count:5d}  {category}")

# Calculate duration
if timestamps:
    first_timestamp = timestamps[0]
    last_timestamp = timestamps[-1]
    duration = last_timestamp - first_timestamp
    
    # Format duration
    total_seconds = int(duration.total_seconds())
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60
    seconds = total_seconds % 60
    
    if hours > 0:
        duration_str = f"{hours}h {minutes}m {seconds}s"
    elif minutes > 0:
        duration_str = f"{minutes}m {seconds}s"
    else:
        duration_str = f"{seconds}s"
    
    print(f"\nTotal 404 errors: {len(lines_404)}")
    print(f"First error: {first_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Last error: {last_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Duration: {duration_str}")
else:
    print(f"\nTotal 404 errors: {len(lines_404)}")

# Write man-pages 404 lines to man_404.txt
if man_pages_lines:
    output_file = Path("man_404.txt")
    with open(output_file, 'w', encoding='utf-8') as f:
        for line in man_pages_lines:
            f.write(line + '\n')
    print(f"\n✓ Wrote {len(man_pages_lines)} man-pages 404 lines to {output_file}")

