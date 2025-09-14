---
title: "Rmmod - Remove Linux Kernel Modules | Free DevTools"
name: rmmod
path: /freedevtools/tldr/linux/rmmod
canonical: "https://hexmos.com/freedevtools/tldr/linux/rmmod/"
description: "Remove Linux kernel modules with rmmod. Unload and manage kernel extensions for system customization. Free online tool, no registration required."
category: linux
keywords:
- linux kernel module removal
- unload linux module
- rmmod command linux
- linux module management
- remove kernel extension
- linux system customization
- module unloading tool
- linux module unload
- kernel module control
- rmmod example
features:
- Remove specified modules from the Linux kernel
- Display verbose information during module removal
- Send error messages to syslog for logging
- Remove modules with elevated privileges using sudo
- Display command help and version information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rmmod

> Remove modules from the Linux kernel.
> See also: `kmod` for other module management commands.
> More information: <https://manned.org/rmmod>.

- Remove a module from the kernel:

`sudo rmmod {{module_name}}`

- Remove a module from the kernel and display verbose information:

`sudo rmmod --verbose {{module_name}}`

- Remove a module from the kernel and send errors to syslog instead of `stderr`:

`sudo rmmod --syslog {{module_name}}`

- Display help:

`rmmod --help`

- Display version:

`rmmod --version`
