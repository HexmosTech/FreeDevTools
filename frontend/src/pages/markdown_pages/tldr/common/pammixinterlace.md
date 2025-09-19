---
title: "PAM Mix Interlace - Merge Image Rows | Online Free DevTools by Hexmos"
name: pammixinterlace
path: /freedevtools/tldr/common/pammixinterlace
canonical: "https://hexmos.com/freedevtools/tldr/common/pammixinterlace/"
description: "Merge image rows with PAM Mix Interlace, a Netpbm image processing tool. Enhance image quality and reduce artifacts using various filters. Free online tool, no registration required."
category: common
keywords:
- PAM image interlace
- Netpbm image processing
- Image row merging
- Deinterlace image
- PPM image filter
- Image artifact reduction
- Adaptive image filtering
- Command-line image tools
- Image processing utilities
- Pammixinterlace command
features:
- Merge image rows with neighboring rows
- Apply linear, FIR, or FFmpeg filtering mechanisms
- Enable adaptive filtering mode for comb pattern removal
- Process PPM image files
- Enhance image quality by reducing artifacts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pammixinterlace

> Merge each row in an image with its two neighbours.
> See also: `pamdeinterlace`.
> More information: <https://netpbm.sourceforge.net/doc/pammixinterlace.html>.

- Merge each row in an image with its two neighbours:

`pammixinterlace {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Use the specified filtering mechanism:

`pammixinterlace {{[-f|-filter]}} {{linear|fir|ffmpeg}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Turn on adaptive filtering mode, i.e., only modify pixels that are obviously part of a comb pattern:

`pammixinterlace {{[-a|-adaptive]}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`
