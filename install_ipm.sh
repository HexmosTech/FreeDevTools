#!/usr/bin/env bash
set -e

APPNAME="ipm"
INSTALL_DIR="$HOME/.local/share/$APPNAME"
BIN_PATH="/usr/local/bin/$APPNAME"

# Detect OS + ARCH
OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

# Normalize architecture
if [ "$ARCH" = "x86_64" ]; then
    ARCH="amd64"
elif [ "$ARCH" = "aarch64" ]; then
    ARCH="arm64"
fi

EXT=""
if [[ "$OS" == "mingw"* || "$OS" == "cygwin"* || "$OS" == "msys"* ]]; then
    OS="windows"
    EXT=".exe"
fi

DOWNLOAD_URL="https://github.com/HexmosTech/freeDevTools/releases/latest/download/ipm-$OS-$ARCH$EXT"
TARGET="$INSTALL_DIR/$APPNAME$EXT"

# Check if binary exists and is valid
if [[ -f "$TARGET" ]]; then
    if [[ "$OS" != "windows" ]]; then
        if [[ -x "$TARGET" ]] && file "$TARGET" | grep -q 'ELF\|Mach-O'; then
            echo "==> $APPNAME already installed and valid at $TARGET, skipping installation."
        else
            echo "==> $APPNAME binary is invalid, re-downloading..."
            rm -f "$TARGET"
            NEED_INSTALL=true
        fi
    else
        echo "==> $APPNAME already exists at $TARGET, skipping installation."
    fi
fi

if [[ ! -f "$TARGET" || "$NEED_INSTALL" == true ]]; then
    echo "==> Installing $APPNAME ($OS-$ARCH) to $INSTALL_DIR ..."
    mkdir -p "$INSTALL_DIR"

    echo "==> Downloading from $DOWNLOAD_URL ..."
    curl -L "$DOWNLOAD_URL" -o "$TARGET"

    # Only chmod on Unix
    if [[ "$OS" != "windows" ]]; then
        chmod +x "$TARGET"
        echo "==> Creating symlink at $BIN_PATH ..."
        sudo ln -sf "$TARGET" "$BIN_PATH"
    fi

    echo "==> Installation complete!"
fi

if [[ "$OS" == "windows" ]]; then
    echo "Run it using: $INSTALL_DIR\\$APPNAME$EXT"
else
    echo "Run it using: $APPNAME"
fi
