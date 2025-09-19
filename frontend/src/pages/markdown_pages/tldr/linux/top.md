---
title: "Monitor Processes - Control System Resources with top | Online Free DevTools by Hexmos"
name: top
path: /freedevtools/tldr/linux/top
canonical: "https://hexmos.com/freedevtools/tldr/linux/top/"
description: "Monitor and control system resources in real-time with the top command. View process information, sort by various fields, and filter processes by user or PID. Free online tool, no registration required."
category: linux
keywords:
  - process monitoring command
  - system resource monitor
  - linux process viewer
  - real-time process information
  - process management command
  - unix process viewer
  - top command linux
  - process sorting command
  - interactive process viewer
  - command-line process management
features:
  - Display real-time information on running processes.
  - Filter processes by user, PID, or state (idle/zombie).
  - Sort processes by various fields (CPU, memory, etc.).
  - View individual threads of processes.
  - Interactive commands for detailed process control.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# top

> Display dynamic real-time information about running processes.
> More information: <https://manned.org/top>.

- Start `top`:

`top`

- Do not show any idle or zombie processes:

`top {{[-i|--idle-toggle]}}`

- Show only processes owned by given user:

`top {{[-u|--filter-only-euser]}} {{username}}`

- Sort processes by a field:

`top {{[-o|--sort-override]}} {{field_name}}`

- Show the individual threads of a given process:

`top {{[-Hp|--threads-show --pid]}} {{process_id}}`

- Show only the processes with the given PID(s), passed as a comma-separated list. (Normally you wouldn't know PIDs off hand. This example picks the PIDs from the process name):

`top {{[-p|--pid]}} $(pgrep {{[-d|--delimiter]}} ',' {{process_name}})`

- Display help about interactive commands:

`<?>`
