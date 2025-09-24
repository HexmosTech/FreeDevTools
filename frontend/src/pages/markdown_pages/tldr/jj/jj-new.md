---
title: "JJ - Create New Change | Online Free DevTools by Hexmos"
name: jj-new
path: /freedevtools/tldr/jj/jj-new
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-new/"
description: "Create new commits and merge changes with JJ. Manage revisions and insert changes before or after specified revisions. Free online tool, no registration required."
category: common
keywords:
- jj new change
- jj commit creation
- revision management
- jj revision control
- new merge change
- jj workflow command
- jj version control
- revision history
- distributed revision control
- jj commands
features:
- Create new empty changes
- Create new changes on top of specific revisions
- Create new merge changes on top of multiple revisions
- Insert new changes before specified revisions
- Insert new changes after specified revisions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj new

> Create a new empty change.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-new>.

- Create a new empty change on top of current revision:

`jj new`

- Create a new empty change on top of specific revision:

`jj new {{revision}}`

- Create a new merge change on top of multiple revisions:

`jj new {{revset1 revset2 ...}}`

- Create a new empty change before and after specified revisions:

`jj new {{[-B|--insert-before]}} {{revsets}} {{[-A|--insert-after]}} {{revsets}}`
