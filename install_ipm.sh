#!/usr/bin/env bash
set -e

APPNAME="ipm"
INSTALL_DIR="$HOME/.local/share/$APPNAME"
BIN_PATH="/usr/local/bin/$APPNAME"

# Get latest version (info only)
LATEST_VERSION=$(curl -s https://api.github.com/repos/HexmosTech/freeDevTools/releases/latest \
    | grep '"tag_name":' \
    | sed -E 's/.*"tag_name": "([^"]+)".*/\1/')

echo "==> Latest version available: $LATEST_VERSION"

# Always download the latest asset
DOWNLOAD_URL="https://github.com/HexmosTech/freeDevTools/releases/latest/download/ipm"

echo "==> Installing $APPNAME (latest) to $INSTALL_DIR ..."
mkdir -p "$INSTALL_DIR"

echo "==> Downloading from $DOWNLOAD_URL ..."
curl -L "$DOWNLOAD_URL" -o "$INSTALL_DIR/$APPNAME"

chmod +x "$INSTALL_DIR/$APPNAME"

echo "==> Creating symlink at $BIN_PATH ..."
sudo ln -sf "$INSTALL_DIR/$APPNAME" "$BIN_PATH"

echo "==> Installation complete!"
echo "Run it using: $APPNAME"
