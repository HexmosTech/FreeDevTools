---
title: "Git Remove - Remove Files from Git Index | Free DevTools"
name: git-rm
path: /freedevtools/tldr/git/git-rm
canonical: "https://hexmos.com/freedevtools/tldr/git/git-rm/"
description: "Remove files from the Git index with Git Remove. Manage version control, delete files, and update repositories efficiently. Free online tool, no registration required."
category: common
keywords:
- git remove file
- git delete file
- git untrack file
- git remove cached
- git remove directory
- git repository management
- git version control
- git index update
- command line git
- git remove command
features:
- Remove files from the repository index and filesystem
- Recursively remove directories from the repository
- Remove files from the index while keeping them locally
- Unstage files from a Git repository
- Manage file deletion within Git repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git rm

> Remove files from repository index and local filesystem.
> More information: <https://git-scm.com/docs/git-rm>.

- Remove file from repository index and filesystem:

`git rm {{path/to/file}}`

- Remove directory:

`git rm -r {{path/to/directory}}`

- Remove file from repository index but keep it untouched locally:

`git rm --cached {{path/to/file}}`
