---
title: "CIDR Management - Control Network Prefixes | Free DevTools"
name: cidr
path: /freedevtools/tldr/common/cidr
canonical: "https://hexmos.com/freedevtools/tldr/common/cidr/"
description: "Control IPv4/IPv6 CIDR network prefixes with CIDR Management. Simplify counting, overlap checking, and subdivision tasks. Free online tool, no registration required."
category: common
keywords:
- ipv4/ipv6 cidr management
- network prefix calculator
- cidr range overlap checker
- cidr address count
- subnet divider
- cidr explain linux
- cidr contains command
- cidr divide example
- cidr subnetting tool
- network address management
features:
- Explain CIDR ranges for easy understanding.
- Check if an address belongs to a CIDR range.
- Count the total number of addresses within a CIDR range.
- Determine if two CIDR ranges have overlapping address spaces.
- Divide a CIDR range into a specified number of smaller networks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cidr

> Simplifies IPv4/IPv6 CIDR network prefix management with counting, overlap checking, explanation, and subdivision.
> More information: <https://github.com/bschaatsbergen/cidr>.

- Explain a CIDR range:

`cidr explain {{10.0.0.0/16}}`

- Check whether an address belongs to a CIDR range:

`cidr contains {{10.0.0.0/16}} {{10.0.14.5}}`

- Get a count of all addresses in a CIDR range:

`cidr count {{10.0.0.0/16}}`

- Check whether two CIDR ranges overlap:

`cidr overlaps {{10.0.0.0/16}} {{10.0.14.0/22}}`

- Divide a CIDR range into a specific number of networks:

`cidr divide {{10.0.0.0/16}} {{9}}`
