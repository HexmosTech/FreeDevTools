---
title: "Format Flash Drive - Edit Partition Table with f3fix | Online Free DevTools by Hexmos"
name: f3fix
path: /freedevtools/tldr/common/f3fix
canonical: "https://hexmos.com/freedevtools/tldr/common/f3fix/"
description: "Format flash drives with f3fix, edit partition tables, and manage disk space on fake storage devices. Free online tool, no registration required."
category: common
keywords:
- format flash drive
- f3fix partition editor
- fake flash memory fix
- usb drive formatting
- partition table modification
- storage device repair
- linux disk utility
- command line formatting
- disk space management
- f3probe
features:
- Fill a fake flash drive with a single partition
- Match partition size to real capacity
- Mark a partition as bootable
- Specify the filesystem type
- Edit the partition table of fake flash drives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# f3fix

> Edit the partition table of a fake flash drive.
> See also: `f3probe`, `f3write`, `f3read`.
> More information: <https://oss.digirati.com.br/f3/>.

- Fill a fake flash drive with a single partition that matches its real capacity:

`sudo f3fix {{/dev/device_name}}`

- Mark the partition as bootable:

`sudo f3fix --boot {{/dev/device_name}}`

- Specify the filesystem:

`sudo f3fix --fs-type={{filesystem_type}} {{/dev/device_name}}`
