---
title: "JJ Rebase - Move Revisions Effortlessly | Free DevTools"
name: jj-rebase
path: /freedevtools/tldr/common/jj-rebase
canonical: "https://hexmos.com/freedevtools/tldr/common/jj-rebase/"
description: "Rebase revisions with JJ effortlessly. Shift commits, branches, and history in your projects using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- jj rebase command
- jj version control rebase
- mercurial rebase alternative
- version control rebase revisions
- commit history rebase
- jj VCS rebase
- source control rebase
- jj rebase branch
- jj rebase move commits
- jj rebase insert revisions
features:
- Move revisions to a different parent
- Rebase revisions and their descendants
- Rebase entire branches of revisions
- Insert revisions before or after others
- Modify commit history through rebasing
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# jj rebase

> Move revisions to different parent(s).
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-rebase>.

- Move given revisions to a different parent(s):

`jj rebase {{[-r|--revisions]}} {{revset}} {{[-d|--destination]}} {{revset}}`

- Move given revisions and all their descendants:

`jj rebase {{[-s|--source]}} {{revset}} {{[-d|--destination]}} {{revset}}`

- Move all revisions in the branch containing given revisions:

`jj rebase {{[-b|--branch]}} {{revset}} {{[-d|--destination]}} {{revset}}`

- Move revisions to before and/or after other revisions:

`jj rebase {{[-r|--revisions]}} {{revset}} {{[-B|--insert-before]}} {{revset}} {{[-A|--insert-after]}} {{revset}}`
