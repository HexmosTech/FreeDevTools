#!/usr/bin/env python3
"""
Add ALL missing image variant records to v1 database and extract image files to public directory.

This script:
1. Reads the missing_variants_report.csv to get all emojis with missing variants
2. Queries old database (emoji-db.db) for missing variants (3d, color, flat)
3. Calculates proper hashes (emoji_slug_hash, emoji_slug_only_hash) matching Go implementation
4. Inserts records into v1 database (emoji-db-v5.db) WITHOUT image_data column
5. Extracts image files from old database to public/emojis/{emoji_slug}/
"""
import sqlite3
import os
import hashlib
import csv
from pathlib import Path

# Database paths
OLD_DB_PATH = 'db/all_dbs/emoji-db.db'
V1_DB_PATH = 'db/all_dbs/emoji-db-v5.db'
OUTPUT_DIR = 'public/emojis'
CSV_REPORT = 'scripts/emojis/missing_variants_report.csv'


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


def load_emoji_slugs_from_csv(csv_path: str) -> list:
    """Load emoji slugs from CSV report."""
    emoji_slugs = []
    if os.path.exists(csv_path):
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                emoji_slugs.append(row['emoji_slug'])
        print(f"📋 Loaded {len(emoji_slugs)} emoji slugs from CSV report")
    else:
        print(f"⚠️  CSV report not found: {csv_path}")
        print("   Will process all emojis from old database instead")
    return emoji_slugs


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
    
    # Load emoji slugs from CSV or get all from old DB
    emoji_slugs = load_emoji_slugs_from_csv(CSV_REPORT)
    
    if not emoji_slugs:
        # Fallback: get all emojis with variants from old DB
        print("📋 Getting all emojis with variants from old database...")
        query_all = """
            SELECT DISTINCT emoji_slug
            FROM images
            WHERE (
                filename LIKE '%3d%' OR 
                filename LIKE '%color%' OR 
                filename LIKE '%flat%'
            )
            AND image_type = 'ms-fluentui'
            ORDER BY emoji_slug
        """
        old_cursor.execute(query_all)
        emoji_slugs = [row[0] for row in old_cursor.fetchall()]
        print(f"   Found {len(emoji_slugs)} emojis with variants in old DB")
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    total_found = 0
    total_inserted = 0
    total_extracted = 0
    total_skipped = 0
    total_errors = 0
    
    print(f"\n📋 Processing {len(emoji_slugs)} emoji slug(s)...\n")
    
    # Process each emoji slug
    for idx, emoji_slug in enumerate(emoji_slugs, 1):
        if idx % 100 == 0:
            print(f"   Progress: {idx}/{len(emoji_slugs)} emojis processed...")
        
        # Query old database for variants (3d, color, flat)
        query = """
            SELECT emoji_slug, filename, image_type, image_data
            FROM images
            WHERE emoji_slug = ? 
            AND (
                filename LIKE '%3d%' OR filename LIKE '%color%' OR filename LIKE '%flat%'
            )
            AND image_type = 'ms-fluentui'
            ORDER BY filename
        """
        
        old_cursor.execute(query, (emoji_slug,))
        rows = old_cursor.fetchall()
        
        if not rows:
            continue
        
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
                total_skipped += 1
                continue
            
            # Insert record into v1 database (without image_data)
            insert_query = """
                INSERT INTO images (emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash)
                VALUES (?, ?, ?, ?, ?)
            """
            try:
                v1_cursor.execute(insert_query, (emoji_slug_hash, emoji_slug_old, filename, image_type, emoji_slug_only_hash))
                v1_conn.commit()
                total_inserted += 1
            except sqlite3.Error as e:
                print(f"   ❌ {emoji_slug_old}/{filename} - Failed to insert: {e}")
                v1_conn.rollback()
                total_errors += 1
                continue
            
            # Extract image file to public directory
            if not image_data:
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
                    total_skipped += 1
                    # Still check if file exists and skip extraction
                    emoji_dir = os.path.join(OUTPUT_DIR, emoji_slug_old)
                    file_path = os.path.join(emoji_dir, output_filename)
                    if os.path.exists(file_path):
                        continue
            
            # If filename changed (format detection), update the database record
            if output_filename != filename:
                # Update the filename in the database to match actual file format
                update_query = """
                    UPDATE images 
                    SET filename = ?, emoji_slug_hash = ?
                    WHERE emoji_slug_hash = ?
                """
                try:
                    v1_cursor.execute(update_query, (output_filename, final_emoji_slug_hash, emoji_slug_hash))
                    v1_conn.commit()
                    emoji_slug_hash = final_emoji_slug_hash
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
                total_skipped += 1
                continue
            
            # Write BLOB data to file
            try:
                with open(file_path, 'wb') as f:
                    f.write(image_data)
                total_extracted += 1
            except Exception as e:
                print(f"   ❌ {emoji_slug_old}/{output_filename} - Failed to extract: {e}")
                total_errors += 1
    
    # Close connections
    old_conn.close()
    v1_conn.close()
    
    print(f"\n✅ Complete!")
    print(f"   Total Variants Found: {total_found}")
    print(f"   ✅ Inserted into V1 DB: {total_inserted}")
    print(f"   ⚠️  Already Existed: {total_skipped}")
    print(f"   ✅ Files Extracted: {total_extracted}")
    print(f"   ❌ Errors: {total_errors}")
    print(f"   📁 Output directory: {OUTPUT_DIR}/")


if __name__ == '__main__':
    main()

