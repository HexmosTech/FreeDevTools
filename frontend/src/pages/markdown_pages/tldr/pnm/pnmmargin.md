---
title: "Add PNM Border - Control Image Margins | Free DevTools"
name: pnmmargin
path: /freedevtools/tldr/pnm/pnmmargin
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmmargin/"
description: "Add PNM border with pnmmargin. Control image margins by specifying size and color for visually appealing results. Free online tool, no registration required."
category: common
keywords:
- PNM image border
- Image margin control
- PNM image editor
- PNM command line
- Netpbm PNM tools
- Linux image manipulation
- macOS image processing
- PNM border size
- PNM border color
- Image format converter
features:
- Add a border of a specified size to a PNM image.
- Specify a custom color for the added border.
- Adjust image margins through command-line arguments.
- Modify PNM image appearance with precise border control.
- Enhance PNM images with visual formatting.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmmargin

> Add a border to a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmmargin.html>.

- Add a border of the specified size to a PNM image:

`pnmmargin {{size}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Specify the color of the border:

`pnmmargin {{[-c|-color]}} {{color}} {{size}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
