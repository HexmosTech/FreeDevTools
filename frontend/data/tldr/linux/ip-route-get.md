---
title: "Get IP Route - Find Network Routes on Linux | Online Free DevTools by Hexmos"
name: ip-route-get
path: "/freedevtools/tldr/linux/ip-route-get/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-route-get/"
description: "Find IP routes with the ip route get command on Linux. Retrieve network route information and troubleshoot network connectivity issues. Free online tool, no registration required."
category: linux
keywords:
- linux ip route
- ip route get command
- network route lookup
- linux network routing
- find network path linux
- destination route linux
- ip routing table
- linux route diagnostics
- source routing linux
- linux network troubleshooting
features:
- Retrieve route information for a specific destination IP address
- Determine the output interface for a given network route
- Identify the source address used for a specific route
- Display the Virtual Routing and Forwarding (VRF) instance used by a route
- Filter routes based on Type of Service (ToS) values
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip route get

> Get a single route to a destination and print its contents exactly as the kernel sees it.
> More information: <https://manned.org/ip-route>.

- Print route to a destination:

`ip {{[r|route]}} {{[g|get]}} {{1.1.1.1}}`

- Print route to a destination from a specific source address:

`ip {{[r|route]}} {{[g|get]}} {{destination}} from {{source}}`

- Print route to a destination for packets arriving on a specific interface:

`ip {{[r|route]}} {{[g|get]}} {{destination}} iif {{ethX}}`

- Print route to a destination, forcing output through a specific interface:

`ip {{[r|route]}} {{[g|get]}} {{destination}} oif {{ethX}}`

- Print route to a destination with a specified Type of Service (ToS):

`ip {{[r|route]}} {{[g|get]}} {{destination}} tos {{0x10}}`

- Print route to a destination using a specific VRF (Virtual Routing and Forwarding) instance:

`ip {{[r|route]}} {{[g|get]}} {{destination}} vrf {{myvrf}}`
