---
title: "Revert Changes - Apply Revisions with jj | Free DevTools"
name: jj-revert
path: /freedevtools/tldr/jj/jj-revert
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-revert/"
description: "Apply revisions with jj-revert. Efficiently undo changesets and restore previous states in your repository. Free online tool, no registration required."
category: common
keywords:
- jj revert changes
- jj undo revisions
- jj version control revert
- jj revert commit
- jj revert changeset
- jj restore previous state
- jj history manipulation
- jj command line revert
- jj revert git
- jj-vcs revert
features:
- Revert specific revisions or ranges of revisions
- Apply reverts onto a destination revision
- Insert reverts before or after existing revisions
- Undo unwanted changes in your repository
- Manipulate repository history with precision
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj revert

> Apply the reverse of the given revision(s).
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-revert>.

- Apply the reverse of the revisions specified by the given revsets (e.g. `B::D`, `A..D`, `B|C|D`, etc.):

`jj revert {{[-r|--revisions]}} {{revsets}}`

- Apply the reverse on top of specified revisions:

`jj revert {{[-r|--revisions]}} {{revsets}} {{[-d|--destination]}} {{revsets}}`

- Apply the reverse before and/or after specified revisions:

`jj revert {{[-r|--revisions]}} {{revsets}} {{[-B|--insert-before]}} {{revsets}} {{[-A|--insert-after]}} {{revsets}}`
