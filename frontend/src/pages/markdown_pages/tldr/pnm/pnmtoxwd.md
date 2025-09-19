---
title: "Convert PNM to XWD - Generate X11 Window Dumps | Online Free DevTools by Hexmos"
name: pnmtoxwd
path: /freedevtools/tldr/pnm/pnmtoxwd
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtoxwd/"
description: "Convert PNM images to XWD format with pnmtoxwd. Create X11 Window Dump files for graphics processing. Free online tool, no registration required."
category: common
keywords:
- PNM to XWD Converter
- Image Format Conversion
- X11 Window Dump Generator
- PNM Image Processing
- XWD File Creation
- Graphics Conversion Tool
- PNM Conversion Utility
- Linux Image Converter
- Command-Line Image Tools
- Netpbm Conversion
features:
- Convert PNM images to XWD format
- Generate X11 window dump files
- Support directcolor output
- Set custom color depth for output
- Convert images via command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmtoxwd

> Convert a PNM file into an X11 window dump file.
> More information: <https://netpbm.sourceforge.net/doc/pnmtoxwd.html>.

- Convert a PNM image file to XWD:

`pnmtoxwd {{path/to/input_file.pnm}} > {{path/to/output_file.xwd}}`

- Produce the output in the DirectColor format:

`pnmtoxwd {{[-d|-directcolor]}} {{path/to/input_file.pnm}} > {{path/to/output_file.xwd}}`

- Set the color depth of the output to b bits:

`pnmtoxwd {{[-ps|-pseudodepth]}} {{b}} {{path/to/input_file.pnm}} > {{path/to/output_file.xwd}}`
