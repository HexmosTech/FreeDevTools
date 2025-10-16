---
title: "Iotop - Monitor I/O Usage by Processes | Online Free DevTools by Hexmos"
name: iotop
path: "/freedevtools/tldr/common/iotop/"
canonical: "https://hexmos.com/freedevtools/tldr/common/iotop/"
description: "Monitor process I/O usage with Iotop. Identify performance bottlenecks and optimize system resource allocation using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- I/O monitoring
- process I/O usage
- disk I/O monitoring
- linux I/O monitor
- system performance analysis
- iotop linux
- iotop command
- iotop performance
- iotop disk
- iotop system
features:
- Display real-time I/O usage for processes and threads
- Filter I/O data by processes or threads
- Show accumulated I/O instead of bandwidth
- Monitor I/O usage for specific PIDs
- Operate in non-interactive batch mode
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iotop

> Display a table of current I/O usage by processes or threads.
> More information: <https://manned.org/iotop>.

- Start top-like I/O monitor:

`sudo iotop`

- Show only processes or threads actually doing I/O:

`sudo iotop {{[-o|--only]}}`

- Show I/O usage in non-interactive mode:

`sudo iotop {{[-b|--batch]}}`

- Show only I/O usage of processes (default is to show all threads):

`sudo iotop {{[-P|--processes]}}`

- Show I/O usage of given PID(s):

`sudo iotop {{[-p|--pid]}} {{PID}}`

- Show I/O usage of a given user:

`sudo iotop {{[-u|--user]}} {{user}}`

- Show accumulated I/O instead of bandwidth:

`sudo iotop {{[-a|--accumulated]}}`
