---
title: "Convert PNM to Palm - Create Palm Images | Free DevTools"
name: pnmtopalm
path: /freedevtools/tldr/pnm/pnmtopalm
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtopalm/"
description: "Convert PNM images to Palm bitmaps with Pnmtopalm. Generate Palm images with various color depths and compression methods. Free online tool, no registration required."
category: common
keywords:
- PNM to Palm converter
- Palm bitmap creator
- Image format conversion
- PNM image processing
- Palm image generator
- Netpbm tools
- Linux image conversion
- Command line image tool
- Raster graphic conversion
- Palm OS image
features:
- Convert PNM images to Palm bitmaps.
- Specify the color depth for Palm bitmaps.
- Choose from multiple compression methods.
- Build custom colormaps for Palm images.
- Define the bitmap's density for optimal display.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmtopalm

> Convert a PNM image to a Palm bitmap.
> More information: <https://netpbm.sourceforge.net/doc/pnmtopalm.html>.

- Convert a PNM image to a Palm bitmap:

`pnmtopalm {{path/to/file.pnm}} > {{path/to/file.palm}}`

- Specify the color depth of the resulting bitmap:

`pnmtopalm {{[-dep|-depth]}} {{1|2|4|8|16}} {{path/to/file.pnm}} > {{path/to/file.palm}}`

- Choose a compression method for the resulting bitmap:

`pnmtopalm -{{scanline_compression|rle_compression|packbits_compression}} {{path/to/file.pnm}} > {{path/to/file.palm}}`

- Build a custom colormap and include it in the resulting bitmap:

`pnmtopalm {{[-c|-colormap]}} {{path/to/file.pnm}} > {{path/to/file.palm}}`

- Specify the bitmap's density:

`pnmtopalm {{[-den|-density]}} {{72|108|144|216|288}} {{path/to/file.pnm}} > {{path/to/file.palm}}`
