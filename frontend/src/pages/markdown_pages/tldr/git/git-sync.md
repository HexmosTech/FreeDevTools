---
title: "Git Sync - Sync Local Branches | Free DevTools"
name: git-sync
path: /freedevtools/tldr/git/git-sync
canonical: "https://hexmos.com/freedevtools/tldr/git/git-sync/"
description: "Sync local Git branches with remote branches using Git Sync. Streamline your workflow and keep your repositories up-to-date. Free online tool, no registration required."
category: common
keywords:
- git sync
- git branch sync
- git remote sync
- git local branch
- git remote branch
- git upstream
- git merge
- git pull
- command line git
- git workflow
features:
- Synchronizes the current local branch with its remote counterpart
- Allows specifying a different remote branch for synchronization
- Cleans untracked files during synchronization
- Simplifies the process of updating local branches
- Provides a convenient wrapper around common git commands
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git sync

> Sync local branches with remote branches.
> Part of `git-extras`.
> More information: <https://manned.org/git-sync>.

- Sync the current local branch with its remote branch:

`git sync`

- Sync the current local branch with the remote main branch:

`git sync origin main`

- Sync without cleaning untracked files:

`git sync {{[-s|--soft]}} {{remote_name}} {{branch_name}}`
