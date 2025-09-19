---
title: "Control Backlight - Manage Screen Brightness with Light | Online Free DevTools by Hexmos"
name: light
path: /freedevtools/tldr/linux/light
canonical: "https://hexmos.com/freedevtools/tldr/linux/light/"
description: "Control screen backlight with Light. Adjust brightness levels, reduce eye strain, and manage display power consumption efficiently. Free online tool, no registration required."
category: linux
keywords:
- linux backlight control
- screen brightness manager
- light command linux
- backlight adjustment linux
- display brightness tool
- light percentage control
- command line backlight
- linux light command
- brightness setting utility
- backlight scaling linux
features:
- Get the current backlight percentage
- Set backlight level to a specific percentage
- Increment the backlight by a defined percentage
- Decrement the backlight by a defined percentage
- Adjust brightness directly from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# light

> Control the backlight of your screen.
> More information: <https://manned.org/light>.

- Get the current backlight value in percent:

`light`

- Set the backlight value to 50 percent:

`light -S {{50}}`

- Reduce 20 percent from the current backlight value:

`light -U {{20}}`

- Add 20 percent to the current backlight value:

`light -A {{20}}`
