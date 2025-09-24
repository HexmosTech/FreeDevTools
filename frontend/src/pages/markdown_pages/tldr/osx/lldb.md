---
title: "Debug Programs - Control LLDB with Command Line | Online Free DevTools by Hexmos"
name: lldb
path: /freedevtools/tldr/osx/lldb
canonical: "https://hexmos.com/freedevtools/tldr/osx/lldb/"
description: "Debug programs efficiently with LLDB, the Low-Level Debugger. Attach to running processes and control execution flow on macOS. Free online tool, no registration required."
category: osx
keywords:
- program debugger
- command line debugger
- lldb debugger
- osx debugger
- macos debugger
- llvm debugger
- executable debugger
- process debugger
- attach process debugger
- breakpoint debugger
features:
- Debug executables directly from the command line
- Attach to running processes by PID
- Wait and attach to newly launched processes by name
- Set breakpoints and inspect variables
- Control program execution step-by-step
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lldb

> The LLVM Low-Level Debugger.
> More information: <https://lldb.llvm.org/man/lldb.html>.

- Debug an executable:

`lldb "{{executable}}"`

- Attach `lldb` to a running process with a given PID:

`lldb -p {{pid}}`

- Wait for a new process to launch with a given name, and attach to it:

`lldb -w -n "{{process_name}}"`
