---
title: "Convert PNG to PAM - Create Netpbm Images | Online Free DevTools by Hexmos"
name: pngtopam
path: "/freedevtools/tldr/common/pngtopam/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pngtopam/"
description: "Convert PNG images to Netpbm (PAM) format with pngtopam. Create images with transparency or replace transparent colors using this free online tool, no registration required."
category: common
keywords:
- PNG to PAM converter
- Netpbm image converter
- Image format conversion
- PNG transparency tool
- Command line image processing
- Linux image utilities
- MacOS image conversion
- Convert PNG to Netpbm
- Image format tool
- PAM image generator
features:
- Convert PNG images to PAM format
- Include transparency masks in output
- Replace transparent pixels with a specified color
- Extract text chunks from PNG images
- Create Netpbm images from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pngtopam

> Convert a PNG image to a Netpbm image.
> See also: `pamtopng`.
> More information: <https://netpbm.sourceforge.net/doc/pngtopam.html>.

- Convert the specified PNG image to a Netpbm image:

`pngtopam {{path/to/image.png}} > {{path/to/output.pam}}`

- Create an output image that includes both the main image and transparency mask of the input image:

`pngtopam -alphapam {{path/to/image.png}} > {{path/to/output.pam}}`

- Replace transparent pixels by the specified color:

`pngtopam {{[-m|-mix]}} {{[-ba|-background]}} {{color}} {{path/to/image.png}} > {{path/to/output.pam}}`

- Write tEXt chunks found in the input image to the specified text file:

`pngtopam {{[-te|-text]}} {{path/to/file.txt}} {{path/to/image.png}} > {{path/to/output.pam}}`
