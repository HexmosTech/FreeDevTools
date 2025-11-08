---
title: "Manage Zsh Plugins - Control Zinit Configuration | Online Free DevTools by Hexmos"
name: zinit
path: "/freedevtools/tldr/common/zinit/"
canonical: "https://hexmos.com/freedevtools/tldr/common/zinit/"
description: "Manage Zsh plugins easily with Zinit plugin manager. Install, update, and uninstall Zsh plugins to customize your shell environment. Free online tool, no registration required."
category: common
keywords:
- zsh plugin manager
- zsh plugins
- zinit plugins
- zsh package manager
- zinit configuration
- zsh completions
- zinit self-update
- shell plugin management
- terminal plugin manager
- zsh environment
features:
- Install and manage Zsh plugins
- Update Zinit to the latest version
- Manage Zsh completions for plugins
- Navigate to plugin directories easily
- List the status of installed completions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zinit

> Flexible and blazing fast `zsh` plugin manager.
> More information: <https://github.com/zdharma-continuum/zinit>.

- Show all installed plugins:

`zinit plugins`

- Go to the directory of a plugin:

`zinit cd {{repository_owner}}/{{repository_name}}`

- Fetch the newest version of `zinit` from GitHub:

`zinit self-update`

- List status of all installed completions:

`zinit completions`

- Install completions for a plugin:

`zinit creinstall {{repository_owner}}/{{repository_name}}`

- Delete completion for a plugin:

`zinit cuninstall {{repository_owner}}/{{repository_name}}`
