#!/usr/bin/env python3

import os
import sys
import time

import requests

API_KEYS = ["AIzaSyADNt8eQc93cR7CmeBhOe-9oqkzbvSm9J8"]
API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

OG_IMAGE = "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
TWITTER_IMAGE = "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"


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
            if not title.endswith("| Online Free DevTools by Hexmos"):
                issues.append(
                    "Title missing brand suffix '| Online Free DevTools by Hexmos'"
                )
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
                    "command",
                    "syntax",
                    "reference",
                    "examples",
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
                    "command reference",
                    "syntax guide",
                    "examples",
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
        "common": ["command line", "terminal", "cli"],
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
        "zstd": ["zstd command", "zstd syntax", "zstd examples", "zstandard commands"],
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


def send_to_gemini(md_content, platform, command_name, api_key):
    prompt = f"""Correct and improve the SEO-optimized frontmatter metadata in YAML format for the following markdown content:

Platform: {platform}
Command: {command_name}

{md_content}

SEO Requirements (CRITICAL):
- Include: title, name, path, description, category, keywords, features
- Use proper YAML list format with dashes (-) for keywords and features, NOT array syntax

TITLE Requirements:
- Format: "[Tool Name] - [Primary Function] | Online Free DevTools by Hexmos"
- Length: 50-60 characters
- Primary keyword in first 3 words
- Use action words like "Control", "Generate", "Format", "Validate", "Create", "Command", "Syntax", "Reference"
- Include brand "Free DevTools" at the end

DESCRIPTION Requirements:
- Format: "[Primary keyword action] with [Tool Name]"
- Length: 140-160 characters
- Contains primary keyword
- Contains 1 secondary keyword
- Has clear call-to-action like "Free online tool, no registration required" or "Command reference and examples"

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
title: "Android Activity Manager - Control App Activities with ADB | Online Free DevTools by Hexmos"
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


def process_file(md_file, api_key):
    try:
        with open(md_file, "r") as f:
            content = f.read()

        name = os.path.splitext(os.path.basename(md_file))[0]

        # Extract platform from the file path
        # Platform is the parent directory of the markdown file
        path_parts = md_file.split("/")

        # Find the platform directory (should be the directory containing the .md file)
        platform = "unknown"
        for i, part in enumerate(path_parts):
            if part.endswith(".md"):
                # The platform is the directory before the .md file
                if i > 0:
                    platform = path_parts[i - 1]
                break

        print(f"Processing {name} from {platform}...")

        frontmatter_yaml = send_to_gemini(content, platform, name, api_key)
        if frontmatter_yaml:
            update_markdown_file(md_file, frontmatter_yaml)
            print(f"✅ Updated {name}")
            return True
        else:
            print(f"❌ Failed to generate frontmatter for {name}")
            return False
    except Exception as e:
        print(f"❌ Error processing {md_file}: {e}")
        return False


def read_csv_file(csv_path):
    """Read file paths from CSV file"""
    file_paths = []
    try:
        with open(csv_path, "r") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):  # Skip empty lines and comments
                    file_paths.append(line)
        return file_paths
    except Exception as e:
        print(f"Error reading CSV file {csv_path}: {e}")
        return []


def main():
    # Hardcoded input file path
    csv_path = os.path.expanduser("~/hex/freedevtools/frontend/input.csv")

    if not os.path.exists(csv_path):
        print(f"CSV file not found: {csv_path}")
        sys.exit(1)

    print(f"Reading file paths from: {csv_path}")
    file_paths = read_csv_file(csv_path)

    if not file_paths:
        print("No file paths found in CSV")
        sys.exit(1)

    print(f"Found {len(file_paths)} files to process")

    if not API_KEYS:
        print("No API keys configured. Please add API keys to the API_KEYS list.")
        sys.exit(1)

    # Use the first API key
    api_key = API_KEYS[0]

    success_count = 0
    total_count = len(file_paths)

    for i, file_path in enumerate(file_paths):
        print(f"\n[{i+1}/{total_count}] Processing: {file_path}")

        if not os.path.exists(file_path):
            print(f"❌ File not found: {file_path}")
            continue

        if process_file(file_path, api_key):
            success_count += 1

        # Small delay to avoid rate limiting
        time.sleep(1)

    print(f"\n🎉 Processing completed!")
    print(f"✅ Successfully processed: {success_count}/{total_count} files")


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
