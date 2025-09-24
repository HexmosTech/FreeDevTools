---
title: "Control Connections - Conntrack Linux Tool | Online Free DevTools by Hexmos"
name: conntrack
path: /freedevtools/tldr/linux/conntrack
canonical: "https://hexmos.com/freedevtools/tldr/linux/conntrack/"
description: "Control Linux connections with Conntrack, a powerful network debugging utility for inspecting and managing network flows. Free online tool, no registration required."
category: linux
keywords:
  - linux connection tracking
  - conntrack network flows
  - network connection monitor
  - conntrack delete connections
  - conntrack list connections
  - linux netfilter conntrack
  - conntrack event logging
  - conntrack real-time events
  - linux network debugging
  - conntrack ip address filter
features:
  - List currently tracked network connections
  - Display real-time event log of connection changes
  - Filter connection events by IP address
  - Delete connection flows by source IP
  - Monitor network traffic in real time
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# conntrack

> Interact with the Netfilter connection tracking system.
> Search, list, inspect, modify, and delete connection flows.
> More information: <https://manned.org/conntrack>.

- List all currently tracked connections:

`conntrack {{[-L|--dump]}}`

- Display a real-time event log of connection changes:

`conntrack {{[-E|--event]}}`

- Display a real-time event log of connection changes and associated timestamps:

`conntrack {{[-E|--event]}} {{[-o|--output]}} timestamp`

- Display a real-time event log of connection changes for a specific IP address:

`conntrack {{[-E|--event]}} {{[-s|--orig-src]}} {{ip_address}}`

- Delete all flows for a specific source IP address:

`conntrack {{[-D|--delete]}} {{[-s|--orig-src]}} {{ip_address}}`
