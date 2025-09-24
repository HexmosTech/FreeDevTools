---
title: "Convert ASCII to PGM - Generate PGM Images | Online Free DevTools by Hexmos"
name: asciitopgm
path: /freedevtools/tldr/common/asciitopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/asciitopgm/"
description: "Generate PGM images with asciitopgm. Convert ASCII art to PGM format, creating grayscale images from text. Free online tool, no registration required."
category: common
keywords:
- ASCII to PGM converter
- PGM image generator
- ASCII art to image
- Convert text to PGM
- Grayscale image from ASCII
- Netpbm tools
- Linux image conversion
- Command line image tool
- Text to image converter
- ASCII graphics to PGM
features:
- Convert ASCII art to PGM image format
- Approximate pixel brightness from ASCII characters
- Generate grayscale images from ASCII input
- Display version information
- Accept ASCII data from a file as input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# asciitopgm

> Convert ASCII graphics into a PGM file.
> More information: <https://netpbm.sourceforge.net/doc/asciitopgm.html>.

- Read ASCII data as input and produce a PGM image with pixel values that are an approximation of the "brightness" of the ASCII characters:

`asciitopgm {{path/to/input_file}} > {{path/to/output_file.pgm}}`

- Display version:

`asciitopgm {{[-v|-version]}}`
