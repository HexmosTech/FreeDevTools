#!/usr/bin/env python3
"""
Script to recursively find markdown files in tldr directory and extract frontmatter information.
Outputs: path | filename | frontmatter-path | frontmatter-canonical
"""

import os
import re
import yaml
from pathlib import Path

def extract_frontmatter(file_path):
    """Extract frontmatter from a markdown file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file starts with frontmatter
        if not content.startswith('---'):
            return None, None
        
        # Find the end of frontmatter
        end_marker = content.find('---', 3)
        if end_marker == -1:
            return None, None
        
        # Extract frontmatter content
        frontmatter_content = content[3:end_marker].strip()
        
        # Parse YAML
        try:
            frontmatter = yaml.safe_load(frontmatter_content)
            path = frontmatter.get('path', '')
            canonical = frontmatter.get('canonical', '')
            return path, canonical
        except yaml.YAMLError:
            return None, None
            
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None, None

def fix_frontmatter_paths(file_path, old_path, old_canonical, new_path, new_canonical):
    """Fix the frontmatter paths and canonical URL in a markdown file using simple string replacement."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Simple string replacement
        new_content = content.replace(old_path, new_path)
        new_content = new_content.replace(old_canonical, new_canonical)
        
        # Write back to file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
            
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")
        return False

def find_md_files(root_dir):
    """Recursively find all markdown files and extract required information."""
    root_path = Path(root_dir)
    
    if not root_path.exists():
        print(f"Directory {root_dir} does not exist")
        return
    
    # Find all .md files recursively
    md_files = list(root_path.rglob('*.md'))
    
    for md_file in sorted(md_files):
        # Get relative path from tldr directory
        relative_path = md_file.relative_to(root_path)
        
        # Get directory path (without filename)
        dir_path = relative_path.parent
        
        # Get filename without extension
        filename = md_file.stem
        
        # Extract frontmatter
        frontmatter_path, frontmatter_canonical = extract_frontmatter(md_file)
        
        if frontmatter_path and frontmatter_canonical:
            # Check if the frontmatter path matches the expected pattern
            # Expected pattern: /freedevtools/tldr/{dir_path}/{filename}
            expected_path = f"/freedevtools/tldr/{dir_path}/{filename}"
            expected_canonical = f"https://hexmos.com/freedevtools/tldr/{dir_path}/{filename}/"
            
            # Only process if there's a mismatch
            if frontmatter_path != expected_path:
                print(f"Fixing: {dir_path} | {filename}.md")
                print(f"  Old path: {frontmatter_path}")
                print(f"  New path: {expected_path}")
                print(f"  Old canonical: {frontmatter_canonical}")
                print(f"  New canonical: {expected_canonical}")
                
                # Fix the file
                fix_frontmatter_paths(md_file, frontmatter_path, frontmatter_canonical, expected_path, expected_canonical)
                print("  ✓ Fixed!")
                print()

def main():
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    tldr_dir = '/home/lovestaco/hex/freedevtools/frontend/src/pages/markdown_pages/tldr'
    
    print("Finding markdown files in:", tldr_dir)
    print("=" * 80)
    
    find_md_files(tldr_dir)

if __name__ == "__main__":
    main()
