---
title: "Reauthor Git - Change Author Identity | Online Free DevTools by Hexmos"
name: git-reauthor
path: "/freedevtools/tldr/git/git-reauthor/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-reauthor/"
description: "Reauthor Git commits easily with Git Reauthor. Correct author email and name across your Git repository. Free online tool, no registration required."
category: common
keywords:
- git reauthor
- git author rewrite
- git commit author
- git history modification
- git email change
- git name change
- git author correction
- git author update
- git commit authorship
- git reauthor common
features:
- Change author email in Git history
- Change author name in Git history
- Rewrite Git history with new author information
- Update author details across the entire repository
- Use Git config for new author details
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git reauthor

> Change details about an author identity. Since this command rewrites the Git history, `--force` will be needed when pushing next time.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-reauthor>.

- Change an author's email and name across the whole Git repository:

`git reauthor {{[-o|--old-email]}} {{old@example.com}} {{[-e|--correct-email]}} {{new@example.com}} {{[-n|--correct-name]}} "{{name}}"`

- Change the email and name to the ones defined in the Git config:

`git reauthor {{[-o|--old-email]}} {{old@example.com}} {{[-c|--use-config]}}`

- Change the email and name of all commits, regardless of their original author:

`git reauthor {{[-a|--all]}} {{[-e|--correct-email]}} {{name@example.com}} {{[-n|--correct-name]}} {{name}}`
