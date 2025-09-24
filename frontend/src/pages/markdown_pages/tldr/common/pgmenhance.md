---
title: "Edge-Enhance PGM - Enhance PGM Images | Online Free DevTools by Hexmos"
name: pgmenhance
path: /freedevtools/tldr/common/pgmenhance
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmenhance/"
description: "Edge-enhance PGM images with pgmenhance. Improve image clarity and sharpness using command line tools. Free online tool, no registration required."
category: common
keywords:
- PGM image enhance
- PGM edge enhancement
- PGM image sharpening
- command line image editing
- netpbm pgmenhance
- PGM manipulation
- image processing tools
- image enhancement software
- bitmap edge detection
- portable graymap enhance
features:
- Enhance edges in PGM images
- Specify the level of enhancement
- Process PGM images from the command line
- Sharpen image details
- Output enhanced PGM images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgmenhance

> Edge-enhance a PGM image.
> See also: `pamedge`.
> More information: <https://netpbm.sourceforge.net/doc/pgmenhance.html>.

- Edge-enhance a PGM image:

`pgmenhance {{path/to/image.pgm}} > {{path/to/output.pgm}}`

- Specify the level of enhancement:

`pgmenhance -{{1..9}} {{path/to/image.pgm}} > {{path/to/output.pgm}}`
