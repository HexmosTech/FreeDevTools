#!/usr/bin/env python3
"""
Root Cause Analysis for Level 2 man-pages 404 URLs.
Analyzes why these URLs are failing and provides recommendations.
"""

import csv
import re
import sys
from collections import defaultdict
from pathlib import Path


def analyze_url(url_path: str) -> dict:
    """Analyze a single URL path and determine the issue."""
    parts = url_path.split('/')
    if len(parts) != 2:
        return {'issue': 'invalid_format', 'reason': f'Expected 2 parts, got {len(parts)}'}
    
    category, slug = parts
    
    # Check if slug is numeric
    is_numeric = slug.isdigit()
    
    # Check if slug is very short (likely invalid)
    is_short = len(slug) <= 2
    
    # Check if slug looks like a version number
    is_version_like = bool(re.match(r'^\d+$', slug))
    
    issue_type = None
    reason = None
    recommendation = None
    
    if is_numeric:
        issue_type = 'numeric_slug_misrouted'
        reason = (
            f"Slug '{slug}' is numeric. The router treats numeric second parts as pagination "
            f"(e.g., /man-pages/{category}/264/ = page 264), not as a slug. "
            f"This URL is being routed to handleManPagesCategory({category}, 264) instead of "
            f"handleManPagesSubcategory({category}, {slug})."
        )
        recommendation = (
            f"Either:\n"
            f"  1. Add exception path mapping (like 'games/puzzle-and-logic-games/2048')\n"
            f"  2. Check if this should be a 3-part URL: /man-pages/{category}/<subcategory>/{slug}/\n"
            f"  3. Verify if slug '{slug}' exists in database and what its correct path should be"
        )
    elif is_short:
        issue_type = 'short_slug'
        reason = f"Slug '{slug}' is very short ({len(slug)} chars), likely invalid or missing subcategory"
        recommendation = f"Verify if this should be a 3-part URL with a proper subcategory"
    else:
        issue_type = 'subcategory_not_found'
        reason = (
            f"Subcategory '{slug}' not found in database for category '{category}'. "
            f"handleManPagesSubcategory() returned 0 results and all fallbacks failed."
        )
        recommendation = (
            f"Check:\n"
            f"  1. If '{slug}' exists as a subcategory in the database\n"
            f"  2. If '{slug}' should be a man page slug (needs 3-part URL)\n"
            f"  3. If there's a mapping in old_urls.csv for this path"
        )
    
    return {
        'category': category,
        'slug': slug,
        'is_numeric': is_numeric,
        'is_short': is_short,
        'issue_type': issue_type,
        'reason': reason,
        'recommendation': recommendation
    }


def main():
    input_file = Path(__file__).parent / 'man_pages_404_level_2_sub_category.csv'
    
    if not input_file.exists():
        print(f"Error: {input_file} not found!")
        print("Please run 'make analyze-man-pages-404' first to generate the CSV file.")
        sys.exit(1)
    
    results = []
    issue_counts = defaultdict(int)
    category_issues = defaultdict(list)
    
    print("=" * 80)
    print("ROOT CAUSE ANALYSIS: Level 2 Man-Pages 404 URLs")
    print("=" * 80)
    print()
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row.get('URL', '').strip()
            path_after = row.get('Path After man-pages', '').strip()
            
            if not path_after:
                continue
            
            analysis = analyze_url(path_after)
            analysis['url'] = url
            results.append(analysis)
            
            issue_counts[analysis['issue_type']] += 1
            category_issues[analysis['category']].append(analysis)
    
    # Summary by issue type
    print("--- Summary by Issue Type ---")
    print()
    for issue_type, count in sorted(issue_counts.items(), key=lambda x: -x[1]):
        percentage = (count / len(results) * 100) if results else 0
        print(f"  {issue_type}: {count:3d} URLs ({percentage:5.2f}%)")
    
    print()
    print("--- Breakdown by Category ---")
    print()
    for category in sorted(category_issues.keys()):
        issues = category_issues[category]
        numeric_count = sum(1 for i in issues if i['is_numeric'])
        short_count = sum(1 for i in issues if i['is_short'] and not i['is_numeric'])
        other_count = len(issues) - numeric_count - short_count
        
        print(f"  {category}:")
        print(f"    Total 404s: {len(issues)}")
        if numeric_count > 0:
            print(f"    - Numeric slugs (misrouted as pagination): {numeric_count}")
        if short_count > 0:
            print(f"    - Short slugs: {short_count}")
        if other_count > 0:
            print(f"    - Subcategory not found: {other_count}")
        print()
    
    # Detailed analysis
    print("=" * 80)
    print("DETAILED ANALYSIS")
    print("=" * 80)
    print()
    
    # Group by issue type
    by_issue = defaultdict(list)
    for result in results:
        by_issue[result['issue_type']].append(result)
    
    for issue_type in sorted(by_issue.keys(), key=lambda x: -len(by_issue[x])):
        issues = by_issue[issue_type]
        print(f"\n--- {issue_type.upper().replace('_', ' ')} ({len(issues)} URLs) ---")
        print()
        
        # Show first few examples
        for i, issue in enumerate(issues[:5], 1):
            print(f"{i}. URL: {issue['url']}")
            print(f"   Category: {issue['category']}, Slug: {issue['slug']}")
            print(f"   Issue: {issue['reason']}")
            print(f"   Recommendation: {issue['recommendation']}")
            print()
        
        if len(issues) > 5:
            print(f"   ... and {len(issues) - 5} more URLs with the same issue")
            print()
    
    # Key findings
    print("=" * 80)
    print("KEY FINDINGS & RECOMMENDATIONS")
    print("=" * 80)
    print()
    
    numeric_issues = [r for r in results if r['is_numeric']]
    if numeric_issues:
        print(f"1. NUMERIC SLUG MISROUTING ({len(numeric_issues)} URLs)")
        print("   Problem: Numeric slugs are being treated as pagination numbers.")
        print("   Example: /man-pages/library-functions/264/ is treated as 'page 264'")
        print("   instead of 'subcategory 264'.")
        print()
        print("   Solution Options:")
        print("   a) Add exception paths in man_pages_routes.go (like 'games/puzzle-and-logic-games/2048')")
        print("   b) Check if these should be 3-part URLs with proper subcategories")
        print("   c) Query database to find correct paths for these numeric slugs")
        print()
    
    short_issues = [r for r in results if r['is_short'] and not r['is_numeric']]
    if short_issues:
        print(f"2. SHORT SLUGS ({len(short_issues)} URLs)")
        print("   Problem: Very short slugs (1-2 chars) are likely invalid.")
        print("   These may be missing subcategories or incorrect URLs.")
        print()
    
    other_issues = [r for r in results if not r['is_numeric'] and not r['is_short']]
    if other_issues:
        print(f"3. SUBCATEGORY NOT FOUND ({len(other_issues)} URLs)")
        print("   Problem: Subcategory doesn't exist in database or fallbacks failed.")
        print("   These may need:")
        print("   - Database verification")
        print("   - old_urls.csv mapping check")
        print("   - URL structure correction")
        print()
    
    print("=" * 80)
    print(f"Total URLs analyzed: {len(results)}")
    print("=" * 80)


if __name__ == '__main__':
    main()

