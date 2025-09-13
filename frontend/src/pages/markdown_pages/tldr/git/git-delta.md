---
title: "Git Delta - List File Differences | Free DevTools"
name: git-delta
path: /freedevtools/tldr/common/git-delta
canonical: "https://hexmos.com/freedevtools/tldr/common/git-delta/"
description: "List file differences with Git Delta. Compare files across branches and identify modifications easily. Free online tool, no registration required."
category: common
keywords:
- git delta command
- git diff branch
- file difference analyzer
- git compare files
- git file comparison
- git-extras delta
- linux git command
- macos git command
- command line diff
- branch difference checker
features:
- List files that differ between branches
- Compare files from the current branch to a specified branch
- Identify modifications between two specific branches
- Support for multiple git workflows
- Show file differences using command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# git delta

> List files that differ from another branch.
> Part of `git-extras`.
> More information: <https://github.com/tj/git-extras/blob/master/Commands.md#git-delta>.

- List files from the current checked out branch that differ from the `main` branch:

`git delta {{main}}`

- List files from a specific branch that differ from another specific branch:

`git delta {{branch_1}} {{branch_2}}`
