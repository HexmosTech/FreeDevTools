#!/usr/bin/env python3
"""
Script to clean clustor.json by removing clusters that don't have corresponding folders.
Reads folder names from a.csv and removes entries from clustor.json that don't exist.
"""

import csv
import json
import os
from pathlib import Path


def read_folder_names(csv_file):
    """Read folder names from CSV file."""
    folder_names = set()

    with open(csv_file, "r", newline="", encoding="utf-8") as file:
        reader = csv.reader(file)
        for row in reader:
            if row and row[0].strip():  # Skip empty rows
                folder_names.add(row[0].strip())

    return folder_names


def clean_cluster_json(cluster_file, folder_names):
    """Remove clusters that don't have corresponding folders."""

    # Read the cluster JSON file
    with open(cluster_file, "r", encoding="utf-8") as file:
        data = json.load(file)

    # Get original count
    original_count = len(data.get("clusters", {}))

    # Filter clusters to only keep those with matching folder names
    clusters = data.get("clusters", {})
    cleaned_clusters = {}

    for cluster_id, cluster_data in clusters.items():
        if cluster_id in folder_names:
            cleaned_clusters[cluster_id] = cluster_data
        else:
            print(f"Removing cluster '{cluster_id}' - no corresponding folder found")

    # Update the data with cleaned clusters
    data["clusters"] = cleaned_clusters

    # Print statistics
    cleaned_count = len(cleaned_clusters)
    removed_count = original_count - cleaned_count

    print(f"\nCleaning Summary:")
    print(f"Original clusters: {original_count}")
    print(f"Removed clusters: {removed_count}")
    print(f"Remaining clusters: {cleaned_count}")

    return data


def main():
    # File paths
    csv_file = "a.csv"
    cluster_file = "src/pages/svg_icons/clustor.json"
    backup_file = "src/pages/svg_icons/clustor.json.backup"

    # Check if files exist
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found!")
        return

    if not os.path.exists(cluster_file):
        print(f"Error: {cluster_file} not found!")
        return

    print("Reading folder names from a.csv...")
    folder_names = read_folder_names(csv_file)
    print(f"Found {len(folder_names)} folder names")

    # Create backup of original file
    print(f"Creating backup: {backup_file}")
    with open(cluster_file, "r", encoding="utf-8") as src:
        with open(backup_file, "w", encoding="utf-8") as dst:
            dst.write(src.read())

    print("Cleaning cluster JSON...")
    cleaned_data = clean_cluster_json(cluster_file, folder_names)

    # Write cleaned data back to file
    print(f"Writing cleaned data to {cluster_file}...")
    with open(cluster_file, "w", encoding="utf-8") as file:
        json.dump(cleaned_data, file, indent=2, ensure_ascii=False)

    print("Cleaning completed successfully!")
    print(f"Backup saved as: {backup_file}")


if __name__ == "__main__":
    main()
