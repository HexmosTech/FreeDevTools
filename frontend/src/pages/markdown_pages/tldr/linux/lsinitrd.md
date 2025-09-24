---
title: "List Initramfs - Inspect Image Contents | Online Free DevTools by Hexmos"
name: lsinitrd
path: /freedevtools/tldr/linux/lsinitrd
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsinitrd/"
description: "Inspect initramfs image contents with lsinitrd. Analyze kernel modules, file structure, and unpack images. Free online tool, no registration required."
category: linux
keywords:
  - initramfs image analyzer
  - linux initramfs explorer
  - kernel module inspector
  - boot image viewer
  - ramdisk content list
  - lsinitrd command usage
  - initramfs debugging tool
  - system boot analysis
  - linux boot process
  - image file listing
features:
  - Display initramfs image content
  - List included kernel modules
  - Unpack initramfs to a directory
  - Specify a particular kernel version
  - Examine specific initramfs images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsinitrd

> Show the contents of an initramfs image.
> See also: `dracut`.
> More information: <https://github.com/dracutdevs/dracut/blob/master/man/lsinitrd.1.asc>.

- Show the contents of the initramfs image for the current kernel:

`lsinitrd`

- Show the contents of the initramfs image for the specified kernel:

`lsinitrd --kver {{kernel_version}}`

- Show the contents of the specified initramfs image:

`lsinitrd {{path/to/initramfs.img}}`

- List modules included in the initramfs image:

`lsinitrd --mod`

- Unpack the initramfs to the current directory:

`lsinitrd --unpack`
