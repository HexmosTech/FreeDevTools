---
title: "Control Screen Setup - Kscreen-doctor | Free DevTools"
name: kscreen-doctor
path: /freedevtools/tldr/linux/kscreen-doctor
canonical: "https://hexmos.com/freedevtools/tldr/linux/kscreen-doctor/"
description: "Control screen setup with Kscreen-doctor, a powerful Linux display configuration tool.  Adjust resolution, rotation, and scaling effortlessly. Free online tool, no registration required."
category: linux
keywords:
- linux screen configuration
- kscreen-doctor display manager
- linux display settings command line
- screen resolution controller linux
- display rotation adjuster linux
- monitor scaling linux
- display output information linux
- xrandr alternative linux
- kde screen management
- linux display configuration tool
features:
- Show display output information
- Set display rotation
- Adjust display scaling
- Configure multiple monitors
- Manipulate screen setup via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kscreen-doctor

> Change and manipulate the screen setup.
> More information: <https://invent.kde.org/plasma/libkscreen>.

- Show display output information:

`kscreen-doctor {{[-o|--outputs]}}`

- Set the rotation of a display output with an ID of 1 to the right:

`kscreen-doctor {{output.1.rotation.right}}`

- Set the scale of a display output with an ID of `HDMI-2` to 2 (200%):

`kscreen-doctor {{output.HDMI-2.scale.2}}`
