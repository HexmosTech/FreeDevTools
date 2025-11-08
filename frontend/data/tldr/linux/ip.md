---
title: "Control Network with ip Command - Manage Routing | Online Free DevTools by Hexmos"
name: ip
path: "/freedevtools/tldr/linux/ip/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip/"
description: "Manage network interfaces and routing tables with the ip command.  Configure IP addresses, routes, and network devices efficiently. Free online tool, no registration required."
category: linux
keywords:
  - network configuration command
  - ip address management
  - linux network tool
  - routing table manipulation
  - interface configuration
  - ip route command
  - network troubleshooting
  - ip link command
  - network administration
  - ip neighbour command
features:
  - List and configure network interfaces
  - Manage IP addresses and subnets
  - Manipulate routing tables
  - View ARP neighbor information
  - Bring network interfaces up or down
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip

> Show/manipulate routing, devices, policy routing and tunnels.
> Some subcommands such as `address` have their own usage documentation.
> More information: <https://www.manned.org/ip.8>.

- List interfaces with detailed info:

`ip {{[a|address]}}`

- List interfaces with brief network layer info:

`ip {{[-br|-brief]}} {{[a|address]}}`

- List interfaces with brief link layer info:

`ip {{[-br|-brief]}} {{[l|link]}}`

- Display the routing table:

`ip {{[r|route]}}`

- Show neighbors (ARP table):

`ip {{[n|neighbour]}}`

- Make an interface up/down:

`sudo ip {{[l|link]}} {{[s|set]}} {{ethX}} {{up|down}}`

- Add/Delete an IP address to an interface:

`sudo ip {{[a|address]}} {{add|delete}} {{ip}}/{{mask}} dev {{ethX}}`

- Add a default route:

`sudo ip {{[r|route]}} {{[a|add]}} default via {{ip}} dev {{ethX}}`
