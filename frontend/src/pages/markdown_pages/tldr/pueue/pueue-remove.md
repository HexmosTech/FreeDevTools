---
title: "Pueue Remove - Control Task Removal | Free DevTools"
name: pueue-remove
path: /freedevtools/tldr/pueue/pueue-remove
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-remove/"
description: "Control task removal with Pueue Remove. Manage your background tasks by removing completed or killed jobs. Free online tool, no registration required."
category: common
keywords:
- pueue task remove
- background task management
- queue removal
- task deletion
- pueue command line tool
- linux task manager
- macos task manager
- windows task manager
- process management
- task automation
features:
- Remove completed tasks from the queue
- Remove killed tasks from the queue
- Remove multiple tasks at once
- Clear individual task histories
- Simplify task queue maintenance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue remove

> Remove tasks from the list. Running or paused tasks need to be killed first.
> More information: <https://github.com/Nukesor/pueue>.

- Remove a killed or finished task:

`pueue remove {{task_id}}`

- Remove multiple tasks at once:

`pueue remove {{task_id}} {{task_id}}`
