---
title: "Batch Scheduler - Execute Commands Later | Online Free DevTools by Hexmos"
name: batch
path: /freedevtools/tldr/linux/batch
canonical: "https://hexmos.com/freedevtools/tldr/linux/batch/"
description: "Schedule commands with Batch, executing them when system load is low. Automate tasks and manage system resources efficiently. Free online tool, no registration required."
category: linux
keywords:
  - batch scheduler
  - command scheduler
  - linux batch processing
  - unix batch execution
  - atd daemon
  - delayed execution
  - background process scheduling
  - task scheduler command line
  - system resource management
  - execute commands later
features:
  - Schedule commands for execution during periods of low system load
  - Execute commands from standard input
  - Integrate with the system's mail system for result notification
  - Utilize the `atd` daemon for command execution
  - Defer non-critical tasks to optimize system performance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# batch

> Execute commands at a later time when the system load levels permit.
> Results will be sent to the user's mail.
> See also: `at`, `atq`, `atrm` `mail`.
> More information: <https://manned.org/batch>.

- Start the `atd` daemon:

`systemctl start atd`

- Execute commands from `stdin` (press `<Ctrl d>` when done):

`batch`

- Execute a command from `stdin`:

`echo "{{./make_db_backup.sh}}" | batch`
