---
title: "Manage GitLab Issues - View & Create Issues | Online Free DevTools by Hexmos"
name: glab-issue
path: /freedevtools/tldr/glab/glab-issue
canonical: "https://hexmos.com/freedevtools/tldr/glab/glab-issue/"
description: "Manage GitLab issues effectively with Glab Issue manager. Create, view, and list issues seamlessly using command line. Free online tool, no registration required."
category: common
keywords:
- GitLab issue manager
- GitLab issue CLI
- Glab issue command
- GitLab issue tracker
- GitLab bug tracker
- GitLab command line tool
- glab issue list
- glab issue create
- glab issue view
- gitlab
features:
- Display specific GitLab issues by number
- Open GitLab issues in a web browser
- Create new GitLab issues via command line
- List GitLab issues with specific labels
- Reopen closed GitLab issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# glab issue

> Manage GitLab issues.
> More information: <https://gitlab.com/gitlab-org/cli/-/blob/main/docs/source/issue/index.md>.

- Display a specific issue:

`glab issue view {{issue_number}}`

- Display a specific issue in the default web browser:

`glab issue view {{issue_number}} {{[-w|--web]}}`

- Create a new issue in the default web browser:

`glab issue create --web`

- List the last 10 issues with the `bug` label:

`glab issue list {{[-P|--per-page]}} {{10}} {{[-l|--label]}} "{{bug}}"`

- List closed issues made by a specific user:

`glab issue list {{[-c|--closed]}} --author {{username}}`

- Reopen a specific issue:

`glab issue reopen {{issue_number}}`
