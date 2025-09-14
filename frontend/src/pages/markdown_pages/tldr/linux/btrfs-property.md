---
title: "Btrfs Property - Control Filesystem Properties | Free DevTools"
name: btrfs-property
path: /freedevtools/tldr/linux/btrfs-property
canonical: "https://hexmos.com/freedevtools/tldr/linux/btrfs-property/"
description: "Control Btrfs filesystem properties with Btrfs Property. Manage labels, compression, and other attributes of filesystems, subvolumes, and devices. Free online tool, no registration required."
category: linux
keywords:
- btrfs filesystem properties
- linux btrfs property management
- btrfs subvolume control
- btrfs device configuration
- btrfs compression settings
- btrfs label modification
- btrfs attribute manager
- btrfs object properties
- linux filesystem control
- btrfs command-line tool
features:
- List available properties for Btrfs objects.
- Get all properties for specified Btrfs filesystems.
- Retrieve specific properties like 'label'.
- Set the compression property for Btrfs inodes.
- Manage object type-specific properties.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# btrfs property

> Get, set, or list properties for a BTRFS filesystem object (files, directories, subvolumes, filesystems, or devices).
> More information: <https://btrfs.readthedocs.io/en/latest/btrfs-property.html>.

- List available properties (and descriptions) for the given btrfs object:

`sudo btrfs {{[p|property]}} {{[l|list]}} {{path/to/btrfs_object}}`

- Get all properties for the given btrfs object:

`sudo btrfs {{[p|property]}} {{[g|get]}} {{path/to/btrfs_object}}`

- Get the `label` property for the given btrfs filesystem or device:

`sudo btrfs {{[p|property]}} {{[g|get]}} {{path/to/btrfs_filesystem}} label`

- Get all object type-specific properties for the given btrfs filesystem or device:

`sudo btrfs {{[p|property]}} {{[g|get]}} -t {{subvol|filesystem|inode|device}} {{path/to/btrfs_filesystem}}`

- Set the `compression` property for a given btrfs inode (either a file or directory):

`sudo btrfs {{[p|property]}} {{[s|set]}} {{path/to/btrfs_inode}} compression {{zstd|zlib|lzo|none}}`
