---
title: "PNM Remap - Replace Image Colors | Online Free DevTools by Hexmos"
name: pnmremap
path: /freedevtools/tldr/pnm/pnmremap
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmremap/"
description: "Replace image colors with PNM Remap. Convert image palettes and apply dithering techniques. Free online tool, no registration required."
category: common
keywords:
- PNM image remap
- Image color replacement
- PPM palette converter
- Image dithering tool
- PNM color palette
- Floyd-Steinberg dithering
- Color mapping utility
- Linux image manipulation
- Netpbm image tools
- Image color remapping
features:
- Replace image colors with a specified palette
- Apply Floyd-Steinberg dithering for color approximation
- Use a default color for missing palette colors
- Remap colors based on a PPM palette file
- Convert image colors using Netpbm
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmremap

> Replace the colors in a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmremap.html>.

- Replace the colors in an image with those in the specified color palette:

`pnmremap {{[-ma|-mapfile]}} {{path/to/palette_file.ppm}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Use Floyd-Steinberg dithering for representing colors missing in the color palette:

`pnmremap {{[-ma|-mapfile]}} {{path/to/palette_file.ppm}} {{[-fs|-floyd]}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Use the first color in the palette for representing colors missing in the color palette:

`pnmremap {{[-ma|-mapfile]}} {{path/to/palette_file.ppm}} {{[-fi|-firstisdefault]}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`

- Use the specified color for representing colors missing in the color palette:

`pnmremap {{[-ma|-mapfile]}} {{path/to/palette_file.ppm}} {{[-m|-missingcolor]}} {{color}} {{path/to/input.pnm}} > {{path/to/output.pnm}}`
