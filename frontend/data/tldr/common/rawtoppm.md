---
title: "Convert Raw to PPM - Create PPM Images | Online Free DevTools by Hexmos"
name: rawtoppm
path: "/freedevtools/tldr/common/rawtoppm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/rawtoppm/"
description: "Convert raw image data to PPM format with rawtoppm.  Create and manipulate images efficiently with this free online tool, no registration required."
category: common
keywords:
- raw image to ppm
- ppm image converter
- raw rgb to ppm
- image format conversion
- raw image processor
- linux image tools
- command line image converter
- ppm image creation
- image data manipulation
- raw image manipulation
features:
- Convert raw RGB stream to PPM image format
- Handle different color component orders (RGB, RBG, GRB, GBR, BRG, BGR)
- Skip initial bytes from raw image file
- Skip trailing bytes from each row in raw image file
- Support bottom-to-top raw image data conversion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rawtoppm

> Convert a raw RGB stream to a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/rawtoppm.html>.

- Convert a raw RGB stream to a PPM image:

`rawtoppm {{width}} {{height}} {{path/to/image.raw}} > {{path/to/output.ppm}}`

- Convert a raw RGB stream in which the pixels come bottom-first instead of top-first to a PPM image:

`rawtoppm {{width}} {{height}} {{path/to/image.raw}} | pamflip {{[-tb|-topbottom]}} > {{path/to/output.ppm}}`

- Ignore the first n bytes of the specified file:

`rawtoppm {{width}} {{height}} {{[-h|-headerskip]}} {{n}} {{path/to/image.raw}} > {{path/to/output.ppm}}`

- Ignore the last m bytes of each row in the specified file:

`rawtoppm {{width}} {{height}} {{[-ro|-rowskip]}} {{m}} {{path/to/image.raw}} > {{path/to/output.ppm}}`

- Specify the order of color components for each pixel:

`rawtoppm {{width}} {{height}} -{{rgb|rbg|grb|gbr|brg|bgr}} {{path/to/image.raw}} > {{path/to/output.ppm}}`
