---
title: "Control Git Repos - Run Commands on Multiple Repos | Online Free DevTools by Hexmos"
name: git-for-each-repo
path: "/freedevtools/tldr/git/git-for-each-repo/"
canonical: "https://hexmos.com/freedevtools/tldr/git/git-for-each-repo/"
description: "Control Git repositories efficiently with git-for-each-repo. Execute commands across multiple repos simultaneously. Streamline Git workflows with this free online tool, no registration required."
category: common
keywords:
- Git repository manager
- Batch Git command runner
- Multiple Git repo executor
- Git global configuration tool
- Git maintenance script
- Git command line automation
- Git bulk operations
- Git multi repo control
- Linux Git script runner
- MacOS Git automation tool
features:
- Execute commands on multiple Git repositories
- Run maintenance scripts across multiple repositories
- Apply global configuration settings to multiple repos
- Automate Git workflows across multiple repositories
- Simplify batch operations with multiple Git repositories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# git for-each-repo

> Run a Git command on a list of repositories.
> Note: This command is experimental and may change.
> More information: <https://git-scm.com/docs/git-for-each-repo>.

- Run maintenance on each of a list of repositories stored in the `maintenance.repo` user configuration variable:

`git for-each-repo --config maintenance.repo {{maintenance run}}`

- Run `git pull` on each repository listed in a global configuration variable:

`git for-each-repo --config {{global_configuration_variable}} {{pull}}`
