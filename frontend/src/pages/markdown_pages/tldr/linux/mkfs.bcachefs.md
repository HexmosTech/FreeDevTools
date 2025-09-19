---
title: "Create Bcachefs Filesystem - Format Disks | Online Free DevTools by Hexmos"
name: mkfs.bcachefs
path: /freedevtools/tldr/linux/mkfs.bcachefs
canonical: "https://hexmos.com/freedevtools/tldr/linux/mkfs.bcachefs/"
description: "Create bcachefs filesystem partitions instantly with mkfs.bcachefs. Format disks and define volume labels using the command line. Free online tool, no registration required."
category: linux
keywords:
  - bcachefs filesystem creation
  - bcachefs disk formatting
  - bcachefs volume labeling
  - mkfs.bcachefs command
  - linux filesystem tools
  - block device formatting
  - disk partition management
  - bcachefs configuration
  - bcachefs file system
  - command line disk tools
features:
  - Formats partitions into bcachefs filesystems
  - Sets volume labels for bcachefs filesystems
  - Creates bcachefs file system on a specified device
  - Provides command-line interface for disk formatting
  - Enables quick creation of bcachefs file systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# mkfs.bcachefs

> Create a `bcachefs` filesystem inside a partition.
> See also: `bcachefs`.
> More information: <https://bcachefs-docs.readthedocs.io/en/latest/mgmt-formatting.html>.

- Create a `bcachefs` filesystem inside partition `Y` on a device `X`:

`sudo mkfs.bcachefs {{/dev/sdXY}}`

- Create a `bcachefs` filesystem with a volume label:

`sudo mkfs.bcachefs {{[-L|--fs_label]}} {{volume_label}} {{/dev/sdXY}}`
