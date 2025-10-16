---
title: "GLab MR Create - Manage GitLab Merge Requests | Online Free DevTools by Hexmos"
name: glab-mr-create
path: "/freedevtools/tldr/glab/glab-mr-create/"
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-mr-create/"
description: "Create GitLab merge requests with GLab, the GitLab CLI. Simplify your workflow and manage code reviews efficiently using command-line. Free online tool, no registration required."
category: common
keywords:
- gitlab merge request
- glab merge request create
- git merge request command line
- gitlab cli
- glab cli
- merge request tool
- code review tool
- gitlab workflow automation
- glab workflow
- gitlab merge request automation
features:
- Interactively create merge requests
- Generate title/description from commit messages
- Create draft merge requests
- Specify target branch, title, and description
- Open merge requests in a web browser
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# glab mr create

> Manage GitLab merge requests.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/mr/create.md>.

- Interactively create a merge request:

`glab mr create`

- Create a merge request, determining the title and description from the commit messages of the current branch:

`glab mr create {{[-f|--fill]}}`

- Create a draft merge request:

`glab mr create --draft`

- Create a merge request specifying the target branch, title, and description:

`glab mr create {{[-b|--target-branch]}} {{target_branch}} {{[-t|--title]}} "{{title}}" {{[-d|--description]}} "{{description}}"`

- Start opening a merge request in the default web browser:

`glab mr create {{[-w|--web]}}`
