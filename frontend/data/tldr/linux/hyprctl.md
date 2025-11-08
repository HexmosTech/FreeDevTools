---
title: "Hyprctl Control - Manage Hyprland Compositor | Online Free DevTools by Hexmos"
name: hyprctl
path: "/freedevtools/tldr/linux/hyprctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/hyprctl/"
description: "Control your Hyprland Wayland compositor with Hyprctl. Manage windows, dispatch events, and configure settings dynamically. Free online tool, no registration required."
category: linux
keywords:
- hyprland compositor control
- linux window manager
- wayland compositor configuration
- hyprctl command line
- dynamic compositor settings
- hyprland event dispatcher
- window management linux
- compositor configuration hyprland
- linux wayland control
- hyprctl linux commands
features:
- Reload Hyprland configuration dynamically
- Retrieve active window information
- List connected input devices and outputs
- Dispatch custom events to Hyprland
- Set configuration keywords on the fly
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hyprctl

> Control parts of the Hyprland Wayland compositor.
> More information: <https://wiki.hyprland.org/Configuring/Using-hyprctl>.

- Reload Hyprland configuration:

`hyprctl reload`

- Return the active window name:

`hyprctl activewindow`

- List all connected input devices:

`hyprctl devices`

- List all outputs with respective properties:

`hyprctl workspaces`

- Call a dispatcher:

`hyprctl dispatch {{dispatcher}}`

- Set a configuration keyword dynamically:

`hyprctl keyword {{keyword}} {{value}}`

- Display version:

`hyprctl version`
