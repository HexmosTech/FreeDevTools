---
title: "Generate PPM Fade - Image Transition | Online Free DevTools by Hexmos"
name: ppmfade
path: /freedevtools/tldr/ppm/ppmfade
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmfade/"
description: "Generate image transitions with ppmfade. Create smooth fades between PPM images using various effects. Free online tool, no registration required."
category: common
keywords:
- ppm image transition
- image fade generator
- ppm fade effect
- netpbm ppmfade
- linux image manipulation
- command line image tools
- ppm image editor
- image processing tool
- cross platform image tools
- ppm image converter
features:
- Generate a transition between two PPM images
- Create fades with different effects (mix, spread, shift, etc.)
- Generate fades to or from a solid black image
- Store resulting images sequentially
- Command-line PPM image processing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmfade

> Generate a transition between two PPM images.
> More information: <https://netpbm.sourceforge.net/doc/ppmfade.html>.

- Generate a transition between two PPM images ([f]irst and [l]ast) using the specified effect:

`ppmfade -f {{path/to/image1.ppm}} -l {{path/to/image2.ppm}} -{{mix|spread|shift|relief|oil|...}}`

- Generate a transition starting with the specified image and ending in a solid black image:

`ppmfade -f {{path/to/image.ppm}} -{{mix|spread|shift|relief|oil|...}}`

- Generate a transition starting with a solid black image and ending with the specified image:

`ppmfade -l {{path/to/image.ppm}} -{{mix|spread|shift|relief|oil|...}}`

- Store the resulting images in files named `base.NNNN.ppm` where `NNNN` is a increasing number:

`ppmfade -f {{path/to/image1.ppm}} -l {{path/to/image2.ppm}} -{{mix|spread|shift|relief|oil|...}} -base {{base}}`
