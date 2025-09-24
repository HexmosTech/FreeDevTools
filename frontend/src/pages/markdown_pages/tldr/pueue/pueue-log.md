---
title: "Pueue Log - Display Task Logs | Online Free DevTools by Hexmos"
name: pueue-log
path: /freedevtools/tldr/pueue/pueue-log
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-log/"
description: "Display task logs easily with Pueue Log. Inspect command output and debug background processes with this handy command. Free online tool, no registration required."
category: common
keywords:
- pueue log
- pueue task log
- task log viewer
- command output viewer
- background process log
- pueue command
- linux log viewer
- macos log viewer
- command-line log tool
- background task debugger
features:
- Show the last few lines of task logs
- Display the full output of a specified task
- Tail logs from multiple tasks simultaneously
- Print a specific number of lines from the end of task output
- Monitor background process execution logs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue log

> Display the log output of 1 or more tasks.
> See also: `pueue status`.
> More information: <https://github.com/Nukesor/pueue>.

- Show the last few lines of output from all tasks:

`pueue log`

- Show the full output of a task:

`pueue log {{task_id}}`

- Show the last few lines of output from several tasks:

`pueue log {{task_id}} {{task_id}}`

- Print a specific number of lines from the tail of output:

`pueue log {{[-l|--lines]}} {{number_of_lines}} {{task_id}}`
