---
title: "Convert PPM to RGB - Separate Image Channels | Free DevTools"
name: ppmtorgb3
path: /freedevtools/tldr/common/ppmtorgb3
canonical: "https://hexmos.com/freedevtools/tldr/common/ppmtorgb3/"
description: "Convert PPM to RGB with ppmtorgb3. Separate color components of a PPM image into distinct PGM files for individual channel editing. Free online tool, no registration required."
category: common
keywords:
- PPM to RGB conversion
- PGM image separation
- Image channel extraction
- PPM image processing
- Netpbm tools
- Linux image utilities
- Command-line image converter
- RGB color separation
- Image component splitting
- PPM editing tools
features:
- Separates PPM image into red, green, and blue PGM files
- Outputs individual color channels as separate files
- Supports processing of PPM image format
- Provides a command-line interface for image manipulation
- Allows for detailed image component analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtorgb3

> Separate the color components of a PPM file into three separate PGM files.
> See also: `rgb3toppm`.
> More information: <https://netpbm.sourceforge.net/doc/ppmtorgb3.html>.

- Separate the color components of a PPM file, saving the outputs to `file.red`, `file.grn` and `file.blu`:

`ppmtorgb3 {{path/to/file.ppm}}`
