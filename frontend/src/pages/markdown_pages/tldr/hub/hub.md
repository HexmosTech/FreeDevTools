---
title: "GitHub Hub - Manage GitHub Repositories | Online Free DevTools by Hexmos"
name: hub
path: /freedevtools/tldr/hub/hub
canonical: "https://hexmos.com/freedevtools/tldr/hub/hub/"
description: "Manage GitHub repositories with Hub, a Git wrapper. Easily clone, fork, push, and create pull requests from the command line. Free online tool, no registration required."
category: common
keywords:
- GitHub repository manager
- Git GitHub integration
- GitHub command-line tool
- Hub Git wrapper
- Pull request generator
- GitHub fork manager
- Repository clone tool
- Git command alias
- GitHub CLI tool
- Hub Linux MacOS
features:
- Clone repositories using slugs
- Create forks under your GitHub profile
- Push branches and create pull requests
- Checkout branches from pull requests
- Sync local branches with upstream
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hub

> A wrapper for Git that adds commands for working with GitHub-based projects.
> If set up as instructed by `hub alias`, one can use `git` to run `hub` commands.
> More information: <https://hub.github.com/hub.1.html>.

- Clone a repository using its slug (owners can omit the username):

`hub clone {{username}}/{{repo_name}}`

- Create a fork of the current repository (cloned from another user) under your GitHub profile:

`hub fork`

- Push the current local branch to GitHub and create a PR for it in the original repository:

`hub push {{remote_name}} && hub pull-request`

- Create a PR of the current (already pushed) branch, reusing the message from the first commit:

`hub pull-request --no-edit`

- Create a new branch with the contents of a pull request and switch to it:

`hub pr checkout {{pr_number}}`

- Upload the current (local-only) repository to your GitHub account:

`hub create`

- Fetch Git objects from upstream and update local branches:

`hub sync`
