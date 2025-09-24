---
title: "Dump Boot Entries - EFI Boot Dump Utility | Online Free DevTools by Hexmos"
name: efibootdump
path: /freedevtools/tldr/linux/efibootdump
canonical: "https://hexmos.com/freedevtools/tldr/linux/efibootdump/"
description: "Dump EFI boot entries with efibootdump.  View and analyze boot information from EFI variables or files. Free online tool, no registration required."
category: linux
keywords:
  - efi boot dump command
  - efibootdump linux
  - efibootdump utility
  - efi variable viewer
  - boot entry analysis
  - firmware boot dump
  - efi system information
  - uefi boot manager
  - boot entry examination
  - efi boot diagnostics
features:
  - Dumps boot entries from EFI variables.
  - Reads boot entries from specified files.
  - Provides detailed information about each boot entry.
  - Aids in troubleshooting boot-related issues.
  - Useful for system administrators and developers.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# efibootdump

> Dump boot entries from a variable or a file.
> More information: <https://manned.org/efibootdump>.

- Dump boot entries from a file:

`efibootdump {{[-f|--file]}} {{/sys/firmware/efi/efivars/Boot0000-8be4df61-93ca-11d2-aa0d-00e098032b8c}}`
