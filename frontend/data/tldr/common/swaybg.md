---
title: "Control Wallpaper - Swaybg Tool | Online Free DevTools by Hexmos"
name: swaybg
path: "/freedevtools/tldr/common/swaybg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/swaybg/"
description: "Control Wayland wallpaper with Swaybg. Set images, modes, and colors easily. Free online tool, no registration required."
category: common
keywords:
  - Wayland wallpaper manager
  - Swaybg image setter
  - Linux wallpaper control
  - Desktop background manager
  - Wayland compositor tool
  - Sway window manager
  - Image display utility
  - Color wallpaper setter
  - Linux display configuration
  - Wayland display settings
features:
  - Set a specific image as wallpaper
  - Define the wallpaper display mode (stretch, fit, fill, etc.)
  - Set a solid color as the wallpaper
  - Control wallpaper via the command line
  - Configure wallpaper for Wayland compositors
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swaybg

> Wallpaper tool for Wayland compositors.
> More information: <https://github.com/swaywm/swaybg/blob/master/swaybg.1.scd>.

- Set the wallpaper to an image:

`swaybg {{[-i|--image]}} {{path/to/image}}`

- Set the wallpaper mode:

`swaybg {{[-i|--image]}} {{path/to/image}} {{[-m|--mode]}} {{stretch|fit|fill|center|tile|solid_color}}`

- Set the wallpaper to a static color:

`swaybg {{[-c|--color]}} "{{#rrggbb}}"`
