---
title: "Generate Rainbow Images - ppmrainbow | Free DevTools"
name: ppmrainbow
path: /freedevtools/tldr/common/ppmrainbow
canonical: "https://hexmos.com/freedevtools/tldr/common/ppmrainbow/"
description: "Generate rainbow images easily with ppmrainbow. Control color gradients and image dimensions for custom PPM files. Free online tool, no registration required."
category: common
keywords:
- rainbow image generator
- PPM image creator
- color gradient generator
- Netpbm image tool
- command line image tools
- image manipulation tool
- PPM file generation
- linux image utilities
- color spectrum creator
- image creation scripts
features:
- Generate rainbow images with custom colors
- Control image width and height
- Prevent color repetition
- Output in PPM format
- Create rainbow gradients from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmrainbow

> Generate a rainbow.
> More information: <https://netpbm.sourceforge.net/doc/ppmrainbow.html>.

- Generate a rainbow consisting of the specified colors:

`ppmrainbow {{color1 color2 ...}} > {{path/to/output_file.ppm}}`

- Specify the size of the output in pixels:

`ppmrainbow {{[-w|-width]}} {{width}} {{[-h|-height]}} {{height}} {{color1 color2 ...}} > {{path/to/output_file.ppm}}`

- End the rainbow with the last color specified, do not repeat the first color:

`ppmrainbow {{[-n|-norepeat]}} {{color1 color2 ...}} > {{path/to/output_file.ppm}}`
