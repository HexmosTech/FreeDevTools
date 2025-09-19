---
title: "Runlim - Control Resource Usage | Online Free DevTools by Hexmos"
name: runlim
path: /freedevtools/tldr/linux/runlim
canonical: "https://hexmos.com/freedevtools/tldr/linux/runlim/"
description: "Control process resource usage with Runlim on Linux. Sample and limit time and memory of programs and their children processes. Free online tool, no registration required."
category: linux
keywords:
- Linux resource limiter
- Runlim command
- Process resource monitor
- Linux time limiter
- Linux memory limiter
- Sample process usage
- Control process resources
- Limit program resources
- Linux command line tools
- Process usage analysis
features:
- Limit CPU time usage of processes
- Limit memory usage of processes
- Monitor CPU and memory usage
- Log resource usage statistics to a file
- Limit real-time execution of processes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# runlim

> Sample and limit time and memory usage of a program and its child processes using the proc file system on Linux.
> More information: <https://fmv.jku.at/runlim>.

- Print the time and memory usage of a command:

`runlim {{command}} {{command_arguments}}`

- Log statistics to a file instead of `stdout`:

`runlim --output-file={{path/to/file}} {{command}} {{command_arguments}}`

- Limit time to an upper bound (in seconds):

`runlim --time-limit={{number}} {{command}} {{command_arguments}}`

- Limit real-time to an upper bound (in seconds):

`runlim --real-time-limit={{number}} {{command}} {{command_arguments}}`

- Limit space to an upper bound (in MB):

`runlim --space-limit={{number}} {{command}} {{command_arguments}}`
