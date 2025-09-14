---
title: "Py-Spy Profiler - Profile Python Code | Free DevTools"
name: py-spy
path: /freedevtools/tldr/common/py-spy
canonical: "https://hexmos.com/freedevtools/tldr/common/py-spy/"
description: "Profile Python code with Py-Spy, a powerful sampling profiler. Analyze execution time, generate flame graphs, and identify performance bottlenecks. Free online tool, no registration required."
category: common
keywords:
- python code profiler
- python sampling profiler
- python performance analysis
- py-spy profiler
- python debugging
- python flame graph generator
- python execution time analysis
- linux python profiler
- macos python profiler
- command line python profiler
features:
- Analyze Python program execution time
- Generate SVG flame graphs for performance visualization
- Dump the call stack of a running Python process
- Show a live view of functions taking the most time
- Profile Python code without modifying the source code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# py-spy

> A sampling profiler for Python programs.
> More information: <https://github.com/benfred/py-spy>.

- Show a live view of the functions that take the most execution time of a running process:

`py-spy top {{[-p|--pid]}} {{pid}}`

- Start a program and show a live view of the functions that take the most execution time:

`py-spy top -- python {{path/to/file.py}}`

- Produce an SVG flame graph of the function call execution time:

`py-spy record {{[-o|--output]}} {{path/to/profile.svg}} {{[-p|--pid]}} {{pid}}`

- Dump the call stack of a running process:

`py-spy dump {{[-p|--pid]}} {{pid}}`
