---
title: "Pueue Kill - Control Task Execution | Online Free DevTools by Hexmos"
name: pueue-kill
path: /freedevtools/tldr/pueue/pueue-kill
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-kill/"
description: "Control task execution with Pueue Kill. Manage running processes and groups, terminate child processes with ease. Free online tool, no registration required."
category: common
keywords:
- pueue task kill
- task manager linux
- process control linux
- pueue group kill
- background process manager
- linux job control
- command line task killer
- pueue terminate process
- batch job management
- background job control
features:
- Kill specific tasks by ID
- Terminate all tasks within a group
- Kill tasks and their child processes
- Pause groups after killing tasks
- Kill all tasks across all groups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue kill

> Kill running tasks or whole groups.
> More information: <https://github.com/Nukesor/pueue>.

- Kill all tasks in the default group:

`pueue kill`

- Kill a specific task:

`pueue kill {{task_id}}`

- Kill a task and terminate all its child processes:

`pueue kill --children {{task_id}}`

- Kill all tasks in a group and pause the group:

`pueue kill {{[-g|--group]}} {{group_name}}`

- Kill all tasks across all groups and pause all groups:

`pueue kill {{[-a|--all]}}`
