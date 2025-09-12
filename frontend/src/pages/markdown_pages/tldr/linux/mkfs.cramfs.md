---
title: "Create Cramfs Filesystem - Format ROM Images | Free DevTools"
name: mkfs.cramfs
path: /freedevtools/tldr/unknown/mkfs.cramfs
canonical: "https://hexmos.com/freedevtools/tldr/unknown/mkfs.cramfs/"
description: "Create Cramfs filesystem with mkfs.cramfs. Format ROM images and specify volume names using this command-line tool. Free online tool, no registration required."
category: unknown
keywords:
- Cramfs filesystem create
- ROM image format
- mkfs.cramfs command
- Linux filesystem tool
- Compressed ROM filesystem
- Read-only filesystem creator
- Filesystem formatting tool
- Embedded system filesystem
- Linux cramfs utility
- Cramfs image generation
features:
- Create compressed ROM filesystems on specified devices
- Define a custom volume name for the created Cramfs filesystem
- Format partitions as Cramfs for embedded systems
- Generate read-only file systems from directories
- Package file systems for ROM storage
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.cramfs

> Create a ROM filesystem inside a partition.
> More information: <https://manned.org/mkfs.cramfs>.

- Create a ROM filesystem inside partition Y on device X:

`mkfs.cramfs {{/dev/sdXY}}`

- Create a ROM filesystem with a volume-name:

`mkfs.cramfs -n {{volume_name}} {{/dev/sdXY}}`
