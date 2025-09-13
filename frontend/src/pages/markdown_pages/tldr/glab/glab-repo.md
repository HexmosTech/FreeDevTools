---
title: "GitLab Repo - Manage Repositories | Free DevTools"
name: glab-repo
path: /freedevtools/tldr/common/glab-repo
canonical: "https://hexmos.com/freedevtools/tldr/common/glab-repo/"
description: "Manage GitLab repositories easily with glab-repo. Create, clone, fork, and view repos from the command line. Free online tool, no registration required."
category: common
keywords:
- GitLab repository management
- glab repo commands
- GitLab command line tool
- Git repository manager
- GitLab repo create
- GitLab repo clone
- GitLab repo fork
- glab search repositories
- GitLab web view repository
- GitLab CLI repo
features:
- Create new GitLab repositories
- Clone existing repositories locally
- Fork repositories into personal namespaces
- View repositories in a web browser
- Search for repositories within a GitLab instance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab repo

> Work with GitLab repositories.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/repo/index.md>.

- Create a new repository (if the repository name is not set, the default name will be the name of the current directory):

`glab repo create {{name}}`

- Clone a repository:

`glab repo clone {{owner}}/{{repository}}`

- Fork and clone a repository:

`glab repo fork {{owner}}/{{repository}} {{[-c|--clone]}}`

- View a repository in the default web browser:

`glab repo view {{owner}}/{{repository}} {{[-w|--web]}}`

- Search some repositories in the GitLab instance:

`glab repo search {{[-s|--search]}} {{search_string}}`
