---
title: "DTrace - Trace System Events | Free DevTools"
name: dtrace
path: /freedevtools/tldr/osx/dtrace
canonical: "https://hexmos.com/freedevtools/tldr/osx/dtrace/"
description: "Trace system events with DTrace. Analyze kernel activity, debug applications, and monitor performance on macOS. Free online tool, no registration required."
category: osx
keywords:
- DTrace tracing
- macOS tracing tools
- System event tracing
- Kernel activity analysis
- Application debugging macOS
- Performance monitoring DTrace
- D language compiler
- Dynamic tracing tool
- DTrace command line
- macOS performance analysis
features:
- Trace function execution in processes
- Compile and execute DTrace scripts
- Analyze kernel activity in real-time
- Set custom trace buffer sizes
- Monitor specific system events
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dtrace

> A simple interface to invoke the D language compiler, retrieve buffered trace, and print traced data from the DTrace kernel facility.
> Generic front-end to DTrace facility, requiring root privileges.
> More information: <https://keith.github.io/xcode-man-pages/dtrace.1.html>.

- Set target data model for a specific architecture:

`dtrace -arch {{arch_name}}`

- Claim [a]nonymous tracing state and display the traced data:

`dtrace -a`

- Set principal trace buffer size. Supported units are `k`, `m`, `g`, or `t`:

`dtrace -b {{2g}}`

- Compile the specified D Program [s]ource file:

`dtrace -s {{D_script}}`

- Run the specified [c]ommand and exit upon its completion:

`dtrace -c {{command}}`

- Specify [f]unction name to trace or list (-l option). The corresponding argument can include any of the probe description forms like `provider:module:function`, `module:function` or `function`:

`dtrace -f {{function}}`

- Grad the specified [p]rocess ID, cache its symbol table, and exit upon completion:

`dtrace -p {{pid}}`

- Combine different options for tracing function in a process:

`dtrace -a -b {{buffer_size}} -f {{function}} -p {{pid}}`
