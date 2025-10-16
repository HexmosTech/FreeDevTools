---
title: "Hg Commit - Control Repository Changes | Online Free DevTools by Hexmos"
name: hg-commit
path: "/freedevtools/tldr/hg/hg-commit/"
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-commit/"
description: "Control repository changes with Hg Commit. Manage staged files, specify commit messages, and interactively select changes. Free online tool, no registration required."
category: common
keywords:
- hg commit command
- mercurial commit
- version control commit
- hg repository update
- command line commit tool
- version control system
- hg exclude pattern
- hg include pattern
- commit staged changes
- mercurial commit message
features:
- Commit staged files to a Mercurial repository.
- Commit specific files or directories within a repository.
- Add custom commit messages to changes.
- Include or exclude files based on patterns when committing.
- Use interactive mode to review and select changes for commit.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hg commit

> Commit all staged or specified files to the repository.
> More information: <https://www.mercurial-scm.org/help/commands/commit>.

- Commit staged files to the repository:

`hg commit`

- Commit a specific file or directory:

`hg commit {{path/to/file_or_directory}}`

- Commit with a specific message:

`hg commit {{[-m|--message]}} {{message}}`

- Commit all files matching a specified pattern:

`hg commit {{[-I|--include]}} {{pattern}}`

- Commit all files, excluding those that match a specified pattern:

`hg commit {{[-X|--exclude]}} {{pattern}}`

- Commit using the interactive mode:

`hg commit {{[-i|--interactive]}}`
