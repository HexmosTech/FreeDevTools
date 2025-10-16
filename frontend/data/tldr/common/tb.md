---
title: "Task Manager - Manage Tasks and Notes | Online Free DevTools by Hexmos"
name: tb
path: "/freedevtools/tldr/common/tb/"
canonical: "https://hexmos.com/freedevtools/tldr/common/tb/"
description: "Manage tasks efficiently with Task Manager. Organize notes, prioritize items, and track progress across boards using command line. Free online tool, no registration required."
category: common
keywords:
- task management command line
- note taking command line
- board management command line
- task manager linux
- task manager macos
- task manager common
- task manager windows
- command line productivity
- command line task list
- tb taskbook
features:
- Add tasks to specific boards
- Add notes to specific boards
- Edit task or note priority
- Check and uncheck tasks/notes to track progress
- Move items between boards
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tb

> Manage tasks and notes across multiple boards.
> More information: <https://github.com/klaussinani/taskbook>.

- Add a new task to a board:

`tb --task {{task_description}} @{{board_name}}`

- Add a new note to a board:

`tb --note {{note_description}} @{{board_name}}`

- Edit item's priority:

`tb --priority @{{item_id}} {{priority}}`

- Check/uncheck item:

`tb --check {{item_id}}`

- Archive all checked items:

`tb --clear`

- Move item to a board:

`tb --move @{{item_id}} {{board_name}}`
