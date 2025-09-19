---
title: "Git Switch - Switch Branches | Online Free DevTools by Hexmos"
name: git-switch
path: /freedevtools/tldr/git/git-switch
canonical: "https://hexmos.com/freedevtools/tldr/git/git-switch/"
description: "Switch branches with Git Switch. Quickly navigate between different versions, create new branches, and manage changes. Free online tool, no registration required."
category: common
keywords:
- git switch command
- git branch switch
- git branch management
- git branch create
- git checkout alternative
- git previous branch
- git submodule update
- git merge branch
- git detach tag
- git command line tool
features:
- Switch between existing Git branches
- Create and switch to new branches
- Switch to previous branch quickly
- Update submodules when switching
- Merge current changes while switching
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git switch

> Switch between Git branches. Requires Git version 2.23+.
> See also: `git checkout`.
> More information: <https://git-scm.com/docs/git-switch>.

- Switch to an existing branch:

`git switch {{branch_name}}`

- Create a new branch and switch to it:

`git switch {{[-c|--create]}} {{branch_name}}`

- Create a new branch based on an existing commit and switch to it:

`git switch {{[-c|--create]}} {{branch_name}} {{commit}}`

- Switch to the previous branch:

`git switch -`

- Switch to a branch and update all submodules to match:

`git switch --recurse-submodules {{branch_name}}`

- Switch to a branch and automatically merge the current branch and any uncommitted changes into it:

`git switch {{[-m|--merge]}} {{branch_name}}`

- Switch to a tag:

`git switch {{[-d|--detach]}} {{tag}}`
