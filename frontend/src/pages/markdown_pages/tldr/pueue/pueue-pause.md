---
title: "Pueue - Pause Tasks and Groups | Free DevTools"
name: pueue-pause
path: /freedevtools/tldr/common/pueue-pause
canonical: "https://hexmos.com/freedevtools/tldr/common/pueue-pause/"
description: "Pause tasks with Pueue and manage task execution within groups. Control task flow with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- pueue task pause
- pause pueue tasks
- pueue group pause
- task management linux
- command line task control
- pueue task control
- pueue pause command
- background process pause
- queue task pause
- terminal task manager
features:
- Pause individual Pueue tasks
- Pause all tasks in a specified group
- Prevent groups from starting new tasks
- Pause a task and its children processes
- Pause all Pueue tasks globally
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue pause

> Pause running tasks or groups.
> See also: `pueue start`.
> More information: <https://github.com/Nukesor/pueue>.

- Pause all tasks in the default group:

`pueue pause`

- Pause a running task:

`pueue pause {{task_id}}`

- Pause a running task and stop all its direct children:

`pueue pause --children {{task_id}}`

- Pause all tasks in a group and prevent it from starting new tasks:

`pueue pause {{[-g|--group]}} {{group_name}}`

- Pause all tasks and prevent all groups from starting new tasks:

`pueue pause {{[-a|--all]}}`
