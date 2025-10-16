---
title: "Blockdev - Manage Block Devices | Online Free DevTools by Hexmos"
name: blockdev
path: "/freedevtools/tldr/linux/blockdev/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/blockdev/"
description: "Manage block devices with blockdev, a powerful Linux command-line tool. Query device sizes and modify read/write permissions. Free online tool, no registration required."
category: linux
keywords:
- linux block device manager
- block device manipulation linux
- disk management linux command
- block size query linux
- read-only block device linux
- read-write block device linux
- flush disk buffers linux
- physical block size linux
- set read-ahead linux
- blockdev command examples
features:
- Query the size of block devices
- Set block device to read-only mode
- Set block device to read-write mode
- Flush buffers for a block device
- Get the physical block size of a device
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# blockdev

> Manage, query, and manipulate block devices.
> More information: <https://manned.org/blockdev>.

- Print a report for all devices:

`sudo blockdev --report`

- Print a report for a specific device:

`sudo blockdev --report {{/dev/sdXY}}`

- Get the size of a device in 512-byte sectors:

`sudo blockdev --getsz {{/dev/sdXY}}`

- Set read-only:

`sudo blockdev --setro {{/dev/sdXY}}`

- Set read-write:

`sudo blockdev --setrw {{/dev/sdXY}}`

- Flush buffers:

`sudo blockdev --flushbufs {{/dev/sdXY}}`

- Get the physical block size:

`sudo blockdev --getpbsz {{/dev/sdXY}}`

- Set the read-ahead value to 128 sectors:

`sudo blockdev --setra 128 {{/dev/sdXY}}`
