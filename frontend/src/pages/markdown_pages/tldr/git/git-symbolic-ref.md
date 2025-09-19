---
title: "Control Git References - Git Symbolic-Ref | Online Free DevTools by Hexmos"
name: git-symbolic-ref
path: /freedevtools/tldr/git/git-symbolic-ref
canonical: "https://hexmos.com/freedevtools/tldr/git/git-symbolic-ref/"
description: "Control Git references with Git Symbolic-Ref. Manage symbolic references, update branch pointers and streamline repository maintenance. Free online tool, no registration required."
category: common
keywords:
- git symbolic reference manager
- git reference manipulation
- git branch pointer control
- git ref update tool
- git symbolic ref command line
- git refs management
- git symbolic-ref linux
- git symbolic-ref macos
- git symbolic-ref documentation
- git repository maintenance
features:
- Store a git reference by name
- Update a git reference with a commit message
- Read the value of a git symbolic reference
- Delete a git symbolic reference
- Simplify git reference output for scripting
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git symbolic-ref

> Read, change, or delete files that store references.
> More information: <https://git-scm.com/docs/git-symbolic-ref>.

- Store a reference by a name:

`git symbolic-ref refs/{{name}} {{ref}}`

- Store a reference by name, including a message with a reason for the update:

`git symbolic-ref -m "{{message}}" refs/{{name}} refs/heads/{{branch_name}}`

- Read a reference by name:

`git symbolic-ref refs/{{name}}`

- Delete a reference by name:

`git symbolic-ref {{[-d|--delete]}} refs/{{name}}`

- For scripting, hide errors with `--quiet` and use `--short` to simplify ("refs/heads/X" prints as "X"):

`git symbolic-ref {{[-q|--quiet]}} --short refs/{{name}}`
