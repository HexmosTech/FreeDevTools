---
title: "Gamescope Control - Manage Game Layering | Online Free DevTools by Hexmos"
name: gamescope
path: /freedevtools/tldr/linux/gamescope
canonical: "https://hexmos.com/freedevtools/tldr/linux/gamescope/"
description: "Control game layering with Gamescope, a micro-compositor for enhanced gaming.  Manage game resolution, framerate, and output seamlessly. Free online tool, no registration required."
category: linux
keywords:
  - gamescope command
  - linux gamescope
  - gamescope steam
  - gamescope scaling
  - gamescope framerate
  - gamescope compositor
  - gamescope overlay
  - gamescope resolution
  - gamescope performance
  - gamescope integration
features:
  - Run programs and games with custom settings
  - Upscale game resolution with integer scaling
  - Limit framerate for smoother gameplay
  - Integrate with Steam's Big Picture Mode
  - Manage display output preferences
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gamescope

> A micro-compositor used as a game layer.
> More information: <https://github.com/ValveSoftware/gamescope>.

- Run a program with gamescope on the terminal:

`gamescope -- {{program}}`

- Run a game with gamescope through Steam:

`gamescope -- %command%`

- Upscale a 720p game to 1440p with integer scaling:

`gamescope {{[-h|--nested-height]}} 720 {{[-H|--output-height]}} 1440 {{[-S|--scaler]}} integer -- %command%`

- Limit a vsynced game to 30 FPS:

`gamescope {{[-r|--nested-refresh]}} 30 -- %command%`

- Launch Steam in Big Picture Mode and integrate with gamescope:

`gamescope {{[-e|--steam]}} -- /usr/bin/steam -tenfoot`

- Specify which display to prefer:

`gamescope {{[-O|--prefer-output]}} {{HDMI-A-1,DP-3,...}} -- {{program}}`

- Toggle fullscreen:

`<Super f>`

- Display help:

`gamescope --help`
