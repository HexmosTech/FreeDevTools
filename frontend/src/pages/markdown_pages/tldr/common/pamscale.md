---
title: "Pamscale - Scale Images Easily | Online Free DevTools by Hexmos"
name: pamscale
path: /freedevtools/tldr/common/pamscale
canonical: "https://hexmos.com/freedevtools/tldr/common/pamscale/"
description: "Scale Netpbm images easily with Pamscale. Adjust width, height, and aspect ratio. Free online tool, no registration required. Ideal for image manipulation."
category: common
keywords:
- pamscale image scaling
- netpbm image scale
- image size adjuster
- scale image width
- scale image height
- aspect ratio scaling
- image manipulation
- image resize linux
- pam image editor
- common command pamscale
features:
- Scale images by specified dimensions
- Adjust image width while preserving aspect ratio
- Scale images by x and y factors
- Fit images into specified bounding box
- Fill specified box while preserving aspect ratio
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamscale

> Scale a Netpbm image.
> More information: <https://netpbm.sourceforge.net/doc/pamscale.html>.

- Scale an image such that the result has the specified dimensions:

`pamscale {{[-wid|-width]}} {{width}} {{[-h|-height]}} {{height}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Scale an image such that the result has the specified width, keeping the aspect ratio:

`pamscale {{[-wid|-width]}} {{width}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Scale an image such that its width and height is changed by the specified factors:

`pamscale {{[-xsc|-xscale]}} {{x_factor}} {{[-ysc|-yscale]}} {{y_factor}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Scale an image such that it fits into the specified bounding box while preserving its aspect ratio:

`pamscale -xyfit {{bbox_width}} {{bbox_height}} {{path/to/input.pam}} > {{path/to/output.pam}}`

- Scale an image such that it completely fills the specified box while preserving its aspect ratio:

`pamscale -xyfill {{box_width}} {{box_height}} {{path/to/input.pam}} > {{path/to/output.pam}}`
