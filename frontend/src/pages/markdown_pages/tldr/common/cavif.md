---
title: "Convert Images to AVIF - Create AVIF Files | Free DevTools"
name: cavif
path: /freedevtools/tldr/common/cavif
canonical: "https://hexmos.com/freedevtools/tldr/common/cavif/"
description: "Convert images to AVIF with cavif. Create high-quality, compressed AVIF files from PNG and JPEG images using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- AVIF image converter
- PNG to AVIF
- JPEG to AVIF
- command line image conversion
- lossless image compression
- cavif rust
- avif encoder
- image optimization
- image format conversion
- avif file creator
features:
- Convert PNG images to AVIF format.
- Convert JPEG images to AVIF format.
- Adjust the AVIF encoding quality.
- Specify the output file location.
- Overwrite existing output files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cavif

> Convert PNG/JPEG images to AVIF. Written in Rust.
> See also: `convert`.
> More information: <https://github.com/kornelski/cavif-rs>.

- Convert a JPEG file to AVIF, saving it to `file.avif`:

`cavif {{path/to/image.jpg}}`

- Adjust the image quality and convert a PNG file to AVIF:

`cavif --quality {{1..100}} {{path/to/image.png}}`

- Specify the output location:

`cavif {{path/to/image.jpg}} --output {{path/to/output.avif}}`

- Overwrite the destination file if it already exists:

`cavif --overwrite {{path/to/image.jpg}}`
