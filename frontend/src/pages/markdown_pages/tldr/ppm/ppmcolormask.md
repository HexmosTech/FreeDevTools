---
title: "PPM Color Mask - Generate Mask from Color | Online Free DevTools by Hexmos"
name: ppmcolormask
path: /freedevtools/tldr/ppm/ppmcolormask
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmcolormask/"
description: "Generate color masks with PPM Color Mask. Easily extract regions of a specific color from PPM images. Free online tool, no registration required."
category: common
keywords:
- ppm color mask
- ppm mask generation
- ppm image processing
- image color extraction
- color based masking
- ppm to pbm conversion
- linux ppmcolormask
- image manipulation
- netpbm tools
- color selection tool
features:
- Generate a mask based on a specific RGB color in a PPM image.
- Convert areas of a defined color within a PPM image to a PBM mask.
- Create a black and white image representing the selected color regions.
- Accept a color specification as a comma-separated red, green, blue value.
- Output a PBM image representing the masked area.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmcolormask

> Produce a mask of areas of a certain color in a PPM image.
> More information: <https://netpbm.sourceforge.net/doc/ppmcolormask.html>.

- Produce a mask of areas of a certain color in the specified PPM image:

`ppmcolormask {{[-c|-color]}} {{red,blue}} {{path/to/input.ppm}} > {{path/to/output.pbm}}`
