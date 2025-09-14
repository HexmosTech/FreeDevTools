---
title: "Debugfs - Debug Linux Filesystems | Free DevTools"
name: debugfs
path: /freedevtools/tldr/linux/debugfs
canonical: "https://hexmos.com/freedevtools/tldr/linux/debugfs/"
description: "Debug Linux ext2/ext3/ext4 filesystems with Debugfs. Inspect file system metadata, recover deleted files, and troubleshoot file system issues. Free online tool, no registration required."
category: linux
keywords:
- ext4 filesystem debugger
- linux filesystem debug
- debug ext3 filesystem
- ext2 filesystem analysis
- filesystem metadata viewer
- recover deleted linux files
- debugfs command line
- linux disk repair
- filesystem block inspection
- ext filesystem examiner
features:
- Inspect file system metadata
- Open filesystem in read-only or read-write mode
- Execute commands from a specified file
- View filesystem statistics within the debugfs console
- List all available debugfs commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# debugfs

> An interactive ext2/ext3/ext4 filesystem debugger.
> More information: <https://manned.org/debugfs>.

- Open the filesystem in read only mode:

`debugfs {{/dev/sdXN}}`

- Open the filesystem in read write mode:

`debugfs -w {{/dev/sdXN}}`

- Read commands from a specified file, execute them and then exit:

`debugfs -f {{path/to/cmd_file}} {{/dev/sdXN}}`

- View the filesystem stats in debugfs console:

`stats`

- Close the filesystem:

`close -a`

- List all available commands:

`lr`
