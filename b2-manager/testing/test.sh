#!/bin/bash

# Configuration
# Path to the test database (relative to frontend/ directory where this script is called)
DB_PATH="db/all_dbs/ipm-db-v12.db"
SQL_FILE="db/all_dbs/ipm-db-v12.sql"

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

# Create the SQL content
SQL_CONTENT="INSERT INTO category (slug, name, description, count, updated_at) 
VALUES ('aggregators', '$RANDOM_NAME', 'Servers for accessing many apps and tools through a single MCP server.', 19, '$TIMESTAMP')
ON CONFLICT(slug) DO UPDATE SET
    name = excluded.name,
    updated_at = excluded.updated_at;
"

# Write to test-db.sql
echo "$SQL_CONTENT" > "$SQL_FILE"
echo "Created SQL file: $SQL_FILE"

# Update (or Insert) the row
# We use SQLite to perform the update
sqlite3 "$DB_PATH" <<EOF
$SQL_CONTENT
SELECT c.* FROM category AS c WHERE c.slug = 'aggregators';
EOF

echo "✅ Database updated."
