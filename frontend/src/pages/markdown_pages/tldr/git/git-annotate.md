---
title: "Git Annotate - Show Commit History | Online Free DevTools by Hexmos"
name: git-annotate
path: /freedevtools/tldr/git/git-annotate
canonical: "https://hexmos.com/freedevtools/tldr/git/git-annotate/"
description: "Show commit history with Git Annotate. Inspect line-by-line author and commit information for file versions. Free online tool, no registration required."
category: common
keywords:
- git annotate
- git blame alternative
- git commit history
- git author information
- git line history
- git file versioning
- command line git
- git source code annotation
- git developer tools
- git commit metadata
features:
- Display author and commit hash for each line
- Show author email alongside commit hash
- Filter lines based on regular expression
- Annotate specific file versions
- Identify last author for each line of code
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git annotate

> Show commit hash and last author on each line of a file.
> See `git blame`, which is preferred over `git annotate`.
> `git annotate` is provided for those familiar with other version control systems.
> More information: <https://git-scm.com/docs/git-annotate>.

- Print a file with the author name and commit hash prepended to each line:

`git annotate {{path/to/file}}`

- Print a file with the author email and commit hash prepended to each line:

`git annotate {{[-e|--show-email]}} {{path/to/file}}`

- Print only rows that match a `regex`:

`git annotate -L :{{regexp}} {{path/to/file}}`
