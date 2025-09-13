---
title: "Convert PBM to EPSI - Generate EPSI Preview Bitmaps | Free DevTools"
name: pbmtoepsi
path: /freedevtools/tldr/common/pbmtoepsi
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtoepsi/"
description: "Convert PBM images to EPSI format with PBMtoEPSI. Generate encapsulated PostScript preview bitmaps. Free online tool, no registration required."
category: common
keywords:
- PBM to EPSI
- EPSI converter
- Bitmap converter
- Image converter
- Netpbm tools
- PostScript preview
- PBM image
- Linux image tools
- macOS image converter
- Command line image tool
features:
- Convert PBM images to EPSI format
- Generate encapsulated PostScript preview bitmaps
- Specify output image resolution
- Create boundary boxes only
- Produce quadratic output images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmtoepsi

> Convert a PBM image to an encapsulated PostScript style preview bitmap.
> More information: <https://netpbm.sourceforge.net/doc/pbmtoepsi.html>.

- Convert a PBM image to an encapsulated PostScript style preview bitmap:

`pbmtoepsi {{path/to/image.pbm}} > {{path/to/output.bmp}}`

- Produce a quadratic output image with the specified resolution:

`pbmtoepsi {{[-d|-dpi]}} {{144}} {{path/to/image.pbm}} > {{path/to/output.bmp}}`

- Produce an output image with the specified horizontal and vertical resolution:

`pbmtoepsi {{[-d|-dpi]}} {{72x144}} {{path/to/image.pbm}} > {{path/to/output.bmp}}`

- Only create a boundary box:

`pbmtoepsi {{[-b|-bbonly]}} {{path/to/image.pbm}} > {{path/to/output.bmp}}`
