---
title: "Jujutsu Control - Version Control | Online Free DevTools by Hexmos"
name: jj
path: "/freedevtools/tldr/common/jj/"
canonical: "https://hexmos.com/freedevtools/tldr/common/jj/"
description: "Control revisions with Jujutsu, a distributed version control system. Manage your project's history and collaborate effectively. Free online tool, no registration required."
category: common
keywords:
- jujutsu version control
- jj vcs
- distributed version control
- revision control system
- code management
- jj command line tool
- source code control
- version history tracking
- commit management
- branch management
features:
- Update revision descriptions using revsets
- Create new commits on top of specified revisions
- Create new merge commits from multiple revisions
- Update the working copy to a specific revision
- Undo the previous command execution
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj

> Jujutsu, a version control system.
> Some subcommands such as `log`, `desc`, `new`, `git`, etc. have their own usage documentation.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/>.

- Update description of the revisions specified by given revsets (e.g. `B::D`, `A..D`, `B|C|D`, etc.):

`jj {{[desc|describe]}} {{[-m|--message]}} "{{message}}" {{[-r|--revision]}} {{revsets}}`

- Create a new commit/revision on top of a given revision:

`jj new {{revset}}`

- Create a new merge commit on top of multiple revisions:

`jj new {{revset1 revset2 ...}}`

- Update the working copy to point to a revision:

`jj edit {{revset}}`

- Undo the previous command (which may itself have been `undo`):

`jj undo`

- Execute a jj subcommand without snapshotting the working copy:

`jj --ignore-working-copy {{subcommand}}`

- Execute a jj subcommand at an operation:

`jj {{[--at-op|--at-operation]}} {{operation}} {{subcommand}}`

- Display help for a specific subcommand (like `new`, `commit`, `desc`, etc.):

`jj help {{subcommand}}`
