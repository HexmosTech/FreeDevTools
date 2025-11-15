#!/usr/bin/env python3
"""
Sync banner program CSV to SQLite database.
Parses NAME column to extract language, size, campaign_name, product_name.
"""

import csv
import re
import sqlite3
import sys
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse


def clean_name(product_name: str, size: str) -> str:
    """
    Create a clean name from product_name and size.
    Example: "Abelssoft" + "468x60" -> "Abelssoft 468x60"
    """
    if size:
        return f"{product_name} {size}".strip()
    return product_name.strip()


def parse_name(name: str) -> dict:
    """
    Parse NAME field to extract components.
    Handles various patterns:
    - "PC Fresh > EN > 468x60"
    - "Abelssoft > DE > 300x250 > Fall Sale > HackCheck"
    - "YouTube Song Downloader > 300x250 > DE"
    - "Easter Sale > EN > 1080x1080"
    """
    parts = [p.strip() for p in name.split(">")]

    if not parts:
        return {
            "product_name": "",
            "language": "",
            "size": "",
            "campaign_name": "",
            "clean_name": "",
        }

    # Find language (EN or DE)
    language = ""
    language_idx = -1
    for i, part in enumerate(parts):
        if part.upper() in ("EN", "DE"):
            language = part.upper()
            language_idx = i
            break

    # Find size (pattern like "468x60", "300x250", "1080x1080")
    size = ""
    size_idx = -1
    for i, part in enumerate(parts):
        if re.match(r"^\d+x\d+$", part):
            size = part
            size_idx = i
            break

    # Determine product name and campaign
    product_name = ""
    campaign_name = ""

    # Common campaign keywords
    campaign_keywords = [
        "sale",
        "deal",
        "discount",
        "promotion",
        "black week",
        "halloween",
        "easter",
        "spring",
        "summer",
        "fall",
        "winter",
        "christmas",
    ]

    # Check if first part is a campaign (contains campaign keywords)
    first_part_lower = parts[0].lower()
    is_first_campaign = any(
        keyword in first_part_lower for keyword in campaign_keywords
    )

    if is_first_campaign:
        # Pattern: "Campaign > Language > Size"
        campaign_name = parts[0]
        # Product name might be in later parts or we use a generic name
        # Look for product names in remaining parts
        for i, part in enumerate(parts):
            if i != language_idx and i != size_idx and i != 0:
                # This might be a product name
                if not any(kw in part.lower() for kw in campaign_keywords):
                    product_name = part
                    break
        if not product_name:
            product_name = "Abelssoft"  # Default fallback
    else:
        # Pattern: "Product > Language > Size > Campaign..."
        product_name = parts[0]

        # Find campaign name (usually after size, or in remaining parts)
        for i, part in enumerate(parts):
            if i != 0 and i != language_idx and i != size_idx:
                # Check if it's a campaign
                if any(keyword in part.lower() for keyword in campaign_keywords):
                    campaign_name = part
                    break

    # Create clean name
    clean_name_str = clean_name(product_name, size)

    return {
        "product_name": product_name,
        "language": language,
        "size": size,
        "campaign_name": campaign_name,
        "clean_name": clean_name_str,
    }


def parse_link_type(link_type: str) -> str:
    """
    Parse LINK TYPE column.
    If 'banner' is present (case-insensitive), return 'banner'.
    If 'evergreen' is present (case-insensitive), return 'evergreen'.
    Otherwise return 'text'.
    """
    if not link_type:
        return "text"
    link_type_lower = link_type.strip().lower()
    if "banner" in link_type_lower:
        return "banner"
    if "evergreen" in link_type_lower:
        return "evergreen"
    return "text"


class TitleDescriptionParser(HTMLParser):
    """HTML parser to extract title and meta description."""

    def __init__(self):
        super().__init__()
        self.title = None
        self.description = None
        self.in_title = False
        self.title_content = []

    def handle_starttag(self, tag, attrs):
        if tag == "title":
            self.in_title = True
        elif tag == "meta":
            attrs_dict = dict(attrs)
            if attrs_dict.get("name", "").lower() == "description":
                self.description = attrs_dict.get("content", "")

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
            if self.title_content:
                self.title = " ".join(self.title_content).strip()

    def handle_data(self, data):
        if self.in_title:
            self.title_content.append(data.strip())


