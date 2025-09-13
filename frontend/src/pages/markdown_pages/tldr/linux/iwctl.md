---
title: "Control iwd with iwctl - Network Management | Free DevTools"
name: iwctl
path: /freedevtools/tldr/linux/iwctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/iwctl/"
description: "Control your network with iwctl, a command-line interface for iwd. Manage Wi-Fi connections, scan for networks, and troubleshoot connectivity issues. Free online tool, no registration required."
category: linux
keywords:
  - linux network management
  - iwctl command
  - iwd control
  - wireless network control
  - linux wifi commands
  - network configuration linux
  - command line network tool
  - linux system administration
  - iwctl tutorial
  - iwd troubleshooting
features:
  - Manage Wi-Fi connections
  - Scan for available networks
  - List connected stations
  - Connect to Wi-Fi networks
  - Troubleshoot network connectivity issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iwctl

> Control the `iwd` network supplicant.
> More information: <https://manned.org/iwctl>.

- Run `iwctl` in interactive mode:

`iwctl`

- Display Wi-Fi stations:

`iwctl station list`

- Look for networks with a station:

`iwctl station {{station}} scan`

- Display the networks found by a station:

`iwctl station {{station}} get-networks`

- Connect to a network with a station, if credentials are needed they will be asked:

`iwctl station {{station}} connect {{network_name}}`

- Display help:

`iwctl {{[-h|--help]}}`
