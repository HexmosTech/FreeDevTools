---
title: "Control GRUB Environment - Edit Variables | Free DevTools"
name: grub-editenv
path: /freedevtools/tldr/linux/grub-editenv
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-editenv/"
description: "Control GRUB environment variables with grub-editenv. Manage boot entries, reset variables, and configure the GRUB environment. Free online tool, no registration required."
category: linux
keywords:
  - grub environment editor
  - grub configuration manager
  - linux bootloader settings
  - grub variable controller
  - grub boot entry modifier
  - boot configuration linux
  - grub environment variables
  - linux grub settings
  - grub command line tool
  - grub environment management
features:
  - Set the default boot entry
  - Display all GRUB environment variables
  - Reset specific GRUB variables
  - Modify GRUB environment settings
  - Manage boot configuration from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# grub-editenv

> Edit GRUB environment variables.
> More information: <https://www.gnu.org/software/grub/manual/grub/grub.html>.

- Set a default boot entry (Assuming the boot entry already exists):

`grub-editenv /boot/grub/grubenv set default={{Ubuntu}}`

- Display all GRUB environment variables:

`grub-editenv /boot/grub/grubenv list`

- Reset the `saved_entry` variable to the default:

`grub-editenv /boot/grub/grubenv unset saved_entry`
