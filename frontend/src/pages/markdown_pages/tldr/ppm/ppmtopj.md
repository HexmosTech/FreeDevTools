---
title: "Convert PPM to PJ - Format Image Files | Online Free DevTools by Hexmos"
name: ppmtopj
path: /freedevtools/tldr/ppm/ppmtopj
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtopj/"
description: "Convert PPM files with ppmtopj. Easily format image files from PPM to HP PaintJet format. Free online tool, no registration required."
category: common
keywords:
- PPM to PJ converter
- image format conversion
- PPM file conversion
- HP PaintJet file creation
- Linux PPM conversion
- macOS PPM conversion
- command-line image conversion
- raster image format
- PPM to PJ command
- Netpbm ppmtopj
features:
- Convert PPM images to HP PaintJet files.
- Adjust image position with X and Y offsets.
- Specify custom gamma values for conversion.
- Perform command-line PPM to PJ conversion.
- Support for batch image processing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtopj

> Convert a PPM file to an HP PaintJet file.
> More information: <https://netpbm.sourceforge.net/doc/ppmtopj.html>.

- Convert a PPM file to an HP PaintJet file:

`ppmtopj {{path/to/input.ppm}} > {{path/to/output.pj}}`

- Move the image in the x and y direction:

`ppmtopj {{[-x|-xpos]}} {{dx}} {{[-y|-ypos]}} {{dy}} {{path/to/input.ppm}} > {{path/to/output.pj}}`

- Explicitly specify a gamma value:

`ppmtopj {{[-g|-gamma]}} {{gamma}} {{path/to/input.ppm}} > {{path/to/output.pj}}`
