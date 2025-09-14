---
title: "Waybar - Control Wayland Bar Customization | Free DevTools"
name: waybar
path: /freedevtools/tldr/common/waybar
canonical: "https://hexmos.com/freedevtools/tldr/common/waybar/"
description: "Control Wayland bar customization with Waybar. Configure and style your Sway and Wlroots-based compositor bar. Free online tool, no registration required."
category: common
keywords:
- wayland bar customization
- sway wayland bar
- wlroots wayland bar
- waybar configuration
- waybar styling
- wayland system tray
- linux wayland compositor
- wayland status bar
- custom wayland bar
- wayland desktop environment
features:
- Customize Wayland bar appearance
- Configure Wayland bar modules
- Set Wayland bar logging level
- Apply custom stylesheets to Wayland bar
- Launch Wayland bar with specific configuration
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# waybar

> Highly customizable Wayland bar for Sway and Wlroots based compositors.
> More information: <https://github.com/Alexays/Waybar>.

- Start `waybar` with the default configuration and stylesheet:

`waybar`

- Use a different configuration file:

`waybar {{[-c|--config]}} {{path/to/config.jsonc}}`

- Use a different stylesheet file:

`waybar {{[-s|--style]}} {{path/to/stylesheet.css}}`

- Set the logging level:

`waybar {{[-l|--log-level]}} {{trace|debug|info|warning|error|critical|off}}`
