---
title: "Pstree - Control Process Trees in Linux | Free DevTools"
name: pstree
path: /freedevtools/tldr/linux/pstree
canonical: "https://hexmos.com/freedevtools/tldr/linux/pstree/"
description: "Control Linux process trees with pstree. Visualize process relationships and identify parent-child processes easily. Free online tool, no registration required."
category: linux
keywords:
- linux process tree
- process visualization
- process relationship
- linux process management
- pstree command
- parent child process
- signal handling linux
- process monitoring
- system process explorer
- linux system calls
features:
- Display the process tree rooted at init
- Show process IDs for each process
- Filter the process tree by user
- Display command line arguments for processes
- Visualize parent processes of a specific PID
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pstree

> A convenient tool to show running processes as a tree.
> More information: <https://manned.org/pstree>.

- Display a tree of all processes (rooted at init):

`pstree`

- Display a tree of processes with PIDs:

`pstree {{[-p|--show-pids]}}`

- Display all process trees rooted at processes owned by specified user:

`pstree {{user}}`

- Display command line arguments:

`pstree {{[-a|--arguments]}}`

- Display children of a specified process:

`pstree {{pid}}`

- Display parents of a specified process:

`pstree {{[-s|--show-parents]}} {{pid}}`
