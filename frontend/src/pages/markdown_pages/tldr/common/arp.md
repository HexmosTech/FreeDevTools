---
title: "ARP Cache - Control Network Interfaces | Online Free DevTools by Hexmos"
name: arp
path: /freedevtools/tldr/common/arp
canonical: "https://hexmos.com/freedevtools/tldr/common/arp/"
description: "Control network interfaces with ARP Cache Manager. Show, delete, and set entries in the ARP table for network troubleshooting. Free online tool, no registration required."
category: common
keywords:
- ARP Cache Manager
- Network Interface Control
- ARP Table Management
- Linux ARP
- MacOS ARP
- Show ARP Cache
- Delete ARP Entry
- Set ARP Entry
- Network Troubleshooting
- Command Line Network
features:
- Display the current ARP table
- Delete a specified ARP entry
- Create a new static ARP entry
- Manipulate network interface mappings
- Resolve IP addresses to MAC addresses
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# arp

> Show and manipulate your system's ARP cache.
> More information: <https://manned.org/arp.8>.

- Show the current ARP table:

`arp -a`

- [d]elete a specific entry:

`arp -d {{address}}`

- [s]et up a new entry in the ARP table:

`arp -s {{address}} {{mac_address}}`
