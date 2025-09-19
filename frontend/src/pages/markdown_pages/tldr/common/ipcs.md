---
title: "Control IPC - Manage System Resources | Online Free DevTools by Hexmos"
name: ipcs
path: /freedevtools/tldr/common/ipcs
canonical: "https://hexmos.com/freedevtools/tldr/common/ipcs/"
description: "Control IPC (Inter-Process Communication) resources with ipcs. Inspect shared memory, message queues, and semaphores. Free online tool, no registration required."
category: common
keywords:
- XSI IPC facilities management
- shared memory inspection
- message queue analysis
- semaphore array monitoring
- linux IPC control
- unix IPC status
- system resource management
- IPC resource usage
- inter-process communication debugging
- system administration tool
features:
- Display information about shared memory segments
- Inspect message queue status
- Monitor semaphore array usage
- Show process IDs of last IPC operators
- Display IPC facility access times
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipcs

> Show information about the usage of XSI IPC facilities: shared memory segments, message queues, and semaphore arrays.
> More information: <https://manned.org/ipcs.1p>.

- Show information about all the IPC:

`ipcs -a`

- Show information about active shared [m]emory segments, message [q]ueues or [s]empahore sets:

`ipcs {{-m|-q|-s}}`

- Show information on maximum allowable size in [b]ytes:

`ipcs -b`

- Show [c]reator's user name and group name for all IPC facilities:

`ipcs -c`

- Show the [p]ID of the last operators for all IPC facilities:

`ipcs -p`

- Show access [t]imes for all IPC facilities:

`ipcs -t`

- Show [o]utstanding usage for active message queues, and shared memory segments:

`ipcs -o`