def fetch_page_info(url: str) -> str:
    """
    Fetch page title, description, or domain from URL.
    Returns title if found, else description, else domain.
    """
    try:
        # Parse URL to get domain
        parsed = urlparse(url)
        domain = (
            parsed.netloc or parsed.path.split("/")[0] if parsed.path else "Unknown"
        )

        # Try to fetch the page
        req = urllib.request.Request(
            url,
            headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            },
        )

        with urllib.request.urlopen(req, timeout=5) as response:
            html_content = response.read().decode("utf-8", errors="ignore")

            # Parse HTML
            parser = TitleDescriptionParser()
            parser.feed(html_content)

            # Return title if found
            if parser.title:
                return parser.title

            # Return description if found
            if parser.description:
                return parser.description

        # Fallback to domain
        return domain

    except Exception as e:
        # On any error, return domain
        try:
            parsed = urlparse(url)
            domain = (
                parsed.netloc or parsed.path.split("/")[0] if parsed.path else "Unknown"
            )
            return domain
        except:
            return "Unknown"


def process_evergreen_html(html: str) -> str:
    """
    Process HTML for evergreen type:
    - Extract href from anchor tags
    - Fetch page title/description/domain
    - Update anchor tag text with fetched info
    """
    if not html:
        return html

    # Process anchor tags - replace content with fetched info
    def replace_anchor_with_text(match):
        full_tag = match.group(0)
        attrs = match.group(1)
        existing_content = match.group(2) if match.group(2) else ""

        # Extract href
        href_match = re.search(r'href=["\']([^"\']*)["\']', attrs, re.IGNORECASE)
        if not href_match:
            return full_tag  # No href, return as-is

        href = href_match.group(1)

        # Skip if href is empty, just #, or javascript:
        if (
            not href
            or href == "#"
            or href.startswith("javascript:")
            or href.startswith("mailto:")
        ):
            return full_tag

        # Make URL absolute if it's relative
        if href.startswith("//"):
            href = "https:" + href
        elif href.startswith("/"):
            # Relative URL - we can't determine the base, so skip
            return full_tag
        elif not href.startswith(("http://", "https://")):
            # Relative URL without leading slash - skip
            return full_tag

        # Fetch page info
        anchor_text = fetch_page_info(href)

        # Return anchor with new text
        return f"<a {attrs}>{anchor_text}</a>"

    # Match anchor tags with their content: <a ...>content</a>
    # Use non-greedy matching and handle nested tags carefully
    html = re.sub(
        r"<a\s+([^>]*?)>(.*?)</a>",
        replace_anchor_with_text,
        html,
        flags=re.IGNORECASE | re.DOTALL,
    )

    return html


def process_banner_html(html: str) -> str:
    """
    Process HTML for all types:
    - Add rel="sponsored noopener nofollow" to anchor tags
    - Add loading="lazy" to image tags
    """
    if not html:
        return html

    # Process anchor tags - add or update rel attribute
    def process_anchor(match):
        attrs = match.group(1)
        # Check if rel already exists
        rel_match = re.search(r'rel=["\']([^"\']*)["\']', attrs, re.IGNORECASE)
        if rel_match:
            # Update existing rel
            existing_rel = rel_match.group(1)
            # Add sponsored, noopener, nofollow if not present
            new_rel = existing_rel
            if "sponsored" not in new_rel.lower():
                new_rel += " sponsored"
            if "noopener" not in new_rel.lower():
                new_rel += " noopener"
            if "nofollow" not in new_rel.lower():
                new_rel += " nofollow"
            # Replace the rel attribute
            updated_attrs = re.sub(
                r'rel=["\'][^"\']*["\']',
                f'rel="{new_rel.strip()}"',
                attrs,
                flags=re.IGNORECASE,
            )
            return f"<a {updated_attrs}>"
        else:
            # Add new rel attribute
            return f'<a {attrs} rel="sponsored noopener nofollow">'

    # Process anchor tags
    html = re.sub(r"<a\s+([^>]*?)>", process_anchor, html, flags=re.IGNORECASE)

    # Process image tags - add loading="lazy" if not present
    def process_image(match):
        full_match = match.group(0)
        attrs = match.group(1)
        self_closing = match.group(2)

        # Check if loading already exists
        if re.search(r'loading=["\']', attrs, re.IGNORECASE):
            return full_match  # Already has loading attribute

        # Add loading="lazy" to attributes
        if self_closing:
            return f'<img {attrs} loading="lazy" />'
        else:
            return f'<img {attrs} loading="lazy">'

    # Process image tags (both <img ... /> and <img ... >)
    html = re.sub(r"<img\s+([^>]*?)(/?)>", process_image, html, flags=re.IGNORECASE)

    return html


