---
title: "Create Git Branch - Version Control | Online Free DevTools by Hexmos"
name: git-create-branch
path: /freedevtools/tldr/git/git-create-branch
canonical: "https://hexmos.com/freedevtools/tldr/git/git-create-branch/"
description: "Create Git branch quickly with git-create-branch. Simplify version control and manage your code effectively. Free online tool, no registration required."
category: common
keywords:
- git branch create
- git create branch command
- git new branch
- git branch management
- git version control
- git remote branch
- git local branch
- git upstream branch
- git command line
- git extras
features:
- Creates a local Git branch.
- Creates a branch on the origin repository.
- Creates a branch on the upstream repository.
- Simplifies Git branch creation process.
- Uses git-extras for extended functionality.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git create-branch

> Create a Git branch in a repository.
> Part of `git-extras`.
> More information: <https://manned.org/git-create-branch>.

- Create a local branch:

`git create-branch {{branch_name}}`

- Create a branch locally and on origin:

`git create-branch {{[-r|--remote]}} {{branch_name}}`

- Create a branch locally and on upstream (through forks):

`git create-branch {{[-r|--remote]}} upstream {{branch_name}}`
