#!/bin/bash
# scripts/background_static_indexing.sh

# Parse arguments
SECTION="all"
for arg in "$@"; do
    case "$arg" in
        --section=*)
            SECTION="${arg#*=}"
            shift
            ;;
    esac
done

ENABLE_STATIC_CACHE=$(grep -E "^enable_static_cache\s*=" fdt-prod.toml 2>/dev/null | sed "s/.*=\s*\(true\|false\).*/\1/" | tr -d " ")

if [ "$ENABLE_STATIC_CACHE" = "true" ]; then
    DISCORD_WEBHOOK=$(grep -E "^discord_webhook_url\s*=" fdt-prod.toml 2>/dev/null | sed "s/.*=\s*\"\([^\"]*\)\".*/\1/" | tr -d " " || echo "")
    START_TIME=$(date +%s)
    START_DATE=$(TZ="Asia/Kolkata" date "+%Y-%m-%d %I:%M:%S %p IST")
    MSG_START="🚀 **Freedevtools Static Deployment Initiated**\n**Section:** $SECTION\n**Started at:** $START_DATE\n**Cache Dir:** static/freedevtools/\n**How to stop:** \`kill -9 \$(pgrep -f static-generation-$SECTION)\`"
    
    if [ -n "$DISCORD_WEBHOOK" ]; then 
        curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG_START\"}" "$DISCORD_WEBHOOK" > /dev/null
    fi
    
    make clear-static-cache
    make "static-generation-$SECTION"
    
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    DURATION_MIN=$((DURATION / 60))
    DURATION_SEC=$((DURATION % 60))
    if [ $DURATION_MIN -gt 0 ]; then
        TIME_TAKEN="${DURATION_MIN}m ${DURATION_SEC}s"
    else
        TIME_TAKEN="${DURATION_SEC}s"
    fi
    
    if [ -d "static/freedevtools/" ]; then
        SIZE=$(du -sh static/freedevtools/ | cut -f1)
        COUNT=$(find static/freedevtools/ -type f | wc -l)
        STORAGE_LEFT=$(df -h / | awk 'NR==2 {print $4}')
        MSG="✅ **FreeDevtools Static Deployment Completed**\n🕒 **Started at:** $START_DATE\n⏱ **Time taken:** ${TIME_TAKEN}\n📦 **Total size:** ${SIZE}\n📄 **Pages indexed:** ${COUNT}\n💾 **Storage left in server:** ${STORAGE_LEFT}\n**Cache Dir:** static/freedevtools/"
        if [ -n "$DISCORD_WEBHOOK" ]; then 
            curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG\"}" "$DISCORD_WEBHOOK" > /dev/null
        fi
    else
        MSG="❌ **FreeDevtols Static Deployment Failed**\nDirectory not found.\n🕒 **Started at:** $START_DATE\n⏱ **Time taken:** ${TIME_TAKEN}"
        if [ -n "$DISCORD_WEBHOOK" ]; then 
            curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG\"}" "$DISCORD_WEBHOOK" > /dev/null
        fi
    fi
else
    echo "Static HTML deployment skipped (enable_static_cache != true in fdt-prod.toml)."
fi
