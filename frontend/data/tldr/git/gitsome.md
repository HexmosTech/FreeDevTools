---
title: "GitHub Terminal - Control GitHub from Command Line | Online Free DevTools by Hexmos"
name: gitsome
path: "/freedevtools/tldr/git/gitsome/"
canonical: "https://hexmos.com/freedevtools/tldr/git/gitsome/"
description: "Control GitHub from your terminal with Gitsome, the command line interface. Manage notifications, repos, and activity feeds directly. Free online tool, no registration required."
category: common
keywords:
- GitHub command line
- GitHub terminal interface
- GitHub CLI
- Git autocomplete
- GitHub notification manager
- GitHub repo viewer
- GitHub activity feed
- Gitsome
- gh command
- Linux GitHub
features:
- Access and manage GitHub notifications from the terminal
- View GitHub repository activity feeds
- Filter and browse starred repositories using a search string
- Configure GitHub authentication for command-line access
- Enable autocompletion for Git and GitHub commands in the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# gitsome

> A terminal-based interface for GitHub, accessed via the `gh` command.
> It also provides menu-style autocomplete suggestions for `git` commands.
> More information: <https://github.com/donnemartin/gitsome>.

- Enter the gitsome shell (optional), to enable autocompletion and interactive help for Git (and gh) commands:

`gitsome`

- Setup GitHub integration with the current account:

`gh configure`

- List notifications for the current account (as would be seen in <https://github.com/notifications>):

`gh notifications`

- List the current account's starred repos, filtered by a given search string:

`gh starred "{{python 3}}"`

- View the recent activity feed of a given GitHub repository:

`gh feed {{tldr-pages/tldr}}`

- View the recent activity feed for a given GitHub user, using the default pager (e.g. `less`):

`gh feed {{torvalds}} -p`
