---
title: "Generate Barcodes with Zint - QR Code & Barcode Generator | Online Free DevTools by Hexmos"
name: zint
path: /freedevtools/tldr/common/zint
canonical: "https://hexmos.com/freedevtools/tldr/common/zint/"
description: "Generate barcodes and QR codes easily with the Zint command-line tool. Create various barcode types for diverse applications, including EAN, UPC, and QR codes. Free online tool, no registration required."
category: common
keywords:
  - Barcode Generator Zint
  - QR Code Generator Zint
  - Zint Barcode Generator Linux
  - Command Line Barcode Generator
  - Zint QR Code Generator Linux
  - Generate EAN Barcodes Zint
  - Generate UPC Barcodes Zint
  - Zint Barcode Command Line
  - Create Barcodes from Data Zint
  - Encode Data into Barcodes Zint
features:
  - Generate various barcode symbologies (e.g., EAN, UPC, QR Code)
  - Encode data into different barcode formats
  - Save generated barcodes as image files
  - Use command-line options for flexible barcode customization
  - List all supported barcode types for easy reference
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zint

> Generate barcodes and QR codes.
> More information: <https://www.zint.org.uk/manual/chapter/4>.

- Generate a barcode and save it:

`zint --data "{{UTF-8 data}}" --output {{path/to/file}}`

- Specify a code type for generation:

`zint --barcode {{code_type}} --data "{{UTF-8 data}}" --output {{path/to/file}}`

- List all supported code types:

`zint --types`
