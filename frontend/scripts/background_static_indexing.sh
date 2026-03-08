#!/bin/bash
# scripts/background_static_indexing.sh

ENABLE_STATIC_CACHE=$(grep -E "^enable_static_cache\s*=" fdt-prod.toml 2>/dev/null | sed "s/.*=\s*\(true\|false\).*/\1/" | tr -d " ")

if [ "$ENABLE_STATIC_CACHE" = "true" ]; then
    DISCORD_WEBHOOK=$(grep -E "^discord_webhook_url\s*=" fdt-prod.toml 2>/dev/null | sed "s/.*=\s*\"\([^\"]*\)\".*/\1/" | tr -d " " || echo "")
    START_TIME=$(date +%s)
    START_DATE=$(date "+%Y-%m-%d %H:%M:%S")
    MSG_START="🚀 **Freedevtools Static Deployment Inisitated**\n**Section:** all\n**Started at:** $START_DATE\n**Cache Dir:** static/freedevtools/\n**How to stop:** \`kill -9 \$(pgrep -f static-generation-all)\`"
    
    if [ -n "$DISCORD_WEBHOOK" ]; then 
        curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG_START\"}" "$DISCORD_WEBHOOK" > /dev/null
    fi
    
    make clear-static-cache
    make static-generation-cheatsheets
    
    END_TIME=$(date +%s)
    DURATION=$((END_TIME - START_TIME))
    
    if [ -d "static/freedevtools/" ]; then
        SIZE=$(du -sh static/freedevtools/ | cut -f1)
        COUNT=$(find static/freedevtools/ -type f | wc -l)
        STORAGE_LEFT=$(df -h / | awk 'NR==2 {print $4}')
        MSG="✅ **FreeDevtools Static Deployment Completed**\n⏱ **Time taken:** ${DURATION}s\n📦 **Total size:** ${SIZE}\n📄 **Pages indexed:** ${COUNT}\n💾 **Storage left in server:** ${STORAGE_LEFT}\n**Cache Dir:** static/freedevtools/"
        if [ -n "$DISCORD_WEBHOOK" ]; then 
            curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG\"}" "$DISCORD_WEBHOOK" > /dev/null
        fi
    else
        MSG="❌ **FreeDevtols Static Deployment Failed**\nDirectory not found.\n⏱ **Time taken:** ${DURATION}s"
        if [ -n "$DISCORD_WEBHOOK" ]; then 
            curl -s -H "Content-Type: application/json" -d "{\"content\": \"$MSG\"}" "$DISCORD_WEBHOOK" > /dev/null
        fi
    fi
else
    echo "Static HTML deployment skipped (enable_static_cache != true in fdt-prod.toml)."
fi
