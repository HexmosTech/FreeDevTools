---
title: "Create Linux Swap - Set Up Swap Space | Online Free DevTools by Hexmos"
name: mkswap
path: /freedevtools/tldr/linux/mkswap
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkswap/"
description: "Create Linux swap partitions quickly with mkswap. Format drives and enable memory management on your Linux system. Free online tool, no registration required."
category: linux
keywords:
  - linux swap partition
  - swap space creator
  - mkswap command
  - format swap drive
  - linux memory management
  - virtual memory setup
  - linux swap area
  - swap file creation
  - disk formatting tool
  - command line swap tool
features:
  - Format a device or file as a Linux swap area.
  - Check a partition for bad blocks before creating the swap.
  - Specify a label for the swap partition.
  - Set a specific UUID for the swap partition.
  - Create a swap file of a specified size.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mkswap

> Set up a Linux swap area on a device or in a file.
> Note: `path/to/file` can either point to a regular file or a swap partition.
> More information: <https://manned.org/mkswap>.

- Set up a given swap area:

`sudo mkswap {{path/to/file}}`

- Check a partition for bad blocks before creating the swap area:

`sudo mkswap {{[-c|--check]}} {{path/to/file}}`

- Specify a label for the partition (to allow `swapon` to use the label):

`sudo mkswap {{[-L|--label]}} {{label}} {{/dev/sdXY}}`

- Use the specified UUID:

`sudo mkswap {{[-U|--uuid]}} {{clear|random|time|UUID_value}}`

- Set up a swap file (for btrfs, see `tldr btrfs filesystem` instead):

`sudo mkswap {{[-s|--size]}} {{file_size}} {{[-F|--file]}} {{path/to/swapfile}}`
