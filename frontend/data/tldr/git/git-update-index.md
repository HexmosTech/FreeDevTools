---
title: "Git Update Index - Control File Tracking | Online Free DevTools by Hexmos"
name: git-update-index
path: "/freedevtools/tldr/git/git-update-index/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-update-index/"
description: "Control file tracking with Git Update Index. Stage changes, skip worktree, and manage file states in your Git repository. Free online tool, no registration required."
category: common
keywords:
- git index manager
- git skip worktree
- git file tracking
- git staging area
- git repository management
- command line git tool
- git file status
- git file modification
- git linux
- git macos
features:
- Skip worktree for modified files
- Pretend files are unchanged in Git
- Manage the Git staging area
- Control file tracking in a repository
- Exclude files from being tracked
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git update-index

> Git command for manipulating the index.
> More information: <https://git-scm.com/docs/git-update-index>.

- Pretend that a modified file is unchanged (`git status` will not show this as changed):

`git update-index --skip-worktree {{path/to/modified_file}}`
