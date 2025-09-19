---
title: "Convert PNM Images - Mercator Projection | Online Free DevTools by Hexmos"
name: pnmmercator
path: "/freedevtools/tldr/pnm/pnmmercator"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmmercator/"
description: "Convert PNM images with pnmmercator for Mercator projections. Transform and manipulate Netpbm image formats effortlessly. Free online tool, no registration required."
category: common
keywords:
- "PNM image converter"
- "Mercator projection tool"
- "Netpbm image transformation"
- "Image projection software"
- "Raster image conversion"
- "pnmmercator linux"
- "pnmmercator macos"
- "pnmmercator command"
- "rectangular to Mercator converter"
- "Mercator to rectangular converter"
features:
- "Convert rectangular projection images to Mercator projection"
- "Convert Mercator projection images to rectangular projection"
- "Transform Netpbm image formats"
- "Process images directly from the command line"
- "Support inverse Mercator transformations"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmmercator

> Perform Mercator transformations on Netpbm images.
> See also: `pnmglobe`.
> More information: <https://netpbm.sourceforge.net/doc/pnmmercator.html>.

- Convert a rectangular projection worldmap to Mercator projection:

`pnmmercator {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Convert a Mercator projection worldmap to rectangular projection:

`pnmmercator {{[-i|-inverse]}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
