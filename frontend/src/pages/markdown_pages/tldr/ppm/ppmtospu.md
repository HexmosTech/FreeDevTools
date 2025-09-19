---
title: "Convert PPM to SPU - Create Atari Images | Online Free DevTools by Hexmos"
name: ppmtospu
path: /freedevtools/tldr/ppm/ppmtospu
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtospu/"
description: "Convert PPM to SPU instantly with ppmtospu. Create Atari Spectrum 512 images from PPM files using command-line. Free online tool, no registration required."
category: common
keywords:
- PPM to SPU converter
- Atari Spectrum 512 image
- SPU image creator
- Netpbm image conversion
- PPM image manipulation
- command line image tools
- image format conversion
- graphics file conversion
- Linux image processing
- macOS image utilities
features:
- Convert PPM images to Atari Spectrum 512 (SPU) format.
- Generate Atari images from PPM files.
- Control image dithering using matrix size.
- Support for no dithering during conversion.
- Convert images using command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtospu

> Convert a PPM file to an Atari Spectrum 512 image.
> More information: <https://netpbm.sourceforge.net/doc/ppmtospu.html>.

- Convert a PPM file to an Atari Spectrum 512 image:

`ppmtospu {{path/to/input.ppm}} > {{path/to/output.spu}}`

- Use a dithering matrix of the specified size (0 means no dithering):

`ppmtospu -d{{0|2|4}} {{path/to/input.ppm}} > {{path/to/output.spu}}`
