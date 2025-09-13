---
title: "Control Git Repositories - Lazygit Terminal UI | Free DevTools"
name: lazygit
path: /freedevtools/tldr/common/lazygit
canonical: "https://hexmos.com/freedevtools/tldr/common/lazygit/"
description: "Control Git repositories efficiently with Lazygit. Manage branches, commits, and merges directly from your terminal with this intuitive UI. Free online tool, no registration required."
category: common
keywords:
- git terminal UI
- git command line tool
- lazygit git manager
- git repository manager
- git branch control
- git commit history viewer
- git stash manager
- git merge conflict resolver
- terminal git client
- cross-platform git tool
features:
- Manage Git repositories from the terminal
- Visualize branch status and commit history
- Stash and apply changes with ease
- Resolve merge conflicts interactively
- Navigate and control Git workflow efficiently
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lazygit

> A simple terminal UI for Git commands, providing an intuitive interface for managing repositories.
> More information: <https://github.com/jesseduffield/lazygit>.

- Open Lazygit in the current repository:

`lazygit`

- Open Lazygit for a specific Git repository:

`lazygit --path {{path/to/repository}}`

- Start Lazygit with focus on a specific panel:

`lazygit {{status|branch|log|stash|...}}`

- Print the default Lazygit configuration:

`lazygit --config`

- Tail the Lazygit logs (useful with debug mode in another terminal):

`lazygit --logs`

- Run Lazygit in debug mode:

`lazygit --debug`

- Print the configuration directory:

`lazygit --print-config-dir`
