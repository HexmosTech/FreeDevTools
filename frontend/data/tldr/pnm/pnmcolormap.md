---
title: "Create PNM Colormap - Quantize Images | Online Free DevTools by Hexmos"
name: pnmcolormap
path: "/freedevtools/tldr/pnm/pnmcolormap/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmcolormap/"
description: "Create PNM colormaps with pnmcolormap, optimizing image colors using quantization. Enhance images and reduce color palette size. Free online tool, no registration required."
category: common
keywords:
- PNM colormap generator
- PNM image quantization
- PPM color map
- Netpbm color reduction
- Image color palette optimization
- PNM image processing
- PPM image conversion
- Linux image tools
- Color map sorting
- Image color manipulation
features:
- Generate colormaps for PNM images
- Reduce the number of colors in an image
- Sort colormaps for comparison
- Utilize splitspread strategy for detailed images
- Optimize image colors using quantization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmcolormap

> Create quantization color map for a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmcolormap.html>.

- Generate an image using only `n_colors` or less colors as close as possible to the input image:

`pnmcolormap {{n_colors}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`

- Use the splitspread strategy for determining the output colors, possibly producing a better result for images with small details:

`pnmcolormap {{[-splits|-splitspread]}} {{n_colors}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`

- Sort the resulting colormap, which is useful for comparing colormaps:

`pnmcolormap {{[-so|-sort]}} {{path/to/input.pnm}} > {{path/to/output.ppm}}`
