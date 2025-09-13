---
title: "Convert PBM to XBM - Generate Bitmap Images | Free DevTools"
name: pbmtoxbm
path: /freedevtools/tldr/common/pbmtoxbm
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtoxbm/"
description: "Convert PBM to XBM with pbmtoxbm. Generate X11 and X10 bitmap images from PBM files with this Netpbm tool. Free online tool, no registration required."
category: common
keywords:
- PBM to XBM converter
- XBM generator
- Netpbm image conversion
- Bitmap image converter
- PBM image editor
- X11 bitmap generator
- X10 bitmap generator
- Linux image tools
- Command line image converter
- Image format conversion
features:
- Convert PBM images to X11 XBM format
- Convert PBM images to X10 XBM format
- Generate X11 bitmaps from PBM
- Generate X10 bitmaps from PBM
- Enable explicit specification of X11 or X10 format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtoxbm

> Convert a PBM image to a X11 or X10 bitmap.
> More information: <https://netpbm.sourceforge.net/doc/pbmtoxbm.html>.

- Convert a PBM image to a X11 XBM file:

`pbmtoxbm {{path/to/input_file.pbm}} > {{path/to/output_file.xbm}}`

- Explicitly specify whether an X11 or X10 bitmap should be generated:

`pbmtoxbm -{{x11|x10}} {{path/to/input_file.pbm}} > {{path/to/output_file.xbm}}`
