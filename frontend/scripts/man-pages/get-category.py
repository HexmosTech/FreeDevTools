import sqlite3
import json
import argparse
import os
import sys
from pathlib import Path

# Adjust this path to point to your actual database location
DB_PATH = Path(__file__).parent.parent.parent / "db" / "all_dbs" / "man-pages-db.db"

def get_all_categories(conn):
    """Fetch all unique main categories from the database."""
    cur = conn.cursor()
    query = "SELECT DISTINCT main_category FROM man_pages ORDER BY main_category ASC"
    cur.execute(query)
    return [row[0] for row in cur.fetchall()]

def get_category_details(conn, category_name):
    """
    Query the database for all subcategories and their manpage counts 
    belonging to the main category.
    Returns a list of dicts with name and count.
    """
    cur = conn.cursor()
    
    # Optimized query to just get counts per subcategory
    query = """
        SELECT sub_category, COUNT(*)
        FROM man_pages 
        WHERE main_category = ?
        GROUP BY sub_category
        ORDER BY sub_category ASC
    """
    
    cur.execute(query, (category_name,))
    rows = cur.fetchall()
    
    results = []
    for sub_cat, count in rows:
        results.append({
            "name": sub_cat,
            "manpage_count": count
        })
        
    return results

def generate_json(category_name, output_dir="."):
    if not DB_PATH.exists():
        print(f"Error: Database not found at {DB_PATH}")
        return

    try:
        with sqlite3.connect(DB_PATH) as conn:
            subcategories_data = get_category_details(conn, category_name)
            
            if not subcategories_data:
                print(f"⚠️  Warning: No data found for '{category_name}'. Check the category name spelling.")
            
            # Construct the dictionary
            data = {
                "category": category_name,
                "subcategories": subcategories_data
            }
            
            # Create output filename (e.g., device-files.json)
            safe_filename = category_name.strip().lower().replace(" ", "-").replace("/", "-") + ".json"
            output_path = os.path.join(output_dir, safe_filename)
            
            # Write to file
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(data, f, indent=2)
                
            print(f"✅ Successfully generated: {output_path}")
            print(f"   Processed {len(subcategories_data)} subcategories.")

    except sqlite3.Error as e:
        print(f"Database error: {e}")
    except Exception as e:
        print(f"Error: {e}")

def interactive_mode(output_dir):
    """List all categories and let the user choose one."""
    if not DB_PATH.exists():
        print(f"Error: Database not found at {DB_PATH}")
        return

    try:
        with sqlite3.connect(DB_PATH) as conn:
            categories = get_all_categories(conn)
            
            if not categories:
                print("⚠️  No categories found in the database.")
                return
            
            print("\n📂 Available Categories:")
            print("=" * 30)
            for i, cat in enumerate(categories, 1):
                print(f" {i:2d}. {cat}")
            print("=" * 30)
            
            while True:
                choice = input(f"\nEnter number (1-{len(categories)}) or 'q' to quit: ").strip()
                if choice.lower() in ('q', 'quit', 'exit'):
                    print("Exiting.")
                    return
                
                if choice.isdigit():
                    idx = int(choice)
                    if 1 <= idx <= len(categories):
                        selected_cat = categories[idx - 1]
                        print(f"\nSelected: {selected_cat}")
                        generate_json(selected_cat, output_dir)
                        return
                    else:
                        print(f"❌ Please enter a number between 1 and {len(categories)}.")
                else:
                    print("❌ Invalid input. Please enter a number.")

    except sqlite3.Error as e:
        print(f"Database error: {e}")
    except Exception as e:
        print(f"Error: {e}")

def main():
    parser = argparse.ArgumentParser(description="Generate a JSON file listing subcategories and manpages for a main category.")
    parser.add_argument("category", nargs="?", help="The name of the main category. If omitted, an interactive menu is shown.")
    parser.add_argument("--out", help="Output directory (default: current dir)", default=".")
    
    args = parser.parse_args()
    
    if args.category:
        # Run directly if argument is provided
        generate_json(args.category, args.out)
    else:
        # Run interactive mode if no argument
        interactive_mode(args.out)

if __name__ == "__main__":
    main()