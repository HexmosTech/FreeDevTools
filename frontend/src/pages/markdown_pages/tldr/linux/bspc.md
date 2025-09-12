---
title: "BSPC Window Manager - Control Bspwm Windows | Free DevTools"
name: bspc
path: /freedevtools/tldr/unknown/bspc
canonical: "https://hexmos.com/freedevtools/tldr/unknown/bspc/"
description: "Control Bspwm window management with BSPC commands. Manage desktops, nodes, and monitors efficiently. Free online tool, no registration required."
category: unknown
keywords:
- bspc window manager
- bspwm control
- linux window management
- command line window manager
- desktop configuration
- monitor configuration
- window state control
- tiling window manager
- node management bspc
- desktop focus bspc
features:
- Configure virtual desktops dynamically
- Focus specific desktops by number
- Close windows rooted at selected nodes
- Send nodes to designated desktops
- Toggle fullscreen mode for selected nodes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bspc

> Configure and control `bspwm`, managing nodes, desktops, monitors, and more.
> See also: `bspwm`.
> More information: <https://github.com/baskerville/bspwm>.

- Define two virtual desktops:

`bspc monitor {{[-d|--reset-desktops]}} {{desktop_name1}} {{desktop_name2}}`

- Focus the given desktop:

`bspc desktop {{[-f|--focus]}} {{number}}`

- Close the windows rooted at the selected node:

`bspc node {{[-c|--close]}}`

- Send the selected node to the given desktop:

`bspc node {{[-d|--to-desktop]}} {{number}}`

- Toggle full screen mode for the selected node:

`bspc node {{[-t|--state]}} ~fullscreen`

- Set the value of a specific setting:

`bspc config {{setting_name}} {{value}}`
