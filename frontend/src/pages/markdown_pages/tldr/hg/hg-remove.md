---
title: "HG Remove - Control Staged Files | Online Free DevTools by Hexmos"
name: hg-remove
path: /freedevtools/tldr/hg/hg-remove
canonical: "https://hexmos.com/freedevtools/tldr/hg/hg-remove/"
description: "Control staged files with HG Remove. Easily remove files and directories from the Mercurial staging area. Free online tool, no registration required."
category: common
keywords:
- mercurial remove staged files
- hg remove command
- mercurial staging area management
- mercurial file removal
- remove files mercurial command line
- hg remove directory
- mercurial remove pattern
- version control file removal
- mercurial subrepository removal
- hg remove after
features:
- Remove specified files from the staging area
- Remove files matching a specified pattern
- Remove files except those that match a pattern
- Recursively remove sub-repositories
- Remove files from the repository that have been physically deleted
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg remove

> Remove specified files from the staging area.
> More information: <https://www.mercurial-scm.org/help/commands/remove>.

- Remove files or directories from the staging area:

`hg remove {{path/to/file}}`

- Remove all staged files matching a specified pattern:

`hg remove {{[-I|--include]}} {{pattern}}`

- Remove all staged files, excluding those that match a specified pattern:

`hg remove {{[-X|--exclude]}} {{pattern}}`

- Recursively remove sub-repositories:

`hg remove {{[-S|--subrepos]}}`

- Remove files from the repository that have been physically removed:

`hg remove {{[-A|--after]}}`
