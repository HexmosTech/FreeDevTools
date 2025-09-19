---
title: "Convert Raw Image to PGM - Greyscale Converter | Online Free DevTools by Hexmos"
name: rawtopgm
path: /freedevtools/tldr/common/rawtopgm
canonical: "https://hexmos.com/freedevtools/tldr/common/rawtopgm/"
description: "Convert raw greyscale images to PGM format with rawtopgm. Efficiently process and manage image file conversions using command line. Free online tool, no registration required."
category: common
keywords:
- raw image to pgm
- greyscale image converter
- pgm file conversion
- rawtopgm linux
- command line image tools
- netpbm tools
- image format conversion
- raw image processing
- pgm image manipulation
- greyscale to pgm converter
features:
- Convert raw greyscale images to PGM format
- Specify image width and height for accurate conversion
- Handle images with bottom-first pixel ordering
- Skip header or row data during conversion
- Set the maximum grey value for input images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rawtopgm

> Convert a raw greyscale image to a PGM image.
> More information: <https://netpbm.sourceforge.net/doc/rawtopgm.html>.

- Convert a raw greyscale image to a PGM image:

`rawtopgm {{width}} {{height}} {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Convert a raw greyscale image to a PGM image, assume the image to be a square:

`rawtopgm {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Convert a raw greyscale image in which the pixels come bottom-first instead of top-first to a PGM image:

`rawtopgm {{width}} {{height}} {{[-bt|-bottomfirst]}} {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Ignore the first `n` bytes of the specified file:

`rawtopgm {{width}} {{height}} {{[-h|-headerskip]}} {{n}} {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Ignore the last m bytes of each row in the specified file:

`rawtopgm {{width}} {{height}} {{[-r|-rowskip]}} {{m}} {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Specify the maxval for the grey values in the input to be equal to `n`:

`rawtopgm {{width}} {{height}} {{[-m|-maxval]}} {{n}} {{path/to/image.raw}} > {{path/to/output.pgm}}`

- Specify the number of bytes that represent each sample in the input and that the byte-sequence is to be interpreted as little-endian:

`rawtopgm {{width}} {{height}} -bpp {{1|2}} {{[-l|-littleendian]}} {{path/to/image.raw}} > {{path/to/output.pgm}}`
