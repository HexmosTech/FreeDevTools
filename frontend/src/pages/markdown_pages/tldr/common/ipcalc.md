---
title: "IP Subnet Calculator - Calculate IP Information with ipcalc | Online Free DevTools by Hexmos"
name: ipcalc
path: /freedevtools/tldr/common/ipcalc
canonical: "https://hexmos.com/freedevtools/tldr/common/ipcalc/"
description: "Calculate IP subnet information with the ipcalc command. Determine subnet masks, broadcast addresses, and host ranges from IP addresses and netmasks. Free online tool, no registration required."
category: common
keywords:
  - ipcalc subnet calculator
  - ip address subnet calculator
  - network subnet mask calculator
  - ip network range calculator
  - calculate ip subnet
  - linux ipcalc command
  - ip address calculation
  - subnet mask calculation
  - ipcalc network address
  - CIDR subnet calculator
features:
  - Calculate subnet masks from IP addresses and netmasks.
  - Determine broadcast addresses from IP addresses and netmasks.
  - Calculate host IP address ranges within a subnet.
  - Split networks into custom-sized blocks using CIDR notation.
  - Suppress bitwise output for cleaner results.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipcalc

> Calculate IP information (subnet, broadcast, host range) from an IP address and netmask.
> More information: <https://manned.org/ipcalc>.

- Display network info for an IP address:

`ipcalc {{192.168.0.1}}`

- Display network info using CIDR notation:

`ipcalc {{192.168.0.1}}/{{24}}`

- Display network info using a dotted decimal netmask:

`ipcalc {{192.168.0.1}} {{255.255.255.0}}`

- Suppress bitwise output:

`ipcalc {{[-b|--nobinary]}} {{192.168.0.1}}`

- Split a network into specified sized blocks:

`ipcalc {{[-s|--split]}} {{size1 size2 size3 ...}} {{192.168.0.1}}`

- Display version:

`ipcalc {{[-v|--version]}}`
