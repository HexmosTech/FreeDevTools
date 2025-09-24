---
title: "Manage Multicast Addresses with ip maddress | Online Free DevTools by Hexmos"
name: ip-maddress
path: /freedevtools/tldr/linux/ip-maddress
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-maddress/"
description: "Manage multicast addresses using the ip maddress command.  View subscribed programs, join and leave multicast groups, and manage network interfaces. Free online tool, no registration required."
category: linux
keywords:
  - ip maddress command
  - multicast address management
  - linux network configuration
  - network interface multicast
  - ip maddress linux
  - manage multicast groups
  - view multicast subscriptions
  - add multicast address
  - delete multicast address
  - ip command line
features:
  - List multicast addresses and their subscriptions.
  - Show device-specific multicast addresses.
  - Statically join multicast groups.
  - Statically leave multicast groups.
  - Display help information for the command.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip maddress

> Manage multicast addresses.
> More information: <https://manned.org/ip-maddress>.

- List multicast addresses and how many programs are subscribed to them:

`ip {{[m|maddress]}}`

- List device specific addresses:

`ip {{[m|maddress]}} {{[s|show]}} dev {{ethX}}`

- Join a multicast group statically:

`sudo ip {{[m|maddress]}} {{[a|add]}} {{33:33:00:00:00:02}} dev {{ethX}}`

- Leave a static multicast group:

`sudo ip {{[m|maddress]}} {{[d|delete]}} {{33:33:00:00:00:02}} dev {{ethX}}`

- Display help:

`ip {{[m|maddress]}} {{[h|help]}}`
