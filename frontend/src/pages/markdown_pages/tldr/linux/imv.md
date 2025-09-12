---
title: "Image Viewer - View Images in CLI | Free DevTools"
name: imv
path: /freedevtools/tldr/linux/imv
canonical: "https://hexmos.com/freedevtools/tldr/linux/imv/"
description: "View images instantly with imv, a command-line image viewer for Linux. Supports multiple image formats and tiling window managers. Free online tool, no registration required."
category: linux
keywords:
- linux image viewer
- command line image viewer
- terminal image viewer
- tiling window manager image viewer
- PSD image viewer linux
- wayland image viewer
- X11 image viewer
- image slideshow linux
- multiple image viewer linux
- CLI image manipulation
features:
- View multiple images from the command line
- Display images in fullscreen mode
- Recursively view images from a directory
- Create slideshows with configurable display time
- View images directly from web URLs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# imv

> CLI image viewer for wayland and X11 aimed at tiling window managers.
> Handles multiple formats including Photoshop (PSD).
> More information: <https://sr.ht/~exec64/imv>.

- View multiple images:

`imv {{path/to/image1.ext path/to/image2.ext ...}}`

- View in fullscreen mode:

`imv -f {{path/to/image.ext}}`

- View images [r]ecursively from a path:

`imv -r --slideshow {{path/to/directory}}`

- Open multiple images via `stdin`:

`find . -type f -name "{{*.svg}}" | imv`

- Make a slideshow from a directory showing each image for 10 seconds:

`imv -t 10 {{path/to/directory}}`

- View multiple images from the web:

`curl -Osw '%{filename_effective}\n' '{{http://www.example.com/[1-10].jpg}}' | imv`
