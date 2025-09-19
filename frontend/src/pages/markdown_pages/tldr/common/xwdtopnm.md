---
title: "Convert XWD to PNM - Format Image Files | Online Free DevTools by Hexmos"
name: xwdtopnm
path: /freedevtools/tldr/common/xwdtopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/xwdtopnm/"
description: "Convert XWD files to PNM format with xwdtopnm. Process image files with ease using command line. Free online tool, no registration required."
category: common
keywords:
- XWD to PNM converter
- Image format conversion
- X11 window dump to PNM
- XWD image processing
- PNM file creation
- Command line image converter
- Linux image tools
- Netpbm image utilities
- XWD file analyzer
- Image header extraction
features:
- Convert XWD images to PNM format
- Display verbose information about the conversion
- Dump the X11 header of an XWD file
- Process image files via command line
- Supports X11 and X10 window dump files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xwdtopnm

> Convert an X11 or X10 window dump file to PNM.
> More information: <https://netpbm.sourceforge.net/doc/xwdtopnm.html>.

- Convert a XWD image file to PBM:

`xwdtopnm {{path/to/input_file.xwd}} > {{path/to/output_file.pnm}}`

- Display information about the conversion process:

`xwdtopnm {{[-verb|-verbose]}} {{path/to/input_file.xwd}} > {{path/to/output_file.pnm}}`

- Display the contents of the X11 header of the input file:

`xwdtopnm {{[-h|-headerdump]}} {{path/to/input_file.xwd}} > {{path/to/output_file.pnm}}`
