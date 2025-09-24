---
title: "LXC Network - Manage LXD Container Networks | Online Free DevTools by Hexmos"
name: lxc-network
path: /freedevtools/tldr/linux/lxc-network
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc-network/"
description: "Manage LXD container networks efficiently with LXC Network. Control network configurations, attach containers, and create new networks. Free online tool, no registration required."
category: linux
keywords:
- lxc network configuration
- linux container networking
- lxd network manager
- lxc network command
- container network bridge
- lxd network attach
- lxc network create
- linux network management
- lxd network ipv4
- ubuntu lxc network
features:
- List available LXD networks
- Show detailed network configuration
- Attach running instances to networks
- Create managed networks effortlessly
- Configure network bridge interfaces
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lxc network

> Manage networks for LXD containers.
> More information: <https://documentation.ubuntu.com/lxd/latest/reference/manpages/lxc/network/>.

- List all available networks:

`lxc network list`

- Show the configuration of a specific network:

`lxc network show {{network_name}}`

- Add a running instance to a specific network:

`lxc network attach {{network_name}} {{container_name}}`

- Create a new managed network:

`lxc network create {{network_name}}`

- Set a bridge interface of a specific network:

`lxc network set {{network_name}} bridge.external_interfaces {{eth0}}`

- Disable NAT for a specific network:

`lxc network set {{network_name}} ipv{{4}}.nat false`
