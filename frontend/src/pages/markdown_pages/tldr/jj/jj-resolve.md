---
title: "Resolve Conflicts - Control JJ Merge Tool | Online Free DevTools by Hexmos"
name: jj-resolve
path: /freedevtools/tldr/jj/jj-resolve
canonical: "https://hexmos.com/freedevtools/tldr/jj/jj-resolve/"
description: "Resolve conflicts efficiently with JJ Merge Tool, handling file merge issues. Manage revision conflicts easily. Free online tool, no registration required."
category: common
keywords:
  - jj resolve conflict
  - jj merge tool
  - jj version control
  - jj conflict resolution
  - git conflict resolver
  - version control merge
  - command line merge tool
  - jj revision conflict
  - code merge tool
  - diff resolve tool
features:
  - Resolve all file conflicts in a repository
  - List all conflict markers within files
  - Resolve conflicts in a specific revision
  - Resolve conflicts only within specified files
  - Accept incoming or outgoing versions during resolution
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
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
