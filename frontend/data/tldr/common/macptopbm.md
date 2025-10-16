---
title: "Convert MacPaint to PBM - Generate PBM Images | Online Free DevTools by Hexmos"
name: macptopbm
path: "/freedevtools/tldr/common/macptopbm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/macptopbm/"
description: "Convert MacPaint files to PBM images with macptopbm. Control image format conversion and generate PBM image outputs with this free online tool, no registration required."
category: common
keywords:
- MacPaint to PBM conversion
- PBM image generation
- Image format converter
- MacPaint file conversion
- PBM image creation
- MacOS image tools
- Netpbm tools
- Image manipulation tools
- Bitmap image converter
- MacPaint image processing
features:
- Convert MacPaint (.macp) files to PBM image format.
- Skip bytes during MacPaint file processing.
- Suppress informational messages during conversion.
- Display version information for macptopbm.
- Create PBM images from MacPaint source files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# macptopbm

> Read a MacPaint file as input and produce a PBM image as output.
> See also: `pbmtomacp`.
> More information: <https://netpbm.sourceforge.net/doc/macptopbm.html>.

- Convert a MacPaint file into a PGM image:

`macptopbm {{path/to/file.macp}} > {{path/to/output.pbm}}`

- Skip over `n` bytes when reading the file:

`macptopbm {{[-e|-extraskip]}} {{n}} > {{path/to/output.pbm}}`

- Suppress all informational messages:

`macptopbm {{[-q|-quiet]}} > {{path/to/output.pbm}}`

- Display version:

`macptopbm {{[-v|-version]}}`
