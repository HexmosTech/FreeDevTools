---
title: "Git Add - Stage Changes for Commit | Online Free DevTools by Hexmos"
name: git-add
path: "/freedevtools/tldr/git/git-add/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-add/"
description: "Stage changes with Git Add command to prepare for committing. Easily add new and modified files to the index for version control. Free online tool, no registration required."
category: common
keywords:
- git add file
- git stage changes
- git add all
- git add tracked files
- git add ignored files
- git interactive staging
- git patch add
- git version control
- git commit preparation
- linux git add
features:
- Add specific files to the staging area.
- Stage all modified and new files at once.
- Interactively choose which changes to stage.
- Forcefully add ignored files to the index.
- Stage only already tracked files quickly.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git add

> Adds changed files to the index.
> More information: <https://git-scm.com/docs/git-add>.

- Add a file to the index:

`git add {{path/to/file}}`

- Add all files (tracked and untracked):

`git add {{[-A|--all]}}`

- Add all files recursively starting from the current folder:

`git add .`

- Only add already tracked files:

`git add {{[-u|--update]}}`

- Also add ignored files:

`git add {{[-f|--force]}}`

- Interactively stage parts of files:

`git add {{[-p|--patch]}}`

- Interactively stage parts of a given file:

`git add {{[-p|--patch]}} {{path/to/file}}`

- Interactively stage a file:

`git add {{[-i|--interactive]}}`
