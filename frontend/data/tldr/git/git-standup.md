---
title: "Generate Git Standup - Track Commits | Online Free DevTools by Hexmos"
name: git-standup
path: "/freedevtools/tldr/git/git-standup/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-standup/"
description: "Generate Git Standup reports to track commit activity. Analyze code contributions and monitor developer productivity. Free online tool, no registration required."
category: common
keywords:
- git standup generator
- commit activity tracker
- git commit history
- developer productivity analysis
- git contribution analysis
- command line git tool
- git commit report
- standup meeting tool
- git author activity
- git commit tracking
features:
- Show commits by author and date range
- Display GPG signing status of commits
- Report commits from all contributors
- Generate standup-style reports from the command line
- Filter commits by author name or email
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git standup

> See commits from a specified user.
> Part of `git-extras`.
> More information: <https://manned.org/git-standup>.

- Show a given author's commits from the last 10 days:

`git standup -a {{name|email}} -d {{10}}`

- Show a given author's commits from the last 10 days and whether they are GPG signed:

`git standup -a {{name|email}} -d {{10}} -g`

- Show all the commits from all contributors for the last 10 days:

`git standup -a all -d {{10}}`

- Display help:

`git standup -h`
