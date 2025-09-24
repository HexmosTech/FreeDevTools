---
title: "Create Git Worktrees - Manage Branches | Online Free DevTools by Hexmos"
name: git-worktree
path: /freedevtools/tldr/git/git-worktree
canonical: "https://hexmos.com/freedevtools/tldr/git/git-worktree/"
description: "Create Git worktrees to manage multiple branches simultaneously. Easily switch between different versions without committing. Free online tool, no registration required."
category: common
keywords:
- git worktree manager
- git multiple branches
- git branch switcher
- git context switching
- git parallel development
- git code isolation
- git detached worktree
- git development workflow
- git repository manager
- git command line tools
features:
- Create new worktrees from existing branches
- Create new branches directly in a worktree
- List all active worktrees for a repository
- Remove obsolete worktrees efficiently
- Manage multiple branches concurrently
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git worktree

> Manage multiple working trees attached to the same repository.
> More information: <https://git-scm.com/docs/git-worktree>.

- Create a new directory with the specified branch checked out into it:

`git worktree add {{path/to/directory}} {{branch}}`

- Create a new directory with a new branch checked out into it:

`git worktree add {{path/to/directory}} -b {{new_branch}}`

- List all the working directories attached to this repository:

`git worktree list`

- Remove a worktree (after deleting worktree directory):

`git worktree prune`
