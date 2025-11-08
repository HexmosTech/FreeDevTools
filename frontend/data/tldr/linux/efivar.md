---
title: "Manage UEFI Variables with efivar | Online Free DevTools by Hexmos"
name: efivar
path: "/freedevtools/tldr/linux/efivar/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/efivar/"
description: "Manage UEFI variables effortlessly with the efivar command. List, print, and modify UEFI variables with ease. Free online tool, no registration required."
category: linux
keywords:
  - UEFI variable management
  - efivar command
  - UEFI variable listing
  - UEFI variable printing
  - UEFI variable modification
  - Linux UEFI tools
  - system configuration UEFI
  - BIOS configuration efivar
  - UEFI settings command-line
  - firmware settings efivar
features:
  - List all existing UEFI variables
  - Print the contents of a specified UEFI variable
  - Modify the contents of a UEFI variable (requires further options not shown)
  - Provides a command-line interface for UEFI variable manipulation
  - Enables direct interaction with UEFI firmware settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# efivar

> Manage UEFI variables.
> More information: <https://manned.org/efivar>.

- List all UEFI variables:

`efivar {{[-l|--list]}}`

- Print the contents of a variable:

`efivar {{[-n|--name]}} {{146b234d-4052-4e07-b326-11220f8e1fe8-lBoot0000}} {{[-p|--print]}}`
