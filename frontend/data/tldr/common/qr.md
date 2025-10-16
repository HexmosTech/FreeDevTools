---
title: "Generate QR Codes - Command Line QR Generator | Online Free DevTools by Hexmos"
name: qr
path: "/freedevtools/tldr/common/qr/"
canonical: "https://hexmos.com/freedevtools/tldr/common/qr/"
description: "Generate QR codes quickly with Command Line QR Generator. Encode data into scannable images directly from your terminal. Free online tool, no registration required."
category: common
keywords:
- qr code generator
- command line qr code
- terminal qr code
- ansi qr code
- vt100 qr code
- data encoding
- image generation
- command line tools
- linux qr code
- macos qr code
features:
- Generate QR codes from text data
- Customize error correction levels
- Pipe output from other commands into QR codes
- Save QR codes as PNG images
- Create QR codes directly in the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# qr

> Generate QR codes in the terminal with ANSI VT-100 escape codes.
> More information: <https://manned.org/qr>.

- Generate a QR code:

`qr "{{data}}"`

- Specify the error correction level (defaults to `M`):

`qr --error-correction {{L|M|Q|H}} "{{data}}"`

- Generate a QR code from the output of another command:

`{{command}} | qr`

- Save the QR code as a PNG image:

`qr "{{data}}" > {{path/to/file.png}}`
