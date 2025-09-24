---
title: "GRUB Set Default - Control Boot Entry | Online Free DevTools by Hexmos"
name: grub-set-default
path: /freedevtools/tldr/linux/grub-set-default
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-set-default/"
description: "Control boot entry with GRUB Set Default. Configure default boot option using name, number or identifier. Free online tool, no registration required."
category: linux
keywords:
- GRUB default boot
- Linux boot manager
- Set default boot entry
- GRUB boot configuration
- Linux bootloader
- GRUB bootloader configuration
- Boot entry selector
- Linux boot selection
- GRUB entry number
- GRUB boot identifier
features:
- Set the default GRUB boot entry by number
- Set the default GRUB boot entry by name
- Set the default GRUB boot entry by identifier
- Configure GRUB boot directory
- Specify an alternative boot directory for GRUB
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grub-set-default

> Set the default boot entry for GRUB.
> More information: <https://manned.org/grub-set-default>.

- Set the default boot entry to an entry number, name or identifier:

`sudo grub-set-default {{entry_number}}`

- Set the default boot entry to an entry number, name or identifier for an alternative boot directory:

`sudo grub-set-default --boot-directory /{{path/to/boot_directory}} {{entry_number}}`
