---
title: "GRUB BIOS Setup - Configure GRUB Bootloader | Free DevTools"
name: grub-bios-setup
path: /freedevtools/tldr/linux/grub-bios-setup
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-bios-setup/"
description: "Configure GRUB bootloader with grub-bios-setup for BIOS systems.  Set up a device to boot using GRUB easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - grub bios setup
  - grub bootloader configuration
  - linux boot manager
  - bios grub installation
  - grub installation command
  - grub-bios-setup command
  - linux system boot
  - grub configuration tool
  - device boot setup
  - command-line bootloader
features:
  - Sets up a device to boot with the GRUB bootloader.
  - Installs GRUB even if problems are detected (force install).
  - Allows specifying a custom installation directory for GRUB.
  - Configures GRUB for BIOS-based systems.
  - Provides a command-line interface for GRUB setup.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grub-bios-setup

> Set up a device to use GRUB with a BIOS configuration.
> You should use `grub-install` instead of `grub-bios-setup` in most cases.
> More information: <https://manned.org/grub-bios-setup.8>.

- Set up a device to boot with GRUB:

`grub-bios-setup {{/dev/sdX}}`

- Install even if problems are detected:

`grub-bios-setup {{[-f|--force]}} {{/dev/sdX}}`

- Install GRUB in a specific directory:

`grub-bios-setup {{[-d|--directory]}} {{/boot/grub}} {{/dev/sdX}}`
