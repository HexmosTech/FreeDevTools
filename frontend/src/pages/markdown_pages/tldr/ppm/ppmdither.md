---
title: "PPM Dither - Reduce Image Colors | Online Free DevTools by Hexmos"
name: ppmdither
path: /freedevtools/tldr/ppm/ppmdither
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmdither/"
description: "Dither images with PPM Dither, reducing color palettes for optimized file sizes. Free online tool, no registration required."
category: common
keywords:
- PPM image dithering
- Reduce image colors
- Image color quantization
- Netpbm ppmdither
- Linux image manipulation
- Color depth reduction
- PPM file processing
- Dithering algorithm
- Image optimization
- Command-line image tool
features:
- Reduce the number of colors in PPM images
- Apply dithering to images
- Specify the number of shades per color
- Define the dimensions of the dithering matrix
- Convert PPM images with reduced color palettes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmdither

> Reduce the number of colors in an image by applying dithering.
> More information: <https://netpbm.sourceforge.net/doc/ppmdither.html>.

- Read a PPM image, apply dithering and save it to a file:

`ppmdither {{path/to/image.ppm}} > {{path/to/file.ppm}}`

- Specify the desired number of shades for each primary color:

`ppmdither {{[-r|-red]}} {{2}} {{[-g|-green]}} {{3}} {{[-b|-blue]}} {{2}} {{path/to/image.ppm}} > {{path/to/file.ppm}}`

- Specify the dimensions of the dithering matrix:

`ppmdither {{[-d|-dim]}} {{2}} {{path/to/image.ppm}} > {{path/to/file.ppm}}`
