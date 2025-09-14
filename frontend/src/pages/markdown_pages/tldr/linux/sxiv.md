---
title: "View Images - sxiv Image Viewer | Free DevTools"
name: sxiv
path: /freedevtools/tldr/linux/sxiv
canonical: "https://hexmos.com/freedevtools/tldr/linux/sxiv/"
description: "View images quickly and easily with sxiv Image Viewer.  Open single images, slideshows, or thumbnails from the command line. Free online tool, no registration required."
category: linux
keywords:
  - image viewer command
  - command line image viewer
  - sxiv image viewer
  - image slideshow command
  - linux image viewer
  - terminal image viewer
  - batch image viewer
  - fullscreen image viewer
  - command line image display
  - image viewing utility
features:
  - Open single images from the command line.
  - View images in fullscreen mode.
  - Create slideshows of multiple images with custom time delays.
  - Display images in thumbnail mode for quick browsing.
  - Process newline-separated lists of images from stdin.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sxiv

> Simple X Image Viewer.
> More information: <https://manned.org/sxiv>.

- Open an image:

`sxiv {{path/to/image}}`

- Open an image in fullscreen mode:

`sxiv -f {{path/to/file}}`

- Open a newline-separated list of images, reading filenames from `stdin`:

`echo {{path/to/file}} | sxiv -i`

- Open one or more images as a slideshow:

`sxiv -S {{seconds}} {{path/to/image1 path/to/image2}}`

- Open one or more images in thumbnail mode:

`sxiv -t {{path/to/image1 path/to/image2}}`
