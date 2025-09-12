---
title: "Yabai Window Manager - Control macOS Windows | Free DevTools"
name: yabai
path: /freedevtools/tldr/osx/yabai
canonical: "https://hexmos.com/freedevtools/tldr/osx/yabai/"
description: "Control macOS window layout with Yabai Window Manager. Configure window gaps, opacity, and shadows for efficient tiling. Free online tool, no registration required."
category: osx
keywords:
- macos window manager
- yabai tiling window manager
- macos window tiling
- yabai config
- yabai scripting
- macos bsp tiling
- yabai window gaps
- yabai window opacity
- yabai window shadows
- yabai status bar
features:
- Configure window layout using bsp, stack, or float modes.
- Customize window gaps in points.
- Enable or disable window opacity.
- Turn window shadows on or off.
- Activate or deactivate the status bar.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# yabai

> A tiling window manager for macOS based on binary space partitioning.
> More information: <https://github.com/koekeishiya/yabai/wiki>.

- Send a config [m]essage for setting the layout:

`yabai -m config layout {{bsp|stack|float}}`

- Set the window gap in pt:

`yabai -m config window_gap {{10}}`

- Enable opacity:

`yabai -m config window_opacity on`

- Disable window shadow:

`yabai -m config window_shadow off`

- Enable status bar:

`yabai -m config status_bar on`
