---
title: "GitLab CLI - Manage GitLab Repositories | Free DevTools"
name: glab
path: /freedevtools/tldr/common/glab
canonical: "https://hexmos.com/freedevtools/tldr/common/glab/"
description: "Manage GitLab repositories seamlessly with GitLab CLI. Clone, create issues, and handle merge requests efficiently. Free online tool, no registration required."
category: common
keywords:
- GitLab CLI
- GitLab command line
- Git repository manager
- GitLab merge request tool
- GitLab issue tracker
- glab clone
- glab issue create
- glab mr create
- GitLab DevOps
- GitLab automation
features:
- Clone GitLab repositories locally
- Create and manage GitLab issues
- Submit and view merge requests
- Checkout specific pull requests
- Integrate GitLab with command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# glab

> Work seamlessly with GitLab.
> Some subcommands such as `config` have their own usage documentation.
> More information: <https://gitlab.com/gitlab-org/cli/-/tree/main/docs/source>.

- Clone a GitLab repository locally:

`glab repo clone {{owner}}/{{repository}}`

- Create a new issue:

`glab issue create`

- View and filter the open issues of the current repository:

`glab issue list`

- View an issue in the default browser:

`glab issue view {{[-w|--web]}} {{issue_number}}`

- Create a merge request:

`glab mr create`

- View a pull request in the default web browser:

`glab mr view {{[-w|--web]}} {{pr_number}}`

- Check out a specific pull request locally:

`glab mr checkout {{pr_number}}`
