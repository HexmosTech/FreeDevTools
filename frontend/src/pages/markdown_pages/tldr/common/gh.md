---
title: "GitHub Control - Manage Repositories with GH | Online Free DevTools by Hexmos"
name: gh
path: /freedevtools/tldr/common/gh
canonical: "https://hexmos.com/freedevtools/tldr/common/gh/"
description: "Manage GitHub repositories with GH, a powerful CLI tool. Create issues, review pull requests, and clone repos locally. Free online tool, no registration required."
category: common
keywords:
- GitHub command line interface
- GH repo management
- GitHub issue creation
- GH pull request review
- GitHub clone repository
- GH CLI commands
- GitHub workflow automation
- GH GitHub actions
- GitHub version control
- GH GitHub development
features:
- Clone remote GitHub repositories locally.
- Create new issues directly from the command line.
- View and filter open issues for a repository.
- Create and manage pull requests for code contributions.
- Checkout specific pull requests for local testing and review.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh

> Work seamlessly with GitHub.
> Some subcommands such as `config` have their own usage documentation.
> More information: <https://cli.github.com/manual/gh>.

- Clone a GitHub repository locally:

`gh repo clone {{owner}}/{{repository}}`

- Create a new issue:

`gh issue create`

- View and filter the open issues of the current repository:

`gh issue list`

- View an issue in the default web browser:

`gh issue view {{[-w|--web]}} {{issue_number}}`

- Create a pull request:

`gh pr create`

- View a pull request in the default web browser:

`gh pr view {{[-w|--web]}} {{pr_number}}`

- Check out a specific pull request locally:

`gh pr checkout {{pr_number}}`

- Check the status of a repository's pull requests:

`gh pr status`
