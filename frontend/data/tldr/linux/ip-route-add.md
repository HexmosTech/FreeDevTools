---
title: "IP Route Add - Control Network Routing on Linux | Online Free DevTools by Hexmos"
name: ip-route-add
path: "/freedevtools/tldr/linux/ip-route-add/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-route-add/"
description: "Control network routing on Linux with IP Route Add. Add, delete, and modify network routes using the command line. Free online tool, no registration required."
category: linux
keywords:
- linux ip route add
- linux network route add
- ip route add command
- add default gateway linux
- add static route linux
- linux routing table
- linux network configuration
- ip routing configuration
- command line network tools
- linux route management
features:
- Add a new default network route
- Add a static route to a specific IP
- Configure routes to specific routing tables
- Manage network routes via command line
- Define gateway for default network traffic
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip route add

> Add a new networking route.
> More information: <https://manned.org/ip-route>.

- Add a default route using gateway forwarding:

`sudo ip {{[r|route]}} {{[a|add]}} default via {{gateway_ip}}`

- Add a default route using `ethX`:

`sudo ip {{[r|route]}} {{[a|add]}} default dev {{ethX}}`

- Add a static route:

`sudo ip {{[r|route]}} {{[a|add]}} {{destination_ip}} via {{gateway_ip}} dev {{ethX}}`

- Add a route to a specific routing table:

`sudo ip {{[r|route]}} {{[a|add]}} {{destination_ip}} dev {{ethX}} {{[t|table]}} {{ip}}`
