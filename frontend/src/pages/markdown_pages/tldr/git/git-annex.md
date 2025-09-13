---
title: "Manage Files with Git Annex - Version Control | Free DevTools"
name: git-annex
path: /freedevtools/tldr/git/git-annex
canonical: "https://hexmos.com/freedevtools/tldr/git/git-annex/"
description: "Manage files with Git Annex efficiently. Streamline version control and reduce repository size using symlinks and key-value stores. Free online tool, no registration required."
category: common
keywords:
- git annex file management
- git annex version control
- git annex large file handling
- git annex symlink repository
- git annex key-value store
- git annex linux
- git annex macos
- git annex windows
- git annex content tracking
- git annex repository synchronization
features:
- Store file contents outside Git repository
- Create symlinks to annexed file contents
- Synchronize annexed files with remote repositories
- Retrieve annexed files on demand
- Manage large files without bloating the Git repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git annex

> Manage files with Git, without checking their contents in.
> When a file is annexed, its content is moved into a key-value store, and a symlink is made that points to the content.
> More information: <https://git-annex.branchable.com>.

- Initialize a repo with Git annex:

`git annex init`

- Add a file:

`git annex add {{path/to/file_or_directory}}`

- Show the current status of a file or directory:

`git annex status {{path/to/file_or_directory}}`

- Synchronize a local repository with a remote:

`git annex {{remote}}`

- Get a file or directory:

`git annex get {{path/to/file_or_directory}}`

- Display help:

`git annex help`
