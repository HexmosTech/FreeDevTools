import sqlite3
import os

DB_PATH = 'db/all_dbs/cheatsheets-db-v4.db'

def remove_script_tags():
    if not os.path.exists(DB_PATH):
        print(f"Database not found at {DB_PATH}")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Find rows with the script
    cursor.execute("SELECT hash_id, content FROM cheatsheet WHERE content LIKE '%highlight.min.js%'")
    rows = cursor.fetchall()
    
    print(f"Found {len(rows)} rows to process.")
    
    updated_count = 0
    
    for hash_id, content in rows:
        # We look for the specific script tag and the following block
        # We can try to be flexible with whitespace
        
        # Target start: <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
        start_marker = '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>'
        
        start_idx = content.find(start_marker)
        
        if start_idx == -1:
            print(f"Skipping {hash_id}: marker not found (unexpected since matched LIKE)")
            continue
            
        # We also want to remove the subsequent <script>hljs.highlightAll();</script>
        # And any surrounding whitespace/newlines that attach it to the previous content
        
        # Let's inspect what's after the start_marker
        rest = content[start_idx + len(start_marker):]
        
        # We expect a second script tag close by
        # Pattern: [whitespace] <script> [whitespace] hljs.highlightAll(); [whitespace] </script>
        
        end_marker = 'hljs.highlightAll();\n    </script>'
        # Or just look for the next </script> after the first one is implicitly closed by start_marker which is a one-liner src?
        # HTML: <script src="..."></script> [whitespace] <script>...</script>
        
        # Let's try to remove from `start_idx` up to the end of the *second* script tag.
        
        # Find the end of the block
        # The block ends with </script>
        # Since start_marker includes </script>, we need to find the NEXT </script> after that.
        
        next_script_close = rest.find('</script>')
        if next_script_close != -1:
            # This accounts for the block:
            # <script>
            #     hljs.highlightAll();
            # </script>
            
            # The length to remove is start_marker length + index of next </script> + len('</script>')
            end_idx = start_idx + len(start_marker) + next_script_close + len('</script>')
            
            # Also check for preceding newline/indents if we want a clean removal?
            # The repr showed: '\n    \n    <script ...'
            # Let's try to strip preceding whitespace if it makes sense, but safe removal first.
            
            new_content = content[:start_idx] + content[end_idx:]
            
            # Optional: Clean up trailing whitespace left behind if valid
            new_content = new_content.rstrip()
            
            cursor.execute("UPDATE cheatsheet SET content = ? WHERE hash_id = ?", (new_content, hash_id))
            updated_count += 1
        else:
            print(f"Skipping {hash_id}: Could not find closing script tag for the second block.")

    conn.commit()
    conn.close()
    print(f"Updated {updated_count} rows.")

if __name__ == "__main__":
    remove_script_tags()
