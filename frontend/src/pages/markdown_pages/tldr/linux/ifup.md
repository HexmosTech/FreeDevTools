---
title: "Ifup Enable - Control Network Interfaces | Online Free DevTools by Hexmos"
name: ifup
path: "/freedevtools/tldr/linux/ifup"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ifup/"
description: "Enable network interfaces with Ifup. Configure and manage network connectivity on Linux systems easily. Free online tool, no registration required."
category: linux
keywords:
- linux network interface enable
- network configuration ifup
- linux ifup command
- enable eth0 interface linux
- linux networking tools
- network interface management linux
- ifup configuration options
- auto interface configuration linux
- command line network tool linux
- linux interface activation
features:
- Enable specified network interfaces
- Activate interfaces defined with 'auto'
- Configure network interfaces using the command line
- Bring up network connections on Linux systems
- Manage network connectivity from the terminal
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ifup

> Enable network interfaces.
> More information: <https://manned.org/ifup.8>.

- Enable interface eth0:

`ifup {{eth0}}`

- Enable all the interfaces defined with "auto" in `/etc/network/interfaces`:

`ifup {{[-a|--all]}}`
