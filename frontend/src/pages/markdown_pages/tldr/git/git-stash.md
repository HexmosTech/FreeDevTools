---
title: "Git Stash - Manage Local Changes | Online Free DevTools by Hexmos"
name: git-stash
path: /freedevtools/tldr/git/git-stash
canonical: "https://hexmos.com/freedevtools/tldr/git/git-stash/"
description: "Manage Git stashes with Git Stash command. Stash changes, list stashes, and apply stashes. Free online tool, no registration required."
category: common
keywords:
- git stash changes
- stash local changes git
- git temporary stash
- git stash list
- git stash apply
- git stash pop
- git stash untracked
- git stash patch
- git stash message
- git stash clear
features:
- Stash changes with a custom message.
- Include untracked files in a stash.
- Stash changes interactively using a patch.
- List and view available stashes.
- Apply or drop stashed changes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git stash

> Stash local Git changes in a temporary area.
> More information: <https://git-scm.com/docs/git-stash>.

- Stash current changes with a message, except new (untracked) files:

`git stash push {{[-m|--message]}} {{stash_message}}`

- Stash current changes, including new untracked files:

`git stash {{[-u|--include-untracked]}}`

- Interactively select parts of changed files for stashing:

`git stash {{[-p|--patch]}}`

- List all stashes (shows stash name, related branch and message):

`git stash list`

- Show the changes as a patch between the stash (default is `stash@{0}`) and the commit back when stash entry was first created:

`git stash show {{[-p|--patch]}} {{stash@{0}}}`

- Apply a stash (default is the latest, named `stash@{0}`):

`git stash apply {{optional_stash_name_or_commit}}`

- Drop or apply a stash (default is `stash@{0}`) and remove it from the stash list if applying doesn't cause conflicts:

`git stash pop {{optional_stash_name}}`

- Drop all stashes:

`git stash clear`
