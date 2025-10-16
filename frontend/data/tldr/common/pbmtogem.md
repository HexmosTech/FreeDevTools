---
title: "Convert PBM to GEM - Image Converter | Online Free DevTools by Hexmos"
name: pbmtogem
path: "/freedevtools/tldr/common/pbmtogem/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtogem/"
description: "Convert PBM image to GEM format with pbmtogem. Compress image files for efficient storage and transfer. Free online tool, no registration required."
category: common
keywords:
- PBM to GEM converter
- image format conversion
- PBM image processing
- GEM image compression
- command line image converter
- Netpbm image tools
- bitmap image converter
- PBM file conversion
- GEM file conversion
- image manipulation
features:
- Convert PBM images to GEM format
- Compress GEM image files
- Suppress informational messages
- Display version information
- Read PBM image input
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtogem

> Read a PBM image as input and produce a compressed GEM .img file as output.
> `pbmtogem` cannot compress repeated lines.
> More information: <https://netpbm.sourceforge.net/doc/pbmtogem.html>.

- Convert a PBM image into a GEM .img file:

`pbmtogem {{path/to/file.pbm}} > {{path/to/file.img}}`

- Suppress all informational messages:

`pbmtogem {{[-q|-quiet]}}`

- Display version:

`pbmtogem {{[-v|-version]}}`
