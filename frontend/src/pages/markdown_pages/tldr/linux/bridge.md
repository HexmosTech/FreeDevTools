---
title: "Bridge Network Control - Manage Network Bridges | Online Free DevTools by Hexmos"
name: bridge
path: /freedevtools/tldr/linux/bridge
canonical: "https://hexmos.com/freedevtools/tldr/linux/bridge/"
description: "Control and manage network bridges with the 'bridge' command. List interfaces, assign VLANs, monitor changes, and more. Free online tool, no registration required."
category: linux
keywords:
  - network bridge control
  - bridge interface management
  - vlan configuration bridge
  - linux bridge commands
  - network bridge monitoring
  - bridge vlan assignment
  - bridge port configuration
  - network bridge troubleshooting
  - manage network bridges
  - bridge command line tool
features:
  - List all bridges and their associated interfaces.
  - View port VLAN information for network bridges.
  - Assign VLANs to specific network bridge ports.
  - Remove VLAN assignments from network bridge ports.
  - Monitor network bridge interfaces for changes in real-time.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bridge

> Show and manipulate network bridge addresses and devices.
> More information: <https://manned.org/bridge>.

- List all bridges and their interfaces:

`bridge {{[l|link]}}`

- Show port vlan information:

`bridge {{[v|vlan]}}`

- Assign a VLAN to a port:

`sudo bridge {{[v|vlan]}} {{[a|add]}} dev {{lanX}} vid {{vlan_id}} pvid {{tagged|untagged}}`

- Remove a VLAN from a port:

`sudo bridge {{[v|vlan]}} {{[d|delete]}} dev {{lanX}} vid {{vlan_id}}`

- Watch for changes in bridge interfaces:

`bridge {{[mo|monitor]}}`

- Display help:

`bridge {{[h|help]}}`
