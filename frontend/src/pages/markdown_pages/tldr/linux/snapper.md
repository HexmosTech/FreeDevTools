---
title: "Snapshot Manager - Create File System Snapshots | Online Free DevTools by Hexmos"
name: snapper
path: /freedevtools/tldr/linux/snapper
canonical: "https://hexmos.com/freedevtools/tldr/linux/snapper/"
description: "Create file system snapshots with Snapper. Manage snapshots for data recovery and versioning using command line. Free online tool, no registration required."
category: linux
keywords:
  - file system snapshot manager
  - snapper snapshot create
  - linux snapshot tool
  - btrfs snapshot management
  - ext4 snapshot manager
  - snapper config management
  - data recovery snapshot
  - snapper command line
  - file versioning snapshots
  - file system backup linux
features:
  - Create file system snapshots
  - Manage snapshot configurations
  - List existing snapshots
  - Delete snapshots by number or range
  - Describe snapshot creation
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# snapper

> Filesystem snapshot management tool.
> More information: <http://snapper.io/manpages/snapper.html>.

- List snapshot configs:

`snapper list-configs`

- Create snapper config:

`snapper {{[-c|--config]}} {{config}} create-config {{path/to/directory}}`

- Create a snapshot with a description:

`snapper {{[-c|--config]}} {{config}} create {{[-d|--description]}} "{{snapshot_description}}"`

- List snapshots for a config:

`snapper {{[-c|--config]}} {{config}} list`

- Delete a snapshot:

`snapper {{[-c|--config]}} {{config}} delete {{snapshot_number}}`

- Delete a range of snapshots:

`snapper {{[-c|--config]}} {{config}} delete {{snapshot1}}-{{snapshot2}}`
