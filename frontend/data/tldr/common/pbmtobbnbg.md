---
title: "Convert PBM to BitGraph - Image Conversion | Online Free DevTools by Hexmos"
name: pbmtobbnbg
path: "/freedevtools/tldr/common/pbmtobbnbg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtobbnbg/"
description: "Convert PBM images to BitGraph format with pbmtobbnbg. Process image data and prepare it for BitGraph terminal displays. Free online tool, no registration required."
category: common
keywords:
- PBM to BitGraph converter
- Image format conversion tool
- BitGraph graphic generation
- PBM image processing
- Linux image converter
- Netpbm image utilities
- Image display pixel data
- PBM image to dpd
- Rasterop image conversion
- Command line image tools
features:
- Converts PBM image files to BitGraph format
- Generates BitGraph terminal Display Pixel Data (DPD) sequences
- Supports raster operation specification during conversion
- Processes PBM images for BitGraph displays
- Provides command line image format conversion capabilities
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtobbnbg

> Convert a PBM image to a BitGraph graphic.
> More information: <https://netpbm.sourceforge.net/doc/pbmtobbnbg.html>.

- Convert a PBM image to a BitGraph terminal Display Pixel Data sequence:

`pbmtobbnbg < {{path/to/image.pbm}} > {{path/to/output.dpd}}`

- Specify the rasterop:

`pbmtobbnbg {{3}} < {{path/to/image.pbm}} > {{path/to/output.dpd}}`
