---
title: "GitHub Issue Manager - Manage Issues | Online Free DevTools by Hexmos"
name: gh-issue
path: "/freedevtools/tldr/gh/gh-issue/"
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-issue/"
description: "Manage GitHub issues efficiently with GitHub Issue Manager. View, create, list, and reopen issues directly from the command line. Free online tool, no registration required."
category: common
keywords:
- github issue manager
- git issue tracker
- command line issue management
- gh issue view
- gh issue create
- gh issue list
- github cli tool
- github issue command
- repository issue management
- github bug tracker
features:
- View a specific issue by its number
- Create a new issue directly in the web browser
- List issues with specific labels and limits
- Reopen closed issues with a single command
- Display issue status for a specific repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh issue

> Manage GitHub issues.
> More information: <https://cli.github.com/manual/gh_issue>.

- Display a specific issue:

`gh issue view {{issue_number}}`

- Display a specific issue in the default web browser:

`gh issue view {{issue_number}} {{[-w|--web]}}`

- Create a new issue in the default web browser:

`gh issue create {{[-w|--web]}}`

- List the last 10 issues with the `bug` label:

`gh issue list {{[-L|--limit]}} {{10}} {{[-l|--label]}} "{{bug}}"`

- List closed issues made by a specific user:

`gh issue list {{[-s|--state]}} closed {{[-A|--author]}} {{username}}`

- Display the status of issues relevant to the user, in a specific repository:

`gh issue status {{[-R|--repo]}} {{owner}}/{{repository}}`

- Reopen a specific issue:

`gh issue reopen {{issue_number}}`
