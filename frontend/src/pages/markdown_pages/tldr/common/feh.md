---
title: "View Images with Feh - Image Viewer Utility | Online Free DevTools by Hexmos"
name: feh
path: /freedevtools/tldr/common/feh
canonical: "https://hexmos.com/freedevtools/tldr/common/feh/"
description: "View images with Feh, a lightweight image viewing utility for Linux and other platforms. Display images locally or from URLs, set wallpaper and create montages. Free online tool, no registration required."
category: common
keywords:
- linux image viewer
- command line image viewer
- feh image viewer
- image display utility
- feh wallpaper
- feh montage
- linux image slideshow
- terminal image viewer
- feh command
- image manipulation linux
features:
- Display images from local paths or URLs.
- Create image montages from directories.
- Set an image as the desktop wallpaper.
- View images in slideshow mode with custom delays.
- Customize window appearance with borderless option.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# feh

> Lightweight image viewing utility.
> More information: <https://feh.finalrewind.org>.

- View images locally or using a URL:

`feh {{path/to/images}}`

- View images recursively:

`feh --recursive {{path/to/images}}`

- View images without window borders:

`feh --borderless {{path/to/images}}`

- Set the behavior when reaching the beginning or end of the image list:

`feh --on-last-slide {{hold|quit|resume}} {{path/to/images}}`

- Use a specific slideshow cycle delay:

`feh --slideshow-delay {{seconds}} {{path/to/images}}`

- Use a specific wallpaper mode (centered, filled, maximized, scaled or tiled):

`feh --bg-{{center|fill|max|scale|tile}} {{path/to/image}}`

- Create a montage of all images within a directory, outputting as a new image:

`feh --montage --thumb-height {{150}} --thumb-width {{150}} --index-info "{{%nn%wx%h}}" --output {{path/to/montage_image.png}}`
