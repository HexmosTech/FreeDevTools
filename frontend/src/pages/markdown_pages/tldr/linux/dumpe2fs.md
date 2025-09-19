---
title: "Filesystem Information - Dump ext2/3/4 with dumpe2fs | Online Free DevTools by Hexmos"
name: dumpe2fs
path: /freedevtools/tldr/linux/dumpe2fs
canonical: "https://hexmos.com/freedevtools/tldr/linux/dumpe2fs/"
description: "Dump filesystem information with dumpe2fs. Analyze ext2/ext3/ext4 filesystems for debugging and recovery purposes. Free online tool, no registration required."
category: linux
keywords:
- ext2 filesystem information
- ext3 filesystem information
- ext4 filesystem information
- linux filesystem analysis
- filesystem superblock dump
- disk partition examination
- ext filesystem metadata
- dumpe2fs command linux
- bad blocks filesystem check
- linux disk diagnostics
features:
- Display ext2, ext3, and ext4 filesystem metadata
- Identify and list blocks marked as bad
- Force display of filesystem information with unrecognized feature flags
- Show superblock information without group descriptor details
- Print detailed group information block numbers in hexadecimal format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dumpe2fs

> Print the super block and blocks group information for ext2/ext3/ext4 filesystems.
> Unmount the partition before running this command using `umount {{device}}`.
> More information: <https://manned.org/dumpe2fs>.

- Display ext2, ext3 and ext4 filesystem information:

`dumpe2fs {{/dev/sdXN}}`

- Display the blocks which are reserved as bad in the filesystem:

`dumpe2fs -b {{/dev/sdXN}}`

- Force display filesystem information even with unrecognizable feature flags:

`dumpe2fs -f {{/dev/sdXN}}`

- Only display the superblock information and not any of the block group descriptor detail information:

`dumpe2fs -h {{/dev/sdXN}}`

- Print the detailed group information block numbers in hexadecimal format:

`dumpe2fs -x {{/dev/sdXN}}`
