---
title: "Procstat - Analyze FreeBSD Processes | Free DevTools"
name: procstat
path: /freedevtools/tldr/freebsd/procstat
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/procstat/"
description: "Analyze processes on FreeBSD with Procstat. Inspect file descriptors, virtual memory mappings, and resource limits. Free online tool, no registration required."
category: freebsd
keywords:
- freebsd process analysis
- process monitoring freebsd
- file descriptor inspection
- virtual memory analysis
- freebsd resource limits
- process argument retrieval
- system performance freebsd
- debugging freebsd processes
- examining process state
- analyzing process behavior
features:
- display file descriptors for freebsd processes
- show virtual memory mappings of freebsd processes
- display command line arguments of freebsd processes
- show resource limits for freebsd processes
- analyze detailed process information on freebsd
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
