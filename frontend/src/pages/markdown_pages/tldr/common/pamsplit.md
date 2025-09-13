---
title: "Split Netpbm Images - Divide PAM Files | Free DevTools"
name: pamsplit
path: /freedevtools/tldr/common/pamsplit
canonical: "https://hexmos.com/freedevtools/tldr/common/pamsplit/"
description: "Split Netpbm images with pamsplit. Divide multi-image PAM files into individual images for easier manipulation and storage. Free online tool, no registration required."
category: common
keywords:
- Netpbm image splitter
- PAM file divider
- multi-image extractor
- image sequence splitter
- Netpbm batch processing
- Linux image utilities
- command line image processing
- PAM to individual images
- image format conversion
- Netpbm image editing
features:
- Split multi-image Netpbm files
- Output individual PAM image files
- Define a filename pattern for output images
- Process PAM files from the command line
- Automate image separation tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamsplit

> Split a multi-image Netpbm file into multiple single-image Netpbm files.
> See also: `pamfile`, `pampick`, `pamexec`.
> More information: <https://netpbm.sourceforge.net/doc/pamsplit.html>.

- Split a multi-image Netpbm file into multiple single-image Netpbm files:

`pamsplit {{path/to/image.pam}}`

- Specify a pattern for naming output files:

`pamsplit {{path/to/image.pam}} {{file_%d.pam}}`
