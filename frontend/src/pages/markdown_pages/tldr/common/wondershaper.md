---
title: "Wondershaper - Control Bandwidth | Online Free DevTools by Hexmos"
name: wondershaper
path: /freedevtools/tldr/common/wondershaper
canonical: "https://hexmos.com/freedevtools/tldr/common/wondershaper/"
description: "Control network bandwidth with Wondershaper. Limit upload and download speeds on network adapters. Free online tool, no registration required."
category: common
keywords:
- wondershaper bandwidth control
- limit network speed
- network shaper linux
- traffic shaping tool
- wondershaper adapter configuration
- network bandwidth limiter
- wondershaper download limit
- wondershaper upload limit
- linux network management
- wondershaper status check
features:
- Limit download bandwidth on network adapters.
- Limit upload bandwidth on network adapters.
- Display network adapter status.
- Clear bandwidth limits from adapters.
- Configure bandwidth limits for specific network adapters.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wondershaper

> Allows the user to limit the bandwidth of network adapters.
> More information: <https://github.com/magnific0/wondershaper#usage>.

- Show the current [s]tatus of a specific [a]dapter:

`wondershaper -s -a {{adapter_name}}`

- Clear limits from a specific [a]dapter:

`wondershaper -c -a {{adapter_name}}`

- Set a specific maximum [d]ownload rate (in Kbps):

`wondershaper -a {{adapter_name}} -d {{1024}}`

- Set a specific maximum [u]pload rate (in Kbps):

`wondershaper -a {{adapter_name}} -u {{512}}`

- Set a specific maximum [d]ownload rate and [u]pload rate (in Kpbs):

`wondershaper -a {{adapter_name}} -d {{1024}} -u {{512}}`

- Display [h]elp:

`wondershaper -h`
