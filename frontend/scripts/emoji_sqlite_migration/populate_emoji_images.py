#!/usr/bin/env python3
"""
populate_images.py

Highly parallelized version.
Scans emoji_data/ folder for image files (.svg, .png),
converts them (SVG → WebP → Base64, PNG → Base64),
and inserts all into emoji.db efficiently.
"""

import base64
import io
import sqlite3
from concurrent.futures import ProcessPoolExecutor, as_completed
from multiprocessing import cpu_count
from pathlib import Path

import cairosvg
from PIL import Image

DB_PATH = "emoji.db"
DATA_DIR = Path("/home/rtp/Projects/FreeDevTools/frontend/public/emoji_data")

# ---------- Conversion Helpers ----------

def convert_svg_to_base64(svg_path: Path) -> str | None:
    """Convert SVG → WebP → Base64."""
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
        buf.seek(0)
        return base64.b64encode(buf.getvalue()).decode("utf-8")
    except Exception as e:
        print(f"✗ SVG conversion failed for {svg_path}: {e}")
        return None


def convert_png_to_base64(png_path: Path) -> str | None:
    """Convert PNG → Base64."""
    try:
        with open(png_path, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")
    except Exception as e:
        print(f"✗ PNG read failed for {png_path}: {e}")
        return None


def process_image(file_path: Path):
    """Process a single image file (SVG or PNG)."""
    if file_path.suffix.lower() == ".svg":
        b64 = convert_svg_to_base64(file_path)
    elif file_path.suffix.lower() == ".png":
        b64 = convert_png_to_base64(file_path)
    else:
        return None

    if not b64:
        return None

    emoji_slug = file_path.parent.name
    if "apple-emojis" in file_path.parts:
        emoji_slug = file_path.parents[1].name
    else:
        emoji_slug = file_path.parent.name
    return emoji_slug, file_path.name, b64


# ---------- Folder Processor ----------

def process_folder(folder: Path):
    """Process one emoji folder (and nested subfolders like apple_emojis/)."""
    image_files = list(folder.rglob("*.png")) + list(folder.rglob("*.svg"))
    if not image_files:
        return []

    processed_records = []
    # Small pool per folder
    with ProcessPoolExecutor(max_workers=min(3, cpu_count())) as executor:
        futures = {executor.submit(process_image, f): f for f in image_files}
        for future in as_completed(futures):
            result = future.result()
            if result:
                processed_records.append(result)

    print(f"✓ {folder.name}: {len(processed_records)} images processed.")
    return processed_records


# ---------- Database Insert ----------

def insert_images_to_db(records):
    """Bulk insert all processed records."""
    if not records:
        return 0

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.executemany(
        """
        INSERT OR REPLACE INTO images (emoji_slug, filename, base64_data)
        VALUES (?, ?, ?)
        """,
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

    folders = [f for f in DATA_DIR.iterdir() if f.is_dir()]
    print(f"📁 Found {len(folders)} folders. Starting parallel processing...")

    total_records = []
    max_outer_workers = min(8, cpu_count())  # tune: 6–8 for best balance

    # Process multiple folders concurrently
    with ProcessPoolExecutor(max_workers=max_outer_workers) as folder_executor:
        folder_futures = {folder_executor.submit(process_folder, f): f for f in folders}
        for future in as_completed(folder_futures):
            result = future.result()
            if result:
                total_records.extend(result)

    print(f"\n🧩 Inserting {len(total_records)} images into database...")
    inserted = insert_images_to_db(total_records)
    print(f"✅ Done. Inserted {inserted} images total.")


if __name__ == "__main__":
    main()
