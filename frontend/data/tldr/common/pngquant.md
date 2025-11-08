---
title: "Compress PNG Images - Optimize Images | Online Free DevTools by Hexmos"
name: pngquant
path: "/freedevtools/tldr/common/pngquant/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pngquant/"
description: "Compress PNG images efficiently with pngquant. Reduce PNG file sizes using lossy compression and optimize images for the web. Free online tool, no registration required."
category: common
keywords:
- PNG image compression
- Lossy PNG compression
- PNG file size reduction
- PNG image optimization
- Command line image compressor
- Linux PNG compressor
- macOS PNG compressor
- Image optimization tool
- Compress PNG for web
- Batch PNG compression
features:
- Compress PNG images to reduce file size
- Control image quality with custom settings
- Strip metadata from PNG files
- Skip compression if file size increases
- Batch process multiple PNG files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pngquant

> PNG converter and lossy image compressor.
> More information: <https://manned.org/pngquant>.

- Compress a specific PNG as much as possible and write result to a new file:

`pngquant {{path/to/file.png}}`

- Compress a specific PNG and override original:

`pngquant --ext .png --force {{path/to/file.png}}`

- Try to compress a specific PNG with custom quality (skip if below the min value):

`pngquant --quality {{0-100}} {{path/to/file.png}}`

- Compress a specific PNG with the number of colors reduced to 64:

`pngquant {{64}} {{path/to/file.png}}`

- Compress a specific PNG and skip if the file is larger than the original:

`pngquant --skip-if-larger {{path/to/file.png}}`

- Compress a specific PNG and remove metadata:

`pngquant --strip {{path/to/file.png}}`

- Compress a specific PNG and save it to the given path:

`pngquant {{path/to/file.png}} --output {{path/to/file.png}}`

- Compress a specific PNG and show progress:

`pngquant --verbose {{path/to/file.png}}`
