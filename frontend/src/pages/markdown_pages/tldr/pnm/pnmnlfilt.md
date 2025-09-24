---
title: "Filter PNM Image - Apply Non-Linear Filters | Online Free DevTools by Hexmos"
name: pnmnlfilt
path: /freedevtools/tldr/pnm/pnmnlfilt
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmnlfilt/"
description: "Filter PNM images with pnmnlfilt. Apply alpha trimmed mean, optimal smoothing, and edge enhancement filters. Free online tool, no registration required."
category: common
keywords:
- PNM image filter
- Non-linear filter PNM
- Image smoothing tool
- PNM image enhancement
- Netpbm image processing
- Alpha trimmed mean filter
- Optimal estimation smoothing
- Edge enhancement filter
- PNM image manipulation
- Command line image filter
features:
- Apply alpha trimmed mean filter to PNM images
- Apply optimal estimation smoothing filter to PNM images
- Apply edge enhancement filter to PNM images
- Manipulate PNM image pixel values
- Process PNM images from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmnlfilt

> Apply a non-linear filter onto a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmnlfilt.html>.

- Apply the "alpha trimmed mean" filter with the specified alpha and radius values onto the PNM image:

`pnmnlfilt {{0.0..0.5}} {{radius}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Apply the "optimal estimation smoothing" filter with the specified noise threshold and radius onto the PNM image:

`pnmnlfilt {{1.0..2.0}} {{radius}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Apply the "edge enhancement" filter with the specified alpha and radius onto the PNM image:

`pnmnlfilt {{-0.9..(-0.1)}} {{radius}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
