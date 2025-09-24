---
title: "Slice Netpbm Image - Control Image Tiles | Online Free DevTools by Hexmos"
name: pamdice
path: /freedevtools/tldr/common/pamdice
canonical: "https://hexmos.com/freedevtools/tldr/common/pamdice/"
description: "Slice Netpbm image easily with pamdice. Control image tiles by height and width. Free online tool, no registration required. Manage image segments using command line."
category: common
keywords:
- netpbm image slice
- image tile cutter
- ppm image divider
- pam image splitter
- netpbm cropping tool
- linux image manipulation
- command line image editing
- image segmentation
- netpbm utilities
- image tiling tool
features:
- Slice Netpbm images into specified height and width tiles
- Overlap resulting tiles horizontally and vertically
- Define output filename stem for sliced tiles
- Process ppm images
- Control image segmentation from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamdice

> Slice a Netpbm image vertically or horizontally.
> See also: `pamundice`.
> More information: <https://netpbm.sourceforge.net/doc/pamdice.html>.

- Slice a Netpbm image such that the resulting tiles have the specified height and width:

`pamdice {{[-o|-outstem]}} {{path/to/filename_stem}} {{[-he|-height]}} {{value}} {{[-w|-width]}} {{value}} {{path/to/input.ppm}}`

- Make the produced pieces overlap by the specified amount horizontally and vertically:

`pamdice {{[-o|-outstem]}} {{path/to/filename_stem}} {{[-he|-height]}} {{value}} {{[-w|-width]}} {{value}} {{[-ho|-hoverlap]}} {{value}} {{[-vo|-voverlap]}} {{value}} {{path/to/input.ppm}}`
