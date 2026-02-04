#!/bin/bash
# Toggle freedevtools staging config: SSR or static
# Usage:
#   ./toggle_staging_config.sh --ssr
#   ./toggle_staging_config.sh --static

set -e

if [ "$EUID" -ne 0 ]; then
    echo "⚠️  Please run as root (sudo)"
    exit 1
fi

if [ "$1" != "--ssr" ] && [ "$1" != "--static" ]; then
    echo "Usage: $0 --ssr | --static"
    exit 1
fi

TARGET="$1"

SITES_AVAILABLE="/etc/nginx/sites-available"
SITES_ENABLED="/etc/nginx/sites-enabled"
SYMLINK_NAME="hexmos.com"

# Determine which file to point to
if [ "$TARGET" == "--ssr" ]; then
    CONFIG_FILE="$SITES_AVAILABLE/hexmos.com-ssr"
else
    CONFIG_FILE="$SITES_AVAILABLE/hexmos.com"
fi

# Remove existing symlink
if [ -L "$SITES_ENABLED/$SYMLINK_NAME" ] || [ -e "$SITES_ENABLED/$SYMLINK_NAME" ]; then
    sudo rm -f "$SITES_ENABLED/$SYMLINK_NAME"
fi

# Create new symlink
sudo ln -s "$CONFIG_FILE" "$SITES_ENABLED/$SYMLINK_NAME"
echo "🔄 Symlink updated: $SYMLINK_NAME -> $CONFIG_FILE"

# Test Nginx config
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
echo "✅ Nginx reloaded with $TARGET configuration"

