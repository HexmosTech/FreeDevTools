---
title: "Git SCP - Copy Files to Remote Repository | Free DevTools"
name: git-scp
path: /freedevtools/tldr/git/git-scp
canonical: "https://hexmos.com/freedevtools/tldr/git/git-scp/"
description: "Copy files to a remote Git repository with Git SCP. Transfer files securely using rsync. Free online tool, no registration required."
category: common
keywords:
- git scp
- git copy files
- remote git repository copy
- git extras scp
- git rsync
- git file transfer
- git remote copy
- git scp linux
- git scp macos
- git scp windows
features:
- Copy unstaged files to a remote repository
- Copy staged files to a remote repository
- Copy files from a specific commit to a remote repository
- Copy specific files to a remote repository
- Copy entire directories to a remote repository
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git scp

> Copy files from the current working tree to the working directory of a remote repository.
> Part of `git-extras`. Uses `rsync` to transfer files.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-scp>.

- Copy unstaged files to a specific remote:

`git scp {{remote_name}}`

- Copy staged and unstaged files to a remote:

`git scp {{remote_name}} HEAD`

- Copy files that has been changed in the last commit and any staged or unstaged files to a remote:

`git scp {{remote_name}} HEAD~1`

- Copy specific files to a remote:

`git scp {{remote_name}} {{path/to/file1 path/to/file2 ...}}`

- Copy a specific directory to a remote:

`git scp {{remote_name}} {{path/to/directory}}`
