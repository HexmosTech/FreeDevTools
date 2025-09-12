---
title: "Restore Git Files - Undo Changes | Free DevTools"
name: git-restore
path: /freedevtools/tldr/common/git-restore
canonical: "https://hexmos.com/freedevtools/tldr/common/git-restore/"
description: "Undo git changes with Git Restore command. Recover files, unstage modifications, and discard changes quickly. Free online tool, no registration required."
category: common
keywords:
- git restore file
- git restore unstaged changes
- git restore commit version
- git unstage file
- git discard changes
- git version control
- git command line
- git repository
- git file recovery
- git source control
features:
- Restore unstaged files to staged versions
- Restore files to a specific commit version
- Discard all unstaged changes in tracked files
- Unstage files easily
- Interactively select file sections to restore
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git restore

> Restore working tree files. Requires Git version 2.23+.
> See also: `git checkout`, `git reset`.
> More information: <https://git-scm.com/docs/git-restore>.

- Restore an unstaged file to the staged version:

`git restore {{path/to/file}}`

- Restore an unstaged file to the version of a specific commit:

`git restore {{[-s|--source]}} {{commit}} {{path/to/file}}`

- Discard all unstaged changes to tracked files:

`git restore :/`

- Unstage a file:

`git restore {{[-S|--staged]}} {{path/to/file}}`

- Unstage all files:

`git restore {{[-S|--staged]}} :/`

- Discard all changes to files, both staged and unstaged:

`git restore {{[-W|--worktree]}} {{[-S|--staged]}} :/`

- Interactively select sections of files to restore:

`git restore {{[-p|--patch]}}`
