---
title: "PNM Crop - Crop PNM Images | Online Free DevTools by Hexmos"
name: pnmcrop
path: /freedevtools/tldr/pnm/pnmcrop
canonical: "https://hexmos.com/freedevtools/tldr/pnm/pnmcrop/"
description: "Crop images instantly with PNM Crop. Easily remove borders, adjust margins, and customize background colors in PNM images. Free online tool, no registration required."
category: common
keywords:
- PNM image cropping
- PNM image editor
- Image border removal
- PNM margin adjustment
- Command line image processing
- Netpbm image manipulation
- Image format conversion
- PNM image background color
- PNM image tool
- Linux image processing
features:
- Remove white or colored borders from PNM images.
- Crop PNM images based on background color.
- Automatically detect background color from image corners.
- Add a margin around the cropped image.
- Control behaviour for images entirely made of background.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnmcrop

> Crop PNM images.
> More information: <https://netpbm.sourceforge.net/doc/pnmcrop.html>.

- Remove white borders on a PNM image:

`pnmcrop {{[-w|-white]}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Remove borders of the specified color that are on the top and left side of the image:

`pnmcrop -bg-color {{color}} {{[-t|-top]}} {{[-l|-left]}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Determine the color of the borders to be removed by the color of the pixel in the specified corner:

`pnmcrop -bg-corner {{topleft|topright|bottomleft|bottomright}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`

- Leave a border with a width of `n` pixels. Additionally, specify the behaviour if the image is entirely made out of background:

`pnmcrop {{[-m|-margin]}} {{n}} {{[-blan|-blank-image]}} {{pass|minimize|maxcrop}} {{path/to/image.pnm}} > {{path/to/output.pnm}}`
