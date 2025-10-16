---
title: "List Git Files - Control Index and Tree | Online Free DevTools by Hexmos"
name: git-ls-files
path: "/freedevtools/tldr/git/git-ls-files/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-ls-files/"
description: "Control Git files in index and working tree with Git ls-files. Track file changes, view deleted files, and identify untracked files. Free online tool, no registration required."
category: common
keywords:
- git index files
- git working tree files
- list git files
- git file status
- git untracked files
- git deleted files
- git modified files
- git exclude files
- git command line
- git repository management
features:
- List files present in the Git index
- Show files existing in the working tree
- Identify deleted files in the Git repository
- Display modified files within the working directory
- Exclude standard ignored files from the output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git ls-files

> Show information about files in the index and the working tree.
> More information: <https://git-scm.com/docs/git-ls-files>.

- Show deleted files:

`git ls-files {{[-d|--deleted]}}`

- Show modified and deleted files:

`git ls-files {{[-m|--modified]}}`

- Show ignored and untracked files:

`git ls-files {{[-o|--others]}}`

- Show untracked files, not ignored:

`git ls-files {{[-o|--others]}} --exclude-standard`
