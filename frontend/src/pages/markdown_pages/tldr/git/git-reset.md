---
title: "Git Reset - Undo Commits and Changes | Free DevTools"
name: git-reset
path: /freedevtools/tldr/common/git-reset
canonical: "https://hexmos.com/freedevtools/tldr/common/git-reset/"
description: "Undo commits with Git Reset and unstage changes efficiently. Revert to previous states, keeping or discarding changes. Free online tool, no registration required."
category: common
keywords:
- git reset commit
- git unstage changes
- git revert
- git discard changes
- git undo last commit
- git hard reset
- git soft reset
- git reset head
- git version control
- git command line
features:
- Unstage files or portions of files
- Undo the last commit while keeping changes
- Discard all uncommitted changes
- Reset to a specific commit
- Add changes to the index after undoing commits
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git reset

> Undo commits or unstage changes, by resetting the current Git HEAD to the specified state.
> If a path is passed, it works as "unstage"; if a commit hash or branch is passed, it works as "uncommit".
> More information: <https://git-scm.com/docs/git-reset>.

- Unstage everything:

`git reset`

- Unstage specific file(s):

`git reset {{path/to/file1 path/to/file2 ...}}`

- Interactively unstage portions of a file:

`git reset {{[-p|--patch]}} {{path/to/file}}`

- Undo the last commit, keeping its changes (and any further uncommitted changes) in the filesystem:

`git reset HEAD~`

- Undo the last two commits, adding their changes to the index, i.e. staged for commit:

`git reset --soft HEAD~2`

- Discard any uncommitted changes, staged or not (for only unstaged changes, use `git checkout`):

`git reset --hard`

- Reset the repository to a given commit, discarding committed, staged and uncommitted changes since then:

`git reset --hard {{commit}}`
