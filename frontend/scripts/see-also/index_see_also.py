#!/usr/bin/env python3
"""
Script to index and find "See Also" related content for MCP pages.
Replicates the keyword extraction and search logic from SeeAlso.tsx
"""

import argparse
import json
# Meilisearch API configuration
import os
import re
import sqlite3
import sys
from html import unescape
from html.parser import HTMLParser
from pathlib import Path
from typing import Dict, List, Optional

import requests


def load_meili_config():
    """Load Meilisearch config from fdt-dev.toml"""
    # Try environment variables first
    api_key = os.getenv('MEILI_SEARCH_KEY') or os.getenv('MEILI_MASTER_KEY')
    url = os.getenv('MEILI_SEARCH_URL')
    
    if api_key and url:
        return api_key, url
    
    # Try to read from fdt-dev.toml
    script_dir = Path(__file__).parent.parent.parent
    config_file = script_dir / 'fdt-dev.toml'
    
    if config_file.exists():
        try:
            with open(config_file, 'r') as f:
                content = f.read()
                # Extract meili_master_key
                key_match = re.search(r'meili_master_key\s*=\s*"([^"]+)"', content)
                # Extract meili_url
                url_match = re.search(r'meili_url\s*=\s*"([^"]+)"', content)
                
                if key_match:
                    api_key = key_match.group(1)
                if url_match:
                    url = url_match.group(1)
        except Exception as e:
            print(f"Warning: Failed to read config from {config_file}: {e}", file=sys.stderr)
    
    # Fallback defaults
    if not api_key:
        print("Error: MEILI_MASTER_KEY not found in environment or fdt-dev.toml", file=sys.stderr)
        sys.exit(1)
    if not url:
        url = 'http://localhost:7700'
    
    return api_key, f'{url}/indexes/freedevtools/search'

MEILI_SEARCH_API_KEY, MEILI_SEARCH_URL = load_meili_config()

# Stopwords list (same as in SeeAlso.tsx)
STOPWORDS = {
    "the", "is", "and", "or", "to", "in", "of", "for", "on", "a", "an", "with", "that",
    "this", "it", "as", "by", "be", "are", "at", "from", "but", "not", "your", "you",
    "we", "our", "they", "their", "has", "have", "had", "can", "will", "would", "could",
    "should", "may", "might", "must", "about", "into", "through", "during", "before",
    "after", "above", "below", "up", "down", "out", "off", "over", "under", "again",
    "further", "then", "once", "here", "there", "when", "where", "why", "how", "all",
    "each", "other", "some", "such", "only", "own", "same", "so", "than", "too", "very",
    "can", "just", "don", "now", "more", "use", "get", "see", "make", "find", "know",
    "take", "come", "think", "look", "want", "give", "tell", "work", "call", "try",
    "ask", "need", "feel", "become", "leave", "put", "mean", "keep", "let", "begin",
    "seem", "help", "talk", "turn", "start", "show", "hear", "play", "run", "move",
    "like", "live", "believe", "hold", "bring", "happen", "write", "provide", "sit",
    "stand", "lose", "pay", "meet", "include", "continue", "set", "learn", "change",
    "lead", "understand", "watch", "follow", "stop", "create", "speak", "read", "allow",
    "add", "spend", "grow", "open", "walk", "win", "offer", "remember", "love", "consider"
}


class HTMLStripper(HTMLParser):
    """HTML parser to strip tags and extract text content"""
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = []
        
    def handle_data(self, data):
        self.text.append(data)
        
    def get_text(self):
        return ' '.join(self.text)


def strip_html(html_content: str) -> str:
    """Remove HTML tags from content"""
    if not html_content:
        return ""
    
    # Unescape HTML entities
    text = unescape(html_content)
    
    # Remove HTML tags
    stripper = HTMLStripper()
    stripper.feed(text)
    clean_text = stripper.get_text()
    
    # Clean up extra whitespace
    clean_text = re.sub(r'\s+', ' ', clean_text)
    return clean_text.strip()


