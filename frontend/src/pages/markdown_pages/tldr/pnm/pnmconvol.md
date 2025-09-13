---
title: "Convolve PNM Image - Process Images | Free DevTools"
name: pnmconvol
path: /freedevtools/tldr/pnm/pnmconvol
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmconvol/"
description: "Process images with PNMConvol, a powerful image convolution tool. Enhance, blur, or sharpen images with custom matrices. Free online tool, no registration required."
category: common
keywords:
- pnm image convolution
- image processing tool
- image convolution matrix
- pnm image editor
- netpbm image utilities
- image filtering command
- command line image tools
- image manipulation linux
- image blurring tool
- image sharpening tool
features:
- Convolve PNM images using a specified matrix
- Apply convolution from matrix files for each layer
- Normalize convolution matrix weights for desired effects
- Convolve images using matrix data from a PNM file
- Perform image enhancement and blurring tasks
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmconvol

> Convolute a PNM image.
> More information: <https://netpbm.sourceforge.net/doc/pnmconvol.html>.

- Convolve a PNM image with the specified convolution matrix:

`pnmconvol -matrix=-1,3,-1 {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Convolve a PNM image with the convolution matrix in the specified files, one for each layer in the input image:

`pnmconvol -matrixfile {{path/to/matrix1,path/to/matrix2,...}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Convolve a PNM image with the convolution matrix in the specified PNM file:

`pnmconvol {{path/to/matrix.pnm}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Normalize the weights in the convolution matrix such that they add up to one:

`pnmconvol -matrix=-1,3,-1 -normalize {{path/to/image.pnm}} > {{path/to/output.pnm}}`
