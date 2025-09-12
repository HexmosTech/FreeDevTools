---
title: "Process Manager - Control Running Processes with ps | Free DevTools"
name: ps
path: /freedevtools/tldr/unknown/ps
canonical: "https://hexmos.com/freedevtools/tldr/unknown/ps/"
description: "Manage and control running processes with the ps command.  View process details, search for specific processes, and sort by memory usage. Free online tool, no registration required."
category: unknown
keywords:
- process monitoring command
- process management linux
- system process viewer
- process information command
- process listing utility
- unix process command
- linux process control
- command line process management
- process tree command
- process memory usage
features:
- List all running processes with detailed information.
- Search for processes matching specific criteria.
- Display the full command line for each process.
- View process information in a tree-like structure.
- Sort processes by memory consumption or other metrics.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ps

> Information about running processes.
> More information: <https://manned.org/ps>.

- List all running processes:

`ps aux`

- List all running processes including the full command string:

`ps auxww`

- Search for a process that matches a string (the brackets will prevent `grep` from matching itself):

`ps aux | grep {{[s]tring}}`

- List all processes of the current user in extra full format:

`ps {{[-u|--user]}} $(id {{[-u|--user]}}) -F`

- List all processes of the current user as a tree:

`ps {{[-u|--user]}} $(id {{[-u|--user]}}) f`

- Get the parent PID of a process:

`ps {{[-o|--format]}} ppid= {{[-p|--pid]}} {{pid}}`

- Sort processes by memory consumption:

`ps --sort size`
