---
title: "JMap - Analyze Java Memory | Online Free DevTools by Hexmos"
name: jmap
path: "/freedevtools/tldr/common/jmap/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jmap/"
description: "Analyze Java memory with JMap. Inspect heap usage, generate heap dumps for analysis, and diagnose memory leaks. Free online tool, no registration required."
category: common
keywords:
- Java memory map
- Java heap analysis
- Java memory dump
- JMap heap histogram
- Java memory leak detection
- Java process inspection
- JVM troubleshooting
- Java object mappings
- Java memory debugging
- Java performance tuning
features:
- Print shared object mappings for Java processes
- Generate heap summary information
- Display a histogram of heap usage by type
- Dump heap contents to a binary file
- Dump live objects of the heap for analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jmap

> Java memory map tool.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/jmap.html>.

- Print shared object mappings for a Java process (output like pmap):

`jmap {{java_pid}}`

- Print heap summary information:

`jmap -heap {{filename.jar}} {{java_pid}}`

- Print histogram of heap usage by type:

`jmap -histo {{java_pid}}`

- Dump contents of the heap into a binary file for analysis with jhat:

`jmap -dump:format=b,file={{path/to/file}} {{java_pid}}`

- Dump live objects of the heap into a binary file for analysis with jhat:

`jmap -dump:live,format=b,file={{path/to/file}} {{java_pid}}`
