#!/usr/bin/env python3
"""
Copy missing 3D, Color, and Flat image variants from emoji-db.db to emoji-db-v5.db
and extract the image files to the public directory.
"""

import sqlite3
import os
import sys
from pathlib import Path

# Database paths
OLD_DB = "db/all_dbs/emoji-db.db"
NEW_DB = "db/all_dbs/emoji-db-v5.db"
PUBLIC_DIR = "public/emojis"

def hash_string_to_int64(s):
    """Hash string to int64 matching Go implementation"""
    import hashlib
    if not s:
        s = ""
    hash_bytes = hashlib.sha256(s.encode()).digest()[:8]
    return int.from_bytes(hash_bytes, byteorder='big', signed=True)

def main():
    # Check if databases exist
    if not os.path.exists(OLD_DB):
        print(f"Error: {OLD_DB} not found")
        sys.exit(1)
    
    if not os.path.exists(NEW_DB):
        print(f"Error: {NEW_DB} not found")
        sys.exit(1)
    
    # Connect to databases
    old_conn = sqlite3.connect(OLD_DB)
    new_conn = sqlite3.connect(NEW_DB)
    
    old_cursor = old_conn.cursor()
    new_cursor = new_conn.cursor()
    
    # Get all missing variants from old DB
    # Find images with 3d, color, or flat in filename that are ms-fluentui
    query = """
        SELECT emoji_slug, filename, image_type, image_data
        FROM images
        WHERE (filename LIKE '%3d%' OR filename LIKE '%color%' OR filename LIKE '%flat%')
          AND image_type = 'ms-fluentui'
    """
    
    old_cursor.execute(query)
    rows = old_cursor.fetchall()
    
    print(f"Found {len(rows)} variant images in old database")
    
    copied_records = 0
    extracted_files = 0
    skipped_records = 0
    errors = []
    
    for emoji_slug, filename, image_type, image_data in rows:
        try:
            # Check if record already exists in new DB
            slug_hash = hash_string_to_int64(emoji_slug)
            check_query = """
                SELECT COUNT(*) FROM images 
                WHERE emoji_slug_only_hash = ? AND filename = ?
            """
            new_cursor.execute(check_query, (slug_hash, filename))
            exists = new_cursor.fetchone()[0] > 0
            
            if exists:
                print(f"  Skipping {emoji_slug}/{filename} (already exists)")
                skipped_records += 1
                continue
            
            # Insert into new database
            insert_query = """
                INSERT INTO images (emoji_slug_only_hash, emoji_slug, filename, image_type, image_data)
                VALUES (?, ?, ?, ?, ?)
            """
            new_cursor.execute(insert_query, (slug_hash, emoji_slug, filename, image_type, image_data))
            copied_records += 1
            print(f"  Copied record: {emoji_slug}/{filename}")
            
            # Extract file to public directory
            emoji_dir = os.path.join(PUBLIC_DIR, emoji_slug)
            os.makedirs(emoji_dir, exist_ok=True)
            
            file_path = os.path.join(emoji_dir, filename)
            if os.path.exists(file_path):
                print(f"    File already exists: {file_path}")
            else:
                with open(file_path, 'wb') as f:
                    f.write(image_data)
                extracted_files += 1
                print(f"    Extracted file: {file_path}")
                
        except Exception as e:
            error_msg = f"Error processing {emoji_slug}/{filename}: {e}"
            print(f"  {error_msg}")
            errors.append(error_msg)
    
    # Commit changes
    new_conn.commit()
    
    print(f"\nSummary:")
    print(f"  Copied records: {copied_records}")
    print(f"  Extracted files: {extracted_files}")
    print(f"  Skipped records: {skipped_records}")
    print(f"  Errors: {len(errors)}")
    
    if errors:
        print(f"\nErrors:")
        for error in errors:
            print(f"  {error}")
    
    old_conn.close()
    new_conn.close()
    
    print("\nDone!")

if __name__ == "__main__":
    main()

