---
title: "Pamcut - Cut Netpbm Images | Online Free DevTools by Hexmos"
name: pamcut
path: "/freedevtools/tldr/common/pamcut/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamcut/"
description: "Cut rectangular regions from Netpbm images with Pamcut. Crop images, discard columns/rows, and fill missing areas. Free online tool, no registration required."
category: common
keywords:
- netpbm image cut
- pam image crop
- ppm image editor
- netpbm image manipulation
- linux image processing
- command line image tools
- pamcut image region
- image cropping utility
- ppm image cropping
- netpbm image slicing
features:
- Discard specified columns and rows from images
- Keep only specified columns between given values
- Fill missing areas with black pixels if rectangle exceeds image boundaries
- Crop images from left, right, top, and bottom edges
- Extract rectangular regions from Netpbm images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamcut

> Cut out a rectangular region from a Netpbm image.
> See also: `pamcrop`, `pamdice`, `pamcomp`.
> More information: <https://netpbm.sourceforge.net/doc/pamcut.html>.

- Discard the specified number of columns/rows on each side of the image:

`pamcut {{[-cropl|-cropleft]}} {{value}} {{[-cropr|-cropright]}} {{value}} {{[-cropt|-croptop]}} {{value}} {{[-cropb|-cropbottom]}} {{value}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Keep only the columns between the specified columns (inclusively):

`pamcut {{[-l|-left]}} {{value}} {{[-ri|-right]}} {{value}} {{path/to/image.ppm}} > {{path/to/output.ppm}}`

- Fill missing areas with black pixels if the specified rectangle does not entirely lie within the input image:

`pamcut {{[-t|-top]}} {{value}} {{[-b|-bottom]}} {{value}} -pad {{path/to/image.ppm}} > {{path/to/output.ppm}}`
