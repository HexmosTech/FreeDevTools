---
title: "Monitor LXC Containers - Resource Usage with lxc-top | Online Free DevTools by Hexmos"
name: lxc-top
path: /freedevtools/tldr/linux/lxc-top
canonical: "https://hexmos.com/freedevtools/tldr/linux/lxc-top/"
description: "Monitor LXC container resource usage with lxc-top.  View CPU, memory, and I/O statistics for Linux containers. Free online tool, no registration required."
category: linux
keywords:
  - lxc container monitor
  - lxc resource usage
  - linux container monitoring
  - lxc-top command
  - system resource monitor
  - linux system tools
  - lxc performance analysis
  - container resource management
  - linux container management
  - lxc top command line
features:
  - Displays real-time resource usage of LXC containers.
  - Allows sorting by name, CPU, block I/O, memory, or kernel memory.
  - Provides customizable update intervals.
  - Offers a command-line interface for efficient monitoring.
  - Enables quick identification of resource-intensive containers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lxc-top

> Display resource usage of LXC containers.
> More information: <https://linuxcontainers.org/lxc/manpages/man1/lxc-top.1.html>.

- Start `lxc-top`:

`lxc-top`

- Adjust update interval:

`lxc-top {{[-d|--delay]}} {{5}}`

- Sort by [n]ame, [c]pu use, [b]lock I/O, [m]emory, or [k]ernel memory:

`lxc-top {{[-s|--sort]}} {{n|c|b|m|k}}`
