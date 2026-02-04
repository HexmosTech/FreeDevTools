#!/usr/bin/env python3
"""
Extract missing image data from backup emoji database and save to public2/emojis/
Only extracts images that are listed in images_analysis.csv as missing (exists=no)
Uses the backup database which still has the image_data blob column
"""
import sqlite3
import os
import csv
from pathlib import Path

# Database and output paths
BACKUP_DB_PATH = 'db/backup/emoji-db-v1_before_deleting_image_data_column.db'
MISSING_CSV = 'scripts/emojis/images_analysis.csv'
OUTPUT_DIR = 'public/emojis'
SKIPPED_CSV = 'scripts/emojis/missing_extraction_skipped.csv'
EXISTING_CSV = 'scripts/emojis/missing_extraction_existing.csv'


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


def load_missing_images_from_csv(csv_path: str):
    """Load missing image records from CSV file."""
    missing_images = []
    
    if not os.path.exists(csv_path):
        print(f"❌ Error: CSV file not found: {csv_path}")
        return missing_images
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Only process rows where exists=no
            if row.get('exists', '').lower() == 'no':
                missing_images.append({
                    'emoji_slug_hash': row.get('emoji_slug_hash', ''),
                    'emoji_slug': row.get('emoji_slug', ''),
                    'image_type': row.get('image_type', ''),
                    'filename': row.get('filename', ''),
                })
    
    return missing_images


def main():
    # Check if backup database exists
    if not os.path.exists(BACKUP_DB_PATH):
        print(f"❌ Error: Backup database not found: {BACKUP_DB_PATH}")
        return
    
    # Load missing images from CSV
    print(f"📋 Loading missing images from {MISSING_CSV}...")
    missing_images = load_missing_images_from_csv(MISSING_CSV)
    
    if not missing_images:
        print("❌ No missing images found in CSV file")
        return
    
    print(f"   Found {len(missing_images)} missing images to extract\n")
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Connect to backup database
    print(f"🔌 Connecting to backup database: {BACKUP_DB_PATH}")
    conn = sqlite3.connect(BACKUP_DB_PATH)
    cursor = conn.cursor()
    
    # Check if image_data column exists
    cursor.execute("PRAGMA table_info(images)")
    columns = [col[1] for col in cursor.fetchall()]
    if 'image_data' not in columns:
        print("❌ Error: image_data column not found in backup database")
        conn.close()
        return
    
    total = len(missing_images)
    saved = 0
    skipped = 0
    not_found = 0
    already_exists = 0
    
    # Open CSV for skipped files (errors, not found, etc.)
    skipped_file = open(SKIPPED_CSV, 'w', newline='', encoding='utf-8')
    skipped_writer = csv.writer(skipped_file)
    skipped_writer.writerow(['emoji_slug_hash', 'emoji_slug', 'filename', 'image_type', 'emoji_slug_only_hash', 'reason'])
    
    # Open CSV for existing files
    existing_file = open(EXISTING_CSV, 'w', newline='', encoding='utf-8')
    existing_writer = csv.writer(existing_file)
    existing_writer.writerow(['emoji_slug_hash', 'emoji_slug', 'filename', 'image_type', 'emoji_slug_only_hash', 'file_path'])
    
    print(f"📦 Extracting {total} missing images to {OUTPUT_DIR}/...\n")
    
    # Process each missing image
    for idx, record in enumerate(missing_images, 1):
        emoji_slug_hash = record['emoji_slug_hash']
        emoji_slug = record['emoji_slug']
        filename = record['filename']
        image_type = record['image_type']
        
        # Progress indicator
        if idx % 1000 == 0:
            print(f"   Progress: {idx}/{total} ({idx*100//total}%) - Saved: {saved}, Skipped: {skipped}, Not Found: {not_found}")
        
        # Query backup database for this image
        # Try by emoji_slug_hash first (most reliable)
        query = """
            SELECT emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash, image_data
            FROM images
            WHERE emoji_slug_hash = ? AND filename = ? AND image_type = ?
        """
        
        cursor.execute(query, (emoji_slug_hash, filename, image_type))
        row = cursor.fetchone()
        
        # If not found by hash, try by emoji_slug + filename + image_type
        if not row:
            query = """
                SELECT emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash, image_data
                FROM images
                WHERE emoji_slug = ? AND filename = ? AND image_type = ?
            """
            cursor.execute(query, (emoji_slug, filename, image_type))
            row = cursor.fetchone()
        
        if not row:
            not_found += 1
            skipped_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, '', 'not_found_in_backup_db'])
            continue
        
        db_emoji_slug_hash, db_emoji_slug, db_filename, db_image_type, db_emoji_slug_only_hash, image_data = row
        
        # Check if image_data is empty
        if not image_data:
            skipped += 1
            skipped_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, db_emoji_slug_only_hash, 'empty_image_data'])
            continue
        
        # Create directory for emoji_slug
        emoji_dir = os.path.join(OUTPUT_DIR, emoji_slug)
        os.makedirs(emoji_dir, exist_ok=True)
        
        # Get correct filename based on actual BLOB format
        output_filename = get_output_filename(filename, image_data)
        
        # Handle nested directories (e.g., apple-emojis/)
        if image_type == 'apple-vendor':
            apple_dir = os.path.join(emoji_dir, 'apple-emojis')
            os.makedirs(apple_dir, exist_ok=True)
            file_path = os.path.join(apple_dir, output_filename)
        else:
            file_path = os.path.join(emoji_dir, output_filename)
        
        # Check if file already exists
        if os.path.exists(file_path):
            already_exists += 1
            existing_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, db_emoji_slug_only_hash, file_path])
            continue
        
        # Write BLOB data to file as-is (original data from DB)
        try:
            with open(file_path, 'wb') as f:
                f.write(image_data)
            saved += 1
        except Exception as e:
            print(f"✗ Failed to save {file_path}: {e}")
            skipped += 1
            skipped_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, db_emoji_slug_only_hash, f'write_error: {str(e)}'])
    
    skipped_file.close()
    existing_file.close()
    conn.close()
    
    print(f"\n✅ Complete!")
    print(f"   Total Missing: {total}")
    print(f"   ✅ Successfully Extracted: {saved}")
    print(f"   ⚠️  Already Existed: {already_exists}")
    print(f"   ❌ Skipped (Errors): {skipped}")
    print(f"   ❌ Not Found in Backup DB: {not_found}")
    print(f"\n   📄 Reports:")
    print(f"      - Skipped/Errors: {SKIPPED_CSV}")
    print(f"      - Already Existed: {EXISTING_CSV}")
    print(f"   📁 Output directory: {OUTPUT_DIR}/")
    
    # Verify totals
    total_processed = saved + already_exists + skipped + not_found
    if total_processed != total:
        print(f"\n   ⚠️  Warning: Total processed ({total_processed}) doesn't match expected ({total})")
    else:
        print(f"\n   ✓ All {total} records processed successfully")


if __name__ == '__main__':
    main()

