---
title: "Create Disk Images - Mount and Convert with Xmount | Online Free DevTools by Hexmos"
name: xmount
path: "/freedevtools/tldr/linux/xmount/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/xmount/"
description: "Create disk images with Xmount, convert between image formats like raw, DMG, EWF, and VHD. Efficient disk imaging tool for Linux. Free online tool, no registration required."
category: linux
keywords:
- disk image creation
- raw image converter
- DMG file converter
- EWF image mounting
- VHD image converter
- linux disk imaging
- forensic image analysis
- virtual disk mounting
- disk image mounting
- xmount disk conversion
features:
- Convert between various disk image formats
- Mount disk images as virtual filesystems
- Support write-cache for modified images
- Specify offset to mount specific partitions
- Create virtual representations of disk images
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xmount

> Convert on-the-fly between multiple input and output hard disk image types with optional write cache support.
> Create a virtual file system using FUSE (Filesystem in Userspace) that contains a virtual representation of the input image.
> More information: <https://manned.org/xmount>.

- Mount a `.raw` image file into a DMG container file:

`xmount --in {{raw}} {{path/to/image.dd}} --out {{dmg}} {{mountpoint}}`

- Mount an EWF image file with write-cache support into a VHD file to boot from:

`xmount --cache {{path/to/cache.ovl}} --in {{ewf}} {{path/to/image.E??}} --out {{vhd}} {{mountpoint}}`

- Mount the first partition at sector 2048 into a new `.raw` image file:

`xmount --offset {{2048}} --in {{raw}} {{path/to/image.dd}} --out {{raw}} {{mountpoint}}`
