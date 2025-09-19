---
title: "Create Block Maps - Intelligently Copy Images | Online Free DevTools by Hexmos"
name: bmaptool
path: /freedevtools/tldr/common/bmaptool
canonical: "https://hexmos.com/freedevtools/tldr/common/bmaptool/"
description: "Create block maps intelligently with bmaptool, designed to copy images faster than traditional methods. Optimize image deployments and reduce write operations. Free online tool, no registration required."
category: common
keywords:
- block map creation
- image copy tool
- image deployment optimization
- bmap image tool
- linux image copier
- block-level copy utility
- sparse image transfer
- image file transfer
- flash memory programming
- embedded linux imaging
features:
- Create block maps from image files
- Copy images to devices using block maps
- Copy compressed images efficiently
- Copy images without block maps
- Optimize image deployment speed
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bmaptool

> Create or copy block maps intelligently (designed to be faster than `cp` or `dd`).
> More information: <https://manned.org/bmaptool>.

- Output a blockmap file from image file:

`bmaptool create {{[-o|--output]}} {{blockmap.bmap}} {{source.img}}`

- Copy an image file into sdb:

`bmaptool copy --bmap {{blockmap.bmap}} {{source.img}} {{/dev/sdb}}`

- Copy a compressed image file into sdb:

`bmaptool copy --bmap {{blockmap.bmap}} {{source.img.gz}} {{/dev/sdb}}`

- Copy an image file into sdb without using a blockmap:

`bmaptool copy --nobmap {{source.img}} {{/dev/sdb}}`
