---
title: "Convert SPOT to PGM - Image Conversion | Online Free DevTools by Hexmos"
name: spottopgm
path: /freedevtools/tldr/common/spottopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/spottopgm/"
description: "Convert SPOT image to PGM format with spottopgm. Extract color channels and specific rectangles for image processing. Free online tool, no registration required."
category: common
keywords:
- SPOT to PGM converter
- Image format conversion
- SPOT image processing
- PGM file generation
- SPOT satellite imagery
- Image channel extraction
- Rectangle image cropping
- Command line image tools
- netpbm image utilities
- Linux image converter
features:
- Convert SPOT images to PGM format
- Extract specific color channels from SPOT images
- Extract rectangular regions from SPOT images
- Support for various SPOT image formats
- Command-line interface for batch processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spottopgm

> Convert a SPOT satellite image to PGM format.
> More information: <https://netpbm.sourceforge.net/doc/spottopgm.html>.

- Convert the specified SPOT image to PGM format:

`spottopgm {{path/to/file.spot}} > {{path/to/output.pgm}}`

- Extract the specified color channel:

`spottopgm -{{1|2|3}} {{path/to/file.spot}} > {{path/to/output.pgm}}`

- Extract the specified rectangle from the input image:

`spottopgm {{first_col first_row last_col last_row}} {{path/to/file.spot}} > {{path/to/output.pgm}}`
