---
title: "Compress PNG - Optimize Images with Pngcrush | Free DevTools"
name: pngcrush
path: /freedevtools/tldr/common/pngcrush
canonical: "https://hexmos.com/freedevtools/tldr/common/pngcrush/"
description: "Compress PNG files with Pngcrush for optimal web performance. Reduce image size and improve website loading speed. Free online tool, no registration required."
category: common
keywords:
- png compression
- image optimization
- pngcrush command
- lossless compression
- png optimizer
- image compressor
- png file size reduction
- linux png compress
- macos png compress
- command line png tool
features:
- Compresses PNG images to reduce file size
- Optimizes PNGs using multiple compression algorithms
- Outputs compressed PNGs to a specified directory
- Supports brute-force compression for maximum optimization
- Reduces PNG file size with lossless compression
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pngcrush

> PNG compression utility.
> More information: <https://pmt.sourceforge.io/pngcrush>.

- Compress a PNG file:

`pngcrush {{in.png}} {{out.png}}`

- Compress all PNGs and output them to the specified directory:

`pngcrush -d {{path/to/output}} *.png`

- Compress PNG file with all 114 available algorithms and pick the best result:

`pngcrush -rem allb -brute -reduce {{in.png}} {{out.png}}`
