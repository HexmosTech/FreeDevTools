---
title: "OptiPNG - Optimize PNG Files | Online Free DevTools by Hexmos"
name: optipng
path: "/freedevtools/tldr/common/optipng/"
canonical: "https://hexmos.com/freedevtools/tldr/common/optipng/"
description: "Optimize PNG images with OptiPNG. Compress PNG files and reduce file size for faster loading times. Free online tool, no registration required."
category: common
keywords:
- PNG Compression
- PNG Optimization
- Lossless PNG
- PNG File Size Reduction
- Image Compression Tool
- Linux PNG Optimizer
- MacOS PNG Optimizer
- Command Line PNG
- OptiPNG Command
- Web Image Optimization
features:
- Compress PNG files with various optimization levels
- Preserve or strip metadata from PNG images
- Add interlacing to PNG images
- Optimize PNG files using the command line
- Reduce PNG file size for faster web loading
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# optipng

> PNG file optimization utility.
> More information: <https://optipng.sourceforge.net>.

- Compress a PNG with default settings:

`optipng {{path/to/file.png}}`

- Compress a PNG with the best compression:

`optipng -o {{7}} {{path/to/file.png}}`

- Compress a PNG with the fastest compression:

`optipng -o {{0}} {{path/to/file.png}}`

- Compress a PNG and add interlacing:

`optipng -i {{1}} {{path/to/file.png}}`

- Compress a PNG and preserve all metadata (including file timestamps):

`optipng -preserve {{path/to/file.png}}`

- Compress a PNG and remove all metadata:

`optipng -strip all {{path/to/file.png}}`
