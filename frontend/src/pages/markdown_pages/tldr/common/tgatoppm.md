---
title: "TGA to PPM - Convert Targa Files | Free DevTools"
name: tgatoppm
path: /freedevtools/tldr/common/tgatoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/tgatoppm/"
description: "Convert Targa files to PPM format with tgatoppm. Easily transform .tga images for Netpbm compatibility. Free online tool, no registration required."
category: common
keywords:
- tga to ppm converter
- targa to ppm conversion
- ppm image generator
- netpbm image converter
- linux image tools
- macos image conversion
- command line image converter
- image format conversion
- tga header analyzer
- transparency channel extraction
features:
- Convert Targa (.tga) image files to PPM format
- Dump TGA header information to standard output
- Extract transparency channel data to a PGM file
- Support command-line image format conversion
- Display the version of the tgatoppm utility
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tgatoppm

> Convert a TrueVision Targa file to a Netpbm image.
> More information: <https://netpbm.sourceforge.net/doc/tgatoppm.html>.

- Convert a TrueVision Targa file to a PPM image:

`tgatoppm {{path/to/file.tga}} > {{path/to/output.ppm}}`

- Dump information from the TGA header to `stdout`:

`tgatoppm {{[-h|-headerdump]}} {{path/to/file.tga}} > {{path/to/output.ppm}}`

- Write the transparency channel values of the input image to the specified file:

`tgatoppm {{[-a|-alphaout]}} {{path/to/transparency_file.pgm}} {{path/to/file.tga}} > {{path/to/output.ppm}}`

- Display version:

`tgatoppm {{[-v|-version]}}`
