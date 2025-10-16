---
title: "Create initramfs - Manage Linux Images | Online Free DevTools by Hexmos"
name: update-initramfs
path: "/freedevtools/tldr/linux/update-initramfs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/update-initramfs/"
description: "Create Linux initramfs images with update-initramfs. Update, generate, or remove initramfs images for different kernel versions. Free online tool, no registration required."
category: linux
keywords:
- linux initramfs manager
- initramfs image creator
- linux kernel image update
- initramfs update command
- update initramfs linux
- linux initramfs rebuild
- kernel initramfs utility
- linux boot image manager
- initramfs package manager
- linux image updater
features:
- Generate new initramfs images for specific kernel versions
- Update existing initramfs images to reflect system changes
- Remove obsolete initramfs images from the system
- Manage initramfs for multiple installed kernels
- Integrate seamlessly with the Linux kernel update process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# update-initramfs

> Manage initramfs.
> More information: <https://manned.org/update-initramfs>.

- Create a new initramfs (use `all` for all installed kernel versions):

`sudo update-initramfs -c -k {{kernel_version}}`

- Update an existing initramfs:

`sudo update-initramfs -u`

- Remove an existing initramfs (be careful when using `all` for `kernel_version`):

`sudo update-initramfs -d -k {{kernel_version}}`
