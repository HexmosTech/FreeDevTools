---
title: "Convert SGI to PNM - Image Conversion | Online Free DevTools by Hexmos"
name: sgitopnm
path: /freedevtools/tldr/common/sgitopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/sgitopnm/"
description: "Convert SGI images to PNM format with Sgitopnm. Quickly transform your SGI files for broader compatibility and image editing. Free online tool, no registration required."
category: common
keywords:
- SGI to PNM conversion
- PNM file converter
- SGI image format
- Image conversion tool
- Netpbm sgitopnm
- Linux image conversion
- macOS image conversion
- Command line image tool
- SGI image processing
- PNM image editor
features:
- Convert SGI images to PNM format.
- Extract specific color channels from SGI files.
- Display verbose information about SGI image properties.
- Support command-line based image manipulation.
- Enable broader compatibility with various image editors.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sgitopnm

> Convert an SGI file to a PNM file.
> More information: <https://netpbm.sourceforge.net/doc/sgitopnm.html>.

- Convert an SGI image to a PNM file:

`sgitopnm {{path/to/input.sgi}} > {{path/to/output.pnm}}`

- Display information about the SGI file:

`sgitopnm {{[-verb|-verbose]}} {{path/to/input.sgi}} > {{path/to/output.pnm}}`

- Extract channel n of the SGI file:

`sgitopnm {{[-c|-channel]}} {{n}} {{path/to/input.sgi}} > {{path/to/output.pnm}}`
