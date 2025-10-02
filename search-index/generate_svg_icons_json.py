import json
import os
import re

def generate_svg_icons_json(input_file="frontend/src/pages/svg_icons/cluster.json", output_file="svg_icons.json"):
    """
    Parse the cluster.json file and generate a consolidated JSON file for SVG icons.
    Only includes individual icons with image paths, excludes category entries.
    
    Args:
        input_file (str): Path to the input cluster.json file
        output_file (str): Path to the output JSON file
        
    Returns:
        list: Generated SVG icon data
    """
    # Ensure the input file exists
    if not os.path.exists(input_file):
        print(f"Error: Input file {input_file} does not exist")
        abs_path = os.path.abspath(input_file)
        print(f"Absolute path would be: {abs_path}")
        print(f"Current working directory: {os.getcwd()}")
        return []
    
    # Read the cluster.json file
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            file_content = f.read()
            print(f"File size: {len(file_content)} bytes")
            try:
                data = json.loads(file_content)
                
                # The data is wrapped in a "clusters" object
                if "clusters" in data:
                    cluster_data = data["clusters"]
                    print(f"Found 'clusters' object with {len(cluster_data)} categories")
                else:
                    print("Warning: 'clusters' key not found in JSON data")
                    cluster_data = {}
                    
            except json.JSONDecodeError as je:
                print(f"JSON decode error: {je}")
                # Print a small portion of the file to help debug
                print(f"File preview: {file_content[:200]}...")
                return []
    except Exception as e:
        print(f"Error reading cluster JSON file: {e}")
        return []
    
    def generate_id_from_path(path):
        """
        Generate a valid document ID from the path
        Uses hyphens for path separators and underscores for invalid characters
        Example: "/freedevtools/svg_icons/circle/0-circle" -> "svg-icons-circle-0-circle"
        """
        # Remove the base path
        clean_path = path.replace('/freedevtools/svg_icons/', '')
        # Replace slashes with hyphens
        clean_path = clean_path.replace('/', '-')
        # Replace any invalid characters (not alphanumeric, hyphen, or underscore) with underscores
        clean_path = re.sub(r'[^a-zA-Z0-9\-_]', '_', clean_path)
        # Add prefix with hyphen
        return f"svg-icons-{clean_path}"
    
    icons = []
    category_count = 0
    icon_count = 0
    
    # Process each category in the cluster data
    print("Processing categories:")
    for category_id, category_data in cluster_data.items():
        print(f"Processing category ID: {category_id}")
        
        # Check if the category data is in the expected format
        if not isinstance(category_data, dict):
            print(f"  Warning: Category data is not a dictionary, got {type(category_data)}")
            continue
            
        category_name = category_data.get("name", "")
        print(f"  Category name: {category_name}")
        
        source_folder = category_data.get("source_folder", category_name)
        category_count += 1
        
        # Process each file in the category - ONLY INDIVIDUAL ICONS
        file_names = category_data.get("fileNames", [])
        print(f"  Found {len(file_names)} files in this category")
        
        for file_info in file_names:
            if not isinstance(file_info, dict):
                print(f"  Warning: File info is not a dictionary, got {type(file_info)}")
                continue
                
            file_name = file_info.get("fileName", "")
            if not file_name:
                print("  Warning: Empty file name, skipping")
                continue
                
            print(f"  Processing file: {file_name}")
                
            # Remove leading underscore if present and get the name without extension
            icon_name = file_name.lstrip('_').replace('.svg', '')
            
            # Format the name to be more user-friendly
            display_name = icon_name.replace('_', ' ').replace('-', ' ').title()
            
            # Create the path
            icon_path = f"/freedevtools/svg_icons/{source_folder}/{icon_name}"
            
            # Generate valid document ID from path
            icon_id = generate_id_from_path(icon_path)
            
            # Create entry for the individual icon ONLY
            icon_entry = {
                "id": icon_id,
                "name": display_name,
                "image": f"/svg_icons/{source_folder}/{file_name}",
                "description": file_info.get("description", f"SVG icon for {display_name}"),
                "path": icon_path,
                "category": "svg_icons"
            }
            
            icons.append(icon_entry)
            icon_count += 1
    
    # Sort by name
    icons.sort(key=lambda x: x["name"])
    
    # Print summary
    print(f"\nSummary:")
    print(f"Categories processed: {category_count}")
    print(f"Individual icons processed: {icon_count}")
    print(f"Total entries (icons only): {len(icons)}")
    
    # Print some example IDs for verification
    if icons:
        print(f"\nExample generated IDs:")
        for i, icon in enumerate(icons[:5]):  # Show first 5 IDs
            print(f"  {icon['name']}: {icon['id']}")
        if len(icons) > 5:
            print(f"  ... and {len(icons) - 5} more")
    
    # If we have entries, write to JSON file
    if icons:
        try:
            with open(output_file, "w", encoding="utf-8") as f:
                json.dump(icons, f, indent=2)
            print(f"Generated {len(icons)} SVG icon entries in {output_file}")
        except Exception as e:
            print(f"Error writing output file: {e}")
    else:
        print("No entries generated, skipping output file creation")
        
    return icons

if __name__ == "__main__":
    print("Starting SVG icons JSON generation (individual icons only)...")
    generate_svg_icons_json()
    print("Process completed")