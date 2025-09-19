---
title: "Disk Space Usage - Analyze Filesystem with df | Online Free DevTools by Hexmos"
name: df
path: /freedevtools/tldr/freebsd/df
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/df/"
description: "Analyze filesystem disk space usage with the df command.  View detailed information on free and used space, including filesystem types and inodes. Free online tool, no registration required."
category: freebsd
keywords:
  - disk space analyzer
  - filesystem analysis command
  - df command usage
  - linux df command
  - unix df command
  - file system space checker
  - disk usage monitor
  - filesystem information
  - command line disk space
  - view disk usage
features:
  - Display total disk space usage for all filesystems.
  - Show disk space usage in human-readable units (KB, MB, GB).
  - Filter disk usage information for a specific file or directory.
  - Provide detailed statistics on inodes (free and used).
  - Display filesystem types alongside usage information.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://man.freebsd.org/cgi/man.cgi?df>.

- Display all filesystems and their disk usage using 512-byte units:

`df`

- Use [h]uman-readable units (based on powers of 1024) and display a grand total:

`df -h -c`

- Use [H]uman-readable units (based on powers of 1000):

`df -{{-si|H}}`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Include statistics on the number of free and used [i]nodes including the filesystem [T]ypes:

`df -iT`

- Use 1024-byte units when writing space figures:

`df -k`

- Display information in a [P]ortable way:

`df -P`
