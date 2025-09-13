---
title: "Git Diff Files - Compare File Changes | Free DevTools"
name: git-diff-files
path: /freedevtools/tldr/git/git-diff-files
canonical: "https://hexmos.com/freedevtools/tldr/git/git-diff-files/"
description: "Compare file changes with Git Diff Files. Quickly identify differences using SHA1 hashes and modes. Free online tool, no registration required."
category: common
keywords:
- git compare files
- git diff files command
- git file difference checker
- git sha1 file comparison
- git changed files
- git compare file hashes
- git diff summary
- git diff name only
- linux git diff files
- macos git diff files
features:
- Compare files by SHA1 hashes and modes.
- Identify all changed files in a Git repository.
- Show only the names of changed files.
- Output a summary of extended header information.
- Compare specific files by path.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git diff-files

> Compare files using their sha1 hashes and modes.
> More information: <https://git-scm.com/docs/git-diff-files>.

- Compare all changed files:

`git diff-files`

- Compare only specified files:

`git diff-files {{path/to/file}}`

- Show only the names of changed files:

`git diff-files --name-only`

- Output a summary of extended header information:

`git diff-files --summary`
