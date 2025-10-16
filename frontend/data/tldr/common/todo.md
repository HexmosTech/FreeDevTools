---
title: "Todo Manager - Create Todo Lists | Online Free DevTools by Hexmos"
name: todo
path: "/freedevtools/tldr/common/todo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/todo/"
description: "Create tasks with Todo Manager, a simple command-line todo list application. Manage tasks, set due dates, and organize projects efficiently. Free online tool, no registration required."
category: common
keywords:
- todo manager cli
- command line todo
- task management linux
- todo list manager
- todo app common
- todo cli
- todo list common
- todo manager macos
- todo task manager
- todo list linux
features:
- Add new tasks to various lists
- Mark tasks as completed with a single command
- Delete tasks by their unique IDs
- Show details about a specific task
- Flush completed tasks and reset task IDs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# todo

> A simple, standards-based, cli todo manager.
> More information: <https://todoman.readthedocs.io>.

- List startable tasks:

`todo list --startable`

- Add a new task to the work list:

`todo new {{thing_to_do}} --list {{work}}`

- Add a location to a task with a given ID:

`todo edit --location {{location_name}} {{task_id}}`

- Show details about a task:

`todo show {{task_id}}`

- Mark tasks with the specified IDs as completed:

`todo done {{task_id1 task_id2 ...}}`

- Delete a task:

`todo delete {{task_id}}`

- Delete done tasks and reset the IDs of the remaining tasks:

`todo flush`
