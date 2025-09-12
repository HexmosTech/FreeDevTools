---
title: "Generate Barcodes - Zint Barcode and QR Code Tool | Free DevTools"
name: zint
path: /freedevtools/tldr/common/zint
canonical: "https://hexmos.com/freedevtools/tldr/common/zint/"
description: "Generate barcodes and QR codes easily with Zint. Create various barcode types for diverse applications. Free online tool, no registration required."
category: common
keywords:
- Barcode generator
- QR code generator
- Barcode encoder
- QR code encoder
- Zint barcode
- Linux barcode generator
- Command line barcode
- Barcode CLI
- Data encoding
- Zint QR code
features:
- Generate various barcode types
- Create QR codes
- Encode data into barcodes
- Save barcode images to files
- List available barcode types
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
