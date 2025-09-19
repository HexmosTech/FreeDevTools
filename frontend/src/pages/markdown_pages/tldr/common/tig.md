---
title: "Control Git History with tig - TUI Tool | Online Free DevTools by Hexmos"
name: tig
path: /freedevtools/tldr/common/tig
canonical: "https://hexmos.com/freedevtools/tldr/common/tig/"
description: "Control Git history interactively with tig, an ncurses-based TUI. Browse commits, blame, and stashes with ease. Free online tool, no registration required."
category: common
keywords:
- git history browser
- git interactive TUI
- tig command line
- git commit visualization
- git blame viewer
- git stash manager
- git log alternative
- ncurses git interface
- linux git tools
- macos git tools
features:
- Browse commit history with an interactive TUI
- Visualize differences between Git branches
- Interactively browse Git blame
- Display commits from all branches and stashes
- Manage and view Git stashes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
