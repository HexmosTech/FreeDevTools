---
title: "Perf - Analyze Linux Performance | Online Free DevTools by Hexmos"
name: perf
path: /freedevtools/tldr/linux/perf
canonical: "https://hexmos.com/freedevtools/tldr/linux/perf/"
description: "Analyze Linux performance with perf, a powerful command-line profiling tool. Collect metrics, diagnose bottlenecks, and optimize your applications. Free online tool, no registration required."
category: linux
keywords:
  - linux performance analysis
  - perf profiling
  - system performance monitoring
  - cpu performance analysis
  - kernel performance analysis
  - perf stat linux
  - perf record linux
  - perf report linux
  - linux performance counters
  - command-line profiler
features:
  - Display basic performance counter statistics for a command
  - Generate system-wide real-time performance counter profiles
  - Record command profiles for offline analysis
  - Record profiles of existing processes by PID
  - Report and analyze recorded performance data
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# perf

> Framework for Linux performance counter measurements.
> More information: <https://perf.wiki.kernel.org>.

- Display basic performance counter stats for a command:

`perf stat {{gcc hello.c}}`

- Display system-wide real-time performance counter profile:

`sudo perf top`

- Run a command and record its profile into `perf.data`:

`sudo perf record {{command}}`

- Record the profile of an existing process into `perf.data`:

`sudo perf record {{[-p|--pid]}} {{pid}}`

- Read `perf.data` (created by `perf record`) and display the profile:

`sudo perf report`
