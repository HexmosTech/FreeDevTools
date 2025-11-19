#!/usr/bin/env python3
"""
Script to recursively find markdown files in tldr directory and extract frontmatter information.
Outputs a JSON file containing name, description, and path for each TLDR page.
"""

import os
import yaml
import json
from pathlib import Path

def extract_frontmatter_data(file_path):
    """Extract name, description, and path from a markdown file's frontmatter."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file starts with frontmatter
        if not content.startswith('---'):
            return None
        
        # Find the end of frontmatter
        end_marker = content.find('---', 3)
        if end_marker == -1:
            return None
        
        # Extract frontmatter content
        frontmatter_content = content[3:end_marker].strip()
        
        # Parse YAML
        try:
            frontmatter = yaml.safe_load(frontmatter_content)
            # Get only the requested fields
            return {
                'name': frontmatter.get('name', ''),
                'description': frontmatter.get('description', ''),
                'path': frontmatter.get('path', '')
            }
        except yaml.YAMLError as e:
            print(f"YAML parsing error in {file_path}: {e}")
            return None
            
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None

def find_md_files_to_json(root_dir, output_file):
    """Recursively find all markdown files, extract information, and save as JSON."""
    root_path = Path(root_dir)
    
    if not root_path.exists():
        print(f"Directory {root_dir} does not exist")
        return
    
    # Find all .md files recursively
    md_files = list(root_path.rglob('*.md'))
    result = []
    
    for md_file in sorted(md_files):
        # Extract frontmatter data
        frontmatter_data = extract_frontmatter_data(md_file)
        
        if not frontmatter_data:
            print(f"Warning: No valid frontmatter in {md_file}")
            continue
        
        # Add file path information
        # frontmatter_data['filepath'] = str(md_file.relative_to(root_path))
        
        # Add to result
        result.append(frontmatter_data)
    
    # Save the result as JSON
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2)
    
    print(f"Processed {len(result)} markdown files")
    print(f"Results saved to {output_file}")
    return result

def main():
    # Get the directory where this script is located
    script_dir = Path(__file__).parent
    tldr_dir = Path(os.path.dirname(os.path.abspath(__file__))).parent / "markdown_pages" / "tldr"
    
    if not tldr_dir.exists():
        print(f"Directory not found: {tldr_dir}")
        tldr_dir = input("Please enter the path to the tldr directory: ")
        tldr_dir = Path(tldr_dir)
    
    output_file = script_dir / "tldr_pages.json"
    
    print("Finding markdown files in:", tldr_dir)
    print("Output will be saved to:", output_file)
    print("=" * 80)
    
    find_md_files_to_json(tldr_dir, output_file)

if __name__ == "__main__":
    main()