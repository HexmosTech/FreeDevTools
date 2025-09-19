---
title: "Control Git Hooks - Husky Command Manager | Online Free DevTools by Hexmos"
name: husky
path: /freedevtools/tldr/common/husky
canonical: "https://hexmos.com/freedevtools/tldr/common/husky/"
description: "Control Git hooks easily with Husky. Manage pre-commit, pre-push and other Git lifecycle events. Automate repository workflows with this free online tool, no registration required."
category: common
keywords:
- git hook manager
- husky git hooks
- git automation
- pre-commit hook
- pre-push hook
- git workflow automation
- git hooks command line
- command line git tools
- git hooks management
- git repository automation
features:
- Install Git hooks quickly and easily
- Configure custom commands for Git hooks
- Manage pre-commit and pre-push workflows
- Automate Git repository tasks
- Uninstall Git hooks with a single command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# husky

> Native Git hooks made easy.
> More information: <https://typicode.github.io/husky>.

- Install Husky in the current directory:

`husky install`

- Install Husky into a specific directory:

`husky install {{path/to/directory}}`

- Set a specific command as a `pre-push` hook for Git:

`husky set {{.husky/pre-push}} "{{command}} {{command_arguments}}"`

- Add a specific command to the current `pre-commit` hook:

`husky add {{.husky/pre-commit}} "{{command}} {{command_arguments}}"`

- Uninstall Husky hooks from the current directory:

`husky uninstall`

- Display help:

`husky`
