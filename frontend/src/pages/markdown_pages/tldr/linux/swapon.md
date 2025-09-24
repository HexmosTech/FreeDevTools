---
title: "Enable Swapping - Manage Swap Space with Swapon | Online Free DevTools by Hexmos"
name: swapon
path: /freedevtools/tldr/linux/swapon
canonical: "https://hexmos.com/freedevtools/tldr/linux/swapon/"
description: "Enable swap space with Swapon on Linux. Manage virtual memory and improve system performance by enabling devices and files for swapping. Free online tool, no registration required."
category: linux
keywords:
  - Linux swap enable
  - swap management linux
  - swapon command linux
  - virtual memory linux
  - swap partition enable
  - linux swap file
  - enable swap area
  - swap device manager
  - linux memory management
  - fstab swap configuration
features:
  - Enable swap partitions by label
  - Enable swap areas specified in /etc/fstab
  - Display current swap usage information
  - Enable a specific swap file or partition
  - Manage system virtual memory using swap space
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# swapon

> Enable devices and files for swapping.
> Note: `path/to/file` can either point to a regular file or a swap partition.
> More information: <https://manned.org/swapon.8>.

- Show swap information:

`swapon`

- Enable a given swap area:

`swapon {{path/to/file}}`

- Enable all swap areas specified in `/etc/fstab` except those with the `noauto` option:

`swapon {{[-a|--all]}}`

- Enable a swap partition by its label:

`swapon -L {{label}}`
