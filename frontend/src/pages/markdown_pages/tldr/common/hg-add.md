---
title: "Mercurial Add - Stage Changes for Commit | Free DevTools"
name: hg-add
path: /freedevtools/tldr/common/hg-add
canonical: "https://hexmos.com/freedevtools/tldr/common/hg-add/"
description: "Stage files for commit with Mercurial Add. Track changes, include/exclude patterns and manage sub-repositories using the command line. Free online tool, no registration required."
category: common
keywords:
- mercurial add
- mercurial staging
- hg add files
- hg version control
- mercurial commit
- mercurial include exclude
- mercurial subrepos
- hg add dry run
- version control add
- mercurial command line
features:
- Add specific files or directories to the staging area
- Add files based on include patterns
- Exclude files from staging using exclude patterns
- Recursively add sub-repositories
- Perform a dry run to preview actions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# hg add

> Adds specified files to the staging area for the next commit in Mercurial.
> More information: <https://www.mercurial-scm.org/help/commands/add>.

- Add files or directories to the staging area:

`hg add {{path/to/file}}`

- Add all unstaged files matching a specified pattern:

`hg add {{[-I|--include]}} {{pattern}}`

- Add all unstaged files, excluding those that match a specified pattern:

`hg add {{[-X|--exclude]}} {{pattern}}`

- Recursively add sub-repositories:

`hg add {{[-S|--subrepos]}}`

- Perform a test-run without performing any actions:

`hg add {{[-n|--dry-run]}}`
