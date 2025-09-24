---
title: "Generate UPC PBM Image - Create Barcodes | Online Free DevTools by Hexmos"
name: pbmupc
path: /freedevtools/tldr/common/pbmupc
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmupc/"
description: "Generate UPC barcode images with pbmupc. Create PBM format barcodes for products using command-line. Free online tool, no registration required."
category: common
keywords:
- UPC PBM Image Generator
- PBM Barcode Creator
- UPC Code Generator
- Barcode Image Linux
- PBM Image Maker
- Command Line Barcode
- Linux Barcode Generator
- UPC Encoder PBM
- PBM Image Utility
- Common Barcode Tools
features:
- Generate PBM images of UPC barcodes.
- Support multiple UPC styles.
- Customize the output PBM barcode image.
- Control checksum display options.
- Generate barcodes directly from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmupc

> Generate a PBM image of a Universal Product Code (UPC).
> More information: <https://netpbm.sourceforge.net/doc/pbmupc.html>.

- Generate a UPC image for the specified product type, manufacturer code, and product code:

`pbmupc {{product_type}} {{manufacturer_code}} {{product_code}} > {{path/to/output.pbm}}`

- Use an alternative style that does not display the checksum:

`pbmupc -s2 {{product_type}} {{manufacturer_code}} {{product_code}} > {{path/to/output.pbm}}`
