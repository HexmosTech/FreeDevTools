---
title: "View Images - Render Images in Terminal | Online Free DevTools by Hexmos"
name: viu
path: /freedevtools/tldr/common/viu
canonical: "https://hexmos.com/freedevtools/tldr/common/viu/"
description: "Render images instantly with Viu terminal image viewer. Display PNGs, JPGs, and GIFs directly in your command line. Free online tool, no registration required."
category: common
keywords:
- terminal image viewer
- command line image viewer
- image rendering terminal
- ascii art generator
- terminal graphics
- image display linux
- image display macos
- image display common
- viu image viewer
- gif terminal display
features:
- Render images directly in the terminal
- Display animated GIFs in the command line
- Control image width and height
- Support transparent backgrounds
- Display image filename option
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# viu

> View images on the terminal.
> More information: <https://github.com/atanunq/viu>.

- Render an image or animated GIF:

`viu {{path/to/file}}`

- Render an image or GIF from the internet using `curl`:

`curl {{[-s|--silent]}} {{https://example.com/image.png}} | viu -`

- Render an image with a transparent background:

`viu {{[-t|--transparent]}} {{path/to/file}}`

- Render an image with a specific width and height in pixels:

`viu {{[-w|--width]}} {{width}} {{[-h|--height]}} {{height}} {{path/to/file}}`

- Render an image or GIF and display its file name:

`viu {{[-n|--name]}} {{path/to/file}}`
