---
title: "Time Command - Measure Execution Time | Online Free DevTools by Hexmos"
name: time
path: "/freedevtools/tldr/common/time"
canonical: "https://hexmos.com/freedevtools/tldr/common/time/"
description: "Measure execution time with the Time command, a powerful system resource monitor. Analyze command performance and optimize scripts. Free online tool, no registration required."
category: common
keywords:
- command execution time
- linux time command
- macos time command
- bash time execution
- shell command duration
- process timing analysis
- system resource monitor
- command performance metrics
- elapsed time measurement
- script optimization timing
features:
- Measure the execution time of any command
- Print time measurements to standard output
- Analyze system resource usage during execution
- Create a simple stopwatch within Bash
- Track user, system, and real-time durations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# time

> Measure how long a command took to run.
> Note: `time` can either exist as a shell builtin, a standalone program or both.
> See also: `times`.
> More information: <https://manned.org/time>.

- Run the `command` and print the time measurements to `stdout`:

`time {{command}}`

- Create a very simple stopwatch (only works in Bash):

`time read`
