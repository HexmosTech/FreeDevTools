---
title: "Create Terminal TODO Lists - clido | Online Free DevTools by Hexmos"
name: clido
path: "/freedevtools/tldr/common/clido/"
canonical: "https://hexmos.com/freedevtools/tldr/common/clido/"
description: "Create save-state TODO lists with clido, a terminal task management tool. Manage lists, toggle autowrite, and open in text editor. Free online tool, no registration required."
category: common
keywords:
- terminal todo list manager
- command line task manager
- clido todo app
- save state todo app
- linux terminal todo
- macos terminal todo
- todo list cli
- terminal productivity tool
- task list command line
- clido command reference
features:
- Create and manage multiple todo lists from the terminal
- Load and delete existing todo lists
- Toggle automatic saving of todo list changes
- Open and edit todo lists in a text editor
- Display help and version information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clido

> Save-state TODO app for the terminal.
> More information: <https://codeberg.org/Oglo12/clido/wiki>.

- Create a list:

`clido --new {{name}}`

- Load a list:

`clido --load {{name}}`

- Delete a list:

`clido --remove {{name}}`

- List all lists:

`clido --lists`

- Toggle autowrite:

`clido toggle-autowrite`

- Open a list in a text editor:

`clido edit {{text_editor}}`

- Display help:

`clido -h`

- Display version:

`clido -v`
