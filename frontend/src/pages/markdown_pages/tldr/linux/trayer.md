---
title: "Control Trayer - Lightweight Systray | Free DevTools"
name: trayer
path: /freedevtools/tldr/unknown/trayer
canonical: "https://hexmos.com/freedevtools/tldr/unknown/trayer/"
description: "Control systray appearance and behavior with Trayer, a lightweight GTK-2 based systray tool. Configure position, size, and icon spacing effortlessly. Free online tool, no registration required."
category: unknown
keywords:
- GTK Systray Manager
- Lightweight System Tray Controller
- Linux Panel Customization
- Tray Icon Spacing
- Trayer Configuration
- GTK Application Launcher
- X11 Systray Tool
- System Tray Position
- Trayer Appearance
- Linux Desktop Customization
features:
- Customize systray position on screen edges
- Adjust systray height and width in pixels
- Configure systray width as pixel or percentage
- Align systray elements to left, center, or right
- Define icon spacing within the systray
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trayer

> A lightweight GTK-2 based systray.
> More information: <https://github.com/sargon/trayer-srg>.

- Run `trayer`:

`trayer`

- Position `trayer` to a specific edge:

`trayer --edge {{left|right|top|bottom}}`

- Provide a specific height and width of the panel (in pixels):

`trayer --width {{10}} --height {{32}}`

- Provide the width of the panel in pixels or percentages:

`trayer --widthtype {{pixel|percent}} --width {{72}}`

- Align `trayer` to a specific direction:

`trayer --align {{left|center|right}}`

- Provide spacing between icons (in pixels):

`trayer --iconspacing {{10}}`
