---
title: "Control Wacom Tablet - Configure Pen Tablets | Online Free DevTools by Hexmos"
name: xsetwacom
path: "/freedevtools/tldr/linux/xsetwacom/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/xsetwacom/"
description: "Control Wacom tablets with xsetwacom. Configure settings at runtime and customize your pen tablet experience. Free online tool, no registration required."
category: linux
keywords:
  - Wacom tablet control
  - Wacom pen configuration
  - xsetwacom command
  - Linux Wacom settings
  - Pen tablet customization
  - Input device management
  - Tablet screen mapping
  - Wacom rotation settings
  - Pen mode configuration
  - Input device settings
features:
  - List available Wacom devices
  - Map Wacom area to a specific screen
  - Set relative or absolute mode for the pen
  - Rotate input for tablet PCs
  - Configure button functionality based on pen tip contact
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xsetwacom

> Change settings for Wacom pen tablets at runtime.
> More information: <https://manned.org/xsetwacom>.

- List all the available Wacom devices. The device name is in the first column:

`xsetwacom list`

- Set Wacom area to specific screen. Get name of the screen with `xrandr`:

`xsetwacom set "{{device_name}}" MapToOutput {{screen}}`

- Set mode to relative (like a mouse) or absolute (like a pen) mode:

`xsetwacom set "{{device_name}}" Mode "{{Relative|Absolute}}"`

- Rotate the input (useful for tablet-PC when rotating screen) by 0|90|180|270 degrees from "natural" rotation:

`xsetwacom set "{{device_name}}" Rotate {{none|half|cw|ccw}}`

- Set button to only work when the tip of the pen is touching the tablet:

`xsetwacom set "{{device_name}}" TabletPCButton "on"`
