---
title: "Paste PNM Images - Control PNM Image Pasting | Free DevTools"
name: pnmpaste
path: /freedevtools/tldr/pnm/pnmpaste
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmpaste/"
description: "Control PNM image pasting with pnmpaste. Paste images, combine pixels with boolean operations, and create complex compositions. Free online tool, no registration required."
category: common
keywords:
- PNM image pasting
- PNM image composition
- PNM boolean operations
- Netpbm image tools
- Linux image utilities
- Command line image processing
- Image overlay command
- Image blending tools
- Pixel manipulation tools
- PNM image editor
features:
- Paste one PNM image into another at specified coordinates
- Combine overlapping pixels using boolean logic
- Accept PNM image data from standard input
- Support AND, NAND, OR, NOR, XOR, and XNOR boolean operations
- Create composite images through command-line instructions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmpaste

> Paste a PNM image into another PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmpaste.html>.

- Paste a PNM image into another PNM image at the specified coordinates:

`pnmpaste {{x}} {{y}} {{path/to/image1.pnm}} {{path/to/image2.pnm}} > {{path/to/output.pnm}}`

- Paste the image read from `stdin` into the specified image:

`{{command}} | pnmpaste {{x}} {{y}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Combine the overlapping pixels by the specified boolean operation, where white pixels represent `true` while black pixels represent `false`:

`pnmpaste -{{and|nand|or|nor|xor|xnor}} {{x}} {{y}} {{path/to/image1.pnm}} {{path/to/image2.pnm}} > {{path/to/output.pnm}}`
