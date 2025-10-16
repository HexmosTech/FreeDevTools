---
title: "Todoist - Control Tasks | Online Free DevTools by Hexmos"
name: todoist
path: "/freedevtools/tldr/common/todoist/"
canonical: "https://hexmos.com/freedevtools/tldr/common/todoist/"
description: "Control tasks with Todoist command-line tool. Easily manage projects, labels, and priorities from your terminal. Free online tool, no registration required."
category: common
keywords:
- todoist command line
- todoist cli
- task manager cli
- command line task management
- todoist linux
- todoist macos
- todoist windows
- task scheduling cli
- project management cli
- command line productivity
features:
- Add tasks with specified due dates and priorities
- Organize tasks by project and label
- List tasks with filtering options
- Manage tasks from the command line
- Quickly add tasks with natural language parsing
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# todoist

> Access <https://todoist.com> from the command-line.
> More information: <https://github.com/sachaos/todoist>.

- Add a task:

`todoist add "{{task_name}}"`

- Add a high priority task with a label, project, and due date:

`todoist add "{{task_name}}" --priority {{1}} --label-ids "{{label_id}}" --project-name "{{project_name}}" --date "{{tmr 9am}}"`

- Add a high priority task with a label, project, and due date in quick mode:

`todoist quick '#{{project_name}} "{{tmr 9am}}" p{{1}} {{task_name}} @{{label_name}}'`

- List all tasks with a header and color:

`todoist --header --color list`

- List all high priority tasks:

`todoist list --filter p{{1}}`

- List today's tasks with high priority that have the specified label:

`todoist list --filter '(@{{label_name}} | {{today}}) & p{{1}}'`
