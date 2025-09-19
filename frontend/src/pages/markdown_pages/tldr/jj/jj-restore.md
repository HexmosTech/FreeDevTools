---
title: "Restore Files - Restore JJ Files from Revisions | Online Free DevTools by Hexmos"
name: jj-restore
path: /freedevtools/tldr/jj/jj-restore
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-restore/"
description: "Restore JJ files with JJ Restore. Recover previous versions of files, revert changes and interactively restore parts of revisions. Free online tool, no registration required."
category: common
keywords:
- jj restore files
- jj version control restore
- jj revision restore
- jj recover files
- jj undo changes
- jj interactive restore
- jj file recovery
- jj command line restore
- jj revert revision
- jj repository restore
features:
- Restore files from a specific revision.
- Undo changes in a specific revision.
- Interactively choose parts of revisions to restore.
- Restore files into another revision.
- Revert files to a merge of its parents.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj restore

> Restore files from another revision.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-restore>.

- Restore files from a revision into another revision:

`jj restore {{[-f|--from]}} {{revset}} {{[-t|--into]}} {{revset}} {{filesets}}`

- Undo the changes in a revision as compared to the merge of its parents:

`jj restore {{[-c|--changes-in]}} {{revset}} {{filesets}}`

- Interactively choose what parts to restore:

`jj restore {{[-f|--from]}} {{revset}} {{[-t|--into]}} {{revset}} {{[-i|--interactive]}}`
