---
title: "Control Wallpaper with Swaybg - Wayland Manager | Online Free DevTools by Hexmos"
name: swaybg
path: /freedevtools/tldr/common/swaybg
canonical: "https://hexmos.com/freedevtools/tldr/common/swaybg/"
description: "Control Wayland wallpaper effortlessly with Swaybg. Set images, modes (stretch, fit, fill), and colors easily.  Free online tool, no registration required. Command reference and examples included."
category: common
keywords:
  - Wayland wallpaper manager
  - Swaybg image setter
  - Linux wallpaper control
  - Wayland background configuration
  - Sway compositor wallpaper
  - Set Wayland background image
  - Linux display customization
  - Wayland color wallpaper
  - Configure Swaybg wallpaper
  - Command-line wallpaper changer
features:
  - Set images as wallpaper with ease.
  - Define wallpaper display modes (stretch, fit, fill, center, tile).
  - Set a solid color as the background.
  - Manage wallpaper via simple command-line interface.
  - Configure wallpaper settings for Wayland compositors.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
