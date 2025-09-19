---
title: "GitHub Repo - Manage Repositories | Online Free DevTools by Hexmos"
name: gh-repo
path: /freedevtools/tldr/gh/gh-repo
canonical: "https://hexmos.com/freedevtools/tldr/gh/gh-repo/"
description: "Manage GitHub repositories with gh-repo. Create, clone, fork, view and list your repositories. Free online tool, no registration required."
category: common
keywords:
- github repository manager
- github repository create
- github repository clone
- github repository fork
- github repository list
- github repository view
- cli github repository
- github repository command line
- github repository owner
- github repository language
features:
- Create new GitHub repositories from the command line.
- Clone existing GitHub repositories to your local machine.
- Fork and clone GitHub repositories in a single command.
- View GitHub repositories in your default web browser.
- List GitHub repositories owned by a specific user or organization.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gh repo

> Work with GitHub repositories.
> More information: <https://cli.github.com/manual/gh_repo>.

- Create a new repository (if the repository name is not set, the default name will be the name of the current directory):

`gh repo create {{name}}`

- Clone a repository:

`gh repo clone {{owner}}/{{repository}}`

- Fork and clone a repository:

`gh repo fork {{owner}}/{{repository}} --clone`

- View a repository in the default web browser:

`gh repo view {{repository}} {{[-w|--web]}}`

- List repositories owned by a specific user or organization (if the owner is not set, the default owner will be the currently logged in user):

`gh repo list {{owner}}`

- List only non-forks repositories and limit the number of repositories to list (default: 30):

`gh repo list {{owner}} --source {{[-L|--limit]}} {{limit}}`

- List repositories with a specific primary coding language:

`gh repo list {{owner}} {{[-l|--language]}} {{language_name}}`
