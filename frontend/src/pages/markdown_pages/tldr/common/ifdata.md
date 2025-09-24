---
title: "Ifdata - Display Interface Data | Online Free DevTools by Hexmos"
name: ifdata
path: /freedevtools/tldr/common/ifdata
canonical: "https://hexmos.com/freedevtools/tldr/common/ifdata/"
description: "Display interface data with Ifdata. Retrieve network configuration details and check interface existence quickly. Free online tool, no registration required."
category: common
keywords:
- interface data
- display interface data
- network interface information
- linux ifdata
- macos ifdata
- network configuration retrieval
- interface existence check
- network address lookup
- broadcast address lookup
- mtu lookup
features:
- Display the complete configuration of a network interface.
- Check the existence of a specific network interface.
- Display the IPv4 address and netmask of a network interface.
- Retrieve the network address, broadcast address, and MTU.
- Provide help information for Ifdata usage.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ifdata

> Display information about a network interface.
> More information: <https://manned.org/ifdata>.

- Display the whole configuration of the specified interface:

`ifdata -p {{eth0}}`

- Indicate the [e]xistence of the specified interface via the exit code:

`ifdata -e {{eth0}}`

- Display the IPv4 [a]dress and the [n]etmask of the specified interface:

`ifdata -pa -pn {{eth0}}`

- Display the [N]etwork adress, the [b]roadcast adress, and the MTU of the specified interface:

`ifdata -pN -pb -pm {{eth0}}`

- Display help:

`ifdata`
