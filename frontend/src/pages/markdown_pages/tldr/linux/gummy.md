---
title: "Gummy - Control Screen Brightness & Temperature | Online Free DevTools by Hexmos"
name: gummy
path: /freedevtools/tldr/linux/gummy
canonical: "https://hexmos.com/freedevtools/tldr/linux/gummy/"
description: "Control screen brightness and temperature with Gummy. Adjust backlight and color settings easily for optimal viewing. Free online tool, no registration required."
category: linux
keywords:
- linux screen brightness
- linux screen temperature
- screen brightness manager
- screen temperature controller
- gummy linux
- x11 brightness
- x11 temperature
- backlight control linux
- pixel brightness adjustment
- color temperature setting
features:
- Adjust screen brightness with percentage values.
- Control screen color temperature in Kelvin.
- Manage brightness and temperature for multiple screens.
- Increase or decrease brightness levels incrementally.
- Set precise brightness and temperature values.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gummy

> Screen brightness/temperature manager for Linux/X11.
> More information: <https://github.com/Gitoffthelawn/gummy>.

- Set the screen temperature to 3000K:

`gummy {{[-t|--temperature]}} {{3000}}`

- Set the screen backlight to 50%:

`gummy --backlight {{50}}`

- Set the screen pixel brightness to 45%:

`gummy {{[-b|--brightness]}} {{45}}`

- Increase current screen pixel brightness by 10%:

`gummy {{[-b|--brightness]}} {{+10}}`

- Decrease current screen pixel brightness by 10%:

`gummy {{[-b|--brightness]}} {{-10}}`

- Set the temperature and pixel brightness for the second screen:

`gummy {{[-s|--screen]}} {{1}} {{[-t|--temperature]}} {{3800}} {{[-b|--brightness]}} {{65}}`
