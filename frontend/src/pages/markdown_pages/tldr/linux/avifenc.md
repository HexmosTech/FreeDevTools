---
title: "AVIF Encoder - Create AVIF Images | Online Free DevTools by Hexmos"
name: avifenc
path: /freedevtools/tldr/linux/avifenc
canonical: "https://hexmos.com/freedevtools/tldr/linux/avifenc/"
description: "Create AVIF images with avifenc, a powerful AV1 image encoder. Convert PNG to AVIF format with custom speed settings. Free online tool, no registration required."
category: linux
keywords:
- avif image encoder
- avif file converter
- avif encoder linux
- av1 image format
- png to avif conversion
- avif command line tool
- avif image compression
- avif image optimization
- linux image encoder
- command line image converter
features:
- Convert PNG images to AVIF format
- Encode AVIF images with custom speed settings
- Adjust encoding speed for quality and performance
- Compress images using the AV1 codec
- Create AVIF files from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# avifenc

> AV1 Image File Format (AVIF) encoder.
> More information: <https://aomediacodec.github.io/av1-avif/>.

- Convert a specific PNG image to AVIF:

`avifenc {{path/to/input.png}} {{path/to/output.avif}}`

- Encode with a specific speed (6=default, 0=slowest and 10=fastest):

`avifenc --speed {{2}} {{path/to/input.png}} {{path/to/output.avif}}`
