---
title: "Brctl - Control Ethernet Bridges | Online Free DevTools by Hexmos"
name: brctl
path: /freedevtools/tldr/linux/brctl
canonical: "https://hexmos.com/freedevtools/tldr/linux/brctl/"
description: "Control network interfaces with Brctl, the Ethernet bridge administration tool. Easily manage bridge connections, add/remove interfaces. Free online tool, no registration required."
category: linux
keywords:
- Ethernet bridge control
- Linux network bridge
- Brctl command
- Network interface management
- Bridge interface creation
- Bridge interface deletion
- Interface to bridge assignment
- Network interface removal
- Linux bridging utilities
- Network bridge administration
features:
- Show existing Ethernet bridges
- Create new Ethernet bridge interfaces
- Delete existing Ethernet bridge interfaces
- Add interfaces to existing bridges
- Remove interfaces from existing bridges
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# brctl

> Ethernet bridge administration.
> More information: <https://manned.org/brctl>.

- Show a list with information about currently existing Ethernet bridges:

`sudo brctl show`

- Create a new Ethernet bridge interface:

`sudo brctl add {{bridge_name}}`

- Delete an existing Ethernet bridge interface:

`sudo brctl del {{bridge_name}}`

- Add an interface to an existing bridge:

`sudo brctl addif {{bridge_name}} {{interface_name}}`

- Remove an interface from an existing bridge:

`sudo brctl delif {{bridge_name}} {{interface_name}}`
