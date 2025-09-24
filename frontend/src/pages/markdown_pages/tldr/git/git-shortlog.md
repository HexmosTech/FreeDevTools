---
title: "Git Shortlog - Summarize Git Log Output | Online Free DevTools by Hexmos"
name: git-shortlog
path: /freedevtools/tldr/git/git-shortlog
canonical: "https://hexmos.com/freedevtools/tldr/git/git-shortlog/"
description: "Summarize Git log output with Git Shortlog. Analyze commit history and author contributions using the command line. Free online tool, no registration required."
category: common
keywords:
- git commit summary
- git log analyzer
- git shortlog command
- git author statistics
- git commit history
- git contributor analysis
- git commit breakdown
- git repository summary
- git command line tool
- linux git shortlog
features:
- Summarize commit history by author
- Group commits by committer identity
- Sort commits by number of contributions
- Analyze commit activity within a revision range
- Display user emails and commit counts across branches
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git shortlog

> Summarizes the `git log` output.
> More information: <https://git-scm.com/docs/git-shortlog>.

- View a summary of all the commits made, grouped alphabetically by author name:

`git shortlog`

- View a summary of all the commits made, sorted by the number of commits made:

`git shortlog {{[-n|--numbered]}}`

- View a summary of all the commits made, grouped by the committer identities (name and email):

`git shortlog {{[-c|--committer]}}`

- View a summary of the last 5 commits (i.e. specify a revision range):

`git shortlog HEAD~5..HEAD`

- View all users, emails and the number of commits in the current branch:

`git shortlog {{[-s|--summary]}} {{[-n|--numbered]}} {{[-e|--email]}}`

- View all users, emails and the number of commits in all branches:

`git shortlog {{[-s|--summary]}} {{[-n|--numbered]}} {{[-e|--email]}} --all`
