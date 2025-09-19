---
title: "Blkid - List Partitions and UUIDs | Online Free DevTools by Hexmos"
name: blkid
path: /freedevtools/tldr/linux/blkid
canonical: "https://hexmos.com/freedevtools/tldr/linux/blkid/"
description: "List partitions and their UUIDs with Blkid. Easily identify devices and mount points on your Linux system. Free online tool, no registration required."
category: linux
keywords:
- linux partitions
- linux UUID
- blkid command
- device identification
- filesystem information
- partition listing
- device mapping
- block device UUID
- linux disk management
- block device information
features:
- List all recognized partitions
- Display Universally Unique Identifiers (UUIDs)
- Show partition mountpoints
- Present partition information in table format
- Retrieve specific UUID values from a partition
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# blkid

> List all recognized partitions and their Universally Unique Identifier (UUID).
> More information: <https://manned.org/blkid>.

- List all partitions:

`sudo blkid`

- List all partitions in a table, including current mountpoints:

`sudo blkid {{[-o|--output]}} list`

- Get the UUID of the filesystem on a partition:

`sudo blkid {{[-s|--match-tag]}} UUID {{[-o|--output]}} value {{/dev/sdXY}}`
