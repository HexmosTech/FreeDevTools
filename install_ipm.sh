#!/usr/bin/env bash
set -e

APPNAME="ipm"

# Global installation dir for Linux/macOS
INSTALL_DIR="/usr/local/bin"

# Detect OS + ARCH
OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

# Normalize architecture
case "$ARCH" in
    x86_64) ARCH="amd64" ;;
    aarch64) ARCH="arm64" ;;
esac

EXT=""
if [[ "$OS" == "mingw"* || "$OS" == "cygwin"* || "$OS" == "msys"* ]]; then
    OS="windows"
    EXT=".exe"
    INSTALL_DIR="$USERPROFILE/.local/bin"
fi

TARGET="$INSTALL_DIR/$APPNAME$EXT"
DOWNLOAD_URL="https://github.com/HexmosTech/freeDevTools/releases/latest/download/ipm-$OS-$ARCH$EXT"

###################################
# On Linux/macOS, prompt for sudo upfront
###################################
if [[ "$OS" != "windows" ]]; then
    echo "==> Installation requires sudo. You may be asked for your password."
    sudo -v  # prompt for password upfront
fi

###################################
# Ensure install dir exists
###################################
if [[ "$OS" != "windows" ]]; then
    sudo mkdir -p "$INSTALL_DIR"
fi

###################################
# Check existing binary
###################################
if [[ -f "$TARGET" ]]; then
    if [[ "$OS" != "windows" ]]; then
        if [[ -x "$TARGET" ]] && file "$TARGET" | grep -q 'ELF\|Mach-O'; then
            echo "==> $APPNAME already installed and valid at $TARGET"
            echo "Run it using: $APPNAME"
            exit 0
        else
            echo "==> Invalid binary found, reinstalling..."
            sudo rm -f "$TARGET"
        fi
    else
        echo "==> $APPNAME already exists at $TARGET"
        echo "Run it using: $TARGET"
        exit 0
    fi
fi

###################################
# Download binary
###################################
echo "==> Installing $APPNAME ($OS-$ARCH) to $INSTALL_DIR ..."
echo "==> Downloading from $DOWNLOAD_URL ..."

if [[ "$OS" != "windows" ]]; then
    sudo curl -L "$DOWNLOAD_URL" -o "$TARGET"
    sudo chmod +x "$TARGET"
else
    curl -L "$DOWNLOAD_URL" -o "$TARGET"
fi

echo "==> Installation complete!"

if [[ "$OS" == "windows" ]]; then
    echo "Run it using: $TARGET"
else
    echo "Run it using: $APPNAME"
fi
