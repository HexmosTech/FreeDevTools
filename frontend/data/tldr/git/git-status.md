---
title: "Git Status - Track File Changes | Online Free DevTools by Hexmos"
name: git-status
path: "/freedevtools/tldr/git/git-status/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-status/"
description: "Track file changes with Git Status. Easily identify modified, added, and deleted files in your Git repository. Free online tool, no registration required."
category: common
keywords:
- git status changes
- git track file changes
- git modified files
- git added files
- git deleted files
- git repository status
- git staging area status
- git working directory status
- linux git status
- macos git status
features:
- List changes in the working directory
- Compare staged files to the repository
- Display the status of branches
- Show the number of stashed entries
- Hide untracked files in the output
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git status

> Show the changes to files in a Git repository.
> List changed, added and deleted files compared to the currently checked-out commit.
> More information: <https://git-scm.com/docs/git-status>.

- Show changed files which are not yet added for commit:

`git status`

- Give output in short format:

`git status {{[-s|--short]}}`

- Show verbose information on changes in both the staging area and working directory:

`git status {{[-vv|--verbose --verbose]}}`

- Show the branch and tracking info:

`git status {{[-b|--branch]}}`

- Show output in short format along with branch info:

`git status {{[-sb|--short --branch]}}`

- Show the number of entries currently stashed away:

`git status --show-stash`

- Don't show untracked files in the output:

`git status {{[-uno|--untracked-files=no]}}`
