---
title: "Mount SteamOS - Control Filesystem Partitions | Online Free DevTools by Hexmos"
name: mount.steamos
path: /freedevtools/tldr/linux/mount.steamos
canonical: "https://hexmos.com/freedevtools/tldr/linux/mount.steamos/"
description: "Control SteamOS filesystem partitions with mount.steamos. Mount and unmount partitions, exclude specific partitions, and display help information. Free online tool, no registration required."
category: linux
keywords:
  - SteamOS partition mount
  - filesystem mount command
  - linux mount utility
  - SteamOS mount options
  - partition unmount command
  - linux filesystem management
  - mount point control
  - SteamOS filesystem tools
  - command-line disk utility
  - SteamOS system administration
features:
  - Mount all necessary partitions to a target directory.
  - Exclude specific partitions during mount operations.
  - Unmount all partitions mounted under a specified directory.
  - Display help information for the mount.steamos command.
  - Provide options for fine-grained control over partition mounting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mount.steamos

> Mount or unmount SteamOS filesystem partitions.
> More information: <https://gitlab.com/users/evlaV/projects>.

- Mount all necessary partitions from a device to a target directory:

`sudo mount.steamos {{/dev/sdX}} {{/mnt}}`

- Mount with options to exclude specific partitions (e.g. `/home`, overlays):

`sudo mount.steamos {{[-o|--options]}} nohome,nooverlay {{/dev/sdX}} {{/mnt}}`

- Unmount all partitions mounted under a target directory:

`sudo mount.steamos -u {{/mnt}}`

- Display help:

`mount.steamos {{[-h|--help]}}`
