---
title: "Git Clean - Remove Untracked Files | Online Free DevTools by Hexmos"
name: git-clean
path: /freedevtools/tldr/git/git-clean
canonical: "https://hexmos.com/freedevtools/tldr/git/git-clean/"
description: "Delete untracked files with Git Clean. Remove unwanted files and directories from your Git working directory effortlessly. Free online tool, no registration required."
category: common
keywords:
- git untracked files
- git clean command
- git remove files
- git delete untracked
- git working directory
- git ignore files
- git force clean
- git dry run clean
- linux git clean
- macos git clean
features:
- Remove untracked files from the working directory.
- Interactively delete untracked files.
- Preview files to be deleted with a dry run.
- Forcefully remove untracked files and directories.
- Delete untracked files, including excluded files.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git clean

> Remove files not tracked by Git from the working tree.
> More information: <https://git-scm.com/docs/git-clean>.

- Delete untracked files:

`git clean`

- Interactively delete untracked files:

`git clean {{[-i|--interactive]}}`

- Show which files would be deleted without actually deleting them:

`git clean {{[-n|--dry-run]}}`

- Forcefully delete untracked files:

`git clean {{[-f|--force]}}`

- Forcefully delete untracked [d]irectories:

`git clean {{[-f|--force]}} -d`

- Delete untracked files, including e[x]cluded files (files ignored in `.gitignore` and `.git/info/exclude`):

`git clean -x`
