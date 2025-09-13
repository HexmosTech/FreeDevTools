---
title: "Convert PPM to ASCII - Generate ASCII Art | Free DevTools"
name: ppmtoascii
path: /freedevtools/tldr/ppm/ppmtoascii
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtoascii/"
description: "Convert PPM to ASCII with ppmtoascii. Generate ASCII art from images using ANSI terminal color codes. Free online tool, no registration required."
category: common
keywords:
- ppm to ascii converter
- image to ascii art
- ppm image converter
- ascii art generator
- terminal graphics
- command line image tools
- netpbm
- linux image converter
- ppmtoascii example
- image manipulation tool
features:
- Convert PPM images to ASCII text
- Customize pixel-to-character ratio
- Generate ASCII art for terminal display
- Output ASCII art to a text file
- Use ANSI color codes for enhanced visual representation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtoascii

> Convert a PPM image to an ASCII image using ANSI terminal color codes.
> See also: `ppmtoterm`, `pbmtoascii`, `pbmto4425`.
> More information: <https://netpbm.sourceforge.net/doc/ppmtoascii.html>.

- Convert a PPM image to an ASCII image, combining an area of 1x2 pixels into a character:

`ppmtoascii {{path/to/input.ppm}} > {{path/to/output.txt}}`

- Convert a PPM image to an ASCII image, combining an area of 2x4 pixels into a character:

`ppmtoascii -2x4 {{path/to/input.ppm}} > {{path/to/output.txt}}`
