import xml.etree.ElementTree as ET

import requests

START_URL = "https://hexmos.com/freedevtools/sitemap.xml"
visited = set()
all_urls = set()
sitemap_urls = set()


def fetch_xml(url):
    try:
        r = requests.get(url, timeout=10)
        r.raise_for_status()
        return r.text
    except Exception as e:
        print(f"❌ Error fetching {url}: {e}")
        return None


def parse_sitemap(url):
    if url in visited:
        return
    visited.add(url)
    print(f"📄 Parsing sitemap: {url}")

    xml_data = fetch_xml(url)
    if not xml_data:
        return

    try:
        root = ET.fromstring(xml_data)
    except ET.ParseError:
        print(f"⚠️ Could not parse XML from {url}")
        return

    for loc in root.findall(".//{*}loc"):
        loc_url = loc.text.strip()
        if loc_url.endswith(".xml"):
            sitemap_urls.add(loc_url)
            parse_sitemap(loc_url)
        else:
            all_urls.add(loc_url)


def main():
    parse_sitemap(START_URL)

    print(
        f"\n✅ Found {len(all_urls)} normal URLs and {len(sitemap_urls)} sitemap URLs\n"
    )

    # Write all URLs to prod_sitemap.txt
    with open("prod_sitemap.txt", "w") as f:
        for u in sorted(all_urls):
            f.write(u + "\n")

    # Write sitemap URLs to prod_sitemap_parents.txt
    with open("prod_sitemap_parents.txt", "w") as f:
        for s in sorted(sitemap_urls):
            f.write(s + "\n")

    print("📝 Results saved to prod_sitemap.txt and prod_sitemap_parents.txt")


if __name__ == "__main__":
    main()
