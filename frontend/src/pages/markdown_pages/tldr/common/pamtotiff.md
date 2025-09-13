---
title: "Convert PAM to TIFF - Image Converter | Free DevTools"
name: pamtotiff
path: /freedevtools/tldr/common/pamtotiff
canonical: "https://hexmos.com/freedevtools/tldr/common/pamtotiff/"
description: "Convert PAM to TIFF with pamtotiff. Effortlessly create TIFF images from PAM files using this powerful command-line image converter. Free online tool, no registration required."
category: common
keywords:
- PAM to TIFF converter
- Image format conversion
- PAM image processing
- TIFF file creation
- Netpbm tools
- Command-line image converter
- Linux image tools
- macOS image conversion
- Image compression methods
- Graphics file converter
features:
- Convert PAM images to TIFF format
- Specify compression methods for TIFF output
- Force color output for greyscale PAM images
- Support for various TIFF compression algorithms (none, packbits, lzw, g3, g4, flate, adobeflate)
- Command-line image manipulation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamtotiff

> Convert a PAM image to a TIFF file.
> More information: <https://netpbm.sourceforge.net/doc/pamtotiff.html>.

- Convert a PAM image to a TIFF image:

`pamtotiff {{path/to/input_file.pam}} > {{path/to/output_file.tiff}}`

- Explicitly specify a compression method for the output file:

`pamtotiff -{{none|packbits|lzw|g3|g4|flate|adobeflate}} {{path/to/input_file.pam}} > {{path/to/output_file.tiff}}`

- Always produce a color TIFF image, even if the input image is greyscale:

`pamtotiff {{[-c|-color]}} {{path/to/input_file.pam}} > {{path/to/output_file.tiff}}`
