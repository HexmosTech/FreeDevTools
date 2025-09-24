---
title: "Control Mercurial Status - Track Changes | Online Free DevTools by Hexmos"
name: hg-status
path: /freedevtools/tldr/hg/hg-status
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-status/"
description: "Control Mercurial status efficiently with hg-status. Track file changes, identify modified files, and manage revisions easily. Free online tool, no registration required."
category: common
keywords:
- Mercurial status control
- HG version control status
- File change tracker
- Repository status manager
- Modified file checker
- Mercurial revision inspector
- Command line status tool
- HG exclude pattern
- HG include pattern
- Mercurial status command
features:
- Track changes in the working directory
- Identify modified, added, and removed files
- Compare changes against specific revisions
- Include or exclude files based on glob patterns
- Display status for deleted (but tracked) files
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hg status

> Show files that have changed in the working directory.
> More information: <https://www.mercurial-scm.org/help/commands/status>.

- Display the status of changed files:

`hg status`

- Display only modified files:

`hg status {{[-m|--modified]}}`

- Display only added files:

`hg status {{[-a|--added]}}`

- Display only removed files:

`hg status {{[-r|--removed]}}`

- Display only deleted (but tracked) files:

`hg status {{[-d|--deleted]}}`

- Display changes in the working directory compared to a specified changeset:

`hg status --rev {{revision}}`

- Display only files matching a specified glob pattern:

`hg status {{[-I|--include]}} {{pattern}}`

- Display files, excluding those that match a specified glob pattern:

`hg status {{[-X|--exclude]}} {{pattern}}`
