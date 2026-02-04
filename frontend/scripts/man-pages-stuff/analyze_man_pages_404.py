#!/usr/bin/env python3
"""
Script to analyze man-pages 404 URLs and categorize them by URL depth.
Categorizes URLs into:
- Level 1: man-pages/main-category (1 part after man-pages)
- Level 2: man-pages/blah/sub-category (2 parts after man-pages)
- Level 3: man-pages/blah/blah/detail/ (3 parts after man-pages)
- Level 4+: man-pages/blah/blah/blah/any_other_stuff (4+ parts after man-pages)
"""

import csv
import sys
from pathlib import Path
from urllib.parse import urlparse
from collections import defaultdict


def extract_man_pages_path(url: str) -> tuple[str, int]:
    """
    Extract the man-pages path and count depth.
    Returns (path_after_man_pages, depth)
    """
    try:
        parsed = urlparse(url)
        path_parts = [p for p in parsed.path.strip('/').split('/') if p]
        
        # Find man-pages or man_pages in path
        man_pages_idx = None
        for i, part in enumerate(path_parts):
            if part in ('man-pages', 'man_pages'):
                man_pages_idx = i
                break
        
        if man_pages_idx is None:
            return None, 0
        
        # Get parts after man-pages
        after_man_pages = path_parts[man_pages_idx + 1:]
        depth = len(after_man_pages)
        path_str = '/'.join(after_man_pages)
        
        return path_str, depth
    except Exception as e:
        print(f"Error parsing URL {url}: {e}", file=sys.stderr)
        return None, 0


def categorize_by_depth(depth: int) -> str:
    """Categorize URL by depth level."""
    if depth == 1:
        return 'level_1_main_category'
    elif depth == 2:
        return 'level_2_sub_category'
    elif depth == 3:
        return 'level_3_detail'
    elif depth >= 4:
        return 'level_4_plus_other'
    else:
        return 'unknown'


def main():
    # Try to read from url_status_results.csv first (preferred - has status codes)
    # Fallback to Table.csv but warn user
    script_dir = Path(__file__).parent
    results_file = script_dir.parent / 'url_status_results.csv'
    table_file = script_dir.parent / 'Table.csv'
    
    input_file = None
    use_status_results = False
    
    if results_file.exists():
        input_file = results_file
        use_status_results = True
        print(f"Reading from {input_file} (status results)...")
    elif table_file.exists():
        print("Warning: url_status_results.csv not found!")
        print("This script requires status codes to identify 404 URLs.")
        print("Please run 'make analyze-search-404-urls' first to generate url_status_results.csv")
        print("\nAttempting to read from Table.csv, but cannot filter 404s without status codes...")
        sys.exit(1)
    else:
        print("Error: Neither url_status_results.csv nor Table.csv found!")
        print("Please run 'make analyze-search-404-urls' first to generate url_status_results.csv")
        sys.exit(1)
    
    # Output directory
    output_dir = Path(__file__).parent
    output_dir.mkdir(exist_ok=True)
    
    # Categories for output files
    categories = {
        'level_1_main_category': [],
        'level_2_sub_category': [],
        'level_3_detail': [],
        'level_4_plus_other': [],
        'unknown': []
    }
    
    stats = defaultdict(int)
    total_man_pages_404 = 0
    
    # Read and process URLs
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            url = row.get('URL', '').strip()
            if not url:
                continue
            
            # Check if it's a man-pages URL
            if 'man-pages' not in url and 'man_pages' not in url:
                continue
            
            # If using status results, check for 404
            if use_status_results:
                status_code = row.get('Status Code', '').strip()
                if status_code != '404':
                    continue
            else:
                # If using Table.csv, we'll assume all are to be checked
                # But for this script, we'll only process if explicitly marked
                # For now, process all man-pages URLs
                pass
            
            path_after_man_pages, depth = extract_man_pages_path(url)
            
            if path_after_man_pages is None:
                continue
            
            category = categorize_by_depth(depth)
            
            # Store the URL data
            url_data = {
                'URL': url,
                'Path After man-pages': path_after_man_pages,
                'Depth': depth,
                'Last Crawled': row.get('Last crawled', row.get('Last Crawled', ''))
            }
            
            if use_status_results:
                url_data['Status Code'] = row.get('Status Code', '')
                url_data['Error'] = row.get('Error', '')
            
            categories[category].append(url_data)
            stats[category] += 1
            total_man_pages_404 += 1
    
    # Write separate CSV files for each category
    print(f"\nFound {total_man_pages_404} man-pages 404 URLs\n")
    
    for category, urls in categories.items():
        if not urls:
            continue
        
        output_file = output_dir / f'man_pages_404_{category}.csv'
        
        # Determine fieldnames based on available data
        if urls:
            fieldnames = list(urls[0].keys())
        else:
            fieldnames = ['URL', 'Path After man-pages', 'Depth', 'Last Crawled']
        
        with open(output_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(urls)
        
        print(f"  {category}: {len(urls)} URLs -> {output_file.name}")
    
    # Print summary
    print("\n" + "=" * 80)
    print("MAN-PAGES 404 ANALYSIS SUMMARY")
    print("=" * 80)
    print(f"\nTotal man-pages 404 URLs: {total_man_pages_404}\n")
    
    print("Breakdown by URL depth:")
    print(f"  Level 1 (main-category):        {stats['level_1_main_category']:5d} URLs")
    print(f"  Level 2 (sub-category):        {stats['level_2_sub_category']:5d} URLs")
    print(f"  Level 3 (detail):              {stats['level_3_detail']:5d} URLs")
    print(f"  Level 4+ (other):               {stats['level_4_plus_other']:5d} URLs")
    if stats['unknown'] > 0:
        print(f"  Unknown depth:                 {stats['unknown']:5d} URLs")
    
    print("\n" + "=" * 80)
    print(f"Output files saved in: {output_dir}")
    print("=" * 80)


if __name__ == '__main__':
    main()

