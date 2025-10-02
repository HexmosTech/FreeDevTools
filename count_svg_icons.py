import json
import os

def count_svg_icons(input_file="svg_icons.json"):
    """
    Count the number of SVG icons and categories in the svg_icons.json file.
    
    Args:
        input_file (str): Path to the svg_icons.json file
        
    Returns:
        dict: Dictionary containing various counts
    """
    # Check if file exists
    if not os.path.exists(input_file):
        print(f"Error: File {input_file} does not exist")
        return {}
    
    try:
        # Read the JSON file
        with open(input_file, 'r', encoding='utf-8') as f:
            icons_data = json.load(f)
        
        # Initialize counters
        total_entries = len(icons_data)
        icon_count = 0
        category_count = 0
        entries_with_images = 0
        entries_without_images = 0
        
        # Count different types of entries
        for entry in icons_data:
            if entry.get('image', ''):
                # Entry has an image path - it's an individual icon
                icon_count += 1
                entries_with_images += 1
            else:
                # Entry has no image - it's likely a category
                category_count += 1
                entries_without_images += 1
        
        # Prepare results
        results = {
            'total_entries': total_entries,
            'individual_icons': icon_count,
            'categories': category_count,
            'entries_with_images': entries_with_images,
            'entries_without_images': entries_without_images
        }
        
        # Print the results
        print(f"SVG Icons Count Summary:")
        print(f"========================")
        print(f"Total entries in file: {total_entries:,}")
        print(f"Individual SVG icons: {icon_count:,}")
        print(f"Categories: {category_count:,}")
        print(f"Entries with image paths: {entries_with_images:,}")
        print(f"Entries without image paths: {entries_without_images:,}")
        
        # File size information
        file_size = os.path.getsize(input_file)
        print(f"\nFile Information:")
        print(f"================")
        print(f"File size: {file_size:,} bytes ({file_size / (1024*1024):.2f} MB)")
        
        return results
        
    except json.JSONDecodeError as e:
        print(f"Error: Invalid JSON format - {e}")
        return {}
    except Exception as e:
        print(f"Error reading file: {e}")
        return {}

def analyze_svg_categories(input_file="svg_icons.json"):
    """
    Analyze and count icons by category.
    
    Args:
        input_file (str): Path to the svg_icons.json file
        
    Returns:
        dict: Dictionary with category analysis
    """
    if not os.path.exists(input_file):
        print(f"Error: File {input_file} does not exist")
        return {}
    
    try:
        with open(input_file, 'r', encoding='utf-8') as f:
            icons_data = json.load(f)
        
        # Track categories and their icon counts
        category_stats = {}
        
        for entry in icons_data:
            # Extract category from path or name
            path = entry.get('path', '')
            if '/svg_icons/' in path:
                # Extract category from path like "/freedevtools/svg_icons/category_name/icon_name"
                path_parts = path.split('/svg_icons/')
                if len(path_parts) > 1:
                    category_path = path_parts[1]
                    if '/' in category_path:
                        category = category_path.split('/')[0]
                    else:
                        category = category_path
                    
                    if category not in category_stats:
                        category_stats[category] = {
                            'total_entries': 0,
                            'icons': 0,
                            'category_entry': 0
                        }
                    
                    category_stats[category]['total_entries'] += 1
                    
                    if entry.get('image', ''):
                        category_stats[category]['icons'] += 1
                    else:
                        category_stats[category]['category_entry'] += 1
        
        # Sort categories by icon count
        sorted_categories = sorted(category_stats.items(), key=lambda x: x[1]['icons'], reverse=True)
        
        print(f"\nCategory Analysis:")
        print(f"==================")
        print(f"Total categories: {len(category_stats)}")
        print(f"\nTop 10 categories by icon count:")
        print(f"{'Category':<20} {'Icons':<8} {'Total':<8}")
        print(f"{'-'*36}")
        
        for category, stats in sorted_categories[:10]:
            print(f"{category:<20} {stats['icons']:<8} {stats['total_entries']:<8}")
        
        return category_stats
        
    except Exception as e:
        print(f"Error analyzing categories: {e}")
        return {}

if __name__ == "__main__":
    print("Analyzing SVG Icons JSON file...")
    
    # Count total icons
    count_results = count_svg_icons()
    
    # Analyze by categories
    if count_results:
        print("\n" + "="*50)
        analyze_svg_categories()