---
title: "Convert Palm Bitmap - Generate PNM Image | Free DevTools"
name: palmtopnm
path: /freedevtools/tldr/common/palmtopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/palmtopnm/"
description: "Convert Palm bitmap to PNM image with palmtopnm. Generate, view, and manipulate image formats with this command line tool. Free online tool, no registration required."
category: common
keywords:
- palm bitmap converter
- PNM image generator
- image format conversion
- command line image tool
- palmtopnm linux
- palmtopnm macos
- palmtopnm common
- bitmap to PNM
- image rendition tool
- image histogram generator
features:
- Convert Palm bitmap files to PNM image format
- Display detailed information about Palm bitmap files
- Convert specific renditions of images within a Palm file
- Generate a color histogram of a Palm bitmap
- Output the transparent color setting of a Palm bitmap image
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# palmtopnm

> Convert a Palm bitmap file to a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/palmtopnm.html>.

- Convert a Palm bitmap to a PNM image:

`palmtopnm {{path/to/file.palm}} > {{path/to/file.pnm}}`

- Display information about the input file:

`palmtopnm {{[-verb|-verbose]}} {{path/to/file.palm}} > {{path/to/file.pnm}}`

- Convert the n'th rendition of the image contained in the input file:

`palmtopnm {{[-r|-rendition]}} {{n}} {{path/to/file.palm}} > {{path/to/file.pnm}}`

- Write a histogram of the colors in the input file to `stdout`:

`palmtopnm {{[-s|-showhist]}} {{path/to/file.palm}} > {{path/to/file.pnm}}`

- Output the transparent color of the input image if set:

`palmtopnm {{[-t|-transparent]}} {{path/to/file.palm}}`
