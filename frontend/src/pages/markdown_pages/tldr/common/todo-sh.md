---
title: "Todo.sh - Manage Todo Lists | Online Free DevTools by Hexmos"
name: todo.sh
path: /freedevtools/tldr/common/todo-sh
canonical: "https://hexmos-com/freedevtools/tldr/common/todo-sh/"
description: "Manage your todo lists efficiently with Todo.sh. Add, remove, and prioritize tasks using a simple shell script. Free online tool, no registration required."
category: common
keywords:
- todo list manager
- command line todo
- shell script todo
- todo.txt cli
- task management linux
- todo list macos
- todo list bash
- todo list command line
- terminal task manager
- todo.sh commands
features:
- Add tasks with project and context tags
- Mark tasks as done
- Remove tasks from the list
- Set priority levels for tasks (A-Z)
- Replace existing task descriptions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# todo.sh

> Simple and extensible shell script for managing your `todo.txt` file.
> More information: <https://github.com/todotxt/todo.txt-cli>.

- List every item:

`todo.sh ls`

- Add an item with project and context tags:

`todo.sh add '{{description}} +{{project}} @{{context}}'`

- Mark an item as [do]ne:

`todo.sh do {{item_no}}`

- Remove an item:

`todo.sh rm {{item_no}}`

- Set an item's [pri]ority (A-Z):

`todo.sh pri {{item_no}} {{priority}}`

- Replace an item:

`todo.sh replace {{item_no}} '{{new_description}}'`
