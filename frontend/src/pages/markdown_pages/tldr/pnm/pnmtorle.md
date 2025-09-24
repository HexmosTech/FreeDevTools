---
title: "Convert PNM to RLE - Format Image Files | Online Free DevTools by Hexmos"
name: pnmtorle
path: /freedevtools/tldr/pnm/pnmtorle
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtorle/"
description: "Convert PNM files to RLE images with pnmtorle. Easily format image files for various applications. Free online tool, no registration required."
category: common
keywords:
- PNM to RLE converter
- image format conversion
- RLE image creation
- PNM image processing
- Utah Raster Tools RLE
- command line image tools
- PNM image editor
- image file converter
- netpbm tools
- common linux commands
features:
- Convert PNM image files to RLE format
- Include transparency channel in output images
- Print PNM header information to stdout
- Support verbose output for debugging
- Process images directly from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmtorle

> Convert a PNM file to an Utah Raster Tools RLE image file.
> More information: <https://netpbm.sourceforge.net/doc/pnmtorle.html>.

- Convert a PNM image to an RLE image:

`pnmtorle {{path/to/input.pnm}} > {{path/to/output.rle}}`

- Print PNM header information to `stdout`:

`pnmtorle {{[-verb|-verbose]}} {{path/to/input.pnm}} > {{path/to/output.rle}}`

- Include a transparency channel in the output image in which every black pixel is set to fully transparent and every other pixel is set to fully opaque:

`pnmtorle {{[-a|-alpha]}} {{path/to/input.pnm}} > {{path/to/output.rle}}`
