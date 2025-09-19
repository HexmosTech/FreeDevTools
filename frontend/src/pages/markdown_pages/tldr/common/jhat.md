---
title: "JHAT Analyzer - Analyze Java Heap Dumps | Online Free DevTools by Hexmos"
name: jhat
path: /freedevtools/tldr/common/jhat
canonical: "https://hexmos.com/freedevtools/tldr/common/jhat/"
description: "Analyze Java heap dumps with JHAT analyzer. Inspect memory usage, identify leaks, and optimize performance. Free online tool, no registration required."
category: common
keywords:
- java heap analyzer
- heap dump analysis
- memory leak detection
- jhat heap analysis
- java memory analyzer
- heap dump inspector
- java heap dump tool
- JVM heap analysis
- memory usage analysis
- java profiling
features:
- Analyze Java heap dump files.
- Inspect object references and dependencies.
- Identify memory leaks.
- Generate HTML reports for easy viewing.
- Configure memory usage for large heap dumps.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jhat

> Java heap analysis tool.
> More information: <https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jhat.html>.

- Analyze a heap dump (from `jmap`), view via HTTP on port 7000:

`jhat {{dump_file.bin}}`

- Analyze a heap dump, specifying an alternate port for the HTTP server:

`jhat {{[-p|-port]}} {{port}} {{dump_file.bin}}`

- Analyze a dump letting `jhat` use up to 8 GB RAM (2-4x dump size recommended):

`jhat -J-mx8G {{dump_file.bin}}`
