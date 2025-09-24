---
title: "Pueue Send - Input To Task | Online Free DevTools by Hexmos"
name: pueue-send
path: /freedevtools/tldr/pueue/pueue-send
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-send/"
description: "Send input to a Pueue task with Pueue Send. Manage task interactions and automate processes. Free online tool, no registration required."
category: common
keywords:
- pueue task input
- send task data
- pueue command interaction
- pueue automated input
- task management linux
- pueue cli tool
- send confirmation signal
- pueue background process
- task automation linux
- pueue send command
features:
- Send data to a running task
- Provide confirmation to a task
- Interact with running processes
- Automate task interactions via CLI
- Input data to task expecting confirmation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue send

> Send input to a task.
> More information: <https://github.com/Nukesor/pueue>.

- Send input to a running command:

`pueue send {{task_id}} "{{input}}"`

- Send confirmation to a task expecting y/N (e.g. APT, cp):

`pueue send {{task_id}} {{y}}`
