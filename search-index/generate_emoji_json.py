import os
import json
import glob
import re

def clean_description(text):
    """Clean HTML tags and entities from description text - matches the cleanDescription function in the Astro component"""
    if not text:
        return ''
    # Remove HTML tags
    text = re.sub(r'<[^>]*>', '', text)
    # Replace HTML entities
    text = text.replace('&nbsp;', ' ')
    text = text.replace('&amp;', '&')
    text = text.replace('&lt;', '<')
    text = text.replace('&gt;', '>')
    text = text.replace('&quot;', '"')
    text = text.replace('&#39;', "'")
    # Remove multiple question marks
    text = re.sub(r'\?{2,}', '', text)
    return text.strip()

def find_nested_definition(emoji_data):
    """Find definition in nested structure - matches the findNestedDefinition function in the Astro component"""
    results = []
    
    def visit(node):
        if not node:
            return
        if isinstance(node, str):
            return
        if isinstance(node, list):
            for item in node:
                visit(item)
            return
        if isinstance(node, dict):
            for k, v in node.items():
                if k.lower() == 'definition':
                    if isinstance(v, str):
                        results.append(v)
                    elif isinstance(v, list):
                        for x in v:
                            if isinstance(x, str):
                                results.append(x)
                visit(v)
    
    visit(emoji_data)
    return results[0] if results else None

def generate_id_from_path(path):
    """
    Generate a valid document ID from the path
    Uses hyphens for path separators and underscores for invalid characters
    Example: "/freedevtools/emojis/abacus" -> "emojis-abacus"
    Example: "/freedevtools/emojis/adhesive-bandage" -> "emojis-adhesive-bandage"
    """
    # Remove the base path
    clean_path = path.replace('/freedevtools/emojis/', '')
    # Replace slashes with hyphens (though emojis shouldn't have nested paths)
    clean_path = clean_path.replace('/', '-')
    # Replace any invalid characters (not alphanumeric, hyphen, or underscore) with underscores
    clean_path = re.sub(r'[^a-zA-Z0-9\-_]', '_', clean_path)
    # Add prefix with hyphen
    return f"emojis-{clean_path}"

def generate_emoji_json(output_file="emojis.json"):
    """
    Scan all emoji JSON files and generate a consolidated JSON file with metadata.
    
    Args:
        output_file (str): Path to the output JSON file
        
    Returns:
        list: Generated emoji data
    """
    # Path to emoji data files
    base_path = "frontend/public/emoji_data"
    full_path = os.path.join(os.getcwd(), base_path)
    
    # Get all JSON files
    pattern = os.path.join(full_path, "*", "*.json")
    json_files = glob.glob(pattern)
    
    emojis = []
    
    for file_path in json_files:
        # Extract folder name (slug)
        folder_path = os.path.dirname(file_path)
        slug = os.path.basename(folder_path)
        
        try:
            # Read the emoji JSON file
            with open(file_path, "r", encoding="utf-8") as f:
                emoji_data = json.load(f)
                
                # Extract title using the same logic as the Astro component
                title = emoji_data.get("title", "") or (
                    emoji_data.get("fluentui_metadata", {}).get("cldr", "") or
                    emoji_data.get("slug", "")
                )
                
                # Extract code using the same logic as the Astro component
                code = emoji_data.get("code", "") or (
                    emoji_data.get("fluentui_metadata", {}).get("glyph", "") or 
                    emoji_data.get("glyph", "")
                )
                
                # Extract description using the same logic as the Astro component
                description = clean_description(emoji_data.get("description", ""))
                
                # If description is empty, try to find a nested definition
                if not description:
                    nested_def = find_nested_definition(emoji_data)
                    if nested_def:
                        description = clean_description(nested_def)
                
                # If still no description, create a default one
                if not description:
                    description = f"Learn about the {title} emoji {code}. Find meanings, shortcodes, and usage information."
                
                # Create the path
                emoji_path = f"/freedevtools/emojis/{slug}"
                
                # Generate valid document ID from path
                emoji_id = generate_id_from_path(emoji_path)
                
                # Create emoji entry with required fields
                emoji_entry = {
                    "id": emoji_id,
                    "name": title,
                    "description": description,
                    "code": code,
                    "path": emoji_path,
                    "category": "emojis"
                }
                
                emojis.append(emoji_entry)
                
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    # Sort by name
    emojis.sort(key=lambda x: x["name"])
    
    # Print summary
    print(f"\nSummary:")
    print(f"Total emojis processed: {len(emojis)}")
    
    # Print some example IDs for verification
    if emojis:
        print(f"\nExample generated IDs:")
        for i, emoji in enumerate(emojis[:5]):  # Show first 5 IDs
            print(f"  {emoji['name']}: {emoji['id']}")
        if len(emojis) > 5:
            print(f"  ... and {len(emojis) - 5} more")
    
    # Write to JSON file
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(emojis, f, indent=2, ensure_ascii=False)
    
    print(f"\nGenerated {len(emojis)} emoji entries in {output_file}")
    return emojis

if __name__ == "__main__":
    generate_emoji_json()