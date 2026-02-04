#!/usr/bin/env python3
"""
Check for hash mismatches in cheatsheets database.
Compares database hash_id with calculated hash from category+slug.
"""

import sqlite3
import hashlib
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "cheatsheets-db-v4.db"

def calculate_hash_current(category: str, slug: str) -> int:
    """Current hash calculation (what Go code uses)"""
    combined = category + slug
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def calculate_hash_variations(category: str, slug: str):
    """Try different hash calculation variations"""
    variations = {}
    
    # Current: category + slug
    combined = category + slug
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    variations['current'] = int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)
    
    # Try with slash separator
    combined_slash = f"{category}/{slug}"
    hash_bytes = hashlib.sha256(combined_slash.encode('utf-8')).digest()
    variations['with_slash'] = int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)
    
    # Try lowercase
    combined_lower = combined.lower()
    hash_bytes = hashlib.sha256(combined_lower.encode('utf-8')).digest()
    variations['lowercase'] = int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)
    
    # Try with trailing slash
    combined_trailing = f"{category}{slug}/"
    hash_bytes = hashlib.sha256(combined_trailing.encode('utf-8')).digest()
    variations['trailing_slash'] = int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)
    
    return variations

def main():
    if not DB_PATH.exists():
        print(f"Database not found: {DB_PATH}")
        sys.exit(1)
    
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # Get all cheatsheets
    cur.execute("SELECT hash_id, category, slug FROM cheatsheet ORDER BY category, slug")
    rows = cur.fetchall()
    
    print(f"Checking {len(rows)} cheatsheets...\n")
    
    mismatches = []
    matches = 0
    
    for db_hash, category, slug in rows:
        calculated_hash = calculate_hash_current(category, slug)
        
        if db_hash == calculated_hash:
            matches += 1
        else:
            # Try variations to see if we can find the pattern
            variations = calculate_hash_variations(category, slug)
            matched_variation = None
            for var_name, var_hash in variations.items():
                if var_hash == db_hash:
                    matched_variation = var_name
                    break
            
            mismatches.append({
                'category': category,
                'slug': slug,
                'db_hash': db_hash,
                'calculated_hash': calculated_hash,
                'matched_variation': matched_variation
            })
    
    print(f"Results:")
    print(f"  Matches: {matches}")
    print(f"  Mismatches: {len(mismatches)}\n")
    
    if mismatches:
        print("Mismatches found:")
        print("-" * 80)
        
        # Group by variation type
        by_variation = {}
        no_match = []
        
        for m in mismatches:
            if m['matched_variation']:
                if m['matched_variation'] not in by_variation:
                    by_variation[m['matched_variation']] = []
                by_variation[m['matched_variation']].append(m)
            else:
                no_match.append(m)
        
        # Print grouped results
        for var_name, items in by_variation.items():
            print(f"\n{var_name.upper()} pattern ({len(items)} items):")
            for m in items[:10]:  # Show first 10
                print(f"  {m['category']}/{m['slug']}: DB={m['db_hash']}, Calc={m['calculated_hash']}")
            if len(items) > 10:
                print(f"  ... and {len(items) - 10} more")
        
        if no_match:
            print(f"\nNO MATCHING PATTERN ({len(no_match)} items):")
            for m in no_match[:20]:  # Show first 20
                print(f"  {m['category']}/{m['slug']}: DB={m['db_hash']}, Calc={m['calculated_hash']}")
            if len(no_match) > 20:
                print(f"  ... and {len(no_match) - 20} more")
        
        # Show detailed analysis for each mismatch
        print(f"\n\nDetailed Analysis of Mismatches:")
        print("=" * 80)
        for i, m in enumerate(mismatches, 1):
            print(f"\n{i}. {m['category']}/{m['slug']}")
            print(f"   DB hash:        {m['db_hash']}")
            print(f"   Calculated:     {m['calculated_hash']}")
            print(f"   Difference:     {abs(m['db_hash'] - m['calculated_hash'])}")
            print(f"   Category repr:  {repr(m['category'])}")
            print(f"   Slug repr:      {repr(m['slug'])}")
            
            # Try to find what might produce this hash
            import urllib.parse
            test_inputs = [
                (m['category'] + '/' + m['slug'], "category/slug"),
                (m['category'] + '-' + m['slug'], "category-slug"),
                (m['category'] + '_' + m['slug'], "category_slug"),
                (urllib.parse.quote(m['category']) + urllib.parse.quote(m['slug']), "URL encoded"),
            ]
            
            found_match = False
            for test_input, desc in test_inputs:
                hash_obj = hashlib.sha256(test_input.encode('utf-8'))
                hash_bytes = hash_obj.digest()[:8]
                result = int.from_bytes(hash_bytes, byteorder='big', signed=True)
                if result == m['db_hash']:
                    print(f"   ✓ FOUND MATCH: '{test_input}' ({desc})")
                    found_match = True
            
            if not found_match:
                print(f"   ✗ No matching hash calculation found")
                print(f"   → This entry may have been manually inserted or corrupted")
    
    conn.close()
    
    if mismatches:
        sys.exit(1)
    else:
        print("\n✓ All hashes match!")

if __name__ == "__main__":
    main()

