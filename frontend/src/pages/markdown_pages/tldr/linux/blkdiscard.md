---
title: "blkdiscard - Securely Discard Device Blocks | Free DevTools"
name: blkdiscard
path: /freedevtools/tldr/linux/blkdiscard
canonical: "https://hexmos.com/freedevtools/tldr/linux/blkdiscard/"
description: "Securely discard device blocks with blkdiscard.  Manage storage space and enhance SSD performance by removing data. Free online tool, no registration required."
category: linux
keywords:
  - blkdiscard command
  - linux disk discard
  - ssd secure erase
  - device block discard
  - linux storage management
  - data sanitization command
  - secure data deletion
  - blkdiscard linux
  - discard device sectors
  - command line disk cleanup
features:
  - Discards all sectors on a storage device.
  - Securely erases data from blocks on a device.
  - Allows discarding a specified length of data.
  - Improves SSD performance by reclaiming space.
  - Enhances data security by removing sensitive information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# blkdiscard

> Discards device sectors on storage devices. Useful for SSDs.
> More information: <https://manned.org/blkdiscard>.

- Discard all sectors on a device, removing all data:

`blkdiscard {{/dev/device}}`

- Securely discard all blocks on a device, removing all data:

`blkdiscard {{[-s|--secure]}} {{/dev/device}}`

- Discard the first 100 MB of a device:

`blkdiscard {{[-l|--length]}} {{100MB}} {{/dev/device}}`
