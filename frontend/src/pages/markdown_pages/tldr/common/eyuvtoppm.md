---
title: "Convert YUV to PPM - Image Conversion | Online Free DevTools by Hexmos"
name: eyuvtoppm
path: /freedevtools/tldr/common/eyuvtoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/eyuvtoppm/"
description: "Convert Berkeley YUV image files to PPM format with eyuvtoppm. Effortless image conversion for developers. Free online tool, no registration required."
category: common
keywords:
- YUV to PPM converter
- Berkeley YUV to PPM
- Image format conversion
- eyuvtoppm command
- PPM image creation
- Linux image tools
- Command-line image converter
- YUV image processing
- PPM image generation
- netpbm tools
features:
- Converts Berkeley YUV files to PPM format.
- Reads YUV data from a specified input file.
- Writes PPM image data to a specified output file.
- Allows specification of width and height for conversion.
- Supports command-line image format conversion.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eyuvtoppm

> Convert a Berkeley YUV file to PPM.
> More information: <https://netpbm.sourceforge.net/doc/eyuvtoppm.html>.

- Read a Berkeley YUV file from the specified input file, convert it to a PPM image and store it in the specified output file:

`eyuvtoppm --width {{width}} --height {{height}} {{path/to/input_file.eyuv}} > {{path/to/output_file.ppm}}`
