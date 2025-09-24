---
title: "Copy Git Files - Transfer Files from Remote Repositories | Online Free DevTools by Hexmos"
name: git-rscp
path: /freedevtools/tldr/git/git-rscp
canonical: "https://hexmos.com/freedevtools/tldr/git/git-rscp/"
description: "Transfer Git files securely with Git RSCP. Copy files from remote repositories to your local machine with ease. Free online tool, no registration required."
category: common
keywords:
- git reverse scp
- git remote copy
- remote file transfer
- git extras rscp
- git file download
- linux remote copy
- macos remote copy
- command line file transfer
- git repository copy
- git file synchronization
features:
- Copy specific files from a remote repository.
- Copy entire directories from a remote repository.
- Transfer files using a reverse scp command.
- Download files directly to the current working tree.
- Leverage the git-extras toolkit for enhanced file management.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git rscp

> Reverse `git scp` - copy files from the working directory of a remote repository to the current working tree.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-scp>.

- Copy specific files from a remote:

`git rscp {{remote_name}} {{path/to/file1 path/to/file2 ...}}`

- Copy a specific directory from a remote:

`git rscp {{remote_name}} {{path/to/directory}}`
