---
title: "Convert TIFF to PNM - Create PNM Images | Online Free DevTools by Hexmos"
name: tifftopnm
path: /freedevtools/tldr/common/tifftopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/tifftopnm/"
description: "Convert TIFF images to PNM format with tifftopnm. Generate PNM images from TIFF files, including alpha channel extraction. Free online tool, no registration required."
category: common
keywords:
- TIFF to PNM converter
- Image format conversion
- Raster image processing
- PNM image generator
- TIFF alpha channel extraction
- Command line image conversion
- Netpbm tools
- Linux image utilities
- MacOS image converter
- Portable anymap format
features:
- Convert TIFF files to PNM images
- Extract alpha channel into a PGM file
- Respect fillorder tag in TIFF images
- Output TIFF header information
- Process raster image formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tifftopnm

> Convert a TIFF image to a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/tifftopnm.html>.

- Convert a TIFF to a PNM file:

`tifftopnm {{path/to/input_file.tiff}} > {{path/to/output_file.pnm}}`

- Create a PGM file containing the alpha channel of the input image:

`tifftopnm {{[-a|-alphaout]}} {{path/to/alpha_file.pgm}} {{path/to/input_file.tiff}} > {{path/to/output_file.pnm}}`

- Respect the `fillorder` tag in the input TIFF image:

`tifftopnm {{[-r|-respectfillorder]}} {{path/to/input_file.tiff}} > {{path/to/output_file.pnm}}`

- Print TIFF header information to `stderr`:

`tifftopnm {{[-h|-headerdump]}} {{path/to/input_file.tiff}} > {{path/to/output_file.pnm}}`
