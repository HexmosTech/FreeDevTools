---
title: "Opensnoop - Track File Opens on System | Free DevTools"
name: opensnoop
path: /freedevtools/tldr/unknown/opensnoop
canonical: "https://hexmos.com/freedevtools/tldr/unknown/opensnoop/"
description: "Track file opens on your system with Opensnoop, a powerful system observability tool for monitoring file access. Free online tool, no registration required."
category: unknown
keywords:
- file system monitoring
- file open tracker
- system call tracing
- opensnoop linux
- opensnoop macos
- file access auditing
- process file activity
- real-time file monitor
- file handle analysis
- file operation tracing
features:
- Monitor file opens in real-time
- Track file opens by process name
- Filter file opens by process ID
- Identify processes accessing specific files
- Trace system calls related to file access
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# opensnoop

> Track file opens on your system.
> More information: <https://keith.github.io/xcode-man-pages/opensnoop.1m.html>.

- Print all file opens as they occur:

`sudo opensnoop`

- Track all file opens by a process by name:

`sudo opensnoop -n "{{process_name}}"`

- Track all file opens by a process by PID:

`sudo opensnoop -p {{PID}}`

- Track which processes open a specified file:

`sudo opensnoop -f {{path/to/file}}`
