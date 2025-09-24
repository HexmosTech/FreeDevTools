---
title: "Disk Usage Utility - Analyze Disk Space | Online Free DevTools by Hexmos"
name: duf
path: /freedevtools/tldr/common/duf
canonical: "https://hexmos.com/freedevtools/tldr/common/duf/"
description: "Analyze disk space with Disk Usage Utility (duf). Monitor disk usage, free space, and file systems across multiple platforms. Free online tool, no registration required."
category: common
keywords:
- disk space analyzer
- disk usage monitor
- file system usage
- disk free space utility
- linux disk space
- macos disk space
- duf command
- command line disk utility
- disk space visualization
- system monitoring tool
features:
- List accessible storage devices
- Filter displayed filesystems by type
- Sort output by various criteria like size or usage
- Display all file systems, including inaccessible ones
- Customize the application theme
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# duf

> Disk Usage/Free Utility.
> More information: <https://github.com/muesli/duf>.

- List accessible devices:

`duf`

- List everything (such as pseudo, duplicate or inaccessible file systems):

`duf --all`

- Only show specified devices or mount points:

`duf {{path/to/directory1 path/to/directory2 ...}}`

- Sort the output by a specified criteria:

`duf --sort {{size|used|avail|usage}}`

- Show or hide specific filesystems:

`duf --{{only-fs|hide-fs}} {{tmpfs|vfat|ext4|xfs}}`

- Sort the output by key:

`duf --sort {{mountpoint|size|used|avail|usage|inodes|inodes_used|inodes_avail|inodes_usage|type|filesystem}}`

- Change the theme (if `duf` fails to use the right theme):

`duf --theme {{dark|light}}`
