---
title: "Convert MDA to PBM - Image Converter | Online Free DevTools by Hexmos"
name: mdatopbm
path: /freedevtools/tldr/common/mdatopbm
canonical: "https://hexmos.com/freedevtools/tldr/common/mdatopbm/"
description: "Convert MDA image files with mdatopbm, an image converter. Easily convert and manipulate image formats. Free online tool, no registration required."
category: common
keywords:
- MDA to PBM converter
- PBM image generator
- Convert MDA image file
- Microdesign MDA conversion
- Netpbm image tools
- Command line image converter
- Image format conversion
- MDA image manipulation
- Linux image utilities
- Common platform image tool
features:
- Convert Microdesign MDA files to PBM image format
- Invert colors within the input MDA image during conversion
- Double the height of the input image
- Process MDA images from the command line
- Generate PBM images compatible with other Netpbm tools
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mdatopbm

> Convert a Microdesign MDA file to a PBM image.
> See also: `pbmtomda`.
> More information: <https://netpbm.sourceforge.net/doc/mdatopbm.html>.

- Convert a MDA file to a PBM image:

`mdatopbm {{path/to/image.mda}} > {{path/to/output.pbm}}`

- Invert the colors in the input image:

`mdatopbm -i {{path/to/image.mda}} > {{path/to/output.pbm}}`

- Double the input image's height:

`mdatopbm -d {{path/to/image.mda}} > {{path/to/output.pbm}}`
