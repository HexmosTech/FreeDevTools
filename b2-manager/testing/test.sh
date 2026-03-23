#!/bin/bash

# Configuration
# Path to the test database directory (relative to project root)
DB_DIR="frontend/db/all_dbs"
SRC_DB="$DB_DIR/test-db-back.db"
DB_PATH="$DB_DIR/ipm-db-v6.db"
SQL_FILE="$DB_DIR/test-db.sql"
DST_SQL="$DB_DIR/ipm-db-v6.sql"

# Ensure the source database file exists
if [ ! -f "$SRC_DB" ]; then
    echo "❌ Error: Source database file not found at $SRC_DB"
    echo "Current directory: $(pwd)"
    exit 1
fi

# Ensure the SQL file exists
if [ ! -f "$SQL_FILE" ]; then
    echo "❌ Error: SQL file not found at $SQL_FILE"
    exit 1
fi

echo "Copying $SRC_DB to $DB_PATH..."
cp "$SRC_DB" "$DB_PATH"

echo "Copying $SQL_FILE to $DST_SQL..."
cp "$SQL_FILE" "$DST_SQL"

echo "Executing $DST_SQL against $DB_PATH..."
# We use SQLite to perform the update
sqlite3 "$DB_PATH" < "$DST_SQL"

echo "✅ Database updated."
