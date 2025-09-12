---
title: "Generate initramfs - Create Linux Boot Image | Free DevTools"
name: mkinitfs
path: /freedevtools/tldr/linux/mkinitfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkinitfs/"
description: "Generate initramfs images with mkinitfs on Alpine Linux. Customize boot process and manage kernel modules efficiently. Free online tool, no registration required."
category: linux
keywords:
  - initramfs generator
  - linux boot image
  - alpine linux
  - kernel modules
  - mkinitfs configuration
  - boot process customization
  - linux boot sequence
  - initramfs compression
  - linux system administration
  - system bootloader
features:
  - Generate initramfs image from configuration file
  - Compress initramfs using specified algorithm
  - List files to be included in initramfs image
  - List available features for initramfs creation
  - Customize initramfs image using configuration options
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkinitfs

> Generate an initramfs on Alpine Linux.
> More information: <https://manned.org/mkinitfs>.

- Generate an initramfs with the features specified in `/etc/mkinitfs/mkinitfs.conf`:

`mkinitfs`

- Use a different configuration file:

`mkinitfs -c {{path/to/config}}`

- Compress the initramfs using the specified compression algorithm (default: gzip):

`mkinitfs -C {{gzip|xz|zstd|lz4|none}}`

- List files that will be included in the initramfs image:

`mkinitfs -l`

- List all available features:

`mkinitfs -L`
