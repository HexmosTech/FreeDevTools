#!/usr/bin/env python3

import json
import os
import sys

import requests

API_KEY = (
    "AIzaSyBMiwN1oFzdPTSpSUcldFsdGFa0NE6FyZc"  # Replace or load from env for security
)
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

HEADERS = {"Content-Type": "application/json", "X-goog-api-key": API_KEY}

OG_IMAGE = "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
TWITTER_IMAGE = (
    "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
)

FRONTMATTER_FILE = "frontmatter.json"


def normalize_yaml_format(yaml_content, platform, command_name):
    """Convert array syntax to proper YAML list format and fix path format"""
    lines = yaml_content.split("\n")
    normalized_lines = []
    canonical_added = False

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Check if this line has array syntax for keywords or features
        if line.startswith("keywords:") and "[" in line:
            # Extract array content
            array_start = line.find("[")
            array_end = line.find("]")
            if array_start != -1 and array_end != -1:
                array_content = line[array_start + 1 : array_end]
                # Split by comma and clean up
                items = [item.strip().strip("'\"") for item in array_content.split(",")]
                normalized_lines.append("keywords:")
                for item in items:
                    if item:  # Skip empty items
                        normalized_lines.append(f"  - {item}")
            else:
                normalized_lines.append(line)
        elif line.startswith("features:") and "[" in line:
            # Extract array content
            array_start = line.find("[")
            array_end = line.find("]")
            if array_start != -1 and array_end != -1:
                array_content = line[array_start + 1 : array_end]
                # Split by comma and clean up
                items = [item.strip().strip("'\"") for item in array_content.split(",")]
                normalized_lines.append("features:")
                for item in items:
                    if item:  # Skip empty items
                        normalized_lines.append(f"  - {item}")
            else:
                normalized_lines.append(line)
        elif line.startswith("path:"):
            # Fix path format to include /freedevtools/tldr/ prefix
            path_value = line.split(":", 1)[1].strip().strip("\"'")
            if not path_value.startswith("/freedevtools/tldr/"):
                if path_value.startswith("/"):
                    path_value = path_value[1:]  # Remove leading slash
                if not path_value.startswith("freedevtools/tldr/"):
                    path_value = f"freedevtools/tldr/{path_value}"
                normalized_lines.append(f'path: "/{path_value}"')
            else:
                normalized_lines.append(line)
            # Add canonical after path
            if not canonical_added:
                canonical_url = (
                    f"https://hexmos.com/freedevtools/tldr/{platform}/{command_name}/"
                )
                normalized_lines.append(f'canonical: "{canonical_url}"')
                canonical_added = True
        elif line.startswith("canonical:"):
            # Skip any existing canonical lines from AI
            pass
        else:
            normalized_lines.append(line)
        i += 1

    # If canonical wasn't added yet, add it at the end
    if not canonical_added:
        canonical_url = (
            f"https://hexmos.com/freedevtools/tldr/{platform}/{command_name}/"
        )
        normalized_lines.append(f'canonical: "{canonical_url}"')

    return "\n".join(normalized_lines)


def find_markdown_files(root_dir):
    md_files = []
    for dirpath, _, filenames in os.walk(root_dir):
        for filename in filenames:
            if filename.endswith(".md"):
                md_files.append(os.path.join(dirpath, filename))
    return md_files


