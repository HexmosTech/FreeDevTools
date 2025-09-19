---
title: "Create PCD to PPM Image - Convert Photo CDs | Online Free DevTools by Hexmos"
name: pcdovtoppm
path: /freedevtools/tldr/common/pcdovtoppm
canonical: "https://hexmos.com/freedevtools/tldr/common/pcdovtoppm/"
description: "Create PCD to PPM image with pcdovtoppm. Generate index images from Photo CD overview files using this free online tool, no registration required."
category: common
keywords:
- PCD to PPM converter
- Photo CD image creator
- PPM image generator
- PCD image index
- Netpbm image conversion
- Image format conversion
- PCD to PPM tool
- Photo CD extraction
- Image manipulation command
- Linux image tools
features:
- Convert PCD overview files to PPM images
- Specify output image width
- Define size of images in the output
- Customize number of images across
- Set font and background color
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pcdovtoppm

> Create an index image for a photo CD based on its overview file.
> More information: <https://netpbm.sourceforge.net/doc/pcdovtoppm.html>.

- Create a PPM index image from a PCD overview file:

`pcdovtoppm {{path/to/file.pcd}} > {{path/to/output.ppm}}`

- Specify the maximum width of the output image and the maximum size of each of the images contained in the output:

`pcdovtoppm {{[-m|-maxwidth]}} {{width}} {{[-s|-size]}} {{size}} {{path/to/file.pcd}} > {{path/to/output.ppm}}`

- Specify the maximum number of images across and the maximum number of colours:

`pcdovtoppm {{[-a|-across]}} {{n_images}} {{[-c|-colors]}} {{n_colours}} {{path/to/file.pcd}} > {{path/to/output.ppm}}`

- Use the specified font for annotations and paint the background white:

`pcdovtoppm {{[-f|-font]}} {{font}} {{[-w|-white]}} {{path/to/file.pcd}} > {{path/to/output.ppm}}`
