---
title: "PAM Flip - Rotate and Flip Images | Online Free DevTools by Hexmos"
name: pamflip
path: /freedevtools/tldr/common/pamflip
canonical: "https://hexmos.com/freedevtools/tldr/common/pamflip/"
description: "Flip images with PAM Flip. Easily rotate and flip PAM and PNM images using command line. Free online tool, no registration required."
category: common
keywords:
- PAM image flip
- PNM image flip
- Image rotation tool
- PAM image rotation
- PNM image rotation
- Netpbm image manipulation
- Image transformation command line
- Linux image tools
- Image flip script
- PAM PNM converter
features:
- Rotate images by 90, 180, or 270 degrees.
- Flip images horizontally (left to right).
- Flip images vertically (top to bottom).
- Transpose images along the main diagonal.
- Transform Netpbm format images.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pamflip

> Flip or rotate a PAM or PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pamflip.html>.

- Rotate the input image counter-clockwise for a specific degree:

`pamflip {{[-r|-rotate]}}{{90|180|270}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Flip left for right:

`pamflip {{[-lr|-leftright]}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Flip top for bottom:

`pamflip {{[-tb|-topbottom]}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Flip the input image on the main diagonal:

`pamflip {{[-xy|-transpose]}} {{path/to/input.pam}} > {{path/to/output.pam}}`
