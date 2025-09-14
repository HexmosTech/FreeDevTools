---
title: "JJ Operation - Control Repository History | Free DevTools"
name: jj-operation
path: /freedevtools/tldr/jj/jj-operation
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-operation/"
description: "Control repository history with JJ Operation. Revert, restore, and examine changesets effortlessly using command line. Free online tool, no registration required."
category: common
keywords:
- jj operation log
- jj undo operation
- jj restore operation
- jj show operation
- jj repository history
- version control system
- operation log analysis
- repository state management
- changeset examination
- jj vcs commands
features:
- Show the complete operation log of a JJ repository
- Undo the last repository operation instantly
- Restore the repository to a specific state at a given operation
- Examine changes made during an operation with diffs
- Display operation stats, summary, and patches
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj operation

> Work with the operation log of a `jj` repository.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-operation>.

- Show operation log:

`jj {{[op|operation]}} log`

- Undo the last operation:

`jj {{[op|operation]}} undo`

- Undo a given operation:

`jj {{[op|operation]}} undo {{operation}}`

- Restore the repository to its state at a given operation:

`jj {{[op|operation]}} restore {{operation}}`

- Show changes to the repository in an operation:

`jj {{[op|operation]}} show {{operation}}`

- Show stat, summary and patch of modifications of an operation:

`jj {{[op|operation]}} show {{--stat}} {{[-s|--summary]}} {{[-p|--patch]}} {{operation}}`
