---
title: "Create Mask Bitmap - PBM Mask Generator | Free DevTools"
name: pbmmask
path: /freedevtools/tldr/common/pbmmask
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmmask/"
description: "Create mask bitmap images with PBM Mask. Easily separate foreground and background from PBM files. Free online tool, no registration required."
category: common
keywords:
- PBM mask generator
- bitmap mask creation
- PBM image processing
- foreground background separation
- Netpbm tools
- image mask generation
- PBM manipulation
- mask bitmap creation
- common command
- pbmmask linux
features:
- Generate a mask bitmap from a PBM image.
- Separate foreground from background in bitmaps.
- Expand the generated mask by one pixel.
- Create bitmap masks for image manipulation.
- Convert PBM images to mask bitmaps.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmmask

> Create a mask bitmap from a regular bitmap.
> See also: `pambackground`.
> More information: <https://netpbm.sourceforge.net/doc/pbmmask.html>.

- Create a mask bitmap separating background from foreground:

`pbmmask {{path/to/image.pbm}} > {{path/to/output.pbm}}`

- Expand the generated mask by one pixel:

`pbmmask {{[-r|-expand]}} {{path/to/image.pbm}} > {{path/to/output.pbm}}`
