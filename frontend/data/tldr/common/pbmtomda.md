---
title: "PBM to MDA - Convert Image File | Online Free DevTools by Hexmos"
name: pbmtomda
path: "/freedevtools/tldr/common/pbmtomda/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmtomda/"
description: "Convert PBM image to MDA file with pbmtomda. Handle image format conversions seamlessly and preserve picture quality. Free online tool, no registration required."
category: common
keywords:
- PBM to MDA conversion
- image format conversion
- PBM file converter
- MDA file generator
- bitmap image processing
- Netpbm tools
- command line image tools
- image file conversion
- linux image converter
- PBM image manipulation
features:
- Convert PBM images to MDA format
- Invert image colors during conversion
- Halve the input image's height
- Process images directly from the command line
- Create Microdesign MDA files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmtomda

> Convert a PBM image to a Microdesign MDA file.
> See also: `mdatopbm`.
> More information: <https://netpbm.sourceforge.net/doc/pbmtomda.html>.

- Convert a PBM image to a MDA file:

`pbmtomda {{path/to/image.pbm}} > {{path/to/output.mda}}`

- Invert the colors in the input image:

`pbmtomda -i {{path/to/image.pbm}} > {{path/to/output.mda}}`

- Halve the input image's height:

`pbmtomda -d {{path/to/image.pbm}} > {{path/to/output.mda}}`
