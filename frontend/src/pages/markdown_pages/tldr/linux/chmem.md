---
title: "Chmem - Modify Memory Blocks in Linux | Online Free DevTools by Hexmos"
name: chmem
path: /freedevtools/tldr/linux/chmem
canonical: "https://hexmos.com/freedevtools/tldr/linux/chmem/"
description: "Modify memory blocks with Chmem, a Linux memory management tool. Control memory hotplug in virtualized environments. Free online tool, no registration required."
category: linux
keywords:
- linux memory management
- chmem memory control
- memory block offline
- memory block online
- linux memory hotplug
- memory zone assignment
- chmem command examples
- hexadecimal memory address
- virtualized memory manager
- linux memory tools
features:
- Set memory blocks offline
- Set memory blocks online
- Control memory ranges via hexadecimal addresses
- Assign memory to specific zones
- Manage memory hotplug in Linux
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chmem

> Modify the state of memory blocks (online or offline) in a Linux system.
> Typically used in virtualized environments to manage memory hotplug.
> More information: <https://manned.org/chmem>.

- Set a memory block offline:

`sudo chmem {{[-b|--block]}} {{[-d|--disable]}} {{block_number}}`

- Set a memory block online:

`sudo chmem {{[-b|--block]}} {{[-e|--enable]}} {{block_number}}`

- Set a memory range offline using hexadecimal addresses:

`sudo chmem {{[-d|--disable]}} 0x{{start_address}}-0x{{end_address}}`

- Set a memory range online using hexadecimal addresses:

`sudo chmem {{[-e|--enable]}} 0x{{start_address}}-0x{{end_address}}`

- Set memory online and assign it to a specific zone (e.g., Movable):

`sudo chmem {{[-e|--enable]}} 0x{{start_address}} {{[-z|--zone]}} {{Movable}}`

- Display help:

`chmem {{[-h|--help]}}`
