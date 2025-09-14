---
title: "Convert PPM to AutoCAD - Image Converter | Free DevTools"
name: ppmtoacad
path: /freedevtools/tldr/ppm/ppmtoacad
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtoacad/"
description: "Convert PPM images to AutoCAD files with ppmtoacad. Supports slide and binary database formats. Free online tool, no registration required. Leverage image conversion."
category: common
keywords:
- PPM to AutoCAD converter
- image to acad conversion
- PPM image converter
- AutoCAD file generation
- PPM to DXB conversion
- Netpbm image tools
- Linux image conversion
- macOS image conversion
- command-line image converter
- AutoCAD slide creation
features:
- Convert PPM images to AutoCAD slides
- Convert PPM images to AutoCAD binary database files
- Restrict output colors to 8 RGB shades
- Support for both slide and DXB output formats
- Command-line image processing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtoacad

> Convert a PPM image to an AutoCAD database or slide.
> More information: <https://netpbm.sourceforge.net/doc/ppmtoacad.html>.

- Convert a PPM image to an AutoCAD slide:

`ppmtoacad {{path/to/file.ppm}} > {{path/to/file.acad}}`

- Convert a PPM image to an AutoCAD binary database import file:

`ppmtoacad {{[-d|-dxb]}} {{path/to/file.ppm}} > {{path/to/file.dxb}}`

- Restrict the colors in the output to 8 RGB shades:

`ppmtoacad -8 {{path/to/file.ppm}} > {{path/to/file.dxb}}`
