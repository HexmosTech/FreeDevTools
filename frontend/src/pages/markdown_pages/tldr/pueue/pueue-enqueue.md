---
title: "Pueue Enqueue - Stash Task Enqueuing | Online Free DevTools by Hexmos"
name: pueue-enqueue
path: /freedevtools/tldr/pueue/pueue-enqueue
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-enqueue/"
description: "Enqueue stashed tasks efficiently with Pueue Enqueue. Schedule task execution with delays and specific dates. Free online tool, no registration required."
category: common
keywords:
- pueue task enqueue
- stashed task enqueuing
- command line task scheduler
- pueue delay execution
- pueue task management
- linux task enqueue
- macos task enqueue
- command line task enqueuer
- scheduled task execution
- delayed task execution
features:
- Enqueue multiple stashed tasks simultaneously
- Schedule task execution with specified delays
- Enqueue tasks for specific dates and times
- Utilize various date/time formats for scheduling
- Manage task execution via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue enqueue

> Enqueue stashed tasks.
> See also: `pueue stash`.
> More information: <https://github.com/Nukesor/pueue>.

- Enqueue multiple stashed tasks at once:

`pueue enqueue {{task_id}} {{task_id}}`

- Enqueue a stashed task after 60 seconds:

`pueue enqueue {{[-d|--delay]}} {{60}} {{task_id}}`

- Enqueue a stashed task next Wednesday:

`pueue enqueue {{[-d|--delay]}} {{wednesday}} {{task_id}}`

- Enqueue a stashed task after four months:

`pueue enqueue {{[-d|--delay]}} "4 months" {{task_id}}`

- Enqueue a stashed task on 2021-02-19:

`pueue enqueue {{[-d|--delay]}} {{2021-02-19}} {{task_id}}`

- List all available date/time formats:

`pueue enqueue {{[-h|--help]}}`
