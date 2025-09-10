---
title: procstat
name: procstat
path: /freedevtools/tldr/freebsd/procstat
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/procstat/"
description: Display detailed information about processes in FreeBSD.
category: freebsd
keywords:
- process monitoring and analysis
- file descriptor inspection
- virtual memory mapping analysis
- process argument retrieval
- resource limit examination
- debugging and troubleshooting
- system performance analysis
- identifying resource usage
- examining process state
- analyzing process behavior
features:
- display file descriptors of processes
- show virtual memory mappings
- display process arguments
- show resource limits of processes
- analyze process information
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# procstat

> Display detailed information about processes in FreeBSD.
> More information: <https://man.freebsd.org/cgi/man.cgi?query=procstat>.

- Display file descriptors of a specific process:

`procstat fds {{pid}}`

- Show virtual memory mappings of a process:

`procstat vm {{pid}}`

- Display process arguments:

`procstat arguments {{pid}}`

- Show resource limits of a process:

`procstat rlimit {{pid}}`
