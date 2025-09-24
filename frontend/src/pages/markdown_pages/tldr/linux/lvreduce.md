---
title: "Reduce Logical Volume Size - LVM Tool | Online Free DevTools by Hexmos"
name: lvreduce
path: /freedevtools/tldr/linux/lvreduce
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvreduce/"
description: "Reduce Logical Volume Size with LVM tool. Resize and manage logical volumes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - logical volume manager
  - lvm reduce size
  - linux lvm
  - disk management
  - volume resizing
  - logical volume shrinking
  - lvreduce command
  - storage management
  - lvm administration
  - command line volume control
features:
  - Reduce logical volume size
  - Resize filesystem during volume reduction
  - Specify reduction amount in GB
  - Manage LVM storage
  - Command-line volume manipulation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lvreduce

> Reduce the size of a logical volume.
> See also: `lvm`.
> More information: <https://manned.org/lvreduce>.

- Reduce a volume's size to 120 GB:

`lvreduce {{[-L|--size]}} {{120G}} {{logical_volume}}`

- Reduce a volume's size by 40 GB as well as the underlying filesystem:

`lvreduce {{[-L|--size]}} -{{40G}} {{[-r|--resizefs]}} {{logical_volume}}`
