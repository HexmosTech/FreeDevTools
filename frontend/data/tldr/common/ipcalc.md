---
title: "Calculate IP Information - ipcalc Network Tool | Online Free DevTools by Hexmos"
name: ipcalc
path: "/freedevtools/tldr/common/ipcalc/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ipcalc/"
description: "Calculate IP information with ipcalc. Determine subnet, broadcast address, and host range from an IP address and netmask. Free online tool, no registration required."
category: common
keywords:
  - ipcalc subnet calculator
  - ip address calculator
  - network address calculator
  - subnet mask calculator
  - ip network calculator
  - linux ipcalc command
  - calculate subnet
  - ip address range
  - network information tool
  - ipcalc network tool
features:
  - Calculate subnet mask from CIDR notation
  - Determine broadcast address from IP and netmask
  - Calculate host range within a subnet
  - Split network into specified sized blocks
  - Suppress bitwise output for cleaner results
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
