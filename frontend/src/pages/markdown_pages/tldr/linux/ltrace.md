---
title: "ltrace - Trace Library Calls | Online Free DevTools by Hexmos"
name: ltrace
path: /freedevtools/tldr/linux/ltrace
canonical: "https://hexmos.com/freedevtools/tldr/linux/ltrace/"
description: "Trace library calls with ltrace, a powerful command-line tool for debugging and analyzing program behavior.  Analyze dynamic library calls easily. Free online tool, no registration required."
category: linux
keywords:
  - library call tracing
  - ltrace command
  - linux system call tracing
  - dynamic library analysis
  - program debugging linux
  - process tracing linux
  - system call monitor
  - library function tracing
  - linux command line tools
  - debugging tools linux
features:
  - Display dynamic library calls made by a process.
  - Count the frequency of library calls for performance analysis.
  - Filter library calls to focus on specific functions or libraries.
  - Redirect output to a file for later analysis.
  - Analyze malloc and free calls separately to detect memory leaks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ltrace

> Display dynamic library calls of a process.
> More information: <https://manned.org/ltrace>.

- Print (trace) library calls of a program binary:

`ltrace ./{{program}}`

- Count library calls. Print a handy summary at the bottom:

`ltrace -c {{path/to/program}}`

- Trace calls to malloc and free, omit those done by libc:

`ltrace -e malloc+free-@libc.so* {{path/to/program}}`

- Write to file instead of terminal:

`ltrace {{[-o|--output]}} {{file}} {{path/to/program}}`
