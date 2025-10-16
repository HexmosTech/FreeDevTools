---
title: "Generate PPM Image - Create Pattern Images | Online Free DevTools by Hexmos"
name: ppmpat
path: "/freedevtools/tldr/ppm/ppmpat/"
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmpat/"
description: "Generate PPM image with ppmpat to create pattern images using the command line. Control image dimensions and patterns. Free online tool, no registration required."
category: common
keywords:
- PPM image generator
- Pattern image creator
- Netpbm PPM generation
- Linux image creation
- Command line image tool
- PPM file creation
- Camo pattern generator
- Gingham pattern PPM
- Madras pattern PPM
- Tartan pattern PPM
features:
- Generate PPM images with various patterns.
- Control image dimensions for PPM creation.
- Create PPM files with camo patterns and custom colors.
- Support for gingham, madras, and tartan patterns.
- Generate PPM images directly from the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmpat

> Produce a PPM image with a pattern.
> More information: <https://netpbm.sourceforge.net/doc/ppmpat.html>.

- Produce a PPM file of the specified pattern with the specified dimensions:

`ppmpat -{{gingham2|gingham3|madras|tartan|poles|...}} {{width}} {{height}} > {{path/to/file.ppm}}`

- Produce a PPM file of a camo pattern using the specified colors:

`ppmpat {{[-ca|-camo]}} {{[-co|-color]}} {{color1,color2,...}} {{width}} {{height}} > {{path/to/file.ppm}}`
