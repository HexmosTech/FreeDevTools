---
title: "Manage To-Do Lists - Control Tasks with topydo | Online Free DevTools by Hexmos"
name: topydo
path: "/freedevtools/tldr/common/topydo/"
canonical: "https://hexmos.com/freedevtools/tldr/common/topydo/"
description: "Manage your to-do lists efficiently with topydo. Control tasks, set due dates, and organize projects using todo.txt format. Free online tool, no registration required."
category: common
keywords:
- todo.txt manager
- to-do list command line
- command line task manager
- task management cli
- topydo todo list
- todo txt editor
- command line todo
- task scheduler
- project task manager
- due date reminder
features:
- Add new to-dos with project and context tags
- Schedule tasks with specific due dates
- Create repeating to-do items with flexible intervals
- Revert the last executed topydo command
- Organize tasks in the standard todo.txt format
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# topydo

> A to-do list application that uses the todo.txt format.
> More information: <https://github.com/topydo/topydo>.

- Add a to-do to a specific project with a given context:

`topydo add "{{todo_message}} +{{project_name}} @{{context_name}}"`

- Add a to-do with a due date of tomorrow with a priority of `A`:

`topydo add "(A) {{todo _message}} due:{{1d}}"`

- Add a to-do with a due date of Friday:

`topydo add "{{todo_message}} due:{{fri}}"`

- Add a non-strict repeating to-do (next due = now + rec):

`topydo add "water flowers due:{{mon}} rec:{{1w}}"`

- Add a strict repeating to-do (next due = current due + rec):

`topydo add "{{todo_message}} due:{{2020-01-01}} rec:{{+1m}}"`

- Revert the last `topydo` command executed:

`topydo revert`
