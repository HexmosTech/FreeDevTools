---
title: "Manage Partitions - Control Disk Space with systemd-repart | Free DevTools"
name: systemd-repart
path: /freedevtools/tldr/linux/systemd-repart
canonical: "https://hexmos.com/freedevtools/tldr/linux/systemd-repart/"
description: "Control disk space and partition sizes with systemd-repart.  Resize and manage partitions easily from the command line. Free online tool, no registration required."
category: linux
keywords:
  - linux partition management
  - systemd partition tool
  - linux disk space management
  - systemd-repart command
  - resize linux partitions
  - grow linux root partition
  - linux partition resizing
  - systemd repartition tool
  - manage linux partitions
  - command-line partition tool
features:
  - Automatically grows partitions based on configuration files.
  - Allows for resizing partitions to specific sizes.
  - Provides a dry-run option to preview changes before applying.
  - Supports growing the root partition to fill available space.
  - Manages partition resizing through the systemd service.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# systemd-repart

> Automatically grow and add partitions.
> Grows and adds partitions based on the configuration files described in repart.d.
> Does not automatically resize file system on partition. See systemd-growfs to extend file system.
> More information: <https://www.freedesktop.org/software/systemd/man/systemd-repart.html>.

- Grow the root partition (/) to all available disk space:

`systemd-repart`

- View changes without applying:

`systemd-repart --dry-run yes`

- Grow root partition size to 10 gigabytes:

`systemd-repart --size 10G --root /`
