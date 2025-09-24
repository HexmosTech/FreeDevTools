---
title: "Convert PNM to PS - Generate PostScript Files | Online Free DevTools by Hexmos"
name: pnmtops
path: /freedevtools/tldr/pnm/pnmtops
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtops/"
description: "Convert PNM images to PostScript files with pnmtops. Generate high-quality PS documents and control image dimensions. Free online tool, no registration required."
category: common
keywords:
- PNM to PS converter
- PostScript file generator
- image format conversion
- PNM image processing
- linux image converter
- command line image tools
- Netpbm image utility
- convert image to postscript
- PNM to PS command
- image dimension control
features:
- Convert PNM images to PostScript format.
- Specify output image dimensions in inches.
- Define page dimensions for the PostScript output.
- Support for image width and height control.
- Generate PS files from PNM images on the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmtops

> Convert a PNM image to a PostScript file.
> More information: <https://netpbm.sourceforge.net/doc/pnmtops.html>.

- Convert a PNM image to a PS file:

`pnmtops {{path/to/file.pnm}} > {{path/to/file.ps}}`

- Specify the dimensions of the output image in inches:

`pnmtops {{[-imagew|-imagewidth]}} {{imagewidth}} {{[-imageh|-imageheight]}} {{imageheight}} {{path/to/file.pnm}} > {{path/to/file.ps}}`

- Specify the dimensions of the page the output image resides on in inches:

`pnmtops {{[-w|-width]}} {{width}} {{[-h|-height]}} {{height}} {{path/to/file.pnm}} > {{path/to/file.ps}}`
