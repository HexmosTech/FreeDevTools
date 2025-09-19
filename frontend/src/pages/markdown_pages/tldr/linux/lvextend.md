---
title: "Lvextend - Increase Logical Volume Size | Online Free DevTools by Hexmos"
name: lvextend
path: /freedevtools/tldr/linux/lvextend
canonical: "https://hexmos.com/freedevtools/tldr/linux/lvextend/"
description: "Increase volume size with Lvextend, a command-line tool for dynamic storage management. Resize logical volumes with ease using this free online tool, no registration required."
category: linux
keywords:
  - lvextend increase volume size
  - lvextend resize logical volume
  - lvm logical volume management
  - linux lvextend command
  - command line volume resizing
  - physical volume extension
  - dynamic storage management
  - lvextend disk space allocation
  - extend logical volume linux
  - lvm volume group extend
features:
  - Extend the size of logical volumes
  - Resize logical volumes using command-line
  - Allocate free space from physical volumes
  - Dynamically increase volume capacity
  - Resize underlying filesystem after extension
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lvextend

> Increase the size of a logical volume.
> See also: `lvm`.
> More information: <https://manned.org/lvextend.8>.

- Increase a volume's size to 120 GB:

`sudo lvextend {{[-L|--size]}} {{120G}} {{logical_volume}}`

- Increase a volume's size by 40 GB as well as the underlying filesystem:

`sudo lvextend {{[-L|--size]}} +{{40G}} {{[-r|--resizefs]}} {{logical_volume}}`

- Increase a volume's size to 100% of the free physical volume space:

`sudo lvextend {{[-l|--extents]}} +{{100}}%FREE {{logical_volume}}`

- Increase a volume's size to 100% of the free physical volume space and resize the underlying filesystem:

`sudo lvextend {{[-l|--extents]}} +{{100}}%FREE {{[-r|--resizefs]}} {{logical_volume}}`
