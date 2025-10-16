---
title: "IP Route - List Routing Tables | Online Free DevTools by Hexmos"
name: ip-route-list
path: "/freedevtools/tldr/linux/ip-route-list/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-route-list/"
description: "List IP routes with this command line tool. Inspect routing tables and network paths quickly. Free online tool, no registration required."
category: linux
keywords:
  - ip route list
  - network routing table
  - command line route
  - linux route
  - route lookup
  - route cache
  - ip route table
  - network diagnostics
  - routing troubleshooting
  - ip address routing
features:
  - Display the main routing table
  - List routes from a specific device
  - Filter routes by scope
  - Display the routing cache
  - Show IPv4 or IPv6 routes only
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ip route list

> Display subcommand for IP Routing table management.
> More information: <https://manned.org/ip-route>.

- Display the `main` routing table:

`ip {{[r|route]}} {{[l|list]}}`

- Display the main routing table (same as first example):

`ip {{[r|route]}} {{[l|list]}} {{[t|table]}} {{main|254}}`

- Display the local routing table:

`ip {{[r|route]}} {{[l|list]}} {{[t|table]}} {{local|255}}`

- Display all routing tables:

`ip {{[r|route]}} {{[l|list]}} {{[t|table]}} {{all|unspec|0}}`

- List routes from a given device only:

`ip {{[r|route]}} {{[l|list]}} dev {{ethX}}`

- List routes within a given scope:

`ip {{[r|route]}} {{[l|list]}} {{[s|scope]}} link`

- Display the routing cache:

`ip {{[r|route]}} {{[l|list]}} {{[c|cache]}}`

- Display only IPv6 or IPv4 routes:

`ip {{-6|-4}} {{[r|route]}}`
