import sqlite3
import re
import yaml
from pathlib import Path

DB_PATH = Path(__file__).parent.parent.parent / "db" / "man_pages" / "man-pages-db.db"
CATEGORIZED_DIR = Path("/home/lince/ubuntu-sitemaps/categorized")

def normalize_subcategory(subcat):
    subcat = subcat.lower()
    subcat = re.sub(r'[^a-z0-9]+', '-', subcat)
    subcat = re.sub(r'-+', '-', subcat).strip('-')
    return subcat

def extract_frontmatter(md_file):
    with open(md_file, "r", encoding="utf-8") as f:
        content = f.read()
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            front_matter = parts[1].strip()
            try:
                metadata = yaml.safe_load(front_matter) or {}
                return metadata
            except Exception:
                return {}
    return {}

def main():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    updated = 0

    for main_cat_dir in CATEGORIZED_DIR.iterdir():
        print(f"Processing category: {main_cat_dir.name}")
        if not main_cat_dir.is_dir() or main_cat_dir.name.startswith('.'):
            continue
        for tool_dir in main_cat_dir.iterdir():
            if not tool_dir.is_dir() or tool_dir.name.startswith('.'):
                continue
            for md_file in tool_dir.glob("*.md"):
                metadata = extract_frontmatter(md_file)
                subcat = metadata.get('sub_category')
                if not subcat:
                    continue
                norm_subcat = normalize_subcategory(subcat)
                filename = md_file.name
                main_category = main_cat_dir.name
                # Check if already up-to-date
                cur.execute(
                    "SELECT sub_category FROM man_pages WHERE main_category = ? AND filename = ?",
                    (main_category, filename)
                )
                row = cur.fetchone()
                if row and row[0] == norm_subcat:
                    print(f"Skipping (already up-to-date): main_category={main_category}, filename={filename}")
                    continue

                print(f"Updating: main_category={main_category}, filename={filename}, new_sub_category={norm_subcat}")
                try:
                    cur.execute(
                        "UPDATE man_pages SET sub_category = ? WHERE main_category = ? AND filename = ?",
                        (norm_subcat, main_category, filename)
                    )
                    if cur.rowcount > 0:
                        updated += 1
                except sqlite3.IntegrityError as e:
                    print(f"IntegrityError for file {filename} (main_category={main_category}): {e}")
                    continue
    conn.commit()
    print(f"Updated {updated} rows.")
    conn.close()

if __name__ == "__main__":
    main()