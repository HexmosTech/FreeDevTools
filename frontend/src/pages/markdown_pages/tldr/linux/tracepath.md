---
title: "Trace Network Path - Discover MTU with tracepath | Free DevTools"
name: tracepath
path: /freedevtools/tldr/linux/tracepath
canonical: "https://hexmos.com/freedevtools/tldr/linux/tracepath/"
description: "Trace network paths efficiently with tracepath.  Discover MTU and troubleshoot network connectivity issues. Free online tool, no registration required."
category: linux
keywords:
  - network path tracer
  - tracepath command
  - MTU discovery
  - network troubleshooting
  - linux networking
  - network diagnostics
  - path visualization
  - hop count analysis
  - packet length control
  - ipv6 tracing
features:
  - Trace the route to a network host.
  - Determine the Maximum Transmission Unit (MTU) along the path.
  - Specify custom source port for firewall traversal.
  - Limit the maximum number of hops (TTL).
  - Control initial packet length for testing.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tracepath

> Trace the path to a network host discovering MTU along this path.
> More information: <https://manned.org/tracepath>.

- A preferred way to trace the path to a host:

`tracepath -p {{33434}} {{host}}`

- Specify the initial destination port, useful with non-standard firewall settings:

`tracepath -p {{destination_port}} {{host}}`

- Print both hostnames and numerical IP addresses:

`tracepath -b {{host}}`

- Specify a maximum TTL (number of hops):

`tracepath -m {{max_hops}} {{host}}`

- Specify the initial packet length (defaults to 65535 for IPv4 and 128000 for IPv6):

`tracepath -l {{packet_length}} {{host}}`

- Use only IPv6 addresses:

`tracepath -6 {{host}}`
