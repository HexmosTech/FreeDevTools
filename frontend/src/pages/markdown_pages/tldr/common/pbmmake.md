---
title: "Create Bitmap - Generate Blank PBM Images | Online Free DevTools by Hexmos"
name: pbmmake
path: /freedevtools/tldr/common/pbmmake
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmmake/"
description: "Generate bitmap images with pbmmake, a powerful tool for creating PBM files. Customize color and dimensions effortlessly. Free online tool, no registration required."
category: common
keywords:
- pbm image creation
- bitmap generator
- pbm file creator
- image manipulation
- netpbm tools
- linux image tools
- command line image processing
- blank bitmap generator
- black and white image generator
- pbm editor
features:
- Generate blank PBM images of specified dimensions
- Define custom colors for generated bitmaps (white, black, grey)
- Create PBM files via command line
- Specify image width and height parameters
- Output PBM image to a specific file path
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmmake

> Create a blank bitmap.
> More information: <https://netpbm.sourceforge.net/doc/pbmmake.html>.

- Create a blank bitmap of the specified dimensions:

`pbmmake {{width}} {{height}} > {{path/to/output_file.pbm}}`

- Specify the color of the created bitmap:

`pbmmake -{{white|black|grey}} {{width}} {{height}} > {{path/to/output_file.pbm}}`
