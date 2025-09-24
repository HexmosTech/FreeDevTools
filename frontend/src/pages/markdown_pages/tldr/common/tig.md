---
title: "Control Git History with tig - Interactive TUI Tool | Online Free DevTools by Hexmos"
name: tig
path: /freedevtools/tldr/common/tig
canonical: "https://hexmos.com/freedevtools/tldr/common/tig/"
description: "Control Git history interactively with tig, a powerful ncurses-based TUI.  Browse commits, visualize branches, and manage stashes with ease. Free online tool, no registration required."
category: common
keywords:
  - git history interactive TUI
  - tig git command line
  - git commit visualization tool
  - interactive git blame viewer
  - git stash management interface
  - git log ncurses interface
  - linux git TUI tools
  - macos git TUI tools
  - git branch comparison tool
  - command line git browser
features:
  - Browse commit history using an interactive text-based user interface.
  - Visually compare differences between Git branches and tags.
  - Interactively navigate and inspect Git blame information.
  - Manage and review saved Git stashes efficiently.
  - Access and display commits from all branches and stashes simultaneously.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tig

> A configurable `ncurses`-based TUI for Git.
> See also: `gitui`, `git-gui`.
> More information: <https://jonas.github.io/tig/doc/manual.html>.

- Show the sequence of commits starting from the current one in reverse chronological order:

`tig`

- Show the history of a specific branch:

`tig {{branch}}`

- Show the history of specific files or directories:

`tig {{path1 path2 ...}}`

- Show the difference between two references (such as branches or tags):

`tig {{base_ref}}..{{compared_ref}}`

- Browse git blame interactively (press `<,>` to jump to parent):

`tig blame {{path/to/file}}`

- Display commits from all branches and stashes:

`tig --all`

- Start in stash view, displaying all saved stashes:

`tig stash`

- Display help in TUI:

`<h>`
