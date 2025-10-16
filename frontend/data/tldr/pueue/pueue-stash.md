---
title: "Pueue Stash - Control Task Execution | Online Free DevTools by Hexmos"
name: pueue-stash
path: "/freedevtools/tldr/pueue/pueue-stash/"
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-stash/"
description: "Control task execution with Pueue Stash. Delay task starts, manage task queues, and streamline workflow. Free online tool, no registration required."
category: common
keywords:
- pueue stash
- pueue task management
- linux task scheduler
- command-line task control
- pueue queue manipulation
- task delaying utility
- background process management
- pueue workflow automation
- task stashing linux
- pueue task enqueueing
features:
- Delay the execution of specific tasks
- Manage task queues by stashing tasks
- Prevent tasks from starting automatically
- Stash multiple tasks simultaneously
- Integrate with pueue enqueue and start commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue stash

> Stash tasks to prevent them starting automatically.
> See also: `pueue start`, `pueue enqueue`.
> More information: <https://github.com/Nukesor/pueue>.

- Stash an enqueued task:

`pueue stash {{task_id}}`

- Stash multiple tasks at once:

`pueue stash {{task_id}} {{task_id}}`

- Start a stashed task immediately:

`pueue start {{task_id}}`

- Enqueue a task to be executed when preceding tasks finish:

`pueue enqueue {{task_id}}`
