---
title: "LPQ - Control Printer Queue Status | Online Free DevTools by Hexmos"
name: lpq
path: /freedevtools/tldr/common/lpq
canonical: "https://hexmos.com/freedevtools/tldr/common/lpq/"
description: "Control printer queue status with LPQ. Monitor print jobs and manage printer destinations using the command line. Free online tool, no registration required."
category: common
keywords:
- printer queue status
- lpq command
- print job management
- linux printing
- cups printing system
- printer queue monitor
- lpq printer status
- lpq destination control
- lpq encryption status
- command line printing
features:
- Display the status of print jobs in the queue
- Monitor print queues for all printers
- Show print queue details in a long format
- Control print jobs for a specific printer
- Continuously monitor print queue status at intervals
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lpq

> Show printer queue status.
> More information: <https://openprinting.github.io/cups/doc/man-lpq.html>.

- Show the queued jobs of the default destination:

`lpq`

- Show the queued jobs of all printers enforcing encryption:

`lpq -a -E`

- Show the queued jobs in a long format:

`lpq -l`

- Show the queued jobs of a specific printer or class:

`lpq -P {{destination}}/{{instance}}`

- Show the queued jobs once every n seconds until the queue is empty:

`lpq +{{interval}}`
