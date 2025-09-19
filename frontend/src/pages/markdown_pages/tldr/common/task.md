---
title: "Manage Tasks - To-Do List Manager | Online Free DevTools by Hexmos"
name: task
path: /freedevtools/tldr/common/task
canonical: "https://hexmos.com/freedevtools/tldr/common/task/"
description: "Manage your to-do list with Task, the command-line task manager. Schedule tasks, set priorities, and track progress efficiently. Free online tool, no registration required."
category: common
keywords:
- command line task manager
- to-do list manager
- taskwarrior command
- task management tool
- linux task manager
- macos task manager
- schedule tasks command line
- priority management command line
- burndown chart command line
- task tracking command line
features:
- Add new tasks with due dates
- Modify task priorities and details
- Mark tasks as completed
- Delete unwanted tasks
- List and filter tasks by due date
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# task

> To-do list manager.
> More information: <https://taskwarrior.org/docs/>.

- Add a new task which is due tomorrow:

`task add {{description}} due:{{tomorrow}}`

- Update a task's priority:

`task {{task_id}} modify priority:{{H|M|L}}`

- Complete a task:

`task {{task_id}} done`

- Delete a task:

`task {{task_id}} delete`

- List all open tasks:

`task list`

- List open tasks due before the end of the week:

`task list due.before:{{eow}}`

- Show a graphical burndown chart, by day:

`task burndown.daily`

- List all reports:

`task reports`
