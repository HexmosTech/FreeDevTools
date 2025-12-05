import json
import re

INPUT_FILE = "installerpedia.json"
OUTPUT_FILE = "installerpedia_fixed.json"

def to_slug(text: str) -> str:
    # keep case — only replace `/` with `-`
    text = text.replace("/", "-")
    text = re.sub(r"\s+", "-", text)
    return text

def build_path(repo_type: str, name: str) -> str:
    slug = to_slug(name)
    return f"/freedevtools/installerpedia/{repo_type}/{slug}"

def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    for item in data:
        repo_type = (
            item.get("repo_type")
            or item.get("repoType")
            or item.get("repotype")
        )
        name = item.get("name")

        if not repo_type or not name:
            print("Skipping item (missing repo_type/name):", item)
            continue

        item["path"] = build_path(repo_type, name)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("Updated file written to", OUTPUT_FILE)


if __name__ == "__main__":
    main()
