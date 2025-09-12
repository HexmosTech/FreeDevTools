---
title: "Generate Multi-Lens Images - pampop9 | Free DevTools"
name: pampop9
path: /freedevtools/tldr/common/pampop9
canonical: "https://hexmos.com/freedevtools/tldr/common/pampop9/"
description: "Generate multi-lens images with pampop9. Simulate Pop9 camera effects by tiling and offsetting images. Free online tool, no registration required."
category: common
keywords:
- PAM image tiling
- Multi-lens image simulation
- Image offset generation
- Pop9 camera effect
- PAM tiling utility
- Image processing linux
- Image manipulation command
- Graphics generation tool
- Pixel array manipulation
- Image distortion effect
features:
- Tile a PAM image multiple times
- Control tiling offsets with xdelta and ydelta
- Simulate multi-lens camera effects like Pop9
- Create distorted image appearances
- Generate a new PAM image with tiled content
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pampop9

> Simulate a multi-lens camera such as the Pop9.
> More information: <https://netpbm.sourceforge.net/doc/pampop9.html>.

- Tile the input image xtiles by ytiles times, increasing the offset each time as determined by xdelta and ydelta:

`pampop9 {{path/to/input.pam}} {{xtiles}} {{ytiles}} {{xdelta}} {{ydelta}} > {{path/to/output.pam}}`
