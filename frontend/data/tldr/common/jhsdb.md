---
title: "Java Debugger - Analyze Java Processes | Online Free DevTools by Hexmos"
name: jhsdb
path: "/freedevtools/tldr/common/jhsdb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jhsdb/"
description: "Analyze Java processes with jhsdb. Debug core dumps, examine JVM state, and troubleshoot issues using this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- java debugger
- java process analysis
- jvm debugger
- core dump analyzer
- java troubleshooting
- java debug server
- jhsdb command line
- java stack analysis
- deadlock detection
- postmortem debugging
features:
- Analyze the stack and locks of a running Java process.
- Debug a Java core dump in interactive mode.
- Start a remote debug server for Java applications.
- Connect to a Java process for interactive debugging.
- Examine JVM state and troubleshoot application issues.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jhsdb

> Attach to a Java process or launch a postmortem debugger to analyze the core dump from a crashed Java Virtual Machine.
> More information: <https://manned.org/jhsdb>.

- Print stack and locks information of a Java process:

`jhsdb jstack --pid {{pid}}`

- Open a core dump in interactive debug mode:

`jhsdb clhsdb --core {{path/to/core_dump}} --exe {{path/to/jdk/bin/java}}`

- Start a remote debug server:

`jhsdb debugd --pid {{pid}} --serverid {{optional_unique_id}}`

- Connect to a process in interactive debug mode:

`jhsdb clhsdb --pid {{pid}}`
