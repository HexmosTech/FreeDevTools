---
title: "Network Control - Manage Network Links | Online Free DevTools by Hexmos"
name: networkctl
path: "/freedevtools/tldr/linux/networkctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/networkctl/"
description: "Network control with networkctl. Manage network links and configurations using systemd-networkd on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux network control
- networkctl command
- systemd-networkd manager
- linux network configuration
- network link status
- network interface management
- dynamic IP address renewal
- network configuration reload
- network device control
- linux command line network
features:
- List network link status information
- Manage network device states (up/down)
- Renew dynamic IP address configurations
- Reload network configuration files
- Reconfigure network interfaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# networkctl

> Query the status of network links.
> Manage the network configuration using `systemd-networkd`.
> More information: <https://www.freedesktop.org/software/systemd/man/networkctl.html>.

- List existing links with their status:

`networkctl list`

- Show an overall network status:

`networkctl status`

- Bring network devices up:

`networkctl up {{interface1 interface2 ...}}`

- Bring network devices down:

`networkctl down {{interface1 interface2 ...}}`

- Renew dynamic configurations (e.g. IP addresses received from a DHCP server):

`networkctl renew {{interface1 interface2 ...}}`

- Reload configuration files (.netdev and .network):

`networkctl reload`

- Reconfigure network interfaces (if you edited the config, you need to call `networkctl reload` first):

`networkctl reconfigure {{interface1 interface2 ...}}`
