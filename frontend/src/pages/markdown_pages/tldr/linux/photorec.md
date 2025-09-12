---
title: "Recover Deleted Files - with PhotoRec | Free DevTools"
name: photorec
path: /freedevtools/tldr/linux/photorec
canonical: "https://hexmos.com/freedevtools/tldr/linux/photorec/"
description: "Recover deleted files with PhotoRec. Quickly retrieve lost data from various file systems and storage media. Free online tool, no registration required."
category: linux
keywords:
- deleted file recovery linux
- data recovery tool linux
- file undelete linux
- photorec file recovery
- digital forensics linux
- hard drive recovery
- partition recovery linux
- image recovery linux
- cgsecurity photorec
- linux data carving
features:
- Recovers a wide range of file types
- Works on various file systems (FAT, NTFS, ext2/ext3/ext4, etc.)
- Recovers data from hard drives, memory cards, and other storage media
- Ignores file system structure for deeper scanning
- Writes recovered files to a separate location to prevent overwriting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# photorec

> Deleted file recovery tool.
> It is recommended to write recovered files to a disk separate to the one being recovered from.
> More information: <https://www.cgsecurity.org/wiki/PhotoRec_Step_By_Step>.

- Run PhotoRec on a specific device:

`sudo photorec {{/dev/sdb}}`

- Run PhotoRec on a disk image (`image.dd`):

`sudo photorec {{path/to/image.dd}}`
