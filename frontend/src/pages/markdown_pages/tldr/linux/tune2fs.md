---
title: "Control Filesystem Parameters with tune2fs | Online Free DevTools by Hexmos"
name: tune2fs
path: /freedevtools/tldr/linux/tune2fs
canonical: "https://hexmos.com/freedevtools/tldr/linux/tune2fs/"
description: "Control filesystem parameters with tune2fs. Optimize disk performance and manage ext2/ext3/ext4 filesystems effortlessly. Free online tool, no registration required."
category: linux
keywords:
- ext4 filesystem control
- linux filesystem tune
- tune2fs parameters
- ext2/ext3/ext4 manager
- linux disk optimization
- filesystem label editor
- disk journaling enable
- tune2fs discard option
- linux storage tuning
- file system check interval
features:
- Modify filesystem check interval
- Set filesystem labels easily
- Enable or disable discard option
- Enable journaling for performance
- Control user-specified extended attributes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tune2fs

> Adjust parameters of an ext2, ext3 or ext4 filesystem.
> May be used on mounted filesystems.
> More information: <https://manned.org/tune2fs>.

- Set the max number of counts before a filesystem is checked to 2:

`tune2fs -c 2 {{/dev/sdXN}}`

- Set the filesystem label to MY_LABEL:

`tune2fs -L 'MY_LABEL' {{/dev/sdXN}}`

- Enable discard and user-specified extended attributes for a filesystem:

`tune2fs -o {{discard,user_xattr}} {{/dev/sdXN}}`

- Enable journaling for a filesystem:

`tune2fs -o ^{{nobarrier}} {{/dev/sdXN}}`
