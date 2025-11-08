---
title: "Git Stamp - Append Commit Messages | Online Free DevTools by Hexmos"
name: git-stamp
path: "/freedevtools/tldr/git/git-stamp/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-stamp/"
description: "Append commit messages with Git Stamp, referencing issue numbers or review links. Streamline commit history management with this free online tool, no registration required."
category: common
keywords:
- git commit message stamp
- git issue tracker link
- git review link append
- git commit history update
- git commit message editor
- git commit stamping
- git workflow automation
- git command line tool
- command line git stamp
- git commit message replace
features:
- Appends commit messages with issue tracker references
- Links commit messages to code review pages
- Replaces existing issue numbers in commit messages
- Automates commit message stamping process
- Integrates with various bug tracking systems
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git stamp

> Stamp the last commit message, with the possibility to reference the issues numbers from your bug tracker or link to its review page.
> Part of `git-extras`.
> More information: <https://manned.org/git-stamp>.

- Stamp the last commit message referencing it with the issue number from your bug tracker:

`git stamp {{issue_number}}`

- Stamp the last commit message linking it to its review page:

`git stamp {{Review https://example.org/path/to/review}}`

- Stamp the last commit message replacing previous issues with a new one:

`git stamp {{[-r|--replace]}} {{issue_number}}`
