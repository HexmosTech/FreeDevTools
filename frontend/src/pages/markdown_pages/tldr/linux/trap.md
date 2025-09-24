---
title: "Control Signal Trapping - Execute Commands on Events | Online Free DevTools by Hexmos"
name: trap
path: /freedevtools/tldr/linux/trap
canonical: "https://hexmos.com/freedevtools/tldr/linux/trap/"
description: "Control Signal Trapping with the Trap command. Manage process signals and execute specific commands on different events. Free online tool, no registration required."
category: linux
keywords:
  - Signal Trapping
  - Trap Command
  - Event Handling
  - Process Signal Management
  - Bash Trap
  - Shell Scripting
  - Signal Intercepting
  - Linux Signal Handling
  - Command Execution on Signal
  - SIGHUP Handler
features:
  - Execute commands upon receiving specific signals
  - List available event names for signal trapping
  - Remove commands associated with signals
  - Ignore specific signals to prevent interruption
  - Define custom signal handlers in shell scripts
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# trap

> Execute a command upon an event.
> More information: <https://www.gnu.org/software/bash/manual/bash.html#index-trap>.

- List the available event names (e.g. `SIGWINCH`):

`trap -l`

- List the commands and the names of the expected events:

`trap`

- Execute a command when a signal is received:

`trap 'echo "Caught signal {{SIGHUP}}"' {{SIGHUP}}`

- Remove commands:

`trap - {{SIGHUP}} {{SIGINT}}`

- Ignore a signal:

`trap '' {{SIGINT}}`
