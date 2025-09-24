---
title: "Gitea Interact - Manage Gitea Servers | Online Free DevTools by Hexmos"
name: tea
path: /freedevtools/tldr/common/tea
canonical: "https://hexmos.com/freedevtools/tldr/common/tea/"
description: "Interact with Gitea servers easily using Gitea Interact. Manage repositories, issues, and pull requests from the command line. Free online tool, no registration required."
category: common
keywords:
- Gitea interaction
- Gitea server management
- Gitea command line
- Gitea repository management
- Gitea issue tracker
- Gitea pull request
- tea command
- git server
- software forge
- code hosting
features:
- Log into Gitea servers
- List Gitea repositories
- Manage Gitea issues
- Create new issues
- Open repositories in a browser
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tea

> Interact with Gitea servers.
> More information: <https://gitea.com/gitea/tea>.

- Log into a Gitea server:

`tea login add --name "{{name}}" --url "{{url}}" --token "{{token}}"`

- Display all repositories:

`tea repos ls`

- Display a list of issues:

`tea issues ls`

- Display a list of issues for a specific repository:

`tea issues ls --repo "{{repository}}"`

- Create a new issue:

`tea issues create --title "{{title}}" --body "{{body}}"`

- Display a list of open pull requests:

`tea pulls ls`

- Open the current repository in a browser:

`tea open`
