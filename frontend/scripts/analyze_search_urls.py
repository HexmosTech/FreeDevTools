#!/usr/bin/env python3
"""
Script to analyze URLs from Table.csv, check their status codes,
and generate a summary report by category and status code.
"""

import csv
import subprocess
import sys
import time
from collections import defaultdict
from pathlib import Path
from urllib.parse import urlparse


def extract_category(url: str) -> str:
    """Extract category from URL path."""
    try:
        parsed = urlparse(url)
        path_parts = parsed.path.strip('/').split('/')
        
        # Find the category (usually after /freedevtools/)
        if 'freedevtools' in path_parts:
            idx = path_parts.index('freedevtools')
            if idx + 1 < len(path_parts):
                category = path_parts[idx + 1]
                # Clean up category name
                if category == 'man_pages' or category == 'man-pages':
                    return 'man-pages'
                elif category == 'svg_icons':
                    return 'svg-icons'
                elif category == 'png_icons':
                    return 'png-icons'
                elif category == 'emojis':
                    return 'emojis'
                elif category == 'installerpedia':
                    return 'installerpedia'
                else:
                    return category
        return 'unknown'
    except Exception:
        return 'unknown'


def check_url_status(url: str, timeout: int = 10) -> tuple[int, int, str, str]:
    """
    Check HTTP status code for a URL using curl, handling redirects.
    Returns (initial_status, final_status, redirect_url, error_msg)
    - initial_status: The first HTTP status code (301, 404, 200, etc.)
    - final_status: The final status after following redirects (or same as initial if no redirect)
    - redirect_url: The redirect URL if initial status is 301/302, empty string otherwise
    - error_msg: Error message if status_code is 0
    """
    try:
        # First, check without following redirects to detect initial status
        # -s: silent, -I: HEAD request, -o /dev/null: discard output
        # -w: write status code and redirect URL
        cmd_no_follow = [
            'curl',
            '-s',
            '-I',
            '-o', '/dev/null',
            '-w', '%{http_code}\n%{redirect_url}',
            '--max-time', str(timeout),
            '--connect-timeout', '5',
            url
        ]
        
        result = subprocess.run(
            cmd_no_follow,
            capture_output=True,
            text=True,
            timeout=timeout + 2
        )
        
        output = result.stdout.strip()
        lines = output.split('\n')
        
        if not lines:
            return 0, 0, '', f'error: {result.stderr or "unknown"}'
        
        initial_status_str = lines[0].strip()
        redirect_url = lines[1].strip() if len(lines) > 1 else ''
        
        if not initial_status_str.isdigit():
            return 0, 0, '', f'error: {result.stderr or "unknown"}'
        
        initial_status = int(initial_status_str)
        
        # If it's a redirect (301, 302, 303, 307, 308), follow it to get final status
        if initial_status in (301, 302, 303, 307, 308):
            # Follow redirects to see where it leads
            cmd_follow = [
                'curl',
                '-s',
                '-I',
                '-o', '/dev/null',
                '-w', '%{http_code}',
                '-L',  # Follow redirects
                '--max-time', str(timeout),
                '--connect-timeout', '5',
                url
            ]
            
            result_follow = subprocess.run(
                cmd_follow,
                capture_output=True,
                text=True,
                timeout=timeout + 2
            )
            
            final_status_str = result_follow.stdout.strip()
            if final_status_str.isdigit():
                final_status = int(final_status_str)
                return initial_status, final_status, redirect_url, ''
            else:
                # Couldn't determine final status
                return initial_status, 0, redirect_url, 'error: could not determine final status'
        
        # For non-redirect status codes, initial and final are the same
        return initial_status, initial_status, '', ''
        
    except subprocess.TimeoutExpired:
        return 0, 0, '', 'timeout'
    except Exception as e:
        return 0, 0, '', f'error: {str(e)}'


