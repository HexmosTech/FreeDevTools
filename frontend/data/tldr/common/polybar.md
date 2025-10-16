---
title: "Control Polybar - Customize Status Bar | Online Free DevTools by Hexmos"
name: polybar
path: "/freedevtools/tldr/common/polybar/"
canonical: "https://hexmos.com/freedevtools/tldr/common/polybar/"
description: "Control your system status bar with Polybar. Customize appearance, display system information, and integrate with scripts. Free online tool, no registration required."
category: common
keywords:
- linux status bar
- polybar configuration
- system monitor bar
- configurable status bar
- linux customization
- status bar themes
- polybar modules
- desktop environment tweaks
- x11 status bar
- wayland status bar
features:
- Start Polybar with a specific configuration file
- Reload Polybar after configuration changes
- Customize bar appearance with modules
- Display system information like CPU usage
- Integrate scripts for dynamic content
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# polybar

> A fast and easy-to-use status bar.
> More information: <https://github.com/polybar/polybar/wiki>.

- Start Polybar (the bar name is optional if only one bar is defined in the config):

`polybar {{bar_name}}`

- Start Polybar with the specified config:

`polybar --config={{path/to/config.ini}} {{bar_name}}`

- Start Polybar and reload the bar when the configuration file is modified:

`polybar --reload {{bar_name}}`
