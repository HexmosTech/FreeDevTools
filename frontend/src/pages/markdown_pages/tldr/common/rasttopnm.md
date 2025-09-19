---
title: "Convert RAST to PNM - Transform Rasterfiles | Online Free DevTools by Hexmos"
name: rasttopnm
path: /freedevtools/tldr/common/rasttopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/rasttopnm/"
description: "Convert RAST images to PNM files with rasttopnm. Transform rasterfiles to portable network maps for wider compatibility. Free online tool, no registration required."
category: common
keywords:
- RAST to PNM conversion
- Rasterfile to PNM converter
- Image format conversion
- Sun rasterfile converter
- PNM image generator
- rasttopnm command
- common command
- image manipulation
- raster graphics
- graphics conversion
features:
- Convert Sun rasterfiles to PNM format
- Utilize colormap indices for color values
- Transform raster graphics for portability
- Generate portable network maps from raster images
- Enable image manipulation using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rasttopnm

> Convert a Sun rasterfile to a PNM file.
> More information: <https://netpbm.sourceforge.net/doc/rasttopnm.html>.

- Convert a RAST image to a PNM file:

`rasttopnm {{path/to/input.rast}} > {{path/to/output.pnm}}`

- Use the color map indices in the raster if they are color values:

`rasttopnm {{[-i|-index]}} {{path/to/input.rast}} > {{path/to/output.pnm}}`
