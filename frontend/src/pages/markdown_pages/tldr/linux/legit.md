---
title: "Git Control - Manage Git Workflow with Legit | Online Free DevTools by Hexmos"
name: legit
path: /freedevtools/tldr/linux/legit
canonical: "https://hexmos.com/freedevtools/tldr/linux/legit/"
description: "Control Git workflow efficiently with Legit. Simplify branch management, synchronize changes, and publish updates seamlessly. Free online tool, no registration required."
category: linux
keywords:
- git command line tool
- git workflow manager
- linux git automation
- git branch management
- git sync command
- git publish command
- git unpublish command
- git undo command
- legit git extension
- git command aliases
features:
- Stash and restore unstaged changes when switching branches
- Automate merging or rebasing with synchronization
- Publish branches to remote servers efficiently
- Remove branches from remote servers quickly
- Undo the last commit from the git history
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# legit

> Complementary command-line interface for Git.
> More information: <https://frostming.github.io/legit>.

- Switch to a specified branch, stashing and restoring unstaged changes:

`git sw {{target_branch}}`

- Synchronize current branch, automatically merging or rebasing, and stashing and unstashing:

`git sync`

- Publish a specified branch to the remote server:

`git publish {{branch_name}}`

- Remove a branch from the remote server:

`git unpublish {{branch_name}}`

- List all branches and their publication status:

`git branches {{glob_pattern}}`

- Remove the last commit from the history:

`git undo --hard`
