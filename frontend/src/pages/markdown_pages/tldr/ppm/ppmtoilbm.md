---
title: "Convert PPM to ILBM - Create ILBM Images | Online Free DevTools by Hexmos"
name: ppmtoilbm
path: /freedevtools/tldr/ppm/ppmtoilbm
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmtoilbm/"
description: "Convert PPM to ILBM with ppmtoilbm. Create ILBM images from PPM files using this image conversion tool. Free online tool, no registration required."
category: common
keywords:
- PPM to ILBM conversion
- ILBM image creation
- PPM image converter
- ILBM file generator
- Netpbm tools
- Image format conversion
- Color palette management
- Command line image tools
- Linux image processing
- MacOS image conversion
features:
- Convert PPM images to ILBM format
- Specify the number of planes in the ILBM file
- Choose the compression method for the ILBM file
- Create HAM/24bit/direct color ILBM files
- Control maximum number of planes written
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ppmtoilbm

> Convert a PPM image to an ILBM file.
> More information: <https://netpbm.sourceforge.net/doc/ppmtoilbm.html>.

- Convert a PPM image to an ILBM file:

`ppmtoilbm {{path/to/file.ppm}} > {{path/to/file.ilbm}}`

- Write a maximum of n planes to the ILBM file and produce a HAM/24bit/direct color file if this number is exceeded:

`ppmtoilbm {{[-mp|-maxplanes]}} {{n}} -{{hamif|24if|dcif}} {{path/to/file.ppm}} > {{path/to/file.ilbm}}`

- Produce a ILBM file with exactly n planes:

`ppmtoilbm {{[-fp|-fixplanes]}} {{n}} {{path/to/file.ppm}} > {{path/to/file.ilbm}}`

- Select the compression method to be used:

`ppmtoilbm -{{compress|nocompress|savemem}} {{path/to/file.ppm}} > {{path/to/file.ilbm}}`
