---
title: "Git Summary - Analyze Repository Activity | Online Free DevTools by Hexmos"
name: git-summary
path: /freedevtools/tldr/git/git-summary
canonical: "https://hexmos.com/freedevtools/tldr/git/git-summary/"
description: "Analyze Git repository activity with Git Summary. Get contributor statistics, line changes, and commit history. Free online tool, no registration required."
category: common
keywords:
- git repository analysis
- git summary statistics
- git commit history
- git contributor activity
- git line changes
- git repository overview
- linux git summary
- macos git summary
- windows git summary
- git project analyzer
features:
- Display contributor statistics for a Git repository
- Show the number of lines modified by each contributor
- Analyze repository activity since a specific commit
- Merge committers by email for accurate statistics
- Provide an overview of the repository's commit history
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git summary

> Display information about a Git repository.
> Part of `git-extras`.
> More information: <https://manned.org/git-summary>.

- Display data about a Git repository:

`git summary`

- Display data about a Git repository since a commit-ish:

`git summary {{commit|branch_name|tag_name}}`

- Display data about a Git repository, merging committers using different emails into 1 statistic for each author:

`git summary --dedup-by-email`

- Display data about a Git repository, showing the number of lines modified by each contributor:

`git summary --line`
