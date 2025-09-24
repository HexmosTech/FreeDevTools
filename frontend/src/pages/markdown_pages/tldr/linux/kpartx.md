---
title: "Create Device Maps - kpartx Partition Tool | Online Free DevTools by Hexmos"
name: kpartx
path: /freedevtools/tldr/linux/kpartx
canonical: "https://hexmos.com/freedevtools/tldr/linux/kpartx/"
description: "Create device maps with kpartx, a powerful command-line partition tool for Linux. Manage disk partitions efficiently. Free online tool, no registration required."
category: linux
keywords:
  - disk partition mapping
  - linux device mapper
  - kpartx partition tool
  - create device maps
  - partition table reader
  - device mapper utility
  - linux disk management
  - partition mapping tool
  - image partition mounting
  - disk image mapping
features:
  - Add partition mappings to a disk image
  - Delete existing partition mappings
  - List all available partition mappings
  - Create device maps from partition tables
  - Support mounting and unmounting disk images
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kpartx

> Create device maps from partition tables.
> More information: <https://manned.org/kpartx>.

- Add partition mappings and print created mappings:

`kpartx -av {{whole_disk.img}}`

- Delete partition mappings:

`kpartx -d {{whole_disk.img}}`

- List partition mappings:

`kpartx -l {{whole_disk.img}}`
