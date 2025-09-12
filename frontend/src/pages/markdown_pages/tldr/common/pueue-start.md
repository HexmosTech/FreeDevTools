---
title: "Pueue Start - Resume Tasks | Free DevTools"
name: pueue-start
path: /freedevtools/tldr/common/pueue-start
canonical: "https://hexmos.com/freedevtools/tldr/common/pueue-start/"
description: "Resume tasks with Pueue. Manage task execution and control task groups efficiently. Free online tool, no registration required."
category: common
keywords:
- pueue task start
- resume pueue tasks
- pueue command line
- pueue task management
- linux task scheduler
- macos task scheduler
- command line task manager
- pueue task groups
- pueue workflow automation
- background process manager
features:
- Resume all tasks in the default group.
- Resume a specific task by ID.
- Resume multiple tasks simultaneously.
- Resume all tasks in a specific group.
- Start resumed tasks and their children.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue start

> Resume operation of tasks or groups of tasks.
> See also: `pueue pause`.
> More information: <https://github.com/Nukesor/pueue>.

- Resume all tasks in the default group:

`pueue start`

- Resume a specific task:

`pueue start {{task_id}}`

- Resume multiple tasks at once:

`pueue start {{task_id}} {{task_id}}`

- Resume all tasks and start their children:

`pueue start {{[-a|--all]}} --children`

- Resume all tasks in a specific group:

`pueue start group {{group_name}}`
