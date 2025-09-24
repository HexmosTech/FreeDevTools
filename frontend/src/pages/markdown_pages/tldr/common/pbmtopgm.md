---
title: "Convert PBM to PGM - Pixel Averaging | Online Free DevTools by Hexmos"
name: pbmtopgm
path: /freedevtools/tldr/common/pbmtopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtopgm/"
description: "Convert PBM images to PGM format with pbmtopgm, averaging pixels for smoother output. Easy image format conversion. Free online tool, no registration required."
category: common
keywords:
- PBM to PGM converter
- Image format conversion
- Pixel averaging tool
- PBM image processing
- PGM image manipulation
- Netpbm conversion
- Linux image tools
- Command line image converter
- Bitmap image processing
- Grayscale image conversion
features:
- Convert PBM images to PGM format
- Average pixel areas for smoother output
- Control pixel averaging area size (w x h)
- Process images directly from the command line
- Generate PGM images suitable for further processing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtopgm

> Convert a PBM image to PGM by averaging areas surrounding individual pixels.
> See also: `pnmconvol`, `pamditherbw`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtopgm.html>.

- Convert PBM image to PGM by averaging the `w`x`h`-sized area surrounding each pixel:

`pbmtopgm {{w}} {{h}} {{path/to/image.pbm}} > {{path/to/output.pgm}}`
