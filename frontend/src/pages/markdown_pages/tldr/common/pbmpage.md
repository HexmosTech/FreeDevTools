---
title: "Generate PBM Page - Create Printing Test Patterns | Online Free DevTools by Hexmos"
name: pbmpage
path: /freedevtools/tldr/common/pbmpage
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmpage/"
description: "Generate PBM page files with pbmpage, ideal for creating printing test patterns. Ensure precise printing with this command line tool. Free online tool, no registration required."
category: common
keywords:
- PBM image generation
- printing test pattern
- Netpbm image format
- command-line image tool
- PBM page generator
- bitmap printing pattern
- Linux printing utility
- image processing command
- PBM file creation
- image manipulation tool
features:
- Generate PBM images for US standard paper size
- Generate PBM images for A4 paper size
- Specify the pattern type for PBM image generation
- Create custom printing test patterns from the command line
- Output PBM image data to a file for printing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pbmpage

> Generate a test pattern for printing.
> More information: <https://netpbm.sourceforge.net/doc/pbmpage.html>.

- Generate a test pattern for printing onto US standard paper:

`pbmpage > {{path/to/file.pbm}}`

- Generate a test pattern for printing onto A4 paper:

`pbmpage -a4 > {{path/to/file.pbm}}`

- Specify the pattern to use:

`pbmpage {{1|2|3}} > {{path/to/file.pbm}}`
