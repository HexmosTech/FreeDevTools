---
title: "DF Command - Check Disk Space Usage | Online Free DevTools by Hexmos"
name: df
path: /freedevtools/tldr/osx/df
canonical: "https://hexmos.com/freedevtools/tldr/osx/df/"
description: "Check disk space usage with DF command. Analyze file system capacity and manage storage with this simple command line tool. Free online tool, no registration required."
category: osx
keywords:
  - disk space usage
  - df command
  - file system analysis
  - storage management
  - command line tool
  - linux df
  - macos df
  - check disk space
  - df options
  - disk usage statistics
features:
  - Display disk space usage for all file systems
  - Show human-readable disk space units
  - Display disk space usage for a specific file or directory
  - Show inode statistics for file systems
  - Display portable disk space information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# df

> Display an overview of the filesystem disk space usage.
> More information: <https://keith.github.io/xcode-man-pages/df.1.html>.

- Display all filesystems and their disk usage using 512-byte units:

`df`

- Use [h]uman-readable units (based on powers of 1024) and display a grand total:

`df -h -c`

- Use [H]uman-readable units (based on powers of 1000):

`df -{{-si|H}}`

- Display the filesystem and its disk usage containing the given file or directory:

`df {{path/to/file_or_directory}}`

- Include statistics on the number of free and used [i]nodes including the filesystem t[Y]pes:

`df -iY`

- Use 1024-byte units when writing space figures:

`df -k`

- Display information in a [P]ortable way:

`df -P`
