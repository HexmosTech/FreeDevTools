---
title: "Smooth PNM Image - Enhance Images | Online Free DevTools by Hexmos"
name: pnmsmooth
path: /freedevtools/tldr/pnm/pnmsmooth
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmsmooth/"
description: "Smooth PNM images quickly with pnmsmooth. Reduce noise and improve image quality easily using convolution. Free online tool, no registration required."
category: common
keywords:
- PNM image smoothing
- Image noise reduction
- PNM image enhancer
- PNM convolution filter
- Netpbm image processing
- PNM image editor
- Image smoothing Linux
- Image smoothing command line
- PNM image manipulation
- PNM image utilities
features:
- Smooth PNM images using a 3x3 convolution matrix
- Smooth PNM images using a custom-sized convolution matrix
- Reduce noise in PNM image files
- Enhance image quality of PNM files
- Filter PNM images via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmsmooth

> Smooth out a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmsmooth.html>.

- Smooth out a PNM image using a convolution matrix of size 3x3:

`pnmsmooth {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Smooth out a PNM image using a convolution matrix of size width times height:

`pnmsmooth {{[-w|-width]}} {{width}} {{[-h|-height]}} {{height}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
