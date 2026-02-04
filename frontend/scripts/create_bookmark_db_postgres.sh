#!/bin/bash
# Script to create bookmark database in PostgreSQL
# Reads configuration from .env file

set -e

# Load .env file if it exists
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

DB_HOST="${FDT_PG_DB_HOST}"
DB_PORT="${FDT_PG_DB_PORT:-5432}"
DB_USER="${FDT_PG_DB_USER:-freedevtools_user}"
DB_PASSWORD="${FREEDEVTOOLS_USER_PASSWORD}"
DB_NAME="${FDT_PG_DB_NAME:-freedevtools}"

if [ -z "$DB_HOST" ] || [ -z "$DB_PASSWORD" ]; then
    echo "Error: FDT_PG_DB_HOST and FREEDEVTOOLS_USER_PASSWORD must be set in .env file"
    exit 1
fi

export PGPASSWORD="$DB_PASSWORD"

echo "Creating database '$DB_NAME' if it doesn't exist..."
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d postgres -c "CREATE DATABASE $DB_NAME;" 2>/dev/null || echo "Database may already exist"

echo "Creating bookmarks table..."
psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" <<EOF
CREATE TABLE IF NOT EXISTS bookmarks (
    uId TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT NOT NULL,
    category_hash_id BIGINT NOT NULL,
    uId_hash_id BIGINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    PRIMARY KEY (uId_hash_id, url)
);

CREATE INDEX IF NOT EXISTS idx_bookmarks_uid ON bookmarks(uId_hash_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_category ON bookmarks(category_hash_id);
CREATE INDEX IF NOT EXISTS idx_bookmarks_url ON bookmarks(url);
EOF

echo "✅ Created bookmark database and table in PostgreSQL: $DB_NAME.bookmarks"

