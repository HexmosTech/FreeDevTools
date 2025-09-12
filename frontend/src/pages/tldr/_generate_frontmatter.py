#!/usr/bin/env python3

import json
import os
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests

API_KEYS = []
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

OG_IMAGE = "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
TWITTER_IMAGE = (
    "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
)

FRONTMATTER_FILE = "frontmatter.json"


def validate_seo_compliance(yaml_content, platform, command_name):
    """Validate SEO compliance and return issues"""
    issues = []
    lines = yaml_content.split("\n")

    for line in lines:
        line = line.strip()

        # Check title length and format
        if line.startswith("title:"):
            title = line.split(":", 1)[1].strip().strip("\"'")
            if len(title) < 50 or len(title) > 60:
                issues.append(f"Title length {len(title)} chars (should be 50-60)")
            if not title.endswith("| Free DevTools"):
                issues.append("Title missing brand suffix '| Free DevTools'")
            if not any(
                word in title.lower()
                for word in [
                    "control",
                    "generate",
                    "format",
                    "validate",
                    "create",
                    "manage",
                    "convert",
                ]
            ):
                issues.append("Title missing action word")

        # Check description length and format
        elif line.startswith("description:"):
            desc = line.split(":", 1)[1].strip().strip("\"'")
            if len(desc) < 140 or len(desc) > 160:
                issues.append(
                    f"Description length {len(desc)} chars (should be 140-160)"
                )
            if not any(
                phrase in desc.lower()
                for phrase in [
                    "free online tool",
                    "no registration",
                    "instantly",
                    "easily",
                ]
            ):
                issues.append("Description missing call-to-action")

    return issues


def enhance_seo_keywords(keywords, platform, command_name):
    """Enhance keywords based on platform and command"""
    enhanced = []

    # Platform-specific keyword mapping
    platform_keywords = {
        "android": ["adb", "android development", "mobile debugging"],
        "linux": ["linux command", "unix", "terminal", "bash"],
        "macos": ["macos command", "osx", "terminal", "zsh"],
        "windows": ["windows command", "powershell", "cmd", "dos"],
        "freebsd": ["freebsd command", "bsd", "unix"],
        "ubuntu": ["ubuntu command", "debian", "apt"],
        "centos": ["centos command", "rhel", "yum"],
        "fedora": ["fedora command", "dnf", "rpm"],
        "arch": ["arch command", "pacman", "aur"],
        "alpine": ["alpine command", "apk", "musl"],
    }

    # Command-specific keyword mapping
    command_keywords = {
        "am": ["activity manager", "android activities", "intent management"],
        "base64": ["base64 encoding", "data encoding", "text encoding"],
        "grep": ["text search", "pattern matching", "file search"],
        "find": ["file search", "directory search", "file location"],
        "ls": ["directory listing", "file listing", "directory contents"],
        "ps": ["process management", "running processes", "system processes"],
        "top": ["system monitoring", "process monitoring", "resource usage"],
        "kill": ["process termination", "kill process", "stop process"],
        "chmod": ["file permissions", "permission management", "access control"],
        "chown": ["file ownership", "ownership management", "user management"],
    }

    # Add platform-specific keywords
    if platform in platform_keywords:
        enhanced.extend(platform_keywords[platform])

    # Add command-specific keywords
    if command_name in command_keywords:
        enhanced.extend(command_keywords[command_name])

    # Add existing keywords
    enhanced.extend(keywords)

    # Remove duplicates and limit to 10
    return list(dict.fromkeys(enhanced))[:10]


def normalize_yaml_format(yaml_content, platform, command_name):
    """Convert array syntax to proper YAML list format and fix path format"""
    lines = yaml_content.split("\n")
    normalized_lines = []
    canonical_added = False
    keywords_section = False
    current_keywords = []

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
                        current_keywords.append(item)
                        normalized_lines.append(f"  - {item}")
            else:
                normalized_lines.append(line)
                keywords_section = True
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
        elif keywords_section and line.startswith("- "):
            # Collect keywords for enhancement
            current_keywords.append(line[2:].strip())
            normalized_lines.append(line)
        elif keywords_section and not line.startswith("- ") and line:
            # End of keywords section, enhance them
            if current_keywords:
                enhanced_keywords = enhance_seo_keywords(
                    current_keywords, platform, command_name
                )
                # Replace the keywords section
                normalized_lines = [
                    l for l in normalized_lines if not l.startswith("  - ")
                ]
                # Remove the keywords: line
                normalized_lines = [
                    l for l in normalized_lines if not l.startswith("keywords:")
                ]
                # Add enhanced keywords
                normalized_lines.append("keywords:")
                for keyword in enhanced_keywords:
                    normalized_lines.append(f"  - {keyword}")
                keywords_section = False
            normalized_lines.append(line)
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


