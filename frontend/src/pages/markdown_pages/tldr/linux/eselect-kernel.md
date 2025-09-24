---
title: "Manage Linux Kernel - eselect Kernel Control | Online Free DevTools by Hexmos"
name: eselect-kernel
path: /freedevtools/tldr/linux/eselect-kernel
canonical: "https://hexmos.com/freedevtools/tldr/linux/eselect-kernel/"
description: "Control Linux kernel selection with eselect kernel.  List, set, and manage kernel symlinks easily via command line. Free online tool, no registration required."
category: linux
keywords:
  - linux kernel manager
  - eselect kernel commands
  - gentoo kernel selection
  - linux symlink management
  - kernel version control linux
  - command line kernel tools
  - linux system administration
  - eselect kernel list
  - eselect kernel set
  - eselect kernel update
features:
  - List available kernel symlink targets.
  - Set the `/usr/src/linux` symlink by name or number.
  - Display the current kernel symlink target.
  - Set the kernel symlink to the currently running kernel.
  - Manage multiple Linux kernel versions efficiently.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eselect kernel

> An `eselect` module for managing the `/usr/src/linux` symlink.
> More information: <https://wiki.gentoo.org/wiki/Eselect#Kernel>.

- List available kernel symlink targets with their numbers:

`eselect kernel list`

- Set the `/usr/src/linux` symlink by name or number from the `list` command:

`eselect kernel set {{name|number}}`

- Show what the current kernel symlink points to:

`eselect kernel show`

- Set the kernel symlink to the currently running kernel:

`eselect kernel update`
