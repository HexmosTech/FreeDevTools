---
title: "Convert WebP - Decompress WebP Images | Online Free DevTools by Hexmos"
name: dwebp
path: /freedevtools/tldr/common/dwebp
canonical: "https://hexmos.com/freedevtools/tldr/common/dwebp/"
description: "Convert WebP images quickly with dwebp. Decompress WebP files to PNG, PAM, or PPM formats. Free online tool, no registration required."
category: common
keywords:
- WebP to PNG
- WebP converter
- decompress WebP
- WebP decoder
- image converter
- command line WebP
- dwebp Linux
- dwebp macOS
- WebP scaling
- WebP cropping
features:
- Decompress WebP files to PNG format.
- Convert WebP to PAM, PPM, PGM, BMP, TIFF, or YUV formats.
- Utilize multi-threading for faster WebP decoding.
- Crop and scale WebP images during conversion.
- Flip WebP images horizontally during conversion.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dwebp

> `dwebp` decompresses WebP files into PNG, PAM, PPM or PGM images.
> Animated WebP files are not supported.
> More information: <https://developers.google.com/speed/webp/docs/dwebp/>.

- Convert a WebP file into a PNG file:

`dwebp {{path/to/input.webp}} -o {{path/to/output.png}}`

- Convert a WebP file into a specific filetype:

`dwebp {{path/to/input.webp}} -bmp|-tiff|-pam|-ppm|-pgm|-yuv -o {{path/to/output}}`

- Convert a WebP file, using multi-threading if possible:

`dwebp {{path/to/input.webp}} -o {{path/to/output.png}} -mt`

- Convert a WebP file, but also crop and scale at the same time:

`dwebp {{input.webp}} -o {{output.png}} -crop {{x_pos}} {{y_pos}} {{width}} {{height}} -scale {{width}} {{height}}`

- Convert a WebP file and flip the output:

`dwebp {{path/to/input.webp}} -o {{path/to/output.png}} -flip`

- Convert a WebP file and don't use in-loop filtering to speed up the decoding process:

`dwebp {{path/to/input.webp}} -o {{path/to/output.png}} -nofilter`
