---
title: "Detect Steganography - Analyze Images with zsteg | Online Free DevTools by Hexmos"
name: zsteg
path: "/freedevtools/tldr/common/zsteg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zsteg/"
description: "Detect Steganography with zsteg. Analyze PNG and BMP images for hidden data and reveal secret messages using various steganographic techniques. Free online tool, no registration required."
category: common
keywords:
- PNG Steganography Detection
- BMP Steganography Analysis
- LSB Steganography Decoder
- ZLIB Data Extraction
- Steganography tool linux
- Image Forensics Tool
- Data Hiding Analysis
- Digital Image Analysis
- Image Steganography Detector
- Hidden Data Extractor
features:
- Detect hidden data within PNG images
- Analyze BMP images for steganographic content
- Extract LSB steganography from images
- Identify ZLIB-compressed data in image files
- Iterate pixels with different ordering methods
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zsteg

> Steganography detection tool for PNG and BMP file formats.
> It detects LSB steganography, ZLIB-compressed data, OpenStego, Camouflage and LSB with the Eratosthenes set.
> More information: <https://github.com/zed-0xff/zsteg>.

- Detect embedded data in a PNG:

`zsteg {{path/to/image.png}}`

- Detect embedded data in a BMP image, using all known methods:

`zsteg --all {{path/to/image.bmp}}`

- Detect embedded data in a PNG, iterating pixels vertically and using MSB first:

`zsteg --msb --order yx {{path/to/image.png}}`

- Detect embedded data in a BMP image, specifying the bits to consider:

`zsteg --bits {{1,2,3|1-3}} {{path/to/image.bmp}}`

- Detect embedded data in a PNG, extracting only prime pixels and inverting bits:

`zsteg --prime --invert {{path/to/image.png}}`

- Detect embedded data in a BMP image, specifying the minimum length of the strings to be found and the find mode:

`zsteg --min-str-len {{10}} --strings {{first|all|longest|none}} {{path/to/image.bmp}}`
