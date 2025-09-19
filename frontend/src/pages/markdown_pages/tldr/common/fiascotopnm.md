---
title: "Convert FIASCO to PNM - Image Conversion | Online Free DevTools by Hexmos"
name: fiascotopnm
path: /freedevtools/tldr/common/fiascotopnm
canonical: "https://hexmos.com/freedevtools/tldr/common/fiascotopnm/"
description: "Convert FIASCO images to PNM format with fiascotopnm. Transform and manipulate image files effortlessly using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- FIASCO to PNM conversion
- PNM image conversion
- FIASCO image converter
- Image format conversion
- Video stream to PNM
- FIASCO decompression
- Linux image tools
- Command line image converter
- FIASCO file manipulation
- PNM file creation
features:
- Convert compressed FIASCO files to PNM images.
- Decompress FIASCO files using fast decompression for lower quality.
- Load configuration options from a specified configuration file.
- Magnify decompressed images by a specified factor.
- Smooth decompressed images by a specified amount.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# fiascotopnm

> Convert a compressed FIASCO file to a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/fiascotopnm.html>.

- Convert a compressed FIASCO file to a PNM file or in the case of video streams multiple PNM files:

`fiascotopnm {{path/to/file.fiasco}} {{[-o|--output]}} {{output_file_basename}}`

- Use fast decompression, resulting in a slightly decreased quality of the output file(s):

`fiascotopnm {{[-z|--fast]}} {{path/to/file.fiasco}} {{[-o|--output]}} {{output_file_basename}}`

- Load the options to be used from the specified configuration file:

`fiascotopnm {{[-f|--config]}} {{path/to/fiascorc}} {{path/to/file.fiasco}} {{[-o|--output]}} {{output_file_basename}}`

- Magnify the decompressed image(s) by a factor of 2^n:

`fiascotopnm {{[-m|--magnify]}} {{n}} {{path/to/file.fiasco}} {{[-o|--output]}} {{output_file_basename}}`

- Smooth the decompressed image by the specified amount:

`fiascotopnm {{[-s|--smoothing]}} {{n}} {{path/to/file.fiasco}} {{[-o|--output]}} {{output_file_basename}}`
