---
title: "Git Checkout - Switch Branches and Restore Files | Online Free DevTools by Hexmos"
name: git-checkout
path: /freedevtools/tldr/git/git-checkout
canonical: "https://hexmos.com/freedevtools/tldr/git/git-checkout/"
description: "Switch Git branches effortlessly with Git Checkout. Restore files, create new branches, and discard unstaged changes with ease. Free online tool, no registration required."
category: common
keywords:
- git checkout branch
- git switch branch
- git restore file
- git discard changes
- git create branch
- git checkout remote branch
- git revert file
- git branch management
- git command line
- version control
features:
- Switch to existing branches quickly
- Create and switch to new branches efficiently
- Discard unstaged changes in the working directory
- Restore specific files to a previous state
- Switch to the previously checked out branch
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git checkout

> Checkout a branch or paths to the working tree.
> More information: <https://git-scm.com/docs/git-checkout>.

- Create and switch to a new branch:

`git checkout -b {{branch_name}}`

- Create and switch to a new branch based on a specific reference (branch, remote/branch, tag are examples of valid references):

`git checkout -b {{branch_name}} {{reference}}`

- Switch to an existing local branch:

`git checkout {{branch_name}}`

- Switch to the previously checked out branch:

`git checkout -`

- Switch to an existing remote branch:

`git checkout {{[-t|--track]}} {{remote_name}}/{{branch_name}}`

- Discard all unstaged changes in the current directory (see `git reset` for more undo-like commands):

`git checkout .`

- Discard unstaged changes to a given file:

`git checkout {{path/to/file}}`

- Replace a file in the current directory with the version of it committed in a given branch:

`git checkout {{branch_name}} -- {{path/to/file}}`
