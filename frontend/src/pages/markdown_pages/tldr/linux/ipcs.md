---
title: "IPCS Tool - Control System V IPC Facilities | Free DevTools"
name: ipcs
path: /freedevtools/tldr/linux/ipcs
canonical: "https://hexmos.com/freedevtools/tldr/linux/ipcs/"
description: "Control System V IPC facilities with IPCS tool. Inspect shared memory segments, message queues, and semaphore arrays. Free online tool, no registration required."
category: linux
keywords:
  - system v ipc
  - ipc facilities
  - shared memory
  - message queues
  - semaphore arrays
  - linux ipc
  - unix ipc
  - ipc status
  - ipc monitoring
  - ipc resource usage
features:
  - Display information about all active IPC facilities.
  - Show details on shared memory, message queues, or semaphore sets.
  - Inspect IPC resource usage with specific IDs.
  - Show IPC limits in bytes or human-readable format.
  - Report creator and owner UIDs/PIDs for IPC resources.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipcs

> Show information about the usage of System V IPC facilities: shared memory segments, message queues, and semaphore arrays.
> See also: `lsipc` for a more flexible tool, `ipcmk` for creating IPC facilities, and `ipcrm` for deleting them.
> More information: <https://manned.org/ipcs>.

- Show information about all active IPC facilities:

`ipcs`

- Show information about active shared [m]emory segments, message [q]ueues or [s]empahore sets:

`ipcs {{--shmems|--queues|--semaphores}}`

- Show full details on the resource with a specific ID:

`ipcs {{--shmems|--queues|--semaphores}} {{[-i|--id]}} {{resource_id}}`

- Show limits in [b]ytes or in a human-readable format:

`ipcs {{[-l|--limits]}} {{--bytes|--human}}`

- Show summary about current usage:

`ipcs {{[-u|--summary]}}`

- Show creator's and owner's UIDs and PIDs for all IPC facilities:

`ipcs {{[-c|--creator]}}`

- Show the PID of the last operators for all IPC facilities:

`ipcs {{[-p|--pid]}}`

- Show last access times for all IPC facilities:

`ipcs {{[-t|--time]}}`
