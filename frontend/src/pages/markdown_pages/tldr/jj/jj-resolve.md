---
title: "JJ Resolve Conflicts - Control JJ Merge Tool | Online Free DevTools by Hexmos"
name: jj-resolve
path: /freedevtools/tldr/jj/jj-resolve
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-resolve/"
description: "Resolve merge conflicts efficiently with the JJ merge tool.  Handle file merge issues and manage revision conflicts easily with this command-line tool. Free online tool, no registration required."
category: jj
keywords:
  - jj resolve conflict
  - jj merge conflicts
  - jj version control merge
  - jj conflict resolution command
  - jj revision conflict resolution
  - command line jj merge
  - jj file merge tool
  - jj resolve command examples
  - jj resolve specific files
  - jj resolve specific revision
features:
  - Resolve all conflicts in a JJ repository.
  - List all conflict markers within affected files.
  - Resolve conflicts in a specific JJ revision.
  - Resolve conflicts within selected files only.
  - Choose to accept either incoming or outgoing versions during conflict resolution.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# jj resolve

> Resolve conflicted files with an external merge tool.
> More information: <https://jj-vcs.github.io/jj/latest/cli-reference/#jj-resolve>.

- Resolve all conflicts:

`jj resolve`

- List all conflicts:

`jj resolve {{[-l|--list]}}`

- Resolve conflicts in a given revision:

`jj resolve {{[-r|--revision]}} {{revset}}`

- Resolve conflicts in given files:

`jj resolve {{file1 file2 ...}}`

- Resolve accepting the incoming versions:

`jj resolve --tool :theirs`

- Resolve accepting the outgoing versions:

`jj resolve --tool :ours`
