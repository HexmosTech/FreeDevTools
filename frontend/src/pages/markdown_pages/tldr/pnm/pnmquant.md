---
title: "Quantize PNM Colors - Generate PNM Color Palettes | Free DevTools"
name: pnmquant
path: /freedevtools/tldr/pnm/pnmquant
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmquant/"
description: "Quantize images with Pnmquant. Generate PNM color palettes and reduce the number of colors in PNM images. Free online tool, no registration required."
category: common
keywords:
- PNM color quantization
- PNM image palette generator
- Reduce PNM colors
- Netpbm image processing
- Color palette optimization
- PNM image manipulation
- PNM color reduction
- Linux image quantization
- Image color mapping
- PNM image conversion
features:
- Generate PNM images with a limited number of colors
- Reduce the color palette of a PNM image
- Approximate colors in a PNM image using a smaller palette
- Create optimized color palettes for PNM images
- Quantize PNM images directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmquant

> Quantize the colors in a PNM image into a smaller set.
> This command is a combination of `pnmcolormap` and `pnmremap` and accepts the union of their options, except `-mapfile`.
> See also: `pnmquantall`.
> More information: <https://netpbm.sourceforge.net/doc/pnmquant.html>.

- Generate an image using only `n_colors` or less colors as close as possible to the input image:

`pnmquant {{n_colors}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