def send_to_gemini(md_content, platform, command_name, api_key):
    prompt = f"""Generate SEO-optimized frontmatter metadata in YAML format for the following markdown content:

Platform: {platform}
Command: {command_name}

{md_content}

SEO Requirements (CRITICAL):
- Include: title, name, path, description, category, keywords, features
- Use proper YAML list format with dashes (-) for keywords and features, NOT array syntax

TITLE Requirements:
- Format: "[Tool Name] - [Primary Function] | Free DevTools"
- Length: 50-60 characters
- Primary keyword in first 3 words
- Use action words like "Control", "Generate", "Format", "Validate", "Create"
- Include brand "Free DevTools" at the end

DESCRIPTION Requirements:
- Format: "[Primary keyword action] with [Tool Name]"
- Length: 140-160 characters
- Contains primary keyword
- Contains 1 secondary keyword
- Has clear call-to-action like "Free online tool, no registration required"

KEYWORDS Requirements:
- Generate 10 SEO-friendly keywords following formula: [Data/Format Type] + [Action/Tool Type]
- Primary keyword should be the main search term users type
- Include platform-specific keywords (e.g., "adb", "android", "linux", "macos")
- Include tool-specific keywords (e.g., "activity manager", "file converter", "password generator")
- No generic words like "tool", "helper", "utility"
- No keyword stuffing - natural distribution

FEATURES Requirements:
- Generate 5 specific capabilities that describe what the command can do
- Use action-oriented language
- Be specific about functionality

OTHER Requirements:
- Use lowercase for category (use the platform name as category)
- Path should be in the format "/freedevtools/tldr/{platform}/{command_name}"
- Do NOT include canonical field - it will be added automatically
- Return ONLY the YAML content without any code block markers (no ```yaml or ```)

Example format:
title: "Android Activity Manager - Control App Activities with ADB | Free DevTools"
name: {command_name}
path: /freedevtools/tldr/{platform}/{command_name}
description: "Control Android app activities instantly with ADB Activity Manager. Start activities, manage intents, and debug applications using command line. Free online tool, no registration required."
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

    headers = {"Content-Type": "application/json", "X-goog-api-key": api_key}
    data = {"contents": [{"parts": [{"text": prompt}]}]}
    response = requests.post(API_URL, headers=headers, json=data)
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

            # Validate SEO compliance
            seo_issues = validate_seo_compliance(generated_text, platform, command_name)
            if seo_issues:
                print(f"SEO Issues for {command_name}: {', '.join(seo_issues)}")

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


def process_file(md_file, base_path, api_key, process_id, file_index, total_files):
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

        frontmatter_yaml = send_to_gemini(content, platform, name, api_key)
        if frontmatter_yaml:
            update_markdown_file(md_file, frontmatter_yaml)
            return {"status": "success", "file": md_file, "platform": platform}
        else:
            return {
                "status": "failed",
                "file": md_file,
                "reason": "no frontmatter returned",
            }
    except Exception as e:
        return {"status": "error", "file": md_file, "error": str(e)}


def process_batch(batch_files, base_path, api_key, process_id):
    """Process a batch of files with a single API key"""
    print(f"Process {process_id} started with {len(batch_files)} files")

    for i, md_file in enumerate(batch_files):
        print(
            f"Process {process_id}: Processing {i+1}/{len(batch_files)} - {os.path.basename(md_file)}"
        )
        result = process_file(
            md_file, base_path, api_key, process_id, i + 1, len(batch_files)
        )

        if result["status"] == "success":
            print(
                f"Process {process_id}: ✅ {os.path.basename(md_file)} - {result['platform']}"
            )
        elif result["status"] == "skipped":
            print(
                f"Process {process_id}: ⏭️  {os.path.basename(md_file)} - already processed"
            )
        else:
            print(
                f"Process {process_id}: ❌ {os.path.basename(md_file)} - {result.get('reason', result.get('error', 'unknown error'))}"
            )

        # Small delay to avoid rate limiting
        time.sleep(1)

    print(f"Process {process_id} completed")


def main():
    if len(sys.argv) != 2:
        print("Usage: generate_frontmatter.py <root_directory>")
        sys.exit(1)

    root_dir = sys.argv[1]
    print(f"Searching for markdown files in: {root_dir}")
    md_files = find_markdown_files(root_dir)
    print(f"Found {len(md_files)} markdown files")

    # Filter out files that already have frontmatter (--- markers)
    unprocessed_files = []
    for md_file in md_files:
        # Check if file already has frontmatter
        try:
            with open(md_file, "r") as f:
                content = f.read()

            # Count --- markers
            dash_count = content.count("---")
            if dash_count >= 2:
                print(
                    f"⏭️  Skipping {os.path.basename(md_file)} - already has frontmatter ({dash_count} --- markers)"
                )
                continue

        except Exception as e:
            print(f"⚠️  Could not read {os.path.basename(md_file)}: {e}")
            continue

        unprocessed_files.append(md_file)

    print(f"Found {len(unprocessed_files)} unprocessed files")

    if not unprocessed_files:
        print("All files have been processed!")
        return

    # Calculate batch size (split by 5 processes, max 10 files per process)
    total_files = len(unprocessed_files)
    num_processes = min(5, len(API_KEYS))
    batch_size = max(1, total_files // num_processes)

    print(
        f"Processing {total_files} files in {num_processes} batches of ~{batch_size} files each"
    )
    print(f"Using {len(API_KEYS)} API keys")

    # Create batches
    batches = []
    for i in range(0, len(unprocessed_files), batch_size):
        batch = unprocessed_files[i : i + batch_size]
        batches.append(batch)

    # Ensure we don't have more batches than API keys
    batches = batches[: len(API_KEYS)]

    # Process batches in parallel
    print(f"\n🚀 Starting {len(batches)} parallel processes...")

    with ThreadPoolExecutor(max_workers=len(batches)) as executor:
        # Submit all batches
        futures = []
        for i, batch in enumerate(batches):
            api_key = API_KEYS[i % len(API_KEYS)]
            future = executor.submit(process_batch, batch, root_dir, api_key, i + 1)
            futures.append(future)

        # Wait for all processes to complete
        for future in as_completed(futures):
            try:
                future.result()
            except Exception as e:
                print(f"❌ Process failed: {e}")

    print("\n🎉 All processes completed!")


if __name__ == "__main__":
    print("Script starting...")
    print(f"Available API keys: {len(API_KEYS)}")
    try:
        main()
        print("Script completed successfully.")
    except Exception as e:
        print(f"Script failed with error: {e}")
        import traceback

        traceback.print_exc()
