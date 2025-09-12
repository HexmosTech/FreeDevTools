---
title: "Display Disk Space - Manage Filesystems with df | Free DevTools"
name: df
path: /freedevtools/tldr/unknown/df
canonical: "https://hexmos.com/freedevtools/tldr/unknown/df/"
description: "Manage filesystem disk space with df command. Get a detailed overview of disk usage, inodes, and more on your system. Free online tool, no registration required."
category: unknown
keywords:
- disk space usage
- filesystem overview
- df command
- linux disk space
- macos disk space
- free space checker
- inode statistics
- disk usage analyzer
- file system reporting
- disk space management
features:
- Display disk usage for all filesystems
- Show disk space in human-readable format
- Check disk usage for specific files or directories
- Include statistics on free and used inodes
- Display information in a portable format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://man.openbsd.org/df.1>.

- Display all filesystems and their disk usage using 512-byte units:

`df`

- Display all filesystems and their disk usage in [h]uman-readable form (based on powers of 1024):

`df -h`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Include statistics on the number of free and used [i]nodes:

`df -i`

- Use 1024-byte units when writing space figures:

`df -k`

- Display information in a [P]ortable way:

`df -P`
