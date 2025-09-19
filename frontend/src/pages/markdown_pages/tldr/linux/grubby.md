---
title: "Grubby Config - Control GRUB Bootloader | Online Free DevTools by Hexmos"
name: grubby
path: /freedevtools/tldr/linux/grubby
canonical: "https://hexmos.com/freedevtools/tldr/linux/grubby/"
description: "Control GRUB bootloader configurations with Grubby. Manage kernel boot parameters and update bootloader entries. Free online tool, no registration required."
category: linux
keywords:
  - grubby bootloader config
  - grub bootloader configuration
  - linux boot parameter manager
  - grub kernel argument editor
  - zipl bootloader configuration
  - linux boot loader tool
  - grubby command line tool
  - grub config manager
  - boot parameter editor
  - grubby linux
features:
  - Add kernel boot arguments to all kernel entries.
  - Remove existing arguments from kernel entries.
  - List all kernel menu entries.
  - Update bootloader configuration.
  - Manage kernel boot parameters.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grubby

> Tool for configuring `grub` and `zipl` bootloaders.
> More information: <https://manned.org/grubby.8>.

- Add kernel boot arguments to all kernel menu entries:

`sudo grubby --update-kernel=ALL --args '{{quiet console=ttyS0}}'`

- Remove existing arguments from the entry for the default kernel:

`sudo grubby --update-kernel=DEFAULT --remove-args {{quiet}}`

- List all kernel menu entries:

`sudo grubby --info=ALL`
