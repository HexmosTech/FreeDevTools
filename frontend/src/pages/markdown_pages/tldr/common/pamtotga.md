---
title: "Convert Netpbm to Targa - Format Images | Online Free DevTools by Hexmos"
name: pamtotga
path: /freedevtools/tldr/common/pamtotga
canonical: "https://hexmos.com/freedevtools/tldr/common/pamtotga/"
description: "Format Netpbm images to Truevision Targa files with pamtotga. Convert images with different colormaps using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- Netpbm to Targa converter
- PAM to TGA conversion
- Image format conversion
- Netpbm image processing
- Targa file generation
- Command-line image converter
- Linux image tools
- macOS image tools
- Netpbm conversion tools
- Image file format manipulation
features:
- Convert Netpbm images to Targa format
- Specify the colormap for the output image
- Support different colormap options (cmap, cmap16, mono, rgb)
- Display the version of the pamtotga tool
- Process images using the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamtotga

> Convert a Netpbm image to a TrueVision Targa file.
> More information: <https://netpbm.sourceforge.net/doc/pamtotga.html>.

- Convert a Netpbm image to a TrueVision Targa file:

`pamtotga {{path/to/file.pam}} > {{path/to/output.tga}}`

- Specify the color map of the output image:

`pamtotga -{{cmap|cmap16|mono|rgb}} {{path/to/file.pam}} > {{path/to/output.tga}}`

- Display version:

`pamtotga {{[-v|-version]}}`
