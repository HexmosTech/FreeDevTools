---
title: "Brighten PAM Images - Adjust Saturation and Value | Online Free DevTools by Hexmos"
name: pambrighten
path: "/freedevtools/tldr/common/pambrighten/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pambrighten/"
description: "Brighten PAM images with pambrighten! Adjust image saturation and value using command line options for precise control. Free online tool, no registration required."
category: common
keywords:
- PAM image brighten
- PAM image saturation
- PAM image value
- Netpbm image editing
- command line image tools
- linux image manipulation
- image enhancement tool
- image color correction
- PAM file processing
- pambrighten command reference
features:
- Increase PAM image saturation
- Increase PAM image value (HSV)
- Brighten images using percentages
- Process PAM images via command line
- Adjust color of PAM image pixels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pambrighten

> Change a PAM image's saturation and value.
> More information: <https://netpbm.sourceforge.net/doc/pambrighten.html>.

- Increase the saturation of each pixel by the specified percentage:

`pambrighten {{[-s|-saturation]}} {{value_percent}} {{path/to/image.pam}} > {{path/to/output.pam}}`

- Increase the value (from the HSV color space) of each pixel by the specified percentage:

`pambrighten {{[-va|-value]}} {{value_percent}} {{path/to/image.pam}} > {{path/to/output.pam}}`
