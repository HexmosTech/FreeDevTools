---
title: "Disk Space Usage - View Filesystem Usage with df | Online Free DevTools by Hexmos"
name: df
path: /freedevtools/tldr/linux/df
canonical: "https://hexmos.com/freedevtools/tldr/linux/df/"
description: "View filesystem disk space usage with the df command.  Analyze disk space, identify storage issues, and manage files efficiently. Free online tool, no registration required."
category: linux
keywords:
  - disk space analyzer
  - filesystem usage checker
  - df command linux
  - df command overview
  - linux disk space
  - file system analysis
  - disk usage monitor
  - command line disk space
  - inodes checker
  - filesystem type displayer
features:
  - Display overall disk space usage for all filesystems.
  - Show disk space usage for a specific file or directory.
  - Provide human-readable output of disk space usage.
  - Include statistics on the number of free inodes.
  - Exclude specific filesystem types from the output.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/df-invocation.html>.

- Display all filesystems and their disk usage:

`df`

- Display all filesystems and their disk usage in human-readable form:

`df {{[-h|--human-readable]}}`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Include statistics on the number of free inodes:

`df {{[-i|--inodes]}}`

- Display filesystems but exclude the specified types:

`df {{[-x|--exclude-type]}} {{squashfs}} {{[-x|--exclude-type]}} {{tmpfs}}`

- Display filesystem types:

`df {{[-T|--print-type]}}`
