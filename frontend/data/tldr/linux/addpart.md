---
title: "Add Partition - Tell Linux Kernel About Partitions | Online Free DevTools by Hexmos"
name: addpart
path: "/freedevtools/tldr/linux/addpart/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/addpart/"
description: "Add partitions to Linux kernel with Addpart. Easily notify the kernel about new partitions on devices. Free online tool, no registration required."
category: linux
keywords:
- linux add partition
- add partition command
- disk partition management
- linux kernel partition
- add partition utility
- partition table update
- device partition tool
- linux disk management
- command line partitioning
- addpart linux command
features:
- Tell the Linux kernel about the existence of a partition
- Notify the kernel about new partitions on a specific device
- Add a partition to a block device by specifying start and length
- Update partition information dynamically without rebooting
- Integrate directly with the Linux kernel's partition handling system
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# addpart

> Tell the Linux kernel about the existence of the specified partition.
> A simple wrapper around the `add partition` ioctl.
> More information: <https://manned.org/addpart>.

- Tell the kernel about the existence of the specified partition:

`addpart {{device}} {{partition}} {{start}} {{length}}`
