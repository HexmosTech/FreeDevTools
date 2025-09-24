---
title: "List Block Devices - Control Disk Info with lsblk | Online Free DevTools by Hexmos"
name: lsblk
path: /freedevtools/tldr/linux/lsblk
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsblk/"
description: "List block devices and control disk information with lsblk on Linux. Analyze storage devices, partitions, and file systems using this command-line utility. Free online tool, no registration required."
category: linux
keywords:
- disk information linux
- block device listing
- storage device analysis
- linux partition tool
- lsblk command linux
- file system info linux
- disk topology linux
- linux storage manager
- list hard drives linux
- display disk partitions
features:
- List all available block devices in a tree-like format.
- Display filesystem information for each device.
- Show block device topology details.
- Exclude specific devices from the output by major number.
- Customize the output by specifying columns to display.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsblk

> List information about devices.
> More information: <https://manned.org/lsblk>.

- List all storage devices in a tree-like format:

`lsblk`

- Also list empty devices:

`lsblk {{[-a|--all]}}`

- Print the SIZE column in bytes rather than in a human-readable format:

`lsblk {{[-b|--bytes]}}`

- Output info about filesystems:

`lsblk {{[-f|--fs]}}`

- Use ASCII characters for tree formatting:

`lsblk {{[-i|--ascii]}}`

- Output info about block-device topology:

`lsblk {{[-t|--topology]}}`

- Exclude the devices specified by the comma-separated list of major device numbers:

`lsblk {{[-e|--exclude]}} {{1,7,...}}`

- Display a customized summary using a comma-separated list of columns:

`lsblk {{[-o|--output]}} {{NAME,SERIAL,MODEL,TRAN,TYPE,SIZE,FSTYPE,MOUNTPOINT,...}}`
