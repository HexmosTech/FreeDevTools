---
title: "Clear Git Directory - Soft Reset Working Tree | Free DevTools"
name: git-clear-soft
path: /freedevtools/tldr/git/git-clear-soft
canonical: "https://hexmos.com/freedevtools/tldr/git/git-clear-soft/"
description: "Clear a Git directory with git-clear-soft. Revert changes and remove untracked files. Free online tool, no registration required."
category: common
keywords:
- git clear directory
- git soft reset
- git working tree
- git remove untracked
- git clean command
- git revert changes
- git clear local
- git discard changes
- git reset working directory
- git-extras
features:
- Reset all tracked files to the last commit.
- Remove all untracked files from the working directory.
- Ignore files specified in `.gitignore`.
- Provide a clean working directory state.
- Simulate a fresh Git clone with current branch.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git clear-soft

> Clear a Git working directory as if it was freshly cloned with the current branch excluding files in `.gitignore`.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-clear-soft>.

- Reset all tracked files and delete all untracked files:

`git clear-soft`
