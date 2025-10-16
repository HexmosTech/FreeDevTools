---
title: "Process Status - Control Running Processes | Online Free DevTools by Hexmos"
name: ps
path: "/freedevtools/tldr/osx/ps/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/ps/"
description: "Control running processes with Process Status (ps). Monitor system resources, identify resource-intensive processes, and troubleshoot performance issues. Free online tool, no registration required."
category: osx
keywords:
- process status macOS
- macOS process monitor
- osx running processes
- ps command osx
- system process management
- process identifier PID
- memory usage monitoring
- CPU usage monitoring
- find process by name
- macOS task manager
features:
- List all running processes on macOS
- Search for processes by name or other criteria
- Display parent process ID (PPID)
- Sort processes by memory or CPU usage
- Show full command string for each process
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ps

> Information about running processes.
> More information: <https://keith.github.io/xcode-man-pages/ps.1.html>.

- List all running processes:

`ps aux`

- List all running processes including the full command string:

`ps auxww`

- Search for a process that matches a string:

`ps aux | grep {{string}}`

- Get the parent PID of a process:

`ps -o ppid= -p {{pid}}`

- Sort processes by memory usage:

`ps -m`

- Sort processes by CPU usage:

`ps -r`
