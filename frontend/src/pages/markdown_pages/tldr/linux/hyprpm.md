---
title: "Hyprpm - Control Hyprland Plugins | Free DevTools"
name: hyprpm
path: /freedevtools/tldr/linux/hyprpm
canonical: "https://hexmos.com/freedevtools/tldr/linux/hyprpm/"
description: "Control Hyprland plugins effortlessly with Hyprpm. Manage, enable, disable, and update your Hyprland compositor plugins. Free online tool, no registration required."
category: linux
keywords:
- hyprland plugin manager
- hyprland plugin control
- hyprland plugin management
- linux hyprpm
- hyprland compositor plugin
- hyprpm command line
- hyprpm plugins
- hyprland configuration
- wayland plugin manager
- hyprland plugin update
features:
- Add and remove Hyprland plugins
- Enable and disable Hyprland plugins
- Update all installed Hyprland plugins
- List all installed Hyprland plugins
- Force operations on Hyprland plugins
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hyprpm

> Control plugins for the Hyprland Wayland compositor.
> More information: <https://wiki.hyprland.org/Plugins/Using-Plugins/#hyprpm>.

- Add a plugin:

`hyprpm add {{git_url}}`

- Remove a plugin:

`hyprpm remove {{git_url|plugin_name}}`

- Enable a plugin:

`hyprpm enable {{plugin_name}}`

- Disable a plugin:

`hyprpm disable {{plugin_name}}`

- Update and check all plugins:

`hyprpm update`

- Force an operation:

`hyprpm {{[-f|--force]}} {{operation}}`

- List all installed plugins:

`hyprpm list`
