#!/usr/bin/env python3
"""
Generate cluster JSON entries for SVG icon directories and update cluster.json
Automatically detects missing clusters and processes them.

Usage:
    python generate_cluster_json.py [--specific-cluster CLUSTER_NAME]
"""

import argparse
import json
import os
import sys
from pathlib import Path
from typing import Any, Dict, List, Set


def get_svg_files(directory: str) -> List[str]:
    """Get all SVG files from the given directory."""
    svg_files = []
    if os.path.exists(directory):
        for file in os.listdir(directory):
            if file.endswith(".svg"):
                svg_files.append(file)
    return sorted(svg_files)


def get_existing_clusters(cluster_json_path: str) -> Set[str]:
    """Get existing cluster names from cluster.json."""
    if not os.path.exists(cluster_json_path):
        return set()

    try:
        with open(cluster_json_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # Handle both old format (list) and new format (dict)
        if isinstance(data, list):
            return {cluster.get("name", "") for cluster in data if cluster.get("name")}
        elif isinstance(data, dict) and "clusters" in data:
            return set(data["clusters"].keys())
        else:
            return set(data.keys())
    except (json.JSONDecodeError, KeyError) as e:
        print(f"⚠️  Warning: Could not parse cluster.json: {e}")
        return set()


def get_available_clusters(svg_icons_dir: str) -> List[str]:
    """Get all available cluster directories from svg_icons folder."""
    clusters = []
    if os.path.exists(svg_icons_dir):
        for item in os.listdir(svg_icons_dir):
            item_path = os.path.join(svg_icons_dir, item)
            if os.path.isdir(item_path):
                # Check if directory has SVG files
                svg_files = get_svg_files(item_path)
                if svg_files:
                    clusters.append(item)
    return sorted(clusters)


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


def update_cluster_json(cluster_json_path: str, new_entry: Dict[str, Any]) -> None:
    """Update the cluster.json file with the new entry."""
    # Load existing data
    if os.path.exists(cluster_json_path):
        with open(cluster_json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
    else:
        data = {"clusters": {}}

    # Ensure clusters key exists
    if "clusters" not in data:
        data["clusters"] = {}

    # Add or update the entry
    entry_name = new_entry["name"]
    data["clusters"][entry_name] = new_entry

    # Write back to file
    with open(cluster_json_path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"✅ Updated {cluster_json_path} with entry: {entry_name}")


def process_cluster(
    cluster_name: str, svg_icons_dir: str, cluster_json_path: str
) -> bool:
    """Process a single cluster and update cluster.json."""
    cluster_dir = os.path.join(svg_icons_dir, cluster_name)

    if not os.path.exists(cluster_dir):
        print(f"❌ Error: Cluster directory '{cluster_dir}' does not exist")
        return False

    if not os.path.isdir(cluster_dir):
        print(f"❌ Error: '{cluster_dir}' is not a directory")
        return False

    # Get SVG files
    svg_files = get_svg_files(cluster_dir)

    if not svg_files:
        print(f"❌ Error: No SVG files found in '{cluster_dir}'")
        return False

    print(f"📁 Processing cluster: {cluster_name}")
    print(f"📄 SVG files found: {len(svg_files)}")

    # Create cluster entry
    cluster_entry = create_cluster_entry(cluster_name, cluster_name, svg_files)

    # Update cluster.json
    try:
        update_cluster_json(cluster_json_path, cluster_entry)
        return True
    except Exception as e:
        print(f"❌ Error updating cluster.json: {e}")
        return False


def main():
    parser = argparse.ArgumentParser(
        description="Generate cluster JSON entries for SVG icon directories. Automatically detects missing clusters."
    )
    parser.add_argument(
        "--specific-cluster", help="Process only a specific cluster name (optional)"
    )
    parser.add_argument(
        "--cluster-json-path",
        default="src/pages/svg_icons/cluster.json",
        help="Path to cluster.json file",
    )

    args = parser.parse_args()

    # Hardcoded paths
    svg_icons_dir = os.path.expanduser("~/hex/freedevtools/frontend/public/svg_icons")
    cluster_json_path = args.cluster_json_path

    # Make cluster_json_path absolute if relative
    if not os.path.isabs(cluster_json_path):
        script_dir = Path(__file__).parent
        cluster_json_path = str(script_dir.parent / cluster_json_path)

    print(f"🔍 Scanning for missing clusters...")
    print(f"📁 SVG Icons Directory: {svg_icons_dir}")
    print(f"📄 Cluster JSON Path: {cluster_json_path}")

    # Validate directories
    if not os.path.exists(svg_icons_dir):
        print(f"❌ Error: SVG icons directory '{svg_icons_dir}' does not exist")
        sys.exit(1)

    if not os.path.isdir(svg_icons_dir):
        print(f"❌ Error: '{svg_icons_dir}' is not a directory")
        sys.exit(1)

    # Get available clusters and existing clusters
    available_clusters = get_available_clusters(svg_icons_dir)
    existing_clusters = get_existing_clusters(cluster_json_path)

    print(f"\n📊 Analysis Results:")
    print(f"   Available clusters: {len(available_clusters)}")
    print(f"   Existing clusters: {len(existing_clusters)}")

    # Determine which clusters to process
    if args.specific_cluster:
        if args.specific_cluster not in available_clusters:
            print(
                f"❌ Error: Cluster '{args.specific_cluster}' not found in available clusters"
            )
            print(f"Available clusters: {', '.join(available_clusters)}")
            sys.exit(1)
        clusters_to_process = [args.specific_cluster]
    else:
        missing_clusters = [c for c in available_clusters if c not in existing_clusters]
        clusters_to_process = missing_clusters

    if not clusters_to_process:
        print(f"✅ All clusters are already processed! No missing clusters found.")
        return

    print(
        f"\n🔄 Processing {len(clusters_to_process)} cluster(s): {', '.join(clusters_to_process)}"
    )

    # Process each cluster
    success_count = 0
    for cluster_name in clusters_to_process:
        print(f"\n{'='*50}")
        if process_cluster(cluster_name, svg_icons_dir, cluster_json_path):
            success_count += 1
        else:
            print(f"❌ Failed to process cluster: {cluster_name}")

    print(f"\n{'='*50}")
    print(f"🎉 Processing complete!")
    print(
        f"✅ Successfully processed: {success_count}/{len(clusters_to_process)} clusters"
    )

    if success_count < len(clusters_to_process):
        print(
            f"❌ Failed to process: {len(clusters_to_process) - success_count} clusters"
        )
        sys.exit(1)


if __name__ == "__main__":
    main()
