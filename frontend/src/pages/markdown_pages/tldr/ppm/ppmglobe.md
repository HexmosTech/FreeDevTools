---
title: "Generate PPM Globe - Create Spherical Images | Online Free DevTools by Hexmos"
name: ppmglobe
path: /freedevtools/tldr/ppm/ppmglobe
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmglobe/"
description: "Generate PPM Globe images with ppmglobe. Transform images into strips for spherical mapping using this command line tool. Free online tool, no registration required."
category: common
keywords:
- PPM globe generator
- Image spherical mapping
- PPM to globe conversion
- Netpbm image manipulation
- Command line image tools
- PPM image converter
- Image wrapping tool
- Sphere image creator
- Linux image tools
- MacOS image utilities
features:
- Convert PPM images to spherical strips
- Create images for gluing onto a sphere
- Define background color between strips
- Generate custom number of strips
- Output to PPM image format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmglobe

> Generate strips of an image suitable to be glued onto a sphere.
> See also: `pnmmercator`.
> More information: <https://netpbm.sourceforge.net/doc/ppmglobe.html>.

- Transform an image to strips that can be cut out and glues onto a sphere:

`ppmglobe {{number_of_strips}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Use the specified color for the areas between the strips:

`ppmglobe {{[-b|-background]}} {{red}} {{number_of_strips}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`
