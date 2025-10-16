---
title: "Disk Space - Display Disk Usage with df Command | Online Free DevTools by Hexmos"
name: df
path: "/freedevtools/tldr/common/df/"
canonical: "https://hexmos.com/freedevtools/tldr/common/df/"
description: "Display disk space usage with the df command. Monitor file system space, identify large files, and troubleshoot storage issues. Free online tool, no registration required."
category: common
keywords:
- disk space usage
- file system monitor
- linux df command
- macos df command
- display disk usage
- check disk space
- df command
- troubleshoot storage
- command line disk tool
- storage analysis tool
features:
- Display disk usage for all mounted file systems
- Show disk space information in 1024-byte units
- Output disk usage in a portable format
- Target specific files or directories to view their disk usage
- Report on total space, used space, and available space
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://manned.org/df.1posix>.

- Display all filesystems and their disk usage using 512-byte units:

`df`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Use 1024-byte units when writing space figures:

`df -k`

- Display information in a portable way:

`df -P`
