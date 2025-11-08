---
title: "Generate PGM Kernel - Create Image Kernels | Online Free DevTools by Hexmos"
name: pgmkernel
path: "/freedevtools/tldr/common/pgmkernel/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pgmkernel/"
description: "Generate PGM kernels with PGMKernel. Create custom image convolution kernels for image processing and manipulation. Free online tool, no registration required."
category: common
keywords:
- pgm kernel generator
- image convolution kernel
- pgm image processing
- netpbm kernel creation
- linux pgm kernel
- macos pgm kernel
- command line kernel tool
- pnmconvol kernel
- image filter kernel
- pgm kernel design
features:
- Generate convolution kernels of specified width and height
- Create quadratic convolution kernels of a given size
- Control the weight of the center element in the kernel
- Output generated kernel in PGM image format
- Design custom image filters via command-line parameters
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pgmkernel

> Generate a convolution kernel to be used with `pnmconvol`.
> See also: `pnmconvol`.
> More information: <https://netpbm.sourceforge.net/doc/pgmkernel.html>.

- Generate a convolution kernel:

`pgmkernel {{width}} {{height}} > {{path/to/output.pgm}}`

- Generate a quadratic convolution kernel:

`pgmkernel {{size}} > {{path/to/output.pgm}}`

- Specify the weight of the center in the generated kernel:

`pgmkernel {{[-w|-weight]}} {{value}} {{width}} {{height}} > {{path/to/output.pgm}}`
