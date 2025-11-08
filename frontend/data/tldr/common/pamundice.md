---
title: "Combine Netpbm Images - Grid Layouts | Online Free DevTools by Hexmos"
name: pamundice
path: "/freedevtools/tldr/common/pamundice/"
canonical: "https://hexmos.com/freedevtools/tldr/common/pamundice/"
description: "Combine Netpbm images with pamundice, creating grid layouts. Specify grid dimensions and overlaps easily. Free online tool, no registration required."
category: common
keywords:
- Netpbm image combiner
- Image grid generator
- PPM image stitcher
- Pamundice command
- Netpbm grid layout
- Image assembly tool
- Netpbm image processing
- Linux image tools
- Image grid creation
- Image concatenation
features:
- Combines multiple Netpbm images into a single image.
- Creates grid layouts based on specified dimensions.
- Supports image overlap for seamless stitching.
- Accepts a list of filenames for batch processing.
- Enables image combination using `printf`-style expressions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamundice

> Combine a grid of Netpbm images into one.
> See also: `pamdice`.
> More information: <https://netpbm.sourceforge.net/doc/pamundice.html>.

- Combine the images whose names match the `printf`-style filename expression. Assume a grid with a specific size:

`pamundice {{filename_%1d_%1a.ppm}} {{[-a|-across]}} {{grid_width}} {{[-d|-down]}} {{grid_height}} > {{path/to/output.ppm}}`

- Assume that the tiles overlap horizontally and vertically by the specified amount:

`pamundice {{filename_%1d_%1a.ppm}} {{[-a|-across]}} {{x_value}} {{[-d|-down]}} {{y_value}} {{[-ho|-hoverlap]}} {{value}} {{[-vo|-voverlap]}} {{value}} > {{path/to/output.ppm}}`

- Specify the images to be combined through a text file containing one filename per line:

`pamundice {{[-l|-listfile]}} {{path/to/file.txt}} {{[-a|-across]}} {{x_value}} {{[-d|-down]}} {{y_value}} > {{path/to/output.ppm}}`
