#!/usr/bin/env python3
"""
Fix hash mismatches in cheatsheets database by recalculating hash_id.
"""

import sqlite3
import hashlib
import sys
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "cheatsheets-db-v4.db"

def calculate_hash(category: str, slug: str) -> int:
    """Calculate hash using current method"""
    combined = category + slug
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def main():
    if not DB_PATH.exists():
        print(f"Database not found: {DB_PATH}")
        sys.exit(1)
    
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # Find mismatches
    cur.execute("SELECT hash_id, category, slug FROM cheatsheet ORDER BY category, slug")
    rows = cur.fetchall()
    
    mismatches = []
    for db_hash, category, slug in rows:
        calculated_hash = calculate_hash(category, slug)
        if db_hash != calculated_hash:
            mismatches.append((db_hash, category, slug, calculated_hash))
    
    if not mismatches:
        print("✓ All hashes are correct!")
        conn.close()
        return
    
    print(f"Found {len(mismatches)} hash mismatches:\n")
    for db_hash, category, slug, calculated_hash in mismatches:
        print(f"  {category}/{slug}:")
        print(f"    Current hash:  {db_hash}")
        print(f"    Correct hash:  {calculated_hash}")
    
    print("\n" + "=" * 80)
    response = input(f"\nFix these {len(mismatches)} entries? (yes/no): ")
    
    if response.lower() != 'yes':
        print("Aborted.")
        conn.close()
        return
    
    # Fix the hashes
    print("\nFixing hashes...")
    for db_hash, category, slug, calculated_hash in mismatches:
        # Update the hash_id
        cur.execute("""
            UPDATE cheatsheet 
            SET hash_id = ? 
            WHERE category = ? AND slug = ?
        """, (calculated_hash, category, slug))
        print(f"  ✓ Fixed {category}/{slug}: {db_hash} -> {calculated_hash}")
    
    conn.commit()
    print(f"\n✓ Successfully fixed {len(mismatches)} entries!")
    
    # Verify
    print("\nVerifying fixes...")
    remaining_mismatches = 0
    for db_hash, category, slug, calculated_hash in mismatches:
        cur.execute("SELECT hash_id FROM cheatsheet WHERE category = ? AND slug = ?", 
                   (category, slug))
        new_hash = cur.fetchone()[0]
        if new_hash != calculated_hash:
            print(f"  ✗ ERROR: {category}/{slug} still has wrong hash: {new_hash}")
            remaining_mismatches += 1
    
    if remaining_mismatches == 0:
        print("  ✓ All fixes verified!")
    
    conn.close()

if __name__ == "__main__":
    main()

