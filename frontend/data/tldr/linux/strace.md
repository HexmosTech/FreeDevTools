---
title: "strace - Trace System Calls | Online Free DevTools by Hexmos"
name: strace
path: "/freedevtools/tldr/linux/strace/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/strace/"
description: "Trace system calls with strace, a powerful debugging and troubleshooting command-line utility. Analyze process behavior and identify issues efficiently. Free online tool, no registration required."
category: linux
keywords:
  - system call tracer
  - linux system call tracing
  - strace command
  - process tracing tool
  - debugging with strace
  - system call analysis
  - command-line debugger
  - troubleshoot system calls
  - linux troubleshooting
  - process monitoring
features:
  - Trace system calls made by a process.
  - Filter system call output by specific calls.
  - Generate summary reports of system call statistics.
  - Time system calls and show durations.
  - Trace file and network operations.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# strace

> Troubleshooting tool for tracing system calls.
> More information: <https://manned.org/strace>.

- Start tracing a specific process by its PID:

`strace {{[-p|--attach]}} {{pid}}`

- Trace a process and filter output by system call [e]xpression:

`strace {{[-p|--attach]}} {{pid}} -e {{system_call,system_call2,...}}`

- Count time, calls, and errors for each system call and report a summary on program exit:

`strace {{[-p|--attach]}} {{pid}} {{[-c|--summary-only]}}`

- Show the time spent in every system call and specify the maximum string size to print:

`strace {{[-p|--attach]}} {{pid}} {{[-T|--syscall-times]}} {{[-s|--string-limit]}} {{32}}`

- Start tracing a program by executing it:

`strace {{program}}`

- Start tracing file operations of a program:

`strace -e trace=file {{program}}`

- Start tracing network operations of a program as well as all its forked and child processes, saving the output to a file:

`strace {{[-f|--follow-forks]}} -e trace=network {{[-o|--output]}} {{trace.txt}} {{program}}`
