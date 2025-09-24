---
title: "Convert PPM to SIXEL - Format Images | Online Free DevTools by Hexmos"
name: ppmtosixel
path: /freedevtools/tldr/ppm/ppmtosixel
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtosixel/"
description: "Format images to SIXEL with ppmtosixel. Convert PPM image files to DEC sixel format for compatibility with various terminals. Free online tool, no registration required."
category: common
keywords:
- PPM to SIXEL conversion
- Image format conversion
- SIXEL encoder
- PPM image processing
- Terminal graphics format
- Netpbm tools
- Image to SIXEL
- Command line image converter
- Linux image tools
- macOS image converter
features:
- Convert PPM images to SIXEL format
- Produce uncompressed SIXEL output
- Adjust left margins in output
- Encode control codes for portability
- Process images using command line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmtosixel

> Convert a PPM image to DEC sixel format.
> More information: <https://netpbm.sourceforge.net/doc/ppmtosixel.html>.

- Convert a PPM image to DEC sixel format:

`ppmtosixel {{path/to/file.ppm}} > {{path/to/file.sixel}}`

- Produce an uncompressed SIXEL file that is much slower to print:

`ppmtosixel {{[-r|-raw]}} {{path/to/file.ppm}} > {{path/to/file.sixel}}`

- Add a left margin of 1.5 inches:

`ppmtosixel {{[-m|-margin]}} {{path/to/file.ppm}} > {{path/to/file.sixel}}`

- Encode control codes in a more portable (although less space-efficient) way:

`ppmtosixel -7bit {{path/to/file.ppm}} > {{path/to/file.sixel}}`
