---
title: "Trace Kernel Events - Record with trace-cmd | Online Free DevTools by Hexmos"
name: trace-cmd-record
path: /freedevtools/tldr/linux/trace-cmd-record
canonical: "https://hexmos.com/freedevtools/tldr/linux/trace-cmd-record/"
description: "Record kernel trace events with trace-cmd. Capture system activities and debug performance issues on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux trace events recording
- kernel tracing commands
- trace-cmd usage
- system call tracing linux
- process tracing linux
- function tracing linux
- debug linux performance
- linux kernel analysis
- trace-cmd record executable
- trace-cmd record function
features:
- Capture kernel trace events with specified plugins
- Trace specific executable processes
- Record function-level tracing
- Exclude functions from the trace output
- Limit function call graph depth
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trace-cmd record

> Capture kernel trace events.
> See also: `trace-cmd list`, `trace-cmd report`.
> More information: <https://manned.org/trace-cmd-record>.

- Record a trace with a specific plugin:

`sudo trace-cmd record -p {{plugin}}`

- Record a trace of a specific executable:

`sudo trace-cmd record -F {{executable}}`

- Record a trace of a specific function:

`sudo trace-cmd record -g {{function}}`

- Exclude a specific function from the trace:

`sudo trace-cmd record -n {{function}}`

- Limit the function call graph depth:

`sudo trace-cmd record --max-graph-depth {{depth}}`

- Record a trace from a specific process ID:

`sudo trace-cmd record -P {{pid}}`
