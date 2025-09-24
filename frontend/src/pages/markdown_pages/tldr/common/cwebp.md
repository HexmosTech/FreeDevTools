---
title: "Convert Image to WebP - Compress Images Online | Online Free DevTools by Hexmos"
name: cwebp
path: /freedevtools/tldr/common/cwebp
canonical: "https://hexmos.com/freedevtools/tldr/common/cwebp/"
description: "Convert image to WebP with cwebp. Compress images quickly and efficiently for optimal web performance. Free online tool, no registration required."
category: common
keywords:
- image to webp converter
- webp compression tool
- cwebp online
- image optimizer online
- png to webp converter
- jpg to webp converter
- lossless webp compression
- webp file compressor
- command line webp
- google webp converter
features:
- Compress images to WebP format.
- Resize images during compression.
- Control image quality and file size.
- Remove alpha channel information.
- Optimize images for web use.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cwebp

> Compress an image file to a WebP file.
> More information: <https://developers.google.com/speed/webp/docs/cwebp>.

- Compress a WebP file with default settings (q = 75) to the [o]utput file:

`cwebp {{path/to/image_file}} -o {{path/to/output.webp}}`

- Compress a WebP file with the best [q]uality and largest file size:

`cwebp {{path/to/image_file}} -o {{path/to/output.webp}} -q {{100}}`

- Compress a WebP file with the worst [q]uality and smallest file size:

`cwebp {{path/to/image_file}} -o {{path/to/output.webp}} -q {{0}}`

- Compress a WebP file and apply resize to image:

`cwebp {{path/to/image_file}} -o {{path/to/output.webp}} -resize {{width}} {{height}}`

- Compress a WebP file and drop alpha channel information:

`cwebp {{path/to/image_file}} -o {{path/to/output.webp}} -noalpha`
