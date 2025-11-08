---
title: "Split Revision - Edit History with jj-split | Online Free DevTools by Hexmos"
name: jj-split
path: "/freedevtools/tldr/jj/jj-split/"
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-split/"
description: "Edit revision history with jj-split. Divide commits, isolate changes, and restructure your project effortlessly. Free online tool, no registration required."
category: common
keywords:
- jj split revision
- split commit history
- jj version control
- edit commit history
- jj-split command
- version control split
- commit history editor
- jj reflog manipulation
- split changesets
- jj history rewriting
features:
- Interactively split a revision into two.
- Split a revision and move the second part onto specified destinations.
- Insert a split revision before or after other revisions.
- Split a revision into two parallel revisions.
- Split out specific files from a revision.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj split

> Split a revision in two.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-split>.

- Split the given revision into two interactively, putting the second revision on top of it:

`jj split {{[-r|--revision]}} {{revision}}`

- Split out matching files from the given revision:

`jj split {{[-r|--revision]}} {{revision}} {{fileset}}`

- Split the given revision, putting the second revision on top of given destination(s):

`jj split {{[-r|--revision]}} {{revision}} {{[-d|--destination]}} {{revset}}`

- Split the given revision, putting the second revision before and/or after other revision(s):

`jj split {{[-r|--revision]}} {{revision}} {{[-B|--insert-before]}} {{revset}} {{[-A|--insert-after]}} {{revset}}`

- Split the given revision into two parallel revisions:

`jj split {{[-r|--revision]}} {{revision}} {{[-p|--parallel]}}`
