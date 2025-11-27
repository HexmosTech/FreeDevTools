#!/usr/bin/env bash
set -e

# Installer for ipm CLI
APPNAME="ipm"
VERSION="v0.1.0"
INSTALL_DIR="$HOME/.local/share/$APPNAME"
BIN_PATH="/usr/local/bin/$APPNAME"

# GitHub release URL 
DOWNLOAD_URL="https://github.com/HexmosTech/freeDevTools/releases/download/$VERSION/ipm"

echo "==> Installing $APPNAME ($VERSION) to $INSTALL_DIR ..."

# Create install directory
mkdir -p "$INSTALL_DIR"

# Download binary
echo "==> Downloading $APPNAME from $DOWNLOAD_URL ..."
curl -L "$DOWNLOAD_URL" -o "$INSTALL_DIR/$APPNAME"

# Make executable
chmod +x "$INSTALL_DIR/$APPNAME"

# Create global symlink
echo "==> Creating symlink at $BIN_PATH ..."
sudo ln -sf "$INSTALL_DIR/$APPNAME" "$BIN_PATH"

echo "==> Installation complete!"
echo "Run it from anywhere using: $APPNAME"
