---
title: "Reduce Logical Volume - LVM Command | Online Free DevTools by Hexmos"
name: lvreduce
path: /freedevtools/tldr/linux/lvreduce
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvreduce/"
description: "Reduce Logical Volume size with the lvreduce command. Shrink and manage LVM logical volumes efficiently using this command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - lvreduce command
  - lvm reduce size
  - logical volume shrinking
  - linux lvm command
  - linux logical volume
  - lvm size reduction
  - reduce lvm volume
  - linux disk management
  - lvreduce linux
  - command line lvm
features:
  - Shrink logical volumes by a specified size.
  - Resize the filesystem during volume reduction.
  - Specify reduction amount in gigabytes (GB) or other units.
  - Manage LVM storage efficiently from the command line.
  - Control logical volume size using precise command-line parameters.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lvreduce

> Reduce the size of a logical volume.
> See also: `lvm`.
> More information: <https://manned.org/lvreduce>.

- Reduce a volume's size to 120 GB:

`lvreduce {{[-L|--size]}} {{120G}} {{logical_volume}}`

- Reduce a volume's size by 40 GB as well as the underlying filesystem:

`lvreduce {{[-L|--size]}} -{{40G}} {{[-r|--resizefs]}} {{logical_volume}}`
