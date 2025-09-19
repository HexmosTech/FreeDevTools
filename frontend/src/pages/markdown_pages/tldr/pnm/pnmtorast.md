---
title: "Convert PNM to RAST - Image Conversion | Online Free DevTools by Hexmos"
name: pnmtorast
path: /freedevtools/tldr/pnm/pnmtorast
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtorast/"
description: "Convert PNM image to RAST with pnmtorast. This powerful image converter supports various raster formats. Free online tool, no registration required."
category: common
keywords:
- PNM to RAST Converter
- Image Format Conversion
- Netpbm RAST Utility
- Raster Image Conversion
- Image File Converter
- PNM Image Processing
- Linux Image Tools
- Command Line Image Conversion
- PNM Manipulation Tool
- Raster Graphics Conversion
features:
- Convert PNM image files to RAST format.
- Force RT_STANDARD output encoding.
- Force RT_BYTE_ENCODED output encoding.
- Process image data via command line.
- Streamlined image conversion process.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmtorast

> Convert a PNM file to a Sun rasterfile.
> More information: <https://netpbm.sourceforge.net/doc/pnmtorast.html>.

- Convert a PNM image to a RAST image:

`pnmtorast {{path/to/input.pnm}} > {{path/to/output.rast}}`

- Force either `RT_STANDARD` or `RT_BYTE_ENCODED` form for the output:

`pnmtorast -{{standard|rle}} {{path/to/input.pnm}} > {{path/to/output.rast}}`
