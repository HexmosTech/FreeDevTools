---
title: "Process Monitor - Display Active Processes | Online Free DevTools by Hexmos"
name: procs
path: /freedevtools/tldr/common/procs
canonical: "https://hexmos.com/freedevtools/tldr/common/procs/"
description: "Monitor active processes with procs. View CPU usage and manage system resources on Linux, macOS, and other Unix-like systems. Free online tool, no registration required."
category: common
keywords:
- process monitor
- process explorer
- system monitor
- linux process
- macos process
- process management
- cpu usage
- memory usage
- process tree
- command line process
features:
- List active processes with PID, user, CPU, and memory usage.
- Display processes in a tree format for hierarchical viewing.
- Filter processes based on command name, PID, or user.
- Sort processes by CPU or memory usage in ascending or descending order.
- Combine multiple filter criteria with AND/OR logic.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# procs

> Display information about the active processes.
> More information: <https://github.com/dalance/procs>.

- List all processes showing the PID, user, CPU usage, memory usage, and the command which started them:

`procs`

- List all processes as a tree:

`procs --tree`

- List information about processes, if the commands which started them contain Zsh:

`procs {{zsh}}`

- List information about all processes sorted by CPU time in [a]scending or [d]escending order:

`procs {{--sorta|--sortd}} cpu`

- List information about processes with either a PID, command, or user containing `41` or `firefox`:

`procs --or {{PID|command|user}} {{41}} {{firefox}}`

- List information about processes with both PID `41` and a command or user containing `zsh`:

`procs --and {{41}} {{zsh}}`
