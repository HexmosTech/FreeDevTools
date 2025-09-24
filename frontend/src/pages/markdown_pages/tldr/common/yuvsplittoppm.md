---
title: "Convert YUV to PPM - Create PPM Images | Online Free DevTools by Hexmos"
name: yuvsplittoppm
path: /freedevtools/tldr/common/yuvsplittoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/yuvsplittoppm/"
description: "Convert YUV to PPM with yuvsplittoppm. Create PPM images from Abekas YUV files with this command line tool. Free online tool, no registration required."
category: common
keywords:
- YUV to PPM converter
- PPM image creation
- Abekas YUV conversion
- YUV split to PPM
- command line image converter
- image format conversion
- PPM file generation
- Linux image tools
- macOS image utilities
- YUV image processing
features:
- Convert three subsampled Abekas YUV files to PPM
- Merge YUV files into a single PPM image
- Read Akebas YUV bytes from specified files
- Generate PPM images from command line
- Support for specified width and height during conversion
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yuvsplittoppm

> Convert three subsampled Abekas YUV files to one PPM image.
> More information: <https://netpbm.sourceforge.net/doc/yuvsplittoppm.html>.

- Read Akebas YUV bytes from three files starting with basename, merge them into a single PPM image and store it in the specified output file:

`yuvsplittoppm {{basename}} {{width}} {{height}} > {{path/to/output_file.ppm}}`
