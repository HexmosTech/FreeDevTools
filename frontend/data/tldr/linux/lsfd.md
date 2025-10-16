---
title: "List Open Files - Linux File Management | Online Free DevTools by Hexmos"
name: lsfd
path: "/freedevtools/tldr/linux/lsfd/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsfd/"
description: "Manage Linux open files efficiently with lsfd.  List open file descriptors, identify processes using specific files, and filter by PID or filename. Free online tool, no registration required."
category: linux
keywords:
  - linux file descriptor list
  - linux process file monitor
  - linux open file checker
  - file descriptor process identifier
  - linux system file management
  - lsfd command linux
  - open file identification linux
  - process file association linux
  - linux file monitoring tool
  - linux open files command
features:
  - List all open file descriptors on a Linux system.
  - Identify the process associated with a specific open file.
  - Filter open files by process ID (PID) or filename.
  - List open IPv4 or IPv6 sockets.
  - Provides detailed information about open files and their associated processes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lsfd

> List open files and the corresponding processes in Linux.
> More information: <https://manned.org/lsfd>.

- List all open file descriptors:

`lsfd`

- List all files kept open by a specific program:

`lsfd {{[-Q|--filter]}} 'PID == {{process_ID}}'`

- Check what program has a specific file open:

`lsfd {{[-Q|--filter]}} "NAME == '{{path/to/file}}'"`

- List open IPv4 or IPv6 sockets:

`lsfd {{-i4|-i6}}`

- Display help:

`lsfd {{[-h|--help]}}`
