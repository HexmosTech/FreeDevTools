#!/bin/bash
# Script to check how many see_also rows are not filled in each category

set -e

DB_DIR="db/all_dbs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo "=========================================="
echo "Checking See Also Empty Rows by Category"
echo "=========================================="
echo ""

TOTAL_EMPTY=0
TOTAL_ROWS=0

# Function to print category summary
print_category_summary() {
    local db_name=$1
    local table_name=$2
    local category_col=$3
    local query=$4
    
    if [ ! -f "$DB_DIR/$db_name" ]; then
        echo -e "${YELLOW}⚠️  Database not found: $db_name${NC}"
        echo ""
        return
    fi
    
    echo -e "${BLUE}📊 $db_name → $table_name${NC}"
    
    # Get total rows
    total=$(sqlite3 "$DB_DIR/$db_name" "SELECT COUNT(*) FROM $table_name;" 2>/dev/null || echo "0")
    TOTAL_ROWS=$((TOTAL_ROWS + total))
    
    # Count total empty first
    empty_total=$(sqlite3 "$DB_DIR/$db_name" "SELECT COUNT(*) FROM $table_name WHERE see_also IS NULL OR see_also = '' OR see_also = '[]';" 2>/dev/null || echo "0")
    TOTAL_EMPTY=$((TOTAL_EMPTY + empty_total))
    
    if [ "$empty_total" -eq 0 ]; then
        echo -e "  ${GREEN}✅ All rows have see_also filled (Total: $total)${NC}"
        echo ""
        return
    fi
    
    # Get empty see_also count by category (only if there are empty rows)
    empty_by_category=$(sqlite3 "$DB_DIR/$db_name" "$query" 2>/dev/null || echo "")
    
    if [ -z "$empty_by_category" ]; then
        # Query might have failed, but we know there are empty rows
        echo -e "  ${RED}❌ Empty see_also: $empty_total / $total${NC}"
        echo -e "  ${YELLOW}⚠️  Could not get category breakdown${NC}"
    else
        echo -e "  ${RED}❌ Empty see_also: $empty_total / $total${NC}"
        echo ""
        echo "  Breakdown by category:"
        echo "$empty_by_category" | while IFS='|' read -r category count; do
            if [ -n "$category" ] && [ -n "$count" ]; then
                printf "    %-30s %5s\n" "$category" "$count"
            fi
        done
    fi
    echo ""
}

# 1. MCP Pages - category_id is a hash, show category_id values
print_category_summary "mcp-db-v6.db" "mcp_pages" "category" \
    "SELECT 'category_id: ' || category_id, COUNT(*) 
     FROM mcp_pages 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY category_id 
     ORDER BY COUNT(*) DESC;"

# 2. Cheatsheets
print_category_summary "cheatsheets-db-v5.db" "cheatsheet" "category" \
    "SELECT category, COUNT(*) 
     FROM cheatsheet 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY category 
     ORDER BY COUNT(*) DESC;"

# 3. TLDR Pages - extract platform from URL (format: /freedevtools/tldr/{platform}/{command}/)
print_category_summary "tldr-db-v5.db" "pages" "platform" \
    "SELECT 
        replace(replace(url, '/freedevtools/tldr/', ''), '/' || substr(replace(url, '/freedevtools/tldr/', ''), instr(replace(url, '/freedevtools/tldr/', ''), '/') + 1), '') as platform,
        COUNT(*) 
     FROM pages 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY platform 
     ORDER BY COUNT(*) DESC;"

# 4. SVG Icons
print_category_summary "svg-icons-db-v5.db" "icon" "cluster" \
    "SELECT cluster, COUNT(*) 
     FROM icon 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY cluster 
     ORDER BY COUNT(*) DESC;"

# 5. PNG Icons
print_category_summary "png-icons-db-v5.db" "icon" "cluster" \
    "SELECT cluster, COUNT(*) 
     FROM icon 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY cluster 
     ORDER BY COUNT(*) DESC;"

# 6. Installerpedia (IPM)
print_category_summary "ipm-db-v6.db" "ipm_data" "category" \
    "SELECT COALESCE(c.repo_type, 'Unknown'), COUNT(*) 
     FROM ipm_data i 
     LEFT JOIN ipm_category c ON i.category_hash = c.category_hash 
     WHERE i.see_also IS NULL OR i.see_also = '' OR i.see_also = '[]'
     GROUP BY c.repo_type 
     ORDER BY COUNT(*) DESC;"

# 7. Man Pages
print_category_summary "man-pages-db-v5.db" "man_pages" "category" \
    "SELECT main_category || '/' || sub_category, COUNT(*) 
     FROM man_pages 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY main_category, sub_category 
     ORDER BY COUNT(*) DESC;"

# 8. Emojis
print_category_summary "emoji-db-v5.db" "emojis" "category" \
    "SELECT COALESCE(category, 'Uncategorized'), COUNT(*) 
     FROM emojis 
     WHERE see_also IS NULL OR see_also = '' OR see_also = '[]'
     GROUP BY category 
     ORDER BY COUNT(*) DESC;"

# Summary
echo "=========================================="
echo -e "${BLUE}📈 Summary${NC}"
echo "=========================================="
echo -e "Total rows checked: ${GREEN}$TOTAL_ROWS${NC}"
echo -e "Total empty see_also: ${RED}$TOTAL_EMPTY${NC}"
if [ "$TOTAL_ROWS" -gt 0 ]; then
    filled=$((TOTAL_ROWS - TOTAL_EMPTY))
    percentage=$(awk "BEGIN {printf \"%.1f\", ($filled / $TOTAL_ROWS) * 100}")
    echo -e "Filled: ${GREEN}$filled${NC} (${GREEN}$percentage%${NC})"
fi
echo ""

