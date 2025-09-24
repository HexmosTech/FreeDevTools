---
title: "Deinterlace Image - Remove Rows | Online Free DevTools by Hexmos"
name: pamdeinterlace
path: /freedevtools/tldr/common/pamdeinterlace
canonical: "https://hexmos.com/freedevtools/tldr/common/pamdeinterlace/"
description: "Deinterlace images with pamdeinterlace. Easily remove even or odd rows from your Netpbm image for efficient interlacing control. Free online tool, no registration required."
category: common
keywords:
- Netpbm image deinterlacer
- PAM image row removal
- Image processing tool
- Deinterlace PPM images
- Command-line image editor
- Image interlacing removal
- Netpbm utilities
- PAM image manipulation
- Linux image tools
- Common image commands
features:
- Removes even-numbered rows from a Netpbm image
- Removes odd-numbered rows from a Netpbm image
- Creates an image with selected rows
- Provides command line image manipulation
- Supports Netpbm image formats
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamdeinterlace

> Remove every other row in a Netpbm image.
> See also: `pammixinterlace`.
> More information: <https://netpbm.sourceforge.net/doc/pamdeinterlace.html>.

- Produce an image consisting of the input's even-numbered rows:

`pamdeinterlace {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Produce an image consisting of the input's odd-numbered rows:

`pamdeinterlace {{[-takeo|-takeodd]}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`