def send_to_gemini(md_content, platform, command_name):
    prompt = f"""Generate frontmatter metadata in YAML format for the following markdown content:

Platform: {platform}
Command: {command_name}

{md_content}

Requirements:
- Include: title, name, path, description, category, keywords, features
- Use proper YAML list format with dashes (-) for keywords and features, NOT array syntax
- Generate 10 meaningful, descriptive keywords (not single words, but descriptive phrases)
- Generate 5 specific features that describe what the command can do
- Keywords should be descriptive phrases like "file management", "system administration", "network operations"
- Features should be specific capabilities like "create directories", "manage processes", "configure network"
- Use lowercase for category (use the platform name as category)
- Path should be in the format "/freedevtools/tldr/{platform}/{command_name}"
- Do NOT include canonical field - it will be added automatically
- Return ONLY the YAML content without any code block markers (no ```yaml or ```)

Example format:
title: {command_name}
name: {command_name}
path: /freedevtools/tldr/{platform}/{command_name}
description: Brief description of the command.
category: {platform}
keywords:
  - descriptive keyword phrase 1
  - descriptive keyword phrase 2
  - descriptive keyword phrase 3
  - descriptive keyword phrase 4
  - descriptive keyword phrase 5
  - descriptive keyword phrase 6
  - descriptive keyword phrase 7
  - descriptive keyword phrase 8
  - descriptive keyword phrase 9
  - descriptive keyword phrase 10
features:
  - specific capability 1
  - specific capability 2
  - specific capability 3
  - specific capability 4
  - specific capability 5"""

    data = {"contents": [{"parts": [{"text": prompt}]}]}
    response = requests.post(API_URL, headers=HEADERS, json=data)
    if response.status_code == 200:
        try:
            result = response.json()
            generated_text = result["candidates"][0]["content"]["parts"][0]["text"]
            # Strip any code block markers that might be present
            generated_text = generated_text.strip()
            if generated_text.startswith("```yaml"):
                generated_text = generated_text[7:]  # Remove ```yaml
            if generated_text.startswith("```"):
                generated_text = generated_text[3:]  # Remove ```
            if generated_text.endswith("```"):
                generated_text = generated_text[:-3]  # Remove trailing ```

            # Post-process to ensure consistent YAML formatting
            generated_text = normalize_yaml_format(
                generated_text, platform, command_name
            )
            return generated_text.strip()
        except Exception as e:
            print("Failed to parse Gemini response:", e)
            return None
    else:
        print(f"Error from Gemini API: {response.status_code} {response.text}")
        return None


def update_markdown_file(file_path, frontmatter_yaml):
    try:
        with open(file_path, "r") as f:
            content = f.read()

        if content.startswith("---"):
            parts = content.split("---", 2)
            if len(parts) >= 3:
                content = parts[2].lstrip()

        new_content = f'---\n{frontmatter_yaml.strip()}\nogImage: "{OG_IMAGE}"\ntwitterImage: "{TWITTER_IMAGE}"\n---\n\n{content}'

        with open(file_path, "w") as f:
            f.write(new_content)
    except Exception as e:
        print(f"Error updating file {file_path}: {e}")


def load_frontmatter():
    if os.path.exists(FRONTMATTER_FILE):
        with open(FRONTMATTER_FILE, "r") as f:
            try:
                return json.load(f)
            except json.JSONDecodeError:
                print("Warning: frontmatter.json is corrupted. Starting fresh.")
                return []
    return []


def save_frontmatter(data):
    with open(FRONTMATTER_FILE, "w") as f:
        json.dump(data, f, indent=2)


def already_processed(entries, name, path):
    for entry in entries:
        if entry.get("name") == name or entry.get("path") == path:
            return True
    return False


def update_frontmatter_json(entries, name, path):
    entries.append({"name": name, "path": path})
    save_frontmatter(entries)


def process_file(md_file, base_path, entries):
    try:
        with open(md_file, "r") as f:
            content = f.read()

        name = os.path.splitext(os.path.basename(md_file))[0]
        path = md_file.replace(base_path, "").replace("\\", "/")
        if not path.startswith("/"):
            path = "/" + path
        path = path.replace(".md", "/")

        # Extract platform from the file path
        # Platform is the parent directory of the markdown file
        relative_path = md_file.replace(base_path, "").replace("\\", "/").strip("/")
        path_parts = relative_path.split("/")

        # Find the platform directory (should be the directory containing the .md file)
        platform = "unknown"
        for i, part in enumerate(path_parts):
            if part.endswith(".md"):
                # The platform is the directory before the .md file
                if i > 0:
                    platform = path_parts[i - 1]
                break

        print(f"Debug: File: {md_file}")
        print(f"Debug: Relative path: {relative_path}")
        print(f"Debug: Path parts: {path_parts}")
        print(f"Debug: Extracted platform: {platform}")

        if already_processed(entries, name, path):
            print(f"Skipping {md_file}, already processed.")
            return

        frontmatter_yaml = send_to_gemini(content, platform, name)
        if frontmatter_yaml:
            update_markdown_file(md_file, frontmatter_yaml)
            update_frontmatter_json(entries, name, path)
            print(f"Processed {md_file} (platform: {platform})")
        else:
            print(f"Skipped {md_file}, no frontmatter returned.")
    except Exception as e:
        print(f"Error processing {md_file}: {e}")


def main():
    if len(sys.argv) != 2:
        print("Usage: generate_frontmatter.py <root_directory>")
        sys.exit(1)

    root_dir = sys.argv[1]
    md_files = find_markdown_files(root_dir)
    entries = load_frontmatter()

    for md_file in md_files:
        process_file(md_file, root_dir, entries)


if __name__ == "__main__":
    main()
