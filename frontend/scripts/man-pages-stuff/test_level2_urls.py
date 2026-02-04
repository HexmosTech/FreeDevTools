#!/usr/bin/env python3
"""
Script to test URLs from man_pages_404_level_2_sub_category.csv
Checks if pagination fallback is working (should redirect to home instead of 404)
"""

import csv
import subprocess
import sys
import time
from pathlib import Path
from urllib.parse import urlparse


def check_url_status(url: str, timeout: int = 10, follow_redirects: bool = False) -> tuple[int, str, str]:
    """
    Check HTTP status code for a URL using curl.
    Returns (status_code, redirect_url, error_msg)
    """
    try:
        cmd = [
            'curl',
            '-s',
            '-I',  # HEAD request
            '-o', '/dev/null',
            '-w', '%{http_code}\n%{redirect_url}',
            '--max-time', str(timeout),
            '--connect-timeout', '5',
        ]
        
        if not follow_redirects:
            # Don't follow redirects to see the initial status
            pass
        else:
            cmd.append('-L')  # Follow redirects
        
        cmd.append(url)
        
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=timeout + 2
        )
        
        output = result.stdout.strip()
        lines = output.split('\n')
        
        if not lines:
            return 0, '', f'error: {result.stderr or "unknown"}'
        
        status_code_str = lines[0].strip()
        redirect_url = lines[1].strip() if len(lines) > 1 else ''
        
        if status_code_str.isdigit():
            return int(status_code_str), redirect_url, ''
        else:
            return 0, '', f'error: {result.stderr or "unknown"}'
    except subprocess.TimeoutExpired:
        return 0, '', 'timeout'
    except Exception as e:
        return 0, '', f'error: {str(e)}'


def main():
    input_file = Path(__file__).parent / 'man_pages_404_level_2_sub_category.csv'
    
    if not input_file.exists():
        print(f"Error: {input_file} not found!")
        sys.exit(1)
    
    results = []
    status_counts = {}
    total = 0
    fixed = 0  # URLs that now redirect instead of 404
    still_404 = 0
    
    print("=" * 80)
    print("TESTING LEVEL 2 MAN-PAGES URLs")
    print("=" * 80)
    print(f"Reading URLs from: {input_file}\n")
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            url = row.get('URL', '').strip()
            if not url:
                continue
            
            total += 1
            path_after = row.get('Path After man-pages', '').strip()
            
            print(f"[{total}] Testing: {url[:70]}... ", end='', flush=True)
            
            # Check initial status (without following redirects)
            status_code, redirect_url, error_msg = check_url_status(url, follow_redirects=False)
            
            if status_code == 0:
                status_display = f"ERROR: {error_msg}"
                result_status = "ERROR"
            elif status_code == 301 or status_code == 302:
                status_display = f"{status_code} (Redirect)"
                if redirect_url:
                    status_display += f" -> {redirect_url[:50]}"
                result_status = f"{status_code} (FIXED - now redirects)"
                fixed += 1
            elif status_code == 404:
                status_display = "404 (Still broken)"
                result_status = "404"
                still_404 += 1
            else:
                status_display = f"{status_code}"
                result_status = str(status_code)
            
            print(status_display)
            
            # Track status counts
            status_counts[result_status] = status_counts.get(result_status, 0) + 1
            
            results.append({
                'URL': url,
                'Path': path_after,
                'Status': result_status,
                'Status Code': status_code,
                'Redirect URL': redirect_url,
                'Error': error_msg if status_code == 0 else ''
            })
            
            # Small delay to avoid overwhelming the server
            time.sleep(0.1)
    
    # Print summary
    print("\n" + "=" * 80)
    print("TEST RESULTS SUMMARY")
    print("=" * 80)
    print(f"\nTotal URLs tested: {total}")
    print(f"Fixed (now redirect): {fixed} ({fixed/total*100:.1f}%)")
    print(f"Still 404: {still_404} ({still_404/total*100:.1f}%)")
    print(f"Other status: {total - fixed - still_404}")
    
    print("\n--- Status Code Breakdown ---")
    for status, count in sorted(status_counts.items(), key=lambda x: -x[1]):
        percentage = (count / total * 100) if total > 0 else 0
        print(f"  {status}: {count:3d} ({percentage:5.2f}%)")
    
    # Show URLs that are still broken
    if still_404 > 0:
        print("\n--- URLs Still Returning 404 ---")
        for result in results:
            if result['Status Code'] == 404:
                print(f"  {result['URL']}")
                print(f"    Path: {result['Path']}")
    
    # Show URLs that are now fixed
    if fixed > 0:
        print("\n--- URLs Now Redirecting (Fixed) ---")
        for result in results:
            if result['Status Code'] in (301, 302):
                print(f"  {result['URL']}")
                print(f"    Redirects to: {result['Redirect URL']}")
    
    print("\n" + "=" * 80)
    
    # Exit with error code if there are still 404s
    if still_404 > 0:
        print(f"⚠️  Warning: {still_404} URLs are still returning 404")
        sys.exit(1)
    else:
        print("✅ All URLs are now redirecting properly!")
        sys.exit(0)


if __name__ == '__main__':
    main()

