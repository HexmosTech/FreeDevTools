#!/bin/bash
# Convert emoji and PNG databases to WAL mode for better concurrent read performance
# Run this when the server is stopped

EMOJI_DB="db/all_dbs/emoji-db-v1.db"
PNG_DB="db/all_dbs/png-icons-db-v1.db"

convert_to_wal() {
    local db_path=$1
    local db_name=$2
    
    if [ ! -f "$db_path" ]; then
        echo "⚠️  Warning: Database file not found: $db_path (skipping)"
        return 1
    fi
    
    echo "Converting $db_name to WAL mode..."
    
    # Check current mode
    current_mode=$(sqlite3 "$db_path" "PRAGMA journal_mode;" 2>/dev/null)
    echo "  Current mode: $current_mode"
    
    if [ "$current_mode" = "wal" ]; then
        echo "  ✅ Already in WAL mode"
        return 0
    fi
    
    # Convert to WAL mode
    sqlite3 "$db_path" "PRAGMA journal_mode=WAL; VACUUM;" 2>&1
    
    if [ $? -eq 0 ]; then
        new_mode=$(sqlite3 "$db_path" "PRAGMA journal_mode;" 2>/dev/null)
        echo "  ✅ Successfully converted to WAL mode (now: $new_mode)"
        return 0
    else
        echo "  ❌ Failed to convert to WAL mode"
        return 1
    fi
}

echo "=== Converting databases to WAL mode ==="
echo ""

convert_to_wal "$EMOJI_DB" "Emoji database"
echo ""

convert_to_wal "$PNG_DB" "PNG database"
echo ""

echo "=== Conversion complete ==="
echo ""
echo "After restarting the server, you should see -wal and -shm files for both databases."
echo "These files enable better concurrent read performance."

