---
title: df
name: df
path: /freedevtools/tldr/netbsd/df
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/df/"
description: Display an overview of the filesystem disk space usage.
category: netbsd
keywords:
- disk space usage analysis
- filesystem utilization monitoring
- storage capacity reporting
- monitoring available disk space
- checking file system health
- file and directory size information
- disk usage statistics
- system administration tool
- command line disk utility
- operating system management
features:
- display disk space in human-readable format
- show disk usage for specific files or directories
- report inode usage statistics
- display all filesystem information
- use different unit sizes for reporting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://man.netbsd.org/df.1>.

- Display all filesystems and their disk usage using 512-byte units:

`df`

- Use [h]uman-readable units (based on powers of 1024):

`df -h`

- Display all the fields of the structure(s) returned by `statvfs`:

`df -G`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Include statistics on the number of free and used [i]nodes:

`df -i`

- Use 1024-byte units when writing space figures:

`df -k`

- Display information in a [P]ortable way:

`df -P`
