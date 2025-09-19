---
title: "Convert RLE to PNM - Image Conversion | Online Free DevTools by Hexmos"
name: rletopnm
path: /freedevtools/tldr/common/rletopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/rletopnm/"
description: "Convert RLE files to PNM format with rletopnm. Easily transform image files between these formats using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- RLE to PNM conversion
- RLE image converter
- PNM image creation
- Image format conversion
- Utah Raster Toolkit
- netpbm conversion
- command line image tools
- image manipulation
- RLE alpha channel extraction
- linux image converter
features:
- Convert RLE image files to PNM format.
- Extract alpha channel data to PGM images.
- Output RLE header information in verbose mode.
- Support command-line based image conversion.
- Process images using the Utah Raster Toolkit RLE format.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rletopnm

> Convert a Utah Raster Tools RLE image file to a PNM file.
> More information: <https://netpbm.sourceforge.net/doc/rletopnm.html>.

- Convert an RLE image to a PNM file:

`rletopnm {{path/to/input.rle}} > {{path/to/output.pnm}}`

- Create a PGM image containing the RLE file's alpha channel:

`rletopnm {{[--a|--alphaout]}} {{path/to/alpha_file.pgm}} {{path/to/input.rle}} > {{path/to/output.pnm}}`

- Operate in verbose mode and print the contents of the RLE header to `stdout`:

`rletopnm {{[--verb|--verbose]}} {{path/to/input.rle}} > {{path/to/output.pnm}}`
