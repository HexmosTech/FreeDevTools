---
title: "Nmtui - Control Network Connections | Online Free DevTools by Hexmos"
name: nmtui
path: /freedevtools/tldr/linux/nmtui
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmtui/"
description: "Control network connections with Nmtui, the NetworkManager text user interface. Manage, activate, and deactivate network connections easily. Free online tool, no registration required."
category: linux
keywords:
- linux network manager
- network connection manager
- text user interface network
- terminal network configuration
- nmcli alternative
- network interface controller
- linux networking commands
- command line network tool
- network settings editor
- system hostname tool
features:
- Open the NetworkManager text user interface
- List and manage available network connections
- Activate or deactivate specific network connections
- Edit, add, or delete network profiles
- Set the system hostname via the command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nmtui

> Text user interface for controlling NetworkManager.
> Use `<ArrowKeys>` to navigate, `<Enter>` to select an option.
> See also: `nmcli`.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmtui.html>.

- Open the user interface:

`nmtui`

- List available connections, with the option to activate or deactivate them:

`nmtui connect`

- Connect to a given network:

`nmtui connect {{name|uuid|device|SSID}}`

- Edit/Add/Delete a given network:

`nmtui edit {{name|id}}`

- Set the system hostname:

`nmtui hostname`
