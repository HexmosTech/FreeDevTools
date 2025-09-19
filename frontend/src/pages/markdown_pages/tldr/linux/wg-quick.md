---
title: "Create WireGuard Tunnels - Quickly Setup VPN | Online Free DevTools by Hexmos"
name: wg-quick
path: /freedevtools/tldr/linux/wg-quick
canonical: "https://hexmos.com/freedevtools/tldr/linux/wg-quick/"
description: "Create VPN tunnels quickly with wg-quick. Easily configure WireGuard interfaces for secure network connections using command line. Free online tool, no registration required."
category: linux
keywords:
  - WireGuard tunnel setup
  - VPN configuration
  - wg-quick command
  - WireGuard interface management
  - Network security
  - Secure VPN connection
  - Command-line VPN
  - VPN tunnel creation
  - Linux VPN
  - Network interface configuration
features:
  - Establish WireGuard VPN tunnels using configuration files
  - Deactivate WireGuard VPN tunnels and remove interfaces
  - Configure network interfaces quickly via command line
  - Simplify WireGuard setup process
  - Automate WireGuard tunnel management
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wg-quick

> Quickly set up WireGuard tunnels based on config files.
> More information: <https://manned.org/wg-quick>.

- Set up a VPN tunnel:

`wg-quick up {{interface_name}}`

- Delete a VPN tunnel:

`wg-quick down {{interface_name}}`
