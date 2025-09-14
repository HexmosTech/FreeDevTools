---
title: "Control Git Timestamps - Change File Dates | Free DevTools"
name: git-utimes
path: /freedevtools/tldr/git/git-utimes
canonical: "https://hexmos.com/freedevtools/tldr/git/git-utimes/"
description: "Control file timestamps with git-utimes. Synchronize file modification times to commit dates, preserving local changes. Free online tool, no registration required."
category: common
keywords:
- git file timestamp
- git utimes command
- git commit date
- git modification time
- file date synchronization
- git extras
- git file metadata
- linux file timestamp
- macos file timestamp
- git utimes linux
features:
- Updates file modification times to match last commit date
- Preserves modification times of uncommitted files
- Changes timestamps only for files not in the working tree or index
- Synchronizes file timestamps with version control history
- Supports selectively updating timestamps for newer files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git utimes

> Change files modification time to their last commit date. Does not touch files that are in the working tree or index.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-utimes>.

- Change all files modification time to their last commit date:

`git utimes`

- Change files modification time that are newer than their last commit date, preserving original modification time of files that were committed from the local repository:

`git utimes --newer`
