---
title: "IP Address - Control Network Addresses | Online Free DevTools by Hexmos"
name: ip-address
path: /freedevtools/tldr/linux/ip-address
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-address/"
description: "Control IP Addresses with ip command. Manage network interfaces, assign IP addresses, and troubleshoot network connectivity with this free Linux tool. Free online tool, no registration required."
category: linux
keywords:
- linux ip address
- ip address command
- network interface configuration
- ip address management
- linux network tools
- ip address add
- ip address delete
- ip address show
- linux networking commands
- network troubleshooting linux
features:
- List network interfaces and their addresses
- Add or remove IP addresses from interfaces
- Filter network interfaces by status
- Flush IP addresses in a specific scope
- Display detailed interface information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip address

> IP Address management subcommand.
> More information: <https://manned.org/ip-address>.

- List network interfaces and their associated IP addresses:

`ip {{[a|address]}}`

- Filter to show only active network interfaces:

`ip {{[a|address]}} {{[s|show]}} up`

- Display information about a specific network interface:

`ip {{[a|address]}} {{[s|show]}} {{ethX}}`

- Add an IP address to a network interface:

`sudo ip {{[a|address]}} {{[a|add]}} {{ip_address}} dev {{ethX}}`

- Remove an IP address from a network interface:

`sudo ip {{[a|address]}} {{[d|delete]}} {{ip_address}} dev {{ethX}}`

- Delete all IP addresses in a given scope from a network interface:

`sudo ip {{[a|address]}} {{[f|flush]}} {{ethX}} scope {{global|host|link}}`
