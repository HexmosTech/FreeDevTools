#!/usr/bin/env python3
"""
Extract and analyze links from man pages content.

This script scans man pages in the database and extracts all links (<a> tags)
from their content, outputting them in JSON format for analysis and potential
link fixing to prevent 404 errors.
"""

import json
import sqlite3
import re
import multiprocessing as mp
import argparse
from pathlib import Path
from typing import List, Dict, Any, Tuple
from bs4 import BeautifulSoup
import logging

# Setup paths
BASE_DIR = Path(__file__).parent
DB_PATH = BASE_DIR.parent.parent / "db" / "man_pages" / "man-pages-db.db"
OUTPUT_FILE = BASE_DIR / "man_pages_links_analysis.json"
LOG_FILE = BASE_DIR / "link_extraction.log"

# Setup logging
def setup_logging():
    """Setup logging to file and console."""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(LOG_FILE, mode='w', encoding='utf-8'),
            logging.StreamHandler()
        ]
    )
    return logging.getLogger(__name__)

logger = setup_logging()


def extract_links_from_html(html_content: str) -> List[Dict[str, str]]:
    """Extract all links from HTML content using BeautifulSoup."""
    if not html_content or html_content.strip() == '{}':
        return []
    
    links = []
    
    try:
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Find all <a> tags
        for a_tag in soup.find_all('a', href=True):
            href = a_tag.get('href', '').strip()
            link_text = a_tag.get_text(strip=True)
            
            if href:  # Only include links with actual href values
                links.append({
                    'href': href,
                    'text': link_text,
                    'title': a_tag.get('title', ''),
                    'target': a_tag.get('target', ''),
                })
        
        # Also look for potential markdown-style links in text
        # Pattern: [text](url) or [text](url "title")
        markdown_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        for match in re.finditer(markdown_pattern, str(soup)):
            link_text = match.group(1).strip()
            href = match.group(2).strip()
            
            # Remove quotes from href if present
            href = re.sub(r'^["\']|["\']$', '', href)
            
            if href and not any(link['href'] == href for link in links):
                links.append({
                    'href': href,
                    'text': link_text,
                    'title': '',
                    'target': '',
                    'type': 'markdown'
                })
                
    except Exception as e:
        logger.warning(f"Failed to parse HTML content: {e}")
        # Fallback: simple regex extraction
        href_pattern = r'href=["\']([^"\']+)["\']'
        for match in re.finditer(href_pattern, html_content):
            href = match.group(1)
            links.append({
                'href': href,
                'text': '',
                'title': '',
                'target': '',
                'type': 'regex_fallback'
            })
    
    return links


def categorize_link(href: str, conn: sqlite3.Connection) -> Dict[str, Any]:
    """Categorize a link and extract useful information."""
    href_lower = href.lower()
    
    # Initialize link info
    link_info = {
        'original_href': href,
        'type': 'unknown',
        'is_internal': False,
        'is_man_page_ref': False,
        'is_external': False,
        'domain': '',
        'potential_man_page': '',
        'potential_man_page_link': '',
        'needs_fixing': False
    }
    
    # Check if it's an external URL
    if href.startswith(('http://', 'https://', 'ftp://', 'mailto:')):
        link_info['type'] = 'external'
        link_info['is_external'] = True
        # Extract domain
        domain_match = re.search(r'https?://([^/]+)', href)
        if domain_match:
            link_info['domain'] = domain_match.group(1)
    
    # Check if it's a relative/internal link
    elif href.startswith('/') or not href.startswith(('#', 'mailto:', 'tel:')):
        link_info['type'] = 'internal'
        link_info['is_internal'] = True
        
        # Check if it looks like a man page reference
        man_page_patterns = [
            r'/man-pages/',  # Direct man page link
            r'\.(\d+)\.html?$',  # Traditional man page format
            r'/man(\d+)/',  # Section-based man page
            r'man://(.+)',  # Man protocol
            r'\.\./man\d+/',  # Relative man page links
        ]
        
        for pattern in man_page_patterns:
            if re.search(pattern, href):
                link_info['is_man_page_ref'] = True
                link_info['needs_fixing'] = True
                
                # Extract potential man page name from href
                page_name = None
                
                # Extract filename from URL (remove path and query params)
                filename_part = href.split('/')[-1].split('?')[0]
                
                # Remove .html extension if present
                if filename_part.endswith(('.html', '.htm')):
                    filename_part = re.sub(r'\.(html?|htm)$', '', filename_part)
                
                # For URLs like "../man1/Xorg.1.html", we want "Xorg.1"
                # Keep the full filename with section number
                page_name = filename_part
                
                if page_name:
                    link_info['potential_man_page'] = page_name
                    
                    # Search database for matching filename using fuzzy search
                    # Remove "freebsd" prefix from database filenames for comparison
                    cur = conn.cursor()
                    
                    # Search only in filename column, ignoring freebsd prefix
                    cur.execute("""
                        SELECT main_category, sub_category, slug, filename, title
                        FROM man_pages 
                        WHERE REPLACE(filename, 'freebsd', '') = ?
                           OR REPLACE(filename, 'freebsd', '') LIKE ?
                        ORDER BY 
                            CASE 
                                WHEN REPLACE(filename, 'freebsd', '') = ? THEN 1
                                WHEN REPLACE(filename, 'freebsd', '') LIKE ? THEN 2
                                ELSE 3
                            END,
                            LENGTH(filename) ASC
                        LIMIT 1
                    """, (page_name, f"{page_name}%", page_name, f"{page_name}%"))
                    
                    result = cur.fetchone()
                    
                    if result:
                        main_cat, sub_cat, slug, filename, title = result
                        link_info['potential_man_page_link'] = f"/freedevtools/man-pages/{main_cat}/{sub_cat}/{slug}"
                
                break
    
    # Check if it's an anchor link
    elif href.startswith('#'):
        link_info['type'] = 'anchor'
    
    # Check for other protocols
    elif href.startswith(('tel:', 'mailto:')):
        link_info['type'] = 'protocol'
    
    return link_info


