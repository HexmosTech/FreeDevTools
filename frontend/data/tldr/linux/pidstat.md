---
title: "Pidstat - Control System Resource Usage | Online Free DevTools by Hexmos"
name: pidstat
path: "/freedevtools/tldr/linux/pidstat/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pidstat/"
description: "Control system resource usage with Pidstat. Monitor CPU, memory, and I/O statistics for processes. Free online tool, no registration required."
category: linux
keywords:
  - system resource monitoring
  - process CPU usage
  - process memory usage
  - process IO statistics
  - linux process monitoring
  - pidstat command
  - command line monitoring
  - system performance analysis
  - process resource analysis
  - resource usage report
features:
  - Show CPU usage per process
  - Display memory utilization details
  - Report input/output activity per process
  - Filter information by process ID
  - Monitor processes by command name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pidstat

> Show system resource usage, including CPU, memory, IO etc.
> More information: <https://manned.org/pidstat>.

- Show CPU statistics at a 2 second interval for 10 times:

`pidstat {{2}} {{10}}`

- Show page faults and memory utilization:

`pidstat -r`

- Show input/output usage per process ID:

`pidstat -d`

- Show information on a specific PID:

`pidstat -p {{PID}}`

- Show memory statistics for all processes whose command name include "fox" or "bird":

`pidstat -C "{{fox|bird}}" -r -p ALL`
