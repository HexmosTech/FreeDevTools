---
title: "Blight - Control Display Brightness | Online Free DevTools by Hexmos"
name: blight
path: /freedevtools/tldr/linux/blight
canonical: "https://hexmos.com/freedevtools/tldr/linux/blight/"
description: "Control display brightness with Blight.  Set, increase, or decrease brightness levels easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - display brightness control
  - brightness command line
  - screen brightness adjustment
  - command-line brightness tool
  - terminal brightness control
  - set display brightness
  - increase display brightness
  - decrease display brightness
  - show current brightness
  - max brightness
features:
  - Set display brightness to a specific percentage.
  - Show the current display brightness level.
  - Display the maximum possible brightness level.
  - Increase display brightness by a specified percentage or relative amount.
  - Decrease display brightness by a specified amount.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# blight

> Utility for changing the display brightness.
> More information: <https://github.com/gutjuri/blight>.

- Set display brightness to 50%:

`blight set {{50}} {{[-r|--relative]}}`

- Show current display brightness:

`blight show`

- Print maximum display brightness:

`blight max`

- Increase display brightness in %:

`blight inc {{number}} {{[-r|--relative]}}`

- Decrease display brightness with internal units:

`blight dec {{number}}`
