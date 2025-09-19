---
title: "DKMS - Build Kernel Modules Dynamically | Online Free DevTools by Hexmos"
name: dkms
path: /freedevtools/tldr/linux/dkms
canonical: "https://hexmos.com/freedevtools/tldr/linux/dkms/"
description: "Build kernel modules dynamically with DKMS. Manage kernel module versions and rebuild modules. Free online tool, no registration required."
category: linux
keywords:
- DKMS kernel module
- Linux kernel module manager
- Dynamic kernel module support
- DKMS module rebuild
- Linux module installation
- Kernel module version control
- DKMS autoinstall
- DKMS remove module
- DKMS status check
- DKMS Linux
features:
- Dynamically build kernel modules
- Rebuild modules for current kernel
- Install specific module versions
- Remove modules from all kernels
- List currently installed modules
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dkms

> A framework that allows for dynamic building of kernel modules.
> More information: <https://manned.org/dkms>.

- List currently installed modules:

`dkms status`

- Rebuild all modules for the currently running kernel:

`sudo dkms autoinstall`

- Install version 1.2.1 of the acpi_call module for the currently running kernel:

`sudo dkms install -m {{acpi_call}} -v {{1.2.1}}`

- Remove version 1.2.1 of the acpi_call module from all kernels:

`sudo dkms remove -m {{acpi_call}} -v {{1.2.1}} --all`
