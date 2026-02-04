#!/usr/bin/env python3
"""Categorize URLs from crawled_not_indexed.csv and show statistics."""

import csv
from collections import Counter, defaultdict
from urllib.parse import urlparse

def categorize_url(url):
    """Extract category from URL and determine URL level."""
    parsed = urlparse(url)
    path = parsed.path
    
    # Check domain first
    if 'journal.hexmos.com' in parsed.netloc:
        return 'journal', 0, []
    if 'www.hexmos.com' in parsed.netloc:
        return 'www', 0, []
    
    # Extract category from path
    if '/freedevtools/' in path:
        parts = path.split('/freedevtools/')
        if len(parts) > 1:
            path_after_freedevtools = parts[1]
            # Remove leading/trailing slashes and split
            path_parts = [p for p in path_after_freedevtools.split('/') if p]
            if path_parts:
                category = path_parts[0]
                # Depth after category: depth 1 = category page, depth 2 = subcategory, depth 3+ = detail
                # Subtract 1 because path_parts includes the category itself
                depth_after_category = len(path_parts) - 1
                return category, depth_after_category, path_parts
    
    return 'other', 0, []

def is_pagination_page(path_parts):
    """Check if URL is a pagination page (ends with just a number)."""
    if not path_parts:
        return False
    last_segment = path_parts[-1]
    # Check if last segment is just a number
    return last_segment.isdigit()

def get_url_level(category, depth_after_category, path_parts):
    """Determine URL level: category, subcategory, or detail.
    
    depth_after_category is the number of path segments after the category name.
    If the last segment is a pagination number, exclude it from depth calculation.
    """
    if depth_after_category == 0:
        return 'unknown'
    
    # If last segment is a pagination number, exclude it from depth calculation
    effective_depth = depth_after_category
    if is_pagination_page(path_parts):
        effective_depth = depth_after_category - 1
    
    if category == 'man-pages' or category == 'man_pages':
        # man-pages structure: man-pages/<category>/<subcategory>/<details>
        # effective_depth 1 = category page (e.g., "library-functions")
        # effective_depth 2 = subcategory page (e.g., "library-functions/string-manipulation" or "library-functions/string-examination/369")
        # effective_depth 3+ = detail page (e.g., "library-functions/string-manipulation/math-bigint")
        if effective_depth == 1:
            return 'category'
        elif effective_depth == 2:
            return 'subcategory'
        else:  # effective_depth >= 3
            return 'detail'
    else:
        # Other structure: <category>/<details>
        # effective_depth 1 = category page (e.g., "bath")
        # effective_depth 2+ = detail page (e.g., "spicedb/spicedb-plain")
        if effective_depth == 1:
            return 'category'
        else:  # effective_depth >= 2
            return 'detail'

def main():
    categories = Counter()
    category_levels = defaultdict(lambda: {'category': 0, 'subcategory': 0, 'detail': 0, 'pagination': 0})
    total = 0
    
    with open('scripts/crawled_not_indexed.csv', 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f, delimiter='\t')
        for row in reader:
            url = row.get('URL', '').strip()
            if url:
                category, depth, path_parts = categorize_url(url)
                categories[category] += 1
                
                # Check if it's a pagination page
                is_pagination = is_pagination_page(path_parts)
                if is_pagination:
                    category_levels[category]['pagination'] += 1
                
                # Also categorize by level (pagination pages can still be category/subcategory/detail)
                level = get_url_level(category, depth, path_parts)
                if level in ['category', 'subcategory', 'detail']:
                    category_levels[category][level] += 1
                total += 1
    
    # Sort by count (descending)
    sorted_categories = sorted(categories.items(), key=lambda x: x[1], reverse=True)
    
    print(f"**Total URLs:** {total}")
    print(f"**Number of categories:** {len(categories)}")
    print("\n## Category Breakdown\n")
    
    # Markdown table header
    print("| Category | Count | Total % | Category URLs % | Subcategory URLs % | Detail Pages % | Pagination Pages % |")
    print("|----------|-------|---------|-----------------|---------------------|----------------|---------------------|")
    
    for category, count in sorted_categories:
        total_percentage = (count / total) * 100
        levels = category_levels[category]
        category_pct = (levels['category'] / count * 100) if count > 0 else 0
        subcategory_pct = (levels['subcategory'] / count * 100) if count > 0 else 0
        detail_pct = (levels['detail'] / count * 100) if count > 0 else 0
        pagination_pct = (levels['pagination'] / count * 100) if count > 0 else 0
        
        print(f"| {category} | {count} | {total_percentage:.2f}% | {category_pct:.2f}% | {subcategory_pct:.2f}% | {detail_pct:.2f}% | {pagination_pct:.2f}% |")
    
    print(f"| **TOTAL** | **{total}** | **100.00%** | | | | |")

if __name__ == '__main__':
    main()

