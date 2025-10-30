#!/usr/bin/env python3
"""
SVG to Base64 Converter
Converts SVG files to base64 encoded strings and stores them in a JSON file.
"""

import base64
import io
import json
import os
import shutil
import xml.etree.ElementTree as ET
from concurrent.futures import ProcessPoolExecutor, as_completed
from multiprocessing import Pool, cpu_count
from pathlib import Path

# Import build_sqlite_from_json to call it after processing
import build_sqlite_from_json
import cairosvg
from PIL import Image


def svg_to_base64(svg_path):
    """
    Convert SVG file to high-quality WebP and then to base64 encoded string.
    Uses cairosvg with high DPI (600) for maximum quality rendering.

    Args:
        svg_path (str): Path to the SVG file

    Returns:
        str: Base64 encoded string of the WebP
    """
    try:
        # Always render at 80x80 for consistent high quality output
        # This matches the test script behavior
        final_width = 80
        final_height = 80

        # Render SVG to PNG with very high DPI for maximum quality
        png_bytes = cairosvg.svg2png(
            url=str(svg_path),
            output_width=final_width,
            output_height=final_height,
            dpi=600,
        )

        # Open with PIL and convert to WebP
        img = Image.open(io.BytesIO(png_bytes))

        # Preserve transparency - convert to RGBA if needed (WebP supports RGBA with transparency)
        if img.mode != "RGBA":
            img = img.convert("RGBA")

        # Save to bytes as WebP with high quality
        img_bytes = io.BytesIO()
        img.save(img_bytes, format="WebP", quality=80, method=6)
        img_bytes.seek(0)

        # Convert to base64
        base64_string = base64.b64encode(img_bytes.getvalue()).decode("utf-8")
        return base64_string

    except Exception as e:
        print(f"Error converting {svg_path}: {e}")
        return None


def process_single_svg(svg_file):
    """
    Process a single SVG file and return base64 encoded data.

    Args:
        svg_file (Path): Path to the SVG file

    Returns:
        tuple: (filename, base64_string) or (filename, None) if failed
    """
    try:
        base64_string = svg_to_base64(svg_file)
        return svg_file.name, base64_string
    except Exception as e:
        print(f"Error processing {svg_file.name}: {e}")
        return svg_file.name, None


def process_svg_directory(svg_dir):
    """
    Process SVG files in a directory and return base64 encoded data.
    Uses parallel processing for faster conversion.
    Processes all SVG files in the directory.

    Args:
        svg_dir (str): Path to directory containing SVG files

    Returns:
        list: List of base64 encoded WebP strings
    """
    svg_path = Path(svg_dir)

    if not svg_path.exists():
        print(f"Directory {svg_dir} does not exist")
        return []

    # Find all SVG files in the directory
    svg_files = list(svg_path.glob("*.svg"))

    if not svg_files:
        print(f"No SVG files found in {svg_dir}")
        return []

    print(f"Processing {len(svg_files)} SVG files")

    # Use parallel processing
    base64_data = []
    max_workers = min(7, cpu_count())  # Use 7 threads or available CPUs

    with ProcessPoolExecutor(max_workers=max_workers) as executor:
        # Submit all tasks
        future_to_file = {
            executor.submit(process_single_svg, svg_file): svg_file
            for svg_file in svg_files
        }

        # Collect results as they complete
        for future in as_completed(future_to_file):
            svg_file = future_to_file[future]
            try:
                filename, base64_string = future.result()
                if base64_string:
                    base64_data.append({"filename": filename, "base64": base64_string})
                    print(f"✓ Processed: {filename}")
                else:
                    print(f"✗ Failed: {filename}")
            except Exception as e:
                print(f"✗ Error processing {svg_file.name}: {e}")

    return base64_data


def main():
    """
    Main function to process SVG directories and generate multiple JSON files.
    Uses parallel processing for faster execution.
    """
    # Base directory containing SVG icon folders
    base_dir = Path("../../public/svg_icons")
    output_dir = Path("base64_svg_icons")

    if not base_dir.exists():
        print(f"Base directory {base_dir} does not exist")
        return

    # Create output directory if it doesn't exist
    output_dir.mkdir(exist_ok=True)
    print(f"Output directory: {output_dir}")
    print(f"Using {min(7, cpu_count())} CPU threads for parallel processing")

    processed_clusters = 0
    total_clusters = len([d for d in base_dir.iterdir() if d.is_dir()])

    print(f"Found {total_clusters} clusters to process")

    # Process each subdirectory in svg_icons
    for i, cluster_dir in enumerate(base_dir.iterdir(), 1):
        if cluster_dir.is_dir():
            cluster_name = cluster_dir.name
            print(f"\n[{i}/{total_clusters}] Processing cluster: {cluster_name}")

            # Get base64 data for all SVG files in this cluster
            base64_data = process_svg_directory(cluster_dir)

            if base64_data:
                # Create JSON data for this cluster
                cluster_data = {"icons": base64_data}

                # Write individual JSON file for this cluster
                output_file = output_dir / f"{cluster_name}.json"
                try:
                    with open(output_file, "w", encoding="utf-8") as f:
                        json.dump(cluster_data, f, indent=2, ensure_ascii=False)
                    print(f"✓ Created {output_file} with {len(base64_data)} images")
                    processed_clusters += 1
                except Exception as e:
                    print(f"✗ Error writing {output_file}: {e}")
            else:
                print(f"✗ No valid SVG files found in cluster '{cluster_name}'")

    print(f"\n🎉 Successfully processed {processed_clusters}/{total_clusters} clusters")
    print(f"📁 JSON files created in: {output_dir}")

    # Build SQLite database from JSON files
    print(f"\n🔨 Building SQLite database from JSON files...")
    try:
        build_sqlite_from_json.main()
        # Delete base64_svg_icons directory after successful database build
        if output_dir.exists():
            print(f"\n🗑️  Deleting {output_dir} directory...")
            shutil.rmtree(output_dir)
            print(f"✓ Deleted {output_dir}")
    except Exception as e:
        print(f"✗ Error building SQLite database: {e}")


if __name__ == "__main__":
    main()
