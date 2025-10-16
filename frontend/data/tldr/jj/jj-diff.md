---
title: "Diff Tool - Compare File Revisions with jj-diff | Online Free DevTools by Hexmos"
name: jj-diff
path: "/freedevtools/tldr/jj/jj-diff/"
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-diff/"
description: "Compare file revisions easily with the jj-diff tool. Inspect differences between commits and track changes effectively. Free online tool, no registration required."
category: common
keywords:
- jj diff
- jj version control diff
- file revision comparison
- commit diff
- jj-vcs diff tool
- jj diff command
- revision control system diff
- show file changes
- git-format diff
- jj diff statistics
features:
- Compare file contents between two revisions.
- Show changes of the current revision.
- Show changes based on given revsets.
- Display diff statistics.
- Output a Git-format diff.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj diff

> Compare file contents between two revisions.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-diff>.

- Show changes of current revision:

`jj diff`

- Show changes of given revsets (e.g. `B::D`, `A..D`, `B|C|D`, etc.):

`jj diff {{[-r|--revisions]}} {{revsets}}`

- Show changes from given revision to given revision:

`jj diff {{[-f|--from]}} {{from_revset}} {{[-t|--to]}} {{to_revset}}`

- Show diff statistics:

`jj diff --stat`

- Show a Git-format diff:

`jj diff --git`
