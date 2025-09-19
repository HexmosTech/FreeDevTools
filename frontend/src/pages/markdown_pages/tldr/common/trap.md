---
title: "Trap Command - Control Signals | Online Free DevTools by Hexmos"
name: trap
path: /freedevtools/tldr/common/trap
canonical: "https://hexmos.com/freedevtools/tldr/common/trap/"
description: "Control signals effectively with Trap Command. Execute commands upon specific events and manage signal handling. Free online tool, no registration required."
category: common
keywords:
- Signal Handling Linux
- Command Signal Trap
- Linux Trap Command
- Shell Signal Control
- Bash Trap Examples
- Execute Command on Signal
- Signal Event Handler
- POSIX Trap Command
- Script Signal Management
- Terminal Signal Intercept
features:
- Execute commands upon receiving specific signals
- Remove previously defined signal handlers
- Define custom actions for system events
- Intercept and handle interrupt signals
- Control program behavior with signal traps
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trap

> Execute a command upon an event.
> More information: <https://manned.org/trap.1posix>.

- List the commands and the names of the expected events:

`trap`

- Execute a command when a signal is received:

`trap 'echo "Caught signal {{SIGHUP}}"' {{HUP}}`

- Remove commands:

`trap - {{HUP}} {{INT}}`
