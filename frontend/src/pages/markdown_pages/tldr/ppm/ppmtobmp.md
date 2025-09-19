---
title: "Convert PPM to BMP - Image Conversion | Online Free DevTools by Hexmos"
name: ppmtobmp
path: /freedevtools/tldr/ppm/ppmtobmp
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtobmp/"
description: "Convert PPM images to BMP files instantly with ppmtobmp. Optimize image conversion processes and handle different BMP formats using the command line. Free online tool, no registration required."
category: common
keywords:
- ppm to bmp converter
- image format conversion
- bitmap file generator
- ppm image manipulation
- command line image tools
- netpbm tools
- linux image conversion
- macos image conversion
- bmp file creation
- image processing tools
features:
- Convert PPM images to BMP file format.
- Specify Windows or OS/2 BMP format.
- Control the number of bits per pixel in the output BMP.
- Handle multiple image formats with a single command.
- Process image conversion directly from the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtobmp

> Convert a PPM image to a BMP file.
> More information: <https://netpbm.sourceforge.net/doc/ppmtobmp.html>.

- Convert a PPM image to a BMP file:

`ppmtobmp {{path/to/file.ppm}} > {{path/to/file.bmp}}`

- Explicitly specify whether or not a Windows BMP file or an OS/2 BMP file should be created:

`ppmtobmp -{{windows|os2}} {{path/to/file.ppm}} > {{path/to/file.bmp}}`

- Use a specific number of bits for each pixel:

`ppmtobmp {{[-b|-bbp]}} {{1|4|8|24}} {{path/to/file.ppm}} > {{path/to/file.bmp}}`
