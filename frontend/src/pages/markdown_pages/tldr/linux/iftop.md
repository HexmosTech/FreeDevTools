---
title: "Control Bandwidth Usage - iftop | Online Free DevTools by Hexmos"
name: iftop
path: /freedevtools/tldr/linux/iftop
canonical: "https://hexmos.com/freedevtools/tldr/linux/iftop/"
description: "Control bandwidth usage with iftop, a network traffic monitor. Analyze interface activity, identify top bandwidth consumers, and optimize network performance. Free online tool, no registration required."
category: linux
keywords:
  - bandwidth monitor
  - network traffic analyzer
  - iftop network usage
  - interface bandwidth usage
  - linux bandwidth monitor
  - command line bandwidth tool
  - real-time network monitor
  - network bandwidth analyzer
  - network performance tool
  - iftop tutorial
features:
  - Monitor bandwidth usage by host in real-time
  - Display bandwidth usage for a specific network interface
  - Show port information for network connections
  - Suppress the display of traffic bar graphs
  - Disable hostname lookups for faster analysis
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# iftop

> Show bandwidth usage on an interface by host.
> More information: <https://manned.org/iftop>.

- Show the bandwidth usage:

`sudo iftop`

- Show the bandwidth usage of a given interface:

`sudo iftop -i {{interface}}`

- Show the bandwidth usage with port information:

`sudo iftop -P`

- Do not show bar graphs of traffic:

`sudo iftop -b`

- Do not look up hostnames:

`sudo iftop -n`

- Display help:

`<?>`
