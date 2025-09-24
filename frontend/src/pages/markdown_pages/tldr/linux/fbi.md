---
title: "Display Images - Control Images in Linux Framebuffer | Online Free DevTools by Hexmos"
name: fbi
path: /freedevtools/tldr/linux/fbi
canonical: "https://hexmos.com/freedevtools/tldr/linux/fbi/"
description: "Control images in the terminal with fbi, a linux framebuffer image viewer. Display single or multiple images and create slideshows effortlessly. Free online tool, no registration required."
category: linux
keywords:
- linux framebuffer image viewer
- terminal image display
- linux image viewer
- fbi image viewer
- command line image viewer
- linux image slideshow
- framebuffer image control
- image display linux
- image viewer command line
- linux terminal image
features:
- Display images in a terminal framebuffer
- Display multiple images at once
- Create image slideshows with custom delays
- Scale images to fit the screen
- Show help information for available options
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fbi

> Display images in a terminal framebuffer.
> More information: <https://manned.org/fbi>.

- Display an image:

`sudo fbi {{path/to/file}}`

- Display multiple images:

`sudo fbi {{path/to/file1 path/to/file2 ...}}`

- Start a slideshow with a custom delay (in seconds):

`sudo fbi {{[-t|--timeout]}} {{delay}} {{path/to/files/*}}`

- Scale the image to fit the screen:

`sudo fbi {{[-a|--autozoom]}} {{path/to/file}}`

- Display help:

`fbi {{[-h|--help]}}`
