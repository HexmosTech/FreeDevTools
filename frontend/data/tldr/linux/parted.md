---
title: "Parted - Control Disk Partitions | Online Free DevTools by Hexmos"
name: parted
path: "/freedevtools/tldr/linux/parted/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/parted/"
description: "Control disk partitions with Parted. Create partition tables, resize partitions, and manage flags on Linux devices. Free online tool, no registration required."
category: linux
keywords:
- disk partition manager
- parted linux command
- partition table creator
- gpt partition editor
- msdos partition tool
- disk management linux
- partition resize command
- boot flag controller
- device partition tool
- disk partition utilities
features:
- List partitions on all block devices.
- Create new partition tables with various label types.
- Create GPT partitions with specified sizes.
- Set boot flags on specified partitions.
- Start interactive mode to manage partitions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# parted

> A partition manipulation program.
> See also: `parted.interactive`, `partprobe`.
> More information: <https://www.gnu.org/software/parted/manual/parted.html#Invoking-Parted>.

- List partitions on all block devices:

`sudo parted {{[-l|--list]}}`

- Create a new partition table of the specified label-type:

`sudo parted {{/dev/sdX}} mklabel {{aix|amiga|bsd|dvh|gpt|loop|mac|msdos|pc98|sun}}`

- Create a new `gpt` partition table with a 500MiB boot partition and give the rest for the system partition (`--script` skips user intervention prompts):

`sudo parted {{/dev/sdX}} {{[-s|--script]}} mklabel gpt mkpart "{{boot_partition_name}}" 0% 500MiB mkpart "{{system_partition_name}}" 500MiB 100%`

- Set a partition to have its boot flag turned on:

`sudo parted {{/dev/sdX}} set {{1}} boot on`

- Start interactive mode with the specified disk selected:

`sudo parted {{/dev/sdX}}`

- Display help:

`parted {{[-h|--help]}}`
