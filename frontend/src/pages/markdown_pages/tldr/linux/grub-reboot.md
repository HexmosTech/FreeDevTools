---
title: "GRUB Reboot - Control Boot Entry | Online Free DevTools by Hexmos"
name: grub-reboot
path: /freedevtools/tldr/linux/grub-reboot
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-reboot/"
description: "Control the GRUB boot entry with GRUB Reboot. Set a specific entry for the next system boot. Free online tool, no registration required."
category: linux
keywords:
- grub boot entry
- linux bootloader
- grub reboot command
- set default boot entry linux
- grub next boot
- linux grub configuration
- boot menu control
- grub boot directory
- linux system boot
- alternative boot entry
features:
- Set the default GRUB boot entry for the next boot.
- Specify an entry number to boot into a specific OS.
- Use an entry name to select the desired OS.
- Define an alternative boot directory for the next boot.
- Force a one-time boot into a different operating system.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grub-reboot

> Set the default boot entry for GRUB, for the next boot only.
> More information: <https://manned.org/grub-reboot>.

- Set the default boot entry to an entry number, name or identifier for the next boot:

`sudo grub-reboot {{entry_number}}`

- Set the default boot entry to an entry number, name or identifier for an alternative boot directory for the next boot:

`sudo grub-reboot --boot-directory /{{path/to/boot_directory}} {{entry_number}}`
