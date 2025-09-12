---
title: "GitHub PR - Manage Pull Requests | Free DevTools"
name: gh-pr
path: /freedevtools/tldr/common/gh-pr
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-pr/"
description: "Manage GitHub pull requests with gh-pr. Create, review, merge and edit pull requests directly from the command line. Free online tool, no registration required."
category: common
keywords:
- github pull request
- gh pr command
- command line pull request
- git pull request manager
- github cli
- pr review tool
- pr merge tool
- pr create tool
- pr edit tool
- github pr status
features:
- Create new GitHub pull requests from the command line
- Check out pull requests locally by number
- View the changes made in a pull request
- Approve or review pull requests directly
- Merge pull requests interactively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh pr

> Manage GitHub pull requests.
> Some subcommands such as `create` have their own usage documentation.
> More information: <https://cli.github.com/manual/gh_pr>.

- Create a pull request:

`gh pr create`

- Check out a specific pull request locally:

`gh pr checkout {{pr_number}}`

- View the changes made in the pull request for the current branch:

`gh pr diff`

- Approve the pull request for the current branch:

`gh pr review {{[-a|--approve]}}`

- Merge the pull request associated with the current branch interactively:

`gh pr merge`

- Edit a pull request interactively:

`gh pr edit`

- Edit the base branch of a pull request:

`gh pr edit {{[-B|--base]}} {{branch_name}}`

- Check the status of the current repository's pull requests:

`gh pr status`
