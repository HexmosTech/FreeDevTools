---
title: "Convert PostScript to PNM - Generate Images | Free DevTools"
name: pstopnm
path: /freedevtools/tldr/common/pstopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/pstopnm/"
description: "Convert PostScript files to PNM images with pstopnm. Control resolution and output format with this file converter. Free online tool, no registration required."
category: common
keywords:
- PostScript to PNM converter
- PS to PNM conversion
- PNM image generator
- Linux image tools
- MacOS image conversion
- Command line image converter
- PostScript file processing
- Image format conversion
- Raster image generation
- DPI control image tools
features:
- Convert PostScript files to PNM image format
- Specify the output format (PBM, PGM, PPM)
- Control the resolution of the output image
- Create PNM images from specific pages in PostScript files
- Batch convert PostScript files to PNM images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pstopnm

> Convert a PostScript file to a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pstopnm.html>.

- Convert a PS file to PNM images, storing page N of the input to `path/to/fileN.ppm`:

`pstopnm {{path/to/file.ps}}`

- Explicitly specify the output format:

`pstopnm -{{pbm|pgm|ppm}} {{path/to/file.ps}}`

- Specify the resolution of the output in dots per inch:

`pstopnm -dpi {{n}} {{path/to/file.ps}}`
