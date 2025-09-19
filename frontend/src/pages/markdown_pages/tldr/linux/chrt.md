---
title: "Control Real-Time Processes - chrt | Online Free DevTools by Hexmos"
name: chrt
path: /freedevtools/tldr/linux/chrt
canonical: "https://hexmos.com/freedevtools/tldr/linux/chrt/"
description: "Control real-time process attributes with chrt on Linux. Manage scheduling policies and priorities efficiently. Free online tool, no registration required."
category: linux
keywords:
  - linux real-time process control
  - chrt process scheduler
  - linux scheduling policy
  - process priority manager
  - real-time scheduling control
  - linux process management
  - command line process control
  - chrt command linux
  - set process priority linux
  - manipulate process attributes linux
features:
  - Display real-time attributes of a specific process
  - Control scheduling priority of a process by PID
  - Set scheduling policy (deadline, idle, batch, rr, fifo, other)
  - Display min/max priority values available
  - Show attributes of all threads belonging to a process
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# chrt

> Manipulate the real-time attributes of a process.
> More information: <https://manned.org/chrt>.

- Display attributes of a process:

`chrt {{[-p|--pid]}} {{PID}}`

- Display attributes of all threads of a process:

`chrt {{[-a|--all-tasks]}} {{[-p|--pid]}} {{PID}}`

- Display the min/max priority values that can be used with `chrt`:

`chrt {{[-m|--max]}}`

- Set the scheduling priority of a process:

`chrt {{[-p|--pid]}} {{priority}} {{PID}}`

- Set the scheduling policy of a process:

`chrt --{{deadline|idle|batch|rr|fifo|other}} {{[-p|--pid]}} {{priority}} {{PID}}`
