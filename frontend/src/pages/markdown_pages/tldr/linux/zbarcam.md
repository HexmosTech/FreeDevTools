---
title: "Scan Barcodes - Decode QR Codes with Zbarcam | Online Free DevTools by Hexmos"
name: zbarcam
path: /freedevtools/tldr/linux/zbarcam
canonical: "https://hexmos.com/freedevtools/tldr/linux/zbarcam/"
description: "Scan barcodes and decode QR codes with Zbarcam. Quickly identify products and retrieve information using your Linux terminal. Free online tool, no registration required."
category: linux
keywords:
- barcode scanner linux
- qr code reader linux
- zbarcam linux
- video barcode decoder
- linux command line barcode
- linux qr code scanner
- scan barcode terminal
- decode qr code terminal
- video barcode reader
- camera barcode scanner
features:
- Decode barcodes from video devices
- Scan QR codes from video input
- Disable display output for background scanning
- Print raw barcode data without type information
- Specify a custom capture device
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zbarcam

> Scan and decode barcodes (and QR codes) from a video device.
> More information: <https://manned.org/zbarcam>.

- Continuously read barcodes and print them to `stdout`:

`zbarcam`

- Disable output video window while scanning:

`zbarcam --nodisplay`

- Print barcodes without type information:

`zbarcam --raw`

- Define capture device:

`zbarcam {{/dev/video_device}}`
