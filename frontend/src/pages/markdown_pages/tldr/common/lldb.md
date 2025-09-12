---
title: "LLDB Debugger - Debug Executables | Free DevTools"
name: lldb
path: /freedevtools/tldr/unknown/lldb
canonical: "https://hexmos.com/freedevtools/tldr/unknown/lldb/"
description: "Debug executables with the LLDB debugger.  Attach to running processes, debug applications, and inspect variables using command-line interface. Free online tool, no registration required."
category: unknown
keywords:
- lldb debugger
- lldb commands
- executable debugging
- process debugging
- lldb attach
- lldb breakpoint
- llvm debugger
- low level debugger
- command line debugger
- debug applications
features:
- Debug executable files directly.
- Attach to running processes by PID.
- Attach to processes by name after launch.
- Set breakpoints and step through code.
- Inspect variables and memory during debugging.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lldb

> The LLVM Low-Level Debugger.
> More information: <https://lldb.llvm.org>.

- Debug an executable:

`lldb {{executable}}`

- Attach `lldb` to a running process with a given PID:

`lldb -p {{pid}}`

- Wait for a new process to launch with a given name, and attach to it:

`lldb -w -n {{process_name}}`
