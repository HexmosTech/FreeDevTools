---
title: "Install GRUB - Bootloader Configuration | Online Free DevTools by Hexmos"
name: grub-install
path: "/freedevtools/tldr/linux/grub-install/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-install/"
description: "Install GRUB bootloader with grub-install. Configure boot options and install to different systems, including BIOS and UEFI. Free online tool, no registration required."
category: linux
keywords:
- GRUB bootloader install
- Linux bootloader configuration
- BIOS GRUB install
- UEFI GRUB install
- GRUB install Linux
- GRUB bootloader setup
- bootloader install command
- linux GRUB configuration tool
- GRUB install guide
- GRUB install utility
features:
- Installs GRUB bootloader to a specified device
- Supports both BIOS and UEFI systems
- Allows specifying target architecture for installation
- Configures EFI directory for UEFI installations
- Enables pre-loading specific modules during installation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grub-install

> Install GRUB to a device.
> More information: <https://www.gnu.org/software/grub/manual/grub/grub.html#Installing-GRUB-using-grub_002dinstall>.

- Install GRUB on a BIOS system:

`sudo grub-install {{path/to/device}}`

- Install GRUB on a BIOS system while specifying architecture:

`sudo grub-install --target {{i386-pc}} {{path/to/device}}`

- Install GRUB on an UEFI system:

`sudo grub-install --efi-directory {{path/to/efi_directory}}`

- Install GRUB on an UEFI system while specifying architecture and boot menu text:

`sudo grub-install --target {{x86_64-efi}} --efi-directory {{path/to/efi_directory}} --bootloader-id {{GRUB}}`

- Install GRUB pre-loading specific modules:

`sudo grub-install --target {{x86_64-efi}} --efi-directory {{path/to/efi_directory}} --modules "{{part_gpt part_msdos}}"`

- Display help:

`grub-install {{[-?|--help]}}`