def get_top_keywords(text: str, n: int = 3) -> List[str]:
    """
    Extract top N keywords from text using the same logic as SeeAlso.tsx
    """
    if not text:
        return []
    
    # Normalize: lowercase, replace non-alphanumeric with spaces
    normalized = re.sub(r'[^a-z0-9\s]', ' ', text.lower())
    
    # Split into words
    words = normalized.split()
    
    # Filter: length > 3 and not in stopwords
    filtered_words = [w for w in words if len(w) > 3 and w not in STOPWORDS]
    
    # Count frequency
    freq: Dict[str, int] = {}
    for word in filtered_words:
        freq[word] = freq.get(word, 0) + 1
    
    # Sort by frequency (descending) and take top N
    sorted_words = sorted(freq.items(), key=lambda x: x[1], reverse=True)
    top_keywords = [word for word, _ in sorted_words[:n]]
    
    return top_keywords


def search_meilisearch(query: str) -> Dict:
    """Search Meilisearch API"""
    try:
        search_body = {
            "q": query,
            "limit": 10,
            "offset": 0,
            "attributesToRetrieve": [
                "id", "name", "title", "description", "category", "path", "image", "code"
            ]
        }
        
        response = requests.post(
            MEILI_SEARCH_URL,
            headers={
                "Content-Type": "application/json",
                "Authorization": f"Bearer {MEILI_SEARCH_API_KEY}"
            },
            json=search_body,
            timeout=10
        )
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Search failed: {response.status_code} - {response.text}", file=sys.stderr)
            return {"hits": []}
    
    except Exception as e:
        print(f"Search error: {e}", file=sys.stderr)
        return {"hits": []}


def normalize_path(path: str) -> str:
    """Normalize path: lowercase and remove trailing slash"""
    if not path:
        return ""
    return path.lower().rstrip('/')


def get_category_icon(category: Optional[str]) -> str:
    """Get icon type based on category"""
    if not category:
        return "rocket"
    
    cat_lower = category.lower()
    if cat_lower == "tools":
        return "gear"
    elif cat_lower in ["tldr", "cheatsheets"]:
        return "fileText"
    else:
        return "rocket"


def format_category_label(category: Optional[str]) -> str:
    """Format category label (same as SeeAlso.tsx)"""
    if not category:
        return "General"
    
    # Replace underscores/hyphens with spaces, title case
    title_cased = re.sub(r'[_-]+', ' ', category).strip()
    title_cased = ' '.join(word.capitalize() for word in title_cased.split() if word)
    
    # Replace specific format words
    title_cased = re.sub(r'\bPng\b', 'PNG', title_cased)
    title_cased = re.sub(r'\bSvg\b', 'SVG', title_cased)
    
    return title_cased


