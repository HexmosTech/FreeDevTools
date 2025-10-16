---
title: "Convert PCX to PPM - Image Converter | Online Free DevTools by Hexmos"
name: pcxtoppm
path: "/freedevtools/tldr/common/pcxtoppm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pcxtoppm/"
description: "Convert PCX image files to PPM format with pcxtoppm. A powerful image conversion tool for managing graphic files. Free online tool, no registration required."
category: common
keywords:
- PCX to PPM converter
- image format conversion
- PCX image processing
- PPM file generation
- command line image conversion
- netpbm tools
- graphics file converter
- PCX image viewer
- PCX file reader
- PPM image editor
features:
- Convert PCX files to PPM image format
- Use predefined standard palettes for conversion
- Print detailed information on PCX header to stdout
- Support command line image manipulation
- Process images in batch using shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pcxtoppm

> Convert a PCX file to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/pcxtoppm.html>.

- Convert a PCX file to a PPM image:

`pcxtoppm {{path/to/file.pcx}} > {{path/to/file.ppm}}`

- Use a predefined standard palette even if the PCX file provides one:

`pcxtoppm {{[-s|-stdpalette]}} {{path/to/file.pcx}} > {{path/to/file.ppm}}`

- Print information on the PCX header to `stdout`:

`pcxtoppm {{[-verb|-verbose]}} {{path/to/file.pcx}} > {{path/to/file.ppm}}`
