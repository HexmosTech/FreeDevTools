---
title: "Trace-cmd Report - Display Trace Events | Free DevTools"
name: trace-cmd-report
path: /freedevtools/tldr/linux/trace-cmd-report
canonical: "https://hexmos.com/freedevtools/tldr/linux/trace-cmd-report/"
description: "Display recorded trace events with trace-cmd report.  Analyze system performance and debug issues using this Linux command-line tool. Free online tool, no registration required."
category: linux
keywords:
  - linux trace analysis
  - trace-cmd report command
  - linux system tracing
  - kernel trace visualization
  - trace event display
  - linux performance debugging
  - command-line trace viewer
  - system call tracing linux
  - cpu trace analysis linux
  - trace-cmd report tutorial
features:
  - Displays recorded trace events from the kernel.
  - Allows filtering by CPU for targeted analysis.
  - Provides a textual representation of trace events.
  - Supports various trace event formats.
  - Facilitates efficient system performance debugging.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trace-cmd report

> Display recorded trace events.
> See also: `trace-cmd list`, `trace-cmd record`.
> More information: <https://manned.org/trace-cmd-report>.

- Display the recorded trace:

`sudo trace-cmd report`

- Display the recorded trace for a specific CPU:

`sudo trace-cmd report --cpu {{cpu_number}}`
