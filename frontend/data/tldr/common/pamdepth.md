---
title: "Reduce Image Depth - Control PAM Images | Online Free DevTools by Hexmos"
name: pamdepth
path: "/freedevtools/tldr/common/pamdepth/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamdepth/"
description: "Reduce image depth with Pamdepth. Modify maxval in PAM images, optimizing color resolution for various applications. Free online tool, no registration required."
category: common
keywords:
- PAM image depth reduction
- PBM image depth control
- Netpbm image processing
- Image maxval modification
- Color resolution converter
- PAM file manipulation
- Image format conversion
- Linux image tools
- Command line image editor
- Netpbm utilities
features:
- Reduce the color depth of PAM images
- Set a new maximum color value for PAM images
- Convert PAM images to different depth levels
- Process PBM images for depth adjustment
- Optimize image file size by reducing color depth
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamdepth

> Reduce the depth (i.e. color resolution) in an image.
> More information: <https://netpbm.sourceforge.net/doc/pamdepth.html>.

- Read a PBM image, set its maxval and save it to a file:

`pamdepth {{maxval}} {{path/to/image.pbm}} > {{path/to/file.pbm}}`
