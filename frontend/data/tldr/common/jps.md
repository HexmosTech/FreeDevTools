---
title: "JPS - Show JVM Processes | Online Free DevTools by Hexmos"
name: jps
path: "/freedevtools/tldr/common/jps/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jps/"
description: "Show JVM processes with JPS. Display arguments, package names and JVM options. Free online tool, no registration required."
category: common
keywords:
- JVM process status
- JPS command
- Java process identifier
- List Java processes
- Java process arguments
- Java process package name
- JVM arguments display
- Show Java process ID
- Java process monitoring
- jps linux
features:
- List all JVM processes.
- Display PID of JVM processes.
- Show arguments passed to JVM processes.
- Display full package names of JVM processes.
- Show arguments passed to the JVM itself.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jps

> Show JVM process status of current user.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/jps.html>.

- List all JVM processes:

`jps`

- List all JVM processes with only PID:

`jps -q`

- Display the arguments passed to the processes:

`jps -m`

- Display the full package name of all processes:

`jps -l`

- Display the arguments passed to the JVM:

`jps -v`
