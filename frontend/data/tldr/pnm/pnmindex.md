---
title: "Create PNM Index - Generate Visual Image Grids | Online Free DevTools by Hexmos"
name: pnmindex
path: "/freedevtools/tldr/pnm/pnmindex/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmindex/"
description: "Generate visual indexes with PNM Index. Create image grids from PNM files using command line options. Free online tool, no registration required."
category: common
keywords:
- PNM image index
- visual index generator
- image grid creator
- PNM thumbnail grid
- command-line image tool
- image manipulation tool
- netpbm tool
- PNM image processing
- image tiling
- linux image tools
features:
- Generates thumbnail grids from PNM images.
- Allows specifying thumbnail size.
- Controls the number of thumbnails per row.
- Reduces the number of colors in the output image.
- Creates visual indexes of multiple PNM images.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmindex

> Build a visual index of multiple PNM images.
> See also: `pamundice`.
> More information: <https://netpbm.sourceforge.net/doc/pnmindex.html>.

- Produce an image containing thumbnails of the specified images in a grid:

`pnmindex {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pnm}}`

- Specify the size of the (quadratic) thumbnails:

`pnmindex {{[-s|-size]}} {{50}} {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pnm}}`

- Specify the number of thumbnails per row:

`pnmindex {{[-a|-across]}} {{10}} {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pnm}}`

- Specify the maximum number of colors in the output:

`pnmindex {{[-c|-colors]}} {{512}} {{path/to/input1.pnm path/to/input2.pnm ...}} > {{path/to/output.pnm}}`
