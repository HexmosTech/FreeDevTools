---
title: "Reduce PBM Image - Proportionally Shrink Images | Online Free DevTools by Hexmos"
name: pbmreduce
path: /freedevtools/tldr/common/pbmreduce
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmreduce/"
description: "Reduce PBM images proportionally with pbmreduce. Optimize image sizes while maintaining aspect ratio with this simple command-line tool. Free online tool, no registration required."
category: common
keywords:
- PBM image reduction
- Image scaling
- Proportional image resize
- PBM file manipulation
- Netpbm image tools
- Image thresholding
- Command-line image processing
- Linux image tools
- Image compression
- PBM file optimization
features:
- Reduce PBM image size by a specified factor
- Apply simple thresholding during reduction
- Specify a custom threshold value for quantization
- Resize images using the command line
- Optimize PBM files for smaller size
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmreduce

> Proportionally reduce a PBM image.
> See also: `pamenlarge`, `pamditherbw`.
> More information: <https://netpbm.sourceforge.net/doc/pbmreduce.html>.

- Reduce the specified image by the specified factor:

`pbmreduce {{n}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`

- Use simple thresholding when reducing:

`pbmreduce {{[-t|-threshold]}} {{n}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`

- Use the specified threshold for all quantizations:

`pbmreduce {{[-va|-value]}} {{0.6}} {{n}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`
