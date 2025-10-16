---
title: "Bootctl - Control EFI Boot Settings | Online Free DevTools by Hexmos"
name: bootctl
path: "/freedevtools/tldr/linux/bootctl/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/bootctl/"
description: "Control EFI boot settings with Bootctl on Linux. Manage bootloader entries and firmware settings efficiently. Free online tool, no registration required."
category: linux
keywords:
- EFI boot manager
- systemd-boot configuration
- Linux bootloader control
- EFI firmware settings
- Boot entry management
- systemd bootctl command
- Linux boot configuration
- bootctl install command
- EFI system partition
- bootctl remove
features:
- Manage EFI firmware boot entries
- Install and remove systemd-boot
- Control bootloader configuration
- Show system firmware information
- Set next boot to firmware setup
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bootctl

> Control EFI firmware boot settings and manage boot loader.
> More information: <https://manned.org/bootctl>.

- Show information about the system firmware and the bootloaders:

`bootctl`

- Show all available bootloader entries:

`bootctl list`

- Set a flag to boot into the system firmware on the next boot (similar to `sudo systemctl reboot --firmware-setup`):

`sudo bootctl reboot-to-firmware true`

- Specify the path to the EFI system partition (defaults to `/efi/`, `/boot/` or `/boot/efi`):

`bootctl --esp-path /{{path/to/efi_system_partition}}/`

- Install `systemd-boot` into the EFI system partition:

`sudo bootctl install`

- Remove all installed versions of `systemd-boot` from the EFI system partition:

`sudo bootctl remove`
