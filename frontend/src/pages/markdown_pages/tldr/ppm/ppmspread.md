---
title: "PPM Spread - Displace Image Pixels Randomly | Online Free DevTools by Hexmos"
name: ppmspread
path: /freedevtools/tldr/ppm/ppmspread
canonical: "https://hexmos.com/freedevtools/tldr/ppm/ppmspread/"
description: "Displace image pixels randomly with PPM Spread. Control the randomization of pixels in PPM images using the command line. Free online tool, no registration required."
category: common
keywords:
- PPM image spread
- Image pixel displacement
- PPM image manipulation
- Image randomization tool
- Netpbm ppmspread
- Command line image processing
- Image pixel distortion
- Image noise generation
- PPM image effects
- Linux image tools
features:
- Randomly displace pixels in PPM images.
- Control the maximum displacement distance.
- Specify a seed for pseudo-random number generation.
- Create image distortion effects.
- Manipulate PPM image pixels using the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ppmspread

> Displace the pixels in a PPM image by a randomized amount.
> More information: <https://netpbm.sourceforge.net/doc/ppmspread.html>.

- Displace the pixels in a PPM image by a randomized amount that is at most a:

`ppmspread {{a}} {{path/to/input_file.ppm}} > {{path/to/output_file.ppm}}`

- Specify a seed to a the pseudo-random number generator:

`ppmspread {{a}} {{path/to/input_file.ppm}} {{[-r|-randomseed]}} {{seed}} > {{path/to/output_file.ppm}}`
