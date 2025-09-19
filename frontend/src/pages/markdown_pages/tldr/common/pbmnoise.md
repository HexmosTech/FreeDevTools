---
title: "Generate PBM Noise - Create White Noise Images | Online Free DevTools by Hexmos"
name: pbmnoise
path: /freedevtools/tldr/common/pbmnoise
canonical: "https://hexmos.com/freedevtools/tldr/common/pbmnoise/"
description: "Generate PBM noise with pbmnoise. Easily create white noise images and control randomness using custom seeds and ratios. Free online tool, no registration required."
category: common
keywords:
- pbm noise generator
- white noise image creation
- pbm image manipulation
- command line image tool
- linux image generation
- pbm random noise
- netpbm tools
- image generation tool
- pbm image editor
- noise texture generator
features:
- Generate PBM images with white noise patterns.
- Control the randomness of noise generation using a seed.
- Adjust the ratio of white to black pixels in the noise.
- Create images of specific dimensions.
- Output generated PBM images to a specified file path.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pbmnoise

> Generate white noise.
> More information: <https://netpbm.sourceforge.net/doc/pbmnoise.html>.

- Generate a PGM image containing white noise:

`pbmnoise {{width}} {{height}} > {{path/to/output.pbm}}`

- Specify the seed for the pseudo-random number generator:

`pbmnoise {{width}} {{height}} -randomseed {{value}} > {{path/to/output.pbm}}`

- Specify the desired rate of white to black pixels:

`pbmnoise {{width}} {{height}} -ratio {{1/3}} > {{path/to/output.pbm}}`
