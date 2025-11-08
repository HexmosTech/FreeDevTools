---
title: "DHCP Client - Control IP Addresses | Online Free DevTools by Hexmos"
name: dhclient
path: "/freedevtools/tldr/common/dhclient/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dhclient/"
description: "Control IP address assignments with DHCP Client. Obtain or release IP configurations using the command line interface. Free online tool, no registration required."
category: common
keywords:
- DHCP Client configuration
- IP address management
- Network configuration linux
- dhclient command options
- DHCP lease control
- Network interface configuration
- Linux network configuration
- Command line IP address
- DHCP network settings
- IP address release
features:
- Obtain IP addresses for specified network interfaces.
- Release IP addresses for specified network interfaces.
- Configure DHCP client settings.
- Renew existing IP address leases.
- Manage network connections using DHCP.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dhclient

> DHCP client.
> More information: <https://manned.org/dhclient>.

- Get an IP address for the `eth0` interface:

`sudo dhclient {{eth0}}`

- Release an IP address for the `eth0` interface:

`sudo dhclient -r {{eth0}}`
