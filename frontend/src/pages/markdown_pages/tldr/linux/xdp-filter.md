---
title: "XDP Filter - Control Network Traffic | Online Free DevTools by Hexmos"
name: xdp-filter
path: /freedevtools/tldr/linux/xdp-filter
canonical: "https://hexmos.com/freedevtools/tldr/linux/xdp-filter/"
description: "Control network traffic with XDP Filter, an eBPF-based packet filtering tool. Manage XDP filters to allow, deny, and monitor network packets. Free online tool, no registration required."
category: linux
keywords:
  - eBPF packet filter
  - XDP packet filtering
  - network traffic control
  - XDP filter rules
  - Linux network filter
  - XDP tools
  - eBPF firewall
  - network policy enforcement
  - packet inspection
  - network security
features:
  - Load and unload XDP filters on network interfaces
  - Deny traffic based on destination port
  - Block traffic based on source IP address
  - Block traffic based on source MAC address
  - Poll and display network packet statistics
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xdp-filter

> Load and manage an eBPF XDP packet filter.
> Part of the xdp-tools collection.
> More information: <https://github.com/xdp-project/xdp-tools/tree/main/xdp-filter#running-xdp-filter>.

- Load the filter on an interface in skb (generic) mode with default allow policy:

`sudo xdp-filter load {{[-p|--policy]}} allow {{[-m|--mode]}} skb {{network_interface}}`

- Unload the filter from an interface:

`sudo xdp-filter unload {{network_interface}}`

- Deny traffic to a specific destination port:

`sudo xdp-filter port {{destination_port}}`

- Deny traffic from a specific source IP address:

`sudo xdp-filter ip {{[-m|--mode]}} src {{source_ip}}`

- Deny traffic from a specific source MAC address:

`sudo xdp-filter ether {{[-m|--mode]}} src {{mac_address}}`

- Poll packets and show statistics every 10000 milliseconds:

`sudo xdp-filter poll {{[-i|--interval]}} 10000`
