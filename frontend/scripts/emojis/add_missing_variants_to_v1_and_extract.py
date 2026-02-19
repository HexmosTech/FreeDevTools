#!/usr/bin/env python3
"""
Add missing image variant records to v1 database and extract image files to public directory.

This script:
1. Queries old database (emoji-db.db) for missing variants (3d, color, flat)
2. Calculates proper hashes (emoji_slug_hash, emoji_slug_only_hash) matching Go implementation
3. Inserts records into v1 database (emoji-db-v5.db) WITHOUT image_data column
4. Extracts image files from old database to public/emojis/{emoji_slug}/
"""
import sqlite3
import os
import hashlib
from pathlib import Path

# Database paths
OLD_DB_PATH = 'db/all_dbs/emoji-db.db'
V1_DB_PATH = 'db/all_dbs/emoji-db-v5.db'
OUTPUT_DIR = 'public/emojis'

# Emoji slugs to check (can be extended)
EMOJI_SLUGS_TO_CHECK = ['cat']  # Add more as needed


def hash_string_to_int64(s: str) -> int:
    """
    Hash a string using SHA-256 and return the first 8 bytes as a signed big-endian int64.
    This matches the Go implementation: hashStringToInt64 in queries.go
    """
    if not s:
        s = ''
    hash_obj = hashlib.sha256(s.encode('utf-8'))
    hash_bytes = hash_obj.digest()
    # Take first 8 bytes and convert to signed int64 (big-endian)
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)


def detect_image_format(image_data: bytes) -> str:
    """Detect image format from BLOB data magic bytes."""
    if len(image_data) < 12:
        return None
    
    # PNG: starts with PNG signature
    if image_data[:8] == b'\x89PNG\r\n\x1a\n':
        return 'png'
    
    # WebP: starts with RIFF and contains WEBP
    if image_data[:4] == b'RIFF' and image_data[8:12] == b'WEBP':
        return 'webp'
    
    # SVG: check for SVG content
    if b'<svg' in image_data[:100] or b'<?xml' in image_data[:100]:
        return 'svg'
    
    # JPEG: starts with FF D8 FF
    if image_data[:3] == b'\xff\xd8\xff':
        return 'jpg'
    
    return None


def get_output_filename(original_filename: str, image_data: bytes) -> str:
    """Get output filename with correct extension based on actual BLOB format."""
    detected_format = detect_image_format(image_data)
    
    if detected_format:
        # Replace extension with detected format
        base_name = os.path.splitext(original_filename)[0]
        return f"{base_name}.{detected_format}"
    
    # Fallback to original filename if format not detected
    return original_filename


