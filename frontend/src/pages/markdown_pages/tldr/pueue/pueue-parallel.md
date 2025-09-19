---
title: "Pueue Parallel - Control Task Parallelism | Online Free DevTools by Hexmos"
name: pueue-parallel
path: /freedevtools/tldr/pueue/pueue-parallel
canonical: "https://hexmos.com/freedevtools/tldr/pueue/pueue-parallel/"
description: "Control task parallelism with Pueue Parallel. Configure the maximum number of tasks running concurrently. Free online tool, no registration required."
category: common
keywords:
- pueue parallel
- task parallelism
- concurrency control
- queue management
- parallel execution
- linux task management
- macos task management
- command-line task runner
- background task manager
- process management
features:
- Limit the number of parallel tasks in the default group
- Specify the maximum parallel tasks for a named group
- Dynamically adjust parallelism based on system resources
- Improve task execution efficiency through concurrency
- Optimize resource utilization with controlled parallelism
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pueue parallel

> Set the amount of allowed parallel tasks.
> More information: <https://github.com/Nukesor/pueue>.

- Set the maximum number of tasks allowed to run in parallel, in the default group:

`pueue parallel {{max_number_of_parallel_tasks}}`

- Set the maximum number of tasks allowed to run in parallel, in a specific group:

`pueue parallel {{[-g|--group]}} {{group_name}} {{maximum_number_of_parallel_tasks}}`