def main():
    input_file = Path('Table.csv')
    output_file = Path('url_status_results.csv')
    
    if not input_file.exists():
        print(f"Error: {input_file} not found!")
        sys.exit(1)
    
    # Data structures for tracking
    results = []
    category_stats = defaultdict(lambda: defaultdict(int))
    status_stats = defaultdict(int)
    total = 0
    
    print(f"Reading URLs from {input_file}...")
    
    # Read CSV and check URLs
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            url = row.get('URL', '').strip()
            if not url:
                continue
            
            total += 1
            category = extract_category(url)
            
            print(f"[{total}] Checking: {url[:80]}... ", end='', flush=True)
            
            initial_status, final_status, redirect_url, error_msg = check_url_status(url)
            
            # Determine status code string for categorization
            if initial_status == 0:
                status_display = f"ERROR: {error_msg}"
                status_code_str = "ERROR"
            elif initial_status in (301, 302, 303, 307, 308):
                # It's a redirect - check where it leads
                if final_status == 200:
                    status_display = f"{initial_status}→200 (Redirect to OK)"
                    status_code_str = f"{initial_status}→200"
                elif final_status == 404:
                    status_display = f"{initial_status}→404 (Redirect to Not Found)"
                    status_code_str = f"{initial_status}→404"
                elif final_status > 0:
                    status_display = f"{initial_status}→{final_status} (Redirect)"
                    status_code_str = f"{initial_status}→{final_status}"
                else:
                    status_display = f"{initial_status} (Redirect - unknown final status)"
                    status_code_str = str(initial_status)
                
                if redirect_url:
                    status_display += f" -> {redirect_url[:50]}"
            else:
                # Direct status (no redirect)
                status_display = str(initial_status)
                status_code_str = str(initial_status)
            
            print(status_display)
            
            # Store result
            result_row = {
                'URL': url,
                'Category': category,
                'Initial Status': str(initial_status) if initial_status > 0 else 'ERROR',
                'Final Status': str(final_status) if final_status > 0 else '',
                'Status Code': status_code_str,
                'Error': error_msg if initial_status == 0 else '',
                'Last Crawled': row.get('Last crawled', '')
            }
            
            # Add redirect URL if present
            if redirect_url:
                result_row['Redirect URL'] = redirect_url
            
            results.append(result_row)
            
            # Update statistics using the combined status code string
            if initial_status > 0:
                category_stats[category][status_code_str] += 1
                status_stats[status_code_str] += 1
            else:
                category_stats[category]['ERROR'] += 1
                status_stats['ERROR'] += 1
            
            # Small delay to avoid overwhelming the server
            time.sleep(0.1)
    
    # Write results to CSV
    print(f"\nWriting results to {output_file}...")
    # Determine fieldnames - always include all columns
    fieldnames = ['URL', 'Category', 'Initial Status', 'Final Status', 'Status Code', 'Error', 'Last Crawled']
    if any('Redirect URL' in row for row in results):
        fieldnames.insert(-1, 'Redirect URL')
    
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(results)
    
    # Print summary
    print("\n" + "=" * 80)
    print("SUMMARY REPORT")
    print("=" * 80)
    
    print(f"\nTotal URLs checked: {total}")
    
    # Summary by Status Code
    print("\n--- Summary by Status Code ---")
    # Sort status codes with priority:
    # 1. 301→200 (redirects that work)
    # 2. 301→404 (redirects that fail)
    # 3. 404 (direct not found)
    # 4. 301 (redirects to other status)
    # 5. 200 (direct OK)
    # 6. Other status codes
    # 7. ERROR
    
    def sort_key(x):
        x_str = str(x)
        if x_str == "301→200":
            return (0, 0)
        elif x_str == "301→404":
            return (0, 1)
        elif x_str == "404":
            return (0, 2)
        elif x_str == "301":
            return (0, 3)
        elif x_str == "200":
            return (0, 4)
        elif x_str.startswith("301→") or x_str.startswith("302→"):
            return (0, 5)  # Other redirect chains
        elif x_str.isdigit():
            return (0, 6)  # Other numeric status codes
        elif x_str == "ERROR":
            return (1, 0)
        else:
            return (1, 1)  # Other strings
    
    for status in sorted(status_stats.keys(), key=sort_key):
        count = status_stats[status]
        percentage = (count / total * 100) if total > 0 else 0
        status_label = str(status)
        
        # Add descriptive labels
        if status == "301→200":
            status_label = "301→200 (Redirect to OK)"
        elif status == "301→404":
            status_label = "301→404 (Redirect to Not Found)"
        elif status == "404":
            status_label = "404 (Direct Not Found)"
        elif status == "301":
            status_label = "301 (Redirect - other final status)"
        elif status == "200":
            status_label = "200 (Direct OK)"
        elif status.startswith("301→") or status.startswith("302→"):
            status_label = f"{status} (Redirect chain)"
        elif status == "ERROR":
            status_label = "ERROR (Connection/Timeout errors)"
        
        print(f"  {status_label}: {count:5d} ({percentage:5.2f}%)")
    
    # Summary by Category
    print("\n--- Summary by Category ---")
    for category in sorted(category_stats.keys()):
        print(f"\n  Category: {category}")
        cat_total = sum(category_stats[category].values())
        for status in sorted(category_stats[category].keys(), key=lambda x: (isinstance(x, str), x)):
            count = category_stats[category][status]
            percentage = (count / cat_total * 100) if cat_total > 0 else 0
            print(f"    {status}: {count:5d} ({percentage:5.2f}%)")
        print(f"    Total: {cat_total}")
    
    # Detailed breakdown: Status codes by category
    print("\n--- Status Code Breakdown by Category ---")
    all_statuses = set()
    for cat_stats in category_stats.values():
        all_statuses.update(cat_stats.keys())
    
    for status in sorted(all_statuses, key=lambda x: (isinstance(x, str), x)):
        print(f"\n  Status Code: {status}")
        for category in sorted(category_stats.keys()):
            count = category_stats[category].get(status, 0)
            if count > 0:
                print(f"    {category}: {count}")
    
    print("\n" + "=" * 80)
    print(f"Results saved to: {output_file}")
    print("=" * 80)


if __name__ == '__main__':
    main()

