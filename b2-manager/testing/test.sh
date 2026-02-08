#!/bin/bash

# Configuration
# Path to the test database (relative to frontend/ directory where this script is called)
DB_PATH="db/all_dbs/test-db.db"

# Ensure the database file exists
if [ ! -f "$DB_PATH" ]; then
    echo "❌ Error: Database file not found at $DB_PATH"
    echo "Current directory: $(pwd)"
    exit 1
fi

# Generate random word/name
RANDOM_NAME="Test_$(date +%s)_$RANDOM"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S.%3NZ")

echo "Using Database: $DB_PATH"
echo "Changing 'aggregators' name to: $RANDOM_NAME"

# Update (or Insert) the row
# We use SQLite to perform the update
sqlite3 "$DB_PATH" <<EOF
INSERT INTO category (slug, name, description, count, updated_at) 
VALUES ('aggregators', '$RANDOM_NAME', 'Servers for accessing many apps and tools through a single MCP server.', 19, '$TIMESTAMP')
ON CONFLICT(slug) DO UPDATE SET
    name = excluded.name,
    updated_at = excluded.updated_at;
SELECT c.* FROM category AS c WHERE c.slug = 'aggregators';
EOF

echo "✅ Database updated."
