---
title: "Pueue Restart - Control Task Execution | Online Free DevTools by Hexmos"
name: pueue-restart
path: /freedevtools/tldr/pueue/pueue-restart
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-restart/"
description: "Control task execution with Pueue Restart. Manage background processes and task queuing on your system efficiently. Free online tool, no registration required."
category: common
keywords:
- pueue task restart
- task queue management
- background process control
- process scheduler linux
- pueue restart command
- task execution control
- linux task management
- process queue restart
- command line task manager
- pueue task scheduler
features:
- Restart specific tasks by ID
- Restart multiple tasks simultaneously
- Edit tasks before restarting them
- Restart failed tasks and stash them
- Restart tasks in-place without enqueuing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue restart

> Restart tasks.
> More information: <https://github.com/Nukesor/pueue>.

- Restart a specific task:

`pueue restart {{task_id}}`

- Restart multiple tasks at once, and start them immediately (do not enqueue):

`pueue restart {{[-k|--immediately]}} {{task_id}} {{task_id}}`

- Restart a specific task from a different path:

`pueue restart --edit-path {{task_id}}`

- Edit a command before restarting:

`pueue restart {{[-e|--edit]}} {{task_id}}`

- Restart a task in-place (without enqueuing as a separate task):

`pueue restart {{[-i|--in-place]}} {{task_id}}`

- Restart all failed tasks and stash them:

`pueue restart {{[-a|--all-failed]}} --stashed`
