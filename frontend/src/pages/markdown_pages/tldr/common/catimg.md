---
title: "Display Images - Print Images in Terminal | Online Free DevTools by Hexmos"
name: catimg
path: /freedevtools/tldr/common/catimg
canonical: "https://hexmos.com/freedevtools/tldr/common/catimg/"
description: "Print images instantly with catimg, a command-line image viewer. Display JPEGs, PNGs, and GIFs directly in your terminal. Free online tool, no registration required."
category: common
keywords:
- terminal image viewer
- command line image viewer
- linux image viewer
- png image printer
- jpeg image printer
- gif image printer
- console image display
- terminal graphics tool
- image to ascii converter
- catimg utility
features:
- Display JPEG images in the terminal
- Render PNG images using command line
- Output GIF images to the console
- Adjust image resolution for terminal viewing
- Disable 24-bit color for terminal compatibility
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# catimg

> Image printing in the terminal.
> See also: `pixterm`, `chafa`.
> More information: <https://manned.org/catimg>.

- Print a JPEG, PNG, or GIF to the terminal:

`catimg {{path/to/file}}`

- Double the [r]esolution of an image:

`catimg -r 2 {{path/to/file}}`

- Disable 24-bit color for better [t]erminal support:

`catimg -t {{path/to/file}}`

- Specify a custom [w]idth or [H]eight:

`catimg {{-w|-H}} {{40}} {{path/to/file}}`
