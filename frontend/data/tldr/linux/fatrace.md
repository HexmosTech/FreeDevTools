---
title: "Control FATrace - Report File Access Events | Online Free DevTools by Hexmos"
name: fatrace
path: "/freedevtools/tldr/linux/fatrace/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fatrace/"
description: "Control file system activity with FATrace. Monitor file access events on Linux systems for debugging and performance analysis. Free online tool, no registration required."
category: linux
keywords:
- linux file access monitor
- file system event tracking
- fatrace linux command
- linux disk I/O monitoring
- real-time file access reporting
- fatrace troubleshooting tool
- linux file system debugging
- process file access logging
- fatrace performance analysis
- linux I/O statistics
features:
- Report file access events in real-time.
- Monitor file system activity on mounted filesystems.
- Filter file access events by process.
- Display timestamps for each file access event.
- Analyze file I/O patterns for performance tuning.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fatrace

> Report file access events.
> More information: <https://manned.org/fatrace>.

- Print file access events in all mounted filesystems to `stdout`:

`sudo fatrace`

- Print file access events on the mount of the current directory, with timestamps, to `stdout`:

`sudo fatrace {{[-c|--current-mount]}} {{[-t|--timestamp]}}`
