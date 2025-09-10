---
title: "Trace System Calls with truss | Free DevTools"
name: truss
path: /freedevtools/tldr/sunos/truss
canonical: "https://hexmos.com/freedevtools/tldr/sunos/truss/"
description: "Trace system calls with truss, a SunOS troubleshooting tool for process monitoring and application analysis. Free online tool, no registration required."
category: sunos
keywords:
  - system call tracing sunos
  - process monitoring sunos
  - debugging tool sunos
  - application analysis sunos
  - system administration sunos
  - fault diagnosis sunos
  - performance analysis sunos
  - truss command sunos
  - monitor child processes sunos
  - display program arguments sunos
features:
  - trace system calls of a specified process
  - follow child processes during system call tracing
  - display program arguments and environment variables
  - summarize system call statistics for performance analysis
  - filter tracing output by specific system calls
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# truss

> Troubleshooting tool for tracing system calls.
> SunOS equivalent of strace.
> More information: <https://www.unix.com/man-page/linux/1/truss>.

- Start tracing a program by executing it, following all child processes:

`truss -f {{program}}`

- Start tracing a specific process by its PID:

`truss -p {{pid}}`

- Start tracing a program by executing it, showing arguments and environment variables:

`truss -a -e {{program}}`

- Count time, calls, and errors for each system call and report a summary on program exit:

`truss -c -p {{pid}}`

- Trace a process filtering output by system call:

`truss -p {{pid}} -t {{system_call_name}}`
