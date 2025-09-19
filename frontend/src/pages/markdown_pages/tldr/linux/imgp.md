---
title: "Resize Images - Rotate and Scale with imgp | Online Free DevTools by Hexmos"
name: imgp
path: /freedevtools/tldr/linux/imgp
canonical: "https://hexmos.com/freedevtools/tldr/linux/imgp/"
description: "Resize images with imgp, a command-line tool for scaling and rotating JPEG and PNG files on Linux. Free online tool, no registration required."
category: linux
keywords:
- image resizer
- image rotator
- linux image scaling
- png resizer
- jpeg resizer
- command line image tools
- linux image editor
- batch image processing
- image dimension changer
- imgp linux
features:
- Resize images by percentage or fixed dimensions.
- Rotate images by specified degrees.
- Process single files or entire directories.
- Overwrite source images with new sizes.
- Supports JPEG and PNG image formats.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# imgp

> Resize and rotate JPEG and PNG images.
> More information: <https://github.com/jarun/imgp>.

- Convert single images and/or whole directories containing valid image formats:

`imgp {{[-x|--res]}} {{1366x1000}} {{path/to/directory}} {{path/to/file}}`

- Scale an image by 75% and overwrite the source image to a target resolution:

`imgp {{[-x|--res]}} {{75}} z-w {{path/to/file}}`

- Rotate an image clockwise by 90 degrees:

`imgp {{[-o|--rotate]}} {{90}} {{path/to/file}}`
