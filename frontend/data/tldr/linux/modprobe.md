---
title: "Manage Kernel Modules - Control Linux Modules with modprobe | Online Free DevTools by Hexmos"
name: modprobe
path: "/freedevtools/tldr/linux/modprobe/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/modprobe/"
description: "Control Linux kernel modules efficiently with modprobe. Load, remove, and manage dependencies of kernel modules. Free online tool, no registration required."
category: linux
keywords:
  - linux module management
  - modprobe command
  - kernel module loading
  - kernel module unloading
  - linux kernel modules
  - modprobe dependencies
  - remove kernel modules
  - linux system administration
  - modprobe dry run
  - show module dependencies
features:
  - Load kernel modules into the running system.
  - Remove kernel modules from the system.
  - Manage dependencies of kernel modules.
  - Perform a dry run to simulate module loading without actual changes.
  - Display dependencies of a specified kernel module.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# modprobe

> Add or remove modules from the Linux kernel.
> See also: `kmod` for other module management commands.
> More information: <https://manned.org/modprobe>.

- Pretend to load a module into the kernel, but don't actually do it:

`sudo modprobe {{[-n|--dry-run]}} {{module_name}}`

- Load a module into the kernel:

`sudo modprobe {{module_name}}`

- Remove a module from the kernel:

`sudo modprobe {{[-r|--remove]}} {{module_name}}`

- Remove a module and those that depend on it from the kernel:

`sudo modprobe --remove-dependencies {{module_name}}`

- Show a kernel module's dependencies:

`sudo modprobe {{[-D|--show-depends]}} {{module_name}}`
