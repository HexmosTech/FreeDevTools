---
title: "Create Distributed Compiler - Distccd Server | Free DevTools"
name: distccd
path: /freedevtools/tldr/common/distccd
canonical: "https://hexmos.com/freedevtools/tldr/common/distccd/"
description: "Create distributed compiler environments with Distccd server daemon. Accelerate compilation times using network resources. Free online tool, no registration required."
category: common
keywords:
- distributed compiler
- distccd server
- network compilation
- c++ compiler distribution
- linux distcc
- distributed build system
- parallel compilation
- cross-compilation server
- remote compiler daemon
- compile farm
features:
- Start a distccd server daemon in the background
- Allow connections from specific network ranges
- Control the number of parallel compilation jobs
- Lower the server priority to reduce system impact
- Register the distccd server using Zeroconf
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# distccd

> Server daemon for the distcc distributed compiler.
> More information: <https://distcc.github.io>.

- Start a daemon with the default settings:

`distccd --daemon`

- Start a daemon, accepting connections from IPv4 private network ranges:

`distccd --daemon --allow-private`

- Start a daemon, accepting connections from a specific network address or address range:

`distccd --daemon {{[-a|--allow]}} {{ip_address|network_prefix}}`

- Start a daemon with a lowered priority that can run a maximum of 4 tasks at a time:

`distccd --daemon {{[-j|--jobs]}} {{4}} {{[-N|--nice]}} {{5}}`

- Start a daemon and register it via mDNS/DNS-SD (Zeroconf):

`distccd --daemon --zeroconf`
