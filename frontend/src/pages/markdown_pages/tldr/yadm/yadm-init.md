---
title: "Create Dotfile Repository - Init Yadm for Config Management | Online Free DevTools by Hexmos"
name: yadm-init
path: /freedevtools/tldr/yadm/yadm-init
canonical: "https://hexmos.com/freedevtools/tldr/yadm/yadm-init/"
description: "Create a new dotfile repository with Yadm for automated config management. Track and manage dotfiles across multiple systems. Free online tool, no registration required."
category: common
keywords:
- dotfile repository creation
- yadm configuration management
- track dotfiles linux
- manage dotfiles macos
- initialize yadm repository
- git dotfile tracking
- dotfile automation tool
- yadm home directory management
- dotfile version control
- cross platform dotfile sync
features:
- Initialize a new Git repository for dotfile management
- Override the default worktree location for the repository
- Overwrite an existing Yadm repository for a fresh start
- Track and manage dotfiles across multiple machines
- Automate dotfile deployment and synchronization
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yadm init

> Initialize a new, empty repository for tracking dotfiles.
> The repository is stored in `$HOME/.local/share/yadm/repo.git`.
> More information: <https://yadm.io/docs/getting_started>.

- Execute:

`yadm init`

- Override the worktree:

`yadm init -w {{path/to/worktree_folder}}`

- Overwrite an existing repository:

`yadm init -f {{path/to/local_repository}}`
