---
title: "Convert PPM to ICR - Image Format Conversion | Online Free DevTools by Hexmos"
name: ppmtoicr
path: /freedevtools/tldr/ppm/ppmtoicr
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtoicr/"
description: "Convert PPM images to ICR format with ppmtoicr. Fast image format conversion using command line. Free online tool, no registration required."
category: common
keywords:
- PPM to ICR conversion
- Image format converter
- Command line image tool
- PPM image processing
- ICR file generation
- Netpbm image tools
- Linux image conversion
- macOS image conversion
- Convert raster images
- PPM to ICR command
features:
- Convert PPM images to ICR format
- Display ICR output with specified window name
- Expand image by a specified factor
- Display output on screen with a number
- Support for command-line image conversion
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtoicr

> Convert a PPM image to NCSA ICR format.
> More information: <https://netpbm.sourceforge.net/doc/ppmtoicr.html>.

- Convert a PPM image to a ICR file:

`ppmtoicr {{path/to/file.ppm}} > {{path/to/file.icr}}`

- Display the output in name:

`ppmtoicr {{[-w|-windowname]}} {{name}} {{path/to/file.ppm}} > {{path/to/file.icr}}`

- Expand the image by the specified factor:

`ppmtoicr {{[-e|-expand]}} {{factor}} {{path/to/file.ppm}} > {{path/to/file.icr}}`

- Display the output on the screen with the specified number:

`ppmtoicr {{[-d|-display]}} {{number}} {{path/to/file.ppm}} > {{path/to/file.icr}}`
