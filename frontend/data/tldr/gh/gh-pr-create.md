---
title: "Create GitHub PR - Manage Pull Requests | Online Free DevTools by Hexmos"
name: gh-pr-create
path: "/freedevtools/tldr/gh/gh-pr-create/"
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-pr-create/"
description: "Create GitHub pull requests with gh-pr-create. Streamline your development workflow and collaborate efficiently. Free online tool, no registration required."
category: common
keywords:
- github pull request create
- github pr create command
- gh cli pull request
- git pull request management
- command line pr tool
- github pr automation
- terminal pull request
- github pr review
- git pr creation tool
- github pull request workflow
features:
- Interactively create pull requests from the command line.
- Automatically determine title and description from commit messages.
- Create draft pull requests for preliminary review.
- Specify base branch, title, and body for detailed requests.
- Open pull request creation in the default web browser.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gh pr create

> Manage GitHub pull requests.
> More information: <https://cli.github.com/manual/gh_pr_create>.

- Interactively create a pull request:

`gh pr create`

- Create a pull request, determining the title and description from the commit messages of the current branch:

`gh pr create {{[-f|--fill]}}`

- Create a draft pull request:

`gh pr create {{[-d|--draft]}}`

- Create a pull request specifying the base branch, title, and description:

`gh pr create {{[-B|--base]}} {{base_branch}} {{[-t|--title]}} "{{title}}" {{[-b|--body]}} "{{body}}"`

- Start opening a pull request in the default web browser:

`gh pr create {{[-w|--web]}}`