def main():
    # Check if databases exist
    if not os.path.exists(OLD_DB_PATH):
        print(f"❌ Error: Old database not found: {OLD_DB_PATH}")
        return
    
    if not os.path.exists(V1_DB_PATH):
        print(f"❌ Error: V1 database not found: {V1_DB_PATH}")
        return
    
    # Connect to databases
    print(f"🔌 Connecting to old database: {OLD_DB_PATH}")
    old_conn = sqlite3.connect(OLD_DB_PATH)
    old_cursor = old_conn.cursor()
    
    print(f"🔌 Connecting to v1 database: {V1_DB_PATH}")
    v1_conn = sqlite3.connect(V1_DB_PATH)
    v1_cursor = v1_conn.cursor()
    
    # Check v1 database schema
    v1_cursor.execute("PRAGMA table_info(images)")
    v1_columns = [col[1] for col in v1_cursor.fetchall()]
    print(f"   V1 database columns: {', '.join(v1_columns)}")
    
    if 'emoji_slug_hash' not in v1_columns or 'emoji_slug_only_hash' not in v1_columns:
        print("❌ Error: V1 database missing required hash columns")
        old_conn.close()
        v1_conn.close()
        return
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    total_found = 0
    total_inserted = 0
    total_extracted = 0
    total_skipped = 0
    
    print(f"\n📋 Checking for missing variants in {len(EMOJI_SLUGS_TO_CHECK)} emoji slug(s)...\n")
    
    # Process each emoji slug
    for emoji_slug in EMOJI_SLUGS_TO_CHECK:
        print(f"🔍 Processing: {emoji_slug}")
        
        # Query old database for variants (3d, color, flat)
        query = """
            SELECT emoji_slug, filename, image_type, image_data
            FROM images
            WHERE emoji_slug = ? 
            AND (
                filename LIKE '%3d%' OR filename LIKE '%color%' OR filename LIKE '%flat%'
            )
            ORDER BY filename
        """
        
        old_cursor.execute(query, (emoji_slug,))
        rows = old_cursor.fetchall()
        
        if not rows:
            print(f"   ⚠️  No variants found in old database")
            continue
        
        print(f"   Found {len(rows)} variant(s) in old database")
        
        # Process each variant
        for emoji_slug_old, filename, image_type, image_data in rows:
            total_found += 1
            
            # Calculate hashes (matching v1 database schema)
            # emoji_slug_hash = hash(emoji_slug|filename) - PRIMARY KEY (allows multiple images per emoji)
            # emoji_slug_only_hash = hash(emoji_slug) - for fast lookups
            emoji_slug_only_hash = hash_string_to_int64(emoji_slug_old)
            emoji_slug_hash = hash_string_to_int64(f"{emoji_slug_old}|{filename}")
            
            # Check if record already exists in v1 database
            check_query = """
                SELECT COUNT(*) FROM images
                WHERE emoji_slug_hash = ? AND emoji_slug = ? AND filename = ? AND image_type = ?
            """
            v1_cursor.execute(check_query, (emoji_slug_hash, emoji_slug_old, filename, image_type))
            exists = v1_cursor.fetchone()[0] > 0
            
            if exists:
                print(f"   ✓ {filename} ({image_type}) - Already exists in v1 DB, skipping insert")
                total_skipped += 1
            else:
                # Insert record into v1 database (without image_data)
                insert_query = """
                    INSERT INTO images (emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash)
                    VALUES (?, ?, ?, ?, ?)
                """
                try:
                    v1_cursor.execute(insert_query, (emoji_slug_hash, emoji_slug_old, filename, image_type, emoji_slug_only_hash))
                    v1_conn.commit()
                    print(f"   ✅ {filename} ({image_type}) - Inserted into v1 DB")
                    total_inserted += 1
                except sqlite3.Error as e:
                    print(f"   ❌ {filename} ({image_type}) - Failed to insert: {e}")
                    v1_conn.rollback()
                    continue
            
            # Extract image file to public directory
            if not image_data:
                print(f"   ⚠️  {filename} - No image_data in old DB, skipping extraction")
                continue
            
            # Create directory for emoji_slug
            emoji_dir = os.path.join(OUTPUT_DIR, emoji_slug_old)
            os.makedirs(emoji_dir, exist_ok=True)
            
            # Get correct filename based on actual BLOB format
            output_filename = get_output_filename(filename, image_data)
            
            # Recalculate hash with output_filename (in case format was detected)
            final_emoji_slug_hash = hash_string_to_int64(f"{emoji_slug_old}|{output_filename}")
            
            # Check if record already exists with the output filename (after format detection)
            if output_filename != filename:
                check_query_output = """
                    SELECT COUNT(*) FROM images
                    WHERE emoji_slug_hash = ? AND emoji_slug = ? AND filename = ? AND image_type = ?
                """
                v1_cursor.execute(check_query_output, (final_emoji_slug_hash, emoji_slug_old, output_filename, image_type))
                exists_output = v1_cursor.fetchone()[0] > 0
                if exists_output:
                    print(f"   ✓ {output_filename} ({image_type}) - Already exists in v1 DB with correct filename, skipping")
                    total_skipped += 1
                    # Still check if file exists and skip extraction
                    emoji_dir = os.path.join(OUTPUT_DIR, emoji_slug_old)
                    if image_type == 'apple-vendor':
                        file_path = os.path.join(emoji_dir, 'apple-emojis', output_filename)
                    else:
                        file_path = os.path.join(emoji_dir, output_filename)
                    if os.path.exists(file_path):
                        print(f"   ✓ {output_filename} - File already exists, skipping extraction")
                    continue
            
            # If filename changed (format detection), update the database record
            if output_filename != filename:
                # Update the filename in the database to match actual file format
                update_query = """
                    UPDATE images 
                    SET filename = ? 
                    WHERE emoji_slug_hash = ?
                """
                # Recalculate hash with new filename
                new_emoji_slug_hash = hash_string_to_int64(f"{emoji_slug_old}|{output_filename}")
                try:
                    v1_cursor.execute(update_query, (output_filename, emoji_slug_hash))
                    v1_conn.commit()
                    # Update hash to match new filename
                    v1_cursor.execute("""
                        UPDATE images 
                        SET emoji_slug_hash = ? 
                        WHERE emoji_slug = ? AND filename = ? AND image_type = ?
                    """, (new_emoji_slug_hash, emoji_slug_old, output_filename, image_type))
                    v1_conn.commit()
                    emoji_slug_hash = new_emoji_slug_hash
                    print(f"   ℹ️  Updated filename in DB: {filename} → {output_filename}")
                except sqlite3.Error as e:
                    print(f"   ⚠️  Failed to update filename in DB: {e}")
                    v1_conn.rollback()
            
            # Handle nested directories (e.g., apple-emojis/)
            if image_type == 'apple-vendor':
                apple_dir = os.path.join(emoji_dir, 'apple-emojis')
                os.makedirs(apple_dir, exist_ok=True)
                file_path = os.path.join(apple_dir, output_filename)
            else:
                file_path = os.path.join(emoji_dir, output_filename)
            
            # Check if file already exists
            if os.path.exists(file_path):
                print(f"   ✓ {output_filename} - File already exists, skipping extraction")
                continue
            
            # Write BLOB data to file
            try:
                with open(file_path, 'wb') as f:
                    f.write(image_data)
                print(f"   ✅ {output_filename} - Extracted to {file_path}")
                total_extracted += 1
            except Exception as e:
                print(f"   ❌ {output_filename} - Failed to extract: {e}")
    
    # Close connections
    old_conn.close()
    v1_conn.close()
    
    print(f"\n✅ Complete!")
    print(f"   Total Variants Found: {total_found}")
    print(f"   ✅ Inserted into V1 DB: {total_inserted}")
    print(f"   ⚠️  Already Existed: {total_skipped}")
    print(f"   ✅ Files Extracted: {total_extracted}")
    print(f"   📁 Output directory: {OUTPUT_DIR}/")


if __name__ == '__main__':
    main()

