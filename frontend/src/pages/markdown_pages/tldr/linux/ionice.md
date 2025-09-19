---
title: "Ionice - Control I/O Scheduling | Online Free DevTools by Hexmos"
name: ionice
path: /freedevtools/tldr/linux/ionice
canonical: "https://hexmos.com/freedevtools/tldr/linux/ionice/"
description: "Control I/O scheduling with Ionice. Prioritize disk access for processes and improve system performance using command line. Free online tool, no registration required."
category: linux
keywords:
  - I/O scheduling control
  - Linux ionice command
  - Process I/O priority
  - Disk access management
  - Command-line I/O tool
  - Realtime scheduling control
  - Best-effort scheduling
  - Idle I/O scheduling
  - Linux process management
  - System performance tuning
features:
  - Set I/O scheduling class for processes
  - Adjust I/O priority levels
  - Manage disk access for running processes
  - Ignore failures when setting priority
  - Display I/O scheduling information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ionice

> Get or set program I/O scheduling class and priority.
> Scheduling classes: 1 (realtime), 2 (best-effort), 3 (idle).
> Priority levels: 0 (the highest) - 7 (the lowest).
> More information: <https://manned.org/ionice>.

- Run a command with the given scheduling class and priority:

`ionice {{[-c|--class]}} {{scheduling_class}} {{[-n|--classdata]}} {{priority}} {{command}}`

- Set I/O scheduling class of a running process with a specific [p]id, [P]gid or [u]id:

`ionice {{[-c|--class]}} {{scheduling_class}} -{{p|P|u}} {{id}}`

- Run a command with custom I/O scheduling class and priority:

`ionice {{[-c|--class]}} {{scheduling_class}} {{[-n|--classdata]}} {{priority}} {{command}}`

- Ignore failure to set the requested priority:

`ionice {{[-t|--ignore]}} {{[-n|--classdata]}} {{priority}} {{[-p|--pid]}} {{pid}}`

- Run the command even in case it was not possible to set the desired priority (this can happen due to insufficient privileges or an old kernel version):

`ionice {{[-t|--ignore]}} {{[-n|--classdata]}} {{priority}} {{[-p|--pid]}} {{pid}}`

- Print the I/O scheduling class and priority of a running process:

`ionice {{[-p|--pid]}} {{pid}}`
