---
title: "Create GitHub Repo - Manage Repositories | Free DevTools"
name: gh-repo-create
path: /freedevtools/tldr/common/gh-repo-create
canonical: "https://hexmos.com/freedevtools/tldr/common/gh-repo-create/"
description: "Create GitHub repositories with gh-repo-create. Initialize new projects, manage existing repositories, and automate repository creation. Free online tool, no registration required."
category: common
keywords:
- GitHub repository creation
- GitHub repo manager
- CLI repository creator
- GitHub command line tool
- GitHub repository initializer
- gh repo create command
- public repository creator
- private repository creator
- GitHub repo automation
- version control repository
features:
- Create a new GitHub repository from the command line
- Define repository name and description during creation
- Create private repositories directly from the CLI
- Clone newly created repositories locally
- Push existing directories to new GitHub repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh repo create

> Create a new GitHub repository.
> More information: <https://cli.github.com/manual/gh_repo_create>.

- Create a new repository interactively:

`gh repo create`

- Create a new repository with a specified name and description:

`gh repo create {{repo_name}} {{[-d|--description]}} "{{repo_description}}"`

- Create a private repository from the current directory:

`gh repo create {{[-s|--source]}} . --private`

- Clone the new repository locally after creation:

`gh repo create {{repo_name}} {{[-c|--clone]}}`

- Push the current directory to a new GitHub repository:

`gh repo create {{[-s|--source]}} . --public`
