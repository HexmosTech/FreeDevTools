---
title: "Delete Partition - Forget Partition Tables with Linux | Online Free DevTools by Hexmos"
name: delpart
path: /freedevtools/tldr/linux/delpart
canonical: "https://hexmos.com/freedevtools/tldr/linux/delpart/"
description: "Delete partitions effectively with Delpart, a powerful Linux command. Manage disk partitions by telling the kernel to forget them. Free online tool, no registration required."
category: linux
keywords:
- disk partition deletion
- linux delpart command
- partition table management
- delete partition linux
- disk management linux
- sda partition removal
- forget partition command
- linux partition utility
- command line disk tools
- delpart usage
features:
- Remove specified partition table entries
- Notify the kernel to invalidate partition information
- Manage partitions without rebooting (in most cases)
- Update partition tables directly from the command line
- Force the operating system to recognize partition changes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# delpart

> Ask the Linux kernel to forget about a partition.
> More information: <https://manned.org/delpart>.

- Tell the kernel to forget about the first partition of `/dev/sda`:

`sudo delpart {{/dev/sda}} {{1}}`
