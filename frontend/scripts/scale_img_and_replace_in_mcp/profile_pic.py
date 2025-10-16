import json
import os
import re
import time
from io import BytesIO
from multiprocessing import Pool, cpu_count
from urllib.parse import urlparse

import requests
from PIL import Image

# GitHub Personal Access Tokens
GITHUB_TOKENS = []


def process_image_url(image_url, output_dir, github_token):
    """Download, process and save image, return the new URL"""
    try:
        # Extract filename from URL
        parsed_url = urlparse(image_url)
        filename = os.path.basename(parsed_url.path)
        name_without_ext = os.path.splitext(filename)[0]
        output_filename = f"{name_without_ext}.webp"

        # Setup GitHub headers for API requests
        headers = {
            "Authorization": f"token {github_token}",
            "Accept": "application/vnd.github.v3+json",
            "User-Agent": "MCP-Data-Collector",
        }

        # Download image with GitHub token
        response = requests.get(image_url, headers=headers, stream=True, timeout=10)
        response.raise_for_status()

        # Process image
        img = Image.open(BytesIO(response.content))
        img = img.convert("RGB")
        img = img.resize((50, 50), Image.LANCZOS)

        # Save as WebP
        output_path = os.path.join(output_dir, output_filename)
        img.save(output_path, "WEBP", quality=80, method=6, optimize=True)

        # Return new URL
        return f"/freedevtools/mcp/pfp/{name_without_ext}.webp"

    except Exception as e:
        print(f"    ❌ Error processing {image_url}: {str(e)}")
        return image_url  # Return original URL if processing fails


def process_json_file(file_path, output_dir, github_token):
    """Process a single JSON file"""
    print(f"Processing {os.path.basename(file_path)}...")

    try:
        # Read JSON file
        with open(file_path, "r", encoding="utf-8") as f:
            data = json.load(f)

        # Track changes
        changes_made = 0
        unique_urls = set()

        # Find all imageUrl fields in repositories
        if "repositories" in data:
            for repo_id, repo_data in data["repositories"].items():
                if (
                    "imageUrl" in repo_data
                    and repo_data["imageUrl"]
                    and repo_data["imageUrl"].strip()
                    and repo_data["imageUrl"].startswith("https://")
                ):
                    image_url = repo_data["imageUrl"]
                    if image_url not in unique_urls:
                        unique_urls.add(image_url)
                        print(f"  Processing image: {image_url}")

                        # Process the image with GitHub token
                        new_url = process_image_url(image_url, output_dir, github_token)

                        if new_url != image_url:
                            # Update all occurrences of this URL in the repo
                            repo_data["imageUrl"] = new_url
                            changes_made += 1
                            print(f"    ✅ Updated to: {new_url}")

        if changes_made > 0:
            # Write back to file
            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"  ✅ Updated {changes_made} image URLs")
            return changes_made
        else:
            print(f"  ⚠️  No image URLs found to process")
            return 0

    except Exception as e:
        print(f"  ❌ Error processing {file_path}: {str(e)}")
        return None


def process_single_file(args):
    """Wrapper function for multiprocessing"""
    file_path, output_dir, github_token = args
    return process_json_file(file_path, output_dir, github_token)


def main():
    # Setup directories
    input_dir = "/home/lovestaco/hex/FreeDevTools/frontend/public/mcp/input"
    output_dir = "/home/lovestaco/hex/FreeDevTools/frontend/public/mcp/pfp"

    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Find all JSON files
    json_files = [f for f in os.listdir(input_dir) if f.endswith(".json")]
    print(f"Found {len(json_files)} JSON files to process...")

    # Prepare arguments for multiprocessing with token distribution
    file_args = []
    for i, json_file in enumerate(json_files):
        # Distribute tokens across processes
        token_index = i % len(GITHUB_TOKENS)
        github_token = GITHUB_TOKENS[token_index]
        file_args.append((os.path.join(input_dir, json_file), output_dir, github_token))

    # Determine number of processes (use all CPU cores, but cap at number of files)
    num_processes = min(cpu_count(), len(json_files))
    print(f"Using {num_processes} processes to process {len(json_files)} files...")
    print(f"Distributing {len(GITHUB_TOKENS)} GitHub tokens across processes...")

    start_time = time.time()

    # Process files in parallel
    with Pool(processes=num_processes) as pool:
        results = pool.map(process_single_file, file_args)

    end_time = time.time()

    # Count successful processes
    successful = sum(1 for result in results if result is not None)

    print(f"✅ All JSON files processed!")
    print(f"📊 Processed {successful}/{len(json_files)} files successfully")
    print(f"⏱️  Total time: {end_time - start_time:.2f} seconds")
    print(
        f"🚀 Average time per file: {(end_time - start_time) / len(json_files):.2f} seconds"
    )


if __name__ == "__main__":
    main()
