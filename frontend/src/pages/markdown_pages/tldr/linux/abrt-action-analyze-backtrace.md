---
title: "Analyze Backtrace - Generate Crash Reports | Free DevTools"
name: abrt-action-analyze-backtrace
path: /freedevtools/tldr/linux/abrt-action-analyze-backtrace
canonical: "https://hexmos.com/freedevtools/tldr/linux/abrt-action-analyze-backtrace/"
description: "Analyze C/C++ backtraces with abrt-action-analyze-backtrace. Generate crash reports and duplication hashes effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - C/C++ Backtrace Analyzer
  - Crash Report Generator
  - Duplication Hash Creator
  - ABRT Crash Analysis
  - Backtrace Rating Tool
  - Crash Function Identifier
  - Linux Debugging
  - Core Dump Analysis
  - Fault Analysis Tool
  - Error Reporting
features:
  - Analyze C/C++ backtraces
  - Generate duplication hashes for crash reports
  - Rate backtraces based on severity
  - Identify the function causing the crash
  - Save analysis data to a problem directory
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# abrt-action-analyze-backtrace

> Analyze C/C++ backtrace.
> Generate duplication hash, backtrace rating, and identify crash function.
> Save the data as new elements `duphash`, `rating`, `crash_function` in the problem directory.
> More information: <https://manned.org/abrt-action-analyze-backtrace>.

- Analyze backtrace for the current working directory:

`abrt-action-analyze-backtrace`

- Analyze backtrace for a specific directory:

`abrt-action-analyze-backtrace -d {{path/to/directory}}`

- Analyze backtrace verbosely:

`abrt-action-analyze-backtrace -v`
