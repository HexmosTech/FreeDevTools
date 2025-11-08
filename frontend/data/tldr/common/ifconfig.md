---
title: "Ifconfig - Control Network Interfaces | Online Free DevTools by Hexmos"
name: ifconfig
path: "/freedevtools/tldr/common/ifconfig/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ifconfig/"
description: "Control network interfaces with Ifconfig. Configure IP addresses and manage network settings for different interfaces. Free online tool, no registration required."
category: common
keywords:
- network interface configuration
- ifconfig linux
- ifconfig command
- ip address configuration
- interface management
- network settings linux
- network interface control
- ifconfig macos
- linux network tools
- network troubleshooting
features:
- Configure network interface IP addresses
- Enable or disable network interfaces
- Display details of all network interfaces
- Manage network settings from the command line
- Troubleshoot network connectivity issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ifconfig

> Network Interface Configurator.
> More information: <https://net-tools.sourceforge.io/man/ifconfig.8.html>.

- View network settings of an interface:

`ifconfig {{interface_name}}`

- Display details of all interfaces, including disabled interfaces:

`ifconfig -a`

- Disable an interface:

`ifconfig {{interface_name}} down`

- Enable an interface:

`ifconfig {{interface_name}} up`

- Assign an IP address to an interface:

`ifconfig {{interface_name}} {{ip_address}}`
