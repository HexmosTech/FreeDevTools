---
title: "JJ Squash - Combine Changes Effortlessly | Online Free DevTools by Hexmos"
name: jj-squash
path: /freedevtools/tldr/jj/jj-squash
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-squash/"
description: "Combine changes effortlessly with JJ Squash. Merge revisions, resolve conflicts, and improve commit history using this powerful command. Free online tool, no registration required."
category: common
keywords:
- jj squash command
- jj revision squash
- jj commit merging
- jj history editing
- jj changelog manipulation
- jj interactive squash
- jj version control squash
- jj command line squash
- jj revision management
- jj commit optimization
features:
- Squash changes from one revision into another
- Interactively select changes to squash
- Combine multiple revisions into a single revision
- Edit commit history to improve clarity
- Merge changes and resolve conflicts during squash
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj squash

> Move changes from a revision into another revision.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-squash>.

- Move all changes from current revision to its parent:

`jj squash`

- Move all changes from given revision to its parent:

`jj squash {{[-r|--revision]}} {{revset}}`

- Move all changes from given revision(s) to given other revision:

`jj squash {{[-f|--from]}} {{revsets}} {{[-t|--into]}} {{revset}}`

- Interactively choose which parts to squash:

`jj squash {{[-i|--interactive]}}`
