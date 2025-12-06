#!/usr/bin/env bash
set -e

APPNAME="ipm"

# Universal cross-platform user-level bin directory
INSTALL_DIR="$HOME/.local/bin"

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
fi

DOWNLOAD_URL="https://github.com/HexmosTech/freeDevTools/releases/latest/download/ipm-$OS-$ARCH$EXT"
TARGET="$INSTALL_DIR/$APPNAME$EXT"

mkdir -p "$INSTALL_DIR"

# Check if valid binary already exists
if [[ -f "$TARGET" ]]; then
    if [[ "$OS" != "windows" ]]; then
        if [[ -x "$TARGET" ]] && file "$TARGET" | grep -q 'ELF\|Mach-O'; then
            echo "==> $APPNAME already installed and valid at $TARGET"
            echo "Run it using: $APPNAME"
            exit 0
        else
            echo "==> Invalid binary found, reinstalling..."
            rm -f "$TARGET"
        fi
    else
        echo "==> $APPNAME already exists at $TARGET"
        echo "Run it using: $TARGET"
        exit 0
    fi
fi

echo "==> Installing $APPNAME ($OS-$ARCH) to $INSTALL_DIR ..."
echo "==> Downloading from $DOWNLOAD_URL ..."
curl -L "$DOWNLOAD_URL" -o "$TARGET"

if [[ "$OS" != "windows" ]]; then
    chmod +x "$TARGET"
fi

echo "==> Installation complete!"

if [[ "$OS" == "windows" ]]; then
    echo "Run it using: $TARGET"
else
    echo "Run it using: $APPNAME"
fi
