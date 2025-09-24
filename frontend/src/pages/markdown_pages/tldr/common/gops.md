---
title: "Diagnose Go Processes - Control Go Programs | Online Free DevTools by Hexmos"
name: gops
path: /freedevtools/tldr/common/gops
canonical: "https://hexmos.com/freedevtools/tldr/common/gops/"
description: "Diagnose running Go processes with gops. Inspect memory statistics, stack traces, and process trees for efficient debugging. Free online tool, no registration required."
category: common
keywords:
- Go process diagnostics
- Go program inspection
- Go memory statistics
- Go stack trace analysis
- Go process tree
- gops debugging
- Golang process monitor
- Linux process diagnosis
- MacOS process diagnosis
- Cross-platform Go tooling
features:
- List all running Go processes
- Inspect memory statistics of a Go process
- Print stack traces from a target Go program
- Display a process tree of Go processes
- Diagnose Go processes by PID or address
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gops

> List and diagnose Go processes currently running on your system.
> More information: <https://github.com/google/gops>.

- Print all go processes running locally:

`gops`

- Print more information about a process:

`gops {{pid}}`

- Display a process tree:

`gops tree`

- Print the current stack trace from a target program:

`gops stack {{pid|addr}}`

- Print the current runtime memory statistics:

`gops memstats {{pid|addr}}`
