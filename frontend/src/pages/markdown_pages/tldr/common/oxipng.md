---
title: "OxiPNG Compressor - Optimize PNG Files Losslessly | Online Free DevTools by Hexmos"
name: oxipng
path: /freedevtools/tldr/common/oxipng
canonical: "https://hexmos.com/freedevtools/tldr/common/oxipng/"
description: "Optimize PNG files with OxiPNG Compressor. Reduce PNG size losslessly using advanced compression techniques. Free online tool, no registration required."
category: common
keywords:
- png compression
- lossless png optimization
- image compression tool
- command line png optimizer
- png file size reducer
- oxipng compressor
- png optimization linux
- png optimization macos
- png optimization common
- zopfli png compression
features:
- Losslessly compress PNG files
- Optimize PNGs with various compression levels
- Strip non-critical metadata from PNG images
- Apply or remove PNG interlacing
- Utilize the Zopfli compressor for maximum optimization
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# oxipng

> Losslessly improve compression of PNG files.
> More information: <https://github.com/shssoichiro/oxipng>.

- Compress a PNG file (overwrites the file by default):

`oxipng {{path/to/file.png}}`

- Compress a PNG file and save the output to a new file:

`oxipng --out {{path/to/output.png}} {{path/to/file.png}}`

- Compress all PNG files in the current directory using multiple threads:

`oxipng "*.png"`

- Compress a file with a set optimization level (default is 2):

`oxipng --opt {{0|1|2|3|4|5|6|max}} {{path/to/file.png}}`

- Set the PNG interlacing type (`0` removes interlacing, `1` applies Adam7 interlacing, `keep` preserves existing interlacing; default is `0`):

`oxipng --interlace {{0|1|keep}} {{path/to/file.png}}`

- Perform additional optimization on images with an alpha channel:

`oxipng --alpha {{path/to/file.png}}`

- Use the much slower but stronger Zopfli compressor with max optimization:

`oxipng --zopfli --opt max {{path/to/file.png}}`

- Strip all non-critical metadata chunks:

`oxipng --strip all {{path/to/file.png}}`
