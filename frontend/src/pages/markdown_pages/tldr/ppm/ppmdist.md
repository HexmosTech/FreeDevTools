---
title: "Generate Grayscale PPM - Convert PPM Images | Online Free DevTools by Hexmos"
name: ppmdist
path: /freedevtools/tldr/ppm/ppmdist
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmdist/"
description: "Generate grayscale PPM images with ppmdist. Convert color PPM images to grayscale PGM format. Free online tool, no registration required."
category: common
keywords:
- PPM grayscale conversion
- PPM to PGM conversion
- Netpbm image processing
- Image format conversion
- Command line image tools
- PPM image manipulation
- Linux image converter
- MacOS image converter
- Color to grayscale conversion
- PPM image utility
features:
- Convert PPM images to grayscale PGM format
- Process PPM images via command line
- Apply frequency-based grayscale conversion
- Apply intensity-based grayscale conversion
- Output grayscale image to standard output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmdist

> Produce a grayscale version of a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ppmdist.html>.

- Produce a grayscale version of the specified PPM image:

`ppmdist {{path/to/input.ppm}} > {{path/to/output.pgm}}`

- Use the specified method to map colors to graylevels:

`ppmdist -{{frequency|intensity}} {{path/to/input.ppm}} > {{path/to/output.pgm}}`
