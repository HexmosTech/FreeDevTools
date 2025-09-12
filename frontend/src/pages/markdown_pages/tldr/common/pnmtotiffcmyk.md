---
title: "Convert PNM to TIFF CMYK - Image Conversion | Free DevTools"
name: pnmtotiffcmyk
path: /freedevtools/tldr/common/pnmtotiffcmyk
canonical: "https://hexmos.com/freedevtools/tldr/common/pnmtotiffcmyk/"
description: "Convert PNM images to CMYK encoded TIFF with pnmtotiffcmyk.  Control compression and fill order for optimized image conversion. Free online tool, no registration required."
category: common
keywords:
- PNM to TIFF CMYK conversion
- Image format conversion
- PNM to TIFF converter
- CMYK TIFF generator
- Netpbm image processing
- Command line image conversion
- TIFF compression options
- Image fill order control
- Graphics file converter
- Linux image tools
features:
- Convert PNM image files to CMYK encoded TIFF format
- Specify TIFF compression method (none, packbits, lzw)
- Control the fill order of the output TIFF image
- Process images directly from the command line
- Integrate image conversion into scripts and workflows
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmtotiffcmyk

> Convert a PNM image to a CMYK encoded TIFF.
> More information: <https://netpbm.sourceforge.net/doc/pnmtotiffcmyk.html>.

- Convert a PNM image to a CMYK encoded TIFF:

`pnmtotiffcmyk {{path/to/input_file.pnm}} > {{path/to/output_file.tiff}}`

- Specify the TIFF compression method:

`pnmtotiffcmyk -{{none|packbits|lzw}} {{path/to/input_file.pnm}} > {{path/to/output_file.tiff}}`

- Control the fill order:

`pnmtotiffcmyk -{{msb2lsb|lsb2msb}} {{path/to/input_file.pnm}} > {{path/to/output_file.tiff}}`
