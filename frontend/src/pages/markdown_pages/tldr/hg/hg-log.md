---
title: "Hg Log - Display Repository History | Online Free DevTools by Hexmos"
name: hg-log
path: /freedevtools/tldr/hg/hg-log
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-log/"
description: "Display repository history with Hg Log. Review commit logs, view diffs, and analyze code changes efficiently. Free online tool, no registration required."
category: common
keywords:
- hg log command
- mercurial log
- repository history
- revision history
- hg branch log
- hg commit log
- version control log
- hg log graph
- mercurial log filter
- hg log by date
features:
- Display the entire Mercurial revision history.
- Visualize history with an ASCII graph.
- Filter revisions based on file name patterns.
- Show revisions for a specific branch.
- Display revisions by date or user.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg log

> Display the revision history of the repository.
> More information: <https://www.mercurial-scm.org/help/commands/log>.

- Display the entire revision history of the repository:

`hg log`

- Display the revision history with an ASCII graph:

`hg log {{[-G|--graph]}}`

- Display the revision history with file names matching a specified pattern:

`hg log {{[-I|--include]}} {{pattern}}`

- Display the revision history, excluding file names that match a specified pattern:

`hg log {{[-X|--exclude]}} {{pattern}}`

- Display the log information for a specific revision:

`hg log {{[-r|--rev]}} {{revision}}`

- Display the revision history for a specific branch:

`hg log {{[-b|--branch]}} {{branch}}`

- Display the revision history for a specific date:

`hg log {{[-d|--date]}} {{date}}`

- Display revisions committed by a specific user:

`hg log {{[-u|--user]}} {{user}}`
