#!/usr/bin/env python3
import sys
from pathlib import Path
from collections import Counter
from datetime import datetime
import re

# Default nginx error log path
nginx_log_file = Path("/var/log/nginx/hexmos.com.error.log")

# Allow override via command line argument
if len(sys.argv) > 1:
    nginx_log_file = Path(sys.argv[1])

if not nginx_log_file.exists():
    print(f"❌ Log file not found: {nginx_log_file}")
    print(f"💡 Tip: Make sure the file is readable. You may need to run:")
    print(f"   sudo chmod 644 {nginx_log_file}")
    sys.exit(1)

# Categories to include
ALLOWED_CATEGORIES = {
    'man-pages', 'emojis', 'svg_icons', 'png_icons', 
    'mcp', 't', 'c', 'tldr', 'installerpedia', 'emoji_data', 'tool-banners'
}

print(f"=== Nginx Errors from {nginx_log_file} ===\n")

# Collect all error lines
lines_errors = []
error_counter = Counter()
category_counter = Counter()
file_type_counter = Counter()
timestamps = []

with open(nginx_log_file, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        # Check if it's an error line
        if '[error]' not in line:
            continue
        
        # Extract the file path that failed
        # Pattern: open() "/var/www/freedevtools-public/path/to/file" failed
        file_match = re.search(r'open\(\)\s+"([^"]+)"\s+failed', line)
        if not file_match:
            continue
        
        file_path = file_match.group(1)
        
        # Extract the requested URL from the request field
        # Pattern: request: "GET /freedevtools/path HTTP/2.0"
        url_match = re.search(r'request:\s+"GET\s+([^\s"]+)"', line)
        if url_match:
            url = url_match.group(1)
        else:
            # Fallback: try to extract from file path
            if '/freedevtools-public/' in file_path:
                url = '/freedevtools/' + file_path.split('/freedevtools-public/')[1]
            else:
                url = file_path
        
        # Skip URLs with any dot (.) in the path - indicates file extension (but we want these for nginx)
        # Actually, for nginx errors, we DO want to see file requests
        url_path = url.split('?')[0]  # Remove query parameters
        
        # Skip URLs containing /etc
        if '/etc' in url_path:
            continue
        
        # Skip URLs containing php
        if 'php' in url_path.lower():
            continue
        
        # Skip URLs containing nuclei
        if 'nuclei' in url_path.lower():
            continue
        
        # Extract category (first 2-3 path segments)
        parts = [p for p in url.rstrip('/').split('/') if p]  # Remove empty parts
        if len(parts) >= 2:
            # Take first 2 parts for category (e.g., /freedevtools/tldr/)
            category = '/' + '/'.join(parts[:2]) + '/'
            category_name = parts[1] if len(parts) > 1 else None
        elif len(parts) == 1:
            category = '/'
            category_name = None
        else:
            category = '/'
            category_name = None
        
        # Only include if category is in allowed list
        if category_name in ALLOWED_CATEGORIES:
            # Extract timestamp (format: 2026/01/15 14:15:05)
            timestamp_match = re.match(r'(\d{4}/\d{2}/\d{2}\s+\d{2}:\d{2}:\d{2})', line)
            if timestamp_match:
                timestamp_str = timestamp_match.group(1)
                try:
                    timestamp = datetime.strptime(timestamp_str, '%Y/%m/%d %H:%M:%S')
                    timestamps.append(timestamp)
                except ValueError:
                    pass
            
            # Extract file extension for file type counter
            if '.' in url_path:
                ext = url_path.split('.')[-1].lower()
                file_type_counter[ext] += 1
            
            lines_errors.append(line.rstrip())
            error_counter[category] += 1
            category_counter[category] += 1

# Print all error lines exactly as they appear in the original log file
for line in lines_errors:
    print(line)

# Print summary by category
print("\n=== Summary by Category ===")
for category, count in category_counter.most_common():
    print(f"{count:5d}  {category}")

# Print summary by file type
if file_type_counter:
    print("\n=== Summary by File Type ===")
    for file_type, count in file_type_counter.most_common():
        print(f"{count:5d}  .{file_type}")

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
    
    print("\n" + "=" * 50)
    print(f"Total nginx errors: {len(lines_errors)}")
    print(f"First error: {first_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Last error: {last_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Duration: {duration_str}")
else:
    print("\n" + "=" * 50)
    print(f"Total nginx errors: {len(lines_errors)}")

