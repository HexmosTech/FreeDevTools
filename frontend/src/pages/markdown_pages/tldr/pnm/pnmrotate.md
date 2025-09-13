---
title: "Rotate PNM Image - Transform Images | Free DevTools"
name: pnmrotate
path: /freedevtools/tldr/common/pnmrotate
canonical: "https://hexmos.com/freedevtools/tldr/common/pnmrotate/"
description: "Transform images with PNM Rotate. Rotate PNM images easily and specify background colors. Free online tool, no registration required."
category: common
keywords:
- pnm image rotation
- image rotation tool
- pnm transformation
- image manipulation
- netpbm pnmrotate
- linux image tools
- command line image processing
- rotate image by angle
- pnm file converter
- image editing
features:
- Rotate a PNM image by a specified angle
- Define background color during rotation
- Disable anti-aliasing for performance
- Transform images via command line
- Perform image manipulation tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmrotate

> Rotate a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmrotate.html>.

- Rotate a PNM image by some angle (measured in degrees, counter-clockwise):

`pnmrotate {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Specify the background color exposed by rotating the input image:

`pnmrotate {{[-b|-background]}} {{color}} {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Disable anti-aliasing, improving performance but decreasing quality:

`pnmrotate {{[-n|-noantialias]}} {{angle}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
