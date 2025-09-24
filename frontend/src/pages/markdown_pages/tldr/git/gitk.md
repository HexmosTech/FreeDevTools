---
title: "Git Browser - Browse Git Repos Graphically | Online Free DevTools by Hexmos"
name: gitk
path: /freedevtools/tldr/git/gitk
canonical: "https://hexmos.com/freedevtools/tldr/git/gitk/"
description: "Browse Git repositories graphically with Gitk, a visual Git history browser. Examine commit history, branches, and file changes effortlessly. Free online tool, no registration required."
category: common
keywords:
- git repository browser
- gitk visual history
- git commit viewer
- git branch explorer
- git file change browser
- git gui linux
- gitk macos
- gitk windows
- git history analysis
- git commit comparison
features:
- Display commit history visually for easy navigation
- Browse branches and tags within a Git repository
- Inspect file changes within specific commits
- Filter commits by date, author, or commit message
- View the commit graph for multiple branches simultaneously
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitk

> Browse Git repositories graphically.
> See also: `git-gui`, `git-cola`, `tig`.
> More information: <https://git-scm.com/docs/gitk>.

- Show the repository browser for the current Git repository:

`gitk`

- Show repository browser for a specific file or directory:

`gitk {{path/to/file_or_directory}}`

- Show commits made since 1 week ago:

`gitk --since="{{1 week ago}}"`

- Show commits older than 1/1/2016:

`gitk --until="{{1/1/2015}}"`

- Show at most 100 changes in all branches:

`gitk --max-count=100 --all`
