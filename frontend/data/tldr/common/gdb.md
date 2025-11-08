---
title: "Debug with GDB - Debug Executables | Online Free DevTools by Hexmos"
name: gdb
path: "/freedevtools/tldr/common/gdb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/gdb/"
description: "Debug executables with GDB, the GNU Debugger. Analyze core dumps and control execution flow for effective troubleshooting. Free online tool, no registration required."
category: common
keywords:
- gdb debugger
- gnu debugger
- executable debugger
- core dump analysis
- process debugging
- linux debugger
- gdb commands
- program debugging
- c++ debugger
- memory debugging
features:
- Debug executable files.
- Attach to running processes.
- Analyze core dump files.
- Execute GDB commands on startup.
- Pass arguments to the debugged executable.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gdb

> The GNU Debugger.
> More information: <https://sourceware.org/gdb/current/onlinedocs/gdb#Invocation>.

- Debug an executable:

`gdb {{executable}}`

- Attach a process to gdb:

`gdb {{[-p|--pid]}} {{procID}}`

- Debug with a core file:

`gdb {{[-c|--core]}} {{core}} {{executable}}`

- Execute given GDB commands upon start:

`gdb {{[-ex|--eval-command]}} "{{commands}}" {{executable}}`

- Start `gdb` and pass arguments to the executable:

`gdb --args {{executable}} {{argument1}} {{argument2}}`

- Skip debuginfod and pagination prompts and then print the backtrace:

`gdb {{[-c|--core]}} {{core}} {{executable}} -iex 'set debuginfod enabled on' -iex 'set pagination off' -ex bt`
