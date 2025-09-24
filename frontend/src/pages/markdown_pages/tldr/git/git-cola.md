---
title: "Git GUI - Control Git Repositories with Git Cola | Online Free DevTools by Hexmos"
name: git-cola
path: /freedevtools/tldr/git/git-cola
canonical: "https://hexmos.com/freedevtools/tldr/git/git-cola/"
description: "Control Git repositories efficiently with Git Cola. Visualize commit history, manage branches, and stage changes with this powerful Git GUI. Free online tool, no registration required."
category: common
keywords:
- Git GUI
- Git client
- Git repository manager
- Git visualizer
- Git branch manager
- Linux Git GUI
- macOS Git GUI
- Windows Git GUI
- Git amend
- Git status filter
features:
- Visualize commit history and branch relationships
- Stage and commit changes with a graphical interface
- Manage branches and merge conflicts visually
- Filter the status widget to focus on specific files
- Amend the last commit directly from the GUI
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git cola

> A powerful Git GUI with a slick and intuitive user interface.
> More information: <https://git-cola.readthedocs.io>.

- Start the GUI:

`git cola`

- Start the GUI in amend mode:

`git cola --amend`

- Prompt for a Git repository. Defaults to the current directory:

`git cola --prompt`

- Open the Git repository at mentioned path:

`git cola {{[-r|--repo]}} {{path/to/git-repository}}`

- Apply the path filter to the status widget:

`git cola {{[-s|--status-filter]}} {{filter}}`
