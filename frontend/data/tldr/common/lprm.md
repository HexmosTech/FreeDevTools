---
title: "Cancel Print Jobs - Control Printing with lprm | Online Free DevTools by Hexmos"
name: lprm
path: "/freedevtools/tldr/common/lprm/"
canonical: "https://hexmos.com/freedevtools/tldr/common/lprm/"
description: "Cancel print jobs with lprm. Control print queues, manage server connections, and remove unwanted print tasks. Free online tool, no registration required."
category: common
keywords:
- print queue manager
- cancel print jobs command
- lprm command line
- cups printing control
- linux printing management
- server print job removal
- lpq print queue status
- command line print cancel
- print spooler control
- remove printing tasks
features:
- Cancel print jobs from the default printer.
- Remove print jobs from a specific server by ID.
- Cancel multiple print jobs simultaneously.
- Cancel all print jobs in a print queue.
- Remove print jobs from a specific printer or class instance.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lprm

> Cancel queued print jobs of a server.
> See also: `lpq`.
> More information: <https://openprinting.github.io/cups/doc/man-lprm.html>.

- Cancel current job on the default printer:

`lprm`

- Cancel a job of a specific server:

`lprm -h {{server}} {{job_id}}`

- Cancel a job of a specific server in a specific port:

`lprm -h {{server}}:{{port}} {{job_id}}`

- Cancel multiple jobs with a encrypted connection to the server:

`lprm -E {{job_id1 job_id2 ...}}`

- Cancel all jobs:

`lprm -`

- Cancel the current job of a specific printer or class:

`lprm -P {{destination}}/{{instance}}`
