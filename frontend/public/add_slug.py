#!/usr/bin/env python3
import os
import json

# Path to your JSON directory
JSON_DIR = "emoji_data"

for root, _, files in os.walk(JSON_DIR):
    for file in files:
        if not file.endswith(".json"):
            continue

        file_path = os.path.join(root, file)
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                data = json.load(f)

            # If slug is missing, set it from filename
            if "slug" not in data or not data["slug"]:
                slug = os.path.splitext(file)[0]
                data["slug"] = slug

                with open(file_path, "w", encoding="utf-8") as f:
                    json.dump(data, f, ensure_ascii=False, indent=2)

                print(f"✅ Added slug to {file}: {slug}")

        except Exception as e:
            print(f"❌ Error processing {file_path}: {e}")
