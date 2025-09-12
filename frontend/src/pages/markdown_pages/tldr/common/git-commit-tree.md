---
title: "Create Git Commit - Build Objects Easily | Free DevTools"
name: git-commit-tree
path: /freedevtools/tldr/common/git-commit-tree
canonical: "https://hexmos.com/freedevtools/tldr/common/git-commit-tree/"
description: "Create Git commit objects with git-commit-tree, a low-level utility. Specify parents, messages, and sign commits. Free online tool, no registration required."
category: common
keywords:
- git commit object
- git commit-tree command
- git create commit
- git commit signing
- git commit parent
- git low level commit
- git object creation
- git tree commit
- version control commit
- source code commit
features:
- Create commit objects from trees
- Specify a parent commit
- Sign commits using GPG
- Read commit messages from a file
- Define custom commit messages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git commit-tree

> Low level utility to create commit objects.
> See also: `git commit`.
> More information: <https://git-scm.com/docs/git-commit-tree>.

- Create a commit object with the specified message:

`git commit-tree {{tree}} -m "{{message}}"`

- Create a commit object reading the message from a file (use `-` for `stdin`):

`git commit-tree {{tree}} -F {{path/to/file}}`

- Create a GPG-signed commit object:

`git commit-tree {{tree}} -m "{{message}}" {{[-S|--gpg-sign]}}`

- Create a commit object with the specified parent commit object:

`git commit-tree {{tree}} -m "{{message}}" -p {{parent_commit_sha}}`
