---
title: "Create Git Stacks - Manage Code Changes | Online Free DevTools by Hexmos"
name: gt
path: /freedevtools/tldr/common/gt
canonical: "https://hexmos.com/freedevtools/tldr/common/gt/"
description: "Create git stacks with Graphite's 'gt' command. Manage dependent code changes and streamline your GitHub workflow. Free online tool, no registration required."
category: common
keywords:
- git stack management
- graphite gt command
- code change stacking
- git branching strategy
- github pull request management
- continuous integration workflow
- git workflow automation
- git commit management
- collaborative git tooling
- git dependency management
features:
- Create new branches stacked on existing branches.
- Submit entire stacks of dependent changes as pull requests.
- Synchronize local stack with remote repository.
- Modify commits within a stack and automatically update dependent branches.
- Log and track all active git stacks.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gt

> Create and manage sequences of dependent code changes (stacks) for Git and GitHub.
> More information: <https://graphite.dev/docs/get-started>.

- Initialize `gt` for the repository in the current directory:

`gt init`

- Create a new branch stacked on top of the current branch and commit staged changes:

`gt create {{branch_name}}`

- Create a new commit and fix upstack branches:

`gt modify -cam {{commit_message}}`

- Force push all branches in the current stack to GitHub and create or update PRs:

`gt stack submit`

- Checkout different branch (prompts interactive mode when branch name is omitted):

`gt co {{branch_name}}`

- Sync stack with remote version (also deletes merged branches):

`gt sync`

- Log all tracked stacks:

`gt log short`

- Display help for a specified subcommand:

`gt {{subcommand}} --help`
