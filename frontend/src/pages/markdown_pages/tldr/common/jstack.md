---
title: "Generate Java Stack Traces - Control Threads | Online Free DevTools by Hexmos"
name: jstack
path: /freedevtools/tldr/common/jstack
canonical: "https://hexmos.com/freedevtools/tldr/common/jstack/"
description: "Generate Java stack traces with jstack for thread analysis and debugging. Diagnose performance bottlenecks and identify deadlocks using the command line. Free online tool, no registration required."
category: common
keywords:
- java stack trace
- java thread dump
- jstack command
- java debugging
- java performance analysis
- jvm stack trace
- core dump analysis
- linux stack trace
- macos stack trace
- java thread monitor
features:
- Generate stack traces for all threads in a Java process
- Print mixed mode (Java/C++) stack traces
- Analyze stack traces from Java core dumps
- Diagnose thread deadlocks
- Monitor Java Virtual Machine (JVM) threads
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jstack

> Java stack trace tool.
> More information: <https://manned.org/jstack>.

- Print Java stack traces for all threads in a Java process:

`jstack {{java_pid}}`

- Print mixed mode (Java/C++) stack traces for all threads in a Java process:

`jstack -m {{java_pid}}`

- Print stack traces from Java core dump:

`jstack {{/usr/bin/java}} {{file.core}}`
