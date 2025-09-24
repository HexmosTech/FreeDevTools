---
title: "Pueue Follow - Monitor Task Output | Online Free DevTools by Hexmos"
name: pueue-follow
path: /freedevtools/tldr/pueue/pueue-follow
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-follow/"
description: "Monitor task output with Pueue Follow. Stream stdout and stderr of running tasks for real-time debugging. Free online tool, no registration required."
category: common
keywords:
- pueue follow task output
- pueue stream logs
- pueue real-time monitoring
- pueue command line logger
- linux task monitoring
- macos process logging
- pueue asynchronous logging
- pueue background process output
- task stdout monitoring
- task stderr monitoring
features:
- Stream stdout of a running task
- Stream stderr of a running task
- Monitor combined stdout and stderr
- Filter output by task ID
- Get immediate feedback from running processes
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pueue follow

> Follow the output of a currently running task.
> See also: `pueue log`.
> More information: <https://github.com/Nukesor/pueue>.

- Follow the output of a task (`stdout` + `stderr`):

`pueue follow {{task_id}}`

- Follow `stderr` of a task:

`pueue follow --err {{task_id}}`
