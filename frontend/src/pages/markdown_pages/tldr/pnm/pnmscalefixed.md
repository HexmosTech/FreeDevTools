---
title: "Scale PNM Images - Resize Image with pnmscalefixed | Online Free DevTools by Hexmos"
name: pnmscalefixed
path: /freedevtools/tldr/pnm/pnmscalefixed
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmscalefixed/"
description: "Resize PNM images quickly with pnmscalefixed. Scale image dimensions and aspect ratio efficiently. Free online tool, no registration required."
category: common
keywords:
- PNM image scaling
- image resizing
- PNM scaling utility
- pnmscalefixed command
- Netpbm tools
- image manipulation
- PNM image converter
- common command
- image dimension change
- aspect ratio scaling
features:
- Scale PNM images to specified width and height
- Maintain aspect ratio while scaling
- Resize by scale factors for width and height independently
- Perform quick image scaling for efficiency
- Convert image dimension using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmscalefixed

> Scale a PNM file quickly with possibly reduced quality.
> See also: `pamscale`.
> More information: <https://netpbm.sourceforge.net/doc/pnmscalefixed.html>.

- Scale an image such that the result has the specified dimensions:

`pnmscalefixed {{[-w|-width]}} {{width}} {{[-h|-height]}} {{height}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Scale an image such that the result has the specified width, keeping the aspect ratio:

`pnmscalefixed {{[-w|-width]}} {{width}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Scale an image such that its width and height is changed by the specified factors:

`pnmscalefixed {{[-xsc|-xscale]}} {{x_factor}} {{[-ysc|-yscale]}} {{y_factor}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
