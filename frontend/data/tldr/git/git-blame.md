---
title: "Git Blame - Track Code Authorship | Online Free DevTools by Hexmos"
name: git-blame
path: "/freedevtools/tldr/git/git-blame/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-blame/"
description: "Track code authorship with Git Blame. Identify commit hash and last author of each line in a file. Free online tool, no registration required."
category: common
keywords:
- git blame
- git authorship tracking
- blame commit history
- git code analysis
- file change history
- git version control
- command line blame
- git blame command
- git commit attribution
- code origin tracking
features:
- Display commit hash for each line
- Show the author of each line in a file
- Blame specific commit versions
- Ignore whitespace changes
- Track changes across moved code
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git blame

> Show commit hash and last author on each line of a file.
> More information: <https://git-scm.com/docs/git-blame>.

- Print file with author name and commit hash on each line:

`git blame {{path/to/file}}`

- Print file with author email and commit hash on each line:

`git blame {{[-e|--show-email]}} {{path/to/file}}`

- Print file with author name and commit hash on each line at a specific commit:

`git blame {{commit}} {{path/to/file}}`

- Print file with author name and commit hash on each line before a specific commit:

`git blame {{commit}}~ {{path/to/file}}`

- Jump to the parent of a specific commit and track a specific text and 10 of its following lines:

`git blame -L '/{{text}}/',+10 {{a82812aa}}^ tldr.py`

- Print author name and commit hash information for a specific line range:

`git blame -L {{start_line}},{{end_line}} {{path/to/file}}`

- Ignore whitespaces and line moves:

`git blame -w -C -C -C {{path/to/file}}`
