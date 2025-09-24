---
title: "Disable Swap Area - Manage Memory with Swapoff | Online Free DevTools by Hexmos"
name: swapoff
path: /freedevtools/tldr/linux/swapoff
canonical: "https://hexmos.com/freedevtools/tldr/linux/swapoff/"
description: "Manage swap areas with Swapoff, disable or enable swap partitions and files to control memory usage. Free online tool, no registration required."
category: linux
keywords:
  - disable swap area
  - swap management tool
  - linux swapoff command
  - memory management linux
  - swap partition disable
  - swap file disable
  - disk space optimization
  - virtual memory control
  - swapoff area label
  - swapoff all areas
features:
  - Disable specific swap files or partitions
  - Disable all swap areas in /proc/swaps
  - Disable swap areas by their label
  - Manage virtual memory usage
  - Optimize disk space by disabling swap
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swapoff

> Disable devices and files for swapping.
> Note: `path/to/file` can either point to a regular file or a swap partition.
> More information: <https://manned.org/swapoff.8>.

- Disable a given swap area:

`swapoff {{path/to/file}}`

- Disable all swap areas in `/proc/swaps`:

`swapoff {{[-a|--all]}}`

- Disable a swap partition by its label:

`swapoff -L {{label}}`
