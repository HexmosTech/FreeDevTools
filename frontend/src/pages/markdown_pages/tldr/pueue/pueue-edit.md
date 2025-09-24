---
title: "Pueue Edit - Modify Queued Tasks | Online Free DevTools by Hexmos"
name: pueue-edit
path: /freedevtools/tldr/pueue/pueue-edit
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-edit/"
description: "Modify queued tasks with Pueue Edit, a task management tool. Edit commands, paths, and configurations easily. Free online tool, no registration required."
category: common
keywords:
- task management
- queue editor
- pueue command
- pueue edit task
- command line task manager
- linux task queue
- macos task queue
- edit queued command
- modify task path
- pueue configuration
features:
- Edit command of queued tasks
- Modify execution path of tasks
- Change task configuration via editor
- Update stashed task parameters
- Configure task execution environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue edit

> Edit the command or path of a stashed or queued task.
> More information: <https://github.com/Nukesor/pueue>.

- Edit a task, see `pueue status` to get the task ID:

`pueue edit {{task_id}}`

- Edit the path from which a task is executed:

`pueue edit {{task_id}} --path`

- Edit a command with the specified editor:

`EDITOR={{nano}} pueue edit {{task_id}}`
