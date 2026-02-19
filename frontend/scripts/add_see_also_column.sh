#!/bin/bash
# Script to add see_also column to all relevant database tables

set -e

DB_DIR="db/all_dbs"

echo "Adding see_also column to all databases..."

# MCP pages table
echo "Adding to mcp-db-v6.db (mcp_pages)..."
sqlite3 "$DB_DIR/mcp-db-v6.db" "ALTER TABLE mcp_pages ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# Cheatsheet table
echo "Adding to cheatsheets-db-v5.db (cheatsheet)..."
sqlite3 "$DB_DIR/cheatsheets-db-v5.db" "ALTER TABLE cheatsheet ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# TLDR pages table
echo "Adding to tldr-db-v5.db (pages)..."
sqlite3 "$DB_DIR/tldr-db-v5.db" "ALTER TABLE pages ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# SVG icons table
echo "Adding to svg-icons-db-v5.db (icon)..."
sqlite3 "$DB_DIR/svg-icons-db-v5.db" "ALTER TABLE icon ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# PNG icons table
echo "Adding to png-icons-db-v5.db (icon)..."
sqlite3 "$DB_DIR/png-icons-db-v5.db" "ALTER TABLE icon ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# IPM data table
echo "Adding to ipm-db-v6.db (ipm_data)..."
sqlite3 "$DB_DIR/ipm-db-v6.db" "ALTER TABLE ipm_data ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# Man pages table
echo "Adding to man-pages-db-v5.db (man_pages)..."
sqlite3 "$DB_DIR/man-pages-db-v5.db" "ALTER TABLE man_pages ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

# Emojis table
echo "Adding to emoji-db-v5.db (emojis)..."
sqlite3 "$DB_DIR/emoji-db-v5.db" "ALTER TABLE emojis ADD COLUMN see_also TEXT DEFAULT '';" 2>/dev/null || echo "  Column may already exist or table not found"

echo "Done!"

