---
title: "Kernel Install - Add/Remove Kernels | Free DevTools"
name: kernel-install
path: /freedevtools/tldr/linux/kernel-install
canonical: "https://hexmos.com/freedevtools/tldr/linux/kernel-install/"
description: "Manage kernel images with Kernel Install. Add, remove, and inspect kernel and initrd images in /boot. Free online tool, no registration required."
category: linux
keywords:
- linux kernel install
- kernel management linux
- bootloader configuration linux
- initrd image management
- kernel version control
- linux kernel update tool
- kernel image manipulation
- grub configuration tool
- systemd boot configuration
- linux boot process
features:
- Add kernel and initrd images to the bootloader partition
- Remove specific kernel versions from the bootloader
- Inspect kernel image paths and parameters
- Configure the boot process on Linux systems
- Integrate with systemd-boot and other bootloaders
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kernel-install

> Add and remove kernel and initrd images to and from `/boot`.
> More information: <https://manned.org/kernel-install.8>.

- Add kernel and initramfs images to bootloader partition:

`sudo kernel-install add {{kernel-version}} {{kernel-image}} {{path/to/initrd-file ...}}`

- Remove kernel from the bootloader partition:

`sudo kernel-install remove {{kernel-version}}`

- Show various paths and parameters that have been configured or auto-detected:

`sudo kernel-install inspect {{kernel-image}}`
