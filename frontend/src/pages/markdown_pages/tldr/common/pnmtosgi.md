---
title: "Convert PNM to SGI - Image Conversion | Free DevTools"
name: pnmtosgi
path: /freedevtools/tldr/common/pnmtosgi
canonical: "https://hexmos.com/freedevtools/tldr/common/pnmtosgi/"
description: "Convert PNM images to SGI format instantly with pnmtosgi. Optimize images for SGI systems and manage image headers easily. Free online tool, no registration required."
category: common
keywords:
- PNM to SGI converter
- Image format conversion
- PNM image manipulation
- SGI image creation
- Netpbm image tools
- Linux image conversion
- Command line image converter
- PNM to SGI command
- Image header editor
- SGI image optimizer
features:
- Convert PNM images to SGI format.
- Enable or disable image compression.
- Write custom strings to the SGI image header.
- Control image format during conversion.
- Optimize image size for SGI compatibility.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmtosgi

> Convert a PNM file to an SGI image file.
> More information: <https://netpbm.sourceforge.net/doc/pnmtosgi.html>.

- Convert a PNM image to an SGI image:

`pnmtosgi {{path/to/input.pnm}} > {{path/to/output.sgi}}`

- Disable or enable compression:

`pnmtosgi -{{verbatim|rle}} {{path/to/input.pnm}} > {{path/to/output.sgi}}`

- Write the specified string into the SGI image header's `imagename` field:

`pnmtosgi {{[-i|-imagename]}} {{string}} {{path/to/input.pnm}} > {{path/to/output.sgi}}`
