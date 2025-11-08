---
title: "Route Command - Manage Network Routes | Online Free DevTools by Hexmos"
name: route
path: "/freedevtools/tldr/common/route/"
canonical: "https://hexmos.com/freedevtools/tldr/common/route/"
description: "Manage network routes efficiently with the Route command.  View, add, and delete routing table entries with ease. Free online tool, no registration required."
category: common
keywords:
  - network route management
  - route command linux
  - route command manipulation
  - network routing table
  - add network route
  - delete network route
  - view routing table
  - ip route commands
  - linux network configuration
  - command line networking
features:
  - Display the current routing table information.
  - Add new static routes to the network.
  - Delete existing routes from the network.
  - Modify existing route entries.
  - Manage network connectivity through route manipulation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# route

> Show and manipulate the route table.
> More information: <https://manned.org/route>.

- Display the information of route table:

`route -n`

- Add route rule:

`sudo route add -net {{ip_address}} netmask {{netmask_address}} gw {{gw_address}}`

- Delete route rule:

`sudo route del -net {{ip_address}} netmask {{netmask_address}} dev {{gw_address}}`
