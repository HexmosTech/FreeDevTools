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

print(f"=== Other HTTP Status Codes (excluding 200, 404, 301) from {log_file} ===\n")

# Collect all lines with other status codes
lines_other = []
status_counter = Counter()
category_counter = Counter()
urls_by_status = {}
timestamps = []

# HTTP methods to look for
HTTP_METHODS = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS']

# Status codes to exclude
EXCLUDED_STATUS = ['200',  '301']

with open(log_file, 'r', encoding='utf-8', errors='ignore') as f:
    for line in f:
        # Check if line contains any HTTP method
        has_method = any(method in line for method in HTTP_METHODS)
        if not has_method:
            continue
        
        # Extract status code from log line (format: timestamp METHOD /path STATUS ...)
        # Match pattern like: GET /freedevtools/path 200 or POST /path 500
        match = re.search(r'(' + '|'.join(HTTP_METHODS) + r')\s+(\S+)\s+(\d{3})', line)
        if match:
            method = match.group(1)
            url = match.group(2)
            status = match.group(3)
            
            # Skip excluded status codes
            if status in EXCLUDED_STATUS:
                continue
            
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
            
            # Extract category (first 2-3 path segments, similar to clean_404.py format)
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
                
                # Keep the line as-is from the original log file
                lines_other.append(line.rstrip())
                status_counter[status] += 1
                category_counter[category] += 1
                
                # Group URLs by status code
                if status not in urls_by_status:
                    urls_by_status[status] = []
                urls_by_status[status].append(url)

# Print all log entries exactly as they appear in the original log file
for line in lines_other:
    print(line)

# Print status code summary
print("\n=== Summary by Status Code ===")
for status, count in status_counter.most_common():
    print(f"{count:5d}  {status}")

# Print category summary
print("\n=== Summary by Category ===")
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
    
    print("\n" + "=" * 50)
    print(f"Total entries with other status codes: {len(lines_other)}")
    print(f"First entry: {first_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Last entry: {last_timestamp.strftime('%Y/%m/%d %H:%M:%S')}")
    print(f"Duration: {duration_str}")
else:
    print("\n" + "=" * 50)
    print(f"Total entries with other status codes: {len(lines_other)}")

