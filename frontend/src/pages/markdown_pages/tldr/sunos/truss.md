---
title: truss
name: truss
path: /freedevtools/tldr/sunos/truss
canonical: "https://hexmos.com/freedevtools/tldr/sunos/truss/"
description: Troubleshooting tool for tracing system calls in SunOS.
category: sunos
keywords:
- system call tracing
- process monitoring
- debugging tool
- application analysis
- system administration tool
- fault diagnosis
- performance analysis
- troubleshooting system issues
- monitoring child processes
- displaying program arguments
features:
- trace system calls of a process
- follow child processes during tracing
- display arguments and environment variables
- summarize system call statistics
- filter output by specific system calls
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
