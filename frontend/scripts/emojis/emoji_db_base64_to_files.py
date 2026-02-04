# "emoji_slug_hash","emoji_slug","filename","image_data","image_type","emoji_slug_only_hash"
# -8701825647730442309,bathtub,bathtub_1f6c1_iOS_14.2.png,�PNG\r\n\u001a\n\u0000\u0000\u0000,apple-vendor	-9073214068710696743
# -9173903632059215886,sailboat,sailboat_26f5_iOS_10.3.png,�PNG\r\n\u001a\n\u0000\u0000\u000,apple-vendor	8268262284332994984
# -8900483916623744536,man-medium-dark-skin-tone,man_flat_medium-dark.svg,RIFF�\u0004\u0000\,ms-fluentui	-230908654815227998
# -8875838519457411037,hiking-boot,hiking_boot_high_contrast.svg,RIFF�\u0002\u0000\u0000WEBP,ms-fluentui	-7438226247131457988
# -8755662170034898937,pick,pick_high_contrast.svg,RIFF�\u0003\u0000\u0000WEBPVP8X\n\u0000\u,ms-fluentui	-8294719651868732937
# -8828237244920590545,tamale,tamale_high_contrast.svg,RIFF�\u0006\u0000\u0000WEBPVP8X\n\u00,ms-fluentui	-799477476499561273
# -8720338911740082995,family-woman-woman-girl-girl,woman_high_contrast_default.svg,RIFF�\u0,ms-fluentui	8298266619546324781
# -8801758075916974299,woman-walking-medium-light-skin-tone,person_walking_flat_light.svg,RI,ms-fluentui	8215073893859040731
# -9173884794909500114,man-firefighter,man_firefighter_high_contrast_default.svg,RIFFB\u0006,ms-fluentui	-3907135944810088627

#!/usr/bin/env python3
"""
Extract image data from emoji database and save to public/emojis/
Logs skipped files to skipped.csv with hash information
Extracts BLOB data as-is (WebP for converted SVGs, PNG for PNGs)
"""
import sqlite3
import os
import csv

# Database and output paths
DB_PATH = 'db/all_dbs/emoji-db-v4.db'
OUTPUT_DIR = 'public/emojis'
SKIPPED_CSV = 'skipped.csv'


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

def main():
    # Create output directory if it doesn't exist
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    # Connect to database
    # Set text_factory to bytes to handle BLOB columns correctly
    conn = sqlite3.connect(DB_PATH)
    # Keep default text_factory for text columns, but BLOBs will be bytes
    cursor = conn.cursor()
    
    # Query all images with hash columns
    query = "SELECT emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash, image_data FROM images"
    cursor.execute(query)
    
    total = 0
    saved = 0
    skipped = 0
    
    # Open CSV for skipped files
    skipped_file = open(SKIPPED_CSV, 'w', newline='')
    csv_writer = csv.writer(skipped_file)
    
    # Write CSV header in exact format: emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash
    csv_writer.writerow(['emoji_slug_hash', 'emoji_slug', 'filename', 'image_type', 'emoji_slug_only_hash'])
    
    print(f"📦 Extracting images from database to {OUTPUT_DIR}/...\n")
    
    for row in cursor:
        total += 1
        emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash, image_data = row
        
        # Check if image_data is empty
        if not image_data:
            skipped += 1
            csv_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash])
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
        
        # Write BLOB data to file as-is (original data from DB)
        try:
            with open(file_path, 'wb') as f:
                f.write(image_data)
            saved += 1
        except Exception as e:
            print(f"✗ Failed to save {file_path}: {e}")
            skipped += 1
            csv_writer.writerow([emoji_slug_hash, emoji_slug, filename, image_type, emoji_slug_only_hash])
        
    skipped_file.close()
    conn.close()
    
    print(f"\n✅ Complete!")
    print(f"   Total: {total}")
    print(f"   Saved: {saved}")
    print(f"   Skipped: {skipped}")
    print(f"   Skipped log: {SKIPPED_CSV}")

if __name__ == '__main__':
    main()
