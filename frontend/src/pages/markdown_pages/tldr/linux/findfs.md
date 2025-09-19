---
title: "Find Filesystem - Locate Filesystems by Label/UUID | Online Free DevTools by Hexmos"
name: findfs
path: /freedevtools/tldr/linux/findfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/findfs/"
description: "Locate filesystems with Findfs using label or UUID. Quickly identify partitions and disks on your Linux system. Free online tool, no registration required."
category: linux
keywords:
- linux find filesystem
- filesystem label search
- UUID search linux
- partition label search
- partition UUID search
- block device identification
- linux disk management
- findfs command
- gpt partition search
- mac partition table search
features:
- Find filesystems by label
- Find filesystems by UUID
- Locate partitions by label
- Locate partitions by UUID (GPT only)
- Search block devices for filesystems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# findfs

> Finds a filesystem by label or UUID.
> More information: <https://manned.org/findfs>.

- Search block devices by filesystem label:

`findfs LABEL={{label}}`

- Search by filesystem UUID:

`findfs UUID={{uuid}}`

- Search by partition label (GPT or MAC partition table):

`findfs PARTLABEL={{partition_label}}`

- Search by partition UUID (GPT partition table only):

`findfs PARTUUID={{partition_uuid}}`
