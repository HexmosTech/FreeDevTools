---
title: "Control Backlight Brightness with xbacklight | Online Free DevTools by Hexmos"
name: xbacklight
path: /freedevtools/tldr/linux/xbacklight
canonical: "https://hexmos.com/freedevtools/tldr/linux/xbacklight/"
description: "Control and adjust screen backlight brightness using xbacklight.  Get current brightness, increase, decrease, or set precise brightness levels with simple commands. Free online tool, no registration required."
category: linux
keywords:
  - backlight control linux
  - xbacklight command linux
  - screen brightness adjustment
  - RandR backlight control
  - linux screen brightness
  - xbacklight percentage control
  - xbacklight increase brightness
  - xbacklight decrease brightness
  - set backlight linux
  - xbacklight command line
features:
  - Get current screen brightness percentage.
  - Set screen brightness to a specific percentage.
  - Increase screen brightness by a specified percentage.
  - Decrease screen brightness by a specified percentage.
  - Adjust brightness gradually over a defined time using steps.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xbacklight

> Utility to adjust backlight brightness using the RandR extension.
> More information: <https://manned.org/xbacklight>.

- Get the current screen brightness as a percentage:

`xbacklight`

- Set the screen brightness to 40%:

`xbacklight -set {{40}}`

- Increase current brightness by 25%:

`xbacklight -inc {{25}}`

- Decrease current brightness by 75%:

`xbacklight -dec {{75}}`

- Increase backlight to 100%, over 60 seconds (value given in ms), using 60 steps:

`xbacklight -set {{100}} -time {{60000}} -steps {{60}}`
