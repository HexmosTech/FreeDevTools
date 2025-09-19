---
title: "Control Backlight - Manage Screen Brightness with ybacklight | Online Free DevTools by Hexmos"
name: ybacklight
path: /freedevtools/tldr/common/ybacklight
canonical: "https://hexmos.com/freedevtools/tldr/common/ybacklight/"
description: "Control screen brightness with ybacklight. Adjust backlight levels and manage display settings using command line. Free online tool, no registration required."
category: common
keywords:
- backlight control
- screen brightness
- display management
- linux backlight
- ybacklight command
- command line backlight
- brightness adjustment
- display brightness
- backlight settings
- command line tool
features:
- Set specific brightness levels for the screen.
- Increase or decrease brightness by specified amounts.
- Print current and maximum brightness values.
- Manage screen backlight from the command line.
- Adjust brightness in defined steps.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ybacklight

> Manage screen backlight brightness.
> See also: `xbacklight`.
> More information: <https://github.com/pixelcmtd/ybacklight>.

- Print current brightness and maximal brightness, shortened and separated by a slash:

`ybacklight Sc/Sm`

- Specify the brightness:

`ybacklight s{{420}}`

- Increase the brightness by 42 big steps (4200 by default):

`ybacklight Si42`

- Decrease the brightness by 300:

`ybacklight d300`
