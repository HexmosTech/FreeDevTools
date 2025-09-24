---
title: "Convert PNM to FIASCO - Compress Images | Online Free DevTools by Hexmos"
name: pnmtofiasco
path: /freedevtools/tldr/pnm/pnmtofiasco
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmtofiasco/"
description: "Convert PNM images to compressed FIASCO files with pnmtofiasco. Optimize image storage using quality compression. Free online tool, no registration required."
category: common
keywords:
- PNM to FIASCO converter
- image compression tool
- PNM image processing
- FIASCO file format
- command-line image conversion
- netpbm utilities
- lossless image compression
- image format conversion
- linux image tools
- image file management
features:
- Convert PNM images to FIASCO format
- Specify compression quality for FIASCO files
- Load configuration options from a file
- Use file patterns to specify multiple input images
- Compress images for efficient storage
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pnmtofiasco

> Convert a PNM image to a compressed FIASCO file.
> More information: <https://netpbm.sourceforge.net/doc/pnmtofiasco.html>.

- Convert a PNM image to a compressed FIASCO file:

`pnmtofiasco {{path/to/file.pnm}} > {{path/to/file.fiasco}}`

- Specify the input files through a pattern:

`pnmtofiasco {{[-i|--image-name]}} "{{img[01-09+1].pnm}}" > {{path/to/file.fiasco}}`

- Specify the compression quality:

`pnmtofiasco {{[-q|--quality]}} {{quality_level}} {{path/to/file.pnm}} > {{path/to/file.fiasco}}`

- Load the options to be used from the specified configuration file:

`pnmtofiasco {{[-f|--config]}} {{path/to/fiascorc}} {{path/to/file.pnm}} > {{path/to/file.fiasco}}`
