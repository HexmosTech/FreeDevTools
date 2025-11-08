---
title: "EFIBootMgr Control - Manage UEFI Boot Options | Online Free DevTools by Hexmos"
name: efibootmgr
path: "/freedevtools/tldr/linux/efibootmgr/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/efibootmgr/"
description: "Control UEFI boot options with EFIBootMgr. Configure boot order and manage boot entries on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- UEFI Boot Manager
- Linux boot configuration
- Boot order control
- EFI boot entry management
- Linux efibootmgr command
- UEFI shell boot
- Linux kernel boot options
- efibootmgr delete
- efibootmgr create
- efibootmgr bootorder
features:
- List available UEFI boot options
- Create new UEFI boot entries
- Modify the boot order of UEFI devices
- Delete existing UEFI boot entries
- Configure bootloader paths and labels
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# efibootmgr

> Manipulate the UEFI Boot Manager.
> More information: <https://manned.org/efibootmgr>.

- List all boot options with their numbers:

`efibootmgr {{[-u|--unicode]}}`

- Add UEFI Shell v2 as a boot option:

`sudo efibootmgr {{[-c|--create]}} {{[-d|--disk]}} {{/dev/sda}} {{[-p|--part]}} {{1}} {{[-l|--loader]}} "{{\path\to\shell.efi}}" {{[-L|--label]}} "{{UEFI Shell}}"`

- Add Linux as a boot option:

`sudo efibootmgr {{[-c|--create]}} {{[-d|--disk]}} {{/dev/sda}} {{[-p|--part]}} {{1}} {{[-l|--loader]}} "{{\vmlinuz}}" {{[-u|--unicode]}} "{{kernel_cmdline}}" {{[-L|--label]}} "{{Linux}}"`

- Change the current boot order:

`sudo efibootmgr {{[-o|--bootorder]}} {{0002,0008,0001,001A,...}}`

- Delete a boot option:

`sudo efibootmgr {{[-b|--bootnum]}} {{0008}} {{[-B|--delete-bootnum]}}`
