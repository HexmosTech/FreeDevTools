---
title: "cfdisk - Manage Partitions | Online Free DevTools by Hexmos"
name: cfdisk
path: "/freedevtools/tldr/linux/cfdisk/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/cfdisk/"
description: "Manage disk partitions with cfdisk, a powerful command-line utility. Create, delete, and resize partitions easily. Free online tool, no registration required."
category: linux
keywords:
  - partition management command
  - cfdisk linux
  - disk partitioner command-line
  - manage hard drive partitions
  - create partitions cfdisk
  - delete partitions cfdisk
  - resize partitions cfdisk
  - linux partition tool cfdisk
  - cfdisk usage
  - command-line partitioning tool
features:
  - Create new partition tables
  - Delete existing partitions
  - Resize existing partitions
  - Change partition types
  - Write changes to the disk
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# cfdisk

> Manage partition tables and partitions on a hard disk using a curses UI.
> More information: <https://manned.org/cfdisk>.

- Start the partition manipulator with a specific device:

`cfdisk {{/dev/sdX}}`

- Create a new partition table for a specific device and manage it:

`cfdisk {{[-z|--zero]}} {{/dev/sdX}}`
