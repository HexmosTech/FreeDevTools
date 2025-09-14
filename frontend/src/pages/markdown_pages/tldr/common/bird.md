---
title: "Control BIRD Routing - Manage Network Routes | Free DevTools"
name: bird
path: /freedevtools/tldr/common/bird
canonical: "https://hexmos.com/freedevtools/tldr/common/bird/"
description: "Control network routing with BIRD Routing Daemon. Manage BGP, OSPF, and Babel protocols. Free online tool, no registration required."
category: common
keywords:
- BIRD routing daemon
- network routing management
- BGP configuration
- OSPF configuration
- Babel protocol setup
- routing protocol control
- linux routing configuration
- command line routing
- bird.conf configuration
- network policy routing
features:
- Start BIRD with a specified configuration file
- Run BIRD as a specific user
- Run BIRD as a specific group
- Control routing protocols like BGP, OSPF, and Babel
- Manage network routes using command-line interface
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# bird

> BIRD Internet Routing Daemon.
> Routing daemon with support for BGP, OSPF, Babel and others.
> More information: <https://bird.network.cz/?get_doc&v=30&f=bird-1.html#ss1.3>.

- Start Bird with a specific configuration file:

`bird -c {{path/to/bird.conf}}`

- Start Bird as a specific user and group:

`bird -u {{username}} -g {{group}}`
