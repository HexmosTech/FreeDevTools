---
title: "Conntrack Linux Command - Control Network Connections | Online Free DevTools by Hexmos"
name: conntrack
path: /freedevtools/tldr/linux/conntrack
canonical: "https://hexmos.com/freedevtools/tldr/linux/conntrack/"
description: "Control Linux network connections with the Conntrack command.  Inspect, manage, and troubleshoot network flows efficiently. Free online tool, no registration required."
category: linux
keywords:
- conntrack linux command
- linux network connection monitoring
- conntrack connection tracking
- conntrack connection management
- linux conntrack troubleshooting
- netfilter conntrack commands
- conntrack real-time events
- conntrack ip filtering
- conntrack delete connections
- linux conntrack tutorial
features:
- List and inspect active network connections.
- Monitor real-time connection events with timestamps.
- Filter connection events by source or destination IP address.
- Delete specific network connections by IP address.
- Troubleshoot network connectivity issues using detailed connection information.
ogImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/tool-banners/json-utilities-banner.png"
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
