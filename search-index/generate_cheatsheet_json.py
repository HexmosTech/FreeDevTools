import os
import json
import glob
import re

def generate_id_from_path(path):
    """
    Generate a valid document ID from the path
    Uses hyphens for path separators and underscores for invalid characters
    Example: "/freedevtools/c/tools/jq" -> "cheatsheets-tools-jq"
    Example: "/freedevtools/c/cmd" -> "cheatsheets-cmd"
    """
    # Remove the base path
    clean_path = path.replace('/freedevtools/c/', '')
    # Replace slashes with hyphens
    clean_path = clean_path.replace('/', '-')
    # Replace any invalid characters (not alphanumeric, hyphen, or underscore) with underscores
    clean_path = re.sub(r'[^a-zA-Z0-9\-_]', '_', clean_path)
    # Add prefix with hyphen
    return f"cheatsheets-{clean_path}"

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
                
            # Create the path
            cheatsheet_path = f"/freedevtools/c/{category}/{name}"
            
            # Generate valid document ID from path
            cheatsheet_id = generate_id_from_path(cheatsheet_path)
                
            # Create cheatsheet entry with only the required fields
            cheatsheet = {
                "id": cheatsheet_id,
                "name": name,
                "description": description,
                "path": cheatsheet_path,
                "category": "cheatsheets"
            }
            
            cheatsheets.append(cheatsheet)
    
    # Add entries for each category/folder
    for category in categories_set:
        # Create the path for category
        category_path = f"/freedevtools/c/{category}"
        
        # Generate valid document ID from path
        category_id = generate_id_from_path(category_path)
        
        category_entry = {
            "id": category_id,
            "name": f"{category} cheatsheets",
            "description": f"Collection of cheatsheets for {category}",
            "path": category_path,
            "category": "cheatsheets"
        }
        cheatsheets.append(category_entry)
    
    # Sort by name
    cheatsheets.sort(key=lambda x: x["name"])
    
    # Print summary
    print(f"\nSummary:")
    print(f"Categories found: {len(categories_set)}")
    print(f"Individual cheatsheets: {len(cheatsheets) - len(categories_set)}")
    print(f"Total entries: {len(cheatsheets)}")
    
    # Print some example IDs for verification
    if cheatsheets:
        print(f"\nExample generated IDs:")
        for i, cheatsheet in enumerate(cheatsheets[:5]):  # Show first 5 IDs
            print(f"  {cheatsheet['name']}: {cheatsheet['id']}")
        if len(cheatsheets) > 5:
            print(f"  ... and {len(cheatsheets) - 5} more")
    
    # Write to JSON file
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(cheatsheets, f, indent=2)
    
    print(f"\nGenerated {len(cheatsheets)} entries ({len(categories_set)} categories and {len(cheatsheets) - len(categories_set)} cheatsheets) in {output_file}")
    return cheatsheets

if __name__ == "__main__":
    generate_cheatsheet_json()