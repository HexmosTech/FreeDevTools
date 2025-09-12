---
title: "Quantize PNM Images - Batch Convert PNM Files | Free DevTools"
name: pnmquantall
path: /freedevtools/tldr/common/pnmquantall
canonical: "https://hexmos.com/freedevtools/tldr/common/pnmquantall/"
description: "Quantize PNM image files with Pnmquantall. Batch convert multiple PNM images to a shared colormap. Free online tool, no registration required."
category: common
keywords:
- pnm image quantization
- pnm batch converter
- netpbm pnmquantall
- pnm image colormap
- image format conversion
- pnm to indexed color
- linux pnm utilities
- command line image processing
- pnm optimization
- image color reduction
features:
- Quantize multiple PNM files simultaneously
- Share a common colormap across multiple PNM images
- Overwrite original PNM files with quantized versions
- Save quantized images with a specified file extension
- Reduce the number of colors in PNM images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmquantall

> Run `pnmquant` on multiple files at once such that they share a common colormap.
> See also: `pnmquant`.
> More information: <https://netpbm.sourceforge.net/doc/pnmquantall.html>.

- Run `pnmquant` on multiple files with the specified parameters, overwriting the original files:

`pnmquantall {{n_colors}} {{path/to/input1.pnm path/to/input2.pnm ...}}`

- Save the quantised images to files named the same as the input files, but with the specified extension appended:

`pnmquantall {{[-e|-ext]}} {{extension}} {{n_colors}} {{path/to/input1.pnm path/to/input2.pnm ...}}`
