---
title: "GPU Control - Manage Nvidia Optimus with envycontrol | Online Free DevTools by Hexmos"
name: envycontrol
path: /freedevtools/tldr/linux/envycontrol
canonical: "https://hexmos.com/freedevtools/tldr/linux/envycontrol/"
description: "Control Nvidia Optimus GPU switching with envycontrol.  Easily switch between integrated and discrete graphics modes for optimal performance. Free online tool, no registration required."
category: linux
keywords:
  - gpu switching command
  - nvidia optimus control
  - linux gpu manager
  - envycontrol command line
  - gpu mode selector
  - nvidia graphics management
  - optimus power management
  - linux command line tool
  - gpu performance control
  - discrete gpu switching
features:
  - Switch between integrated, discrete, and hybrid GPU modes.
  - Manually specify the display manager.
  - Query the current GPU mode.
  - Reset envycontrol settings to defaults.
  - Display help and version information.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# envycontrol

> GPU switching utility for Nvidia Optimus laptops.
> More information: <https://github.com/bayasdev/envycontrol>.

- Switch between different GPU modes:

`sudo envycontrol {{[-s|--switch]}} {{nvidia|integrated|hybrid}}`

- Specify your display manager manually:

`envycontrol --dm`

- Check current GPU mode:

`sudo envycontrol {{[-q|--query]}}`

- Reset settings:

`sudo envycontrol --reset`

- Display help:

`envycontrol {{[-h|--help]}}`

- Display version:

`envycontrol {{[-v|--version]}}`