def ensure_schema(conn: sqlite3.Connection) -> None:
    """Create the banner table schema."""
    cur = conn.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS banner (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            language TEXT NOT NULL,
            name TEXT NOT NULL,
            size TEXT DEFAULT '',
            campaign_name TEXT DEFAULT '',
            product_name TEXT NOT NULL,
            html_link TEXT NOT NULL,
            js_links TEXT DEFAULT '',
            click_url TEXT DEFAULT '',
            link_type TEXT DEFAULT 'text'
        );
        """
    )
    cur.execute("CREATE INDEX IF NOT EXISTS idx_banner_language ON banner(language);")
    cur.execute(
        "CREATE INDEX IF NOT EXISTS idx_banner_product ON banner(product_name);"
    )
    cur.execute(
        "CREATE INDEX IF NOT EXISTS idx_banner_campaign ON banner(campaign_name);"
    )
    cur.execute(
        "CREATE UNIQUE INDEX IF NOT EXISTS idx_banner_unique ON banner(language, name, html_link);"
    )
    conn.commit()


def load_csv(csv_path: Path, conn: sqlite3.Connection) -> tuple[int, int]:
    """Load CSV file and insert valid rows into database."""
    cur = conn.cursor()
    inserted = 0
    skipped = 0

    with open(csv_path, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)

        for row in reader:
            name = row.get("NAME", "").strip()
            html_link = row.get("HTML LINKS", "").strip()
            js_link = row.get("JAVASCRIPT LINKS", "").strip()
            click_url = row.get("CLICK URL", "").strip()
            link_type_raw = row.get("LINK TYPE", "").strip()

            # Skip if name or html_link is empty
            if not name or not html_link:
                skipped += 1
                continue

            # Parse name
            parsed = parse_name(name)

            # Parse link type
            link_type = parse_link_type(link_type_raw)

            # Skip if not banner type
            # if link_type != "banner":
            #     skipped += 1
            #     continue

            # Process HTML based on type
            if link_type == "evergreen":
                # For evergreen, fetch page info and update anchor text
                processed_html_link = process_evergreen_html(html_link)
                # Then apply standard processing (rel attributes, lazy loading)
                processed_html_link = process_banner_html(processed_html_link)
            else:
                # For banner and text types, just add rel attributes and lazy loading
                processed_html_link = process_banner_html(html_link)

            # Insert into database
            try:
                cur.execute(
                    """
                    INSERT OR IGNORE INTO banner 
                    (language, name, size, campaign_name, product_name, html_link, js_links, click_url, link_type)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        parsed["language"],
                        parsed["clean_name"],
                        parsed["size"],
                        parsed["campaign_name"],
                        parsed["product_name"],
                        processed_html_link,
                        js_link,
                        click_url,
                        link_type,
                    ),
                )
                if cur.rowcount > 0:
                    inserted += 1
            except Exception as e:
                print(f"Error inserting row: {e}")
                skipped += 1

    conn.commit()
    return inserted, skipped


def verify(conn: sqlite3.Connection) -> None:
    """Verify database contents."""
    cur = conn.cursor()

    cur.execute("SELECT COUNT(*) FROM banner;")
    total = cur.fetchone()[0]
    print(f"Total rows: {total}")

    cur.execute(
        "SELECT language, COUNT(*) FROM banner GROUP BY language ORDER BY language;"
    )
    print("\nBy language:")
    for lang, count in cur.fetchall():
        print(f"  {lang}: {count}")

    cur.execute(
        "SELECT product_name, COUNT(*) FROM banner GROUP BY product_name ORDER BY product_name LIMIT 10;"
    )
    print("\nTop products:")
    for product, count in cur.fetchall():
        print(f"  {product}: {count}")

    cur.execute(
        "SELECT language, name, size, campaign_name, product_name FROM banner ORDER BY product_name, language LIMIT 5;"
    )
    print("\nSample rows:")
    for row in cur.fetchall():
        print(f"  {row}")


def main():
    if len(sys.argv) < 2:
        print("Usage: python sync.py program.csv")
        sys.exit(1)

    csv_path = Path(sys.argv[1])
    if not csv_path.exists():
        print(f"Error: CSV file not found: {csv_path}")
        sys.exit(1)

    # Database path: db/all_dbs/banner-db.db
    script_dir = Path(__file__).parent
    db_dir = script_dir.parent.parent / "db" / "all_dbs"
    db_dir.mkdir(parents=True, exist_ok=True)
    db_path = db_dir / "banner-db.db"

    print(f"Reading CSV: {csv_path}")
    print(f"Database: {db_path}")

    # Remove existing database
    db_path.unlink(missing_ok=True)

    with sqlite3.connect(db_path) as conn:
        ensure_schema(conn)
        inserted, skipped = load_csv(csv_path, conn)
        print(f"\n✓ Inserted {inserted} rows, skipped {skipped} rows")
        verify(conn)


if __name__ == "__main__":
    main()
