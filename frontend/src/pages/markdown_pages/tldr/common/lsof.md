---
title: "Lsof - List Open Files | Online Free DevTools by Hexmos"
name: lsof
path: /freedevtools/tldr/common/lsof
canonical: "https://hexmos.com/freedevtools/tldr/common/lsof/"
description: "List open files instantly with Lsof. Identify processes using files, ports, or users with ease. Free online tool, no registration required."
category: common
keywords:
- list open files
- open files linux
- open files macos
- process file mapping
- network port listener
- file descriptor lookup
- active process identifier
- process identifier by file
- user open files
- file access monitor
features:
- Identify processes using specific files.
- Find processes listening on network ports.
- List open files for a specific user.
- Output process IDs (PIDs) associated with open files.
- Monitor file access within a directory.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsof

> List open files and the corresponding processes.
> Note: Root privileges are required to list files opened by others.
> More information: <https://manned.org/lsof>.

- Find the processes that have a given file open:

`lsof {{path/to/file}}`

- Find the process that opened a local internet port:

`lsof -i :{{port}}`

- Only output the process ID (PID):

`lsof -t {{path/to/file}}`

- List files opened by the given user:

`lsof -u {{username}}`

- List files opened by the given command or process:

`lsof -c {{process_or_command_name}}`

- List files opened by a specific process, given its PID:

`lsof -p {{PID}}`

- List open files in a directory:

`lsof +D {{path/to/directory}}`

- Find the process that is listening on a local IPv6 TCP port and don't convert network or port numbers:

`lsof -i6TCP:{{port}} -sTCP:LISTEN -n -P`
