---
title: "Git Diff - Show File Changes | Online Free DevTools by Hexmos"
name: git-diff
path: /freedevtools/tldr/git/git-diff
canonical: "https://hexmos.com/freedevtools/tldr/git/git-diff/"
description: "Show tracked file changes with Git Diff. Compare staged, unstaged, and committed modifications. Free online tool, no registration required."
category: common
keywords:
- git diff changes
- git diff unstaged
- git diff staged
- git diff commit
- git diff summary
- git compare branches
- git file comparison
- git diff statistics
- git modification history
- git diff linux
features:
- Display unstaged changes in files.
- Compare staged changes before commit.
- Show differences from all commits since a specified date.
- Output summary of file creations, renames, and mode changes.
- Compare a specific file between two branches.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git diff

> Show changes to tracked files.
> More information: <https://git-scm.com/docs/git-diff>.

- Show unstaged changes:

`git diff`

- Show all uncommitted changes (including staged ones):

`git diff HEAD`

- Show only staged (added, but not yet committed) changes:

`git diff --staged`

- Show changes from all commits since a given date/time (a date expression, e.g. "1 week 2 days" or an ISO date):

`git diff 'HEAD@{{{3 months|weeks|days|hours|seconds ago}}}'`

- Show diff statistics, like files changed, histogram, and total line insertions/deletions:

`git diff --stat {{commit}}`

- Output a summary of file creations, renames and mode changes since a given commit:

`git diff --summary {{commit}}`

- Compare a single file between two branches or commits:

`git diff {{branch_1}}..{{branch_2}} {{path/to/file}}`

- Compare different files from the current branch to another branch:

`git diff {{other_branch}}:{{path/to/file2}} {{path/to/file1}}`
