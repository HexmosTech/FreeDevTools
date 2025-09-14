---
title: "Picom Compositor - Manage Xorg Windowing | Free DevTools"
name: picom
path: /freedevtools/tldr/linux/picom
canonical: "https://hexmos.com/freedevtools/tldr/linux/picom/"
description: "Manage Xorg windowing with Picom compositor.  Control window effects and enhance your desktop experience with this lightweight and efficient tool. Free online tool, no registration required."
category: linux
keywords:
  - xorg compositor
  - linux compositor
  - window manager
  - picom configuration
  - desktop effects
  - x11 compositor
  - lightweight compositor
  - picom daemon
  - custom picom config
  - xorg window management
features:
  - Provides window compositing for Xorg.
  - Enables custom configuration via a config file.
  - Offers various window effects and animations.
  - Runs as a background process for seamless integration.
  - Supports command-line arguments for flexible control.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# picom

> Standalone compositor for Xorg.
> More information: <https://manned.org/picom>.

- Enable `picom` during a session:

`picom &`

- Start `picom` as a background process:

`picom {{[-b|--daemon]}}`

- Use a custom configuration file:

`picom --config {{path/to/config_file}}`
