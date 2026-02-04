#!/usr/bin/env python3
"""
Script to analyze URL status results and create separate CSV files for each category:
- 301→200 (Redirect to OK)
- 301→404 (Redirect to Not Found)
- 404 (Direct Not Found)
- 200 (Direct OK)
- 301→301 (Redirect chain)
- 400
- ERROR (Connection/Timeout errors)
"""

import csv
import sys
from pathlib import Path
from collections import defaultdict


def categorize_status(status_code: str, initial_status: str, final_status: str, error: str) -> str:
    """Categorize URL based on status code and error information."""
    status_code = status_code.strip() if status_code else ''
    initial_status = initial_status.strip() if initial_status else ''
    final_status = final_status.strip() if final_status else ''
    error = error.strip() if error else ''
    
    # Check for ERROR first (can be in Status Code, Initial Status, Final Status, or Error column)
    if status_code == 'ERROR' or initial_status == 'ERROR' or final_status == 'ERROR' or error:
        return 'ERROR'
    
    # Check redirect chains (must check before other redirects)
    if '301→301' in status_code:
        return '301→301'
    
    # Check redirects to 200
    if '301→200' in status_code:
        return '301→200'
    
    # Check redirects to 404
    if '301→404' in status_code:
        return '301→404'
    
    # Check direct status codes (must check exact match after redirects)
    if status_code == '404':
        return '404'
    
    if status_code == '200':
        return '200'
    
    if status_code == '400':
        return '400'
    
    # Default to unknown if no match
    return 'unknown'


def main():
    script_dir = Path(__file__).parent
    results_file = script_dir.parent / 'url_status_results.csv'
    
    if not results_file.exists():
        print(f"Error: {results_file} not found!")
        print("Please ensure url_status_results.csv exists in the project root.")
        sys.exit(1)
    
    # Output directory
    output_dir = script_dir.parent
    output_dir.mkdir(exist_ok=True)
    
    # Categories for output files
    categories = {
        '301→200': [],
        '301→404': [],
        '404': [],
        '200': [],
        '301→301': [],
        '400': [],
        'ERROR': []
    }
    
    stats = defaultdict(int)
    total_urls = 0
    
    # Read and process URLs
    with open(results_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        
        if not fieldnames:
            print("Error: CSV file has no headers!")
            sys.exit(1)
        
        for row in reader:
            total_urls += 1
            
            status_code = row.get('Status Code', '').strip()
            initial_status = row.get('Initial Status', '').strip()
            final_status = row.get('Final Status', '').strip()
            error = row.get('Error', '').strip()
            
            category = categorize_status(status_code, initial_status, final_status, error)
            
            if category == 'unknown':
                continue
            
            # Store the full row data
            categories[category].append(row)
            stats[category] += 1
    
    # Write separate CSV files for each category
    print(f"\nAnalyzing {total_urls} URLs from {results_file.name}\n")
    
    for category, rows in categories.items():
        if not rows:
            continue
        
        # Sanitize category name for filename
        filename_category = category.replace('→', '_to_').replace(' ', '_')
        output_file = output_dir / f'url_status_{filename_category}.csv'
        
        with open(output_file, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(rows)
        
        print(f"  {category:15s}: {len(rows):5d} URLs -> {output_file.name}")
    
    # Print summary
    print("\n" + "=" * 80)
    print("URL STATUS ANALYSIS SUMMARY")
    print("=" * 80)
    print(f"\nTotal URLs analyzed: {total_urls}\n")
    
    print("Breakdown by status category:")
    for category in ['301→200', '301→404', '404', '200', '301→301', '400', 'ERROR']:
        count = stats[category]
        percentage = (count / total_urls * 100) if total_urls > 0 else 0
        print(f"  {category:15s}: {count:5d} ({percentage:5.2f}%)")
    
    unknown_count = total_urls - sum(stats.values())
    if unknown_count > 0:
        print(f"  {'unknown':15s}: {unknown_count:5d} ({unknown_count/total_urls*100:5.2f}%)")
    
    print("\n" + "=" * 80)
    print(f"Output files saved in: {output_dir}")
    print("=" * 80)


if __name__ == '__main__':
    main()

