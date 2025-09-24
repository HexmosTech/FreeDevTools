---
title: "JJ Absorb - Split Changes | Online Free DevTools by Hexmos"
name: jj-absorb
path: /freedevtools/tldr/jj/jj-absorb
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-absorb/"
description: "Split changes with JJ Absorb. Refactor your code effortlessly by moving changes to suitable ancestors. Free online tool, no registration required."
category: common
keywords:
- jj absorb changes
- jj version control
- jj code refactoring
- jj revision control
- jj VCS absorb
- git absorb alternative
- mercurial absorb alternative
- jj command line
- jj split changes
- jj move changes
features:
- Move changes from one revision to multiple ancestors
- Split changes automatically based on code history
- Identify suitable ancestor revisions for change migration
- Refactor code by distributing changes across revisions
- Move changes only within specified files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj absorb

> Split changes in the source revision and move each change to the closest mutable ancestor where the corresponding lines were modified last.
> Changes that have zero or multiple matching regions in ancestral revisions won't be moved.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-absorb>.

- Move all eligible and unambiguous changes from a revision to other revisions automatically:

`jj absorb {{[-f|--from]}} {{revset}} {{[-t|--into]}} {{revsets}}`

- Move only changes in given files from a revision to other revisions:

`jj absorb {{[-f|--from]}} {{revset}} {{[-t|--into]}} {{revsets}} {{filesets}}`
