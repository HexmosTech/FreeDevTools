import os
import json
import glob
import re

def generate_cheatsheet_json(output_file="cheatsheets.json"):
    """
    Scan all cheatsheet HTML files and generate a JSON file with metadata.
    Also add entries for each folder/category in the cheatsheets directory.
    
    Args:
        output_file (str): Path to the output JSON file
        
    Returns:
        list: Generated cheatsheet data
    """
    # Path to cheatsheet files
    base_path = "frontend/src/pages/html_pages/cheatsheets"
    full_path = os.path.join(os.getcwd(), base_path)
    
    # Get all HTML files
    pattern = os.path.join(full_path, "**", "*.html")
    html_files = glob.glob(pattern, recursive=True)
    
    cheatsheets = []
    categories_set = set()  # To track unique categories
    
    # Process all HTML files for cheatsheets
    for file_path in html_files:
        # Extract relative path from base
        rel_path = os.path.relpath(file_path, os.getcwd())
        
        # Extract category and name
        path_parts = file_path.split(os.sep)
        category_index = path_parts.index("cheatsheets") + 1
        if category_index < len(path_parts) - 1:  # Ensure category exists
            category = path_parts[category_index]
            categories_set.add(category)  # Add to our set of categories
            
            filename = os.path.basename(file_path)
            name = filename.replace(".html", "")
            
            # Default description
            description = f"Cheatsheet for {name}"
            
            try:
                # Read the file to extract meta description
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                    
                    # Extract meta description using regex
                    meta_desc_pattern = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', re.DOTALL)
                    meta_desc_match = meta_desc_pattern.search(content)
                    
                    if meta_desc_match:
                        description = meta_desc_match.group(1).strip()
            except Exception as e:
                print(f"Error reading {file_path}: {e}")
                
            # Create cheatsheet entry with only the required fields
            cheatsheet = {
                "name": name,
                "description": description,
                "path": f"/freedevtools/c/{category}/{name}",
                "category": "cheatsheets"
            }
            
            cheatsheets.append(cheatsheet)
    
    # Add entries for each category/folder
    for category in categories_set:
        category_entry = {
            "name": f"{category} cheatsheets",
            "description": f"Collection of cheatsheets for {category}",
            "path": f"/freedevtools/c/{category}",
            "category": "cheatsheets"
        }
        cheatsheets.append(category_entry)
    
    # Sort by name
    cheatsheets.sort(key=lambda x: x["name"])
    
    # Write to JSON file
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(cheatsheets, f, indent=2)
    
    print(f"Generated {len(cheatsheets)} entries ({len(categories_set)} categories and {len(cheatsheets) - len(categories_set)} cheatsheets) in {output_file}")
    return cheatsheets

if __name__ == "__main__":
    generate_cheatsheet_json()