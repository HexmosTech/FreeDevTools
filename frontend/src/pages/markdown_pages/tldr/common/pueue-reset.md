---
title: "Pueue Reset - Kill Tasks & Clear Logs | Free DevTools"
name: pueue-reset
path: /freedevtools/tldr/common/pueue-reset
canonical: "https://hexmos.com/freedevtools/tldr/common/pueue-reset/"
description: "Reset Pueue queues instantly. Delete tasks, logs, and status with Pueue Reset. Free online tool, no registration required."
category: common
keywords:
- pueue reset command
- pueue task removal
- pueue log deletion
- queue management linux
- task scheduler reset
- command line queue clear
- linux task manager
- background process control
- pueue error recovery
- queue cleanup tool
features:
- Clears all tasks from the queue.
- Deletes all logs associated with completed tasks.
- Resets the status of the Pueue daemon.
- Forces reset without user confirmation.
- Kills child processes of tasks before resetting.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue reset

> Kill everything and reset.
> More information: <https://github.com/Nukesor/pueue>.

- Kill all tasks and remove everything (logs, status, groups, task IDs):

`pueue reset`

- Kill all tasks, terminate their children, and reset everything:

`pueue reset --children`

- Reset without asking for confirmation:

`pueue reset {{[-f|--force]}}`
