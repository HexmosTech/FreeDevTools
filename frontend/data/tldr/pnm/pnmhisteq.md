---
title: "Equalize PNM Image - Enhance Contrast | Online Free DevTools by Hexmos"
name: pnmhisteq
path: "/freedevtools/tldr/pnm/pnmhisteq/"
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmhisteq/"
description: "Enhance PNM image contrast with pnmhisteq. Improve image quality using histogram equalization and adjust grey levels. Free online tool, no registration required."
category: common
keywords:
- PNM Image Equalization
- PNM Histogram Equalization
- Image Contrast Enhancement
- PNM Image Processing
- PNM Image Editor
- Histogram Equalization Tool
- PNM Image Adjustment
- Image Level Adjustment
- PNM Greyscale Conversion
- PNM Command Line
features:
- Enhance PNM image contrast using histogram equalization
- Adjust the distribution of grey levels in PNM images
- Equalize only the grey pixels in a PNM image
- Exclude black pixels from histogram equalization
- Exclude white pixels from histogram equalization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmhisteq

> Histogram-equalize a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmhisteq.html>.

- Increase the contrast of a PNM image using histogram equalization:

`pnmhisteq {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Only modify grey pixels:

`pnmhisteq {{[-g|-grey]}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Do not include black or white pixels in the histogram equalization:

`pnmhisteq -no{{black|white}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
