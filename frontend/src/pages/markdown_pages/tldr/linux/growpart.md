---
title: "Extend Partition - Resize Disks | Free DevTools"
name: growpart
path: /freedevtools/tldr/linux/growpart
canonical: "https://hexmos.com/freedevtools/tldr/linux/growpart/"
description: "Extend partitions with growpart. Resize disk partitions to maximize available space. Free online tool, no registration required."
category: linux
keywords:
  - disk partition resizer
  - disk partition extender
  - growpart linux command
  - growpart disk image
  - extend disk partition linux
  - resize disk partition command
  - linux disk management
  - disk partition management
  - growpart command example
  - growpart usage
features:
  - Extend partition to fill available space
  - Resize disk image partitions
  - Preview partition changes before execution
  - Manage disk space utilization
  - Automatically determine partition size
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# growpart

> Extend a partition in a disk or disk image to fill available space.
> More information: <https://github.com/canonical/cloud-utils>.

- Extend partition `n` from `sdX` to fill empty space until end of disk or beginning of next partition:

`growpart {{/dev/sdX}} {{n}}`

- Show what modifications would be made when growing partition `n` in a disk image:

`growpart {{[-N|--dry-run]}} /{{path/to/disk.img}} {{n}}`