def process_page(cursor, hash_id, category_id, page, description, content, keywords, base_url, num_items: int = 3):
    """Process a single page and return see_also results"""
    # Clean HTML from content
    clean_content = strip_html(content) if content else ""
    clean_description = strip_html(description) if description else ""
    
    # Parse keywords (assuming JSON array format)
    keywords_text = ""
    if keywords:
        try:
            keywords_list = json.loads(keywords)
            keywords_text = " ".join(keywords_list) if isinstance(keywords_list, list) else str(keywords)
        except:
            keywords_text = str(keywords)
    
    # Combine: page + description + content + keywords
    to_search = f"{page or ''} {clean_description} {clean_content} {keywords_text}".strip()
    
    if not to_search:
        return []
    
    # Extract top N keywords (use num_items to get enough keywords for searching)
    top_keywords = get_top_keywords(to_search, n=num_items)
    
    if not top_keywords:
        return []
    
    # Normalize current page path - MCP pages use format /freedevtools/mcp/{category}/{repo}/
    # The key format is like "algorithm07-ai--TextGuardAI" which may need parsing
    # For now, we'll construct a potential path pattern, but filtering will work
    # based on actual paths returned from Meilisearch
    current_path = normalize_path(f"/freedevtools/mcp/{page}") if page else ""
    
    # Search for each keyword
    search_responses = [search_meilisearch(keyword) for keyword in top_keywords]
    
    # Collect top result from each keyword search
    top_results = []
    for response, keyword in zip(search_responses, top_keywords):
        for hit in response.get('hits', []):
            if not hit.get('path'):
                continue
            
            # Normalize hit path
            normalized_hit_path = normalize_path(hit['path'])
            
            # Skip current page
            if normalized_hit_path == current_path:
                continue
            
            # Skip duplicates
            if any(normalize_path(r.get('path', '')) == normalized_hit_path for r in top_results):
                continue
            
            top_results.append(hit)
            break  # Take only first unique result per keyword
    
    # Take up to num_items unique results
    unique_results = top_results[:num_items]
    
    # Convert to see_also format (JSON array)
    see_also_items = []
    for result in unique_results:
        icon_type = get_category_icon(result.get('category'))
        category_label = format_category_label(result.get('category'))
        
        # Build full URL
        path = result.get('path', '#')
        if path and not path.startswith('http'):
            link = f"{base_url}{path}" if path.startswith('/') else f"{base_url}/{path}"
        else:
            link = path if path else '#'
        
        item = {
            "text": result.get('name') or result.get('title') or 'Untitled',
            "link": link,
            "category": category_label,
            "icon": icon_type,
        }
        
        if result.get('code'):
            item["code"] = result['code']
        elif result.get('image'):
            item["image"] = result['image']
        
        see_also_items.append(item)
    
    return see_also_items


def main():
    """Main function"""
    parser = argparse.ArgumentParser(description='Index See Also content for MCP pages')
    parser.add_argument('--items', type=int, default=3, help='Number of See Also items to store and display (default: 3)')
    args = parser.parse_args()
    
    num_items = max(1, min(args.items, 10))  # Clamp between 1 and 10
    if num_items != args.items:
        print(f"Warning: items clamped to {num_items} (must be between 1 and 10)", file=sys.stderr)
    
    db_path = "db/all_dbs/mcp-db-v6.db"
    
    # Query pages with hash_id and category_id
    query = """
    SELECT hash_id, category_id, key as page, description, readme_content as content, keywords
    FROM mcp_pages limit 3
    """
    
    base_url = "https://hexmos.com"
    
    print(f"Processing with {num_items} items per page...")
    print()
    
    try:
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        
        # Fetch all rows
        cursor.execute(query)
        rows = cursor.fetchall()
        
        if not rows:
            print("No data found", file=sys.stderr)
            conn.close()
            sys.exit(1)
        
        total = len(rows)
        print(f"Processing {total} pages...")
        print()
        
        updated_count = 0
        error_count = 0
        
        for idx, row in enumerate(rows, 1):
            hash_id, category_id, page, description, content, keywords = row
            
            try:
                # Process page to get see_also results
                see_also_items = process_page(
                    cursor, hash_id, category_id, page, description, content, keywords, base_url, num_items
                )
                
                # Convert to JSON string
                see_also_json = json.dumps(see_also_items)
                
                # Update the see_also column using hash_id and category_id
                update_query = """
                UPDATE mcp_pages
                SET see_also = ?
                WHERE hash_id = ? AND category_id = ?
                """
                
                cursor.execute(update_query, (see_also_json, hash_id, category_id))
                
                if see_also_items:
                    updated_count += 1
                    if idx % 10 == 0 or idx == total:
                        print(f"[{idx}/{total}] Updated: {page} - Found {len(see_also_items)} related items")
                else:
                    if idx % 50 == 0 or idx == total:
                        print(f"[{idx}/{total}] No results: {page}")
            
            except Exception as e:
                error_count += 1
                print(f"[{idx}/{total}] Error processing {page}: {e}", file=sys.stderr)
                continue
        
        # Commit all changes
        conn.commit()
        conn.close()
        
        print()
        print(f"Processing complete!")
        print(f"  Total pages: {total}")
        print(f"  Updated with results: {updated_count}")
        print(f"  No results: {total - updated_count - error_count}")
        print(f"  Errors: {error_count}")
    
    except sqlite3.Error as e:
        print(f"Database error: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()

