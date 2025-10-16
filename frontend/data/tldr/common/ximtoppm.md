---
title: "XIM to PPM - Convert Image Format | Online Free DevTools by Hexmos"
name: ximtoppm
path: "/freedevtools/tldr/common/ximtoppm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ximtoppm/"
description: "Convert XIM images to PPM format with ximtoppm. Efficiently manage image formats and transparency masks via command line. Free online tool, no registration required."
category: common
keywords:
- XIM to PPM conversion
- Image format conversion
- Convert XIM to PPM
- PPM image generation
- XIM image processing
- Netpbm image tools
- Linux image converter
- macOS image converter
- command-line image conversion
- XIM alpha channel extraction
features:
- Convert XIM images to PPM format
- Extract transparency masks to PBM files
- Process image data using Netpbm tools
- Support command-line image manipulation
- Create PPM images from XIM source
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ximtoppm

> Convert a XIM file to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ximtoppm.html>.

- Convert an XIM image to a PPM image:

`ximtoppm {{path/to/input_file.xim}} > {{path/to/output_file.ppm}}`

- Store the transparency mask of the input image in the specified file:

`ximtoppm {{[-a|-alphaout]}} {{path/to/alpha_file.pbm}} {{path/to/input_file.xim}} > {{path/to/output_file.ppm}}`
