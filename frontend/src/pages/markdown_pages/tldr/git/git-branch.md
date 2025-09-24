---
title: "Git Branch - Manage Branches in Git | Online Free DevTools by Hexmos"
name: git-branch
path: /freedevtools/tldr/git/git-branch
canonical: "https://hexmos.com/freedevtools/tldr/git/git-branch/"
description: "Manage Git branches efficiently with Git Branch command. Create, rename, delete and list branches locally and remotely. Free online tool, no registration required."
category: common
keywords:
- git branch management
- git remote branch
- create git branch
- delete git branch
- rename git branch
- list git branches
- git branch contains
- git current branch
- git branch commands
- git command line
features:
- List local and remote Git branches
- Create new Git branches from commits
- Rename existing Git branches
- Delete local and remote Git branches
- Show the current active Git branch
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git branch

> Main Git command for working with branches.
> More information: <https://git-scm.com/docs/git-branch>.

- List all branches (local and remote; the current branch is highlighted by `*`):

`git branch {{[-a|--all]}}`

- List which branches include a specific Git commit in their history:

`git branch {{[-a|--all]}} --contains {{commit_hash}}`

- Show the name of the current branch:

`git branch --show-current`

- Create new branch based on the current commit:

`git branch {{branch_name}}`

- Create new branch based on a specific commit:

`git branch {{branch_name}} {{commit_hash}}`

- Rename a branch (you must switch to a different branch before doing this):

`git branch {{[-m|--move]}} {{old_branch_name}} {{new_branch_name}}`

- Delete a local branch (you must switch to a different branch before doing this):

`git branch {{[-d|--delete]}} {{branch_name}}`

- Delete a remote branch:

`git push {{remote_name}} {{[-d|--delete]}} {{remote_branch_name}}`
