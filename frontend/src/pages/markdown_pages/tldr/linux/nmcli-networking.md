---
title: "Control nmcli Networking - Manage NetworkManager | Free DevTools"
name: nmcli-networking
path: /freedevtools/tldr/linux/nmcli-networking
canonical: "https://hexmos.com/freedevtools/tldr/linux/nmcli-networking/"
description: "Control nmcli networking with this tool. Enable, disable and check the connectivity of NetworkManager managed interfaces. Free online tool, no registration required."
category: linux
keywords:
  - nmcli networking control
  - NetworkManager status
  - Linux networking command
  - Command-line networking tool
  - Network interface manager
  - Disable network interface
  - Enable network interface
  - Check network connectivity
  - Manage network status
  - nmcli commands
features:
  - Show NetworkManager networking status
  - Enable or disable network interfaces
  - Display last known network connectivity state
  - Check current network connectivity state
  - Manage network interfaces from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nmcli networking

> Manage the networking status of NetworkManager.
> More information: <https://networkmanager.pages.freedesktop.org/NetworkManager/NetworkManager/nmcli.html#networking>.

- Show the networking status of NetworkManager:

`nmcli {{[n|networking]}}`

- Enable or disable networking and all interfaces managed by NetworkManager:

`nmcli {{[n|networking]}} {{on|off}}`

- Show the last known connectivity state:

`nmcli {{[n|networking]}} {{[c|connectivity]}}`

- Show the current connectivity state:

`nmcli {{[n|networking]}} {{[c|connectivity]}} {{[c|check]}}`
