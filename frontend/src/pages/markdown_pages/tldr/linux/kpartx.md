---
title: "kpartx Partition Tool - Create Device Maps | Online Free DevTools by Hexmos"
name: kpartx
path: /freedevtools/tldr/linux/kpartx
canonical: "https://hexmos.com/freedevtools/tldr/linux/kpartx/"
description: "Create device maps with the kpartx command-line partition tool for Linux.  Manage disk partitions efficiently using this powerful Linux device mapper. Free online tool, no registration required."
category: linux
keywords:
  - kpartx partition mapping
  - linux kpartx command
  - linux disk image mapping
  - kpartx device mapper
  - partition table mapping linux
  - linux partition management kpartx
  - create device maps linux
  - kpartx add partition mappings
  - kpartx delete partition mappings
  - list kpartx mappings
features:
  - Add partition mappings to disk images
  - Delete existing partition mappings from disk images
  - List all current partition mappings
  - Create device maps from partition tables within disk images
  - Manage disk partitions using command-line interface
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
