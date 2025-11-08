---
title: "Shear PNM Image - Control Image Shearing | Online Free DevTools by Hexmos"
name: pnmshear
path: "/freedevtools/tldr/pnm/pnmshear/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmshear/"
description: "Control image shearing with pnmshear. Precisely shear PNM images using command-line. Modify images with angle specifications and background color. Free online tool, no registration required."
category: common
keywords:
- PNM image shearing
- image shearing tool
- netpbm pnmshear
- pnm image editor
- linux image manipulation
- command line image tools
- pnm graphics converter
- image processing scripts
- PNM image angle shear
- PNM batch image processing
features:
- Shear PNM images by specified angle
- Define background color during shearing
- Disable anti-aliasing for faster processing
- Support batch processing of images via scripting
- Integrate into image processing pipelines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmshear

> Shear a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmshear.html>.

- Shear a PNM image by the specified angle:

`pnmshear {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Specify the color of the background in the sheared image:

`pnmshear {{[-b|-background]}} {{blue}} {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Do not perform anti-aliasing:

`pnmshear {{[-n|-noantialias]}} {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
