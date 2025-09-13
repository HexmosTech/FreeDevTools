---
title: "Trace-cmd - Control Linux Kernel Tracing | Free DevTools"
name: trace-cmd
path: /freedevtools/tldr/linux/trace-cmd
canonical: "https://hexmos.com/freedevtools/tldr/linux/trace-cmd/"
description: "Control Linux kernel tracing with trace-cmd. Analyze system performance and debug kernel issues with ease. Free online tool, no registration required."
category: linux
keywords:
  - linux kernel tracer
  - ftrace analysis
  - system performance monitoring
  - kernel debugging tool
  - trace event recording
  - trace-cmd command
  - linux tracing utility
  - kernel function tracing
  - system call tracing
  - dynamic tracing linux
features:
  - Start and stop kernel tracing sessions
  - Record and analyze system events
  - Display trace output in real-time
  - Clear trace buffers for new sessions
  - List available kernel tracers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trace-cmd

> Utility to interact with the Ftrace Linux kernel internal tracer.
> See also: `trace-cmd list`, `trace-cmd record`, `trace-cmd report`.
> More information: <https://manned.org/trace-cmd>.

- Display the status of tracing system:

`sudo trace-cmd stat`

- List available tracers:

`sudo trace-cmd list -t`

- Start tracing with a specific plugin:

`sudo trace-cmd start -p {{function|function_graph|preemptirqsoff|irqsoff|preemptoff|wakeup|...}}`

- View the trace output:

`sudo trace-cmd show`

- Stop the tracing but retain the buffers:

`sudo trace-cmd stop`

- Clear the trace buffers:

`sudo trace-cmd clear`

- Record a trace:

`sudo trace-cmd record`

- Display the recorded trace:

`sudo trace-cmd report`
