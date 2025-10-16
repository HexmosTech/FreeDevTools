---
title: "Generate QR Codes - Convert Text & Files | Online Free DevTools by Hexmos"
name: qrencode
path: "/freedevtools/tldr/common/qrencode/"
canonical: "https://hexmos.com/freedevtools/tldr/common/qrencode/"
description: "Generate QR codes with qrencode. Convert text strings and files into QR codes for various purposes. Free online tool, no registration required."
category: common
keywords:
- QR code generator
- QR code encoder
- PNG QR code
- EPS QR code
- Terminal QR code
- Linux QR code
- Command line QR code
- Text to QR code
- File to QR code
- qrencode command
features:
- Convert text to QR code images
- Convert files to QR code images
- Output QR codes in PNG format
- Output QR codes in EPS format
- Display QR codes in the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qrencode

> QR Code generator. Supports PNG and EPS.
> More information: <https://manned.org/qrencode>.

- Convert a string to a QR code and save to an output file:

`qrencode {{[-o|--output]}} {{path/to/output_file.png}} {{string}}`

- Convert an input file to a QR code and save to an output file:

`qrencode {{[-o|--output]}} {{path/to/output_file.png}} {{[-r|--read-from]}} {{path/to/input_file}}`

- Convert a string to a QR code and print it in terminal:

`qrencode {{[-t|--type]}} ansiutf8 {{string}}`

- Convert input from pipe to a QR code and print it in terminal:

`echo {{string}} | qrencode {{[-t|--type]}} ansiutf8`
