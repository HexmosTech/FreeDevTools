---
title: "Git Lock - Control File Changes in Git | Free DevTools"
name: git-lock
path: /freedevtools/tldr/git/git-lock
canonical: "https://hexmos.com/freedevtools/tldr/git/git-lock/"
description: "Control file changes with Git Lock. Prevent accidental commits and maintain file integrity with this essential Git extension. Free online tool, no registration required."
category: common
keywords:
- git file lock
- git file protection
- git prevent commit
- git extras lock
- git workflow control
- git collaboration tool
- git file integrity
- linux git lock
- macos git lock
- version control lock
features:
- Prevent commits to specified files
- Disable local file modification
- Enhance Git workflow control
- Maintain file integrity in repositories
- Simplify collaboration on locked files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git lock

> Lock a file in a Git repository from being modified by a commit.
> Part of `git-extras`.
> See also: `git-unlock`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-lock>.

- Disable the ability to commit changes of a local file:

`git lock {{path/to/file}}`
