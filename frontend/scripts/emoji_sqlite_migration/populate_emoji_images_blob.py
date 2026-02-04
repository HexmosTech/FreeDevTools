#!/usr/bin/env python3
"""
populate_images_blob.py

Same as populate_images.py but stores image bytes directly as BLOBs
instead of Base64 strings — typically saves 25–40% disk space.
"""

import io
import sqlite3
from concurrent.futures import ProcessPoolExecutor, as_completed
from multiprocessing import cpu_count
from pathlib import Path

import cairosvg
from PIL import Image

DB_PATH = "emoji_blob.db"
DATA_DIR = Path("/home/rtp/Projects/FreeDevTools/frontend/public/emoji_data")

# ---------- Conversion Helpers ----------

def convert_svg_to_blob(svg_path: Path) -> bytes | None:
    """Convert SVG → WebP and return bytes."""
    try:
        png_bytes = cairosvg.svg2png(
            url=str(svg_path),
            output_width=80,
            output_height=80,
            dpi=600,
        )
        img = Image.open(io.BytesIO(png_bytes)).convert("RGBA")
        buf = io.BytesIO()
        img.save(buf, format="WebP", quality=80, method=6)
        return buf.getvalue()
    except Exception as e:
        print(f"✗ SVG conversion failed for {svg_path}: {e}")
        return None


def read_png_as_blob(png_path: Path) -> bytes | None:
    """Read PNG as raw bytes."""
    try:
        with open(png_path, "rb") as f:
            return f.read()
    except Exception as e:
        print(f"✗ PNG read failed for {png_path}: {e}")
        return None


def process_image(file_path: Path):
    """Process a single image file (SVG or PNG)."""
    if file_path.suffix.lower() == ".svg":
        data = convert_svg_to_blob(file_path)
    elif file_path.suffix.lower() == ".png":
        data = read_png_as_blob(file_path)
    else:
        return None

    if not data:
        return None

    # Determine emoji slug (handle nested apple-emojis/)
    if "apple-emojis" in file_path.parts:
        emoji_slug = file_path.parents[1].name
    else:
        emoji_slug = file_path.parent.name

    return emoji_slug, file_path.name, data


# ---------- Folder Processor ----------

def process_folder(folder: Path):
    """Process one emoji folder (and nested subfolders like apple_emojis/)."""
    image_files = list(folder.rglob("*.png")) + list(folder.rglob("*.svg"))
    if not image_files:
        return []

    processed_records = []
    with ProcessPoolExecutor(max_workers=min(3, cpu_count())) as executor:
        futures = {executor.submit(process_image, f): f for f in image_files}
        for future in as_completed(futures):
            result = future.result()
            if result:
                processed_records.append(result)

    print(f"✓ {folder.name}: {len(processed_records)} images processed.")
    return processed_records


# ---------- Database Insert ----------

def create_table():
    """Create the images table for BLOB storage."""
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS images (
            emoji_slug TEXT,
            filename TEXT,
            image_data BLOB,
            PRIMARY KEY (emoji_slug, filename)
        )
    """)
    conn.commit()
    conn.close()


def insert_images_to_db(records):
    """Bulk insert BLOB records."""
    if not records:
        return 0

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.executemany(
        "INSERT OR REPLACE INTO images (emoji_slug, filename, image_data) VALUES (?, ?, ?)",
        records,
    )
    conn.commit()
    conn.close()
    return len(records)


# ---------- Main ----------

def main():
    if not DATA_DIR.exists():
        print(f"❌ Directory not found: {DATA_DIR}")
        return

    create_table()

    folders = [f for f in DATA_DIR.iterdir() if f.is_dir()]
    print(f"📁 Found {len(folders)} folders. Starting parallel processing...")

    total_records = []
    max_outer_workers = min(8, cpu_count())

    with ProcessPoolExecutor(max_workers=max_outer_workers) as folder_executor:
        folder_futures = {folder_executor.submit(process_folder, f): f for f in folders}
        for future in as_completed(folder_futures):
            result = future.result()
            if result:
                total_records.extend(result)

    print(f"\n🧩 Inserting {len(total_records)} images into database...")
    inserted = insert_images_to_db(total_records)
    print(f"✅ Done. Inserted {inserted} images total into {DB_PATH}")


if __name__ == "__main__":
    main()
