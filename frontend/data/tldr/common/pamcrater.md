---
title: "Create PAM Cratered Terrain - Image Generator | Online Free DevTools by Hexmos"
name: pamcrater
path: "/freedevtools/tldr/common/pamcrater/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamcrater/"
description: "Generate PAM cratered terrain images with pamcrater. Control image dimensions and crater density effortlessly. Free online tool, no registration required."
category: common
keywords:
- PAM image crater generator
- Terrain map generator
- Cratered landscape creator
- Image processing tool
- PAM file creation
- Netpbm pamcrater
- Linux image tools
- MacOS image processing
- Common command line image tool
- Digital elevation model generator
features:
- Create PAM images of cratered terrain with custom dimensions
- Control the number of craters generated in the PAM image
- Generate realistic terrain maps from the command line
- Specify the height of the generated terrain
- Specify the width of the generated terrain
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamcrater

> Create a PAM image of cratered terrain.
> See also: `pamshadedrelief`, `ppmrelief`.
> More information: <https://netpbm.sourceforge.net/doc/pamcrater.html>.

- Create an image of cratered terrain with the specified dimensions:

`pamcrater {{[-h|-height]}} {{height}} {{[-w|-width]}} {{width}} > {{path/to/output.pam}}`

- Create an image containing the specified number of craters:

`pamcrater {{[-n|-number]}} {{n_craters}} > {{path/to/output.pam}}`
