---
title: "Manage Kernel Modules - Control Modules | Online Free DevTools by Hexmos"
name: kmod
path: /freedevtools/tldr/linux/kmod
canonical: "https://hexmos.com/freedevtools/tldr/linux/kmod/"
description: "Manage kernel modules with kmod. Load, unload, and inspect Linux kernel modules effortlessly. Free online tool, no registration required. Kernel configuration supported."
category: linux
keywords:
  - linux kernel module management
  - kmod command line tool
  - kernel module loader
  - lsmod list modules linux
  - rmmod unload module
  - insmod load module
  - modinfo module information
  - depmod dependency generator
  - linux driver control
  - kernel configuration
features:
  - List currently loaded kernel modules
  - Display static device node information
  - Load and unload kernel modules
  - Display module information
  - Manage kernel module dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kmod

> Manage Linux kernel modules.
> This program is usually called via its symlinks: `lsmod`, `rmmod`, `insmod`, `modinfo`, `modprobe`, and `depmod`.
> See their respective pages for more information.
> More information: <https://manned.org/kmod>.

- List currently loaded kernel modules:

`kmod list`

- Display the static device nodes information provided by the modules of the currently running kernel:

`kmod static-nodes`
