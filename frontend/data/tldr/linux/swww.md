---
title: "Control Wallpapers - SWWW Wayland Daemon | Online Free DevTools by Hexmos"
name: swww
path: "/freedevtools/tldr/linux/swww/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/swww/"
description: "Control Wayland wallpapers efficiently with SWWW, an animated wallpaper daemon. Manage wallpaper settings, outputs and restore previous states easily. Free online tool, no registration required."
category: linux
keywords:
  - Wayland wallpaper manager
  - Animated wallpaper daemon
  - SWWW wallpaper tool
  - Linux wallpaper utility
  - Command-line wallpaper control
  - Output-specific wallpaper setting
  - Wallpaper restoration script
  - Wayland compositor wallpaper
  - SWWW daemon control
  - Wallpaper query tool
features:
  - Set wallpaper for specific outputs
  - Restore last wallpaper state
  - Kill running daemon process
  - Query output device information
  - Manage animated wallpapers in Wayland
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swww

> Efficient animated wallpaper daemon for Wayland.
> See also: `swww-daemon`.
> More information: <https://github.com/LGFae/swww>.

- Set wallpaper:

`swww img {{path/to/image}}`

- Set wallpaper to specified outputs:

`swww img {{[-o|--outputs]}} {{output1,output2,...}} {{path/to/image}}`

- Restore last wallpaper:

`swww restore`

- Kill daemon:

`swww kill`

- Display output information:

`swww query`
