---
title: "Create PNM Montage - Compose Images | Free DevTools"
name: pnmmontage
path: /freedevtools/tldr/pnm/pnmmontage
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmmontage/"
description: "Create a PNM montage with pnmmontage. Easily compose multiple PNM images into a single image. Free online tool, no registration required."
category: common
keywords:
- pnm image montage
- pnm image composer
- image composition tool
- netpbm image utility
- pnm image manipulation
- linux image tools
- command line image editor
- image packing tool
- batch image processing
- create image grids
features:
- Compose multiple PNM images into a single montage
- Control packing quality for optimal image arrangement
- Generate montages with specified packing percentages
- Output image positions to a data file
- Create image grids from command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmmontage

> Create a montage from multiple PNM images.
> More information: <https://netpbm.sourceforge.net/doc/pnmmontage.html>.

- Produce a packing of the specified images:

`pnmmontage {{path/to/image1.pnm path/to/image2.pnm ...}} > {{path/to/output.pnm}}`

- Specify the quality of the packing (Note: Larger values produce smaller packings but take longer to compute.):

`pnmmontage -{{0..9}} {{path/to/image1.pnm path/to/image2.pnm ...}} > {{path/to/output.pnm}}`

- Produce a packing that is not larger than `p` percent of the optimal packing:

`pnmmontage {{[-qua|-quality]}} {{p}} {{path/to/image1.pnm path/to/image2.pnm ...}} > {{path/to/output.pnm}}`

- Write the positions of the input files within the packed image to a machine-readable file:

`pnmmontage {{[-d|-data]}} {{path/to/datafile}} {{path/to/image1.pnm path/to/image2.pnm ...}} > {{path/to/output.pnm}}`
