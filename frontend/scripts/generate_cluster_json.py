#!/usr/bin/env python3
"""
Generate cluster JSON entries for SVG icon directories and update unique_cluster.json

Usage:
    python generate_cluster_json.py ~/hex/freedevtools/frontend/public/svg_icons/flag
"""

import argparse
import json
import os
import sys
from pathlib import Path
from typing import Any, Dict, List


def get_svg_files(directory: str) -> List[str]:
    """Get all SVG files from the given directory."""
    svg_files = []
    if os.path.exists(directory):
        for file in os.listdir(directory):
            if file.endswith(".svg"):
                svg_files.append(file)
    return sorted(svg_files)


def generate_keywords(name: str, source_folder: str) -> List[str]:
    """Generate keywords for the cluster entry."""
    keywords = [name, f"free {name} icons", f"free {name} svg", "unique", "exclusive"]

    # Add source-specific keywords
    if source_folder:
        keywords.append(source_folder)

    return keywords


def create_cluster_entry(
    name: str, source_folder: str, file_names: List[str]
) -> Dict[str, Any]:
    """Create a cluster entry for the given data."""
    count = len(file_names)

    return {
        "name": name,
        "source_folder": source_folder,
        "path": f"/freedevtools/unique/{name}",
        "keywords": generate_keywords(name, source_folder),
        "features": ["feature1", "feature2", "feature3"],
        "title": f"Free {name} icons | Online Free DevTools by Hexmos",
        "description": f"count: {count}, topic: {name}, source: {source_folder}",
        "fileNames": file_names,
        "enhanced": False,
    }


def update_unique_cluster_json(
    unique_cluster_path: str, new_entry: Dict[str, Any]
) -> None:
    """Update the unique_cluster.json file with the new entry."""
    # Load existing data
    if os.path.exists(unique_cluster_path):
        with open(unique_cluster_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {}

    # Add or update the entry
    entry_name = new_entry["name"]
    data[entry_name] = new_entry

    # Write back to file
    with open(unique_cluster_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✅ Updated {unique_cluster_path} with entry: {entry_name}")


def main():
    parser = argparse.ArgumentParser(
        description="Generate cluster JSON entries for SVG icon directories"
    )
    parser.add_argument("directory", help="Directory containing SVG files")
    parser.add_argument(
        "--source", help="Source folder name (default: extracted from directory name)"
    )
    parser.add_argument("--name", help="Cluster name (default: directory name)")
    parser.add_argument(
        "--unique-cluster-path",
        default="src/pages/svg_icons/cluster.json",
        help="Path to cluster.json file",
    )

    args = parser.parse_args()

    # Validate directory
    if not os.path.exists(args.directory):
        print(f"❌ Error: Directory '{args.directory}' does not exist")
        sys.exit(1)

    if not os.path.isdir(args.directory):
        print(f"❌ Error: '{args.directory}' is not a directory")
        sys.exit(1)

    # Get directory name and source folder
    dir_path = Path(args.directory)
    cluster_name = args.name or dir_path.name
    source_folder = args.source or dir_path.name

    # Get SVG files
    svg_files = get_svg_files(args.directory)

    if not svg_files:
        print(f"❌ Error: No SVG files found in '{args.directory}'")
        sys.exit(1)

    print(f"📁 Directory: {args.directory}")
    print(f"📝 Cluster name: {cluster_name}")
    print(f"📦 Source folder: {source_folder}")
    print(f"📄 SVG files found: {len(svg_files)}")
    print(f"   {', '.join(svg_files)}")

    # Create cluster entry
    cluster_entry = create_cluster_entry(cluster_name, source_folder, svg_files)

    # Print the generated entry
    print(f"\n📋 Generated cluster entry:")
    print(json.dumps({cluster_name: cluster_entry}, indent=2))

    # Update unique_cluster.json
    unique_cluster_path = args.unique_cluster_path
    if not os.path.isabs(unique_cluster_path):
        # Make path relative to script location
        script_dir = Path(__file__).parent
        unique_cluster_path = script_dir.parent / unique_cluster_path

    try:
        update_unique_cluster_json(str(unique_cluster_path), cluster_entry)
        print(f"\n🎉 Successfully updated cluster JSON!")
    except Exception as e:
        print(f"❌ Error updating unique_cluster.json: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
