#!/usr/bin/env python3
"""
Copy Discord evolution images from emoji-db.db to emoji-db-v5.db
This script copies all Discord (twemoji-vendor) images that are missing in v1 db, calculating
the required hash columns (emoji_slug_hash and emoji_slug_only_hash).
"""

import sqlite3
import hashlib
import sys
import os

# Database paths
source_db = '/home/lovestaco/hex/fdt-templ/db/all_dbs/emoji-db.db'
target_db = '/home/lovestaco/hex/fdt-templ/db/all_dbs/emoji-db-v5.db'

def hash_to_key(value):
    """Hash a string to int64 using SHA256 (first 8 bytes as big-endian int64)"""
    if not value:
        value = ''
    hash_obj = hashlib.sha256(value.encode('utf-8'))
    hash_bytes = hash_obj.digest()
    # Take first 8 bytes and convert to signed int64 (big-endian)
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def hash_image_key_with_filename(emoji_slug, filename):
    """Hash emoji_slug + filename for unique PRIMARY KEY (allows multiple images per emoji)"""
    combined = f"{emoji_slug}|{filename}"
    return hash_to_key(combined)

def main():
    print('🔄 Copying Discord evolution images from emoji-db.db to emoji-db-v5.db\n')
    
    # Connect to both databases
    source_conn = sqlite3.connect(source_db)
    target_conn = sqlite3.connect(target_db)
    
    source_cursor = source_conn.cursor()
    target_cursor = target_conn.cursor()
    
    # Get all Discord images from source database
    print('📥 Fetching Discord images from source database...')
    source_cursor.execute("""
        SELECT emoji_slug, filename, image_data, image_type
        FROM images
        WHERE image_type = 'twemoji-vendor'
        ORDER BY emoji_slug, filename
    """)
    
    source_images = source_cursor.fetchall()
    print(f'   Found {len(source_images)} Discord images in source database\n')
    
    # Get existing images from target database to avoid duplicates
    print('📋 Checking existing images in target database...')
    target_cursor.execute("""
        SELECT emoji_slug, filename, image_type
        FROM images
        WHERE image_type = 'twemoji-vendor'
    """)
    existing = {(row[0], row[1], row[2]) for row in target_cursor.fetchall()}
    print(f'   Found {len(existing)} existing Discord images in target database\n')
    
    # Prepare insert statement - using hash(emoji_slug + filename) as PRIMARY KEY
    # This allows multiple Discord images per emoji
    insert_stmt = """
        INSERT OR REPLACE INTO images 
        (emoji_slug_hash, emoji_slug, filename, image_data, image_type, emoji_slug_only_hash)
        VALUES (?, ?, ?, ?, ?, ?)
    """
    
    # Process and insert images
    print('🔄 Copying images...')
    inserted = 0
    skipped = 0
    errors = 0
    
    target_conn.execute('BEGIN TRANSACTION')
    
    try:
        for emoji_slug, filename, image_data, image_type in source_images:
            # Check if already exists
            if (emoji_slug, filename, image_type) in existing:
                skipped += 1
                continue
            
            # Calculate hashes
            # Use hash(emoji_slug + filename) as PRIMARY KEY to allow multiple Discord images per emoji
            emoji_slug_hash = hash_image_key_with_filename(emoji_slug, filename)
            emoji_slug_only_hash = hash_to_key(emoji_slug)
            
            # Insert into target database
            try:
                target_cursor.execute(insert_stmt, (
                    emoji_slug_hash,
                    emoji_slug,
                    filename,
                    image_data,
                    image_type,
                    emoji_slug_only_hash
                ))
                inserted += 1
                
                if inserted % 100 == 0:
                    print(f'   Inserted {inserted} images...')
            except sqlite3.IntegrityError as e:
                # Handle PRIMARY KEY conflicts (same emoji_slug_hash)
                print(f'   ⚠️  Skipping {emoji_slug}/{filename} (hash conflict: {e})')
                errors += 1
                continue
            except Exception as e:
                print(f'   ❌ Error inserting {emoji_slug}/{filename}: {e}')
                errors += 1
                continue
        
        target_conn.commit()
        print(f'\n✅ Successfully inserted {inserted} images')
        print(f'   Skipped {skipped} existing images')
        if errors > 0:
            print(f'   Errors: {errors}')
        
    except Exception as e:
        target_conn.rollback()
        print(f'\n❌ Error during transaction: {e}')
        sys.exit(1)
    finally:
        source_conn.close()
        target_conn.close()
    
    # Verify
    print('\n🔄 Verifying...')
    verify_conn = sqlite3.connect(target_db)
    verify_cursor = verify_conn.cursor()
    verify_cursor.execute("SELECT COUNT(*) FROM images WHERE image_type = 'twemoji-vendor'")
    total_discord = verify_cursor.fetchone()[0]
    print(f'   Total Discord images in target database: {total_discord}')
    verify_cursor.execute("SELECT COUNT(*) FROM images WHERE emoji_slug = 'cat' AND image_type = 'twemoji-vendor'")
    cat_discord = verify_cursor.fetchone()[0]
    print(f'   Discord images for "cat": {cat_discord}')
    verify_conn.close()
    
    print('\n✅ Done!')

if __name__ == '__main__':
    main()

