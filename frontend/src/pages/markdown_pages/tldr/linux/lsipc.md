---
title: "lsipc - Inspect System V IPC - Free DevTools"
name: lsipc
path: /freedevtools/tldr/linux/lsipc
canonical: "https://hexmos.com/freedevtools/tldr/linux/lsipc/"
description: "Inspect System V Inter-Process Communication (IPC) with lsipc.  View shared memory, message queues, and semaphores. Free online tool, no registration required."
category: linux
keywords:
  - System V IPC viewer
  - Linux IPC command
  - lsipc command line
  - System V shared memory inspector
  - System V message queue inspector
  - System V semaphore inspector
  - IPC resource details
  - lsipc output format
  - Linux system information
  - Process communication analysis
features:
  - Displays information on active System V IPC facilities.
  - Shows details of shared memory segments, message queues, and semaphores.
  - Allows filtering by specific resource types (shared memory, message queues, semaphores).
  - Provides detailed information on resources using specific IDs.
  - Offers various output formats (raw, JSON, list, export).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lsipc

> Show information on System V IPC facilities currently employed in the system.
> See also: `ipcs` for the older tool.
> More information: <https://manned.org/lsipc>.

- Show information about all active IPC facilities:

`lsipc`

- Show information about active shared [m]emory segments, message [q]ueues or [s]empahore sets:

`lsipc {{--shmems|--queues|--semaphores}}`

- Show full details on the resource with a specific ID:

`lsipc {{--shmems|--queues|--semaphores}} {{[-i|--id]}} {{resource_id}}`

- Print the given output columns (see all supported columns with `--help`):

`lsipc {{[-o|--output]}} {{KEY,ID,PERMS,SEND,STATUS,NSEMS,RESOURCE,...}}`

- Use [r]aw, [J]SON, [l]ist or [e]xport (key="value") format:

`lsipc {{--raw|--json|--list|--export}}`

- Don't truncate the output:

`lsipc --notruncate`
