---
title: "Brightness Control - Manage Display Brightness | Online Free DevTools by Hexmos"
name: brightnessctl
path: /freedevtools/tldr/linux/brightnessctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/brightnessctl/"
description: "Control display brightness with brightnessctl on Linux. Adjust screen luminosity and manage multiple displays from the command line. Free online tool, no registration required."
category: linux
keywords:
- display brightness control
- linux brightness manager
- brightnessctl command
- screen brightness adjust
- command line brightness
- linux display settings
- brightness percentage control
- monitor brightness tool
- backlight brightness adjust
- device brightness control
features:
- List available brightness devices
- Get current brightness levels
- Set brightness to a specific percentage
- Increment or decrement brightness
- Control brightness for specific devices
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# brightnessctl

> Utility for reading and controlling device brightness for Linux operating systems.
> More information: <https://github.com/Hummer12007/brightnessctl#usage>.

- List devices with changeable brightness:

`brightnessctl {{[-l|--list]}}`

- Print the current brightness of the default device:

`brightnessctl {{[g|get]}}`

- Print the current brightness of a specific device (can be a wildcard):

`brightnessctl {{[g|get]}} {{[-d|--device]}} '{{device_name}}'`

- Set the brightness to a specified percentage:

`brightnessctl {{[s|set]}} {{50}}%`

- Increase brightness by a specified percentage:

`brightnessctl {{[s|set]}} +{{10}}%`

- Decrease brightness by a specified percentage:

`brightnessctl {{[s|set]}} {{10}}%-`
