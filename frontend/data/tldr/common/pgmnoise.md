---
title: "Generate PGM Noise - Create White Noise Images | Online Free DevTools by Hexmos"
name: pgmnoise
path: "/freedevtools/tldr/common/pgmnoise/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmnoise/"
description: "Generate PGM images with pgmnoise. Create white noise patterns with custom width, height, and seed. Free online tool, no registration required."
category: common
keywords:
- PGM noise generation
- White noise image generator
- PGM image creation
- Image noise tool
- Linux image manipulation
- Command-line image generator
- PGM file creation
- Random noise generation
- Image processing tool
- Netpbm tools
features:
- Generate PGM images with white noise
- Specify image width and height
- Control the random seed for noise generation
- Create portable graymap images
- Produce random patterns via the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgmnoise

> Generate white noise.
> More information: <https://netpbm.sourceforge.net/doc/pgmnoise.html>.

- Generate a PGM image containing white noise:

`pgmnoise {{width}} {{height}} > {{path/to/output.pgm}}`

- Specify the seed for the pseudo-random number generator:

`pgmnoise {{width}} {{height}} -randomseed {{value}} > {{path/to/output.pgm}}`
