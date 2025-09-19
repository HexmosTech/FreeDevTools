---
title: "Convert PGM to PPM - Colorize Images | Online Free DevTools by Hexmos"
name: pgmtoppm
path: "/freedevtools/tldr/common/pgmtoppm"
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmtoppm/"
description: "Convert PGM images to PPM format with PGMtoPPM. Colorize greyscale images and apply color maps easily. Free online tool, no registration required."
category: common
keywords:
- PGM to PPM converter
- greyscale image colorization
- Netpbm image conversion
- command line image tools
- PGM image manipulation
- PPM image generation
- image format conversion
- common pgmtoppm command
- color map application
- PGM PPM conversion
features:
- Convert PGM images to PPM format
- Colorize PGM images with specified colors
- Apply colormaps to PGM images
- Generate PPM images from PGM files
- Manipulate greyscale values in PGM images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pgmtoppm

> Colorize a PGM image.
> More information: <https://netpbm.sourceforge.net/doc/pgmtoppm.html>.

- Map all greyscale values of the input image to all colors between the two specified colors:

`pgmtoppm {{[-b|-black]}} {{red}} {{[-w|-white]}} {{blue}} {{path/to/input.pgm}} > {{path/to/output.ppm}}`

- Map all greyscale values of the input image to colors according to the specified colormap:

`pgmtoppm {{[-m|-map]}} {{path/to/colormap.ppm}} {{path/to/input.pgm}} > {{path/to/output.ppm}}`
