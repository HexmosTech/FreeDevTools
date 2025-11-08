---
title: "GRUB Configuration - Generate GRUB Config Files | Online Free DevTools by Hexmos"
name: grub-mkconfig
path: "/freedevtools/tldr/linux/grub-mkconfig/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/grub-mkconfig/"
description: "Generate GRUB configuration files with grub-mkconfig. Customize boot options and manage kernel parameters easily using the command line. Free online tool, no registration required."
category: linux
keywords:
  - GRUB configuration generator
  - Linux bootloader configuration
  - GRUB config file creation
  - Generate grub.cfg
  - GRUB boot menu customization
  - GRUB boot parameters
  - grub-mkconfig command
  - Linux GRUB utilities
  - GRUB configuration tool
  - Bootloader configuration linux
features:
  - Generates GRUB configuration files automatically
  - Customizes GRUB boot options
  - Reads system information to create a valid configuration
  - Outputs configuration to standard output for review
  - Writes configuration to specified file path
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# grub-mkconfig

> Generate a GRUB configuration file.
> More information: <https://www.gnu.org/software/grub/manual/grub/grub.html#Invoking-grub_002dmkconfig>.

- Do a dry run and print the configuration to `stdout`:

`sudo grub-mkconfig`

- Generate the configuration file:

`sudo grub-mkconfig {{[-o|--output]}} {{/boot/grub/grub.cfg}}`

- Display help:

`grub-mkconfig {{[-h|--help]}}`
