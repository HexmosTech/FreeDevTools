---
title: "Convert XPM to PPM - Image Conversion | Online Free DevTools by Hexmos"
name: xpmtoppm
path: /freedevtools/tldr/common/xpmtoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/xpmtoppm/"
description: "Convert XPM images to PPM format with XPMtoPPM. Utilize transparency mask handling for advanced image manipulation. Free online tool, no registration required."
category: common
keywords:
- XPM to PPM converter
- pixmap to PPM conversion
- image format conversion
- X11 pixmap tool
- command line image converter
- PPM image generation
- Netpbm image tools
- XPM image processing
- Linux image converter
- image transparency mask
features:
- Convert XPM images to PPM format
- Handle image transparency masks
- Generate PPM images from X11 pixmaps
- Output transparency to a PBM file
- Convert images via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xpmtoppm

> Convert an X11 pixmap to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/xpmtoppm.html>.

- Convert an XPM image to a PPM image:

`xpmtoppm {{path/to/input_file.xpm}} > {{path/to/output_file.ppm}}`

- Store the transparency mask of the input image in the specified file:

`xpmtoppm {{[-a|--alphaout]}} {{path/to/alpha_file.pbm}} {{path/to/input_file.xpm}} > {{path/to/output_file.ppm}}`
