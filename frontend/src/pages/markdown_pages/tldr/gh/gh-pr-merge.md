---
title: "GitHub PR Merge - Manage Pull Requests | Free DevTools"
name: gh-pr-merge
path: /freedevtools/tldr/common/gh-pr-merge
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-pr-merge/"
description: "Manage GitHub pull requests with gh-pr-merge. Streamline your code review workflow and merge changes seamlessly. Free online tool, no registration required."
category: common
keywords:
- GitHub pull request merge
- gh pr merge command
- GitHub CLI merge
- Pull request branch delete
- Interactive pull request merge
- Squash merge GitHub
- Rebase merge GitHub
- Pull request merge strategy
- GitHub code review
- Command line git merge
features:
- Interactively merge pull requests
- Delete branches after merging pull requests
- Merge pull requests with specific strategies (merge, squash, rebase)
- Customize commit messages during merge
- Squash pull requests into a single commit
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh pr merge

> Merge GitHub pull requests.
> More information: <https://cli.github.com/manual/gh_pr_merge>.

- Merge the pull request associated with the current branch interactively:

`gh pr merge`

- Merge the specified pull request, interactively:

`gh pr merge {{pr_number}}`

- Merge the pull request, removing the branch on both the local and the remote:

`gh pr merge {{[-d|--delete-branch]}}`

- Merge the current pull request with the specified merge strategy:

`gh pr merge --{{merge|squash|rebase}}`

- Merge the current pull request with the specified merge strategy and commit message:

`gh pr merge --{{merge|squash|rebase}} {{[-t|--subject]}} {{commit_message}}`

- Squash the current pull request into one commit with the message body and merge:

`gh pr merge {{[-s|--squash]}} {{[-b|--body]}} "{{commit_message_body}}"`

- Display help:

`gh pr merge --help`
