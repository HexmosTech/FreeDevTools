---
title: "Convert BMP to PNM - Generate Image Files | Online Free DevTools by Hexmos"
name: bmptopnm
path: "/freedevtools/tldr/common/bmptopnm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/bmptopnm/"
description: "Generate PNM image files with bmptopnm. Convert BMP images to PBM, PGM, or PNM formats easily. Free online tool, no registration required."
category: common
keywords:
- BMP to PNM converter
- Image format converter
- Windows BMP conversion
- OS/2 BMP conversion
- PNM file generator
- PBM file generator
- PGM file generator
- Linux image conversion
- macOS image conversion
- Command-line image tools
features:
- Convert BMP files to PBM format
- Convert BMP files to PGM format
- Convert BMP files to PNM format
- Report BMP header contents to stderr
- Display program version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bmptopnm

> Convert a BMP file into a PBM, PGM, or PNM image.
> More information: <https://netpbm.sourceforge.net/doc/bmptopnm.html>.

- Generate the PBM, PGM, or PNM image as output, for Windows or OS/2 BMP file as input:

`bmptopnm {{path/to/file.bmp}}`

- Report contents of the BMP header to `stderr`:

`bmptopnm {{[-verb|-verbose]}} {{path/to/file.bmp}}`

- Display version:

`bmptopnm {{[-v|-version]}}`
