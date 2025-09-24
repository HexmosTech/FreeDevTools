---
title: "Generate Shaded Relief - PAM Elevation to Relief | Online Free DevTools by Hexmos"
name: pamshadedrelief
path: /freedevtools/tldr/common/pamshadedrelief
canonical: "https://hexmos.com/freedevtools/tldr/common/pamshadedrelief/"
description: "Generate shaded relief images with pamshadedrelief from elevation maps. Adjust gamma, control shadows, and create realistic terrain visualizations. Free online tool, no registration required."
category: common
keywords:
- PAM shaded relief
- Elevation map to relief
- PAM image processing
- Terrain visualization tool
- Shaded relief generator
- Netpbm image tools
- Image gamma correction
- PAM elevation data
- Shaded elevation map
- Linux image utilities
features:
- Generate shaded relief images from PAM elevation maps
- Adjust gamma for desired shading effects
- Convert elevation data to visual terrain representation
- Create realistic 3D-like effects from 2D images
- Process PAM image files directly from the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamshadedrelief

> Generate a shaded relief from an elevation map.
> See also: `pamcrater`, `ppmrelief`.
> More information: <https://netpbm.sourceforge.net/doc/pamshadedrelief.html>.

- Generate a shaded relief image with the input image interpreted as an elevation map:

`pamshadedrelief < {{path/to/input.pam}} > {{path/to/output.pam}}`

- Gamma adjust the image by the specified factor:

`pamshadedrelief {{[-g|-gamma]}} {{factor}} < {{path/to/input.pam}} > {{path/to/output.pam}}`
