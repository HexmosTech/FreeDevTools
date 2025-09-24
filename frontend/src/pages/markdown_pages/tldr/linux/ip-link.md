---
title: "IP Link - Manage Network Interfaces | Online Free DevTools by Hexmos"
name: ip-link
path: /freedevtools/tldr/linux/ip-link
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-link/"
description: "Manage network interfaces with IP Link. Configure interface states, MAC addresses, and MTU settings with ease. Free online tool, no registration required."
category: linux
keywords:
- network interface management
- linux network configuration
- ip link command
- interface configuration
- mac address changer
- mtu size adjustment
- network interface controller
- linux networking tools
- ip link linux
- network interface alias
features:
- Configure network interface status (up/down)
- Modify MAC addresses of network interfaces
- Adjust MTU size for jumbo frames support
- Assign aliases to network interfaces
- Control promiscuous mode on network interfaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip link

> Manage network interfaces.
> More information: <https://manned.org/ip-link>.

- Show information about all network interfaces:

`ip {{[l|link]}}`

- Show information about a specific network interface:

`ip {{[l|link]}} {{[sh|show]}} {{ethX}}`

- Bring a network interface up or down:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} {{up|down}}`

- Give a meaningful name to a network interface:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} {{[al|alias]}} "{{LAN Interface}}"`

- Change the MAC address of a network interface:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} {{[a|address]}} {{ff:ff:ff:ff:ff:ff}}`

- Change the MTU size for a network interface to use jumbo frames:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} mtu {{9000}}`

- Set the promisc mode status of a device:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} promisc {{on|off}}`
