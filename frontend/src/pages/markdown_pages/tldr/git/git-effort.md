---
title: "Git Effort - Track File Activity | Free DevTools"
name: git-effort
path: /freedevtools/tldr/git/git-effort
canonical: "https://hexmos.com/freedevtools/tldr/git/git-effort/"
description: "Track file activity with Git Effort. Analyze commits per file and identify active days. Improve code understanding and collaboration. Free online tool, no registration required."
category: common
keywords:
- git file activity
- git commit history
- git active days
- git file analysis
- git code ownership
- git repository analysis
- git contribution analysis
- command line git analysis
- git effort command
- git file statistics
features:
- Display commits per file in a Git repository
- Calculate the number of active days for each file
- Filter results based on a minimum number of commits
- Filter results based on a specific author
- Filter results based on a specific time/date
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git effort

> Display how much activity a file has had, showing commits per file and "active days" i.e. total number of days that contributed to the file.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-effort>.

- Display each file in the repository, showing commits and active days:

`git effort`

- Display files modified by a specific number of commits or more, showing commits and active days:

`git effort --above {{5}}`

- Display files modified by a specific author, showing commits and active days:

`git effort -- --author="{{username}}"`

- Display files modified since a specific time/date, showing commits and active days:

`git effort -- --since="{{last month}}"`

- Display only the specified files or directories, showing commits and active days:

`git effort {{path/to/file_or_directory1 path/to/file_or_directory2 ...}}`

- Display all files in a specific directory, showing commits and active days:

`git effort {{path/to/directory/*}}`