def process_page_batch(page_batch: List[Tuple]) -> List[Dict[str, Any]]:
    """Process a batch of man pages in parallel worker."""
    # Create a separate database connection for this worker
    try:
        with sqlite3.connect(DB_PATH) as conn:
            results = []
            for page_data in page_batch:
                page_id, main_cat, sub_cat, title, slug, filename, content_json = page_data
                
                try:
                    # Parse JSON content
                    if content_json:
                        content_dict = json.loads(content_json)
                    else:
                        content_dict = {}
                    
                    page_links = []
                    
                    # Extract content from all sections
                    for section_name, section_content in content_dict.items():
                        if isinstance(section_content, str):
                            # Extract links from this section
                            section_links = extract_links_from_html(section_content)
                            for link in section_links:
                                link['section'] = section_name
                                link.update(categorize_link(link['href'], conn))
                                page_links.append(link)
                    
                    # Create summary for this page
                    page_summary = {
                        'id': page_id,
                        'slug': slug,
                        'category': main_cat,
                        'subcategory': sub_cat,
                        'title': title,
                        'filename': filename,
                        'total_links': len(page_links),
                        'external_links': sum(1 for link in page_links if link.get('is_external')),
                        'internal_links': sum(1 for link in page_links if link.get('is_internal')),
                        'man_page_refs': sum(1 for link in page_links if link.get('is_man_page_ref')),
                        'links_needing_fix': sum(1 for link in page_links if link.get('needs_fixing')),
                        'links': page_links
                    }
                    
                    results.append(page_summary)
                    
                except Exception as e:
                    logger.error(f"Failed to process page {filename}: {e}")
                    continue
            
            return results
    except Exception as e:
        logger.error(f"Database connection error in worker: {e}")
        return []


