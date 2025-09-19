---
title: "Eclean-kernel - Remove Old Kernels | Online Free DevTools by Hexmos"
name: eclean-kernel
path: /freedevtools/tldr/linux/eclean-kernel
canonical: "https://hexmos.com/freedevtools/tldr/linux/eclean-kernel/"
description: "Remove old kernels easily with eclean-kernel. Clean up your Gentoo system and reclaim disk space by removing obsolete kernel versions. Free online tool, no registration required."
category: linux
keywords:
- linux kernel cleaner
- gentoo kernel removal
- eclean-kernel command
- remove old kernels linux
- gentoo cleanup tool
- linux system maintenance
- kernel version management
- command line kernel tool
- disk space recovery linux
- obsolete kernel removal
features:
- Lists all available kernel files on the system
- Removes specific kernel versions from Gentoo
- Retains a specified number of newest kernels
- Prompts for confirmation before removing kernels
- Automates the kernel cleanup process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eclean-kernel

> Remove old kernels in Gentoo.
> More information: <https://wiki.gentoo.org/wiki/Kernel/Removal#Using_eclean-kernel>.

- List all kernel files:

`sudo eclean-kernel {{[-l|--list-kernels]}}`

- Remove all kernels except for the two newest ones:

`sudo eclean-kernel {{[-n|--num]}} 2`

- Remove all kernels except for the two newest ones and ask before removal:

`sudo eclean-kernel {{[-a|--all]}} {{[-n|--num]}} 2`
