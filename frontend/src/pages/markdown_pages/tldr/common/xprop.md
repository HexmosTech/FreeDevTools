---
title: "Display X Properties - Inspect Windows & Fonts | Free DevTools"
name: xprop
path: /freedevtools/tldr/common/xprop
canonical: "https://hexmos.com/freedevtools/tldr/common/xprop/"
description: "Display X properties with xprop. Inspect window and font attributes, debug X server applications, and troubleshoot display issues. Free online tool, no registration required."
category: common
keywords:
- X window properties
- X server inspector
- font property viewer
- display information tool
- window manager hints
- X11 debugging
- Linux window info
- X server analysis
- X property dumper
- xprop command line
features:
- Display properties of X windows
- Inspect font attributes and metrics
- Show window manager hints
- Output properties of the root window
- Identify windows by ID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xprop

> Display window and font properties in an X server.
> More information: <https://manned.org/xprop>.

- Display the name of the root window:

`xprop -root WM_NAME`

- Display the window manager hints for a window:

`xprop -name "{{window_name}}" WM_HINTS`

- Display the point size of a font:

`xprop -font "{{font_name}}" POINT_SIZE`

- Display all the properties of the window with the ID 0x200007:

`xprop -id {{0x200007}}`