def analyze_man_pages_links(limit: int = 100) -> List[Dict[str, Any]]:
    """Analyze links from man pages using parallel processing."""
    if not DB_PATH.exists():
        logger.error(f"Database not found: {DB_PATH}")
        return []
    
    # Get all man pages data first
    with sqlite3.connect(DB_PATH) as conn:
        cur = conn.cursor()
        
        cur.execute("""
            SELECT id, main_category, sub_category, title, slug, filename, content
            FROM man_pages
            ORDER BY main_category, sub_category, title
            LIMIT ?
        """, (limit,))
        
        man_pages = cur.fetchall()
        
    total_pages = len(man_pages)
    logger.info(f"📁 Found {total_pages} man pages to analyze")
    
    if total_pages == 0:
        return []
    
    # Determine number of processes (max 8, but adjust based on page count)
    num_processes = min(8, mp.cpu_count(), max(1, total_pages // 50))
    logger.info(f"🚀 Using {num_processes} parallel processes")
    
    # Split pages into batches for parallel processing
    batch_size = max(1, total_pages // num_processes)
    page_batches = []
    for i in range(0, total_pages, batch_size):
        batch = man_pages[i:i + batch_size]
        if batch:
            page_batches.append(batch)
    
    # Process batches in parallel
    logger.info("⚡ Processing pages in parallel...")
    all_results = []
    
    with mp.Pool(processes=num_processes) as pool:
        batch_results = pool.map(process_page_batch, page_batches)
        for results in batch_results:
            all_results.extend(results)
    
    logger.info(f"✅ Successfully analyzed {len(all_results)} out of {total_pages} pages")
    return all_results


def generate_summary_stats(results: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Generate summary statistics from the analysis results."""
    if not results:
        return {}
    
    total_pages = len(results)
    total_links = sum(page['total_links'] for page in results)
    total_external = sum(page['external_links'] for page in results)
    total_internal = sum(page['internal_links'] for page in results)
    total_man_refs = sum(page['man_page_refs'] for page in results)
    total_needing_fix = sum(page['links_needing_fix'] for page in results)
    
    # Count unique domains
    unique_domains = set()
    for page in results:
        for link in page['links']:
            if link.get('domain'):
                unique_domains.add(link['domain'])
    
    # Count pages with links needing fixes
    pages_needing_fixes = sum(1 for page in results if page['links_needing_fix'] > 0)
    
    summary = {
        'analysis_date': str(Path(__file__).stat().st_mtime),
        'total_pages_analyzed': total_pages,
        'total_links_found': total_links,
        'external_links': total_external,
        'internal_links': total_internal,
        'man_page_references': total_man_refs,
        'links_needing_fix': total_needing_fix,
        'pages_with_fixes_needed': pages_needing_fixes,
        'unique_external_domains': len(unique_domains),
        'top_domains': list(unique_domains)[:10],
        'average_links_per_page': round(total_links / total_pages, 2) if total_pages > 0 else 0
    }
    
    return summary


def fix_page_links_batch(page_batch: List[Tuple]) -> List[Dict[str, Any]]:
    """Fix broken links in a batch of pages in parallel worker."""
    fixed_pages = []
    
    try:
        with sqlite3.connect(DB_PATH) as conn:
            for page_data in page_batch:
                page_id, main_cat, sub_cat, title, slug, filename, content_json = page_data
                
                try:
                    if not content_json:
                        continue
                    
                    content_dict = json.loads(content_json)
                    content_modified = False
                    links_fixed = 0
                    
                    # Process each section
                    for section_name, section_content in content_dict.items():
                        if not isinstance(section_content, str):
                            continue
                        
                        original_content = section_content
                        modified_content = section_content
                        
                        # Extract links from this section
                        soup = BeautifulSoup(section_content, 'html.parser')
                        
                        for a_tag in soup.find_all('a', href=True):
                            href = a_tag.get('href', '').strip()
                            
                            # Check if this is a man page reference that needs fixing
                            link_info = categorize_link(href, conn)
                            
                            if (link_info.get('is_man_page_ref') and 
                                link_info.get('needs_fixing') and 
                                link_info.get('potential_man_page_link')):
                                
                                old_href = href
                                new_href = link_info['potential_man_page_link']
                                
                                # Replace the href in the HTML content
                                old_tag = str(a_tag)
                                new_tag = old_tag.replace(f'href="{old_href}"', f'href="{new_href}"')
                                if old_tag != new_tag:
                                    modified_content = modified_content.replace(old_tag, new_tag)
                                    links_fixed += 1
                        
                        # Update the content if it was modified
                        if modified_content != original_content:
                            content_dict[section_name] = modified_content
                            content_modified = True
                    
                    # Record this page's changes
                    if content_modified:
                        new_content_json = json.dumps(content_dict, ensure_ascii=False)
                        fixed_pages.append({
                            'page_id': page_id,
                            'filename': filename,
                            'content': new_content_json,
                            'links_fixed': links_fixed
                        })
                        
                except Exception as e:
                    logger.error(f"Failed to fix links in page {filename}: {e}")
                    continue
            
            return fixed_pages
    except Exception as e:
        logger.error(f"Database connection error in fix worker: {e}")
        return []


def fix_broken_links() -> int:
    """Fix broken man page links in ALL pages using parallel processing."""
    if not DB_PATH.exists():
        logger.error(f"Database not found: {DB_PATH}")
        return 0
    
    # Get ALL pages to fix
    with sqlite3.connect(DB_PATH) as conn:
        cur = conn.cursor()
        
        cur.execute("""
            SELECT id, main_category, sub_category, title, slug, filename, content
            FROM man_pages
            ORDER BY main_category, sub_category, title
        """)
        
        man_pages = cur.fetchall()
        
    total_pages = len(man_pages)
    logger.info(f"🔧 Fixing broken links in ALL {total_pages} man pages...")
    
    if total_pages == 0:
        return 0
    
    # Determine number of processes for fixing (increased to 8)
    num_processes = min(8, mp.cpu_count(), max(1, total_pages // 10))
    logger.info(f"🚀 Using {num_processes} parallel processes for link fixing")
    
    # Split pages into batches for parallel processing
    batch_size = max(1, total_pages // num_processes)
    page_batches = []
    for i in range(0, total_pages, batch_size):
        batch = man_pages[i:i + batch_size]
        if batch:
            page_batches.append(batch)
    
    # Process batches in parallel
    logger.info("⚡ Fixing links in parallel...")
    all_fixed_pages = []
    
    with mp.Pool(processes=num_processes) as pool:
        batch_results = pool.map(fix_page_links_batch, page_batches)
        for results in batch_results:
            all_fixed_pages.extend(results)
    
    # Update database with all fixes in a single transaction
    fixed_count = 0
    if all_fixed_pages:
        with sqlite3.connect(DB_PATH) as conn:
            cur = conn.cursor()
            
            for page_fix in all_fixed_pages:
                try:
                    cur.execute("""
                        UPDATE man_pages 
                        SET content = ?
                        WHERE id = ?
                    """, (page_fix['content'], page_fix['page_id']))
                    
                    fixed_count += page_fix['links_fixed']
                    logger.info(f"  ✅ Fixed {page_fix['links_fixed']} links in {page_fix['filename']}")
                    
                except Exception as e:
                    logger.error(f"Failed to update page {page_fix['filename']}: {e}")
            
            # Commit all changes
            conn.commit()
    
    logger.info(f"✅ Successfully fixed {fixed_count} links across {len(all_fixed_pages)} pages")
    return fixed_count


def main():
    """Main entry point."""
    # Setup argument parser
    parser = argparse.ArgumentParser(description='Extract and analyze links from man pages, fix broken links')
    parser.add_argument('--analysis', action='store_true', 
                       help='Run link analysis and generate JSON report (default: only fix links)')
    parser.add_argument('--limit', type=int, default=100,
                       help='Limit number of pages to analyze (default: 100)')
    
    args = parser.parse_args()
    
    logger.info("🔍 Starting man pages link processing...")
    
    # Always fix broken links in ALL pages
    logger.info("🔧 Fixing broken links in all pages...")
    fixed_count = fix_broken_links()
    logger.info(f"✅ Fixed {fixed_count} broken links total")
    
    # Only run analysis if --analysis flag is provided
    if args.analysis:
        logger.info("📊 Running link analysis...")
        results = analyze_man_pages_links(limit=args.limit)
        
        if not results:
            logger.error("No results to process")
            return
        
        # Generate summary statistics
        summary = generate_summary_stats(results)
        
        # Add fix information to summary
        summary['links_fixed_in_db'] = fixed_count
        
        # Prepare output data
        output_data = {
            'summary': summary,
            'pages': results
        }
        
        # Write to JSON file
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=2, ensure_ascii=False)
        
        logger.info(f"✅ Analysis complete! Results written to: {OUTPUT_FILE}")
        logger.info(f"📊 Summary:")
        logger.info(f"  - Pages analyzed: {summary.get('total_pages_analyzed', 0)}")
        logger.info(f"  - Total links found: {summary.get('total_links_found', 0)}")
        logger.info(f"  - External links: {summary.get('external_links', 0)}")
        logger.info(f"  - Internal links: {summary.get('internal_links', 0)}")
        logger.info(f"  - Man page references: {summary.get('man_page_references', 0)}")
        logger.info(f"  - Links needing fix: {summary.get('links_needing_fix', 0)}")
        logger.info(f"  - Links fixed in database: {fixed_count}")
        logger.info(f"  - Pages with fixes needed: {summary.get('pages_with_fixes_needed', 0)}")
    else:
        logger.info("ℹ️  Skipping analysis. Use --analysis flag to generate link analysis report.")
    
    logger.info(f"📝 Full log written to: {LOG_FILE}")


if __name__ == "__main__":
    main()