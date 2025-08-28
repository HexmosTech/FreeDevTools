#!/usr/bin/env bash

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "❌ Error: src and out are required"
  echo "Usage: ./scripts/convert-to-webp.sh path/to/image.jpg path/to/image.webp"
  exit 1
fi

cwebp -q 100 "$1" -o "$2"